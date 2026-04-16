/**
 * Seed PatenteGo — popola Supabase con gli ARGOMENTI, CONCETTI e QUIZ_ITEMS
 * di T2. Idempotente a grana grossa: fa insert "puri", quindi per un rerun
 * completo va eseguito `truncate` prima (vedi NOTA sotto).
 *
 * Uso:
 *   export NEXT_PUBLIC_SUPABASE_URL="..."
 *   export SUPABASE_SERVICE_ROLE_KEY="..."
 *   npm run seed:db
 *
 * NOTA: script pensato per un DB vuoto (prima popolazione). Per rieseguirlo,
 * esegui prima il truncate manualmente:
 *   truncate quiz_items, concetti, argomenti restart identity cascade;
 * Questo cancella anche fsrs_cards/risposte/concetti_progress via cascade.
 *
 * Lo script usa il service role key e bypassa RLS.
 */

import { createClient } from '@supabase/supabase-js'

import {
  ARGOMENTI_SEED,
  buildConcettiSeed,
  buildQuizItemsSeed,
  getSeedSummary,
} from '../src/data/seed'
import type { Database } from '../src/types/database'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    'Missing env vars. Richiesti: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY',
  )
  process.exit(1)
}

const QUIZ_CHUNK_SIZE = 500

async function main(): Promise<void> {
  const db = createClient<Database>(SUPABASE_URL!, SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  })

  console.log('[seed] summary =', getSeedSummary())

  // 1. Argomenti
  console.log(`[seed] insert argomenti (${ARGOMENTI_SEED.length})…`)
  const { data: argRows, error: argErr } = await db
    .from('argomenti')
    .insert([...ARGOMENTI_SEED])
    .select('id, numero')
  if (argErr) throw argErr
  if (!argRows || argRows.length !== ARGOMENTI_SEED.length) {
    throw new Error(
      `argomenti inserted ${argRows?.length ?? 0}, expected ${ARGOMENTI_SEED.length}`,
    )
  }
  const argIdByNumero = new Map<number, number>(
    argRows.map((r) => [r.numero, r.id]),
  )
  console.log('[seed] argomenti done, id map size =', argIdByNumero.size)

  // 2. Concetti
  const concettiPayload = buildConcettiSeed(argIdByNumero)
  console.log(`[seed] insert concetti (${concettiPayload.length})…`)
  const { data: concRows, error: concErr } = await db
    .from('concetti')
    .insert(concettiPayload)
    .select('id, codice')
  if (concErr) throw concErr
  if (!concRows || concRows.length !== concettiPayload.length) {
    throw new Error(
      `concetti inserted ${concRows?.length ?? 0}, expected ${concettiPayload.length}`,
    )
  }
  const concettoIdByCodice = new Map<string, string>(
    concRows.map((r) => [r.codice, r.id]),
  )
  console.log('[seed] concetti done, id map size =', concettoIdByCodice.size)

  // 3. Quiz items (a blocchi per evitare payload troppo grossi)
  const quizPayload = buildQuizItemsSeed(concettoIdByCodice)
  console.log(`[seed] insert quiz_items (${quizPayload.length}) in chunks of ${QUIZ_CHUNK_SIZE}…`)
  let inserted = 0
  for (let i = 0; i < quizPayload.length; i += QUIZ_CHUNK_SIZE) {
    const chunk = quizPayload.slice(i, i + QUIZ_CHUNK_SIZE)
    const { error } = await db.from('quiz_items').insert(chunk)
    if (error) throw error
    inserted += chunk.length
    console.log(`[seed]   quiz_items ${inserted}/${quizPayload.length}`)
  }
  console.log('[seed] quiz_items done')

  console.log('[seed] ALL DONE')
}

main().catch((err) => {
  console.error('[seed] FAILED:', err)
  process.exit(1)
})
