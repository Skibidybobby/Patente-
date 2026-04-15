/**
 * PatenteGo — tipi di dominio per il metodo R.O.T.T.A. e configurazione esame.
 *
 * Questi tipi sono condivisi da tutti gli agenti (T2 contenuti, T3 engine,
 * T4 UI). Gli stessi valori testuali sono replicati nei CHECK constraint
 * della migrazione SQL — tenerli allineati.
 */

/** Le 5 fasi sequenziali del metodo R.O.T.T.A. */
export type FaseRotta =
  | 'riconosci'
  | 'origina'
  | 'trappola'
  | 'trasferisci'
  | 'automatizza'

export const FASI_ROTTA = [
  'riconosci',
  'origina',
  'trappola',
  'trasferisci',
  'automatizza',
] as const satisfies readonly FaseRotta[]

export type TipoArgomento = 'primario' | 'integrativo'

export type ModalitaSessione = 'studio' | 'simulazione'

/** Stato FSRS (Free Spaced Repetition Scheduler). */
export type CardState = 'new' | 'learning' | 'review' | 'relearning'

/** Rating di una risposta per alimentare FSRS. */
export type RatingFsrs = 'again' | 'hard' | 'good' | 'easy'

/**
 * Pattern trappola P01-P18 dalla tassonomia in
 * `docs/research/03-pattern-trappole.md`.
 * Il template-literal accetta qualsiasi stringa `P<digits>` — validare
 * il range a livello dati, non a livello tipo.
 */
export type PatternTrappola = `P${string}`

/** Pattern folkloristici F01-F05 (usati come badge, MAI come stampi). */
export type PatternFolklore = `F${string}`

/** Configurazione dell'esame teorico ministeriale. */
export interface ConfigEsame {
  /** Durata in minuti dell'esame. */
  durata_minuti: number
  /** Numero di quesiti V/F. */
  numero_domande: number
  /** Numero massimo di errori ammessi per essere promossi. */
  max_errori: number
}

/** Parametri dell'esame teorico patente B 2026 (DM 27/10/2021). */
export const CONFIG_ESAME_REALE: ConfigEsame = {
  durata_minuti: 20,
  numero_domande: 30,
  max_errori: 3,
} as const

/** Range valido del parametro `desired_retention` in FSRS. */
export const DESIRED_RETENTION_MIN = 0.8
export const DESIRED_RETENTION_MAX = 0.99
export const DESIRED_RETENTION_DEFAULT = 0.9

/** Soglie base per la calibrazione (possono essere sovrascritte da T2/T3). */
export const CALIBRATION_BASELINE = {
  reps_for_mastery: 5,
  stability_threshold_days: 60,
  initial_interval_days: 1,
  min_interleaving_areas: 3,
  items_per_concept_target: 12,
} as const
