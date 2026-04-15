import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { createNewCard } from '../../fsrs/scheduler'

import {
  EXAM_SIZE,
  estimateReadiness,
  evaluateExam,
  generateExamSheet,
  type ArgomentoMeta,
  type ExamAnswer,
} from '../simulator'
import type { QuizItem } from '../types'

function item(id: string, arg: number): QuizItem {
  return {
    id,
    concetto_id: `c-${arg}`,
    argomento_numero: arg,
    fase_rotta: 'automatizza',
    testo_domanda: '?',
    risposta_corretta: true,
    spiegazione: '',
  }
}

/** Deterministic mulberry32 RNG so tests don't flake on shuffle. */
function seedRng(seed: number): () => number {
  let state = seed | 0
  return () => {
    state = (state + 0x6d2b79f5) | 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

describe('generateExamSheet', () => {
  it('returns EXAM_SIZE items when the pool is large enough', () => {
    const pool = Array.from({ length: 100 }, (_, i) => item(`i${i}`, (i % 25) + 1))
    const sheet = generateExamSheet(pool, { rng: seedRng(1) })
    assert.equal(sheet.length, EXAM_SIZE)
  })

  it('respects the 20 primari + 10 integrativi split when argomenti are given', () => {
    const argomenti: ArgomentoMeta[] = [
      ...Array.from({ length: 15 }, (_, i) => ({
        numero: i + 1,
        tipo: 'primario' as const,
      })),
      ...Array.from({ length: 10 }, (_, i) => ({
        numero: i + 16,
        tipo: 'integrativo' as const,
      })),
    ]
    const pool: QuizItem[] = []
    for (const a of argomenti) {
      for (let k = 0; k < 5; k++) pool.push(item(`i-${a.numero}-${k}`, a.numero))
    }
    const sheet = generateExamSheet(pool, { argomenti, rng: seedRng(42) })
    assert.equal(sheet.length, EXAM_SIZE)
    const primariN = sheet.filter((s) => s.argomento_numero <= 15).length
    const integrativiN = sheet.filter((s) => s.argomento_numero > 15).length
    assert.equal(primariN, 20)
    assert.equal(integrativiN, 10)
  })

  it('filters by seenItemIds', () => {
    const pool = Array.from({ length: 50 }, (_, i) => item(`i${i}`, 1))
    const seen = new Set(['i0', 'i1', 'i2'])
    const sheet = generateExamSheet(pool, { seenItemIds: seen, size: 10 })
    assert.ok(sheet.every((s) => seen.has(s.id)))
    assert.equal(sheet.length, 3)
  })

  it('returns an empty sheet when the pool is empty', () => {
    assert.deepEqual(generateExamSheet([]), [])
  })
})

describe('evaluateExam', () => {
  function ans(correct: boolean, arg: number): ExamAnswer {
    return {
      item: item('i', arg),
      user_answer: correct,
      tempo_ms: 1000,
    }
  }

  it('promosso=true with ≤3 errors', () => {
    const answers = [
      ans(true, 1),
      ans(true, 2),
      ans(true, 3),
      ans(false, 4),
      ans(false, 5),
      ans(false, 6),
      ans(true, 7),
    ]
    const r = evaluateExam(answers)
    assert.equal(r.errori_totali, 3)
    assert.equal(r.promosso, true)
  })

  it('promosso=false with >3 errors', () => {
    const r = evaluateExam([
      ans(false, 1),
      ans(false, 2),
      ans(false, 3),
      ans(false, 4),
    ])
    assert.equal(r.errori_totali, 4)
    assert.equal(r.promosso, false)
  })

  it('computes errori_per_argomento correctly', () => {
    const r = evaluateExam([ans(false, 5), ans(false, 5), ans(true, 6)])
    assert.equal(r.errori_per_argomento[5], 2)
    assert.equal(r.errori_per_argomento[6], undefined)
  })

  it('averages time correctly', () => {
    const r = evaluateExam([ans(true, 1), ans(true, 1)])
    assert.equal(r.tempo_medio_per_item_ms, 1000)
  })
})

describe('estimateReadiness', () => {
  it('returns 0 for empty cards', () => {
    assert.equal(estimateReadiness([]), 0)
  })

  it('returns a value in [0, 1] for a reviewed card', () => {
    const cardStates = [{ item: item('i', 1), card: createNewCard() }]
    const r = estimateReadiness(cardStates)
    assert.ok(r >= 0 && r <= 1)
  })
})
