# T2 — CONTENUTI & DATI

> **Setup terminale:** `/effort max` — Abilita plugin: Web Search (per verificare articoli CdS e limiti normativi 2026), Supabase MCP (già attivo)

---

Sei l'AGENTE CONTENUTI del progetto PatenteGo — un coach intelligente per la patente B italiana 2026, basato sul metodo R.O.T.T.A.

**Working directory:** questa cartella è già il repo clonato, branch `claude/patentego-rotta-method-Pf7tU`.

## REGOLA DI COORDINAMENTO

Ci sono 4 agenti Claude Code che lavorano **in parallelo nella stessa cartella**. L'agente T1 (Architetto) è il direttore del progetto.

**IL TUO DOMINIO ESCLUSIVO è:**
- `src/data/` (tutti i file di dati strutturati)
- `docs/content/` (documentazione dei contenuti)

**NON TOCCARE MAI:**
- Root config (`package.json`, `tsconfig`, `next.config`, etc.) — dominio di T1
- `supabase/`, `src/types/`, `src/lib/db/`, `src/lib/auth/` — dominio di T1
- `src/lib/engine/`, `src/lib/fsrs/` — dominio di T3
- `src/components/`, `src/app/` (pagine) — dominio di T4

Se vedi file creati da altri agenti, **NON modificarli**. Se hai bisogno di tipi da T1 (es. `src/types/`), e non esistono ancora, crea tipi locali temporanei in `src/data/_types.ts` (con underscore per indicare che sono temporanei). Quando T1 avrà creato i tipi definitivi, si sostituiranno.

Se una cartella che ti serve non esiste ancora (es. `src/`), creala tu — ma **solo le tue sottocartelle** (`src/data/`).

## IL TUO LAVORO

### Premessa obbligatoria
Leggi **TUTTI** i file in `docs/research/` — contengono il programma d'esame, il CdS aggiornato 2024-2026, i 18 pattern trappola, e le evidenze scientifiche. Sono la tua bibbia per generare contenuti corretti.

### Fase 1 — Struttura dati argomenti e concetti

Crea `src/data/argomenti.ts`:
- Array tipizzato dei 25 argomenti ministeriali (15 primari + 10 integrativi)
- Per ognuno: `numero`, `nome`, `tipo` (primario/integrativo), `peso_quiz` (domande stimate nell'esame)
- Basati ESATTAMENTE su `docs/research/01-programma-esame.md`

Crea `src/data/concetti/` con un file per ogni argomento (es. `arg01-segnali-pericolo.ts`):
- Per ciascuno dei ~330 concetti atomici dalla ricerca, crea un oggetto con:
  - `codice` (ARG01-C001, etc.), `titolo`, `descrizione`, `regola_testo`, `articolo_cds`, `livello_difficolta` (1-5)
- Crea un `index.ts` che esporta tutti i concetti aggregati in un unico array

### Fase 2 — Pattern trappola come dati strutturati

Crea `src/data/patterns.ts`:
- I 18 pattern (P01-P18) da `docs/research/03-pattern-trappole.md` come oggetti tipizzati
- Per ogni pattern: `id`, `nome`, `descrizione`, `bias_cognitivo`, `template`, `spia_riconoscimento`, `argomenti_rischio` (quali argomenti sono più vulnerabili)
- I 5 pattern folkloristici (F01-F05) come array separato (usati solo come badge, MAI come stampi)

### Fase 3 — Quiz items per ogni fase R.O.T.T.A.

Questo è il cuore del tuo lavoro. Crea `src/data/quiz/` con un file per argomento (es. `arg01-quiz.ts`).

Per **OGNI concetto**, genera almeno **8-12 quiz items V/F** seguendo il metodo R.O.T.T.A.:
- **3-4 items BASE** (fase `riconosci`) — domanda diretta sulla regola
- **2-3 items TRAPPOLA** — applica UN pattern (P01-P18) per item, dichiara quale
- **2-3 items TRANSFER** — stessa regola in scenario diverso (autostrada, pioggia, notte, scooter, etc.)
- **1-2 items ORIGINA** — scenario dove l'utente deve inferire la regola

Per ogni item fornisci:
```typescript
{
  testo_domanda: string,       // formulazione V/F in italiano corretto
  risposta_corretta: boolean,  // true = VERO, false = FALSO
  spiegazione: string,         // perché è V o F + riferimento regola + articolo CdS
  fase_rotta: FaseRotta,       // 'riconosci' | 'origina' | 'trappola' | 'trasferisci'
  pattern_trappola?: string,   // P01-P18, solo per items trappola
  scenario_transfer?: string,  // descrizione scenario, solo per items transfer
}
```

**REGOLE INDEROGABILI** (da `docs/research/03`):
1. **UNA trappola per item** — isolare UN pattern per V/F
2. Pattern dichiarato a posteriori nella `spiegazione`
3. **VIETATO copiare item ministeriali** — i pattern bastano per generare originale
4. Numeri sempre in coppia nella spiegazione (quello sbagliato + quello corretto con mnemonic)
5. Distribuire V e F equamente (non 80% FALSO)

### Fase 4 — Mappa interleaving

Crea `src/data/interleaving-map.ts`:
- Matrice di compatibilità tra argomenti per il mescolamento
- Basata sulla mappa pattern→argomento in `docs/research/03`
- Indica quali argomenti mescolare insieme (quelli con pattern simili = max guadagno, cfr. Brunmair & Richter 2019)
- Gruppi di minimo 3 macro-aree per sessione

### Fase 5 — Calibrazione R.O.T.T.A.

Crea `src/data/calibration.ts`:
- Tutti i parametri da `docs/research/04-evidenze-scientifiche.md`:
  ```typescript
  export const CALIBRATION = {
    desired_retention: 0.90,
    desired_retention_exam_soon: 0.93, // se esame <45gg
    reps_per_mastery: { min: 5, max: 7 },
    initial_interval_days: 1,
    transfer_scenarios: { min: 3, target: 6 },
    items_per_concept: { min: 8, target: 12 },
    min_interleaving_areas: 3,
    error_penalty_origina: false,
    stability_threshold_mastery: 60, // giorni
  } as const
  ```

### Fase 6 — Seed script

Crea `src/data/seed.ts`:
- Funzione `getSeedData()` che aggrega tutti i dati (argomenti, concetti, quiz items) in formato pronto per inserimento Supabase
- Mappa i dati locali allo schema del database (usa i tipi da `src/data/_types.ts` per ora)

### Fase 7 — Documentazione contenuti

Crea `docs/content/README.md`:
- Inventario completo dei contenuti creati
- Statistiche: quanti concetti, quanti items per argomento, copertura pattern
- Gap da colmare e TODO futuri

---

**Committa e push** sul branch al completamento di ogni fase.

**NOTA CRITICA:** Questo è il lavoro più corposo. Concentrati sulla **QUALITÀ e CORRETTEZZA** dei contenuti normativi. Ogni dato errato = utente bocciato all'esame. Usa Web Search per verificare ogni numero, limite, e sanzione del CdS 2024-2026.
