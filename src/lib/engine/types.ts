/**
 * Tipi di dominio per l'engine R.O.T.T.A.
 *
 * R.O.T.T.A. = Riconosci, Origina, Trappola, Trasferisci, Automatizza.
 * Ogni concetto attraversa le 5 fasi in sequenza. La fase Automatizza
 * delega la padronanza al ciclo FSRS.
 */

import type { ReviewResult } from '../fsrs/types'

export type FaseRotta =
  | 'riconosci'
  | 'origina'
  | 'trappola'
  | 'trasferisci'
  | 'automatizza'

export type ModalitaSessione = 'studio' | 'simulazione'

export interface ConceptProgress {
  concept_id: string
  current_phase: FaseRotta
  phase_items_completed: number
  phase_items_correct: number
  /**
   * Derivato: true se i criteri di avanzamento alla fase successiva sono
   * soddisfatti. Aggiornato tramite `updateProgressAfterAnswer` o ricalcolato
   * con `canAdvancePhase(progress)`.
   */
  can_advance: boolean
}

export interface SessionOptions {
  durata_target_minuti: number
  /** Numeri argomento (1-25). Se assente, la sessione usa tutti gli argomenti. */
  argomenti_focus?: number[]
  modalita: ModalitaSessione
}

export interface SessionState {
  id: string
  user_id: string
  options: SessionOptions
  items_presented: string[]
  items_correct: number
  items_total: number
  argomenti_used: Set<number>
  started_at: Date
}

/**
 * Quiz item nella forma usata dall'engine. Estende lo schema DB di T1 con
 * `argomento_numero` (pre-join) così che il session manager possa garantire
 * interleaving (≥3 macro-aree) senza bisogno di una lookup concept→argomento.
 */
export interface QuizItem {
  id: string
  concetto_id: string
  argomento_numero: number
  fase_rotta: FaseRotta
  testo_domanda: string
  risposta_corretta: boolean
  spiegazione: string
  pattern_trappola?: string
  scenario_transfer?: string
}

export interface AnswerResult {
  corretta: boolean
  spiegazione: string
  pattern_trappola?: string
  fsrs_update: ReviewResult
  phase_advanced: boolean
}

export interface SessionSummary {
  items_total: number
  items_correct: number
  percentuale: number
  durata_secondi: number
  tempo_medio_per_item_ms: number
  errori_per_argomento: Record<number, number>
  argomenti_mescolati: number[]
  /** Concept id delle fasi avanzate durante la sessione. */
  fasi_avanzate: string[]
}
