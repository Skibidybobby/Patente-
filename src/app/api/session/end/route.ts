/**
 * POST /api/session/end — chiude una sessione e ne calcola il riepilogo.
 *
 * Body JSON:
 *   { sessione_id: string }
 *
 * Response:
 *   {
 *     items_total, items_correct, percentuale,
 *     durata_secondi, argomenti_mescolati, errori_per_argomento
 *   }
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createServerSupabaseClient } from '@/lib/db/client'
import { endSessione, getRisposteForSessione } from '@/lib/db/queries'

export const dynamic = 'force-dynamic'

interface EndBody {
  sessione_id?: string
}

export async function POST(request: NextRequest) {
  const db = await createServerSupabaseClient()
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  let body: EndBody
  try {
    body = (await request.json()) as EndBody
  } catch {
    return NextResponse.json({ error: 'invalid JSON body' }, { status: 400 })
  }

  const { sessione_id } = body
  if (typeof sessione_id !== 'string' || sessione_id.length === 0) {
    return NextResponse.json({ error: 'sessione_id required' }, { status: 400 })
  }

  // Verifica che la sessione esista e appartenga all'utente.
  const { data: sessione, error: selErr } = await db
    .from('sessioni')
    .select('*')
    .eq('id', sessione_id)
    .maybeSingle()
  if (selErr) {
    return NextResponse.json({ error: selErr.message }, { status: 500 })
  }
  if (!sessione || sessione.user_id !== user.id) {
    return NextResponse.json({ error: 'sessione not found' }, { status: 404 })
  }
  if (sessione.ended_at) {
    return NextResponse.json({ error: 'sessione already ended' }, { status: 409 })
  }

  // Ricostruisce gli aggregati dalle risposte.
  const risposte = await getRisposteForSessione(db, sessione_id)
  const items_total = risposte.length
  const items_correct = risposte.filter((r) => r.corretta).length
  const argomentiSet = new Set<number>()
  const errori_per_argomento: Record<number, number> = {}
  for (const r of risposte) {
    if (r.argomento_numero == null) continue
    argomentiSet.add(r.argomento_numero)
    if (!r.corretta) {
      errori_per_argomento[r.argomento_numero] =
        (errori_per_argomento[r.argomento_numero] ?? 0) + 1
    }
  }
  const argomenti_mescolati = Array.from(argomentiSet).sort((a, b) => a - b)

  const startedMs = new Date(sessione.started_at).getTime()
  const nowMs = Date.now()
  const durata_secondi = Math.max(0, Math.floor((nowMs - startedMs) / 1000))

  try {
    const updated = await endSessione(db, sessione_id, {
      items_total,
      items_correct,
      durata_secondi,
      argomenti_mescolati,
    })
    const percentuale =
      updated.items_total > 0
        ? (updated.items_correct / updated.items_total) * 100
        : 0
    return NextResponse.json(
      {
        id: updated.id,
        items_total: updated.items_total,
        items_correct: updated.items_correct,
        percentuale,
        durata_secondi: updated.durata_secondi,
        argomenti_mescolati: updated.argomenti_mescolati,
        errori_per_argomento,
      },
      { status: 200 },
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'failed to end session'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
