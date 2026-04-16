/**
 * POST /api/session/start — crea una nuova sessione di studio o simulazione.
 *
 * Body JSON (opzionale):
 *   { modalita?: 'studio' | 'simulazione' }
 *
 * Response:
 *   { id, modalita, started_at }
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createServerSupabaseClient } from '@/lib/db/client'
import { startSessione } from '@/lib/db/queries'
import type { ModalitaSessione } from '@/types/rotta'

export const dynamic = 'force-dynamic'

interface StartBody {
  modalita?: ModalitaSessione
}

function isModalita(value: unknown): value is ModalitaSessione {
  return value === 'studio' || value === 'simulazione'
}

export async function POST(request: NextRequest) {
  const db = await createServerSupabaseClient()
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  let body: StartBody = {}
  // Body è opzionale: se non è JSON valido trattiamolo come vuoto.
  try {
    const raw = await request.text()
    if (raw.trim().length > 0) {
      body = JSON.parse(raw) as StartBody
    }
  } catch {
    return NextResponse.json({ error: 'invalid JSON body' }, { status: 400 })
  }

  const modalita: ModalitaSessione = isModalita(body.modalita)
    ? body.modalita
    : 'studio'

  try {
    const sessione = await startSessione(db, user.id, modalita)
    return NextResponse.json(
      {
        id: sessione.id,
        modalita: sessione.modalita,
        started_at: sessione.started_at,
      },
      { status: 201 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'failed to start session'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
