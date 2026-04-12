# Fase 0 — Agente 4: Evidenze scientifiche del metodo R.O.T.T.A.

Data ricerca: 2026-04-12

Sintesi peer-reviewed a supporto delle 5 fasi di R.O.T.T.A. e calibrazione
operativa dei parametri.

## 1. RICONOSCI / Active Recall

**Effect size**:
- Adesope, Trevisan & Sundararajan (2017), meta-analisi 272 confronti:
  **g = 0.61** vs altre pratiche; **g = 0.51 vs restudy**; **g = 0.93 vs filler**.
  MC: g = 0.70; short-answer: g = 0.48.
- Roediger & Karpicke (2006): forgetting 56% (rilettura) vs 13% (retrieval) a 1 settimana.

**Paper**:
1. Roediger & Karpicke (2006), Psychological Science 17(3) — DOI 10.1111/j.1467-9280.2006.01693.x
2. Karpicke & Roediger (2008), Science 319 — DOI 10.1126/science.1152408
3. Adesope, Trevisan & Sundararajan (2017), Review of Educational Research 87(3)

**Implicazioni PatenteGo**:
- Riconosci = retrieval, non rilettura. Domanda → poi spiegazione.
- Una volta corretto, NON rimuovere dal circuito: ritestare spaziato → giustifica FSRS.
- Formato MC ha ES superiore (0.70). Combinare con cloze in Origina.
- Feedback immediato in tutte le fasi (Roediger, Agarwal et al. 2011).

## 2. ORIGINA / Generation Effect & Productive Failure

**Effect size**:
- Bertsch et al. (2007), meta-analisi 86 studi: generation effect d = 0.40
  (within-subject 0.50; retention >1gg → **d = 0.64**, cresce col ritardo).
- Sinha & Kapur (2021), meta-analisi 166 confronti, ~12.000 partecipanti:
  productive failure vs istruzione diretta **d = 0.36** [0.20, 0.51];
  **d = 0.37–0.58** con alta fedeltà ai design principles.

**Paper**:
1. Bertsch, Pesta, Wiscott & McDaniel (2007), Memory & Cognition 35(2)
2. Sinha & Kapur (2021), Review of Educational Research 91(5)
3. Kapur (2014), Cognitive Science 38(5)

**Implicazioni PatenteGo**:
- Origina chiede risposta PRIMA della regola. Flow: scenario → tentativo →
  regola + spiegazione → confronto esplicito.
- **NO penalità errore in Origina** (no perdita vite, no punteggio negativo).
  L'errore È il meccanismo (Kapur).
- Guadagno visibile su ritardi >1gg → mostrare nelle analytics settimanali,
  non nel punteggio immediato.
- Vincolare la generazione (MC 2-3 opzioni, cloze) conserva l'effetto e
  riduce frustrazione.

## 3. TRAPPOLA + TRASFERISCI (1) / Interleaving

**Effect size**:
- Rohrer & Taylor (2007): d = 1.34 su test differito.
- Taylor & Rohrer (2010): 77% vs 38% a 1gg (d ~ 1.21).
- Rohrer, Dedrick & Stershic (2015), RCT 9 settimane: 72% vs 38% (d = 1.05).
- Brunmair & Richter (2019), meta-analisi 59 studi: **g = 0.42** medio;
  g = 0.67 visivi; g = 0.34 matematica. **Effetto max su categorie SIMILI**
  e confondibili (perfetto per segnaletica stradale).

**Paper**:
1. Rohrer & Taylor (2007), Instructional Science 35
2. Taylor & Rohrer (2010), Applied Cognitive Psychology 24(6)
3. Rohrer (2012), Educational Psychology Review 24
4. Brunmair & Richter (2019), Psychological Bulletin 145(11)

**Implicazioni PatenteGo**:
- Sessioni mescolano almeno 3 macro-aree (precedenze + distanze + segnaletica…).
- Codice italiano = caso ideale (segnali simili = max guadagno Brunmair).
- Trappola = discriminative contrast esplicito (item quasi-identici con
  differenze sottili).
- "Desirable difficulty" (Bjork): in pratica si sbaglia di più, ma il test
  reale migliora. Comunicarlo all'utente.

## 4. TRASFERISCI / Far Transfer

**Punto chiave**: difficile ma raggiungibile con varianti di superficie + ancoraggio.

**Paper**:
1. Barnett & Ceci (2002), Psychological Bulletin 128(4) — tassonomia 9 dimensioni.
2. Paas & Van Merrienboer (1994), J. Educational Psychology 86(1) —
   alta variabilità → transfer significativamente migliore.
3. Detterman (1993).

**Implicazioni PatenteGo**:
- Ogni regola in **almeno 3-4 scenari visivamente diversi** (autostrada
  asciutta, statale piovosa, città, scooter dietro a camion).
- Ogni variante deve **ancorare esplicitamente al principio** astratto.
- Calibrazione: ≥3 varianti = near transfer; **5-6 = far transfer accettabile**.

## 5. AUTOMATIZZA / Spaced Repetition + FSRS

**Spacing effect**: Cepeda et al. (2006) 839 confronti — ripassi distribuiti
sempre superiori a massed.

**Ridgeline ottimale** (Cepeda 2008): gap = 10-20% del retention interval target.
Per esame a 60gg → primo ripasso a 6-12gg, NON 1gg, NON 30gg.

**SM-2 vs FSRS**:
- SM-2: formula statica, ease factor, no modello memoria, debt sui difficili.
- **FSRS**: modello DSR (Difficulty, Stability, Retrievability), 21 parametri ML.
  Esporre solo `desired_retention` (default **0.90**, range 0.80-0.95).
- Guadagno empirico: -20/-30% review a parità di retention vs SM-2.
- Libreria ufficiale: **py-fsrs / ts-fsrs** (mantenute da open-spaced-repetition).

**Quante ripetizioni per "automatizzato"?**
- Karpicke & Roediger 2008: una sola ripetizione NON basta.
- FSRS @ retention 0.9: per portare stability da ~1gg a ~180gg servono
  **5-8 ripetizioni positive ben spaziate** (difficulty media).
- Doc: https://expertium.github.io/Algorithm.html , https://expertium.github.io/Retention.html

**Paper**:
1. Cepeda, Pashler, Vul, Wixted & Rohrer (2006), Psych Bulletin 132(3)
2. Cepeda, Vul, Rohrer, Wixted & Pashler (2008), Psych Science 19(11)
3. Dunlosky et al. (2013), Psychological Science in the Public Interest 14(1)
   — spaced practice + practice testing classificati come **UNICI 2 metodi
   "high utility" su 10**.
4. https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler

**Implicazioni PatenteGo**:
- Usare libreria FSRS, non reinventare. Esporre `desired_retention`.
- Esame entro 30-45gg → 0.92-0.93. Default 0.90.

## CALIBRAZIONE consigliata per R.O.T.T.A. (baseline da rivalidare)

| Parametro | Valore | Razionale |
|---|---|---|
| Ripetizioni FSRS per "padroneggiato" | **5-7** consecutivi, stability >60gg @ R 0.9 | Karpicke 2008 + convergenza FSRS |
| Intervallo iniziale 1ª esposizione → 1° ripasso | **1 giorno** (12-36h) | Cepeda 2008 + default FSRS |
| 2° ripasso | 3-7 giorni dopo | FSRS doubling con Good |
| Scenari di transfer per concetto | **min 3, target 5-6** | Barnett & Ceci 2002, Paas 1994 |
| Item per "coprire" un concetto | **8-12** (3-4 base × 2-3 trappole) | Combinazione transfer + Trappola |
| Penalità errore in Origina | **NO** | Sinha & Kapur 2021 (productive failure) |
| Penalità errore in Trappola/Trasferisci | NO punitiva, ma re-accodare in FSRS (Again/Hard) | Testing effect + FSRS |
| Interleaving minimo per sessione | **≥3 macro-aree** | Brunmair & Richter 2019 |
| `desired_retention` FSRS | **0.90** default; 0.92-0.93 se esame <45gg | Cepeda 2008 + FSRS doc |
| Feedback in Riconosci | **immediato + spiegazione** | Roediger, Agarwal et al. 2011 |

## Flag di rischio / da rivalidare in Fase 1+

1. "5-7 ripetizioni" è convergenza operativa, non risultato peer-reviewed.
   Ricalibrare su accuracy a 30gg dopo 2-4 settimane di dati reali.
2. Brunmair & Richter ridimensionano interleaving (g = 0.42 vs d > 1 dei primi
   studi). Funziona, ma non miracolosamente.
3. Misurare esplicitamente il transfer (accuracy su item mai visti) come
   metrica di prodotto.
4. FSRS evolve (4 → 4.5 → 5 → 6). Agganciarsi a libreria ufficiale.

## Sintesi per PROJECT_LOG

R.O.T.T.A. ha base empirica solida e convergente: ES da g~0.4 a d>1 per le
5 fasi. Punti più forti: Riconosci (g=0.61) e Automatizza (Dunlosky 2013 li
classifica tra le 2 tecniche "high utility" su 10). Punto delicato:
Trasferisci (far transfer), che richiede 3-6 varianti di superficie per
concetto. Productive failure (Kapur) giustifica scientificamente NO penalità
errore in Origina. Per Automatizza: libreria FSRS ufficiale, retention 0.90,
5-7 ripetizioni positive ben spaziate per padronanza.
