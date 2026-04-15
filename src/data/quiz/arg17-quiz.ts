import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per l'argomento 17 — Segnali di indicazione.
// 8 concetti × 10 item = 80 item.
// Pattern focus: P13 (coppie terminologiche colore/tipo di strada,
// preavviso/direzione/conferma), P11 (eccezioni), P18 (verità parziale fuori
// contesto sul colore). V/F target 40-60%.

export const ARG17_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG17-C001 — Funzione e forma
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C001-01',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di indicazione forniscono informazioni utili al conducente, senza prescrivere obblighi o divieti.',
    risposta_corretta: true,
    spiegazione: 'Art. 39 c.1 lett. c) CdS: natura informativa.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 39 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-02',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda: 'I segnali di indicazione hanno di regola forma rettangolare o quadrata.',
    risposta_corretta: true,
    spiegazione: 'Forma tipica prescritta dal Reg. CdS art. 125.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 125 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-03',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di indicazione impongono al conducente obblighi equivalenti a quelli di prescrizione.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. I segnali di indicazione informano; quelli di prescrizione impongono obblighi/divieti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-04',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'I segnali di indicazione sono sempre di forma triangolare, come quelli di pericolo.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica "indicazione/pericolo". I segnali di pericolo sono triangolari; quelli di indicazione sono rettangolari o quadrati.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-05',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i segnali di indicazione, in ogni caso, non contengono mai pittogrammi ma solo testo.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "tutti/in ogni caso/mai". Molti segnali di indicazione contengono pittogrammi (servizi, turistici, itinerari).',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 125 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-06',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'I segnali di indicazione sono installati affinché siano visti dagli utenti che provengono in senso contrario.',
    risposta_corretta: false,
    spiegazione:
      'P16 — passivo ingannevole "siano visti". Ricostruendo: chi li vede? Gli utenti nel senso di marcia, non quelli opposti.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 39 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-07',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un segnale rettangolare blu con il pittogramma di un distributore è un segnale di indicazione di servizio.',
    risposta_corretta: true,
    spiegazione: 'Transfer a segnale di servizio (art. 134 Reg. CdS).',
    scenario_transfer: 'Scenario area di servizio autostradale',
    livello_difficolta: 1,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-08',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il conducente ignora un segnale di indicazione di direzione, commette un\u2019infrazione al CdS per mancato rispetto di una prescrizione.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a violazione: il segnale di indicazione non prescrive, quindi ignorarlo non è infrazione. È però imprudente.',
    scenario_transfer: 'Scenario conducente che non segue un segnale di direzione',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-09',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante un cantiere, un segnale di indicazione temporaneo su sfondo giallo ha la stessa funzione informativa del corrispondente segnale permanente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a cantiere: lo sfondo giallo segnala la transitorietà, ma la funzione informativa rimane.',
    scenario_transfer: 'Scenario cantiere con segnaletica di indicazione temporanea',
    livello_difficolta: 2,
    articolo_cds: 'Art. 21 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C001-10',
    concetto_codice: 'ARG17-C001',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Se un rettangolo blu presenta al suo interno una barra rossa diagonale, potrebbe essere un segnale di indicazione.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. Il rettangolo blu con barra rossa è tipico dei segnali di prescrizione (es. divieto di sosta/fermata), non di indicazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 39 CdS',
  },

  // ============================================================
  // ARG17-C002 — Codice colori per tipo di strada
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C002-01',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo sfondo dei segnali di direzione per le autostrade è verde.',
    risposta_corretta: true,
    spiegazione: 'Art. 127 Reg. CdS: verde per autostrade.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-02',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo sfondo dei segnali di direzione per le strade extraurbane è blu.',
    risposta_corretta: true,
    spiegazione: 'Art. 127 Reg. CdS: blu per extraurbane.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-03',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo sfondo bianco dei segnali di direzione indica le strade urbane e locali.',
    risposta_corretta: true,
    spiegazione: 'Art. 127 Reg. CdS: bianco per urbane/locali.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-04',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo sfondo verde dei segnali di direzione indica percorsi turistici e siti culturali.',
    risposta_corretta: false,
    spiegazione:
      'P13 — confusione colori. Il verde è autostradale; il marrone è per i siti turistici.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-05',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo sfondo giallo dei segnali di direzione indica le deviazioni e le strade urbane principali.',
    risposta_corretta: false,
    spiegazione:
      'P18 — verità parziale fuori contesto. Il giallo indica le deviazioni e itinerari provvisori, NON le strade urbane principali (bianche).',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-06',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo sfondo di un segnale di direzione è sempre lo stesso colore della strada su cui è installato, non di quella verso cui indica.',
    risposta_corretta: false,
    spiegazione:
      'P01 + P18 (dichiariamo P18). Il colore dello sfondo segnala il tipo di strada VERSO CUI si è diretti, non quella su cui ci si trova. Le eccezioni sono numerose.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-07',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In avvicinamento a un casello, un segnale verde con il nome di una città conferma che seguendolo si prenderà un\u2019autostrada.',
    risposta_corretta: true,
    spiegazione: 'Transfer a casello: verde = autostrada.',
    scenario_transfer: 'Scenario scelta itinerario a casello autostradale',
    livello_difficolta: 1,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-08',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un segnale marrone con la scritta "Castello di X" attraversa la via in un centro abitato: il conducente può contare su di esso per un\u2019informazione di natura turistica.',
    risposta_corretta: true,
    spiegazione: 'Transfer: marrone = turistico (art. 127 Reg. CdS).',
    scenario_transfer: 'Scenario turista in centro storico',
    livello_difficolta: 1,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-09',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere stradale, un segnale di deviazione con sfondo giallo sostituisce temporaneamente i segnali di direzione permanenti lungo il percorso alternativo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer cantiere: il giallo indica l\u2019itinerario provvisorio di deviazione.',
    scenario_transfer: 'Scenario deviazione temporanea per cantiere',
    livello_difficolta: 2,
    articolo_cds: 'Art. 21 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C002-10',
    concetto_codice: 'ARG17-C002',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Se vedo un segnale blu con la scritta di una località e più avanti, nella stessa direzione, un segnale verde con la stessa scritta, significa che la località è raggiungibile sia tramite extraurbana sia tramite autostrada.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Il codice colori prevede due itinerari paralleli per tipo di strada; possono coesistere segnali di colore diverso per la stessa destinazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 127 Reg. CdS',
  },

  // ============================================================
  // ARG17-C003 — Preavviso, direzione, conferma
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C003-01',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di preavviso di intersezione è posto a distanza dall\u2019incrocio e annuncia le direzioni disponibili.',
    risposta_corretta: true,
    spiegazione: 'Funzione del preavviso (art. 128 Reg. CdS).',
    livello_difficolta: 1,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-02',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di direzione è posto in corrispondenza dell\u2019intersezione e indica la strada da prendere.',
    risposta_corretta: true,
    spiegazione: 'Funzione del segnale di direzione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-03',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di conferma è posto prima dell\u2019intersezione per rassicurare il conducente sulla direzione da prendere.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il segnale di conferma è posto DOPO l\u2019intersezione, per rassicurare che si sta procedendo nella direzione corretta.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-04',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale di preavviso di intersezione e il segnale di direzione sono termini equivalenti.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica. Sono segnali diversi per posizione e funzione: il preavviso è a distanza, il segnale di direzione è all\u2019incrocio.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-05',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni intersezione, in ogni tipo di strada, è sempre preceduta da almeno un segnale di preavviso.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Su strade locali o semplici, il preavviso può mancare; non è un obbligo assoluto.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-06',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale di conferma, ovvero il segnale di direzione, può essere il primo visibile dopo l\u2019incrocio.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" giuridico significa "oppure", non "cioè". Il segnale di conferma e quello di direzione NON sono lo stesso segnale.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-07',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un incrocio complesso, la mancanza del segnale di conferma dopo la svolta può aumentare il rischio di errori di orientamento.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a usabilità: la funzione rassicurativa del segnale di conferma riduce l\u2019incertezza del conducente.',
    scenario_transfer: 'Scenario incrocio complesso urbano con più direttrici',
    livello_difficolta: 2,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-08',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, a 500 m da un\u2019uscita è normalmente posto un pannello di preavviso dell\u2019uscita.',
    risposta_corretta: true,
    spiegazione:
      'Transfer autostrada: la segnaletica di preavviso è scalare (500 m, 300 m, 100 m).',
    scenario_transfer: 'Scenario uscita autostradale con preavvisi scalari',
    livello_difficolta: 1,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-09',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una rotatoria, il segnale di direzione è installato in corrispondenza delle uscite dall\u2019anello.',
    risposta_corretta: true,
    spiegazione:
      'Transfer rotatoria: i segnali di direzione stanno alle uscite, non al centro dell\u2019anello.',
    scenario_transfer: 'Scenario rotatoria con uscite numerate',
    livello_difficolta: 2,
    articolo_cds: 'Art. 128 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C003-10',
    concetto_codice: 'ARG17-C003',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'La sequenza tipica "preavviso → direzione → conferma" riflette tre momenti informativi: preparazione, decisione, verifica.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. È la logica progettuale della segnaletica: informare in anticipo, guidare al momento, rassicurare dopo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 128 Reg. CdS',
  },

  // ============================================================
  // ARG17-C004 — Segnali di località e centro abitato
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C004-01',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di inizio centro abitato è rettangolare con il nome della località su fondo bianco e bordo nero.',
    risposta_corretta: true,
    spiegazione: 'Art. 131 Reg. CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 131 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-02',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di fine centro abitato mostra il nome della località sbarrato con una linea rossa.',
    risposta_corretta: true,
    spiegazione: 'Art. 131 Reg. CdS: segnale di fine centro abitato.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 131 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-03',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di inizio centro abitato ha funzione puramente decorativa e non attiva alcuna regola particolare.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il segnale attiva il limite di 50 km/h e le altre regole del centro abitato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 131 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-04',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo il segnale di fine centro abitato, il conducente può sempre viaggiare al limite massimo consentito dalla nuova categoria di strada.',
    risposta_corretta: false,
    spiegazione:
      'P10 — ambito silenzioso: anche fuori dal centro abitato va rispettato l\u2019art. 141 (velocità adeguata a strada/traffico/visibilità).',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-05',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale di inizio centro abitato imposta il limite di 50 km/h, salvo diversa indicazione.',
    risposta_corretta: true,
    spiegazione:
      'P11 — eccezione nascosta "salvo diversa indicazione". Formulazione CORRETTA; l\u2019eccezione è parte integrante della regola.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-06',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale di località, ovvero il segnale di centro abitato, è rettangolare.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". Sono due segnali diversi: il segnale di località (con nome su fondo bianco, bordo nero, scritta più piccola) non attiva obblighi; quello di centro abitato sì.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 131 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-07',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Attraversando un piccolo borgo senza cartello di inizio centro abitato, il conducente non deve ridurre la velocità sotto il limite extraurbano.',
    risposta_corretta: false,
    spiegazione:
      'Transfer: l\u2019assenza del cartello non annulla l\u2019art. 141 (velocità adeguata). Presenza di case = cautela.',
    scenario_transfer: 'Scenario borgo extraurbano senza cartello urbano',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-08',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo il segnale di inizio centro abitato, l\u2019uso del clacson è ammesso solo in caso di effettivo pericolo.',
    risposta_corretta: true,
    spiegazione: 'Transfer a clacson (art. 156): regola attivata dal centro abitato.',
    scenario_transfer: 'Scenario uso clacson in centro abitato',
    livello_difficolta: 1,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-09',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un segnale di inizio centro abitato di una frazione collegata a un comune più grande ha gli stessi effetti normativi.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a frazione: qualunque centro abitato dotato di segnale attiva le regole urbane, indipendentemente dalla gerarchia amministrativa.',
    scenario_transfer: 'Scenario frazione di comune',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C004-10',
    concetto_codice: 'ARG17-C004',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Se una strada attraversa in pochi metri inizio e fine di un centro abitato, i limiti urbani vigono solo per quella distanza segnalata.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019ambito normativo urbano è strettamente legato ai segnali di inizio/fine, a prescindere dalla lunghezza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },

  // ============================================================
  // ARG17-C005 — Segnali di identificazione strade
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C005-01',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo scudo autostradale è verde con lettera A bianca seguita dal numero dell\u2019autostrada.',
    risposta_corretta: true,
    spiegazione: 'Simbolo identificativo autostrada (art. 129 Reg. CdS).',
    livello_difficolta: 1,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-02',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le strade statali sono identificate dalla sigla SS su scudo blu.',
    risposta_corretta: true,
    spiegazione: 'Identificativo SS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-03',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli itinerari europei sono segnalati da uno scudo verde con lettera E e numero.',
    risposta_corretta: true,
    spiegazione: 'Segnaletica europea: scudo verde con E.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-04',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sigla SS sullo scudo blu indica una strada regionale.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica SS/SR. SS = statale, SR = regionale. Sono sigle diverse.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-05',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti gli scudi identificativi sono sempre di colore verde, indipendentemente dal tipo di strada.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "tutti/sempre". Il verde è solo per autostrade e itinerari E; le altre sono blu.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-06',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Uno scudo SP indica una strada provinciale; lo scudo può essere accompagnato da pannello di distanza "5 km" al posto di "500 m".',
    risposta_corretta: false,
    spiegazione:
      'P07 — numero quasi-giusto. Il pannello di distanza è espresso in metri (es. 500 m), non in km. Distinzione 500 m ↔ 5 km è trappola.',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-07',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se sto seguendo un cartello con scudo E, significa che sono su un itinerario europeo che può attraversare più Stati.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a itinerario internazionale: gli itinerari E sono transnazionali.',
    scenario_transfer: 'Scenario viaggio internazionale su autostrada E',
    livello_difficolta: 2,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-08',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una strada comunale è identificata dalla sigla SC su scudo blu.',
    risposta_corretta: true,
    spiegazione: 'Transfer: identificativo comunale SC.',
    scenario_transfer: 'Scenario uscita in area comunale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-09',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Cambiando regione, un tratto di strada statale SS può assumere numerazione diversa su scudo diverso.',
    risposta_corretta: false,
    spiegazione:
      'Transfer: le statali mantengono la numerazione nazionale; eventuali declassamenti a SR cambiano la sigla ma è decisione amministrativa, non automatica per cambio regione.',
    scenario_transfer: 'Scenario attraversamento confine regionale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 129 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C005-10',
    concetto_codice: 'ARG17-C005',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Dalla sola sigla (SS/SR/SP/SC) posso dedurre il limite di velocità della strada.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. La sigla identifica l\u2019ente gestore, non la categoria costruttiva; il limite dipende dalla classificazione (art. 2) e dalla segnaletica in loco.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2 CdS',
  },

  // ============================================================
  // ARG17-C006 — Itinerario, deviazione, uscita
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C006-01',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di deviazione hanno sfondo giallo con freccia di direzione.',
    risposta_corretta: true,
    spiegazione: 'Art. 130 Reg. CdS: deviazioni su fondo giallo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 130 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-02',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di uscita autostradale sono rettangolari con sfondo bianco e banda verde.',
    risposta_corretta: true,
    spiegazione: 'Segnale di uscita autostradale (art. 132 Reg. CdS).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 132 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-03',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di itinerario consigliato hanno sfondo rosa con freccia nera.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Sfondo giallo, non rosa. Il rosa è per gli stalli sosta (donne in gravidanza).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 130 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-04',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'I segnali di deviazione temporanea possono essere confusi con i segnali turistici, entrambi di colore marrone.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia colore. Le deviazioni temporanee sono gialle, i turistici marroni. Colori distinti.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-05',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Seguire una deviazione segnalata è sempre obbligatorio in ogni caso.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. La deviazione può essere "consigliata" (informativa) o "obbligatoria" quando la strada è chiusa da divieto. Dipende dalla segnaletica.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 130 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-06',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'La deviazione è segnalata in prossimità della chiusura, ovvero in corrispondenza.',
    risposta_corretta: false,
    spiegazione:
      'P14 — "in corrispondenza" vs "in prossimità". Le due locuzioni NON sono equivalenti: la segnaletica di deviazione è posta in prossimità (a distanza), non in corrispondenza.',
    pattern_trappola: 'P14',
    livello_difficolta: 4,
    articolo_cds: 'Art. 130 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-07',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un tratto autostradale chiuso per incidente, la deviazione con sfondo giallo guida il conducente verso un\u2019uscita alternativa.',
    risposta_corretta: true,
    spiegazione: 'Transfer a incidente autostradale: deviazione giallo-nera.',
    scenario_transfer: 'Scenario chiusura autostradale per incidente',
    livello_difficolta: 2,
    articolo_cds: 'Art. 130 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-08',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un centro storico con zone a traffico limitato, un segnale di itinerario consigliato può suggerire un percorso alternativo che eviti la ZTL.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a ZTL: l\u2019itinerario consigliato è uno strumento informativo per orientare fuori da zone limitate.',
    scenario_transfer: 'Scenario evitamento ZTL centro storico',
    livello_difficolta: 2,
    articolo_cds: 'Art. 130 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-09',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il segnale di uscita autostradale numerato permette al conducente di orientarsi anche in assenza di navigatore.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a navigazione: la numerazione delle uscite è stabile e indipendente dal dispositivo.',
    scenario_transfer: 'Scenario guida senza navigatore',
    livello_difficolta: 1,
    articolo_cds: 'Art. 132 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C006-10',
    concetto_codice: 'ARG17-C006',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Una deviazione permanente può essere segnalata con pannelli di colore diverso dal giallo.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Il giallo segnala la transitorietà; una deviazione strutturale può utilizzare i colori ordinari della categoria di strada.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 130 Reg. CdS',
  },

  // ============================================================
  // ARG17-C007 — Segnali di servizio
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C007-01',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di servizio indicano la presenza di strutture utili al viaggio come stazioni di rifornimento, officine, pronto soccorso.',
    risposta_corretta: true,
    spiegazione: 'Art. 134 Reg. CdS: funzione dei segnali di servizio.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-02',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di servizio contengono un pittogramma nero su riquadro bianco all\u2019interno del segnale.',
    risposta_corretta: true,
    spiegazione: 'Composizione tipica del segnale di servizio.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-03',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di servizio prescrivono l\u2019obbligo di fermarsi alla prima stazione di rifornimento incontrata.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. I segnali di servizio informano, non prescrivono nessun obbligo di fermata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-04',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che vede un segnale di servizio "pronto soccorso" ha l\u2019obbligo di dirigersi verso di esso in caso di malore.',
    risposta_corretta: false,
    spiegazione:
      'P04 — può vs deve. L\u2019informazione suggerisce l\u2019opportunità ma non è un obbligo. È il conducente a valutare.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-05',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i segnali di servizio hanno sfondo blu, in ogni strada.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. In strada urbana il segnale di servizio può avere sfondo bianco; il blu è tipico di autostrade ed extraurbane.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-06',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un segnale di "area di servizio" in autostrada, ovvero di "area di parcheggio", è la stessa cosa.',
    risposta_corretta: false,
    spiegazione:
      'P15 — "ovvero" = "oppure". Area di servizio (con benzina/ristoro) e area di parcheggio (solo sosta) sono strutture diverse. Non equivalenti.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-07',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un viaggio lungo, il conducente può usare i segnali di servizio per pianificare soste di pausa ogni due ore, come raccomandato per prevenire la stanchezza.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a prevenzione stanchezza: la funzione informativa supporta una guida sicura.',
    scenario_transfer: 'Scenario viaggio lungo e gestione pause',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-08',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un segnale di servizio "telefono SOS" in autostrada indica il punto più vicino di colonnina di emergenza.',
    risposta_corretta: true,
    spiegazione: 'Transfer a emergenza autostradale.',
    scenario_transfer: 'Scenario guasto autostradale con colonnina SOS',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-09',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il segnale di servizio "area camper" indica un\u2019area dove è lecito svuotare le acque nere del mezzo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a turismo itinerante: il segnale denota aree attrezzate per camper.',
    scenario_transfer: 'Scenario viaggio in camper',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C007-10',
    concetto_codice: 'ARG17-C007',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pittogramma con la lettera "H" su riquadro bianco e sfondo blu, collocato lungo una strada urbana, indica la presenza di un ospedale.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Combinazione canonica: "H" = ospedale; sfondo blu e pittogramma bianco su riquadro rispettano la convenzione dei segnali di servizio.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },

  // ============================================================
  // ARG17-C008 — Turistici e di territorio
  // ============================================================
  {
    codice: 'QUIZ-ARG17-C008-01',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali di indicazione turistica hanno sfondo marrone con scritte e simboli bianchi.',
    risposta_corretta: true,
    spiegazione: 'Art. 134 Reg. CdS: colore turistico marrone.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-02',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali turistici si limitano a informare il conducente senza imporre restrizioni di marcia.',
    risposta_corretta: true,
    spiegazione: 'Funzione puramente informativa.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-03',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un segnale con sfondo marrone e simbolo di castello indica una zona a traffico limitato.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il segnale marrone con simbolo di castello indica un sito turistico-culturale, non una ZTL.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-04',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un segnale di indicazione turistica marrone e un segnale di deviazione giallo sono intercambiabili per funzione.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppie colore. Marrone = turistico permanente; giallo = deviazione temporanea. Funzioni opposte.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 127 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-05',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i siti turistici devono sempre essere segnalati con cartelli marroni.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "tutti/sempre". Solo i siti riconosciuti e deliberati vengono segnalati; non tutti.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-06',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un segnale di indicazione territoriale può essere ignorato dal conducente perché non vincola la scelta dell\u2019itinerario.',
    risposta_corretta: true,
    spiegazione:
      'P18 — verità parziale fuori contesto: l\u2019affermazione è VERA per segnali di indicazione, ma sarebbe falsa se applicata a segnali di prescrizione. L\u2019item è corretto nel contesto dato.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 39 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-07',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, un segnale turistico marrone può indicare la direzione di un museo raggiungibile all\u2019uscita successiva.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a autostrada: anche in autostrada sono presenti segnaletiche turistiche marroni, di solito accanto alle indicazioni di uscita.',
    scenario_transfer: 'Scenario turista in autostrada',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-08',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il segnale turistico di un parco naturale può essere posto anche su una strada locale di montagna.',
    risposta_corretta: true,
    spiegazione: 'Transfer a area protetta: la segnaletica turistica è trasversale a tutte le categorie di strada.',
    scenario_transfer: 'Scenario strada di montagna con area protetta',
    livello_difficolta: 2,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-09',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante un cantiere, i segnali turistici marroni possono essere coperti o provvisoriamente sostituiti da segnali gialli.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a cantiere: il temporaneo (giallo) prevale e può sovrascrivere o coprire il permanente.',
    scenario_transfer: 'Scenario cantiere che copre segnaletica turistica',
    livello_difficolta: 3,
    articolo_cds: 'Art. 21 CdS',
  },
  {
    codice: 'QUIZ-ARG17-C008-10',
    concetto_codice: 'ARG17-C008',
    argomento_numero: 17,
    fase_rotta: 'origina',
    testo_domanda:
      'Un segnale con sfondo marrone e pittogramma di forchetta indica un ristorante tipico segnalato come attrazione gastronomica.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. La segnaletica turistica può includere pittogrammi enogastronomici ("strade del vino", ristoranti tipici) con colore caratteristico marrone.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 134 Reg. CdS',
  },
] as const
