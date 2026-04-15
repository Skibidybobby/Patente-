/**
 * GET /api/quiz — ritorna il prossimo quiz item da mostrare all'utente.
 *
 * Logica provvisoria (skeleton):
 *   1. Verifica auth.
 *   2. Priorità: card FSRS scaduta più in ritardo.
 *   3. Fallback: un item random che l'utente non ha mai visto.
 *
 * Quando T3 esporrà `selectNextItem` da `@/lib/engine`, questo handler
 * delegherà a quella funzione (interleaving, fase R.O.T.T.A. corrente,
 * modalità simulazione, ecc.).
 */

import { NextResponse } from 'next/server'

import { createServerSupabaseClient } from '@/lib/db/client'
import { getDueFsrsCards, getQuizItem } from '@/lib/db/queries'

export const dynamic = 'force-dynamic'

export async function GET() {
  const db = await createServerSupabaseClient()
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  // 1) Priorità: FSRS due cards.
  const due = await getDueFsrsCards(db, user.id, new Date().toISOString(), 1)
  if (due.length > 0) {
    const item = await getQuizItem(db, due[0].quiz_item_id)
    if (item) {
      return NextResponse.json({ item, source: 'fsrs_due' })
    }
  }

  // 2) Fallback: un item "fresco" (il primo non ancora visto dall'utente).
  // NB: volutamente semplice — T3 sostituirà con la logica R.O.T.T.A. completa.
  const { data: seenRows } = await db
    .from('fsrs_cards')
    .select('quiz_item_id')
    .eq('user_id', user.id)
  const seenIds = (seenRows ?? []).map((r) => r.quiz_item_id)

  let query = db.from('quiz_items').select('*').limit(1)
  if (seenIds.length > 0) {
    query = query.not('id', 'in', `(${seenIds.join(',')})`)
  }
  const { data: freshRows, error: freshErr } = await query
  if (freshErr) {
    return NextResponse.json({ error: freshErr.message }, { status: 500 })
  }

  const item = freshRows?.[0] ?? null
  return NextResponse.json({ item, source: 'fresh' }, { status: 200 })
}
