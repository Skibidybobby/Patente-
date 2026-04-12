# PROJECT_LOG — PatenteGo

Coach intelligente per la patente B (Italia, 2026), basato sul metodo
proprietario **R.O.T.T.A.** (Riconosci, Origina, Trappola, Trasferisci,
Automatizza).

Stack: Next.js 14 (App Router) + TypeScript + Tailwind + Supabase + Vercel.
Mobile-first.

---

## 2026-04-12 — Setup branch + Supabase MCP

- Branch di sviluppo: `claude/patentego-rotta-method-Pf7tU`
- Aggiunto server MCP Supabase a `.mcp.json`
  (project_ref `sngutjjgonwqrjxodypr`, scope project, transport HTTP)
- Auth MCP da completare manualmente con `claude /mcp` in terminale
  prima dell'inizio Fase 1

## 2026-04-12 — Fase 0 RICERCA completata

Lanciati 4 agenti in parallelo. Output integrali in `docs/research/`.

### Agente 1 — Programma esame patente B 2026
File: `docs/research/01-programma-esame.md`

- Base normativa: **DM 19/12/2012** (GU 25/2013, codice 13A00676) +
  **DM 27/10/2021** (30 quesiti, 20 min, max 3 errori).
- **25 argomenti ministeriali** (15 primari + 10 integrativi).
- Decomposti in **~330 concetti atomici** (media 13/argomento).
- A 2,5 min/concetto = ~14h di contenuti R.O.T.T.A. di base.
- Verifiche aperte: PDF DM 19/12/2012, file ufficiale "Quiz Patente B",
  ripartizione effettiva 30 quesiti, copertura B1/BE.

### Agente 2 — CdS aggiornato 2024-2026
File: `docs/research/02-cds-aggiornato.md`

- **L. 177/2024** in vigore dal **14/12/2024** (GU 280 del 29/11/2024).
- Hot zones quiz: art. **173** (cellulare: −5pt, sospensione 15gg-2mesi),
  art. **117** (neopatentati 3 anni, 75 kW/t, 105 kW M1, 100 km/h
  autostrada), art. **186/186-bis** (alcolock cod. 68/69, decreto MIT
  2/7/2025), art. **187** (basta positività al principio attivo),
  monopattini (casco/targa/RC), art. **148** (1,5m laterali ciclisti).
- VERIFICHE: monopattini (decorrenza decreti attuativi), autovelox
  (giurisprudenza instabile → NO quiz), importi sanzioni (usare fasce).

### Agente 3 — Pattern trappola quiz ministeriale
File: `docs/research/03-pattern-trappole.md`

- Tassonomia di **18 pattern (P01–P18)** + 5 folkloristici (F01–F05).
- Pattern chiave: P01 quantificatori assoluti, P02 doppia negazione,
  P04 può/deve, P06 ha/deve dare precedenza, P07 numeri quasi-giusti,
  P10 ambito silenzioso, P15 "ovvero"=oppure, P18 verità fuori contesto.
- Regole TRAPPOLA per R.O.T.T.A.:
  1 pattern per item, pattern dichiarato a posteriori, no copia di item
  ministeriali, F01–F05 NON come stampi.
- Mappa pattern → argomento ad alto rischio per prioritizzare.

### Agente 4 — Evidenze scientifiche del metodo R.O.T.T.A.
File: `docs/research/04-evidenze-scientifiche.md`

R.O.T.T.A. ha base empirica solida e convergente:

- **Riconosci / Active Recall**: g = 0.61 (Adesope 2017), Roediger &
  Karpicke 2006, Karpicke & Roediger 2008.
- **Origina / Productive failure**: d = 0.36–0.58 (Sinha & Kapur 2021),
  generation effect d = 0.64 a >1gg (Bertsch 2007). **NO penalità errore.**
- **Trappola/Trasferisci(1) / Interleaving**: g = 0.42 (Brunmair &
  Richter 2019), max su categorie simili (perfetto per segnaletica).
- **Trasferisci / Far transfer**: difficile, richiede **3-6 varianti
  di superficie per concetto** (Barnett & Ceci 2002, Paas 1994).
- **Automatizza / FSRS**: spaced practice + practice testing = unici 2
  metodi "high utility" (Dunlosky 2013). `desired_retention = 0.90`,
  **5-7 ripetizioni positive** ben spaziate per padronanza. Usare
  libreria ufficiale py-fsrs/ts-fsrs.

### Calibrazione baseline R.O.T.T.A. (da rivalidare con dati utenti)

- Ripetizioni FSRS per "padroneggiato": **5-7** (stability >60gg @ R 0.9)
- Intervallo iniziale 1ª esposizione → 1° ripasso: **1 giorno**
- Scenari di transfer per concetto: **min 3, target 5-6**
- Item per "coprire" un concetto: **8-12** (3-4 base × 2-3 trappole)
- Penalità errore in Origina: **NO**
- Interleaving minimo per sessione: **≥3 macro-aree**
- `desired_retention`: **0.90** (0.92-0.93 se esame <45gg)

### Verifiche aperte da risolvere prima dei contenuti

1. Testo integrale DM 19/12/2012 + file ufficiale "Quiz Patente B"
2. Ripartizione effettiva 30 quesiti
3. Decreti attuativi monopattini (decorrenza targa/RC)
4. Importi sanzioni biennale 2025
5. Conferma neopatentati 100 km/h autostrada (Normattiva)
6. Decisione su B1/BE (out of scope per ora)

---

## Stato attuale

- ✅ Fase 0 — Ricerca completata, recap consegnato, in attesa di OK per Fase 1.
- ⏳ Fase 1 — Architettura Supabase (da spiegare in 2 paragrafi e attendere OK).
- ⏳ Fase 2 — MVP.
