/**
 * Tipi di dominio per il sistema di ripetizione spaziata (FSRS).
 *
 * Gli enum sono esposti come literal string così che serializzazione JSON
 * e persistenza su Supabase restino triviali (niente numeric enum interni a ts-fsrs
 * che trapelino oltre il wrapper scheduler).
 */

export type CardState = 'new' | 'learning' | 'review' | 'relearning'

export type Rating = 'again' | 'hard' | 'good' | 'easy'

export interface FSRSCard {
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  reps: number
  lapses: number
  state: CardState
  due: Date
  last_review: Date | null
  /**
   * ts-fsrs v5 traccia gli step di (re)learning. Opzionale qui per permettere
   * round-trip verso DB legacy senza il campo. Default 0 su hydrate.
   */
  learning_steps?: number
}

export interface ReviewResult {
  card: FSRSCard
  next_review: Date
  interval_days: number
}

export interface FSRSConfig {
  /** Retention target (0.80-0.95). Default 0.90; 0.92-0.93 per esame <45gg. */
  desired_retention: number
  /** Intervallo massimo in giorni tra due ripassi. */
  maximum_interval: number
  /** Ripetizioni positive minime per considerare un concetto padroneggiato. */
  reps_for_mastery: number
  /** Soglia di stability (giorni) oltre la quale una card è padroneggiata. */
  stability_threshold: number
}

export const DEFAULT_FSRS_CONFIG: FSRSConfig = {
  desired_retention: 0.9,
  maximum_interval: 365,
  reps_for_mastery: 5,
  stability_threshold: 60,
}
