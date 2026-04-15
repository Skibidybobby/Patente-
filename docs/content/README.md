# PatenteGo — Inventario contenuti T2

Documentazione dei contenuti normativi e didattici generati dal workstream T2
(Contenuti). Questo file è l'indice di `src/data/`.

Aggiornato al 2026-04-15, branch `claude/patentego-rotta-method-Pf7tU`.

## Panoramica

| Asset | Conteggio | File |
|---|---:|---|
| Argomenti ministeriali | **25** | `src/data/argomenti.ts` |
| Pattern trappola (P01-P18) | **18** | `src/data/patterns.ts` |
| Pattern folklore (F01-F05) | **5** | `src/data/patterns.ts` |
| Concetti atomici | **253** | `src/data/concetti/` |
| Quiz items R.O.T.T.A. | **2530** | `src/data/quiz/` |
| Gruppi di interleaving | **6** | `src/data/interleaving-map.ts` |

Tutto il contenuto è in italiano, ground-truthed sulle fonti in
`docs/research/` (DM 19/12/2012, DM 27/10/2021, L. 177/2024, DM 2/7/2025).

## Struttura dati

```
src/data/
├── _types.ts              # tipi locali (da dismettere quando T1 espone
│                          #  tutti i tipi di dominio in @/types/rotta)
├── argomenti.ts           # 25 argomenti del DM 19/12/2012
├── patterns.ts            # 18 P + 5 F da docs/research/03
├── calibration.ts         # parametri FSRS + R.O.T.T.A.
├── interleaving-map.ts    # 6 gruppi + matrice compatibilità
├── seed.ts                # aggregator Supabase (TablesInsert payloads)
├── concetti/
│   ├── index.ts           # CONCETTI (253) + CONCETTI_BY_ARGOMENTO
│   └── arg{01..25}-*.ts   # un file per argomento
└── quiz/
    ├── index.ts           # QUIZ_ITEMS (2530) + QUIZ_BY_ARGOMENTO
    └── arg{01..25}-quiz.ts
```

## Distribuzione concetti per argomento

| Arg | Nome                                | Tipo        | Concetti |
|----:|-------------------------------------|-------------|---------:|
|  1  | Segnali di pericolo                 | primario    | 15 |
|  2  | Segnali di divieto                  | primario    | 14 |
|  3  | Segnali di obbligo                  | primario    | 10 |
|  4  | Segnali di precedenza               | primario    |  9 |
|  5  | Segnaletica orizzontale             | primario    | 12 |
|  6  | Semafori e agenti                   | primario    | 10 |
|  7  | Limiti di velocità                  | primario    | 11 |
|  8  | Distanza di sicurezza               | primario    |  8 |
|  9  | Norme di circolazione               | primario    | 13 |
| 10  | Esempi di precedenza                | primario    | 10 |
| 11  | Sorpasso                            | primario    | 11 |
| 12  | Ingombro/traino                     | primario    |  8 |
| 13  | Dispositivi di ritenuta             | primario    | 10 |
| 14  | Incidenti                           | primario    | 10 |
| 15  | Psicofisico + primo soccorso        | primario    | 12 |
| 16  | Definizioni e doveri                | integrativo |  8 |
| 17  | Segnali di indicazione              | integrativo |  8 |
| 18  | Temporanei/cantiere                 | integrativo |  8 |
| 19  | Pannelli integrativi                | integrativo |  7 |
| 20  | Fermata e sosta                     | integrativo |  9 |
| 21  | Luci e spie                         | integrativo |  9 |
| 22  | Patenti, documenti, sanzioni        | integrativo | 11 |
| 23  | Responsabilità e RCA                | integrativo |  9 |
| 24  | Ambiente e consumi                  | integrativo |  8 |
| 25  | Veicolo e manutenzione              | integrativo | 13 |
| **TOT** |                                |             | **253** |

Il research doc (`docs/research/01` § 3) parla di "~330 concetti" nel testo
ma la tabella dettagliata somma a 253: abbiamo seguito la tabella. Il gap
di ~75 concetti può essere riassorbito in una Fase 1b-bis quando il team
rivedrà la copertura didattica.

## Distribuzione quiz items per argomento

Ogni concetto ha **esattamente 10 items** strutturati come segue:

- **3** `riconosci` (fase BASE — formulazione diretta della regola)
- **3** `trappola` (UN pattern P01-P18 isolato, dichiarato nella spiegazione)
- **3** `trasferisci` (stessa regola in scenario diverso, `scenario_transfer`
  compilato)
- **1** `origina` (scenario da cui l'utente deve inferire la regola)

Totale: **253 × 10 = 2530** quiz items.

| Arg | Items | Arg | Items | Arg | Items | Arg | Items | Arg | Items |
|----:|------:|----:|------:|----:|------:|----:|------:|----:|------:|
|  1  | 150 |  6 | 100 | 11 | 110 | 16 |  80 | 21 |  90 |
|  2  | 140 |  7 | 110 | 12 |  80 | 17 |  80 | 22 | 110 |
|  3  | 100 |  8 |  80 | 13 | 100 | 18 |  80 | 23 |  90 |
|  4  |  90 |  9 | 130 | 14 | 100 | 19 |  70 | 24 |  80 |
|  5  | 120 | 10 | 100 | 15 | 120 | 20 |  90 | 25 | 130 |

Distribuzione Vero/Falso per file: banda 40-60% (media corpus ≈ 55% V).
Si può ottenere il numero esatto a runtime con `getSeedSummary()` in
`src/data/seed.ts`.

## Copertura pattern trappola

Tutti i pattern **P01-P18** sono usati almeno una volta nel corpus. Densità
per argomento (cfr. `docs/research/03` § 5):

| Argomento | Pattern dominanti (densità massima) |
|---|---|
| arg07 (velocità)            | P07 (numeri quasi-giusti), P10 (contesto silente) |
| arg08 (distanza sicurezza)  | P07, P08, P09, P17, P18 — **area trappola più densa** |
| arg10 (precedenze)          | P05, P06, P13 |
| arg20 (sosta/fermata)       | P10, P11, P13, **P14 (in corrispondenza / in prossimità)** |
| arg22 (sanzioni)            | P07 (numeri), P01, P15 ("ovvero" giuridico) |
| arg25 (veicolo)             | **P17** (spazio frenata vs riflessi, tenuta vs cilindrata), F04 |

I pattern folklore F01-F05 **non sono mai usati come stampo**: compaiono
solo come "spie" lessicali nelle `spiegazione` (regola 5 di
`docs/research/03` § 4).

## Normativa integrata (post L. 177/2024)

Le seguenti novità della riforma 2024 del Codice della Strada sono
effettivamente coperte dagli items:

- **Art. 117 neopatentati**: 3 anni, 100 km/h autostrada, 90 km/h extraurbana
  principale, 75 kW/t potenza, M1 max 105 kW, 0,0 g/l alcol. Sanzioni in fascia.
- **Art. 142 cumulo**: violazioni multiple in 60 min → sanzione più grave + 1/3.
- **Art. 148 co. 9-bis sorpasso ciclisti**: distanza laterale ≥ 1,5 m.
- **Art. 172 cinture/seggiolini**: ECE R129 i-Size dal 01/09/2024 (R44 in uso
  resta utilizzabile).
- **Art. 173 cellulare**: 1a volta 250-1.000 €, sospensione 15 gg-2 mesi,
  −5 punti; recidiva 350-1.400 €, 1-3 mesi, −10 punti.
- **Art. 175**: motocicli ≥ 120 cm³ in autostrada (prima 150).
- **Art. 186 + alcolock**: codici unionali 68 (niente alcool) e 69 (solo con
  alcolock), post DM 2/7/2025 (in vigore 26/07/2025).
- **Art. 187 stupefacenti**: eliminato lo "stato di alterazione"; sufficiente
  positività al principio attivo con nesso cronologico (non metaboliti).
- **Art. 193 RCA**: responsabilità rafforzata del proprietario.
- **Art. 218-ter sospensione breve**: 7 gg (10-19 punti) o 15 gg (< 10 punti).
- **Monopattini**: casco per tutti, RC obbligatoria, contrassegno.

## Gap noti e TODO (da rivalidare prima del go-live)

### Gap di copertura

1. **Delta ~75 concetti** rispetto alla stima iniziale di ~330. Decidere se
   riassorbire con una Fase 1b-bis o considerare la tabella di 253 come
   contenuto finale stabile.
2. **Concetti extra-normativi in arg15** (primo soccorso, farmacologia)
   hanno `articolo_cds: undefined`. È coerente con il tipo, ma la fonte
   didattica va dichiarata nel Coach UI.

### Numeri e riferimenti normativi da riconfermare

Tutte le cifre sono state prese dai documenti di ricerca (`docs/research/02`),
ma i punti seguenti sono flaggati come `VERIFICA` nella ricerca stessa o
sono stati scelti prudenzialmente:

1. **Numerazione commi post-L. 177/2024**: art. 186 co. 9-ter (alcolock) e
   art. 148 co. 9-bis (sorpasso ciclisti). I contenuti regole sono certi;
   la numerazione esatta del comma è da verificare su Normattiva
   consolidato.
2. **peso_quiz in `argomenti.ts`**: oggi 2 per primari / 1 per integrativi
   (schema storico pre-DM 27/10/2021, somma = 40). Rivalidare contro la
   ripartizione effettiva dei 30 quesiti attuali.
3. **Sanzioni art. 117 neopatentati**: fascia 165-660 € + 2-8 mesi — usata
   come stima prudenziale, non verificata sul DM biennale 2025.
4. **Esenzioni cinture art. 172 co. 7**: elenco compilato su base storica.
   Confermare che la L. 177/2024 non abbia modificato le categorie.
5. **Strisce rosa (arg20)**: inserite come "prassi consolidata" da DM MIT
   2022; confermare con fonte primaria.
6. **Codici unionali 68/69 — durata**: 2 o 3 anni a seconda della fascia.
   Nei quiz si parla genericamente di "2 o 3 anni"; chi studia va rinviato
   al DM alcolock per il dettaglio fascia-durata.

### Scelte di design da validare con T4 (UI)

1. **Trappole con `risposta_corretta: true`**: occasionalmente gli item
   `trappola` hanno risposta VERO (la trappola colpisce la formulazione,
   non la risposta). Esempi segnalati:
   - `QUIZ-ARG14-C002-05` (P16 con risposta true)
   - `QUIZ-ARG15-C007-06` (P15 "ovvero" con risposta true)
   Decidere con T4 se il Coach debba mostrare questo come "pattern ≠ falso"
   esplicitamente.
2. **`origina` → penalità errore = false** (cfr. Sinha & Kapur 2021). Il
   Coach deve mostrare graficamente che l'errore in `origina` è parte del
   metodo, non un fallimento.
3. **Mnemonic nelle spiegazioni**: i subagenti hanno inserito mnemonic
   verbali (es. "neo = cento tondo", "arresto = reazione + frenata"). T4
   può scegliere di isolarli in un componente `<Mnemonic>` dedicato, oppure
   lasciarli inline nel testo della spiegazione.

## Come riusare i dati

```typescript
// Tutti i concetti di un argomento
import { getConcettiByArgomento } from '@/data/concetti'
const concetti = getConcettiByArgomento(8)

// Tutti i quiz di un argomento
import { getQuizByArgomento } from '@/data/quiz'
const quiz = getQuizByArgomento(8)

// Tutti i quiz di un singolo concetto
import { getQuizByConcetto } from '@/data/quiz'
const items = getQuizByConcetto('ARG08-C001')

// Sessione interleaving: recupera gli argomenti compatibili con un seed
import { getArgomentiCompatibili } from '@/data/interleaving-map'
const mix = getArgomentiCompatibili(8, 2) // min score 2

// Seed Supabase (da chiamare dal runner in lib/db/)
import {
  ARGOMENTI_SEED,
  buildConcettiSeed,
  buildQuizItemsSeed,
  getSeedSummary,
} from '@/data/seed'
```

## Convenzioni di naming

- **Codice concetto**: `ARG{NN}-C{NNN}` — `NN` = 2-digit argomento,
  `NNN` = sequenza zero-padded all'interno dell'argomento.
- **Codice quiz item**: `QUIZ-{codice_concetto}-{NN}` — `NN` = sequenza
  zero-padded all'interno del concetto (01..10).
- **Export per-file concetti**: `ARG{NN}_CONCETTI`.
- **Export per-file quiz**: `ARG{NN}_QUIZ`.

## Fonti primarie (ricerca di Fase 0)

- `docs/research/01-programma-esame.md` — DM 19/12/2012 + tabella concetti
- `docs/research/02-cds-aggiornato.md` — L. 25/11/2024 n. 177 + DM 2/7/2025
- `docs/research/03-pattern-trappole.md` — tassonomia 18 pattern
- `docs/research/04-evidenze-scientifiche.md` — base scientifica R.O.T.T.A.
