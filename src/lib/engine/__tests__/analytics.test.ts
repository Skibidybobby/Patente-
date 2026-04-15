import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import type { FSRSCard } from '../../fsrs/types'

import {
  getRecommendation,
  getStudyStreak,
  getUserProgress,
  getWeakAreas,
  type CardState,
  type ConceptMeta,
} from '../analytics'
import { createConceptProgress } from '../rotta'
import type { ConceptProgress, QuizItem } from '../types'

function item(concept: string, arg: number): QuizItem {
  return {
    id: `i-${concept}`,
    concetto_id: concept,
    argomento_numero: arg,
    fase_rotta: 'automatizza',
    testo_domanda: '',
    risposta_corretta: true,
    spiegazione: '',
  }
}

function masteredCard(overrides: Partial<FSRSCard> = {}): FSRSCard {
  return {
    stability: 100,
    difficulty: 3,
    elapsed_days: 10,
    scheduled_days: 30,
    reps: 8,
    lapses: 0,
    state: 'review',
    due: new Date('2099-01-01T00:00:00Z'),
    last_review: new Date('2026-01-01T00:00:00Z'),
    ...overrides,
  }
}

describe('getUserProgress', () => {
  it('counts mastered concepts per argomento and globally', () => {
    const concepts: ConceptMeta[] = [
      { id: 'c1', argomento_numero: 1 },
      { id: 'c2', argomento_numero: 1 },
      { id: 'c3', argomento_numero: 2 },
    ]
    const progresses: ConceptProgress[] = [
      { ...createConceptProgress('c1'), current_phase: 'automatizza' },
      { ...createConceptProgress('c2'), current_phase: 'riconosci' },
    ]
    const cardStates: CardState[] = [
      { item: item('c1', 1), card: masteredCard() },
    ]
    const p = getUserProgress(progresses, cardStates, concepts, 10)

    assert.equal(p.concetti_padroneggiati, 1)
    assert.equal(p.concetti_totali, 10)
    assert.equal(p.per_argomento[1].concetti_padroneggiati, 1)
    assert.equal(p.per_argomento[1].concetti_totali, 2)
    assert.equal(p.per_argomento[1].per_fase.automatizza, 1)
    assert.equal(p.per_argomento[1].per_fase.riconosci, 1)
  })
})

describe('getWeakAreas', () => {
  it('sorts by accuracy ascending when responses are provided', () => {
    const weak = getWeakAreas([], [
      { argomento_numero: 1, correct: true },
      { argomento_numero: 1, correct: true },
      { argomento_numero: 2, correct: false },
      { argomento_numero: 2, correct: false },
    ])
    assert.equal(weak[0].argomento_numero, 2)
    assert.equal(weak[0].strength, 0)
    assert.equal(weak[1].argomento_numero, 1)
    assert.equal(weak[1].strength, 1)
  })

  it('falls back to card-based strength (1 − lapses/reps)', () => {
    const cardStates: CardState[] = [
      { item: item('c1', 1), card: masteredCard({ reps: 10, lapses: 5 }) },
      { item: item('c2', 2), card: masteredCard({ reps: 10, lapses: 0 }) },
    ]
    const weak = getWeakAreas(cardStates)
    assert.equal(weak[0].argomento_numero, 1)
    assert.equal(weak[0].strength, 0.5)
  })
})

describe('getStudyStreak', () => {
  it('returns 0 for no sessions', () => {
    assert.equal(getStudyStreak([]), 0)
  })

  it('counts 3 consecutive days ending today', () => {
    const now = new Date(2026, 0, 15, 12, 0, 0)
    const sessions = [
      { started_at: new Date(2026, 0, 15, 9, 0, 0) },
      { started_at: new Date(2026, 0, 14, 20, 0, 0) },
      { started_at: new Date(2026, 0, 13, 18, 0, 0) },
    ]
    assert.equal(getStudyStreak(sessions, now), 3)
  })

  it('breaks the streak if last session is more than 1 day ago', () => {
    const now = new Date(2026, 0, 15, 12, 0, 0)
    const sessions = [{ started_at: new Date(2026, 0, 12, 9, 0, 0) }]
    assert.equal(getStudyStreak(sessions, now), 0)
  })
})

describe('getRecommendation', () => {
  it('prioritizes spaced_review when due cards exist', () => {
    const now = new Date('2026-01-15T00:00:00Z')
    const cardStates: CardState[] = [
      {
        item: item('c1', 1),
        card: masteredCard({
          state: 'review',
          due: new Date('2026-01-10T00:00:00Z'),
        }),
      },
    ]
    const rec = getRecommendation(cardStates, [], [], now)
    assert.equal(rec.type, 'spaced_review')
  })

  it('suggests new_concepts when there are unstarted concepts and nothing due', () => {
    const concepts: ConceptMeta[] = [
      { id: 'c1', argomento_numero: 1 },
      { id: 'c2', argomento_numero: 1 },
    ]
    const rec = getRecommendation([], [], concepts, new Date())
    assert.equal(rec.type, 'new_concepts')
  })

  it('returns idle when nothing to do', () => {
    const concepts: ConceptMeta[] = [{ id: 'c1', argomento_numero: 1 }]
    const progresses: ConceptProgress[] = [
      { ...createConceptProgress('c1'), current_phase: 'automatizza' },
    ]
    const rec = getRecommendation([], progresses, concepts, new Date())
    assert.equal(rec.type, 'idle')
  })
})
