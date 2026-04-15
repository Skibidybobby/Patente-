import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per l'argomento 16 — Definizioni stradali e doveri del conducente.
// 8 concetti × 10 item = 80 item.
// Per ciascun concetto: 3 riconosci (BASE), 3 trappola (UN pattern dichiarato),
// 3 trasferisci (scenario diverso), 1 origina.
// Pattern di focus: P01 (quantificatore universale), P02 (doppia negazione),
// P13 (coppie terminologiche carreggiata/corsia, banchina/marciapiede),
// P16 (passivo ingannevole). Fonte: docs/research/03 § 5.
// V/F target 40-60% per file.

export const ARG16_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG16-C001 — Strada, carreggiata e corsia
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C001-01',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La carreggiata è la parte della strada destinata allo scorrimento dei veicoli, suddivisa in corsie.',
    risposta_corretta: true,
    spiegazione:
      'Definizione diretta dell\u2019art. 3 CdS: la carreggiata è la parte destinata ai veicoli, divisa in una o più corsie.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-02',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La corsia è una suddivisione longitudinale della carreggiata, di larghezza sufficiente al transito di una sola fila di veicoli.',
    risposta_corretta: true,
    spiegazione:
      'Art. 3 CdS n.7: la corsia è la suddivisione longitudinale della carreggiata per una fila di veicoli.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-03',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La carreggiata comprende sempre anche le banchine e le piste ciclabili separate.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. La carreggiata è solo la parte destinata ai veicoli; banchine, marciapiedi e piste ciclabili separate sono esterne alla carreggiata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-04',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'La carreggiata è la suddivisione longitudinale della strada destinata al transito di una sola fila di veicoli.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica quasi-sinonima. L\u2019affermazione scambia carreggiata con corsia: la corsia è la suddivisione per una fila di veicoli, la carreggiata è l\u2019intera parte destinata ai veicoli.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-05',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni strada è sempre suddivisa in almeno due corsie per ciascun senso di marcia.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "sempre". Molte strade locali o a senso unico hanno una sola corsia; il numero di corsie dipende dalla categoria e dalla larghezza della carreggiata.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-06',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Non è possibile non considerare le piste ciclabili separate come parte integrante della carreggiata.',
    risposta_corretta: false,
    spiegazione:
      'P02 — doppia negazione annidata. Riscritta in positivo: "le piste ciclabili separate fanno parte della carreggiata" è FALSO. Le piste ciclabili separate sono esterne alla carreggiata.',
    pattern_trappola: 'P02',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-07',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana con due corsie per senso e banchina pavimentata, la banchina va conteggiata nella larghezza della carreggiata per calcolare se un autocarro largo può transitare.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a uno scenario di ingombro. La banchina non è carreggiata (art. 3), quindi non entra nel calcolo della larghezza utile al transito; va sottratta quando si valuta l\u2019ingombro trasversale.',
    scenario_transfer:
      'Scenario ingombro/trasporto su extraurbana: dimensionamento trasversale di un autocarro',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-08',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un monopattino elettrico che si muove lungo una corsia della carreggiata è considerato veicolo che sta usando la carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a micromobilità: il monopattino (DL 121/2021) circola come veicolo sulla carreggiata nelle strade urbane ≤50 km/h, quindi occupa una corsia.',
    scenario_transfer: 'Scenario micromobilità urbana: monopattino elettrico su carreggiata',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-09',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un parcheggio all\u2019aperto di un centro commerciale, le corsie interne di manovra sono considerate "corsie" nel senso dell\u2019art. 3 CdS perché sono private.',
    risposta_corretta: false,
    spiegazione:
      'Transfer ad area privata: l\u2019art. 3 CdS si applica a strade di uso pubblico; nei parcheggi privati si parla impropriamente di "corsie". Le regole CdS si applicano comunque alla circolazione.',
    scenario_transfer: 'Scenario area privata ad uso pubblico: parcheggio commerciale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C001-10',
    concetto_codice: 'ARG16-C001',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Una "carreggiata a doppio senso di circolazione" può essere composta da una sola corsia.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. Per essere a doppio senso servono almeno due corsie (una per senso) oppure, se unica, non è "carreggiata a doppio senso" ma una strada a senso unico alternato. Costruisci sempre la definizione dal minimo dei requisiti.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 3 CdS',
  },

  // ============================================================
  // ARG16-C002 — Banchina e marciapiede
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C002-01',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il marciapiede è la parte di strada, esterna alla carreggiata, rialzata o diversamente delimitata, riservata ai pedoni.',
    risposta_corretta: true,
    spiegazione: 'Definizione testuale dell\u2019art. 3 CdS n. 33.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-02',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La banchina è la parte della strada compresa fra il margine della carreggiata e il più vicino fra marciapiede, spartitraffico o ciglio.',
    risposta_corretta: true,
    spiegazione: 'Art. 3 CdS n. 4: definizione di banchina.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-03',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il marciapiede fa parte della carreggiata ed è percorribile anche dai velocipedi.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il marciapiede è esterno alla carreggiata ed è riservato ai pedoni; i velocipedi non possono di regola transitare.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-04',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'La banchina è la parte rialzata della strada riservata ai pedoni nei centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'P13 — scambio terminologico banchina/marciapiede. La banchina NON è rialzata (è a livello della carreggiata) e non è riservata ai pedoni; quella descrizione corrisponde al marciapiede.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-05',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'È obbligatorio che ogni strada, in qualsiasi contesto, sia dotata di marciapiede su entrambi i lati.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "ogni/in qualsiasi contesto". Le strade extraurbane spesso hanno solo banchina, non marciapiede.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-06',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'I pedoni, in assenza di marciapiede, possono essere invitati a camminare sulla banchina laterale destra.',
    risposta_corretta: false,
    spiegazione:
      'P16 — passivo ingannevole "possono essere invitati": chi invita? In realtà l\u2019art. 190 CdS impone al pedone, fuori dai centri abitati, di circolare sul margine sinistro opposto al senso di marcia, non destro.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 190 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-07',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un\u2019autostrada la corsia di emergenza a destra svolge, per caratteristiche costruttive, lo stesso ruolo della banchina?',
    risposta_corretta: false,
    spiegazione:
      'Transfer autostrada: la corsia di emergenza è parte della carreggiata e destinata ai veicoli in sosta di emergenza; la banchina è invece esterna alla carreggiata. Ruoli normativi diversi.',
    scenario_transfer: 'Scenario autostrada: distinguere banchina da corsia di emergenza',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS; art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-08',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In caso di guasto su extraurbana secondaria priva di corsia di emergenza, il conducente può fermarsi in banchina se questa è sufficientemente larga.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a scenario di emergenza: la banchina è destinata anche alla sosta di emergenza fuori centro abitato (art. 3). Obbligo di collocare i triangoli di segnalazione.',
    scenario_transfer: 'Scenario emergenza extraurbana: guasto meccanico',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS; art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-09',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Quando il marciapiede è interrotto per lavori, il pedone che lo attraversa diventa automaticamente responsabile di eventuali sinistri.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a cantiere/responsabilità: l\u2019obbligo di prudenza ricade sempre sui conducenti (art. 140-141); il pedone non è "automaticamente responsabile".',
    scenario_transfer: 'Scenario cantiere urbano: deviazione del percorso pedonale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C002-10',
    concetto_codice: 'ARG16-C002',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Costruendo la definizione dal CdS: "esterno alla carreggiata + rialzato/delimitato + riservato ai pedoni" individua univocamente la banchina.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. I tre requisiti insieme individuano il MARCIAPIEDE, non la banchina. La banchina è esterna alla carreggiata ma NON rialzata e NON riservata ai pedoni.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 3 CdS',
  },

  // ============================================================
  // ARG16-C003 — Pista ciclabile, corsia ciclabile, ciclopedonale
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C003-01',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La pista ciclabile è la parte longitudinale della strada destinata ai velocipedi, separata fisicamente o visivamente dalla carreggiata.',
    risposta_corretta: true,
    spiegazione: 'Art. 3 CdS n. 39.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-02',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La corsia ciclabile è ricavata da una sola striscia riservata sulla corsia veicolare.',
    risposta_corretta: true,
    spiegazione: 'Art. 3 CdS n. 12-bis.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-03',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Su una pista ciclabile possono transitare liberamente anche i motocicli leggeri.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. La pista ciclabile è riservata ai velocipedi; i motocicli non possono transitarvi.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-04',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'La pista ciclabile e la corsia ciclabile sono sinonimi: entrambe indicano una striscia riservata ai velocipedi all\u2019interno della corsia veicolare.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica. Sono istituti diversi: la pista è fisicamente o visivamente separata dalla carreggiata; la corsia ciclabile è una striscia RICAVATA nella corsia veicolare.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-05',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019itinerario ciclopedonale, in ogni caso, vieta sempre il transito pedonale separando fisicamente bici e pedoni.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "in ogni caso sempre". L\u2019itinerario ciclopedonale è condiviso per definizione tra ciclisti e pedoni; non impone separazione fisica.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-06',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può discrezionalmente parcheggiare il veicolo lungo una corsia ciclabile se non crea intralcio.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente ("discrezionalmente"). L\u2019art. 158 vieta la sosta sulle piste e corsie ciclabili, senza discrezionalità del conducente.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-07',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un centro abitato con corsia ciclabile sulla destra, il conducente che svolta a destra deve sempre verificare che non sopraggiunga un ciclista sulla corsia.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a svolta: la presenza di corsia ciclabile aumenta il rischio di conflitto destro con ciclista che procede dritto. Regola di diligenza dell\u2019art. 154 CdS.',
    scenario_transfer: 'Scenario svolta a destra con corsia ciclabile adiacente',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-08',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un pedone può attraversare una pista ciclabile separata per raggiungere la fermata TPL sull\u2019altro lato, usando la normale cautela.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a scenario pedone/TPL: la pista ciclabile non è uno sbarramento; il pedone può attraversarla con le stesse cautele di un\u2019area di transito.',
    scenario_transfer: 'Scenario pedone che raggiunge fermata TPL attraversando pista ciclabile',
    livello_difficolta: 2,
    articolo_cds: 'Art. 190 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-09',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante un cantiere stradale con deviazione della corsia veicolare, il cantiere può temporaneamente sovrascrivere una corsia ciclabile esistente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a cantiere: la segnaletica temporanea prevale sulla permanente (art. 21 CdS), quindi una corsia ciclabile può essere ridisegnata o soppressa durante i lavori.',
    scenario_transfer: 'Scenario cantiere urbano che sovrascrive segnaletica ciclabile',
    livello_difficolta: 3,
    articolo_cds: 'Art. 21 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C003-10',
    concetto_codice: 'ARG16-C003',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Dal solo criterio "separazione fisica" posso stabilire se ho di fronte una pista ciclabile o una corsia ciclabile.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. La pista ciclabile è separata fisicamente O visivamente. Il solo criterio "separazione fisica" non basta: non distingue pista visiva da corsia ciclabile (che è una striscia interna).',
    livello_difficolta: 4,
    articolo_cds: 'Art. 3 CdS',
  },

  // ============================================================
  // ARG16-C004 — Intersezione, incrocio, confluenza
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C004-01',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019intersezione a raso è l\u2019area comune a più strade che si incrociano o confluiscono sullo stesso livello.',
    risposta_corretta: true,
    spiegazione: 'Definizione art. 3 CdS n. 20.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-02',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un incrocio è un tipo particolare di intersezione in cui le strade si attraversano.',
    risposta_corretta: true,
    spiegazione: 'L\u2019incrocio è un\u2019intersezione in cui le direttrici si attraversano.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-03',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una confluenza è un\u2019intersezione a Y in cui due correnti di traffico si uniscono.',
    risposta_corretta: true,
    spiegazione: 'Definizione di confluenza come innesto a Y.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-04',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un incrocio e una confluenza sono la stessa cosa dal punto di vista del CdS.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica quasi-sinonima. L\u2019art. 3 li distingue: l\u2019incrocio prevede attraversamento, la confluenza un innesto. Le regole di precedenza possono cambiare.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-05',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni intersezione, il conducente ha sempre la precedenza sui veicoli che provengono da destra.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "ogni/sempre". È proprio il contrario (e solo in assenza di altra segnaletica): chi viene da destra ha precedenza.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-06',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nell\u2019attraversamento di un incrocio, la precedenza viene data ai veicoli provenienti da destra.',
    risposta_corretta: true,
    spiegazione:
      'P16 — passivo ingannevole "viene data": chi la dà? Il conducente che si immette/attraversa. La regola in sostanza è corretta (art. 145), ma l\u2019uso del passivo va sempre ricostruito chi-fa-cosa.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-07',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una rotatoria moderna (segnale di precedenza all\u2019immissione) chi entra deve dare la precedenza a chi è già nell\u2019anello.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a rotatoria: è una forma particolare di intersezione in cui la segnaletica specifica sovrascrive la regola generale "chi viene da destra".',
    scenario_transfer: 'Scenario rotatoria urbana con precedenza all\u2019anello',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-08',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una confluenza autostradale, chi si immette dall\u2019accelerazione ha diritto di precedenza sui veicoli che percorrono la carreggiata principale.',
    risposta_corretta: false,
    spiegazione:
      'Transfer autostrada: art. 176 — chi si immette deve dare precedenza a chi percorre la carreggiata principale, anche con corsia di accelerazione.',
    scenario_transfer: 'Scenario immissione autostradale da rampa',
    livello_difficolta: 2,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-09',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una biforcazione di una strada extraurbana secondaria, dove le due direttrici si separano, vige la regola di precedenza tipica dell\u2019incrocio.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a biforcazione: una biforcazione è un semplice sdoppiamento, non un\u2019intersezione. Non si applica la regola della precedenza da destra.',
    scenario_transfer: 'Scenario biforcazione extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C004-10',
    concetto_codice: 'ARG16-C004',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Una rotatoria è un\u2019intersezione perché è area comune a più strade che si immettono in uno spazio condiviso.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. La rotatoria rientra nella definizione di intersezione: è area comune a più strade sullo stesso livello, sebbene con regolazione specifica.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 3 CdS',
  },

  // ============================================================
  // ARG16-C005 — Centro abitato come limite normativo
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C005-01',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il centro abitato è definito dall\u2019insieme di edifici delimitato lungo le vie di accesso dai relativi segnali di inizio e fine.',
    risposta_corretta: true,
    spiegazione: 'Art. 3 CdS n. 8: definizione formale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-02',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'All\u2019interno del centro abitato il limite generale di velocità è 50 km/h, salvo diversa segnalazione.',
    risposta_corretta: true,
    spiegazione: 'Art. 142 CdS: limite generale urbano 50 km/h.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-03',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il centro abitato si individua in base al numero di abitanti del comune.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il centro abitato è definito dai segnali di inizio/fine, non da criterio demografico.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-04',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite di 50 km/h vale in ogni caso, anche nelle strade extraurbane secondarie.',
    risposta_corretta: false,
    spiegazione:
      'P10 — ambito silenzioso. Il limite di 50 km/h è quello urbano; nelle extraurbane secondarie il limite generale è 90 km/h. La regola del centro abitato non si estende fuori.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-05',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nel centro abitato è sempre vietato l\u2019uso del clacson, in ogni ora del giorno.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "sempre/in ogni ora". L\u2019art. 156 permette l\u2019uso del clacson in caso di effettivo pericolo; il divieto è limitato e non assoluto.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-06',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il centro abitato include in prossimità anche i primi 50 metri di strada extraurbana oltre il cartello di fine.',
    risposta_corretta: false,
    spiegazione:
      'P14 — "in prossimità". Il centro abitato finisce esattamente al cartello di fine; non c\u2019è alcuna fascia "di prossimità" che estenda l\u2019ambito urbano oltre il segnale.',
    pattern_trappola: 'P14',
    livello_difficolta: 4,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-07',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un neopatentato che attraversa un centro abitato non può superare i 50 km/h anche se potrebbe legalmente guidare a velocità maggiore fuori.',
    risposta_corretta: true,
    spiegazione:
      'Transfer neopatentato (art. 117): il limite urbano 50 km/h si applica a tutti, neopatentati compresi. I limiti specifici per neopatentati riguardano extraurbana (90) e autostrada (100).',
    scenario_transfer: 'Scenario neopatentato in centro abitato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS; art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-08',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un centro abitato con segnale di "zona residenziale" il limite di velocità può essere portato a 30 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a zona 30: il segnale di zona residenziale o zona 30 sovrascrive il limite urbano generale con un limite più restrittivo.',
    scenario_transfer: 'Scenario zona residenziale/zona 30',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-09',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, il centro abitato smette di esistere come entità normativa e ritornano i limiti extraurbani.',
    risposta_corretta: false,
    spiegazione:
      'Transfer notte: il centro abitato è definito dai segnali, non dall\u2019orario. Il limite 50 km/h resta in vigore anche di notte.',
    scenario_transfer: 'Scenario guida notturna nel centro abitato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C005-10',
    concetto_codice: 'ARG16-C005',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Se una frazione isolata è priva di segnale di inizio centro abitato, non è centro abitato ai fini del CdS, anche se urbanisticamente abitata.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019art. 3 lega la nozione ai segnali: senza cartello di inizio, il tratto è considerato extraurbano ai fini della velocità e delle altre regole.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 3 CdS',
  },

  // ============================================================
  // ARG16-C006 — Classificazione delle strade (art. 2 CdS)
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C006-01',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019art. 2 CdS classifica le strade in sette categorie: A, B, C, D, E, F, F-bis.',
    risposta_corretta: true,
    spiegazione: 'Classificazione funzionale art. 2 CdS.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-02',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le autostrade (categoria A) hanno carreggiate separate e almeno due corsie per senso, più corsia di emergenza.',
    risposta_corretta: true,
    spiegazione: 'Requisiti costruttivi art. 2 CdS, strade tipo A.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-03',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le strade locali (categoria F) sono quelle con requisiti costruttivi più severi, aperte solo a veicoli leggeri.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Le strade locali sono invece la categoria residuale, senza requisiti costruttivi specifici, aperte a tutti gli utenti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-04',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le strade extraurbane principali (categoria B) e le strade di scorrimento urbane (categoria D) sono considerate equivalenti ai fini del limite di velocità.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica. Sono categorie diverse: B ha limite 110 km/h, D ha limite 70 km/h. Non equivalenti.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2 CdS; art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-05',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni autostrada deve sempre avere almeno tre corsie per senso di marcia.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "ogni/sempre/almeno tre". L\u2019art. 2 richiede almeno DUE corsie per senso; molte autostrade italiane ne hanno due.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-06',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente usare una strada di categoria F-bis (ciclabile) per transitare con un ciclomotore.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "liberamente". La categoria F-bis è riservata ai velocipedi; non è accessibile ai ciclomotori.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-07',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un motociclo di 125 cm³ può transitare su un\u2019autostrada (categoria A)?',
    risposta_corretta: false,
    spiegazione:
      'Transfer L. 177/2024 (art. 175): in autostrada sono ammessi i motocicli di cilindrata ≥120 cm³ SOLO se condotti da maggiorenni con potenza adeguata; la verifica è sulla potenza, ma un 125 cm³ di nuova immatricolazione entra solo con requisiti. Risposta strettamente a norma: dipende; in generale NO per patenti B base.',
    scenario_transfer: 'Scenario motociclo di piccola cilindrata in autostrada',
    livello_difficolta: 4,
    articolo_cds: 'Art. 175 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-08',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una strada urbana di quartiere (categoria E) ammette come limite generale di velocità 50 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a velocità: le urbane di quartiere sono nel centro abitato, quindi 50 km/h salvo diversa segnalazione.',
    scenario_transfer: 'Scenario urbana di quartiere e limiti',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-09',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In caso di neopatentato (art. 117) il limite di velocità in strada extraurbana principale è 90 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Transfer neopatentato: art. 117 impone 90 km/h su extraurbana principale (invece di 110) e 100 km/h in autostrada (invece di 130).',
    scenario_transfer: 'Scenario neopatentato su strade di categoria B',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C006-10',
    concetto_codice: 'ARG16-C006',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Riassumendo i requisiti: una strada con carreggiate separate, senza corsia di emergenza, con due corsie per senso, è una strada extraurbana principale (B) e non un\u2019autostrada.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019assenza della corsia di emergenza distingue la B dall\u2019A. Le autostrade richiedono la corsia di emergenza come requisito costruttivo.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 2 CdS',
  },

  // ============================================================
  // ARG16-C007 — Dovere generale del conducente (art. 140)
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C007-01',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019art. 140 CdS impone agli utenti della strada di comportarsi in modo da non costituire pericolo o intralcio per la circolazione.',
    risposta_corretta: true,
    spiegazione: 'Testo dell\u2019art. 140: principio informatore generale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-02',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il dovere generale di sicurezza dell\u2019art. 140 si applica a tutti gli utenti della strada, non solo ai conducenti di veicoli a motore.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 140 parla di "utenti della strada" in senso ampio: pedoni, ciclisti, conducenti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-03',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019art. 140 è una regola astratta che non comporta conseguenze sanzionatorie.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. La violazione dell\u2019art. 140 comporta sanzione amministrativa e si aggiunge come principio integratore alle altre norme.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-04',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente è sempre tenuto a fermarsi in ogni situazione di intralcio alla circolazione.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "sempre/in ogni situazione". L\u2019art. 140 chiede di NON creare intralcio; fermarsi ingiustificatamente crea esso stesso intralcio.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-05',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può, a propria discrezione, moderare la velocità solo quando incontra intralcio concreto.',
    risposta_corretta: false,
    spiegazione:
      'P04 — scambio può/deve. L\u2019art. 141 impone ("deve") di regolare la velocità alle condizioni effettive, non è discrezionale.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-06',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'In base all\u2019art. 140 è obbligatorio essere segnalati da terzi quando si costituisce pericolo per la circolazione.',
    risposta_corretta: false,
    spiegazione:
      'P16 — passivo ingannevole "essere segnalati". L\u2019obbligo ricade sul conducente stesso, non su terzi: è lui a dover evitare il pericolo.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-07',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un sorpasso su extraurbana, anche se tecnicamente consentito dalla segnaletica, il conducente deve astenersi se le condizioni di visibilità lo rendono pericoloso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a sorpasso: l\u2019art. 140 integra l\u2019art. 148. Il sorpasso "consentito" non diventa obbligatorio o automatico; la prudenza prevale.',
    scenario_transfer: 'Scenario sorpasso extraurbano con visibilità ridotta',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS; art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-08',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In caso di tratto di strada improvvisamente allagato, il conducente che prosegue alla massima velocità consentita rispetta l\u2019art. 140.',
    risposta_corretta: false,
    spiegazione:
      'Transfer maltempo: il limite massimo non libera dal dovere di prudenza. Il conducente deve ridurre la velocità alle condizioni reali.',
    scenario_transfer: 'Scenario maltempo con allagamento improvviso',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-09',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il principio dell\u2019art. 140 si estende anche alla manovra di retromarcia in area privata aperta al pubblico, come un parcheggio commerciale.',
    risposta_corretta: true,
    spiegazione:
      'Transfer area privata aperta al pubblico: le norme di condotta si applicano ovunque ci sia circolazione fruibile dal pubblico.',
    scenario_transfer: 'Scenario retromarcia in parcheggio commerciale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C007-10',
    concetto_codice: 'ARG16-C007',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'Il dovere dell\u2019art. 140 è "più generico" delle singole norme, quindi quando si viola una norma specifica (es. art. 142) non può essere contestato anche l\u2019art. 140.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. L\u2019art. 140 integra le singole norme e può essere contestato congiuntamente quando la condotta, oltre a violare una norma specifica, crea pericolo o intralcio.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 140 CdS',
  },

  // ============================================================
  // ARG16-C008 — Velocità adeguata (art. 141)
  // ============================================================
  {
    codice: 'QUIZ-ARG16-C008-01',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019art. 141 impone al conducente di regolare la velocità alle condizioni di strada, traffico, visibilità e meteo.',
    risposta_corretta: true,
    spiegazione: 'Testo dell\u2019art. 141 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-02',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve essere in grado di arrestare il veicolo entro i limiti del proprio campo di visibilità.',
    risposta_corretta: true,
    spiegazione: 'Principio della "velocità adeguata" dell\u2019art. 141.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-03',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite di velocità indicato dal cartello è la velocità garantita in ogni condizione.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il limite è un massimo; la velocità va sempre adeguata alle condizioni reali (art. 141).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-04',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può sempre mantenere la velocità massima consentita purché il cartello non la proibisca.',
    risposta_corretta: false,
    spiegazione:
      'P01/P04 combinati (dichiariamo P04). L\u2019art. 141 impone ("deve") di adattare la velocità alle condizioni reali, non è facoltà del conducente.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-05',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Di notte, su strada extraurbana ben illuminata da fari propri, la velocità adeguata è sempre quella del limite massimo.',
    risposta_corretta: false,
    spiegazione:
      'P10 — ambito silenzioso. Di notte il campo di visibilità è ridotto al cono dei fari: la velocità adeguata è sempre minore del limite massimo diurno.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-06',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente non deve mai non moderare la velocità in prossimità di attraversamenti pedonali.',
    risposta_corretta: true,
    spiegazione:
      'P02 — doppia negazione. Riscritta in positivo: "deve moderare la velocità in prossimità di attraversamenti pedonali" — VERO (art. 141 + 191).',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-07',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante una fitta nebbia in autostrada, il conducente che mantiene 130 km/h è sempre in regola perché non supera il limite.',
    risposta_corretta: false,
    spiegazione:
      'Transfer nebbia: l\u2019art. 141 obbliga a ridurre sensibilmente la velocità in caso di visibilità ridotta, indipendentemente dal limite massimo.',
    scenario_transfer: 'Scenario nebbia fitta in autostrada',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-08',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un centro abitato vicino a una scuola all\u2019orario d\u2019uscita, anche con limite 50 km/h il conducente deve ridurre sensibilmente la velocità.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a zona scolastica: l\u2019art. 141 richiede velocità adeguata a situazione (bambini in movimento). Riduzione obbligatoria.',
    scenario_transfer: 'Scenario zona scuola all\u2019uscita',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-09',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada montana con tornanti stretti, rispettare il limite di 70 km/h indicato è sempre prudente.',
    risposta_corretta: false,
    spiegazione:
      'Transfer tornanti: i tornanti riducono il campo di visibilità e l\u2019aderenza; la velocità adeguata può essere molto inferiore al limite.',
    scenario_transfer: 'Scenario strada montana con tornanti',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG16-C008-10',
    concetto_codice: 'ARG16-C008',
    argomento_numero: 16,
    fase_rotta: 'origina',
    testo_domanda:
      'La "velocità adeguata" può essere inferiore ma mai superiore al limite massimo segnalato.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019adeguatezza è un vincolo al ribasso sul massimo consentito; non può mai giustificare una velocità sopra il limite.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
] as const
