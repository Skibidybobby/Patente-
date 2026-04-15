/**
 * Simulatore d'esame DM 27/10/2021: 30 V/F, 20 minuti, max 3 errori.
 *
 * Il simulatore è indipendente dal R.O.T.T.A. flow: prende una pool di item
 * già studiati (fase Automatizza) e li campiona rispettando la distribuzione
 * ministeriale ~20 primari + ~10 integrativi.
 */

import { getCardRetrievability } from '../fsrs/scheduler'
import type { FSRSCard } from '../fsrs/types'

import type { QuizItem } from './types'

/** Metadata minimale su un argomento ministeriale (forniti da T2/data). */
export interface ArgomentoMeta {
  numero: number
  tipo: 'primario' | 'integrativo'
  /** Peso relativo usato per readiness weighted average; default 1. */
  peso_quiz?: number
}

/** Dimensione esame ministeriale e distribuzione. */
export const EXAM_SIZE = 30
export const EXAM_PRIMARI = 20
export const EXAM_INTEGRATIVI = 10
export const MAX_ERRORS_TO_PASS = 3

export interface ExamSheetOptions {
  argomenti?: ArgomentoMeta[]
  /** Restringe il pool agli item già visti/masterati; default: tutti. */
  seenItemIds?: Set<string>
  /** Dimensione target; default `EXAM_SIZE`. */
  size?: number
  /** RNG iniettabile (test): ritorna un numero in [0,1). Default `Math.random`. */
  rng?: () => number
}

/**
 * Genera un foglio d'esame da 30 item (o `size`) rispettando 20 primari + 10
 * integrativi. Se il pool è insufficiente in una categoria, riempie con
 * l'altra. Se `argomenti` non è fornito, esegue un sample uniforme.
 */
export function generateExamSheet(
  allItems: QuizItem[],
  options: ExamSheetOptions = {},
): QuizItem[] {
  const {
    argomenti,
    seenItemIds,
    size = EXAM_SIZE,
    rng = Math.random,
  } = options

  let pool = allItems
  if (seenItemIds && seenItemIds.size > 0) {
    pool = pool.filter((it) => seenItemIds.has(it.id))
  }
  if (pool.length === 0) return []

  if (!argomenti || argomenti.length === 0) {
    return shuffle(pool, rng).slice(0, size)
  }

  const tipoByArg = new Map<number, ArgomentoMeta['tipo']>()
  for (const a of argomenti) tipoByArg.set(a.numero, a.tipo)

  const primari: QuizItem[] = []
  const integrativi: QuizItem[] = []
  for (const it of pool) {
    const tipo = tipoByArg.get(it.argomento_numero)
    if (tipo === 'primario') primari.push(it)
    else if (tipo === 'integrativo') integrativi.push(it)
  }

  const primariTarget = Math.round(size * (EXAM_PRIMARI / EXAM_SIZE))
  const integrativiTarget = size - primariTarget

  const picked: QuizItem[] = []
  const primariShuf = shuffle(primari, rng)
  const integrativiShuf = shuffle(integrativi, rng)
  picked.push(...primariShuf.slice(0, primariTarget))
  picked.push(...integrativiShuf.slice(0, integrativiTarget))

  // Fill shortfalls cross-category so l'esame resta a `size`
  if (picked.length < size) {
    const remaining = size - picked.length
    const leftovers: QuizItem[] = []
    if (primariShuf.length > primariTarget) {
      leftovers.push(...primariShuf.slice(primariTarget))
    }
    if (integrativiShuf.length > integrativiTarget) {
      leftovers.push(...integrativiShuf.slice(integrativiTarget))
    }
    picked.push(...shuffle(leftovers, rng).slice(0, remaining))
  }

  return shuffle(picked, rng)
}

export interface ExamAnswer {
  item: QuizItem
  user_answer: boolean
  tempo_ms: number
}

export interface ExamResult {
  promosso: boolean
  errori_totali: number
  errori_per_argomento: Record<number, number>
  tempo_totale_secondi: number
  tempo_medio_per_item_ms: number
}

/**
 * Valuta un foglio risposte: calcola errori, tempi, e verdetto promosso/bocciato.
 * Promosso = errori_totali ≤ `MAX_ERRORS_TO_PASS`.
 */
export function evaluateExam(answers: ExamAnswer[]): ExamResult {
  let errori_totali = 0
  const errori_per_argomento: Record<number, number> = {}
  let tempo_totale_ms = 0

  for (const a of answers) {
    tempo_totale_ms += a.tempo_ms
    if (a.user_answer !== a.item.risposta_corretta) {
      errori_totali += 1
      const arg = a.item.argomento_numero
      errori_per_argomento[arg] = (errori_per_argomento[arg] ?? 0) + 1
    }
  }

  const tempo_totale_secondi = Math.floor(tempo_totale_ms / 1000)
  const tempo_medio_per_item_ms =
    answers.length > 0 ? Math.floor(tempo_totale_ms / answers.length) : 0

  return {
    promosso: errori_totali <= MAX_ERRORS_TO_PASS,
    errori_totali,
    errori_per_argomento,
    tempo_totale_secondi,
    tempo_medio_per_item_ms,
  }
}

/**
 * Stima la probabilità di superare l'esame come media pesata di retrievability
 * FSRS per argomento. Argomenti senza card studiate non contribuiscono.
 * Ritorna un valore in [0, 1].
 */
export function estimateReadiness(
  cardStates: Array<{ item: QuizItem; card: FSRSCard }>,
  argomenti: ArgomentoMeta[] = [],
  now: Date = new Date(),
): number {
  if (cardStates.length === 0) return 0

  const byArg = new Map<number, number[]>()
  for (const { item, card } of cardStates) {
    const r = getCardRetrievability(card, now)
    const arr = byArg.get(item.argomento_numero) ?? []
    arr.push(r)
    byArg.set(item.argomento_numero, arr)
  }

  const metaByNum = new Map(argomenti.map((a) => [a.numero, a]))

  let weightedSum = 0
  let totalWeight = 0
  for (const [argNum, retrievabilities] of byArg) {
    const avgR =
      retrievabilities.reduce((a, b) => a + b, 0) / retrievabilities.length
    const weight = metaByNum.get(argNum)?.peso_quiz ?? 1
    weightedSum += avgR * weight
    totalWeight += weight
  }

  return totalWeight > 0 ? weightedSum / totalWeight : 0
}

// ---------------------------------------------------------------------------
// Helpers

/**
 * Fisher-Yates shuffle puro (non muta l'input), con RNG iniettabile per tests.
 */
function shuffle<T>(arr: readonly T[], rng: () => number): T[] {
  const out = arr.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
