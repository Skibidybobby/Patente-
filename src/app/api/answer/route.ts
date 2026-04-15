/**
 * POST /api/answer — registra una risposta V/F e aggiorna la card FSRS.
 *
 * Body JSON:
 *   {
 *     sessione_id: string (uuid),
 *     quiz_item_id: string (uuid),
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
 *     scenario_transfer: string | null
 *   }
 *
 * L'aggiornamento reale dei parametri FSRS (stability, difficulty, reps…)
 * spetta al wrapper `src/lib/fsrs/` (dominio T3). Qui registriamo la
 * risposta e facciamo un upsert minimale che verrà completato da T3.
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createServerSupabaseClient } from '@/lib/db/client'
import { insertRisposta } from '@/lib/db/queries'

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

  // Carica l'item per valutare la correttezza e ritornare la spiegazione.
  const { data: item, error: itemErr } = await db
    .from('quiz_items')
    .select('risposta_corretta, spiegazione, pattern_trappola, scenario_transfer')
    .eq('id', quiz_item_id)
    .maybeSingle()

  if (itemErr) {
    return NextResponse.json({ error: itemErr.message }, { status: 500 })
  }
  if (!item) {
    return NextResponse.json({ error: 'quiz item not found' }, { status: 404 })
  }

  const corretta = item.risposta_corretta === risposta_data

  // Persistenza della risposta.
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
  } catch (err) {
    const message = err instanceof Error ? err.message : 'insert failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }

  // TODO (T3): aggiornare fsrs_cards tramite src/lib/fsrs/scheduler.reviewCard
  // mappando `corretta` + `tempo_risposta_ms` al Rating FSRS appropriato.

  return NextResponse.json(
    {
      corretta,
      risposta_corretta: item.risposta_corretta,
      spiegazione: item.spiegazione,
      pattern_trappola: item.pattern_trappola,
      scenario_transfer: item.scenario_transfer,
    },
    { status: 200 },
  )
}
