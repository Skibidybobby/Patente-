# T3 — ENGINE R.O.T.T.A. + FSRS

> **Setup terminale:** `/effort max` — Abilita plugin: Web Search (per documentazione ts-fsrs aggiornata). Nessun altro plugin necessario — pura logica algoritmica, tieni il contesto pulito.

---

Sei l'AGENTE ENGINE del progetto PatenteGo — un coach intelligente per la patente B italiana 2026, basato sul metodo R.O.T.T.A. (Riconosci, Origina, Trappola, Trasferisci, Automatizza).

**Working directory:** questa cartella è già il repo clonato, branch `claude/patentego-rotta-method-Pf7tU`.

## REGOLA DI COORDINAMENTO

Ci sono 4 agenti Claude Code che lavorano **in parallelo nella stessa cartella**. L'agente T1 (Architetto) è il direttore.

**IL TUO DOMINIO ESCLUSIVO è:**
- `src/lib/engine/` (logica R.O.T.T.A., sessioni, quiz flow)
- `src/lib/fsrs/` (wrapper FSRS, scheduling)

**NON TOCCARE MAI:**
- Root config, `supabase/`, `src/types/`, `src/lib/db/`, `src/lib/auth/` — dominio di T1
- `src/data/`, `docs/content/` — dominio di T2
- `src/components/`, `src/app/` — dominio di T4
- `package.json` — dominio di T1 (se hai bisogno di una dipendenza, annotala in un commento TODO nel tuo codice)

Se hai bisogno di tipi condivisi da T1 e non esistono ancora, crea tipi locali in `src/lib/engine/types.ts` e `src/lib/fsrs/types.ts`. Quando T1 avrà creato `src/types/`, li sostituirai. Se vedi file di altri agenti, **NON toccarli**.

Se `src/` non esiste ancora, crea solo le tue sottocartelle (`src/lib/engine/`, `src/lib/fsrs/`).

## CONTESTO SCIENTIFICO

Leggi **obbligatoriamente** prima di iniziare:
- `docs/research/04-evidenze-scientifiche.md` — parametri di calibrazione e evidenze peer-reviewed
- `docs/research/03-pattern-trappole.md` — come funzionano le trappole
- `PROJECT_LOG.md` — stato del progetto e recap

## IL TUO LAVORO

### Fase 1 — Wrapper FSRS

Crea `src/lib/fsrs/types.ts`:
```typescript
// Tipi per il sistema FSRS
export type CardState = 'new' | 'learning' | 'review' | 'relearning'
export type Rating = 'again' | 'hard' | 'good' | 'easy'

export interface FSRSCard {
  stability: number
  difficulty: number
  elapsed_days: number
  scheduled_days: number
  reps: number
  lapses: number
  state: CardState
  due: Date
  last_review: Date | null
}

export interface ReviewResult {
  card: FSRSCard
  next_review: Date
  interval_days: number
}

export interface FSRSConfig {
  desired_retention: number    // default 0.90, range 0.80-0.95
  maximum_interval: number     // default 365 giorni
  reps_for_mastery: number     // default 5
  stability_threshold: number  // default 60 giorni
}
```

Crea `src/lib/fsrs/scheduler.ts`:
1. Usa la libreria `ts-fsrs` (cerca su npm la versione più recente con Web Search, verifica l'API)
2. Wrappa il core FSRS con la calibrazione PatenteGo:
   - `desired_retention`: configurabile (default 0.90)
   - `maximum_interval`: 365 giorni
3. Esponi queste funzioni:
   - `createNewCard()`: crea una card FSRS nuova con stato `new`
   - `reviewCard(card, rating)`: aggiorna la card dopo una risposta (Again/Hard/Good/Easy) → ritorna `ReviewResult`
   - `getNextReviewDate(card)`: quando ripassare
   - `isCardMastered(card, config?)`: `true` se `stability > threshold` E `reps >= reps_for_mastery`
   - `getDueCards(cards, now?)`: filtra le cards scadute, ordinate per urgenza (più in ritardo = prima)
   - `getCardRetrievability(card, now?)`: probabilità attuale di ricordare (0-1)

Crea `src/lib/fsrs/index.ts` — re-export pubblico.

### Fase 2 — Motore R.O.T.T.A.

Crea `src/lib/engine/types.ts`:
```typescript
export type FaseRotta = 'riconosci' | 'origina' | 'trappola' | 'trasferisci' | 'automatizza'
export type ModalitaSessione = 'studio' | 'simulazione'

export interface ConceptProgress {
  concept_id: string
  current_phase: FaseRotta
  phase_items_completed: number
  phase_items_correct: number
  // Criteri per avanzare alla fase successiva
  can_advance: boolean
}

export interface SessionOptions {
  durata_target_minuti: number
  argomenti_focus?: number[]   // numeri argomento, opzionale
  modalita: ModalitaSessione
}

export interface SessionState {
  id: string
  user_id: string
  options: SessionOptions
  items_presented: string[]    // quiz_item_ids già mostrati
  items_correct: number
  items_total: number
  argomenti_used: Set<number>  // per garantire interleaving
  started_at: Date
}

export interface QuizItem {
  id: string
  concetto_id: string
  fase_rotta: FaseRotta
  testo_domanda: string
  risposta_corretta: boolean
  spiegazione: string
  pattern_trappola?: string
  scenario_transfer?: string
}

export interface AnswerResult {
  corretta: boolean
  spiegazione: string
  pattern_trappola?: string
  fsrs_update: import('../fsrs/types').ReviewResult
  phase_advanced: boolean
}
```

Crea `src/lib/engine/rotta.ts` — il cuore del metodo:

Il flusso R.O.T.T.A. per ogni concetto segue 5 fasi **SEQUENZIALI**:

1. **RICONOSCI** (Active Recall)
   - Presenta la domanda PRIMA della regola
   - L'utente risponde → feedback immediato + spiegazione completa
   - Se corretto → avanza. Se sbagliato → ripresenta dopo (FSRS: Again)

2. **ORIGINA** (Productive Failure)
   - Scenario nuovo dove l'utente NON conosce ancora la regola applicata
   - L'utente tenta → **NESSUNA PENALITÀ** per errore (Kapur 2014)
   - Dopo il tentativo: mostra regola + confronto esplicito col tentativo

3. **TRAPPOLA** (Discriminative Contrast)
   - Item formulato con UN pattern trappola (P01-P18)
   - L'utente deve riconoscere la trappola
   - Dopo: rivela quale pattern era (valore meta-cognitivo)

4. **TRASFERISCI** (Far Transfer)
   - Stessa regola, scenario completamente diverso (min 3 varianti)
   - Ancoraggio esplicito al principio astratto

5. **AUTOMATIZZA** (Spaced Repetition)
   - Items da tutte le fasi precedenti entrano nel ciclo FSRS
   - Ripasso spaziato fino a mastery (stability >60gg, 5-7 reps positive)

**Implementa queste funzioni:**
- `getConceptPhase(progress: ConceptProgress): FaseRotta` — in quale fase è l'utente per un concetto
- `canAdvancePhase(progress: ConceptProgress): boolean` — i criteri sono soddisfatti?
  - Riconosci → Origina: almeno 2/3 corrette
  - Origina → Trappola: tentativo completato (corretto o no, NO penalità)
  - Trappola → Trasferisci: almeno 2/3 corrette
  - Trasferisci → Automatizza: almeno 2/3 corrette su scenari diversi
  - Automatizza: mastery via FSRS
- `advancePhase(progress: ConceptProgress): ConceptProgress` — avanza alla fase successiva
- `getPhaseItems(conceptId: string, phase: FaseRotta, allItems: QuizItem[]): QuizItem[]` — filtra items per fase

### Fase 3 — Session Manager

Crea `src/lib/engine/session.ts`:

- `createSession(userId, options): SessionState` — nuova sessione di studio
  - In modalità `studio`: segue R.O.T.T.A., interleaving ≥3 macro-aree
  - In modalità `simulazione`: 30 V/F, 20 minuti, simula esame reale

- `selectNextItem(session, dueCards, conceptProgresses, allItems): QuizItem | null` — seleziona il prossimo item:
  1. Cards FSRS scadute (priorità assoluta — spaced repetition)
  2. Nuovi concetti nella fase R.O.T.T.A. appropriata
  3. **Interleaving**: alterna tra almeno 3 macro-aree diverse (non 5 domande di fila sullo stesso argomento)
  4. Se `null` → sessione completata

- `recordAnswer(session, itemId, answer, tempoMs): AnswerResult` — registra risposta:
  1. Valuta correttezza
  2. Aggiorna card FSRS (map answer → Rating: corretto veloce = Easy, corretto = Good, sbagliato = Again)
  3. Aggiorna progresso fase R.O.T.T.A.
  4. Ritorna feedback completo

- `endSession(session): SessionSummary` — chiude sessione:
  ```typescript
  interface SessionSummary {
    items_total: number
    items_correct: number
    percentuale: number
    durata_secondi: number
    tempo_medio_per_item_ms: number
    errori_per_argomento: Record<number, number>
    argomenti_mescolati: number[]
    fasi_avanzate: string[]  // concetti che hanno avanzato di fase
  }
  ```

### Fase 4 — Exam Simulator

Crea `src/lib/engine/simulator.ts`:
- Simula l'esame reale: **30 V/F, 20 minuti, max 3 errori**
- `generateExamSheet(allItems): QuizItem[]` — seleziona 30 items rispettando la distribuzione ministeriale:
  - 15 argomenti primari × 2 domande = ~20 domande da primari
  - 10 argomenti integrativi × 1 domanda = ~10 domande da integrativi
  - Totale: 30 (campiona se necessario)
  - NO items mai visti dall'utente (solo dalla fase Automatizza)
- `evaluateExam(answers): ExamResult`:
  ```typescript
  interface ExamResult {
    promosso: boolean           // errori <= 3
    errori_totali: number
    errori_per_argomento: Record<number, number>
    tempo_totale_secondi: number
    tempo_medio_per_item_ms: number
  }
  ```
- `estimateReadiness(userId, cardStates): number` — stima % probabilità di passare basata su FSRS retrievability media ponderata per peso argomento

### Fase 5 — Analytics Engine

Crea `src/lib/engine/analytics.ts`:
- `getUserProgress(sessions, cardStates, concepts)` — progresso globale:
  - Per ogni argomento: % concetti padroneggiati, % in ogni fase R.O.T.T.A.
  - Globale: concetti totali padroneggiati / 330
- `getWeakAreas(cardStates, responses)` — argomenti con accuracy più bassa, ordinati per rischio
- `getStudyStreak(sessions)` — giorni consecutivi con almeno 1 sessione
- `getEstimatedReadiness(cardStates, concepts)` — stima % superamento esame
- `getRecommendation(cardStates, conceptProgresses)` — cosa studiare oggi:
  1. Cards FSRS scadute (sempre priorità)
  2. Argomenti deboli
  3. Nuovi concetti se tutto è in pari

### Fase 6 — Test unitari

Crea `src/lib/engine/__tests__/` e `src/lib/fsrs/__tests__/`:
- `scheduler.test.ts` — card lifecycle, mastery detection, due cards ordering
- `rotta.test.ts` — avanzamento fasi, criteri, edge cases
- `session.test.ts` — interleaving, selezione items, deduplicazione
- `simulator.test.ts` — distribuzione corretta 30 domande, calcolo punteggio
- `analytics.test.ts` — calcoli progress, streak, readiness

Usa dati mock, **non dipendere dal database**. Ogni test deve essere autosufficiente.

Crea `src/lib/engine/index.ts` e `src/lib/fsrs/index.ts` — re-export pubblici.

---

**Committa e push** al completamento di ogni fase.
