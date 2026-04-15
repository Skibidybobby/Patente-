/**
 * Analytics engine: aggrega sessioni, cards FSRS e concept progress per
 * fornire metriche pronte per la dashboard (progresso, streak, readiness,
 * aree deboli, recommendation).
 *
 * Tutte le funzioni sono pure: il chiamante fornisce i dati, analytics
 * produce numeri. Nessuna dipendenza da DB o I/O.
 */

import { getCardRetrievability, isCardMastered } from '../fsrs/scheduler'
import type { FSRSCard } from '../fsrs/types'

import { estimateReadiness, type ArgomentoMeta } from './simulator'
import type { ConceptProgress, FaseRotta, QuizItem } from './types'

/** Metadata minimale di un concetto per le aggregazioni analitiche. */
export interface ConceptMeta {
  id: string
  argomento_numero: number
}

export interface ArgomentoProgress {
  concetti_padroneggiati: number
  concetti_totali: number
  per_fase: Record<FaseRotta, number>
}

export interface UserProgress {
  concetti_padroneggiati: number
  concetti_totali: number
  percentuale_globale: number
  per_argomento: Record<number, ArgomentoProgress>
}

export interface CardState {
  item: QuizItem
  card: FSRSCard
}

/** Default tasso di copertura (25 argomenti × ~13 concetti atomici). */
export const DEFAULT_TOTAL_CONCEPTS = 330

/**
 * Progresso globale dell'utente:
 *   - `concetti_padroneggiati` / `concetti_totali`
 *   - breakdown per argomento (padronanza + distribuzione fasi R.O.T.T.A.)
 *
 * Un concetto è "padroneggiato" quando il suo ConceptProgress è in fase
 * `automatizza` E almeno una delle sue card FSRS soddisfa `isCardMastered`.
 */
export function getUserProgress(
  conceptProgresses: ConceptProgress[],
  cardStates: CardState[],
  concepts: ConceptMeta[],
  totalConcepts: number = DEFAULT_TOTAL_CONCEPTS,
): UserProgress {
  const progressById = new Map(
    conceptProgresses.map((p) => [p.concept_id, p]),
  )

  const cardsByConcept = new Map<string, FSRSCard[]>()
  for (const { item, card } of cardStates) {
    const arr = cardsByConcept.get(item.concetto_id) ?? []
    arr.push(card)
    cardsByConcept.set(item.concetto_id, arr)
  }

  const conceptsByArg = new Map<number, ConceptMeta[]>()
  for (const c of concepts) {
    const arr = conceptsByArg.get(c.argomento_numero) ?? []
    arr.push(c)
    conceptsByArg.set(c.argomento_numero, arr)
  }

  const per_argomento: Record<number, ArgomentoProgress> = {}
  let masteredGlobal = 0

  for (const [argNum, argConcepts] of conceptsByArg) {
    let masteredInArg = 0
    const per_fase: Record<FaseRotta, number> = {
      riconosci: 0,
      origina: 0,
      trappola: 0,
      trasferisci: 0,
      automatizza: 0,
    }

    for (const c of argConcepts) {
      const p = progressById.get(c.id)
      if (p) per_fase[p.current_phase] += 1
      if (isConceptMastered(c.id, progressById, cardsByConcept)) {
        masteredInArg += 1
      }
    }

    per_argomento[argNum] = {
      concetti_padroneggiati: masteredInArg,
      concetti_totali: argConcepts.length,
      per_fase,
    }
    masteredGlobal += masteredInArg
  }

  const percentuale_globale =
    totalConcepts > 0 ? (masteredGlobal / totalConcepts) * 100 : 0

  return {
    concetti_padroneggiati: masteredGlobal,
    concetti_totali: totalConcepts,
    percentuale_globale,
    per_argomento,
  }
}

export interface WeakArea {
  argomento_numero: number
  /** Accuracy se `responses` fornite; altrimenti strength card-based in [0, 1]. */
  strength: number
  n_samples: number
}

export interface ResponseLog {
  argomento_numero: number
  correct: boolean
}

/**
 * Argomenti con strength più bassa, ordinati crescente (peggiori per primi).
 *
 * - Se `responses` è fornito: strength = accuracy (correct / total) sugli ultimi N.
 * - Altrimenti: strength card-based = 1 − lapses/max(reps, 1), mediata per argomento.
 */
export function getWeakAreas(
  cardStates: CardState[],
  responses?: ResponseLog[],
  limit: number = 5,
): WeakArea[] {
  const result = new Map<number, { score_sum: number; n: number }>()

  if (responses && responses.length > 0) {
    for (const r of responses) {
      const slot = result.get(r.argomento_numero) ?? { score_sum: 0, n: 0 }
      slot.score_sum += r.correct ? 1 : 0
      slot.n += 1
      result.set(r.argomento_numero, slot)
    }
  } else {
    for (const { item, card } of cardStates) {
      const reps = Math.max(card.reps, 1)
      const strength = Math.max(0, 1 - card.lapses / reps)
      const slot = result.get(item.argomento_numero) ?? { score_sum: 0, n: 0 }
      slot.score_sum += strength
      slot.n += 1
      result.set(item.argomento_numero, slot)
    }
  }

  const areas: WeakArea[] = []
  for (const [arg, { score_sum, n }] of result) {
    if (n === 0) continue
    areas.push({
      argomento_numero: arg,
      strength: score_sum / n,
      n_samples: n,
    })
  }

  areas.sort((a, b) => a.strength - b.strength)
  return areas.slice(0, limit)
}

/**
 * Numero di giorni consecutivi con almeno una sessione, terminando a oggi o
 * ieri. Se l'ultima sessione è >1 giorno fa, la streak è 0 (spezzata).
 * Basato su data locale (non UTC) così che il "giorno" matchi l'intuizione utente.
 */
export function getStudyStreak(
  sessions: Array<{ started_at: Date }>,
  now: Date = new Date(),
): number {
  if (sessions.length === 0) return 0

  const dateKey = (d: Date): string =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

  const days = new Set(sessions.map((s) => dateKey(s.started_at)))
  const sortedDesc = [...days].sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))

  const today = dateKey(now)
  const yesterday = dateKey(new Date(now.getTime() - 86_400_000))

  if (sortedDesc[0] !== today && sortedDesc[0] !== yesterday) return 0

  let streak = 1
  let cursor = new Date(sortedDesc[0] + 'T00:00:00')
  for (let i = 1; i < sortedDesc.length; i++) {
    const prev = new Date(cursor.getTime() - 86_400_000)
    if (dateKey(prev) === sortedDesc[i]) {
      streak += 1
      cursor = prev
    } else {
      break
    }
  }
  return streak
}

/**
 * Alias conveniente sulla funzione `simulator.estimateReadiness`, esposta
 * dall'analytics per uniformità (UI importa tutto da un unico modulo).
 */
export function getEstimatedReadiness(
  cardStates: CardState[],
  argomenti: ArgomentoMeta[] = [],
  now: Date = new Date(),
): number {
  return estimateReadiness(cardStates, argomenti, now)
}

export type Recommendation =
  | { type: 'spaced_review'; due_count: number }
  | { type: 'weak_areas'; argomenti: number[] }
  | { type: 'new_concepts'; concept_ids: string[] }
  | { type: 'idle' }

/**
 * Raccomandazione operativa "cosa studiare oggi":
 *   1. Cards FSRS scadute (spaced rep, priorità assoluta)
 *   2. Aree deboli (accuracy / strength bassa)
 *   3. Concetti nuovi (non ancora iniziati)
 *   4. Idle: tutto in pari
 */
export function getRecommendation(
  cardStates: CardState[],
  conceptProgresses: ConceptProgress[],
  concepts: ConceptMeta[],
  now: Date = new Date(),
): Recommendation {
  const dueCount = cardStates.filter(
    ({ card }) => card.due.getTime() <= now.getTime() && card.state !== 'new',
  ).length
  if (dueCount > 0) {
    return { type: 'spaced_review', due_count: dueCount }
  }

  const weak = getWeakAreas(cardStates, undefined, 3).filter(
    (w) => w.strength < 0.7,
  )
  if (weak.length > 0) {
    return {
      type: 'weak_areas',
      argomenti: weak.map((w) => w.argomento_numero),
    }
  }

  const startedIds = new Set(conceptProgresses.map((p) => p.concept_id))
  const unstartedIds = concepts
    .filter((c) => !startedIds.has(c.id))
    .map((c) => c.id)
  if (unstartedIds.length > 0) {
    return { type: 'new_concepts', concept_ids: unstartedIds.slice(0, 5) }
  }

  return { type: 'idle' }
}

// ---------------------------------------------------------------------------
// Helpers

function isConceptMastered(
  conceptId: string,
  progressById: Map<string, ConceptProgress>,
  cardsByConcept: Map<string, FSRSCard[]>,
): boolean {
  const p = progressById.get(conceptId)
  if (!p || p.current_phase !== 'automatizza') return false
  const cards = cardsByConcept.get(conceptId) ?? []
  if (cards.length === 0) return false
  return cards.some((c) => isCardMastered(c))
}
