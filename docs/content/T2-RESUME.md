# T2 CONTENUTI — Resume / handoff

> Documento di continuazione per la prossima sessione Claude Code sul workstream T2.
> Data ultimo aggiornamento: 2026-04-15.

## Stato complessivo

| Fase | Descrizione | Stato | Commit |
|---|---|---|---|
| 1a | `argomenti.ts` + `_types.ts` | ✅ fatto | `3b189f9` |
| 1b | 253 concetti atomici (25 file + index) | ✅ fatto | `1bf93dc` |
| 2  | `patterns.ts` (18 P + 5 F) | ✅ fatto | `3b189f9` |
| 3  | 2530 quiz items R.O.T.T.A. (25 file + index) | ✅ fatto | `130ee2e` |
| 4  | `interleaving-map.ts` | ✅ fatto | `3b189f9` |
| 5  | `calibration.ts` | ✅ fatto | `3b189f9` |
| 6  | `seed.ts` (aggregatore per Supabase) | ⬜ **da fare** | — |
| 7  | `docs/content/README.md` (inventario) | ⬜ **da fare** | — |

Tutti i commit sono già pushati sul branch `claude/patentego-rotta-method-Pf7tU`.

## Cosa resta da fare (prossima sessione)

### Fase 6 — `src/data/seed.ts`

Obiettivo: una funzione `getSeedData()` che aggrega argomenti, concetti e quiz
in un formato pronto per l'inserimento in Supabase.

Input disponibili (già committati):
- `src/data/argomenti.ts` → `ARGOMENTI` (25)
- `src/data/concetti/index.ts` → `CONCETTI` (253), `CONCETTI_BY_ARGOMENTO`
- `src/data/quiz/index.ts` → `QUIZ_ITEMS` (2530), `QUIZ_BY_ARGOMENTO`
- `src/data/patterns.ts` → `PATTERNS`, `PATTERNS_FOLKLORE`
- `src/data/calibration.ts` → `CALIBRATION`
- `src/data/interleaving-map.ts` → `GRUPPI_INTERLEAVING`, `COMPATIBILITY_MATRIX`

Passi concreti:
1. Verificare se T1 ha nel frattempo creato `src/types/` con i tipi definitivi
   del database (Argomento DB, Concetto DB, QuizItem DB). Se sì, importarli
   invece di `_types.ts`, altrimenti continuare con i tipi locali.
2. Definire una funzione `getSeedData()` che restituisca un oggetto del tipo:
   ```ts
   {
     argomenti: DbArgomento[],
     concetti: DbConcetto[],
     patterns: DbPattern[],
     quiz_items: DbQuizItem[],
     interleaving_gruppi: DbGruppo[],
     calibration: DbCalibration,
   }
   ```
   mappando i codici in stringhe/UUID e normalizzando eventuali foreign keys
   (es. `concetto.argomento_id` al posto di `argomento_numero`).
3. Esportare anche un `seedSummary()` che stampa le metriche (conteggi).
4. Non eseguire l'inserimento qui — T1 si occupa della migration. `seed.ts`
   produce solo il payload.

### Fase 7 — `docs/content/README.md`

Obiettivo: inventario dei contenuti T2.

Deve includere:
- Numero di argomenti primari/integrativi (15/10)
- Numero di concetti per argomento (tabella — i numeri esatti sono in
  `docs/research/01-programma-esame.md` § 3 e nei file `arg*.ts`)
- Numero di quiz items per argomento (tabella — vedi sezione "Conteggi
  verificati" più sotto)
- Distribuzione fasi R.O.T.T.A. (3+3+3+1 per concetto → 253 × 10 = 2530)
- Copertura pattern (P01-P18 tutti usati; densità massima su arg08 e arg25)
- Gap noti (vedi sezione "Debiti e flag di qualità" più sotto)
- TODO futuri (vedi stessa sezione)

---

## Conteggi verificati al 2026-04-15

### Concetti per argomento (tot 253)

| Arg | Nome                                | Concetti |
|----:|-------------------------------------|---------:|
| 1   | Segnali di pericolo                 | 15 |
| 2   | Segnali di divieto                  | 14 |
| 3   | Segnali di obbligo                  | 10 |
| 4   | Segnali di precedenza               |  9 |
| 5   | Segnaletica orizzontale             | 12 |
| 6   | Semafori e agenti                   | 10 |
| 7   | Limiti di velocità                  | 11 |
| 8   | Distanza di sicurezza               |  8 |
| 9   | Norme di circolazione               | 13 |
| 10  | Esempi di precedenza                | 10 |
| 11  | Sorpasso                            | 11 |
| 12  | Ingombro/traino                     |  8 |
| 13  | Dispositivi di ritenuta             | 10 |
| 14  | Incidenti                           | 10 |
| 15  | Psicofisico + primo soccorso        | 12 |
| 16  | Definizioni e doveri                |  8 |
| 17  | Segnali di indicazione              |  8 |
| 18  | Temporanei/cantiere                 |  8 |
| 19  | Pannelli integrativi                |  7 |
| 20  | Fermata e sosta                     |  9 |
| 21  | Luci e spie                         |  9 |
| 22  | Patenti, documenti, sanzioni        | 11 |
| 23  | Responsabilità e RCA                |  9 |
| 24  | Ambiente e consumi                  |  8 |
| 25  | Veicolo e manutenzione              | 13 |
| **TOT** |                                | **253** |

Nota: il research doc (`docs/research/01` § 3) parla di "~330 concetti" nel
testo ma la tabella dettagliata somma a 253. Abbiamo seguito la tabella.

### Quiz items per argomento (tot 2530)

| Arg | Items | Arg | Items | Arg | Items | Arg | Items | Arg | Items |
|----:|------:|----:|------:|----:|------:|----:|------:|----:|------:|
|  1  | 150 |  6 | 100 | 11 | 110 | 16 |  80 | 21 |  90 |
|  2  | 140 |  7 | 110 | 12 |  80 | 17 |  80 | 22 | 110 |
|  3  | 100 |  8 |  80 | 13 | 100 | 18 |  80 | 23 |  90 |
|  4  |  90 |  9 | 130 | 14 | 100 | 19 |  70 | 24 |  80 |
|  5  | 120 | 10 | 100 | 15 | 120 | 20 |  90 | 25 | 130 |

Distribuzione fissa per concetto: **3 riconosci + 3 trappola + 3 trasferisci + 1 origina** = 10.

---

## Debiti e flag di qualità (per Fase 7 README e per code review)

### Da rivedere prima del go-live

1. **peso_quiz in `argomenti.ts`**: attualmente 2 per primari / 1 per
   integrativi = schema storico pre-DM 27/10/2021 (somma 40, non 30).
   Rivalidare contro un conteggio reale sul pool ministeriale quando
   disponibile. Vedi TODO 4 in `docs/research/01` § 4.
2. **Articolo 186 co. 9-ter alcolock**: il numero esatto del comma inserito
   da L. 177/2024 non era confermato nel research doc. Il subagente del
   batch arg11-15 ha usato la dicitura composita `Art. 186 co. 9-ter CdS
   — DM 2/7/2025`; verificare su Normattiva consolidato.
3. **Articolo 148 co. 9-bis sorpasso ciclisti**: stesso problema di numerazione
   del comma post-L. 177/2024 — la regola "≥ 1,5 m" è certa, la numerazione
   del comma è da confermare.
4. **Sanzioni art. 117 neopatentati** (fascia 165-660 €, sospensione 2-8 mesi):
   il research doc indicava "usare fasce, non centesimi". Le fasce usate
   sono prudenziali e coerenti con i parametri ACI ma non sono state
   verificate sul testo del DM di aggiornamento biennale 2024.
5. **Esenzioni cinture art. 172 co. 7**: elenco compilato su base storica,
   verificare che la L. 177/2024 non abbia aggiunto/tolto categorie.
6. **arg20 strisce rosa**: inserite come "prassi consolidata" su base DM MIT
   del 2022; confermare con fonte primaria.
7. **Quiz items con `risposta_corretta: true` su trappole**: i subagenti hanno
   usato occasionalmente la libertà di fare trappole anche VERE (la trappola
   colpisce la formulazione, non la risposta). Il subagente del batch arg11-15
   ha segnalato in particolare `QUIZ-ARG14-C002-05` (P16 con risposta true)
   e `QUIZ-ARG15-C007-06` (P15 "ovvero") come item didatticamente validi ma
   fuori dal pattern implicito "pattern ⇒ falso". Da decidere con il Coach
   (T4) se uniformare.
8. **Alcuni `articolo_cds: undefined`** compaiono in arg15 per concetti extra-
   normativi (primo soccorso, farmacologia): coerente con il tipo, ma la
   Fase 7 README dovrebbe elencarli per trasparenza.

### Pattern coverage — note

- Tutti i P01-P18 sono usati almeno una volta nel corpus.
- P07 (numeri quasi-giusti) è il pattern più denso, concentrato su arg07
  (velocità), arg08 (distanza), arg15 (alcol) e arg22 (sanzioni).
- P17 (causa-effetto invertita) è stato volontariamente concentrato su arg25
  (veicolo) come richiesto dal brief (spazio frenata vs riflessi, tenuta di
  strada vs cilindrata).
- F01-F05 sono usati solo come spie lessicali nelle `spiegazione`, mai come
  `pattern_trappola` (regola 5 di `docs/research/03` § 4).

---

## Come riprendere (runbook per la prossima sessione)

1. **Apri Claude Code** nella directory `C:\Users\Ridis\Documents\Project\PatenteGo`.
2. **Verifica branch**: `git status` deve mostrare `claude/patentego-rotta-method-Pf7tU`.
3. **Pull** ultime modifiche: `git pull --rebase --autostash origin claude/patentego-rotta-method-Pf7tU`.
4. **Leggi questo file** (`docs/content/T2-RESUME.md`) per riallinearti.
5. **Controlla se T1 ha creato `src/types/`** — se sì, aggiorna gli import in
   `src/data/_types.ts` per ri-esportare da lì (o cancella `_types.ts` se
   possibile senza rompere nulla).
6. **Esegui Fase 6** (`src/data/seed.ts`) seguendo lo schema sopra.
7. **Esegui Fase 7** (`docs/content/README.md`) usando i conteggi e i debiti
   elencati sopra.
8. **Commit per fase** (regola T2): messaggio stile `feat(t2/fase-N): ...`.
9. **Push** dopo ogni commit con `git push origin claude/patentego-rotta-method-Pf7tU`.

## File prodotti in questa sessione (albero)

```
src/data/
  _types.ts                  # tipi locali temporanei
  argomenti.ts               # 25 argomenti
  patterns.ts                # 18 P + 5 F
  calibration.ts             # parametri R.O.T.T.A. / FSRS
  interleaving-map.ts        # 6 gruppi + matrice
  concetti/
    index.ts                 # aggregato 253 concetti
    arg01-segnali-pericolo.ts .. arg25-veicolo-manutenzione.ts
  quiz/
    index.ts                 # aggregato 2530 quiz items
    arg01-quiz.ts .. arg25-quiz.ts
```

## File NON toccati (domini altrui — non modificare)

- `src/app/`, `src/components/`, `src/lib/engine/`, `src/lib/fsrs/`,
  `src/lib/db/`, `src/lib/auth/`, `src/types/`, `supabase/`, root config.
- Gli altri agenti (T1/T3/T4) potrebbero avere già creato/modificato alcuni
  di questi in parallelo: **non merge-ar-li né editarli manualmente**.
