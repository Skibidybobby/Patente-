/**
 * POST /api/answer — registra una risposta V/F, aggiorna FSRS e R.O.T.T.A. progress.
 *
 * Body JSON:
 *   {
 *     sessione_id: string,
 *     quiz_item_id: string,
 *     risposta_data: boolean,
 *     tempo_risposta_ms?: number
 *   }
 *
 * Response:
 *   {
 *     corretta: boolean,
 *     risposta_corretta: boolean,
 *     spiegazione: string | null,
 *     pattern_trappola: string | null,
 *     scenario_transfer: string | null,
 *     fase_corrente: FaseRotta,
 *     phase_advanced: boolean,
 *     next_review: string (ISO),
 *     interval_days: number
 *   }
 *
 * La logica di rating FSRS rispecchia `mapAnswerToRating` di
 * `src/lib/engine/session.ts` (duplicata qui perché non esportata):
 *   - origina                → good        (productive failure)
 *   - !corretta              → again
 *   - corretta & fast        → easy
 *   - altrimenti             → good
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createServerSupabaseClient } from '@/lib/db/client'
import {
  getConcettoProgress,
  insertRisposta,
  updateSessioneCounters,
  upsertConcettoProgress,
  upsertFsrsCard,
} from '@/lib/db/queries'
import {
  advancePhase,
  canAdvancePhase,
  createConceptProgress,
  updateProgressAfterAnswer,
} from '@/lib/engine/rotta'
import { FAST_ANSWER_THRESHOLD_MS } from '@/lib/engine/session'
import type { ConceptProgress, FaseRotta } from '@/lib/engine/types'
import { createNewCard, reviewCard } from '@/lib/fsrs/scheduler'
import type { FSRSCard, Rating } from '@/lib/fsrs/types'
import type { FsrsCard } from '@/types/database'

export const dynamic = 'force-dynamic'

interface AnswerBody {
  sessione_id?: string
  quiz_item_id?: string
  risposta_data?: boolean
  tempo_risposta_ms?: number
}

export async function POST(request: NextRequest) {
  const db = await createServerSupabaseClient()
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  let body: AnswerBody
  try {
    body = (await request.json()) as AnswerBody
  } catch {
    return NextResponse.json({ error: 'invalid JSON body' }, { status: 400 })
  }

  const { sessione_id, quiz_item_id, risposta_data, tempo_risposta_ms } = body
  if (
    typeof sessione_id !== 'string' ||
    typeof quiz_item_id !== 'string' ||
    typeof risposta_data !== 'boolean'
  ) {
    return NextResponse.json(
      {
        error:
          'missing or invalid fields: sessione_id, quiz_item_id, risposta_data required',
      },
      { status: 400 },
    )
  }

  // Carica l'item (con concetto per il progress) e la sessione.
  const [{ data: item, error: itemErr }, { data: sessione, error: sessErr }] =
    await Promise.all([
      db
        .from('quiz_items')
        .select('id, concetto_id, fase_rotta, risposta_corretta, spiegazione, pattern_trappola, scenario_transfer')
        .eq('id', quiz_item_id)
        .maybeSingle(),
      db
        .from('sessioni')
        .select('id, user_id, ended_at, items_total, items_correct')
        .eq('id', sessione_id)
        .maybeSingle(),
    ])

  if (itemErr) {
    return NextResponse.json({ error: itemErr.message }, { status: 500 })
  }
  if (!item) {
    return NextResponse.json({ error: 'quiz item not found' }, { status: 404 })
  }
  if (sessErr) {
    return NextResponse.json({ error: sessErr.message }, { status: 500 })
  }
  if (!sessione || sessione.user_id !== user.id) {
    return NextResponse.json({ error: 'sessione not found' }, { status: 404 })
  }
  if (sessione.ended_at) {
    return NextResponse.json({ error: 'sessione already ended' }, { status: 409 })
  }

  // Carica card FSRS e progress (o crea default). In parallelo.
  const [fsrsRow, progressRow] = await Promise.all([
    loadFsrsCard(db, user.id, quiz_item_id),
    getConcettoProgress(db, user.id, item.concetto_id),
  ])

  const currentCard: FSRSCard = fsrsRow
    ? hydrateFsrsCard(fsrsRow)
    : createNewCard()
  const currentProgress: ConceptProgress = progressRow
    ? {
        concept_id: progressRow.concetto_id,
        current_phase: progressRow.current_phase,
        phase_items_completed: progressRow.phase_items_completed,
        phase_items_correct: progressRow.phase_items_correct,
        can_advance: false,
      }
    : createConceptProgress(item.concetto_id)
  currentProgress.can_advance = canAdvancePhase(currentProgress)

  // Calcola correttezza, rating, aggiornamenti.
  const corretta = item.risposta_corretta === risposta_data
  const tempoMs =
    typeof tempo_risposta_ms === 'number' ? tempo_risposta_ms : Number.POSITIVE_INFINITY
  const rating = mapAnswerToRating(item.fase_rotta, corretta, tempoMs)

  const now = new Date()
  const fsrsResult = reviewCard(currentCard, rating, now)

  const progressAfterAnswer = updateProgressAfterAnswer(currentProgress, corretta)
  const phaseAdvanced = progressAfterAnswer.can_advance
  const nextProgress = phaseAdvanced
    ? advancePhase(progressAfterAnswer)
    : progressAfterAnswer

  // Persistenza — sequenziale per leggibilità, l'ordine è: risposte → fsrs → progress → sessione.
  try {
    await insertRisposta(db, {
      sessione_id,
      quiz_item_id,
      user_id: user.id,
      risposta_data,
      corretta,
      tempo_risposta_ms:
        typeof tempo_risposta_ms === 'number' ? tempo_risposta_ms : null,
    })

    await upsertFsrsCard(db, {
      user_id: user.id,
      quiz_item_id,
      stability: fsrsResult.card.stability,
      difficulty: fsrsResult.card.difficulty,
      elapsed_days: fsrsResult.card.elapsed_days,
      scheduled_days: fsrsResult.card.scheduled_days,
      reps: fsrsResult.card.reps,
      lapses: fsrsResult.card.lapses,
      state: fsrsResult.card.state,
      due: fsrsResult.card.due.toISOString(),
      last_review: fsrsResult.card.last_review
        ? fsrsResult.card.last_review.toISOString()
        : now.toISOString(),
    })

    await upsertConcettoProgress(db, {
      user_id: user.id,
      concetto_id: item.concetto_id,
      current_phase: nextProgress.current_phase,
      phase_items_completed: nextProgress.phase_items_completed,
      phase_items_correct: nextProgress.phase_items_correct,
    })

    await updateSessioneCounters(db, sessione_id, {
      items_total: sessione.items_total + 1,
      items_correct: sessione.items_correct + (corretta ? 1 : 0),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'persist failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }

  return NextResponse.json(
    {
      corretta,
      risposta_corretta: item.risposta_corretta,
      spiegazione: item.spiegazione,
      pattern_trappola: item.pattern_trappola,
      scenario_transfer: item.scenario_transfer,
      fase_corrente: nextProgress.current_phase,
      phase_advanced: phaseAdvanced,
      next_review: fsrsResult.next_review.toISOString(),
      interval_days: fsrsResult.interval_days,
    },
    { status: 200 },
  )
}

// ---------------------------------------------------------------------------
// Helpers

async function loadFsrsCard(
  db: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  userId: string,
  quizItemId: string,
): Promise<FsrsCard | null> {
  const { data, error } = await db
    .from('fsrs_cards')
    .select('*')
    .eq('user_id', userId)
    .eq('quiz_item_id', quizItemId)
    .maybeSingle()
  if (error) throw error
  return data
}

function hydrateFsrsCard(row: FsrsCard): FSRSCard {
  return {
    stability: row.stability,
    difficulty: row.difficulty,
    elapsed_days: row.elapsed_days,
    scheduled_days: row.scheduled_days,
    reps: row.reps,
    lapses: row.lapses,
    state: row.state,
    due: row.due ? new Date(row.due) : new Date(0),
    last_review: row.last_review ? new Date(row.last_review) : null,
  }
}

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
