import type { QuizItem } from '../_types'

// Argomento 14 — Incidenti stradali
// 10 concetti × 10 item = 100 item V/F
// Pattern trappola dominanti: P04 (può↔deve), P16 (passivo ingannevole),
// P18 (verità parziale fuori contesto).
// Base normativa: CdS art. 189, 190, 193; art. 593 c.p.

export const ARG14_QUIZ: readonly QuizItem[] = [
  // =====================================================================
  // ARG14-C001 — Definizione di incidente stradale
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C001-01',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Costituisce incidente stradale ogni evento legato alla circolazione di un veicolo che determina un danno a persone o a cose.',
    risposta_corretta: true,
    spiegazione:
      'Art. 189 co. 1 CdS: definizione ampia, include danni minimi a cose.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-02',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Anche un\u2019uscita di carreggiata del solo veicolo responsabile rientra nella nozione di incidente stradale.',
    risposta_corretta: true,
    spiegazione:
      'Non serve la pluralità di veicoli; basta il danno a persone o cose.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-03',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda: 'Il tamponamento è un tipo di incidente stradale.',
    risposta_corretta: true,
    spiegazione: 'Tamponamento = collisione frontale-posteriore; è incidente.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-04',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Costituisce incidente stradale solo l\u2019evento che coinvolge almeno due veicoli in movimento.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): non serve la pluralità di veicoli. L\u2019uscita di strada di un solo veicolo è incidente.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-05',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di incidente è sufficiente che si provveda ad annotare le generalità, senza altri obblighi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "si provveda"): cancella l\u2019agente. Gli obblighi sono molti (fermarsi, assistere, segnalare) e ricadono sul conducente coinvolto.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-06',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Gli incidenti stradali con soli danni a cose non rientrano nella disciplina dell\u2019art. 189 CdS.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): anche i soli danni a cose rientrano nell\u2019art. 189 (con obblighi parzialmente diversi, es. rimozione dei veicoli).',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-07',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il mio specchietto viene urtato da uno scooter che prosegue senza fermarsi: l\u2019evento è un incidente stradale ai sensi dell\u2019art. 189.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: danno a cose + circolazione = incidente. L\u2019altro conducente è in fuga.',
    scenario_transfer: 'Urto specchietto da parte di scooter che non si ferma.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-08',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se durante una manovra in retromarcia colpisco un palo della luce e danneggio la mia auto, è comunque un incidente stradale.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: danno a cose di proprietà pubblica (palo) + veicolo in movimento = incidente.',
    scenario_transfer: 'Retromarcia contro palo della luce.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-09',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Investire un pedone durante un attraversamento pedonale costituisce incidente stradale ai sensi dell\u2019art. 189.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: danno a persona + veicolo in circolazione = incidente.',
    scenario_transfer: 'Investimento di pedone sulle strisce.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C001-10',
    concetto_codice: 'ARG14-C001',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Un veicolo parcheggiato che viene urtato da un altro veicolo in movimento non costituisce incidente stradale, perché uno dei due non era in circolazione.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: basta che UN veicolo sia in circolazione. Urtare un\u2019auto parcheggiata è incidente a tutti gli effetti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },

  // =====================================================================
  // ARG14-C002 — Obbligo di fermarsi
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C002-01',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente coinvolto in un incidente deve fermarsi immediatamente, qualunque sia l\u2019entità del danno.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 1: obbligo di fermarsi incondizionato.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-02',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di fermarsi sorge dal semplice coinvolgimento nel sinistro, anche senza responsabilità.',
    risposta_corretta: true,
    spiegazione: 'Coinvolgimento = obbligo. Non serve sentirsi responsabili.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-03',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Allontanarsi dopo un incidente senza essersi identificati costituisce il reato di fuga.',
    risposta_corretta: true,
    spiegazione: 'Fuga = non fermarsi/non identificarsi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-04',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente coinvolto in un incidente può fermarsi, se ritiene che ci siano i presupposti di responsabilità.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può" vs "deve"): la norma dice DEVE fermarsi, non "può". La valutazione di responsabilità è irrilevante.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-05',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di incidente basta che venga lasciato un biglietto con il recapito sul veicolo urtato, senza fermarsi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "basta che venga lasciato"): l\u2019agente è cancellato. L\u2019obbligo ricade sul conducente che DEVE fermarsi, non solo lasciare un biglietto.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-06',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di fermarsi scatta unicamente se l\u2019incidente ha provocato danni alle persone.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 + F01 ("unicamente"): fermarsi è obbligatorio anche per soli danni a cose. Ciò che cambia è l\u2019obbligo di soccorso, non quello di fermarsi.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-07',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se urto una bicicletta in sosta senza nessuno a bordo, devo comunque fermarmi e lasciare i miei dati.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019obbligo di fermarsi vale anche per danni a cose.',
    scenario_transfer: 'Urto a bici parcheggiata con proprietario assente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-08',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se in retromarcia urto un\u2019auto parcheggiata in assenza del proprietario, devo lasciare almeno i miei dati in un biglietto visibile oltre ad avvisare le autorità.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: buona prassi + obbligo di identificazione. L\u2019abbandono silenzioso integra fuga.',
    scenario_transfer: 'Urto in parcheggio con auto assente.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-09',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Anche se ritengo che l\u2019incidente sia colpa dell\u2019altro conducente, devo comunque fermarmi sul posto.',
    risposta_corretta: true,
    spiegazione: 'Transfer: la responsabilità non incide sul fermo.',
    scenario_transfer: 'Collisione laterale con controparte palesemente colpevole.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C002-10',
    concetto_codice: 'ARG14-C002',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Dopo un incidente è sufficiente fermarsi, scambiare dati con l\u2019altro conducente e ripartire subito, anche se sul posto c\u2019è un ferito.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: in presenza di feriti sorge anche l\u2019obbligo di soccorso. Ripartire senza assistenza integra omissione di soccorso.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },

  // =====================================================================
  // ARG14-C003 — Obbligo di prestare soccorso
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C003-01',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In presenza di persone ferite il conducente coinvolto deve prestare l\u2019assistenza necessaria.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 6-7: obbligo di soccorso.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-02',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente coinvolto deve richiedere l\u2019intervento dei soccorsi sanitari in caso di feriti.',
    risposta_corretta: true,
    spiegazione: 'Chiamare il 112/118 è parte dell\u2019obbligo di assistenza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-03',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019abbandono dei feriti sulla scena costituisce il reato di omissione di soccorso.',
    risposta_corretta: true,
    spiegazione: 'Reato autonomo, cumulabile con il reato di fuga.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-04',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può decidere, in base alla gravità apparente, se prestare o no soccorso ai feriti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può" vs "deve"): l\u2019obbligo è categorico. La "gravità apparente" non è una variabile di scelta.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-05',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In presenza di feriti deve essere prestata assistenza, senza specificare da chi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "deve essere prestata"): l\u2019agente è cancellato. In realtà l\u2019obbligo è personale del CONDUCENTE coinvolto.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-06',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di prestare soccorso coincide con quello di fermarsi: sono lo stesso obbligo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): sono due obblighi DISTINTI e autonomi, con sanzioni cumulabili (art. 189 co. 6 e 7).',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-07',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo un tamponamento in città con un ferito leggero, devo chiamare il 118 anche se la vittima dice che sta bene.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: le lesioni interne possono emergere ore dopo; la valutazione spetta ai sanitari.',
    scenario_transfer: 'Tamponamento urbano con ferito che minimizza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-08',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se investo un ciclista che cade e lamenta dolore alla schiena, devo evitare di spostarlo e chiamare immediatamente i soccorsi.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: dolore lombare + trauma = sospetto lesione spinale, NO spostamenti. 112/118 + attesa.',
    scenario_transfer: 'Investimento ciclista con dolore lombare.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-09',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se sono coinvolto in un incidente con feriti e ho poca dimestichezza con il primo soccorso, devo almeno chiamare il 118 e proteggere la scena.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: "assistenza necessaria" include almeno l\u2019allertamento e la protezione della scena, anche senza competenze mediche.',
    scenario_transfer: 'Conducente senza formazione sanitaria con feriti a terra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C003-10',
    concetto_codice: 'ARG14-C003',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Il conducente coinvolto può andare in ospedale con la propria auto per farsi medicare e tornare poi sulla scena: questo comportamento è compatibile con l\u2019obbligo di soccorso.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019allontanamento dalla scena senza attendere i soccorsi, anche per andare in ospedale da soli, integra potenzialmente omissione di soccorso verso gli altri feriti.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 co. 7 CdS',
  },

  // =====================================================================
  // ARG14-C004 — Identificazione e generalità
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C004-01',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente coinvolto deve fornire le proprie generalità alle altre persone coinvolte nell\u2019incidente.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 5: obbligo di identificazione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-02',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve comunicare gli estremi dell\u2019assicurazione RCA obbligatoria.',
    risposta_corretta: true,
    spiegazione: 'Dati RCA essenziali per la pratica di sinistro.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-03',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se il conducente non è anche il proprietario del veicolo, deve comunicare anche le generalità del proprietario.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 5: generalità del proprietario incluse.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-04',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può rifiutarsi di fornire le proprie generalità se ritiene che l\u2019incidente sia minimo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può"): l\u2019obbligo è incondizionato, indipendente dall\u2019entità percepita del danno.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-05',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le generalità devono essere fornite, salvo che il richiedente non si qualifichi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "devono essere fornite, salvo che"): il Codice non prevede questa eccezione. Le generalità vanno fornite alle persone coinvolte e agli agenti.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-06',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di fornire le generalità sussiste unicamente se l\u2019incidente ha prodotto feriti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 + F01 ("unicamente"): vale anche per soli danni a cose.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-07',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se sto guidando l\u2019auto di mio padre e urto un\u2019altra vettura, devo fornire sia le mie generalità sia quelle di mio padre (intestatario).',
    risposta_corretta: true,
    spiegazione:
      'Transfer: conducente ≠ proprietario → doppia identificazione.',
    scenario_transfer: 'Guida con auto di familiare intestatario diverso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-08',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo un\u2019incidente senza feriti, devo mostrare all\u2019altro conducente i dati della mia polizza assicurativa.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019identificazione include gli estremi RCA, a prescindere dalla presenza di feriti.',
    scenario_transfer: 'Tamponamento senza feriti.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-09',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se l\u2019altro conducente mi chiede il numero di polizza, devo comunicarglielo e, su richiesta degli agenti, anche dimostrare la copertura.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: dati RCA dovuti sia alla controparte sia alle autorità.',
    scenario_transfer: 'Controparte che richiede numero polizza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C004-10',
    concetto_codice: 'ARG14-C004',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Se il danno è inferiore a 500 euro, non è necessario fornire le proprie generalità all\u2019altro conducente.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: nessuna soglia economica esenta dall\u2019obbligo di identificazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },

  // =====================================================================
  // ARG14-C005 — Segnalazione del veicolo fermo dopo il sinistro
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C005-01',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo un incidente il conducente deve segnalare il veicolo fermo con le luci di emergenza e il triangolo.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 2: obblighi di segnalazione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-02',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il triangolo va collocato ad almeno 50 metri dietro il veicolo sulle strade extraurbane.',
    risposta_corretta: true,
    spiegazione: '50 m = distanza minima standard.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-03',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi scende dal veicolo su strada extraurbana o in galleria deve indossare il giubbotto ad alta visibilità.',
    risposta_corretta: true,
    spiegazione: 'Art. 162 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-04',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il triangolo di pericolo va collocato ad almeno 30 metri dal veicolo fermo su strada extraurbana.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): il valore è 50 m, non 30. Mnemonic: "50 passi da mezzo campo".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-05',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo un incidente è sufficiente che venga segnalato il veicolo, senza ulteriori precauzioni per le persone che scendono.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "venga segnalato"): nasconde l\u2019obbligo personale di indossare il giubbotto ad alta visibilità per chi scende.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-06',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il giubbotto ad alta visibilità è obbligatorio unicamente di notte.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01: l\u2019obbligo scatta anche di giorno in condizioni di visibilità scarsa (nebbia, galleria, pioggia).',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-07',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il mio veicolo si ferma in corsia di marcia in autostrada dopo un urto, devo immediatamente attivare le quattro frecce.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: attivazione lampeggianti di emergenza come primo atto.',
    scenario_transfer: 'Fermata in corsia di marcia autostradale post-urto.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-08',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo un incidente in una galleria, anche di giorno devo indossare il giubbotto ad alta visibilità se scendo dal veicolo.',
    risposta_corretta: true,
    spiegazione: 'Transfer: galleria = visibilità ridotta, obbligo attivo.',
    scenario_transfer: 'Incidente in galleria diurna.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-09',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada urbana, dopo un incidente, è comunque buona pratica attivare le luci di emergenza anche se il triangolo non è obbligatorio.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: segnalazione dinamica con quattro frecce anche in ambiente urbano.',
    scenario_transfer: 'Incidente leggero in strada urbana.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C005-10',
    concetto_codice: 'ARG14-C005',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'La segnalazione del veicolo fermo può essere omessa se si è spostati al margine della carreggiata.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019art. 189 co. 2 impone di segnalare indipendentemente dalla posizione. Il veicolo fermo resta un pericolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 2 CdS',
  },

  // =====================================================================
  // ARG14-C006 — Non alterare lo stato dei luoghi
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C006-01',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di incidente con danni alle persone, i veicoli non devono essere rimossi né la scena alterata.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 3: conservazione della scena.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-02',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La rimozione dei veicoli è ammessa solo se strettamente necessaria per prestare soccorso o per evitare ulteriori pericoli.',
    risposta_corretta: true,
    spiegazione: 'Eccezione tassativa di salvaguardia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-03',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La conservazione della scena serve agli agenti per ricostruire la dinamica dell\u2019incidente.',
    risposta_corretta: true,
    spiegazione: 'Ratio della norma: tutela dell\u2019accertamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-04',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo un incidente con feriti i veicoli devono essere subito rimossi per liberare la carreggiata.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): con FERITI la scena NON va alterata (salvo esigenze di soccorso). La rimozione è regola dei soli danni a cose.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-05',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo un incidente con feriti, la scena non deve essere alterata, salvo che non sia necessario salvo che non lo decidano gli agenti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P02 (doppia negazione): la frase è volutamente contorta. La formulazione corretta è semplice: non alterare, salvo esigenze di soccorso o pericolo. La doppia negazione confonde il lettore.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-06',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'I veicoli coinvolti in un incidente con feriti possono essere liberamente spostati dai conducenti per agevolare il traffico.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): nessuna libera scelta. Con feriti, la scena resta ferma salvo esigenze vitali.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-07',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se in un incidente con ferito grave un\u2019auto ostacola il passaggio dell\u2019ambulanza, posso spostarla.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la rimozione è ammessa per prestare soccorso. È un\u2019eccezione espressa.',
    scenario_transfer: 'Ambulanza bloccata da veicolo incidentato.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-08',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se l\u2019incidente con feriti è avvenuto in curva cieca e ostacola pericolosamente i veicoli in arrivo, posso spostare il veicolo per evitare ulteriori collisioni.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: "per evitare ulteriore pericolo alla circolazione" = eccezione espressa dal Codice.',
    scenario_transfer: 'Incidente in curva cieca con rischio nuovo urto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-09',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se dopo un incidente con feriti prendo fotografie della scena prima che arrivino i soccorsi, sto aiutando la ricostruzione senza alterare lo stato dei luoghi.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la documentazione fotografica è compatibile con la conservazione della scena, anzi utile.',
    scenario_transfer: 'Scena di incidente in attesa dei soccorsi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C006-10',
    concetto_codice: 'ARG14-C006',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Dopo un incidente con feriti, raccogliere detriti e rottami dalla carreggiata è sempre un gesto di cortesia verso il traffico e non costituisce alterazione della scena.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: i detriti sono traccia della dinamica; rimuoverli prima dei rilievi altera la scena.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 co. 3 CdS',
  },

  // =====================================================================
  // ARG14-C007 — Incidente con soli danni alle cose
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C007-01',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se l\u2019incidente ha provocato solo danni a cose, i conducenti devono rimuovere sollecitamente i veicoli dalla carreggiata.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 9-bis: rimozione per ripristinare la circolazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-02',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di incidente con soli danni a cose i conducenti devono comunque fermarsi e identificarsi reciprocamente.',
    risposta_corretta: true,
    spiegazione: 'Fermarsi + identificarsi valgono anche senza feriti.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-03',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il Modulo CAI (Constatazione Amichevole) agevola la pratica assicurativa dopo un incidente con soli danni a cose.',
    risposta_corretta: true,
    spiegazione: 'CAI = strumento utile, non sostituisce gli obblighi legali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-04',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In un incidente con soli danni a cose i conducenti possono liberamente lasciare i veicoli fermi nella posizione dell\u2019urto fino all\u2019arrivo degli agenti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente) + P18 (verità parziale): la rimozione è un OBBLIGO, non una scelta libera. Questo è il caso inverso rispetto ai feriti.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-05',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di incidente con soli danni a cose i veicoli devono rimanere fermi sulla scena in attesa degli agenti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): quella regola vale con feriti; con soli danni a cose la rimozione è obbligatoria per liberare la carreggiata.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-06',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di soli danni alle cose, il conducente può sottrarsi all\u2019obbligo di identificarsi se la controparte è assente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può"): l\u2019identificazione va garantita comunque (es. avvisando le autorità). Allontanarsi in silenzio integra fuga.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-07',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo un tamponamento leggero al semaforo senza feriti, devo spostare con l\u2019altro conducente i veicoli in una zona sicura e compilare il CAI.',
    risposta_corretta: true,
    spiegazione: 'Transfer: caso tipico di applicazione dell\u2019art. 189 co. 9-bis.',
    scenario_transfer: 'Tamponamento leggero al semaforo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-08',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo un urto tra parafanghi senza feriti, scambiare le informazioni via app assicurativa e spostare le auto è una procedura compatibile con il Codice.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la procedura digitale equivale al CAI cartaceo ai fini assicurativi.',
    scenario_transfer: 'Urto lieve tra parafanghi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-09',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se in un incidente senza feriti l\u2019altro conducente si rifiuta di compilare il CAI, posso comunque compilarlo io con tutti i dati a mia disposizione.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il CAI monofirma è ammesso; l\u2019assicurazione gestirà la controparte.',
    scenario_transfer: 'Controparte che rifiuta la compilazione del CAI.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG14-C007-10',
    concetto_codice: 'ARG14-C007',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Per gli incidenti con soli danni a cose gli obblighi dell\u2019art. 189 CdS non si applicano, essendo sostituiti dalla sola procedura CAI.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019art. 189 si applica comunque; il CAI è uno strumento operativo, non una sostituzione degli obblighi legali.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },

  // =====================================================================
  // ARG14-C008 — Fuga e omissione di soccorso
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C008-01',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi non si ferma dopo un incidente con danni alle persone commette il reato di fuga.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 6: reato autonomo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-02',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi non presta l\u2019assistenza necessaria ai feriti commette il reato di omissione di soccorso.',
    risposta_corretta: true,
    spiegazione: 'Art. 189 co. 7: reato autonomo, cumulabile con la fuga.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-03',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le pene per fuga e omissione di soccorso possono comportare la sospensione o la revoca della patente.',
    risposta_corretta: true,
    spiegazione: 'Sanzioni accessorie ai sensi dell\u2019art. 189.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-04',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Fuga e omissione di soccorso costituiscono un unico reato, sanzionato una sola volta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): sono DUE reati autonomi, possono essere contestati insieme cumulativamente.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-05',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'In presenza di feriti, se non si ottempera all\u2019obbligo di soccorso si viene puniti con un\u2019ammenda amministrativa.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "si viene puniti") + P18 (verità parziale): l\u2019omissione di soccorso è un REATO che può comportare RECLUSIONE, non una semplice ammenda amministrativa.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-06',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il reato di fuga si configura unicamente se il conducente si allontana a velocità sostenuta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 + F01 ("unicamente"): la fuga è non fermarsi/non identificarsi. La velocità è irrilevante; anche ripartire lentamente senza identificarsi è fuga.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-07',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se dopo un incidente con un ferito grave mi fermo ma riparto prima dell\u2019arrivo dei soccorsi senza prestare alcuna assistenza, posso comunque rispondere di omissione di soccorso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il fatto di essersi fermati elimina la fuga ma NON l\u2019omissione di soccorso.',
    scenario_transfer: 'Conducente che si ferma ma riparte senza assistere.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-08',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se non mi fermo dopo aver urtato un pedone leggermente ferito pensando che "stia bene", rispondo comunque di fuga.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: non fermarsi con feriti, anche lievi, integra fuga.',
    scenario_transfer: 'Urto lieve a pedone con conducente che non si ferma.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-09',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'La revoca della patente può essere comminata in seguito alla condanna per omissione di soccorso.',
    risposta_corretta: true,
    spiegazione: 'Transfer: sanzione accessoria prevista dall\u2019art. 189.',
    scenario_transfer: 'Condanna penale per omissione di soccorso.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C008-10',
    concetto_codice: 'ARG14-C008',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'La fuga e l\u2019omissione di soccorso sono puniti solo con sanzioni amministrative: non sono reati penali.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: sono REATI con sanzioni penali (reclusione), oltre a sospensione/revoca.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 co. 6-7 CdS',
  },

  // =====================================================================
  // ARG14-C009 — Come soccorrere un ferito in sicurezza
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C009-01',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi presta soccorso a un ferito deve prima mettere in sicurezza la scena e chiamare i soccorsi sanitari.',
    risposta_corretta: true,
    spiegazione: 'Sequenza PAS: Proteggere, Allertare, Soccorrere.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-02',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al ferito non si devono somministrare liquidi né cibo.',
    risposta_corretta: true,
    spiegazione: 'Rischio soffocamento + interferenza con terapie successive.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-03',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il casco di un motociclista ferito non va rimosso se non strettamente necessario e va rimosso solo da due persone, con tecnica corretta.',
    risposta_corretta: true,
    spiegazione: 'Protezione del rachide cervicale = tecnica a due operatori.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-04',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per rianimare un ferito svenuto è consigliato dargli subito dell\u2019acqua fresca.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): l\u2019acqua non rianima e può causare soffocamento in un paziente incosciente.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-05',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il casco di un motociclista ferito deve essere sempre rimosso immediatamente per permettergli di respirare meglio.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 ("sempre") + P17 (causa-effetto invertita): rimuovere il casco senza necessità può causare lesioni al rachide cervicale.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-06',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al ferito va sempre somministrato del cognac o altra bevanda alcolica per "tirarlo su".',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): l\u2019alcol peggiora lo stato di shock, altera i parametri e interferisce con la diagnosi.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-07',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se trovo un motociclista a terra che respira ma è svenuto, devo chiamare il 118 e attendere i soccorsi senza spostarlo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il riferimento è "non spostare salvo pericolo imminente".',
    scenario_transfer: 'Motociclista svenuto ma cosciente-respirante.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-08',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il ferito è cosciente posso parlargli per rassicurarlo e mantenerlo calmo in attesa dei soccorsi.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la comunicazione verbale è parte dell\u2019assistenza ed è compatibile con "non somministrare liquidi".',
    scenario_transfer: 'Ferito cosciente in attesa dei sanitari.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-09',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il veicolo incidentato rischia di prendere fuoco, posso spostare il ferito fuori dal veicolo anche in presenza di sospetto trauma spinale.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: pericolo imminente = si privilegia la salvaguardia della vita.',
    scenario_transfer: 'Veicolo con perdita di carburante o fiamme.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG14-C009-10',
    concetto_codice: 'ARG14-C009',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Il soccorritore occasionale deve sempre tentare manovre di rianimazione complesse, anche senza formazione specifica.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: manovre complesse senza formazione possono peggiorare lo stato del ferito. "Assistenza necessaria" = compatibile con le proprie competenze.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },

  // =====================================================================
  // ARG14-C010 — Testimone obbligato all'assistenza
  // =====================================================================
  {
    codice: 'QUIZ-ARG14-C010-01',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi trova una persona ferita o in pericolo ha l\u2019obbligo di prestare l\u2019assistenza occorrente o di avvertire l\u2019autorità.',
    risposta_corretta: true,
    spiegazione: 'Art. 593 c.p. — dovere generale di soccorso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-02',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il dovere di prestare soccorso grava anche sul semplice testimone, non solo su chi ha causato l\u2019incidente.',
    risposta_corretta: true,
    spiegazione: 'Dovere generalizzato di solidarietà.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-03',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Anche chi non era coinvolto nell\u2019incidente deve almeno allertare il 112 se si imbatte in un ferito.',
    risposta_corretta: true,
    spiegazione: 'Allertamento = "assistenza occorrente" minima.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-04',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il dovere di soccorso grava unicamente sui conducenti direttamente coinvolti nell\u2019incidente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 + F01 ("unicamente"): il dovere grava su chiunque, anche sul passante. L\u2019art. 593 c.p. è generale.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-05',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il passante può decidere liberamente se fermarsi o no davanti a una scena di incidente con feriti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): esiste un dovere giuridico di soccorso, non è questione di scelta.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-06',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'trappola',
    testo_domanda:
      'Davanti a un ferito è sufficiente che venga allertato qualcuno, genericamente, senza assicurarsi che l\u2019allertamento sia effettivo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P16 (passivo ingannevole "venga allertato"): il soggetto sparisce. Chi trova il ferito deve PERSONALMENTE assicurarsi che il 112 sia stato chiamato.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-07',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se passeggio e vedo un ciclista caduto a terra sanguinante, devo almeno chiamare il 118.',
    risposta_corretta: true,
    spiegazione: 'Transfer: passante = testimone = dovere di allertamento.',
    scenario_transfer: 'Ciclista caduto incontrato durante una passeggiata.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-08',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se in auto incontro un incidente già avvenuto senza esservi coinvolto, devo comunque rallentare, proteggere la scena e allertare i soccorsi se non lo hanno già fatto altri.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: anche come semplice testimone, protezione + allertamento.',
    scenario_transfer: 'Scena di incidente trovata per strada senza coinvolgimento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-09',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se di notte in autostrada incontro un\u2019auto incidentata senza poter fermarmi in sicurezza, posso comunque adempiere al mio dovere di soccorso chiamando il 112 dal primo punto sicuro.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019allertamento "dal primo punto sicuro" è compatibile con il dovere.',
    scenario_transfer: 'Incidente avvistato in autostrada notturna.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 593 c.p.',
  },
  {
    codice: 'QUIZ-ARG14-C010-10',
    concetto_codice: 'ARG14-C010',
    argomento_numero: 14,
    fase_rotta: 'origina',
    testo_domanda:
      'Un testimone non coinvolto nell\u2019incidente non risponde mai penalmente, anche se si allontana senza avvertire nessuno davanti a un ferito grave.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il testimone può rispondere di omissione di soccorso ex art. 593 c.p. se si allontana senza avvertire.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 593 c.p.',
  },
] as const
