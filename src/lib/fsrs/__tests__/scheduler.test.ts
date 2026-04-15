import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  createNewCard,
  getCardRetrievability,
  getDueCards,
  isCardMastered,
  reviewCard,
} from '../scheduler'
import type { FSRSCard } from '../types'

function makeCard(overrides: Partial<FSRSCard> = {}): FSRSCard {
  return {
    stability: 10,
    difficulty: 5,
    elapsed_days: 0,
    scheduled_days: 1,
    reps: 1,
    lapses: 0,
    state: 'review',
    due: new Date('2026-04-15T00:00:00Z'),
    last_review: new Date('2026-04-14T00:00:00Z'),
    learning_steps: 0,
    ...overrides,
  }
}

describe('createNewCard', () => {
  it('returns a card in state "new" with zeroed counters', () => {
    const card = createNewCard()
    assert.equal(card.state, 'new')
    assert.equal(card.reps, 0)
    assert.equal(card.lapses, 0)
    assert.equal(card.last_review, null)
  })
})

describe('reviewCard', () => {
  it('moves a new card out of "new" state on Good', () => {
    const card = createNewCard(new Date('2026-01-01T00:00:00Z'))
    const result = reviewCard(card, 'good', new Date('2026-01-01T00:00:00Z'))
    assert.notEqual(result.card.state, 'new')
    assert.ok(result.card.reps >= 1)
    assert.ok(result.interval_days >= 0)
  })

  it('increments lapses on Again for a review-state card', () => {
    const card = makeCard({
      state: 'review',
      reps: 5,
      lapses: 0,
      stability: 100,
    })
    const result = reviewCard(card, 'again', new Date('2026-05-01T00:00:00Z'))
    assert.ok(result.card.lapses > card.lapses)
  })
})

describe('isCardMastered', () => {
  it('is false for new cards regardless of stability', () => {
    assert.equal(isCardMastered(makeCard({ state: 'new', stability: 999, reps: 10 })), false)
  })

  it('is false when stability is below the threshold', () => {
    assert.equal(isCardMastered(makeCard({ state: 'review', stability: 30, reps: 10 })), false)
  })

  it('is false when reps are below the mastery minimum', () => {
    assert.equal(isCardMastered(makeCard({ state: 'review', stability: 100, reps: 2 })), false)
  })

  it('is true when review-state + high stability + enough reps', () => {
    assert.equal(isCardMastered(makeCard({ state: 'review', stability: 100, reps: 10 })), true)
  })
})

describe('getDueCards', () => {
  it('filters out cards due in the future', () => {
    const now = new Date('2026-01-15T00:00:00Z')
    const past = makeCard({ due: new Date('2026-01-10T00:00:00Z') })
    const future = makeCard({ due: new Date('2026-01-20T00:00:00Z') })
    const result = getDueCards([past, future], now)
    assert.equal(result.length, 1)
    assert.equal(result[0], past)
  })

  it('orders the most overdue first', () => {
    const now = new Date('2026-01-15T00:00:00Z')
    const mild = makeCard({ due: new Date('2026-01-14T00:00:00Z') })
    const severe = makeCard({ due: new Date('2026-01-01T00:00:00Z') })
    const result = getDueCards([mild, severe], now)
    assert.equal(result[0], severe)
    assert.equal(result[1], mild)
  })
})

describe('getCardRetrievability', () => {
  it('returns 0 for a brand-new card', () => {
    assert.equal(getCardRetrievability(createNewCard()), 0)
  })

  it('returns a value in [0, 1] for a reviewed card', () => {
    const card = makeCard({
      state: 'review',
      stability: 30,
      reps: 5,
      last_review: new Date('2026-01-01T00:00:00Z'),
    })
    const r = getCardRetrievability(card, new Date('2026-01-10T00:00:00Z'))
    assert.ok(r >= 0 && r <= 1)
  })
})
