/**
 * Query helpers tipizzati per le operazioni principali di PatenteGo.
 *
 * Ogni funzione accetta un client Supabase già costruito (browser, server,
 * o service role) per non impegnare il caller al contesto di runtime.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type {
  Argomento,
  Concetto,
  Database,
  FsrsCard,
  Profile,
  QuizItem,
  Sessione,
  TablesInsert,
} from '@/types/database'
import type { ModalitaSessione } from '@/types/rotta'

type DbClient = SupabaseClient<Database>

// ----------------------------------------------------------------------------
// Auth + profile
// ----------------------------------------------------------------------------

/** Ritorna il profilo dell'utente attualmente autenticato, o null. */
export async function getCurrentProfile(db: DbClient): Promise<Profile | null> {
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) return null

  const { data, error } = await db
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle()

  if (error) throw error
  return data
}

/** Aggiorna campi del profilo dell'utente corrente. */
export async function updateCurrentProfile(
  db: DbClient,
  patch: Partial<
    Pick<Profile, 'display_name' | 'exam_target_date' | 'desired_retention'>
  >,
): Promise<Profile> {
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) throw new Error('updateCurrentProfile: user not authenticated')

  const { data, error } = await db
    .from('profiles')
    .update(patch)
    .eq('id', user.id)
    .select('*')
    .single()

  if (error) throw error
  return data
}

// ----------------------------------------------------------------------------
// Contenuti (pubblici in lettura)
// ----------------------------------------------------------------------------

/** Tutti i 25 argomenti ministeriali ordinati per numero. */
export async function getArgomenti(db: DbClient): Promise<Argomento[]> {
  const { data, error } = await db
    .from('argomenti')
    .select('*')
    .order('numero', { ascending: true })
  if (error) throw error
  return data ?? []
}

/** Concetti di un argomento (o tutti, se argomentoId è omesso). */
export async function getConcetti(
  db: DbClient,
  argomentoId?: number,
): Promise<Concetto[]> {
  let q = db.from('concetti').select('*').order('codice', { ascending: true })
  if (argomentoId !== undefined) q = q.eq('argomento_id', argomentoId)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

/** Singolo concetto per codice (es. "ARG01-C003"). */
export async function getConcettoByCodice(
  db: DbClient,
  codice: string,
): Promise<Concetto | null> {
  const { data, error } = await db
    .from('concetti')
    .select('*')
    .eq('codice', codice)
    .maybeSingle()
  if (error) throw error
  return data
}

/** Singolo quiz item per id. */
export async function getQuizItem(
  db: DbClient,
  id: string,
): Promise<QuizItem | null> {
  const { data, error } = await db
    .from('quiz_items')
    .select('*')
    .eq('id', id)
    .maybeSingle()
  if (error) throw error
  return data
}

/** Quiz items per un concetto, opzionalmente filtrati per fase. */
export async function getQuizItemsForConcetto(
  db: DbClient,
  concettoId: string,
  fase?: QuizItem['fase_rotta'],
): Promise<QuizItem[]> {
  let q = db.from('quiz_items').select('*').eq('concetto_id', concettoId)
  if (fase) q = q.eq('fase_rotta', fase)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

// ----------------------------------------------------------------------------
// FSRS cards
// ----------------------------------------------------------------------------

/** Cards FSRS scadute (due <= now) per l'utente, ordinate per priorità. */
export async function getDueFsrsCards(
  db: DbClient,
  userId: string,
  nowIso: string = new Date().toISOString(),
  limit = 50,
): Promise<FsrsCard[]> {
  const { data, error } = await db
    .from('fsrs_cards')
    .select('*')
    .eq('user_id', userId)
    .lte('due', nowIso)
    .order('due', { ascending: true })
    .limit(limit)
  if (error) throw error
  return data ?? []
}

/**
 * Upsert di una card FSRS. Usa la UNIQUE(user_id, quiz_item_id) come key di
 * conflitto. I calcoli FSRS veri (stability, difficulty, etc.) sono in
 * `src/lib/fsrs/` (dominio T3) — qui è solo persistenza.
 */
export async function upsertFsrsCard(
  db: DbClient,
  row: TablesInsert<'fsrs_cards'>,
): Promise<FsrsCard> {
  const { data, error } = await db
    .from('fsrs_cards')
    .upsert(row, { onConflict: 'user_id,quiz_item_id' })
    .select('*')
    .single()
  if (error) throw error
  return data
}

// ----------------------------------------------------------------------------
// Sessioni e risposte
// ----------------------------------------------------------------------------

/** Crea una nuova sessione per l'utente e la ritorna. */
export async function startSessione(
  db: DbClient,
  userId: string,
  modalita: ModalitaSessione = 'studio',
): Promise<Sessione> {
  const { data, error } = await db
    .from('sessioni')
    .insert({
      user_id: userId,
      modalita,
      items_total: 0,
      items_correct: 0,
      argomenti_mescolati: [],
    })
    .select('*')
    .single()
  if (error) throw error
  return data
}

/** Chiude una sessione settando ended_at e le statistiche aggregate. */
export async function endSessione(
  db: DbClient,
  sessioneId: string,
  stats: Pick<
    Sessione,
    'items_total' | 'items_correct' | 'durata_secondi' | 'argomenti_mescolati'
  >,
): Promise<Sessione> {
  const { data, error } = await db
    .from('sessioni')
    .update({
      ended_at: new Date().toISOString(),
      ...stats,
    })
    .eq('id', sessioneId)
    .select('*')
    .single()
  if (error) throw error
  return data
}

/** Registra una risposta V/F all'interno di una sessione. */
export async function insertRisposta(
  db: DbClient,
  row: TablesInsert<'risposte'>,
) {
  const { data, error } = await db
    .from('risposte')
    .insert(row)
    .select('*')
    .single()
  if (error) throw error
  return data
}

/** Ultime N sessioni dell'utente ordinate dalla più recente. */
export async function getRecentSessioni(
  db: DbClient,
  userId: string,
  limit = 10,
): Promise<Sessione[]> {
  const { data, error } = await db
    .from('sessioni')
    .select('*')
    .eq('user_id', userId)
    .order('started_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data ?? []
}
