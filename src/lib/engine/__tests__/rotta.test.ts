import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  advancePhase,
  canAdvancePhase,
  createConceptProgress,
  getPhaseItems,
  updateProgressAfterAnswer,
} from '../rotta'
import type { ConceptProgress, QuizItem } from '../types'

function p(overrides: Partial<ConceptProgress> = {}): ConceptProgress {
  return {
    concept_id: 'c1',
    current_phase: 'riconosci',
    phase_items_completed: 0,
    phase_items_correct: 0,
    can_advance: false,
    ...overrides,
  }
}

function item(overrides: Partial<QuizItem> = {}): QuizItem {
  return {
    id: 'i1',
    concetto_id: 'c1',
    argomento_numero: 1,
    fase_rotta: 'riconosci',
    testo_domanda: '?',
    risposta_corretta: true,
    spiegazione: '',
    ...overrides,
  }
}

describe('createConceptProgress', () => {
  it('starts in riconosci with zeroed counters', () => {
    const prog = createConceptProgress('c42')
    assert.equal(prog.concept_id, 'c42')
    assert.equal(prog.current_phase, 'riconosci')
    assert.equal(prog.phase_items_completed, 0)
    assert.equal(prog.can_advance, false)
  })
})

describe('canAdvancePhase', () => {
  it('rejects < 3 attempts in riconosci', () => {
    assert.equal(
      canAdvancePhase(p({ phase_items_completed: 2, phase_items_correct: 2 })),
      false,
    )
  })

  it('accepts ≥3 attempts with ratio ≥ 2/3 in riconosci', () => {
    assert.equal(
      canAdvancePhase(p({ phase_items_completed: 3, phase_items_correct: 2 })),
      true,
    )
  })

  it('rejects 1/3 accuracy in riconosci', () => {
    assert.equal(
      canAdvancePhase(p({ phase_items_completed: 3, phase_items_correct: 1 })),
      false,
    )
  })

  it('accepts ≥1 attempt in origina regardless of accuracy', () => {
    assert.equal(
      canAdvancePhase(
        p({
          current_phase: 'origina',
          phase_items_completed: 1,
          phase_items_correct: 0,
        }),
      ),
      true,
    )
  })

  it('rejects 0 attempts in origina', () => {
    assert.equal(
      canAdvancePhase(p({ current_phase: 'origina' })),
      false,
    )
  })

  it('always rejects in automatizza (terminal phase)', () => {
    assert.equal(
      canAdvancePhase(
        p({
          current_phase: 'automatizza',
          phase_items_completed: 100,
          phase_items_correct: 100,
        }),
      ),
      false,
    )
  })
})

describe('advancePhase', () => {
  it('riconosci → origina and resets counters', () => {
    const next = advancePhase(
      p({ phase_items_completed: 3, phase_items_correct: 3, can_advance: true }),
    )
    assert.equal(next.current_phase, 'origina')
    assert.equal(next.phase_items_completed, 0)
    assert.equal(next.phase_items_correct, 0)
    assert.equal(next.can_advance, false)
  })

  it('walks the full sequence', () => {
    assert.equal(advancePhase(p({ current_phase: 'origina' })).current_phase, 'trappola')
    assert.equal(advancePhase(p({ current_phase: 'trappola' })).current_phase, 'trasferisci')
    assert.equal(
      advancePhase(p({ current_phase: 'trasferisci' })).current_phase,
      'automatizza',
    )
  })

  it('is a no-op in automatizza', () => {
    const prog = p({ current_phase: 'automatizza' })
    assert.equal(advancePhase(prog).current_phase, 'automatizza')
  })
})

describe('updateProgressAfterAnswer', () => {
  it('increments completed + correct on a right answer', () => {
    const next = updateProgressAfterAnswer(p(), true)
    assert.equal(next.phase_items_completed, 1)
    assert.equal(next.phase_items_correct, 1)
  })

  it('increments only completed on a wrong answer', () => {
    const next = updateProgressAfterAnswer(p(), false)
    assert.equal(next.phase_items_completed, 1)
    assert.equal(next.phase_items_correct, 0)
  })

  it('computes can_advance on the resulting state', () => {
    const base = p({ phase_items_completed: 2, phase_items_correct: 2 })
    const next = updateProgressAfterAnswer(base, false)
    assert.equal(next.phase_items_completed, 3)
    assert.equal(next.phase_items_correct, 2)
    assert.equal(next.can_advance, true)
  })
})

describe('getPhaseItems', () => {
  it('filters by concept id and phase', () => {
    const items = [
      item({ id: '1', concetto_id: 'c1', fase_rotta: 'riconosci' }),
      item({ id: '2', concetto_id: 'c1', fase_rotta: 'origina' }),
      item({ id: '3', concetto_id: 'c2', fase_rotta: 'riconosci' }),
    ]
    const out = getPhaseItems('c1', 'riconosci', items)
    assert.equal(out.length, 1)
    assert.equal(out[0].id, '1')
  })
})
