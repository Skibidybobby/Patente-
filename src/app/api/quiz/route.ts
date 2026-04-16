/**
 * GET /api/quiz?sessione_id=... — ritorna il prossimo quiz item da mostrare,
 * seguendo la logica R.O.T.T.A. dell'engine (`src/lib/engine/session.ts`).
 *
 * Pipeline:
 *   1. Auth + validazione sessione (ownership, non chiusa).
 *   2. Ricostruisce lo SessionState dalle risposte della sessione.
 *   3. Carica dueCards FSRS dell'utente.
 *   4. Carica i concept progress; se l'utente non ne ha ancora, fa bootstrap
 *      sul primo concetto disponibile (ordine per `codice`).
 *   5. Carica i quiz items necessari (items dei concetti in progress attivi
 *      + items delle due cards) arricchiti con `argomento_numero`.
 *   6. Delega a `selectNextItem` per scegliere il prossimo item.
 *
 * La modalità `simulazione` non è ancora gestita qui (richiede generazione
 * di un set fissato di 30 item all'avvio — logica di `simulator.ts`).
 */

import { NextResponse, type NextRequest } from 'next/server'

import { createServerSupabaseClient } from '@/lib/db/client'
import {
  getConcettiProgressForUser,
  getDueFsrsCards,
  getQuizItemsByIds,
  getQuizItemsForConcetti,
  getRisposteForSessione,
  upsertConcettoProgress,
  type QuizItemWithArgomento,
} from '@/lib/db/queries'
import { canAdvancePhase, createConceptProgress } from '@/lib/engine/rotta'
import { selectNextItem, type DueCard } from '@/lib/engine/session'
import type {
  ConceptProgress,
  QuizItem as EngineQuizItem,
  SessionOptions,
  SessionState,
} from '@/lib/engine/types'
import type { FSRSCard } from '@/lib/fsrs/types'
import type { ConcettoProgressRow, FsrsCard } from '@/types/database'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const db = await createServerSupabaseClient()
  const {
    data: { user },
  } = await db.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const sessioneId = request.nextUrl.searchParams.get('sessione_id')
  if (!sessioneId) {
    return NextResponse.json(
      { error: 'sessione_id query param required' },
      { status: 400 },
    )
  }

  // 1) Validate sessione
  const { data: sessione, error: sessErr } = await db
    .from('sessioni')
    .select('*')
    .eq('id', sessioneId)
    .maybeSingle()
  if (sessErr) {
    return NextResponse.json({ error: sessErr.message }, { status: 500 })
  }
  if (!sessione || sessione.user_id !== user.id) {
    return NextResponse.json({ error: 'sessione not found' }, { status: 404 })
  }
  if (sessione.ended_at) {
    return NextResponse.json({ error: 'sessione already ended' }, { status: 409 })
  }

  if (sessione.modalita === 'simulazione') {
    return NextResponse.json(
      { error: 'simulazione mode not yet implemented on /api/quiz' },
      { status: 501 },
    )
  }

  // 2) Ricostruisci items_presented dalle risposte
  const risposte = await getRisposteForSessione(db, sessioneId)
  const itemsPresented = risposte.map((r) => r.quiz_item_id)

  // 3) Due FSRS cards
  const dueCardRows = await getDueFsrsCards(db, user.id)
  const dueCards: DueCard[] = dueCardRows.map((row) => ({
    quiz_item_id: row.quiz_item_id,
    card: hydrateFsrsCard(row),
  }))

  // 4) Concept progresses + bootstrap se vuoti
  let progressRows = await getConcettiProgressForUser(db, user.id)
  if (progressRows.length === 0) {
    const bootstrapped = await bootstrapFirstConceptProgress(db, user.id)
    if (bootstrapped) {
      progressRows = [bootstrapped]
    }
  }
  const progressMap = new Map<string, ConceptProgress>()
  for (const row of progressRows) {
    progressMap.set(row.concetto_id, rowToConceptProgress(row))
  }

  // 5) Carica items necessari (union dei concetti attivi + due cards)
  const activeConcettoIds = Array.from(progressMap.values())
    .filter((p) => p.current_phase !== 'automatizza')
    .map((p) => p.concept_id)

  const [itemsByConcetto, itemsByIds] = await Promise.all([
    getQuizItemsForConcetti(db, activeConcettoIds),
    getQuizItemsByIds(db, dueCards.map((c) => c.quiz_item_id)),
  ])
  const mergedItems = mergeUniqueById(itemsByConcetto, itemsByIds)
  const engineItems = mergedItems.map(toEngineQuizItem)

  // 6) Build SessionState + delega a selectNextItem
  const options: SessionOptions = {
    durata_target_minuti: 20,
    modalita: 'studio',
  }
  const sessionState: SessionState = {
    id: sessione.id,
    user_id: user.id,
    options,
    items_presented: itemsPresented,
    items_correct: sessione.items_correct,
    items_total: sessione.items_total,
    argomenti_used: new Set<number>(),
    errori_per_argomento: new Map<number, number>(),
    concetti_avanzati: [],
    started_at: new Date(sessione.started_at),
  }

  const next = selectNextItem(sessionState, dueCards, progressMap, engineItems)
  if (!next) {
    return NextResponse.json({ item: null, done: true }, { status: 200 })
  }

  // Ritorna il record DB arricchito (non il QuizItem dell'engine) per dare
  // alla UI tutti i campi (spiegazione inclusa per il feedback post-risposta).
  const dbItem = mergedItems.find((i) => i.id === next.id)
  return NextResponse.json(
    {
      item: dbItem ?? next,
      sessione_id: sessione.id,
    },
    { status: 200 },
  )
}

// ---------------------------------------------------------------------------
// Helpers

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

function rowToConceptProgress(row: ConcettoProgressRow): ConceptProgress {
  const base: ConceptProgress = {
    concept_id: row.concetto_id,
    current_phase: row.current_phase,
    phase_items_completed: row.phase_items_completed,
    phase_items_correct: row.phase_items_correct,
    can_advance: false,
  }
  return { ...base, can_advance: canAdvancePhase(base) }
}

function toEngineQuizItem(row: QuizItemWithArgomento): EngineQuizItem {
  return {
    id: row.id,
    concetto_id: row.concetto_id,
    argomento_numero: row.argomento_numero,
    fase_rotta: row.fase_rotta,
    testo_domanda: row.testo_domanda,
    risposta_corretta: row.risposta_corretta,
    spiegazione: row.spiegazione ?? '',
    pattern_trappola: row.pattern_trappola ?? undefined,
    scenario_transfer: row.scenario_transfer ?? undefined,
  }
}

function mergeUniqueById(
  a: QuizItemWithArgomento[],
  b: QuizItemWithArgomento[],
): QuizItemWithArgomento[] {
  const seen = new Set<string>()
  const out: QuizItemWithArgomento[] = []
  for (const it of [...a, ...b]) {
    if (seen.has(it.id)) continue
    seen.add(it.id)
    out.push(it)
  }
  return out
}

/**
 * Primo onboarding: se l'utente non ha ancora nessun concept progress,
 * seleziona il concetto con codice più basso (tipicamente ARG01-C001) e
 * crea un progress iniziale in fase `riconosci`.
 *
 * Ritorna il nuovo progress, o null se non c'è nessun concetto nel DB
 * (caso di DB non seeded).
 */
async function bootstrapFirstConceptProgress(
  db: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  userId: string,
): Promise<ConcettoProgressRow | null> {
  const { data: firstConcetti, error } = await db
    .from('concetti')
    .select('id, codice')
    .order('codice', { ascending: true })
    .limit(1)
  if (error) throw error
  const first = firstConcetti?.[0]
  if (!first) return null
  const progress = createConceptProgress(first.id)
  return upsertConcettoProgress(db, {
    user_id: userId,
    concetto_id: progress.concept_id,
    current_phase: progress.current_phase,
    phase_items_completed: progress.phase_items_completed,
    phase_items_correct: progress.phase_items_correct,
  })
}
