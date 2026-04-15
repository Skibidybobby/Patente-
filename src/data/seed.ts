import type { TablesInsert } from '@/types/database'
import { ARGOMENTI } from './argomenti'
import { CONCETTI } from './concetti'
import { QUIZ_ITEMS } from './quiz'

// T2 — Fase 6: seed aggregator per Supabase.
//
// Lo schema DB (src/types/database.ts → supabase/migrations) usa:
//   argomenti (id int PK, numero, nome, tipo, peso_quiz)
//   concetti  (id uuid PK, argomento_id int FK, codice, ...)
//   quiz_items (id uuid PK, concetto_id uuid FK, fase_rotta, ...)
//
// I dati di T2 usano i codici stringa (ARG01, ARG01-C001, QUIZ-ARG01-C001-01)
// come chiavi naturali. L'insert runner (dominio T1) deve:
//   1. inserire ARGOMENTI_SEED e costruire una mappa numero → id
//   2. chiamare buildConcettiSeed(mappa) e inserire
//   3. costruire una mappa codice_concetto → uuid
//   4. chiamare buildQuizSeed(mappa) e inserire
//
// Nessuna chiamata a Supabase qui: questo file produce solo payload.

type ArgomentoInsert = TablesInsert<'argomenti'>
type ConcettoInsert = TablesInsert<'concetti'>
type QuizItemInsert = TablesInsert<'quiz_items'>

/** Mappa numero_argomento → id generato dal DB dopo l'insert. */
export type ArgomentoIdMap = ReadonlyMap<number, number>

/** Mappa codice_concetto (es. "ARG01-C001") → UUID generato dal DB. */
export type ConcettoIdMap = ReadonlyMap<string, string>

/**
 * Payload per la tabella `argomenti`. L'`id` è omesso: lo assegna il DB.
 * Ordinato per `numero` crescente, così chi inserisce può riallineare la
 * mappa id↔numero nello stesso ordine.
 */
export const ARGOMENTI_SEED: readonly ArgomentoInsert[] = ARGOMENTI.map((a) => ({
  numero: a.numero,
  nome: a.nome,
  tipo: a.tipo,
  peso_quiz: a.peso_quiz,
}))

/**
 * Costruisce il payload `concetti` risolvendo le foreign key su `argomenti`
 * a partire dalla mappa numero → id restituita dal DB dopo l'insert di
 * `ARGOMENTI_SEED`.
 */
export function buildConcettiSeed(argomentoIdByNumero: ArgomentoIdMap): ConcettoInsert[] {
  return CONCETTI.map((c) => {
    const argomentoId = argomentoIdByNumero.get(c.argomento_numero)
    if (argomentoId == null) {
      throw new Error(
        `seed: argomento_numero ${c.argomento_numero} non trovato nella mappa ` +
          `(concetto ${c.codice}). Assicurati di inserire ARGOMENTI_SEED prima.`,
      )
    }
    return {
      argomento_id: argomentoId,
      codice: c.codice,
      titolo: c.titolo,
      descrizione: c.descrizione,
      regola_testo: c.regola_testo,
      articolo_cds: c.articolo_cds ?? null,
      livello_difficolta: c.livello_difficolta,
    }
  })
}

/**
 * Costruisce il payload `quiz_items` risolvendo le foreign key su `concetti`
 * a partire dalla mappa codice → uuid restituita dal DB dopo l'insert dei
 * concetti. Scarta implicitamente le fasi non previste dallo schema DB
 * (attualmente tutte e 4 quelle generate sono ammesse).
 */
export function buildQuizItemsSeed(concettoIdByCodice: ConcettoIdMap): QuizItemInsert[] {
  return QUIZ_ITEMS.map((q) => {
    const concettoId = concettoIdByCodice.get(q.concetto_codice)
    if (concettoId == null) {
      throw new Error(
        `seed: concetto ${q.concetto_codice} non trovato nella mappa ` +
          `(quiz ${q.codice}). Assicurati di inserire i concetti prima.`,
      )
    }
    return {
      concetto_id: concettoId,
      fase_rotta: q.fase_rotta,
      testo_domanda: q.testo_domanda,
      risposta_corretta: q.risposta_corretta,
      spiegazione: q.spiegazione,
      pattern_trappola: q.pattern_trappola ?? null,
      scenario_transfer: q.scenario_transfer ?? null,
    }
  })
}

/**
 * Helper "tutto-in-uno" per il caso in cui l'insert runner già disponga di
 * tutte e due le mappe di lookup. Se hai bisogno di inserire a blocchi,
 * chiama direttamente `ARGOMENTI_SEED`, `buildConcettiSeed`, `buildQuizItemsSeed`.
 */
export interface SeedData {
  argomenti: readonly ArgomentoInsert[]
  concetti: readonly ConcettoInsert[]
  quiz_items: readonly QuizItemInsert[]
}

export function getSeedData(
  argomentoIdByNumero: ArgomentoIdMap,
  concettoIdByCodice: ConcettoIdMap,
): SeedData {
  return {
    argomenti: ARGOMENTI_SEED,
    concetti: buildConcettiSeed(argomentoIdByNumero),
    quiz_items: buildQuizItemsSeed(concettoIdByCodice),
  }
}

/** Statistiche leggibili sui contenuti aggregati — utile per log pre-deploy. */
export function getSeedSummary(): {
  argomenti: number
  concetti: number
  quiz_items: number
  quiz_per_fase: Record<string, number>
  v_f_ratio: { vero: number; falso: number; pct_vero: number }
} {
  const quiz_per_fase: Record<string, number> = {
    riconosci: 0,
    origina: 0,
    trappola: 0,
    trasferisci: 0,
  }
  let vero = 0
  for (const q of QUIZ_ITEMS) {
    quiz_per_fase[q.fase_rotta] = (quiz_per_fase[q.fase_rotta] ?? 0) + 1
    if (q.risposta_corretta) vero += 1
  }
  const total = QUIZ_ITEMS.length
  return {
    argomenti: ARGOMENTI.length,
    concetti: CONCETTI.length,
    quiz_items: total,
    quiz_per_fase,
    v_f_ratio: {
      vero,
      falso: total - vero,
      pct_vero: total > 0 ? vero / total : 0,
    },
  }
}
