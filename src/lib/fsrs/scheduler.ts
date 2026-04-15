/**
 * Wrapper FSRS calibrato per PatenteGo.
 *
 * Incapsula ts-fsrs v5.x dietro un'API a tipi di dominio (string-enum). Tutta
 * la conversione tra rappresentazione interna (numeric enum) e dominio avviene
 * qui: il resto del codice non deve mai importare da 'ts-fsrs'.
 */

import {
  createEmptyCard,
  fsrs,
  Rating as TSRating,
  State as TSState,
  type Card as TSCard,
  type Grade as TSGrade,
  type IFSRS,
} from 'ts-fsrs'

import {
  DEFAULT_FSRS_CONFIG,
  type CardState,
  type FSRSCard,
  type FSRSConfig,
  type Rating,
  type ReviewResult,
} from './types'

const STATE_TO_STRING: Record<TSState, CardState> = {
  [TSState.New]: 'new',
  [TSState.Learning]: 'learning',
  [TSState.Review]: 'review',
  [TSState.Relearning]: 'relearning',
}

const STATE_FROM_STRING: Record<CardState, TSState> = {
  new: TSState.New,
  learning: TSState.Learning,
  review: TSState.Review,
  relearning: TSState.Relearning,
}

const RATING_FROM_STRING: Record<Rating, TSGrade> = {
  again: TSRating.Again,
  hard: TSRating.Hard,
  good: TSRating.Good,
  easy: TSRating.Easy,
}

function toTsCard(card: FSRSCard): TSCard {
  return {
    due: card.due,
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps ?? 0,
    reps: card.reps,
    lapses: card.lapses,
    state: STATE_FROM_STRING[card.state],
    last_review: card.last_review ?? undefined,
  }
}

function fromTsCard(card: TSCard): FSRSCard {
  return {
    due: card.due,
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: STATE_TO_STRING[card.state],
    last_review: card.last_review ?? null,
  }
}

function buildScheduler(config: FSRSConfig): IFSRS {
  return fsrs({
    request_retention: config.desired_retention,
    maximum_interval: config.maximum_interval,
    enable_fuzz: true,
    enable_short_term: true,
  })
}

/**
 * Crea una card FSRS nuova nello stato `new` con due impostato a `now`.
 */
export function createNewCard(now: Date = new Date()): FSRSCard {
  return fromTsCard(createEmptyCard(now))
}

/**
 * Applica una risposta e ritorna la card aggiornata + la data di prossimo ripasso.
 */
export function reviewCard(
  card: FSRSCard,
  rating: Rating,
  now: Date = new Date(),
  config: FSRSConfig = DEFAULT_FSRS_CONFIG,
): ReviewResult {
  const scheduler = buildScheduler(config)
  const { card: nextCard } = scheduler.next(
    toTsCard(card),
    now,
    RATING_FROM_STRING[rating],
  )
  return {
    card: fromTsCard(nextCard),
    next_review: nextCard.due,
    interval_days: nextCard.scheduled_days,
  }
}

/**
 * Data del prossimo ripasso programmato per la card.
 */
export function getNextReviewDate(card: FSRSCard): Date {
  return card.due
}

/**
 * Mastery: state == review && stability >= soglia && reps >= reps_for_mastery.
 * Cards ancora in learning/relearning non sono mai padroneggiate, anche con
 * stability alta (non abbastanza consolidate).
 */
export function isCardMastered(
  card: FSRSCard,
  config: FSRSConfig = DEFAULT_FSRS_CONFIG,
): boolean {
  if (card.state !== 'review') return false
  return (
    card.stability >= config.stability_threshold &&
    card.reps >= config.reps_for_mastery
  )
}

/**
 * Filtra le cards scadute (due <= now) e le ordina per urgenza:
 *   1. maggior ritardo → più in cima (due più lontana nel passato)
 *   2. pareggio → stability più bassa prima (più a rischio di oblio)
 */
export function getDueCards(
  cards: FSRSCard[],
  now: Date = new Date(),
): FSRSCard[] {
  const ts = now.getTime()
  return cards
    .filter((c) => c.due.getTime() <= ts)
    .sort((a, b) => {
      const diff = a.due.getTime() - b.due.getTime()
      if (diff !== 0) return diff
      return a.stability - b.stability
    })
}

/**
 * Probabilità corrente (0-1) di ricordare la card. Per card in stato `new`
 * ritorna 0 (mai testata = ignota = caso peggiore per prioritizzazione).
 */
export function getCardRetrievability(
  card: FSRSCard,
  now: Date = new Date(),
  config: FSRSConfig = DEFAULT_FSRS_CONFIG,
): number {
  if (card.state === 'new' || card.last_review === null) return 0
  const scheduler = buildScheduler(config)
  return scheduler.get_retrievability(toTsCard(card), now, false)
}
