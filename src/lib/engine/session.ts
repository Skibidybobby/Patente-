/**
 * Session manager R.O.T.T.A.: crea sessioni, seleziona il prossimo item,
 * registra risposte, chiude sessioni con summary.
 *
 * Tutte le funzioni sono pure rispetto a `SessionState` e ritornano nuove
 * istanze (pattern immutabile). La persistenza è a carico del chiamante.
 */

import { reviewCard } from '../fsrs/scheduler'
import type { FSRSCard, Rating } from '../fsrs/types'

import {
  advancePhase,
  getPhaseItems,
  updateProgressAfterAnswer,
} from './rotta'
import type {
  AnswerResult,
  ConceptProgress,
  FaseRotta,
  QuizItem,
  SessionOptions,
  SessionState,
  SessionSummary,
} from './types'

/** Soglia sotto la quale una risposta corretta viene mappata a Rating=Easy. */
export const FAST_ANSWER_THRESHOLD_MS = 5000

/** Dimensione fissa di una sessione di simulazione (esame reale). */
export const EXAM_SIZE = 30

/** Pair (quiz_item_id, FSRSCard) ordinato per urgenza. */
export interface DueCard {
  quiz_item_id: string
  card: FSRSCard
}

/**
 * Crea una nuova sessione di studio o simulazione.
 */
export function createSession(
  userId: string,
  options: SessionOptions,
  now: Date = new Date(),
): SessionState {
  return {
    id: generateSessionId(),
    user_id: userId,
    options,
    items_presented: [],
    items_correct: 0,
    items_total: 0,
    argomenti_used: new Set(),
    errori_per_argomento: new Map(),
    concetti_avanzati: [],
    started_at: now,
  }
}

/**
 * Seleziona il prossimo item da presentare, o `null` se la sessione è finita.
 *
 * Priorità (modalità `studio`):
 *   1. Cards FSRS scadute ancora non mostrate (spaced repetition).
 *   2. Nuovi item nelle fasi R.O.T.T.A. in corso.
 *   3. Interleaving: preferisce argomenti diversi dall'ultimo mostrato e da
 *      quelli già usati nella sessione (≥3 macro-aree obiettivo).
 *
 * In modalità `simulazione` ritorna gli item nell'ordine di `allItems`,
 * pre-generato dal `simulator`, senza logica R.O.T.T.A. o interleaving.
 */
export function selectNextItem(
  session: SessionState,
  dueCards: DueCard[],
  conceptProgresses: Map<string, ConceptProgress>,
  allItems: QuizItem[],
): QuizItem | null {
  const presented = new Set(session.items_presented)
  const itemById = new Map(allItems.map((it) => [it.id, it]))

  if (session.options.modalita === 'simulazione') {
    if (session.items_total >= EXAM_SIZE) return null
    return allItems.find((it) => !presented.has(it.id)) ?? null
  }

  const focus = session.options.argomenti_focus
  const inFocus = (it: QuizItem) =>
    !focus || focus.length === 0 || focus.includes(it.argomento_numero)

  // 1) Due cards still unseen in this session
  const dueCandidates: QuizItem[] = []
  for (const dc of dueCards) {
    if (presented.has(dc.quiz_item_id)) continue
    const item = itemById.get(dc.quiz_item_id)
    if (!item || !inFocus(item)) continue
    dueCandidates.push(item)
  }
  if (dueCandidates.length > 0) {
    return pickBestCandidate(dueCandidates, session, itemById)
  }

  // 2) New items for concepts still in a R.O.T.T.A. phase
  const newCandidates: QuizItem[] = []
  for (const progress of conceptProgresses.values()) {
    if (progress.current_phase === 'automatizza') continue
    const phaseItems = getPhaseItems(
      progress.concept_id,
      progress.current_phase,
      allItems,
    )
    for (const item of phaseItems) {
      if (presented.has(item.id)) continue
      if (!inFocus(item)) continue
      newCandidates.push(item)
    }
  }

  if (newCandidates.length === 0) return null
  return pickBestCandidate(newCandidates, session, itemById)
}

/**
 * Registra una risposta a un item. Pura: ritorna lo stato nuovo senza mutare
 * gli input. Il chiamante è responsabile di persistere session/card/progress.
 */
export interface RecordAnswerInput {
  session: SessionState
  item: QuizItem
  currentCard: FSRSCard
  progress: ConceptProgress
  answer: boolean
  tempoMs: number
  now?: Date
}

export interface RecordAnswerOutput {
  result: AnswerResult
  session: SessionState
  card: FSRSCard
  progress: ConceptProgress
}

export function recordAnswer(input: RecordAnswerInput): RecordAnswerOutput {
  const {
    session,
    item,
    currentCard,
    progress,
    answer,
    tempoMs,
    now = new Date(),
  } = input

  const corretta = answer === item.risposta_corretta

  const rating = mapAnswerToRating(item.fase_rotta, corretta, tempoMs)
  const fsrs_update = reviewCard(currentCard, rating, now)

  const progressWithAnswer = updateProgressAfterAnswer(progress, corretta)
  const phase_advanced = progressWithAnswer.can_advance
  const nextProgress = phase_advanced
    ? advancePhase(progressWithAnswer)
    : progressWithAnswer

  const nextArgUsed = new Set(session.argomenti_used)
  nextArgUsed.add(item.argomento_numero)

  const nextErrori = new Map(session.errori_per_argomento)
  if (!corretta) {
    nextErrori.set(
      item.argomento_numero,
      (nextErrori.get(item.argomento_numero) ?? 0) + 1,
    )
  }

  const nextConcettiAvanzati = phase_advanced
    ? [...session.concetti_avanzati, item.concetto_id]
    : session.concetti_avanzati

  const nextSession: SessionState = {
    ...session,
    items_presented: [...session.items_presented, item.id],
    items_correct: session.items_correct + (corretta ? 1 : 0),
    items_total: session.items_total + 1,
    argomenti_used: nextArgUsed,
    errori_per_argomento: nextErrori,
    concetti_avanzati: nextConcettiAvanzati,
  }

  const result: AnswerResult = {
    corretta,
    spiegazione: item.spiegazione,
    pattern_trappola: item.pattern_trappola,
    fsrs_update,
    phase_advanced,
  }

  return {
    result,
    session: nextSession,
    card: fsrs_update.card,
    progress: nextProgress,
  }
}

/**
 * Chiude la sessione e produce il riepilogo.
 */
export function endSession(
  session: SessionState,
  now: Date = new Date(),
): SessionSummary {
  const durataMs = Math.max(0, now.getTime() - session.started_at.getTime())
  const durata_secondi = Math.floor(durataMs / 1000)
  const tempo_medio_per_item_ms =
    session.items_total > 0 ? Math.floor(durataMs / session.items_total) : 0
  const percentuale =
    session.items_total > 0
      ? (session.items_correct / session.items_total) * 100
      : 0

  const errori_per_argomento: Record<number, number> = {}
  for (const [arg, n] of session.errori_per_argomento) {
    errori_per_argomento[arg] = n
  }

  return {
    items_total: session.items_total,
    items_correct: session.items_correct,
    percentuale,
    durata_secondi,
    tempo_medio_per_item_ms,
    errori_per_argomento,
    argomenti_mescolati: Array.from(session.argomenti_used).sort((a, b) => a - b),
    fasi_avanzate: session.concetti_avanzati.slice(),
  }
}

// ---------------------------------------------------------------------------
// Helpers interni

/**
 * Mappa (fase, correttezza, tempo) → Rating FSRS.
 * - Origina: sempre 'good' (productive failure: nessuna penalità d'errore).
 * - Altre fasi: 'again' su errore, 'easy' se corretto-veloce, 'good' altrimenti.
 */
function mapAnswerToRating(
  phase: FaseRotta,
  correct: boolean,
  tempoMs: number,
): Rating {
  if (phase === 'origina') return 'good'
  if (!correct) return 'again'
  if (tempoMs < FAST_ANSWER_THRESHOLD_MS) return 'easy'
  return 'good'
}

/**
 * Sceglie il miglior candidato applicando interleaving:
 *   1. Evita argomenti uguali all'ultimo item presentato.
 *   2. Tra i restanti, preferisce l'argomento meno usato nella sessione.
 *   3. Tiebreak stabile: primo in ordine lista.
 */
function pickBestCandidate(
  candidates: QuizItem[],
  session: SessionState,
  itemById: Map<string, QuizItem>,
): QuizItem {
  const presented = session.items_presented
  const lastArg =
    presented.length > 0
      ? itemById.get(presented[presented.length - 1])?.argomento_numero
      : undefined

  const argCount = new Map<number, number>()
  for (const id of presented) {
    const arg = itemById.get(id)?.argomento_numero
    if (arg !== undefined) argCount.set(arg, (argCount.get(arg) ?? 0) + 1)
  }

  let best = candidates[0]
  let bestScore = Number.POSITIVE_INFINITY
  for (const c of candidates) {
    const usedCount = argCount.get(c.argomento_numero) ?? 0
    const repeatPenalty = c.argomento_numero === lastArg ? 100 : 0
    const score = repeatPenalty + usedCount
    if (score < bestScore) {
      bestScore = score
      best = c
    }
  }
  return best
}

function generateSessionId(): string {
  return crypto.randomUUID()
}
