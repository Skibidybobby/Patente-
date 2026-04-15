import type { QuizItem } from '../_types'

// Fonte: docs/research/03 + CdS artt. 116, 117, 125, 126, 126-bis, 173, 180,
// 186, 186-bis, 193, 213, 214, 218-ter + L. 177/2024.
// Quiz R.O.T.T.A. per argomento 22 — Patenti, documenti, sistema sanzionatorio,
// obblighi verso la polizia stradale. 11 concetti × 10 item = 110 item.
// Pattern dominanti del batch: P07 (numeri quasi-giusti), P01 (universali),
// P04 (può/deve), P15 (ovvero), P10 (condizione nascosta).
// IMPORTANTI: numeri esatti post-L.177/2024 (3 anni, 100 km/h, 75 kW/t, 105 kW,
// 7 gg / 15 gg, -5/-10 punti cellulare), importi in fasce e non in centesimi.

export const ARG22_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG22-C001 — Categoria B e requisiti
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C001-01',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La patente B abilita alla guida di autoveicoli con massa complessiva a pieno carico fino a 3.500 kg.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic numeri: "B = 3,5 t / 8 passeggeri / 18 anni". Soglia massa complessiva corretta: 3.500 kg.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-02',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per conseguire la patente B l\u2019et\u00e0 minima \u00e8 18 anni.',
    risposta_corretta: true,
    spiegazione:
      'Requisito anagrafico base. Per la guida accompagnata (B1 speciale/permesso) l\u2019et\u00e0 minima differisce ma non \u00e8 la "patente B".',
    livello_difficolta: 1,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-03',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La patente B consente il traino di un rimorchio leggero fino a 750 kg di massa complessiva.',
    risposta_corretta: true,
    spiegazione:
      'Soglia "rimorchio leggero" = 750 kg. Oltre servono le condizioni di combinazione o estensioni (B96, BE).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-04',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La patente B abilita alla guida di autoveicoli con massa complessiva a pieno carico fino a 4.500 kg.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 4.500 kg \u00e8 plausibile ma sbagliato. Soglia corretta 3.500 kg. Mnemonic "B = tre-virgola-cinque". 4.250 kg \u00e8 invece il limite per la combinazione con rimorchio pi\u00f9 pesante.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-05',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La patente B consente sempre il traino di qualunque rimorchio, a prescindere dalla massa complessiva della combinazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre" + "qualunque". La norma stabilisce limiti precisi: rimorchio \u2264 750 kg o combinazione \u2264 4.250 kg, oltre serve B96 o BE.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-06',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La patente B abilita al trasporto di al massimo nove persone oltre al conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 9 \u00e8 vicino ma sbagliato. Il limite \u00e8 "otto persone oltre al conducente" (nove persone totali a bordo). Mnemonic "B = 8+1".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-07',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un camper con massa complessiva 3.400 kg e 6 posti omologati. Un titolare di patente B pu\u00f2 guidarlo.',
    risposta_corretta: true,
    spiegazione:
      'Entrambi i parametri rispettati: massa complessiva < 3.500 kg e persone \u2264 8 oltre al conducente. Patente B sufficiente.',
    scenario_transfer: 'camper entro soglia 3,5 t',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-08',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: vettura 1.800 kg che traina un carrello barca di 900 kg, combinazione totale 2.700 kg. La sola patente B \u00e8 sufficiente.',
    risposta_corretta: true,
    spiegazione:
      'Il rimorchio supera i 750 kg (non "leggero") ma la combinazione \u00e8 sotto 4.250 kg: la B \u00e8 sufficiente, non serve B96 n\u00e9 BE.',
    scenario_transfer: 'carrello barca 900 kg con auto',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-09',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: furgone di 3.800 kg di massa complessiva a pieno carico. Un titolare di sola patente B pu\u00f2 guidarlo.',
    risposta_corretta: false,
    spiegazione:
      '3.800 kg supera la soglia dei 3.500 kg. Serve la patente C1 (veicoli da 3,5 a 7,5 t) o superiore.',
    scenario_transfer: 'furgone 3,8 t',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C001-10',
    concetto_codice: 'ARG22-C001',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca i tre parametri chiave che definiscono i limiti della patente B (massa, persone, rimorchio) con i relativi valori numerici.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) massa complessiva \u2264 3.500 kg; (2) \u2264 8 persone oltre al conducente; (3) rimorchio leggero \u2264 750 kg oppure combinazione \u2264 4.250 kg (fino a 7.000 kg con B96).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },

  // ============================================================
  // ARG22-C002 — Neopatentati: durata 3 anni
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C002-01',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per le patenti B conseguite dal 14 dicembre 2024 il regime dei neopatentati dura soltanto 1 anno dal conseguimento.',
    risposta_corretta: false,
    spiegazione:
      'Falso: la L. 177/2024 ha ESTESO la durata da 1 a 3 anni. Mnemonic "177/24 \u2192 3 anni". Le patenti conseguite prima del 14/12/2024 restano al regime precedente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-02',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante il periodo di neopatentato il limite del tasso alcolemico \u00e8 0,0 g/l.',
    risposta_corretta: true,
    spiegazione:
      'Tolleranza zero assoluta: qualsiasi valore > 0 configura ebbrezza ai sensi dell\u2019art. 186-bis CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-03',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nel periodo da neopatentato si applicano simultaneamente limiti di potenza, velocit\u00e0 ridotta su alcune strade e alcol zero.',
    risposta_corretta: true,
    spiegazione:
      'Tripletta vincolante: potenza/tara, velocit\u00e0 extraurbana ridotta, zero alcol. Tutte e tre agiscono insieme per i 3 anni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-04',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per le patenti B conseguite dopo la riforma del 2024 il regime dei neopatentati dura 2 anni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 2 anni \u00e8 un valore vicino e plausibile ma sbagliato. Post-L.177/2024 il regime dura 3 anni. Mnemonic "177/24 \u2192 3 anni".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-05',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il regime dei neopatentati dura 3 anni per tutte le patenti B in corso di validit\u00e0, anche quelle conseguite prima del 14/12/2024.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "tutte le patenti in corso di validit\u00e0" ignora la decorrenza. La durata di 3 anni vale SOLO per le patenti conseguite DAL 14/12/2024; quelle prima restavano al regime in vigore al momento.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-06',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il neopatentato pu\u00f2 consumare una piccola quantit\u00e0 di alcol prima di mettersi alla guida, purch\u00e9 resti sotto i 0,5 g/l.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: 0,5 g/l \u00e8 il limite generale dell\u2019art. 186, NON dei neopatentati. Per chi \u00e8 in regime art. 117/186-bis il limite \u00e8 0,0 g/l.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-07',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Anna ha conseguito la patente B il 10 gennaio 2025. Il 10 gennaio 2027 \u00e8 ancora neopatentata.',
    risposta_corretta: true,
    spiegazione:
      'Conseguimento post-14/12/2024, quindi regime triennale: 10/01/2025 + 3 anni = 10/01/2028. Nel 2027 il regime \u00e8 ancora in corso.',
    scenario_transfer: 'computo date post-riforma',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-08',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: neopatentato soffia 0,1 g/l a un controllo. Ha violato l\u2019art. 186-bis CdS.',
    risposta_corretta: true,
    spiegazione:
      'Tasso zero: qualsiasi valore > 0 (anche 0,1) configura ebbrezza con aggravante art. 186-bis per i neopatentati.',
    scenario_transfer: 'alcol residuo minimo per neopatentato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-09',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un 20enne ha preso la patente il 20 dicembre 2024. Nel marzo 2029 \u00e8 ancora soggetto al limite di potenza del veicolo.',
    risposta_corretta: false,
    spiegazione:
      '20/12/2024 + 3 anni = 20/12/2027. Nel marzo 2029 \u00e8 gi\u00e0 passato pi\u00f9 di un anno dalla fine del regime: limiti non pi\u00f9 applicabili.',
    scenario_transfer: 'fine regime neopatentato',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C002-10',
    concetto_codice: 'ARG22-C002',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Qual era il regime dei neopatentati prima della L. 177/2024 e cosa \u00e8 cambiato dopo? Rispondi su durata, limite di potenza e alcol.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: pre-riforma 1 anno per il limite di potenza; post-riforma 3 anni. Alcol 0,0 g/l per 3 anni rimane. Limite di potenza e velocit\u00e0 sulle strade extraurbane si estendono al triennio.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },

  // ============================================================
  // ARG22-C003 — Neopatentati: potenza 75 kW/t, 105 kW
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C003-01',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante i primi 3 anni dal rilascio della patente B il rapporto potenza/tara del veicolo non pu\u00f2 superare 75 kW/t.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "75 sulla tara": 75 kW ogni tonnellata di tara. Il limite \u00e8 sul rapporto potenza specifica, non solo sulla potenza assoluta.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-02',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per le autovetture M1, oltre al rapporto 75 kW/t, il neopatentato ha anche un limite assoluto di 105 kW di potenza massima.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "75 rapporto, 105 tetto M1": doppio vincolo per le auto. Basta violarne uno per essere fuori limite.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-03',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La violazione dei limiti di potenza del veicolo per neopatentati comporta sanzione amministrativa e sospensione della patente.',
    risposta_corretta: true,
    spiegazione:
      'Fascia 165-660 \u20ac + sospensione 2-8 mesi. Le fasce sono aggiornate periodicamente ex art. 195 c.3 CdS.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-04',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Durante i primi 3 anni dalla patente B il rapporto potenza/tara non pu\u00f2 superare 55 kW/t.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 55 kW/t era il limite storico del vecchio regime, 75 kW/t \u00e8 il vero numero. Mnemonic "75 sulla tara".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-05',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per le autovetture M1, il neopatentato pu\u00f2 guidare veicoli fino a 150 kW di potenza massima.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 150 kW \u00e8 uno dei valori distrattori tipici. Il tetto \u00e8 105 kW. Mnemonic "75/105".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-06',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il neopatentato pu\u00f2 guidare qualsiasi auto M1 se rispetta il limite di 75 kW/t, anche con potenza massima superiore a 105 kW.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero" (qui in versione "oppure-vs-cio\u00e8"): i due limiti sono CUMULATIVI, non alternativi. Servono entrambi rispettati: 75 kW/t E 105 kW max.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-07',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: auto M1 con tara 1.400 kg e potenza massima 100 kW. Un neopatentato pu\u00f2 guidarla.',
    risposta_corretta: true,
    spiegazione:
      '100 kW / 1,4 t = 71,4 kW/t < 75 kW/t, e potenza assoluta 100 < 105 kW. Entrambi i vincoli rispettati.',
    scenario_transfer: 'calcolo kW/t su M1 reale',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-08',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: auto M1 con tara 1.600 kg e potenza massima 110 kW. Un neopatentato pu\u00f2 guidarla.',
    risposta_corretta: false,
    spiegazione:
      'Rapporto 110/1,6 = 68,75 kW/t (OK), ma la potenza assoluta \u00e8 110 kW > 105 kW (NO). Basta una violazione.',
    scenario_transfer: 'superamento solo tetto assoluto',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-09',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: auto M1 con tara 900 kg e potenza massima 75 kW. Il neopatentato pu\u00f2 guidarla.',
    risposta_corretta: false,
    spiegazione:
      '75/0,9 = 83,3 kW/t > 75 kW/t: rapporto violato. Anche se la potenza assoluta \u00e8 bassa, la tara piccola la rende "troppo sportiva" per i limiti.',
    scenario_transfer: 'small car troppo tirata',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C003-10',
    concetto_codice: 'ARG22-C003',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 il legislatore ha imposto due vincoli cumulativi (rapporto 75 kW/t + tetto 105 kW) e non uno solo? Giustifica con un esempio.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: il solo rapporto kW/t lascerebbe passare SUV molto pesanti con potenze enormi (es. 180 kW su 2,5 t = 72 kW/t OK); il solo tetto assoluto lascerebbe passare city car leggerissime con 100 kW = rapporto troppo alto. I due limiti insieme coprono entrambi gli estremi.',
    livello_difficolta: 5,
    articolo_cds: 'Art. 117 CdS',
  },

  // ============================================================
  // ARG22-C004 — Neopatentati: velocità e alcol
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C004-01',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nei primi 3 anni di patente la velocit\u00e0 massima consentita in autostrada al neopatentato \u00e8 110 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Falso: il valore corretto \u00e8 100 km/h, non 110. Mnemonic "100/90 neopatentato": 100 in autostrada, 90 in extraurbana principale. 110 \u00e8 il valore del conducente ordinario in extraurbana principale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-02',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il neopatentato non pu\u00f2 superare 90 km/h sulle strade extraurbane principali.',
    risposta_corretta: true,
    spiegazione:
      'Limite ridotto rispetto al 110 km/h ordinario: la soglia scende di 20 km/h per la minore esperienza del conducente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-03',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per il neopatentato il tasso alcolemico consentito \u00e8 0,0 g/l.',
    risposta_corretta: true,
    spiegazione:
      'Tolleranza zero assoluta per tutti i conducenti sotto art. 186-bis, neopatentati inclusi.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-04',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il neopatentato in autostrada pu\u00f2 raggiungere 110 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 110 km/h \u00e8 il classico distrattore. Il vero limite autostradale del neopatentato \u00e8 100 km/h. Mnemonic "100/90 neopatentato".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-05',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite di tasso alcolemico del neopatentato \u00e8 0,05 g/l.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 0,05 \u00e8 graficamente molto vicino a 0,5 ma qui serve 0,0. Il neopatentato ha tolleranza ZERO (0,0 g/l), non un "quasi zero".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-06',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite di 100 km/h del neopatentato vale su qualsiasi strada.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: 100 km/h vale SOLO in autostrada. Su extraurbane principali scende a 90; su ordinarie e urbane si applicano gli altri limiti.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-07',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: neopatentato in A1 con limite cartello 130 km/h. Pu\u00f2 marciare a 115 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Il cartello 130 si riferisce al limite generale; il neopatentato \u00e8 fermo a 100 km/h in autostrada a prescindere dai cartelli che consentono di pi\u00f9.',
    scenario_transfer: 'autostrada con limite generico pi\u00f9 alto',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-08',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: neopatentato su SS 16, strada extraurbana principale, con limite cartello 90 km/h per lavori. Pu\u00f2 circolare a 90 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Il cartello impone 90 per tutti e per il neopatentato 90 \u00e8 gi\u00e0 il suo limite strutturale. Nessun conflitto.',
    scenario_transfer: 'extraurbana con limite cartello coincidente',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-09',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: neopatentato con tasso rilevato 0,3 g/l al controllo. \u00c8 guida in stato di ebbrezza aggravata ex art. 186-bis.',
    risposta_corretta: true,
    spiegazione:
      '0,3 > 0,0 g/l del neopatentato. Rientra in art. 186-bis con applicazione del regime aggravato previsto per soggetti a tolleranza zero.',
    scenario_transfer: 'alcol moderato ma non zero',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C004-10',
    concetto_codice: 'ARG22-C004',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega il senso della "doppia riduzione" imposta al neopatentato (velocit\u00e0 + alcol) come strumento di prevenzione nei primi 3 anni.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la statistica mostra che i primi anni di guida sono i pi\u00f9 incidentati; ridurre simultaneamente velocit\u00e0 (tempo di reazione disponibile) e alcol (capacit\u00e0 di reazione) aggredisce entrambi i fattori di rischio che si combinano negli incidenti pi\u00f9 gravi dei giovani guidatori.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117, 186-bis CdS',
  },

  // ============================================================
  // ARG22-C005 — Documenti a bordo
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C005-01',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante la guida il conducente deve avere con s\u00e9 la patente in corso di validit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Obbligo base dell\u2019art. 180 CdS: senza patente a bordo si rischia sanzione anche se si \u00e8 effettivamente titolari.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-02',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A un controllo di polizia stradale il conducente deve fermarsi e fornire i documenti richiesti.',
    risposta_corretta: true,
    spiegazione:
      'Obbligo di arresto e collaborazione. Il rifiuto o l\u2019omissione espone a sanzioni aggravate (art. 192 CdS).',
    livello_difficolta: 1,
    articolo_cds: 'Art. 192 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-03',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Fra i documenti da avere a bordo rientra la carta di circolazione del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Il "libretto" (carta di circolazione) attesta la regolarit\u00e0 amministrativa del veicolo e deve essere esibibile al controllo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-04',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente \u00e8 tenuto a esibire i documenti solo se espressamente sospettato di un\u2019infrazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: l\u2019obbligo di esibizione scatta con la semplice RICHIESTA dell\u2019organo di polizia, non richiede un sospetto specifico di violazione.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: 'Art. 192 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-05',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      '\u00c8 vietato consegnare la patente all\u2019agente di polizia stradale durante un controllo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: la norma IMPONE di consegnarla, non lo vieta. Scambio classico di polarit\u00e0.',
    pattern_trappola: 'P03',
    livello_difficolta: 2,
    articolo_cds: 'Art. 192 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-06',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2, a sua discrezione, fermarsi o proseguire quando riceve l\u2019alt di un organo di polizia stradale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: l\u2019arresto \u00e8 un obbligo ("deve fermarsi"), non una facolt\u00e0. Il "pu\u00f2" rende discrezionale un obbligo di legge.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 192 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-07',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: circoli con la patente lasciata a casa per distrazione. A un controllo gli agenti ti sanzionano.',
    risposta_corretta: true,
    spiegazione:
      'Violazione dell\u2019obbligo di "avere con s\u00e9". La titolarit\u00e0 effettiva riduce la gravit\u00e0 ma non annulla la sanzione pecuniaria.',
    scenario_transfer: 'patente dimenticata',
    livello_difficolta: 2,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-08',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: il certificato di assicurazione \u00e8 stato inviato dalla compagnia in formato digitale e lo hai sul telefono. Puoi mostrarlo al controllo in quel formato.',
    risposta_corretta: true,
    spiegazione:
      'La dematerializzazione consente la presentazione digitale del certificato: l\u2019importante \u00e8 che l\u2019agente possa verificarne i dati.',
    scenario_transfer: 'certificato RCA digitale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-09',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: ricevi il segnale di alt da una pattuglia ma prosegui la marcia "perch\u00e9 hai fretta". \u00c8 una violazione aggravata.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 192 prevede sanzione aggravata per chi si sottrae al controllo; in certe ipotesi pu\u00f2 integrare anche fattispecie penali.',
    scenario_transfer: 'mancato arresto al controllo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 192 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C005-10',
    concetto_codice: 'ARG22-C005',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca i documenti che il conducente deve avere con s\u00e9 alla guida e spiega cosa attesta ciascuno di essi.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) patente (abilitazione del conducente); (2) carta di circolazione (regolarit\u00e0 del veicolo); (3) certificato di assicurazione RCA (copertura verso terzi). Obbligo di esibizione a richiesta degli agenti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 180 CdS',
  },

  // ============================================================
  // ARG22-C006 — Patente a punti
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C006-01',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il saldo iniziale della patente \u00e8 di 30 punti, che si riducono progressivamente con il tempo.',
    risposta_corretta: false,
    spiegazione:
      'Falso: il saldo INIZIALE \u00e8 20 punti, non 30. Mnemonic "patente = 20, tetto 30": si parte da 20 e si sale fino a 30 con bonus biennale virtuosi.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-02',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Ogni due anni senza infrazioni che comportano decurtazione si aggiungono 2 punti, fino a un massimo di 30.',
    risposta_corretta: true,
    spiegazione:
      'Bonus biennale +2 / tetto 30. \u00c8 l\u2019unico modo "ordinario" per incrementare il saldo nel tempo senza corsi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-03',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Quando il saldo raggiunge zero il conducente deve sottoporsi a una nuova prova di idoneit\u00e0 tecnica presso la Motorizzazione.',
    risposta_corretta: true,
    spiegazione:
      'Azzeramento = nuova prova d\u2019esame (teorica + pratica), pena sospensione. Non \u00e8 una "revoca", ma una rivalidazione tecnica.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-04',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il saldo iniziale della patente \u00e8 di 25 punti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 25 \u00e8 plausibile ma sbagliato. Saldo iniziale 20, tetto 30.',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-05',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il bonus biennale porta il saldo fino a un massimo di 40 punti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: il tetto \u00e8 30, non 40. Mnemonic "20 iniziali, 30 massimo".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-06',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il bonus biennale di 2 punti si applica in ogni caso, anche se nel biennio sono state commesse infrazioni con decurtazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso" + "anche se". La condizione legale \u00e8 proprio "senza infrazioni con decurtazione" nel biennio.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-07',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Marco ha patente da 4 anni, saldo attuale 24 punti, nessuna infrazione. Al prossimo biennio, salvo infrazioni, il saldo salir\u00e0 a 26.',
    risposta_corretta: true,
    spiegazione:
      'Bonus +2 al maturare di 2 anni senza decurtazioni: 24 \u2192 26. Il tetto rimane 30, quindi c\u2019\u00e8 spazio.',
    scenario_transfer: 'calcolo bonus biennale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-08',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Luca ha saldo 30 punti da un anno. Al prossimo biennio virtuoso il saldo salir\u00e0 a 32.',
    risposta_corretta: false,
    spiegazione:
      'Tetto massimo 30. Il bonus non lo supera mai. Luca resta a 30.',
    scenario_transfer: 'plafond a 30 punti',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-09',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: il saldo di Paolo va a zero dopo una sequenza di infrazioni. Dovr\u00e0 rifare l\u2019esame di idoneit\u00e0 tecnica per continuare a guidare.',
    risposta_corretta: true,
    spiegazione:
      'Azzeramento = visita + esame teoria e pratica di revisione. Senza di che la patente viene sospesa fino al superamento.',
    scenario_transfer: 'azzeramento punti',
    livello_difficolta: 3,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG22-C006-10',
    concetto_codice: 'ARG22-C006',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Riassumi in 3-4 righe il meccanismo della patente a punti (saldo iniziale, bonus, decurtazione, conseguenze dell\u2019azzeramento).',
    risposta_corretta: true,
    spiegazione:
      'Atteso: parte da 20, sale di 2 ogni biennio virtuoso fino a 30, si decurta a ogni infrazione prevista dall\u2019art. 126-bis, all\u2019azzeramento occorre ripassare un esame di idoneit\u00e0 tecnica pena sospensione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 126-bis CdS',
  },

  // ============================================================
  // ARG22-C007 — Cellulare (art. 173)
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C007-01',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dal 14/12/2024 la prima violazione dell\u2019art. 173 (cellulare alla guida) comporta decurtazione di 3 punti come nel regime precedente.',
    risposta_corretta: false,
    spiegazione:
      'Falso: la riforma ha portato la decurtazione a 5 punti alla prima violazione e a 10 punti in caso di recidiva entro 2 anni. Mnemonic "cellulare 1a: -5 / 2a: -10". Il valore 3 era il vecchio regime pre-2024.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-02',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La prima violazione dell\u2019art. 173 comporta sospensione immediata della patente da 15 giorni a 2 mesi.',
    risposta_corretta: true,
    spiegazione:
      'Sospensione IMMEDIATA gi\u00e0 alla prima violazione: \u00e8 una delle novit\u00e0 pi\u00f9 incisive della riforma del cellulare alla guida.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-03',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Alla recidiva entro due anni la decurtazione dell\u2019art. 173 sale a 10 punti.',
    risposta_corretta: true,
    spiegazione:
      'Raddoppio dei punti alla recidiva biennale: -5 prima volta, -10 seconda.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-04',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La prima violazione del divieto di uso del cellulare alla guida comporta la decurtazione di 3 punti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 3 era il valore pre-riforma (regime vecchio); oggi \u00e8 5. Mnemonic "cellulare 5/10".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-05',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sospensione della patente per uso del cellulare alla guida scatta solo in caso di recidiva.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: "solo in caso di recidiva" inserisce una condizione che non c\u2019\u00e8. Dopo il 14/12/2024 la sospensione \u00e8 IMMEDIATA gi\u00e0 alla prima violazione.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-06',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 tenere il cellulare in mano mentre guida, purch\u00e9 non digiti messaggi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la norma vieta di "tenerlo in mano" senza distinzioni sulla funzione. Anche "solo per parlare" \u00e8 vietato se non in vivavoce/auricolare.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-07',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Chiara, prima violazione art. 173 in via Roma. Oltre alla multa riceve sospensione immediata della patente e -5 punti.',
    risposta_corretta: true,
    spiegazione:
      'Caso di scuola post-riforma: multa (250-1.000 \u20ac fascia), sospensione immediata (15 gg - 2 mesi), -5 punti.',
    scenario_transfer: 'prima violazione cellulare urbana',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-08',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Davide viene sorpreso al cellulare due volte in 18 mesi. Alla seconda perde 10 punti e la sospensione pu\u00f2 arrivare a 3 mesi.',
    risposta_corretta: true,
    spiegazione:
      'Recidiva entro 2 anni (18 mesi rientra): -10 punti, sospensione 1-3 mesi, multa 350-1.400 \u20ac.',
    scenario_transfer: 'recidiva biennale cellulare',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-09',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Elena usa uno smartwatch con cassa vocale e il telefono in tasca. Non sta violando l\u2019art. 173.',
    risposta_corretta: true,
    spiegazione:
      'Il divieto colpisce chi TIENE IN MANO l\u2019apparecchio. L\u2019uso in vivavoce o con dispositivi che lasciano libere le mani (smartwatch, auricolari) non viola la norma.',
    scenario_transfer: 'dispositivo a mani libere',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C007-10',
    concetto_codice: 'ARG22-C007',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Scrivi con parole tue la tripla sanzione art. 173 post-riforma alla prima violazione: multa, sospensione, punti. Indica il principio di gradualit\u00e0 rispetto alla recidiva.',
    risposta_corretta: true,
    spiegazione:
      'Atteso prima volta: multa 250-1.000 \u20ac, sospensione immediata 15 gg - 2 mesi, -5 punti. Recidiva biennale: 350-1.400 \u20ac, 1-3 mesi, -10 punti. Principio: raddoppio progressivo su tutte e tre le dimensioni.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 173 CdS',
  },

  // ============================================================
  // ARG22-C008 — Sospensione breve (art. 218-ter)
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C008-01',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sospensione breve della patente ex art. 218-ter dura 7 giorni quando il saldo \u00e8 tra 10 e 19 punti.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "10-19 \u2192 7 gg, <10 \u2192 15 gg". La gravit\u00e0 della misura cresce al diminuire del saldo residuo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-02',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se il saldo \u00e8 inferiore a 10 punti la sospensione breve \u00e8 di 15 giorni.',
    risposta_corretta: true,
    spiegazione:
      'Fascia pi\u00f9 severa: meno di 10 punti residui = 15 giorni di stop.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-03',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sospensione breve si aggiunge alle sanzioni principali previste per la violazione commessa.',
    risposta_corretta: true,
    spiegazione:
      '\u00c8 una sanzione accessoria che CUMULA, non sostituisce, le sanzioni ordinarie dell\u2019infrazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-04',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sospensione breve dura 10 giorni se il saldo \u00e8 inferiore a 10 punti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 10 giorni \u00e8 una "via di mezzo" apparente tra 7 e 15, ma non \u00e8 un valore legale. Sotto 10 punti sono esattamente 15 giorni.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-05',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sospensione breve sostituisce la sanzione pecuniaria della violazione commessa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che la sospensione "breve" \u00e8 una novit\u00e0, ma NON sostituisce nulla: si aggiunge alla multa e alla decurtazione punti.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-06',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sospensione breve ex art. 218-ter scatta in ogni caso, a prescindere dal saldo punti residuo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso" ignora la condizione legale. La misura scatta solo con saldo < 20 punti (le due fasce 10-19 e < 10) e con infrazione che decurta almeno 5 punti.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-07',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Francesca ha 12 punti residui e commette una violazione che toglie 5 punti. Riceve sospensione breve di 7 giorni.',
    risposta_corretta: true,
    spiegazione:
      'Saldo 12 (tra 10 e 19) + decurtazione \u2265 5 punti \u2192 7 giorni di sospensione breve.',
    scenario_transfer: 'saldo medio con decurtazione',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-08',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Giovanni ha 8 punti residui e commette un\u2019infrazione che decurta 5 punti. La sospensione breve sar\u00e0 di 15 giorni.',
    risposta_corretta: true,
    spiegazione:
      'Saldo 8 < 10 \u2192 fascia pi\u00f9 severa, 15 giorni di sospensione breve.',
    scenario_transfer: 'saldo basso',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-09',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Sara ha 20 punti pieni e commette una violazione che toglie 5 punti. Deve subire la sospensione breve.',
    risposta_corretta: false,
    spiegazione:
      '20 punti non rientra n\u00e9 nella fascia 10-19 n\u00e9 in quella < 10. La sospensione breve scatta solo con saldo gi\u00e0 eroso.',
    scenario_transfer: 'saldo pieno - non si applica',
    livello_difficolta: 3,
    articolo_cds: 'Art. 218-ter CdS',
  },
  {
    codice: 'QUIZ-ARG22-C008-10',
    concetto_codice: 'ARG22-C008',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Qual \u00e8 la logica della sospensione breve rispetto al tradizionale procedimento di sospensione? Spiega perch\u00e9 esistono due fasce (10-19 e < 10).',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la logica \u00e8 l\u2019immediata interruzione della guida per chi sta per azzerarsi, senza attendere i tempi della sospensione amministrativa ordinaria. Le due fasce segnalano un crescendo: 7 gg come primo avviso, 15 gg come ultimo campanello prima dell\u2019azzeramento.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 218-ter CdS',
  },

  // ============================================================
  // ARG22-C009 — Ebbrezza art. 186 e alcolock
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C009-01',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale del tasso alcolemico per la guida \u00e8 0,5 g/l.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "0,5 soglia generale \u2013 0,0 per neopatentati/professionali". \u00c8 il riferimento per chi non rientra nell\u2019art. 186-bis.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-02',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La fascia 0,5-0,8 g/l \u00e8 sanzione amministrativa; oltre 0,8 g/l si entra nel penale.',
    risposta_corretta: true,
    spiegazione:
      'Tre fasce: 0,5-0,8 (amministrativa); 0,8-1,5 (reato + sospensione); oltre 1,5 (reato + revoca).',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-03',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dal 2024 il giudice pu\u00f2 imporre l\u2019alcolock ai condannati per ebbrezza, con il codice unionale 68 ("niente alcool").',
    risposta_corretta: true,
    spiegazione:
      'L\u2019alcolock \u00e8 un dispositivo che impedisce l\u2019avviamento se rileva alcol nel respiro. Applicabile per 2 o 3 anni a seconda della fascia.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-04',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite generale del tasso alcolemico \u00e8 0,05 g/l.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 0,05 e 0,5 differiscono di un ordine di grandezza, ma graficamente sono quasi identici. Il valore corretto \u00e8 0,5 g/l.',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-05',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019ebbrezza oltre 1,5 g/l comporta sospensione della patente, non revoca.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 – Coppie Terminologiche Quasi-Sinonime: sospensione e revoca sono diverse. Oltre 1,5 g/l \u00e8 REVOCA; la sospensione \u00e8 per la fascia 0,8-1,5.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-06',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019alcolock \u00e8 un dispositivo facoltativo che il condannato pu\u00f2 installare a sua discrezione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: NON \u00e8 una scelta. Viene imposto dal giudice come sanzione accessoria (obbligo), con codice unionale 68 sulla patente.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-07',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: conducente non neopatentato rilevato a 0,6 g/l al controllo. \u00c8 sanzione amministrativa, non reato.',
    risposta_corretta: true,
    spiegazione:
      'Fascia 0,5-0,8 g/l: prima fascia, sanzione amministrativa pecuniaria. Il penale inizia da 0,8 g/l.',
    scenario_transfer: 'fascia amministrativa ebbrezza',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-08',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: conducente rilevato a 1,8 g/l. Oltre al reato pu\u00f2 essergli applicato l\u2019alcolock per 3 anni con codice 68.',
    risposta_corretta: true,
    spiegazione:
      'Fascia pi\u00f9 grave (> 1,5 g/l), revoca, e tipicamente 3 anni di alcolock con annotazione codice unionale 68.',
    scenario_transfer: 'ebbrezza grave con alcolock',
    livello_difficolta: 4,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-09',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: conducente rilevato a 1,0 g/l. \u00c8 reato e comporta sospensione della patente (non revoca).',
    risposta_corretta: true,
    spiegazione:
      'Fascia 0,8-1,5 g/l: reato + sospensione. La revoca scatta oltre 1,5 g/l.',
    scenario_transfer: 'fascia media ebbrezza',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C009-10',
    concetto_codice: 'ARG22-C009',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca le tre fasce di ebbrezza dell\u2019art. 186 con la sanzione tipica di ciascuna e spiega la novit\u00e0 dell\u2019alcolock.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) 0,5-0,8 g/l amministrativa; (2) 0,8-1,5 g/l reato + sospensione; (3) > 1,5 g/l reato + revoca. Alcolock: dispositivo anti-avviamento imposto dal giudice al condannato, codice unionale 68, 2 o 3 anni.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 186 CdS',
  },

  // ============================================================
  // ARG22-C010 — Rinnovo patente B
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C010-01',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La patente B si rinnova ogni 10 anni fino ai 50 anni di et\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "10/5/3/2": 10 anni fino a 50, 5 dai 50 ai 70, 3 dai 70 agli 80, 2 dopo gli 80.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-02',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Tra i 70 e gli 80 anni la patente B si rinnova ogni 3 anni.',
    risposta_corretta: true,
    spiegazione:
      'Riduzione progressiva del periodo di validit\u00e0 con l\u2019et\u00e0: 3 anni nella fascia 70-80.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-03',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il rinnovo della patente B richiede una visita medica di idoneit\u00e0 psico-fisica.',
    risposta_corretta: true,
    spiegazione:
      'La visita certifica che il titolare conserva i requisiti visivi, uditivi e neurologici per guidare in sicurezza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-04',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'La patente B si rinnova ogni 15 anni fino ai 50 anni di et\u00e0.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 15 anni \u00e8 plausibile ma sbagliato. Mnemonic "10/5/3/2": 10 anni fino a 50.',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-05',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tra i 50 e i 70 anni la patente B si rinnova ogni 10 anni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: i 10 anni valgono fino a 50. Tra 50 e 70 il ciclo scende a 5 anni.',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-06',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il rinnovo della patente pu\u00f2 essere effettuato senza alcuna visita medica, solo con autocertificazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la visita \u00e8 obbligatoria, non c\u2019\u00e8 "autocertificazione" che valga come rinnovo.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-07',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: persona di 48 anni che rinnova la patente. La validit\u00e0 del nuovo documento sar\u00e0 in genere di 10 anni.',
    risposta_corretta: false,
    spiegazione:
      'A 48 anni, entro 10 anni si superano i 50 anni: la validit\u00e0 viene tarata sull\u2019et\u00e0 di scadenza (50+), quindi in genere minore. Molti rinnovi a questa et\u00e0 vengono fatti con validit\u00e0 pi\u00f9 corta. Non "sempre 10 anni".',
    scenario_transfer: 'rinnovo a cavallo dei 50 anni',
    livello_difficolta: 4,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-08',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: persona di 75 anni che rinnova. Il prossimo rinnovo dovr\u00e0 avvenire entro 3 anni.',
    risposta_corretta: true,
    spiegazione:
      'Fascia 70-80: rinnovo ogni 3 anni. Mnemonic "10/5/3/2".',
    scenario_transfer: 'rinnovo in fascia 70-80',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-09',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: persona di 82 anni. Il rinnovo della sua patente ha validit\u00e0 biennale.',
    risposta_corretta: true,
    spiegazione:
      'Oltre gli 80 anni: 2 anni di validit\u00e0. Il tempo si accorcia per consentire visite pi\u00f9 frequenti.',
    scenario_transfer: 'oltre 80 anni',
    livello_difficolta: 2,
    articolo_cds: 'Art. 126 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C010-10',
    concetto_codice: 'ARG22-C010',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 la durata del rinnovo si accorcia con l\u2019et\u00e0? Giustifica in termini di evoluzione psico-fisica.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: le capacit\u00e0 visive, uditive, di attenzione e di coordinazione tendono a calare con l\u2019et\u00e0; visite pi\u00f9 frequenti permettono di cogliere in tempo deficit che renderebbero la guida pericolosa, senza aspettare un decennio.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 126 CdS',
  },

  // ============================================================
  // ARG22-C011 — Fermo e sequestro
  // ============================================================
  {
    codice: 'QUIZ-ARG22-C011-01',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il fermo amministrativo obbliga a sospendere la circolazione del veicolo per il periodo stabilito.',
    risposta_corretta: true,
    spiegazione:
      'Durante il fermo il veicolo non pu\u00f2 circolare: resta "parcheggiato" fino a scadenza della misura.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-02',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sequestro amministrativo comporta la custodia del veicolo in attesa della confisca definitiva.',
    risposta_corretta: true,
    spiegazione:
      'Il sequestro \u00e8 la "custodia amministrativa"; la confisca \u00e8 la perdita definitiva della propriet\u00e0 a favore dell\u2019erario.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 213 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-03',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Circolare con un veicolo sottoposto a fermo comporta sanzione amministrativa e confisca del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Trasgredire il fermo \u00e8 violazione grave: confisca del veicolo + sospensione della patente del conducente.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-04',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Fermo e sequestro amministrativo sono due nomi diversi per la stessa misura.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 – Coppie Terminologiche Quasi-Sinonime: sono misure DIVERSE. Il fermo sospende la circolazione temporaneamente; il sequestro \u00e8 l\u2019anticamera della confisca definitiva.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Artt. 213, 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-05',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Durante il fermo amministrativo il proprietario pu\u00f2 circolare liberamente con il veicolo, purch\u00e9 lo custodisca poi a casa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: il fermo \u00e8 proprio l\u2019opposto della "libert\u00e0 di circolare". Il veicolo non pu\u00f2 muoversi.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-06',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sequestro amministrativo sostituisce ogni altra sanzione: niente multa n\u00e9 sospensione della patente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: il sequestro \u00e8 sanzione accessoria, si SOMMA alla pecuniaria e alle eventuali sanzioni sulla patente.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Artt. 213, 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-07',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: sei fermato alla guida di un veicolo sotto fermo amministrativo disposto per una precedente infrazione. Oltre alla sanzione il veicolo pu\u00f2 essere confiscato.',
    risposta_corretta: true,
    spiegazione:
      'La circolazione abusiva di veicolo in fermo porta alla confisca e alla sospensione della tua patente.',
    scenario_transfer: 'circolazione abusiva sotto fermo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-08',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un veicolo sottoposto a sequestro amministrativo deve essere spostato in un\u2019area di custodia individuata dall\u2019autorit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Il sequestro richiede depositeria: il veicolo non resta dove l\u2019ha lasciato il proprietario, viene custodito in area apposita.',
    scenario_transfer: 'custodia del sequestrato',
    livello_difficolta: 3,
    articolo_cds: 'Art. 213 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-09',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un amico ti chiede un passaggio ma il suo veicolo risulta sotto fermo. Puoi accompagnarlo con il tuo veicolo in regola.',
    risposta_corretta: true,
    spiegazione:
      'Il fermo colpisce il veicolo, non la persona: l\u2019amico pu\u00f2 essere trasportato da altri, basta che il mezzo sotto fermo resti fermo.',
    scenario_transfer: 'passaggio al proprietario di veicolo sotto fermo',
    livello_difficolta: 2,
    articolo_cds: 'Art. 214 CdS',
  },
  {
    codice: 'QUIZ-ARG22-C011-10',
    concetto_codice: 'ARG22-C011',
    argomento_numero: 22,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega la differenza essenziale fra fermo amministrativo e sequestro amministrativo del veicolo, indicando una situazione-tipo per ciascuno.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: fermo = sospensione temporanea della circolazione (es. infrazione grave con sanzione accessoria di fermo per giorni); sequestro = custodia amministrativa prodromica alla confisca (es. circolazione senza assicurazione, veicolo sottoposto a sequestro in attesa di regolarizzazione o confisca).',
    livello_difficolta: 4,
    articolo_cds: 'Artt. 213, 214 CdS',
  },
] as const
