import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per l'argomento 19 — Pannelli integrativi.
// 7 concetti × 10 item = 70 item.
// Pattern focus: P15 ("ovvero" giuridico = "oppure"), P18 (verità parziale
// fuori contesto: pannello corretto su segnale sbagliato), P11 (eccezioni),
// P07 (numeri). V/F target 40-60%.

export const ARG19_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG19-C001 — Natura e funzione
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C001-01',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello integrativo è una targa rettangolare posta sotto il segnale verticale principale per precisarne il significato.',
    risposta_corretta: true,
    spiegazione: 'Art. 83 Reg. CdS: definizione funzionale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-02',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I pannelli integrativi possono indicare distanza, estensione, validità temporale, categorie di veicoli o eccezioni.',
    risposta_corretta: true,
    spiegazione: 'Tipologie standard dei modelli previsti dall\u2019art. 83.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-03',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un pannello integrativo può essere collocato al posto del segnale principale, sostituendolo.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il pannello integra ma non sostituisce il segnale principale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-04',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello integrativo, ovvero il segnale complementare, ha funzione di rafforzamento del segnale principale.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". Pannello integrativo e segnale complementare sono categorie distinte: i complementari sono ad esempio coni e delineatori, non i pannelli sotto i verticali.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-05',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni strada, ogni segnale verticale deve sempre essere accompagnato da un pannello integrativo.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "ogni/sempre". I pannelli integrativi si applicano solo quando è necessario precisare distanza, orario, categoria ecc.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-06',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello integrativo può contraddire integralmente il segnale principale se lo richiede la situazione.',
    risposta_corretta: false,
    spiegazione:
      'P18 — verità parziale fuori contesto. Il pannello può restringere/estendere/precisare; NON può contraddire integralmente il segnale.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-07',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un segnale di "divieto di sosta" un pannello "8-20 lun-ven" riduce l\u2019ambito temporale del divieto.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a sosta: il pannello temporale limita il divieto alle fasce indicate.',
    scenario_transfer: 'Scenario sosta regolamentata per fascia oraria',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-08',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un segnale di "divieto di transito" un pannello "eccetto residenti" consente il transito ai soli residenti.',
    risposta_corretta: true,
    spiegazione: 'Transfer ad accesso limitato: pannello di eccezione.',
    scenario_transfer: 'Scenario ZTL con pannello "eccetto residenti"',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-09',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un segnale di pericolo "strada sdrucciolevole", un pannello di estesa "2 km" indica che il pericolo vale per 2 km.',
    risposta_corretta: true,
    spiegazione: 'Transfer a pannello di estesa.',
    scenario_transfer: 'Scenario pericolo continuo su strada bagnata',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C001-10',
    concetto_codice: 'ARG19-C001',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pannello integrativo senza segnale principale sopra di sé non ha alcun valore normativo.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Il pannello è accessorio: senza segnale principale è privo di riferimento e di valore prescrittivo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },

  // ============================================================
  // ARG19-C002 — Pannello di distanza (modello I)
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C002-01',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello di distanza indica quanti metri mancano dal segnale al punto in cui inizia la situazione segnalata.',
    risposta_corretta: true,
    spiegazione: 'Definizione del pannello modello I.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-02',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un pannello "300 m" sotto un segnale di pericolo significa che il pericolo inizia dopo 300 metri.',
    risposta_corretta: true,
    spiegazione: 'Applicazione diretta.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-03',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello di distanza si applica solo ai segnali di pericolo, mai ai segnali di prescrizione.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Si applica anche ai segnali di prescrizione, quando necessario per indicare la distanza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-04',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "500 m" equivale a un pannello "5 km" perché entrambi indicano una distanza.',
    risposta_corretta: false,
    spiegazione:
      'P07 — numero quasi-giusto + P08 unità. 500 m ≠ 5 km. Sono distanze completamente diverse, un fattore 10.',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-05',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "150 m" sotto un segnale di pericolo significa che il pericolo è lungo 150 metri.',
    risposta_corretta: false,
    spiegazione:
      'P13/P18 — verità fuori contesto. "150 m" su pannello di DISTANZA indica la distanza al punto, non la lunghezza del pericolo (quello sarebbe modello II — estesa).',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-06',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "150 m" indica sempre che il pericolo è a esattamente 150 metri, con tolleranza zero.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "sempre/esattamente/zero". Il valore è indicativo, non un riferimento millimetrico.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-07',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, un pannello "1 km" sotto un segnale di lavori avverte che il cantiere inizia tra un chilometro.',
    risposta_corretta: true,
    spiegazione: 'Transfer a cantiere autostradale.',
    scenario_transfer: 'Scenario preavviso cantiere autostradale',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-08',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada extraurbana secondaria, un pannello "100 m" sotto un segnale "strettoia simmetrica" impone di iniziare le manovre prima del pannello stesso.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a strettoia: le manovre (ridurre velocità, posizionarsi) vanno fatte PRIMA del pericolo effettivo — quindi tra il segnale e il punto indicato, non prima del pannello.',
    scenario_transfer: 'Scenario strettoia extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-09',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere stradale, il pannello di distanza può essere realizzato con sfondo giallo per coerenza cromatica con la segnaletica temporanea.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a cantiere: i pannelli integrativi temporanei hanno sfondo giallo.',
    scenario_transfer: 'Scenario cantiere temporaneo con pannelli gialli',
    livello_difficolta: 2,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C002-10',
    concetto_codice: 'ARG19-C002',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pannello "0 m" sotto un segnale equivale all\u2019assenza di pannello perché la situazione inizia proprio lì.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Un pannello di distanza con "0 m" sarebbe ridondante: quando il segnale è in corrispondenza del pericolo, il pannello non serve.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },

  // ============================================================
  // ARG19-C003 — Pannello di estesa (modello II)
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C003-01',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello di estesa indica la lunghezza del tratto in cui si applica la prescrizione o persiste il pericolo.',
    risposta_corretta: true,
    spiegazione: 'Modello II.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-02',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un pannello di estesa "1 km" sotto un divieto di sorpasso impone il divieto per 1 km.',
    risposta_corretta: true,
    spiegazione: 'Applicazione diretta.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-03',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello di estesa coincide col pannello di distanza.',
    risposta_corretta: false,
    spiegazione: 'FALSO. Sono modelli diversi: distanza (I) vs estesa (II).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-04',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello di estesa "200 m" sotto un segnale di pericolo significa che il pericolo inizia dopo 200 metri.',
    risposta_corretta: false,
    spiegazione:
      'P13/P18 — confusione distanza/estesa. "Estesa" = lunghezza del tratto interessato dal pericolo, non distanza al punto di inizio.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-05',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello di estesa "500 m" ovvero "5 km" indica la lunghezza del tratto regolamentato.',
    risposta_corretta: false,
    spiegazione:
      'P15 + P07. "Ovvero" = "oppure": 500 m e 5 km sono alternative (non sinonimi) e ovviamente distanze ENORMEMENTE diverse.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-06',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni pannello di estesa, in ogni strada, è sempre accompagnato da un ulteriore pannello che ne ripeta il contenuto.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Il pannello di estesa è sufficiente da solo; non richiede ripetizioni.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-07',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un pannello di estesa "3 km" sotto "divieto di sorpasso" significa che posso riprendere a sorpassare dopo 3 km anche senza segnale di fine divieto.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a sorpasso: l\u2019estesa dichiara esplicitamente il termine della prescrizione.',
    scenario_transfer: 'Scenario divieto sorpasso con pannello di estesa',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-08',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada di montagna, un pannello di estesa "5 km" sotto "curve pericolose" avvisa che per 5 km troveremo curve pericolose.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a tornanti: uso classico del modello II su strade tortuose.',
    scenario_transfer: 'Scenario tornanti di montagna',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-09',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada un pannello di estesa "10 km" sotto un segnale di lavori indica che il cantiere si sviluppa per 10 km.',
    risposta_corretta: true,
    spiegazione: 'Transfer a cantiere autostradale esteso.',
    scenario_transfer: 'Scenario cantiere esteso in autostrada',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C003-10',
    concetto_codice: 'ARG19-C003',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pannello di estesa e un segnale di fine del tratto regolamentato danno la stessa informazione funzionale: sapere dove finisce la prescrizione.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Sono due modi di comunicare lo stesso fatto: uno ex ante (estesa), l\u2019altro ex post (fine prescrizione).',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },

  // ============================================================
  // ARG19-C004 — Inizio, continuazione, fine
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C004-01',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello con freccia verticale verso l\u2019alto indica l\u2019inizio della prescrizione.',
    risposta_corretta: true,
    spiegazione: 'Modello III.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-02',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello con freccia verticale verso il basso, o con scritta "FINE", indica la cessazione della prescrizione.',
    risposta_corretta: true,
    spiegazione: 'Modello III di fine.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-03',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello con doppia freccia verticale indica l\u2019inizio della prescrizione.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. La doppia freccia indica la continuazione della prescrizione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-04',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello di inizio prescrizione e il pannello di fine prescrizione si distinguono per il colore.',
    risposta_corretta: false,
    spiegazione:
      'P13/P18 — il colore è uguale (rettangolo bianco bordo nero); a distinguerli è la DIREZIONE della freccia.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-05',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello "FINE" ovvero il pannello di continuazione sono intercambiabili.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". Pannello FINE e pannello di continuazione sono funzioni opposte; non sono sinonimi.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-06',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni prescrizione lunga deve sempre terminare con un pannello "FINE" esplicito.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Può terminare con un segnale specifico di fine, col cessare naturale del tratto, o con un pannello di estesa: non è obbligatorio il "FINE".',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-07',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un segnale di divieto di sosta, il pannello con freccia verso l\u2019alto indica il punto da cui inizia il divieto.',
    risposta_corretta: true,
    spiegazione: 'Transfer a sosta urbana.',
    scenario_transfer: 'Scenario sosta urbana con inizio divieto',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-08',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un segnale di divieto di sosta, il pannello con doppia freccia verticale indica che il divieto vale anche nel tratto appena percorso e in quello ancora da percorrere.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a continuazione: conferma il regime sia per il tratto precedente sia per quello successivo.',
    scenario_transfer: 'Scenario conferma di divieto sosta lungo via',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-09',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere, il pannello "FINE" sotto l\u2019ultimo limite di velocità ridotta indica il ripristino del limite originale.',
    risposta_corretta: true,
    spiegazione: 'Transfer a cantiere: equivalente funzionale del "fine lavori".',
    scenario_transfer: 'Scenario ripristino velocità post cantiere',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C004-10',
    concetto_codice: 'ARG19-C004',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Se vedo due segnali identici a 100 m uno dall\u2019altro, il secondo con pannello "continuazione", deduco che il primo aveva funzione di inizio.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. La coppia "inizio implicito + continuazione esplicita" è un pattern classico di rinforzo di prescrizioni lunghe.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 83 Reg. CdS',
  },

  // ============================================================
  // ARG19-C005 — Pannello di validità temporale
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C005-01',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello di validità temporale riporta le fasce orarie e i giorni in cui vale la prescrizione.',
    risposta_corretta: true,
    spiegazione: 'Modello IV.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-02',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Fuori dalle fasce indicate sul pannello temporale, la prescrizione del segnale non si applica.',
    risposta_corretta: true,
    spiegazione: 'Conseguenza diretta del modello IV.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-03',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello di validità temporale, se assente, significa che la prescrizione vale solo nelle ore diurne.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. L\u2019assenza del pannello significa che la prescrizione vale SEMPRE (24 h, 7 giorni).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-04',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "8-20" lun-ven sotto divieto di sosta: il sabato e la domenica la sosta è vietata comunque.',
    risposta_corretta: false,
    spiegazione:
      'P11 — eccezione nascosta. Il pannello limita il divieto ai giorni indicati: sabato e domenica il divieto non vige.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-05',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "8-20" indica che il divieto vale dalle 8 alle 20, ovvero dalle 8 alle 10.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". 8-20 e 8-10 non sono la stessa cosa; il pannello indica univocamente 8-20.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-06',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i divieti di sosta, in ogni orario e in ogni giorno, valgono comunque indipendentemente dai pannelli temporali.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. I pannelli temporali modulano il divieto; non sono decorazioni.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-07',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una ZTL con pannello "7.30-19.30 lun-sab", un automobilista non autorizzato può attraversare la zona alle 20.30 di sabato.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a ZTL: fuori fascia oraria il vincolo non opera.',
    scenario_transfer: 'Scenario ZTL con fascia oraria limitata',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-08',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un divieto di transito ai mezzi pesanti con pannello "festivi esclusi" implica che la domenica i mezzi pesanti possono transitare.',
    risposta_corretta: true,
    spiegazione: 'Transfer a traffico pesante: esclusione dei giorni festivi.',
    scenario_transfer: 'Scenario divieto transito pesanti in fascia non festiva',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-09',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un divieto di fermata per carico/scarico, un pannello "lun-ven 9-13" limita il divieto a quelle fasce.',
    risposta_corretta: true,
    spiegazione: 'Transfer a carico/scarico commerciale.',
    scenario_transfer: 'Scenario divieto fermata limitato alle ore commerciali',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C005-10',
    concetto_codice: 'ARG19-C005',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pannello che riporta solo "mesi: novembre-aprile" sotto un segnale di "pericolo ghiaccio" limita l\u2019avviso alla stagione fredda.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Il pannello temporale può riportare anche stagioni o periodi dell\u2019anno, non solo orari.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },

  // ============================================================
  // ARG19-C006 — Categoria di veicoli ed eccezioni
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C006-01',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un pannello integrativo può limitare la prescrizione a specifiche categorie di veicoli.',
    risposta_corretta: true,
    spiegazione: 'Art. 83 Reg. CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-02',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le eccezioni sono segnalate dalla parola "ECCETTO" seguita dalla categoria o dal simbolo.',
    risposta_corretta: true,
    spiegazione: 'Modello standard di eccezione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-03',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un pannello "ECCETTO RESIDENTI" sotto un divieto di transito obbliga anche i residenti a non transitare.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. "ECCETTO" esclude la categoria indicata dal divieto: i residenti possono transitare.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-04',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "ECCETTO AUTOBUS" ovvero "SOLO AUTOBUS" ha lo stesso significato.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". "Eccetto autobus" = tutti tranne autobus; "solo autobus" = solo autobus. Significati opposti.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-05',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Sotto un divieto di transito un pannello con simbolo di autocarro significa sempre che il divieto vale per tutti i veicoli.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore "sempre/tutti". Il pannello categoria LIMITA il divieto alla categoria indicata (autocarri), esentando gli altri.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-06',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "ECCETTO RESIDENTI" può essere esteso in prossimità anche a titolari di permessi occasionali.',
    risposta_corretta: false,
    spiegazione:
      'P14/P11 — "in prossimità" + eccezione nascosta. Le eccezioni sono tassative: solo chi è esplicitamente indicato (residenti) gode del permesso.',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-07',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una ZTL centro storico, un pannello "ECCETTO DISABILI" permette il transito ai titolari di contrassegno H.',
    risposta_corretta: true,
    spiegazione: 'Transfer a accessibilità: eccezione classica per disabili.',
    scenario_transfer: 'Scenario ZTL con eccezione disabili',
    livello_difficolta: 1,
    articolo_cds: 'Art. 188 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-08',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto un "divieto di sosta" un pannello con simbolo velocipede significa che il divieto si applica solo ai velocipedi.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a ciclabile: il pannello categoria limita il divieto alla sola categoria indicata.',
    scenario_transfer: 'Scenario divieto sosta bici',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-09',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada di montagna, un "divieto di transito" con pannello "ECCETTO 4×4 e catene" permette il transito solo ai veicoli attrezzati.',
    risposta_corretta: true,
    spiegazione: 'Transfer a strada invernale: eccezione tecnica.',
    scenario_transfer: 'Scenario strada di montagna invernale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C006-10',
    concetto_codice: 'ARG19-C006',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pannello "ECCETTO BUS LINEA" esclude dal divieto anche gli autobus turistici.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. "Bus linea" è categoria ristretta al TPL di linea; gli autobus turistici non sono "di linea" e restano soggetti al divieto.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 83 Reg. CdS',
  },

  // ============================================================
  // ARG19-C007 — Pannelli sosta
  // ============================================================
  {
    codice: 'QUIZ-ARG19-C007-01',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello "rimozione forzata" (autogrù) sotto un divieto di sosta indica che il veicolo in sosta verrà rimosso.',
    risposta_corretta: true,
    spiegazione: 'Art. 159 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-02',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello "disco orario" con limite massimo impone di esporre il disco orario nel veicolo in sosta.',
    risposta_corretta: true,
    spiegazione: 'Sosta a tempo con disco.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-03',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello "H" (disabili) sotto uno stallo significa che lo stallo è libero per qualsiasi veicolo.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il pannello "H" riserva lo stallo ai disabili con contrassegno.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 188 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-04',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "rimozione forzata" senza un divieto di sosta associato autorizza da solo la rimozione di qualsiasi veicolo in sosta.',
    risposta_corretta: false,
    spiegazione:
      'P18 — verità parziale fuori contesto. Il pannello integra un segnale principale; senza un divieto di sosta non ha valore.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-05',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un pannello "disco orario 1 ora" significa che si può sostare a discrezione fino a 60 minuti liberamente.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "liberamente/a discrezione". La sosta è ammessa fino a un\u2019ora a condizione di esporre correttamente il disco; non c\u2019è discrezionalità nell\u2019esposizione.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-06',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello "disco orario 1 ora", ovvero "parcheggio a pagamento", ha lo stesso regime di sosta.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". Disco orario e parcheggio a pagamento sono due regimi diversi: il primo è gratuito con limite di tempo, il secondo a pagamento.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-07',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un centro storico con stallo blu e pannello "a pagamento 9-19 lun-ven", la sosta dopo le 19 è gratuita.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a sosta pagamento: fuori fascia oraria il vincolo tariffario non opera.',
    scenario_transfer: 'Scenario sosta a pagamento con fascia oraria',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-08',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019auto parcheggiata in stallo H senza contrassegno disabili può essere rimossa forzatamente anche senza pannello "rimozione".',
    risposta_corretta: true,
    spiegazione:
      'Transfer a stallo disabili: la rimozione forzata è prevista direttamente dall\u2019art. 159 CdS per sosta irregolare su stalli riservati.',
    scenario_transfer: 'Scenario sosta abusiva su stallo disabili',
    livello_difficolta: 3,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-09',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un pannello "disco orario 30 minuti" davanti a una farmacia di turno consente una sosta breve per acquisti urgenti.',
    risposta_corretta: true,
    spiegazione: 'Transfer a sosta breve per servizi essenziali.',
    scenario_transfer: 'Scenario sosta disco davanti a farmacia',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG19-C007-10',
    concetto_codice: 'ARG19-C007',
    argomento_numero: 19,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pannello integrativo "passo carrabile" sotto un segnale di divieto di sosta rafforza il divieto anche al proprietario del passo.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. Il pannello "passo carrabile" identifica l\u2019accesso; il divieto vale ai terzi, ma il titolare del passo accede al proprio ingresso liberamente. Regola art. 22 CdS.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 22 CdS',
  },
] as const
