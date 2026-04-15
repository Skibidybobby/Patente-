import type { QuizItem } from '../_types'

// Fonte: docs/research/03-pattern-trappole.md + CdS artt. 152-156
// Quiz R.O.T.T.A. per argomento 21 — Uso delle luci e dei dispositivi acustici,
// spie e simboli. 9 concetti × 10 item = 90 item.
// Pattern dominanti del batch: P03 (obbligo/divieto), P10 (centro/fuori),
// P01 (quantificatori universali), P04 (può/deve), P12 (libertà apparente).

export const ARG21_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG21-C001 — Luci di posizione
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C001-01',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le luci di posizione devono essere accese durante la marcia da mezz\u2019ora dopo il tramonto a mezz\u2019ora prima del sorgere del sole.',
    risposta_corretta: true,
    spiegazione:
      'Regola base dell\u2019art. 152 CdS. Mnemonic: "mezz\u2019ora dopo, mezz\u2019ora prima". La finestra di obbligo inizia 30 minuti dopo il tramonto e termina 30 minuti prima dell\u2019alba.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-02',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In galleria le luci di posizione sono necessarie soltanto di notte, mai di giorno.',
    risposta_corretta: false,
    spiegazione:
      'All\u2019ingresso in galleria la visibilit\u00e0 ambientale cala: le luci di posizione (insieme agli anabbaglianti) sono obbligatorie a prescindere dall\u2019orario.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-03',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante la sosta sulla carreggiata fuori dal centro abitato le luci di posizione devono restare accese.',
    risposta_corretta: true,
    spiegazione:
      'Fuori dal centro abitato la sosta sulla carreggiata obbliga a mantenere accese le luci di posizione per segnalare l\u2019ingombro del veicolo fermo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-04',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le luci di posizione vanno accese in ogni caso durante la marcia, anche in pieno giorno con sole.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso" trasforma una regola condizionata (buio, scarsa visibilit\u00e0, galleria) in un assoluto falso. Di giorno con buona luce le sole posizioni non sono obbligatorie.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-05',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      '\u00c8 vietato tenere accese le luci di posizione durante la sosta notturna su strada extraurbana non illuminata.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: la norma IMPONE le luci di posizione nella sosta fuori centro abitato, non le vieta. Scambia "\u00e8 vietato" con "\u00e8 obbligatorio" e la frase diventa vera.',
    pattern_trappola: 'P03',
    livello_difficolta: 2,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-06',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo delle luci di posizione durante la sosta sulla carreggiata vale anche dentro il centro abitato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: la regola vale FUORI dal centro abitato. Dentro il centro abitato, dove c\u2019\u00e8 illuminazione pubblica, l\u2019obbligo non si applica per la sola sosta.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-07',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: strada provinciale, ore 17:30 di novembre, tramonto alle 17:00, pioggia leggera. Il conducente deve gi\u00e0 aver acceso almeno le luci di posizione.',
    risposta_corretta: true,
    spiegazione:
      'Mezz\u2019ora dopo il tramonto (17:00 + 30 min = 17:30): l\u2019obbligo \u00e8 scattato esattamente ora; la pioggia rende anche anticipabile l\u2019accensione.',
    scenario_transfer: 'transizione crepuscolare in extraurbana con pioggia',
    livello_difficolta: 3,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-08',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: veicolo fermo per guasto su una piazzola di emergenza di una strada extraurbana, notte. Bastano le sole luci di emergenza, le luci di posizione possono restare spente.',
    risposta_corretta: false,
    spiegazione:
      'In sosta forzata notturna fuori dal centro abitato servono anche le luci di posizione per segnalare l\u2019ingombro; le quattro frecce si sommano, non sostituiscono le posizioni.',
    scenario_transfer: 'guasto notturno in piazzola extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-09',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: attraversamento di un tunnel urbano breve, giorno limpido. Le luci di posizione devono essere accese all\u2019ingresso del tunnel.',
    risposta_corretta: true,
    spiegazione:
      'Tutte le gallerie, urbane o extraurbane, impongono l\u2019accensione delle luci anche di giorno: la lunghezza non rileva, il calo di luminosit\u00e0 s\u00ec.',
    scenario_transfer: 'tunnel urbano diurno',
    livello_difficolta: 2,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C001-10',
    concetto_codice: 'ARG21-C001',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega con parole tue la finestra temporale in cui le luci di posizione sono obbligatorie durante la marcia e indica almeno due condizioni atmosferiche che anticipano l\u2019obbligo.',
    risposta_corretta: true,
    spiegazione:
      'Risposta attesa: obbligo da mezz\u2019ora dopo il tramonto a mezz\u2019ora prima del sorgere; anticipano l\u2019obbligo nebbia, pioggia intensa, neve, foschia, galleria. Valutare se lo studente collega la regola temporale con le condizioni di visibilit\u00e0 ridotta.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 152 CdS',
  },

  // ============================================================
  // ARG21-C002 — Anabbaglianti fuori centri abitati
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C002-01',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019uso degli anabbaglianti di giorno fuori dai centri abitati \u00e8 facoltativo, a discrezione del conducente.',
    risposta_corretta: false,
    spiegazione:
      'Falso: l\u2019art. 153 CdS lo rende OBBLIGATORIO fuori dai centri abitati, anche in pieno giorno, per garantire la visibilit\u00e0 reciproca dei veicoli.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-02',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In galleria gli anabbaglianti devono essere accesi a prescindere dall\u2019orario.',
    risposta_corretta: true,
    spiegazione:
      'Tutte le gallerie richiedono anabbaglianti accesi: la differenza di luminosit\u00e0 fra esterno e interno riduce la visibilit\u00e0 anche in pieno giorno.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-03',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante la circolazione notturna gli anabbaglianti sono sempre obbligatori se non si usano gli abbaglianti.',
    risposta_corretta: true,
    spiegazione:
      'Di notte gli anabbaglianti sono il dispositivo di base: gli abbaglianti, se le condizioni lo consentono, si sostituiscono a loro ma non si aggiungono come obbligo separato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-04',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019uso degli anabbaglianti di giorno \u00e8 obbligatorio anche dentro il centro abitato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: la regola si applica FUORI dal centro abitato. Dentro il centro abitato non c\u2019\u00e8 obbligo diurno di anabbaglianti (salvo galleria o scarsa visibilit\u00e0).',
    pattern_trappola: 'P10',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-05',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Fuori dai centri abitati gli anabbaglianti sono sempre obbligatori di giorno, salvo nei tratti con illuminazione pubblica.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato con falsa eccezione: fuori dal centro abitato l\u2019obbligo non ha eccezioni legate all\u2019illuminazione pubblica; qualunque tratto extraurbano vige l\u2019obbligo.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-06',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Fuori dai centri abitati il conducente pu\u00f2 accendere gli anabbaglianti di giorno se lo ritiene opportuno.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: non \u00e8 facolt\u00e0, \u00e8 un obbligo. "Pu\u00f2" qui sostituisce un "deve" imposto dall\u2019art. 153 CdS.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-07',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: autostrada, ore 13:00 di luglio, sole pieno. Gli anabbaglianti devono essere accesi.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019autostrada \u00e8 strada extraurbana per definizione: anabbaglianti obbligatori anche in pieno sole, anche di ferragosto.',
    scenario_transfer: 'autostrada diurna soleggiata',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-08',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un ciclomotore Euro 5 che circola di giorno su una strada statale extraurbana deve avere gli anabbaglianti accesi.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019obbligo diurno degli anabbaglianti riguarda tutti i veicoli a motore in marcia extraurbana; i ciclomotori e i motocicli li hanno comunque sempre accesi per costruzione.',
    scenario_transfer: 'ciclomotore su statale extraurbana',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-09',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: strada urbana con forte temporale e visibilit\u00e0 ridotta a 100 m. Gli anabbaglianti vanno accesi anche se siamo in centro abitato.',
    risposta_corretta: true,
    spiegazione:
      'La regola generale del centro abitato (niente obbligo diurno) cede davanti alla condizione "scarsa visibilit\u00e0": la pioggia intensa attiva l\u2019obbligo anche in ambito urbano.',
    scenario_transfer: 'temporale urbano diurno',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C002-10',
    concetto_codice: 'ARG21-C002',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca le tre situazioni-tipo in cui gli anabbaglianti sono obbligatori di giorno e spiega il motivo di sicurezza comune che le collega.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: (1) fuori centro abitato, (2) in galleria, (3) con scarsa visibilit\u00e0 (pioggia, nebbia, foschia). Principio comune: garantire la percezione reciproca dei veicoli quando contesto o atmosfera abbattono la luminosit\u00e0 di contrasto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },

  // ============================================================
  // ARG21-C003 — Abbaglianti
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C003-01',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli abbaglianti devono essere spenti e commutati in anabbaglianti all\u2019incrocio di un veicolo in senso opposto.',
    risposta_corretta: true,
    spiegazione:
      'Regola cardine: evitare di abbagliare chi viene incontro. La commutazione va fatta in tempo utile, prima che l\u2019altro conducente sia effettivamente abbagliato.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-02',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli abbaglianti vanno spenti quando si marcia a breve distanza dietro a un altro veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Marciare dietro con gli abbaglianti accesi abbaglia chi precede attraverso gli specchi: obbligo di spegnimento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-03',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nei tratti di strada sufficientemente illuminati gli abbaglianti vanno spenti.',
    risposta_corretta: true,
    spiegazione:
      'Dove l\u2019illuminazione pubblica basta a vedere, gli abbaglianti sono inutili e fastidiosi per gli altri: vanno spenti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-04',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Gli abbaglianti possono essere tenuti accesi in ogni situazione di marcia notturna, perch\u00e9 aumentano la visibilit\u00e0 del conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni situazione" ignora i divieti (incrocio, veicolo che precede, centro illuminato, sorpasso in corso). Vero pro del conducente, ma falso come regola.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-05',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Durante il sorpasso \u00e8 obbligatorio mantenere accesi gli abbaglianti fino al rientro in corsia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: la norma prescrive di SPEGNERE gli abbaglianti una volta raggiunto il veicolo che precede durante il sorpasso, non di tenerli accesi.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-06',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 lasciare accesi gli abbaglianti all\u2019incrocio se l\u2019altro veicolo non lampeggia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: l\u2019obbligo di commutare non dipende dalla reazione altrui. "Pu\u00f2 lasciare accesi" \u00e8 una libert\u00e0 inesistente su un obbligo di sicurezza.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-07',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: strada extraurbana buia, stai raggiungendo un furgone che procede alla tua stessa direzione. Prima di avvicinarti a meno di 150 m devi gi\u00e0 commutare in anabbaglianti.',
    risposta_corretta: true,
    spiegazione:
      'Raggiungere un veicolo che precede significa avvicinarsi a una "breve distanza": la commutazione va fatta prima, non dopo, di creare fastidio attraverso gli specchietti.',
    scenario_transfer: 'approccio notturno a veicolo che precede',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-08',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: stai percorrendo un viale urbano con lampioni funzionanti ogni 25 m. Gli abbaglianti sono compatibili con questa strada.',
    risposta_corretta: false,
    spiegazione:
      'Un viale urbano ben illuminato \u00e8 "area sufficientemente illuminata": gli abbaglianti vanno spenti. Non \u00e8 questione di centro/fuori, ma di luminosit\u00e0 effettiva del tratto.',
    scenario_transfer: 'viale urbano illuminato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-09',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: curva cieca notturna su strada di montagna senza veicoli visibili. Gli abbaglianti sono ammessi.',
    risposta_corretta: true,
    spiegazione:
      'In assenza di veicoli in senso opposto o davanti, in extraurbana buia gli abbaglianti sono proprio lo strumento pensato per illuminare in profondit\u00e0: permessi e consigliati.',
    scenario_transfer: 'tornante montano notturno',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C003-10',
    concetto_codice: 'ARG21-C003',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Indica almeno quattro situazioni in cui gli abbaglianti devono essere spenti e spiega il criterio comune a tutte.',
    risposta_corretta: true,
    spiegazione:
      'Attese: (1) incrocio con veicolo in senso opposto, (2) marcia a breve distanza dietro altro veicolo, (3) aree illuminate, (4) fase di raggiungimento nel sorpasso. Criterio: evitare di abbagliare altri utenti della strada.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },

  // ============================================================
  // ARG21-C004 — Fendinebbia
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C004-01',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il fendinebbia posteriore pu\u00f2 essere acceso in qualsiasi condizione di visibilit\u00e0, anche con cielo sereno.',
    risposta_corretta: false,
    spiegazione:
      'Falso: la soglia legale \u00e8 50 m di visibilit\u00e0 (oppure forti precipitazioni). Mnemonic "retro\u2194sotto i 50". Sopra i 50 m il retronebbia abbaglia chi segue invece di aiutarlo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-02',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I fendinebbia anteriori sono ammessi in caso di nebbia, caduta di neve o pioggia intensa.',
    risposta_corretta: true,
    spiegazione:
      'I fendinebbia anteriori sono facoltativi ma autorizzati nelle condizioni di ridotta visibilit\u00e0 atmosferica; spesso affiancano, non sostituiscono, gli anabbaglianti.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-03',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Appena la visibilit\u00e0 migliora, il fendinebbia posteriore deve essere spento per non abbagliare chi segue.',
    risposta_corretta: true,
    spiegazione:
      'Dimenticare acceso il retronebbia dopo la nebbia \u00e8 l\u2019errore pi\u00f9 frequente: un tasto spesso dimenticato = fastidio sistematico per chi ci segue.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-04',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il fendinebbia posteriore pu\u00f2 essere acceso quando la visibilit\u00e0 scende sotto i 150 metri.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: la soglia corretta \u00e8 50 m, non 150 m. Mnemonic "retro\u2194sotto i 50". A 150 m di visibilit\u00e0 il retronebbia \u00e8 sproporzionato e abbaglia.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-05',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019accensione del fendinebbia posteriore \u00e8 obbligatoria in tutte le situazioni di nebbia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto intrecciato con P01: la norma ne permette l\u2019uso solo sotto 50 m di visibilit\u00e0 o forti precipitazioni, non lo impone in "tutte" le nebbie.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-06',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente tenere acceso il fendinebbia posteriore anche con cielo sereno per essere pi\u00f9 visibile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: il retronebbia non \u00e8 "luce pi\u00f9 visibile a piacere", \u00e8 una luce ad accensione condizionata. Con cielo sereno abbaglia chi segue ed \u00e8 vietato.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-07',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: autostrada in banco di nebbia, riesci a vedere il cartello chilometrico a circa 40 m. Il retronebbia va acceso.',
    risposta_corretta: true,
    spiegazione:
      'Visibilit\u00e0 a 40 m < 50 m: condizione legale per accendere il fendinebbia posteriore. Appena vedi di nuovo a 60-70 m spegnerlo torna obbligatorio per non abbagliare.',
    scenario_transfer: 'banco di nebbia autostradale con riferimenti a 40 m',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-08',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: pioggerellina serale, visibilit\u00e0 sui 200 m, stai guidando con retronebbia acceso "per sicurezza". Sei in regola.',
    risposta_corretta: false,
    spiegazione:
      'A 200 m di visibilit\u00e0 il retronebbia non \u00e8 "sicurezza", \u00e8 abbagliamento: vietato. Bastano anabbaglianti ed eventualmente fendinebbia anteriori.',
    scenario_transfer: 'pioggia leggera serale con retronebbia superfluo',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-09',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: nevicata fitta di notte su strada statale, visibilit\u00e0 intorno a 30 m. Puoi accendere sia anabbaglianti sia fendinebbia posteriore.',
    risposta_corretta: true,
    spiegazione:
      'A 30 m di visibilit\u00e0, sotto soglia 50, il retronebbia \u00e8 legittimo e utile; si somma agli anabbaglianti senza conflitti.',
    scenario_transfer: 'nevicata statale notturna 30 m',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C004-10',
    concetto_codice: 'ARG21-C004',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 il fendinebbia posteriore ha una soglia legale di accensione, mentre quello anteriore no? Giustifica in termini di sicurezza.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: il retronebbia \u00e8 molto pi\u00f9 intenso di una luce di posizione; se acceso con buona visibilit\u00e0 abbaglia chi segue e si confonde con uno stop. Il fendinebbia anteriore illumina verso l\u2019asfalto e non abbaglia gli altri, quindi non necessita di soglia numerica.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 153 CdS',
  },

  // ============================================================
  // ARG21-C005 — Indicatori di direzione
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C005-01',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli indicatori di direzione vanno azionati in tempo utile prima di ogni cambio di corsia.',
    risposta_corretta: true,
    spiegazione:
      'Il "tempo utile" \u00e8 il margine che permette agli altri di adattare la traiettoria: pochi secondi sono pi\u00f9 che il minimo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-02',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Anche per immettersi nel flusso del traffico dopo una sosta occorre segnalare con la freccia.',
    risposta_corretta: true,
    spiegazione:
      'La ripartenza dalla sosta \u00e8 un\u2019immissione: segnalarla serve a chi sopraggiunge per anticipare la presenza del veicolo in movimento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-03',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli indicatori di direzione vanno spenti appena conclusa la manovra.',
    risposta_corretta: true,
    spiegazione:
      'Lasciare la freccia accesa dopo la svolta \u00e8 un segnale fuorviante: gli altri utenti si aspettano un\u2019altra manovra che non arriva.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-04',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 azionare le frecce prima di ogni cambio di corsia, se lo ritiene utile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: non \u00e8 una scelta "se lo ritiene utile". L\u2019art. 154 impone l\u2019obbligo. "Pu\u00f2" al posto di "deve" rende la regola facoltativa, ma non lo \u00e8.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-05',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      '\u00c8 vietato azionare gli indicatori di direzione durante il rientro in corsia dopo un sorpasso.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: il rientro dal sorpasso \u00e8 proprio uno dei casi in cui l\u2019obbligo \u00e8 espresso. "Vietato" \u00e8 l\u2019opposto di "obbligatorio".',
    pattern_trappola: 'P03',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-06',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le frecce vanno azionate in ogni caso, anche nelle curve senza diramazioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: le frecce segnalano una scelta di traiettoria, non l\u2019andamento della strada. In una curva obbligata non c\u2019\u00e8 nulla da "comunicare" e non vanno accese.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-07',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: rotatoria a due corsie, devi uscire alla terza uscita. Devi segnalare con la freccia destra l\u2019uscita, anche se sei in rotatoria da prima.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019uscita da una rotatoria \u00e8 una svolta a destra a tutti gli effetti: freccia destra prima dell\u2019uscita, spegnimento appena rientrati.',
    scenario_transfer: 'uscita da rotatoria a due corsie',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-08',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: devi parcheggiare in spazio libero lungo il marciapiede destro. Non \u00e8 necessario inserire la freccia destra perch\u00e9 il parcheggio non \u00e8 un cambio di corsia.',
    risposta_corretta: false,
    spiegazione:
      'Fermarsi a bordo strada \u00e8 una manovra che altera la traiettoria e va segnalata. La norma parla esplicitamente di "fermarsi" e "ripartire dalla sosta".',
    scenario_transfer: 'parcheggio in linea lungo marciapiede',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-09',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: durante un sorpasso in autostrada dimentichi accesa la freccia sinistra per 2 km. Commetti un\u2019irregolarit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019obbligo di spegnere le frecce appena finita la manovra vale anche in autostrada: la freccia "dimenticata" inganna gli altri e pu\u00f2 favorire un errore di chi segue.',
    scenario_transfer: 'freccia dimenticata dopo sorpasso autostradale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C005-10',
    concetto_codice: 'ARG21-C005',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Indica almeno cinque manovre in cui gli indicatori di direzione devono essere azionati e spiega perch\u00e9 il loro valore sta nel "tempo utile".',
    risposta_corretta: true,
    spiegazione:
      'Attese: svolta, cambio corsia, immissione in flusso, sorpasso, rientro, fermarsi/ripartire dalla sosta. "Tempo utile" = margine che permette agli altri di reagire prima che la traiettoria cambi; una freccia "contestuale alla manovra" perde la sua funzione preventiva.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },

  // ============================================================
  // ARG21-C006 — Luci di emergenza (4 frecce)
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C006-01',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le quattro frecce vanno attivate in caso di fermata forzata del veicolo per guasto o incidente.',
    risposta_corretta: true,
    spiegazione:
      'Funzione primaria delle luci di emergenza: segnalare che il veicolo \u00e8 fermo in modo anomalo. Il contesto \u00e8 quello di un pericolo per la circolazione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-02',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di ingorgo improvviso in extraurbana pu\u00f2 essere utile accendere le quattro frecce per avvisare chi sopraggiunge.',
    risposta_corretta: true,
    spiegazione:
      '"Coda improvvisa" \u00e8 proprio uno dei casi tipici di pericolo segnalabile con le quattro frecce, da spegnere quando la coda \u00e8 stabile e visibile da lontano.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-03',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le luci di emergenza non giustificano un\u2019occupazione impropria della carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Accendere le quattro frecce non "legalizza" una sosta vietata: il veicolo resta fermo in modo irregolare. Le frecce segnalano, non autorizzano.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-04',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente accendere le quattro frecce durante la marcia normale, per essere pi\u00f9 visibile nel traffico.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: le quattro frecce NON sono una luce "di visibilit\u00e0 a piacere". Sono un segnale di pericolo; in marcia normale confondono gli altri e ingannano sulle tue reali intenzioni (non sai pi\u00f9 se sta svoltando).',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-05',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le luci di emergenza sostituiscono la segnaletica di sosta vietata in caso di fermata breve in centro abitato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che le quattro frecce segnalano pericolo, ma NON "sostituiscono" alcun divieto: fermarsi in sosta vietata con le quattro frecce accese resta sosta vietata.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-06',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di guasto \u00e8 vietato accendere le luci di emergenza per non confondere gli altri utenti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: in caso di guasto le quattro frecce VANNO accese, non sono vietate. La confusione viene semmai dal loro uso improprio in marcia.',
    pattern_trappola: 'P03',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-07',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: durante una frenata di emergenza in autostrada, avverti una coda improvvisa davanti a te a 300 m. Attivare brevemente le quattro frecce mentre rallenti \u00e8 una pratica corretta.',
    risposta_corretta: true,
    spiegazione:
      'Prassi raccomandata e coerente con la norma: segnali l\u2019inizio di un rallentamento anomalo a chi ti segue; spegnerle appena tutti i veicoli dietro hanno rallentato.',
    scenario_transfer: 'coda autostradale improvvisa',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-08',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: pioggia battente in citt\u00e0, visibilit\u00e0 sui 60 m. Accendi le quattro frecce durante la marcia "per sicurezza".',
    risposta_corretta: false,
    spiegazione:
      'In marcia le quattro frecce non sono un "booster di visibilit\u00e0": confondi gli altri perch\u00e9 annullano il valore delle frecce di svolta. Usa anabbaglianti ed eventualmente fendinebbia.',
    scenario_transfer: 'pioggia urbana con quattro frecce inappropriate',
    livello_difficolta: 3,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-09',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: ti fermi in doppia fila in centro abitato per 2 minuti con le quattro frecce accese. La sosta \u00e8 regolare.',
    risposta_corretta: false,
    spiegazione:
      'La doppia fila resta violazione anche con le quattro frecce accese: non c\u2019\u00e8 alcun "lasciapassare" dato dal dispositivo luminoso.',
    scenario_transfer: 'doppia fila urbana con quattro frecce',
    livello_difficolta: 2,
    articolo_cds: 'Art. 153 c.5 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C006-10',
    concetto_codice: 'ARG21-C006',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 le quattro frecce non sono considerate una "luce di visibilit\u00e0 generica"? Argomenta in termini di comunicazione con gli altri utenti.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: le quattro frecce attivano simultaneamente entrambi gli indicatori di direzione e annullano la loro funzione direzionale; se usate in marcia normale gli altri non sanno pi\u00f9 interpretare le tue manovre. Il loro significato \u00e8 codificato: "pericolo / veicolo fermo anomalo".',
    livello_difficolta: 4,
    articolo_cds: 'Art. 153 c.5 CdS',
  },

  // ============================================================
  // ARG21-C007 — Clacson
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C007-01',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il clacson pu\u00f2 essere usato per evitare un incidente imminente.',
    risposta_corretta: true,
    spiegazione:
      'Funzione primaria dell\u2019art. 156 CdS: prevenire sinistri attraverso un avvertimento acustico tempestivo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-02',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Fuori dai centri abitati il clacson pu\u00f2 essere usato per segnalare la propria presenza nei tratti con scarsa visibilit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Curve cieche e dossi extraurbani sono il caso-scuola: un colpo di clacson anticipa la presenza a chi non pu\u00f2 ancora vedere.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-03',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In prossimit\u00e0 di ospedali e case di cura il clacson \u00e8 vietato, anche fuori dai centri abitati.',
    risposta_corretta: true,
    spiegazione:
      'La tutela del riposo dei pazienti \u00e8 normativa dedicata: l\u2019obbligo di silenzio prevale sul permesso extraurbano.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-04',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nei centri abitati il clacson pu\u00f2 sempre essere usato per richiamare l\u2019attenzione di un conoscente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre" su un uso estraneo alla sicurezza. Nei centri abitati l\u2019uso \u00e8 di regola VIETATO, salvo pericolo effettivo.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-05',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il clacson pu\u00f2 essere usato liberamente per manifestare disappunto verso altri utenti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: "liberamente" su dispositivo di sicurezza. Il clacson non \u00e8 uno sfogo emotivo, \u00e8 un segnale di pericolo.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-06',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019uso del clacson \u00e8 consentito per segnalare la propria presenza su curve cieche.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: manca il "dove". \u00c8 consentito SOLO FUORI DAI CENTRI ABITATI. Senza la condizione locativa la frase \u00e8 parzialmente falsa.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-07',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: strada provinciale di montagna, tornante cieco, nessun veicolo in vista. Un breve colpo di clacson prima del tornante \u00e8 buona pratica.',
    risposta_corretta: true,
    spiegazione:
      'Situazione-tipo autorizzata dall\u2019art. 156: tornante cieco fuori centro = curva cieca extraurbana, la segnalazione acustica \u00e8 utile e legittima.',
    scenario_transfer: 'tornante cieco di montagna',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-08',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: alle 23:00 passi vicino all\u2019ingresso di un ospedale in strada extraurbana. Un pedone attraversa improvvisamente: puoi suonare il clacson.',
    risposta_corretta: true,
    spiegazione:
      'Il divieto presso ospedali cede davanti al pericolo concreto: "evitare un incidente imminente" \u00e8 la deroga generale dell\u2019art. 156.',
    scenario_transfer: 'emergenza con pedone vicino a ospedale notturno',
    livello_difficolta: 4,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-09',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: sei in coda a un semaforo in centro abitato, quello davanti tarda 2 secondi al verde. Suoni il clacson.',
    risposta_corretta: false,
    spiegazione:
      'Non c\u2019\u00e8 pericolo imminente: in centro abitato l\u2019uso del clacson \u00e8 di regola vietato, tanto pi\u00f9 come sollecitazione. Sanzionabile.',
    scenario_transfer: 'semaforo urbano con clacson di sollecito',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C007-10',
    concetto_codice: 'ARG21-C007',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Riformula in una sola frase il principio che governa l\u2019uso del clacson, distinguendo centro abitato e strada extraurbana, e identifica una situazione in cui la deroga del pericolo imminente prevale su qualunque divieto.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: il clacson \u00e8 uno strumento di sicurezza, non di comunicazione sociale; in centro abitato vietato salvo pericolo, fuori centro permesso per segnalare presenza in tratti ciechi, sempre vietato presso ospedali salvo pericolo imminente.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },

  // ============================================================
  // ARG21-C008 — Lampeggio abbaglianti
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C008-01',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le segnalazioni luminose con il lampeggio degli abbaglianti possono essere usate di notte per annunciare la propria presenza nei tratti extraurbani con scarsa visibilit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 156 ammette la segnalazione luminosa come alternativa al clacson, specialmente di notte quando il suono \u00e8 meno efficace o disturba.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-02',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il lampeggio degli abbaglianti serve come avvertimento dove il clacson non \u00e8 consentito.',
    risposta_corretta: true,
    spiegazione:
      'Esempio: vicino ad ospedali, centro abitato notturno. Il lampeggio sostituisce il clacson senza generare rumore.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-03',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il lampeggio va fatto in modo da non abbagliare chi lo riceve.',
    risposta_corretta: true,
    spiegazione:
      'Obiettivo: richiamare l\u2019attenzione, non accecare. Un lampeggio breve e controllato \u00e8 sufficiente.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-04',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il lampeggio degli abbaglianti \u00e8 consentito in ogni caso come sostituto del clacson.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso". La norma lo prevede per situazioni specifiche (clacson non consentito o inefficace), non come libera alternativa.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-05',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il lampeggio degli abbaglianti serve per manifestare disappunto verso un altro utente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che nel "gergo stradale" alcuni lo usano cos\u00ec, ma la NORMA lo considera solo un avvertimento di sicurezza.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-06',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente usare il lampeggio di abbaglianti per salutare un amico in transito.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: "liberamente" su uno strumento di avvertimento. Non \u00e8 una luce di cortesia.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-07',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: notte, strada extraurbana, stai per affrontare un dosso cieco senza altri veicoli visibili. Un breve lampeggio di abbaglianti sostituisce efficacemente il clacson.',
    risposta_corretta: true,
    spiegazione:
      'Proprio il caso tipico: l\u2019effetto luminoso arriva oltre il dosso dove il clacson si perderebbe, senza rumore.',
    scenario_transfer: 'dosso cieco extraurbano notturno',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-08',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: ti si avvicina in direzione opposta un\u2019auto con abbaglianti accesi. Puoi lampeggiare brevemente per avvisarlo di commutare.',
    risposta_corretta: true,
    spiegazione:
      'Uso riconosciuto: lampeggio come richiamo per chi dimentica di commutare. Da fare brevemente per non abbagliare a propria volta.',
    scenario_transfer: 'richiamo per abbaglianti altrui',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-09',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: ore 2 di notte in centro abitato, un pedone sta per attraversare senza vederti. Lampeggiare \u00e8 preferibile al clacson.',
    risposta_corretta: true,
    spiegazione:
      'In centro abitato notturno il clacson \u00e8 inopportuno e il lampeggio \u00e8 adatto a richiamare l\u2019attenzione del pedone senza disturbare i residenti.',
    scenario_transfer: 'pedone notturno in centro',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG21-C008-10',
    concetto_codice: 'ARG21-C008',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Indica due contesti in cui il lampeggio di abbaglianti \u00e8 preferibile al clacson e spiega perch\u00e9.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) notte in extraurbana (il suono si disperde, la luce raggiunge oltre la curva/dosso); (2) vicino a ospedali o in centro abitato notturno (obbligo di silenzio). Principio: veicolare l\u2019avvertimento senza generare rumore.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },

  // ============================================================
  // ARG21-C009 — Spie cruscotto
  // ============================================================
  {
    codice: 'QUIZ-ARG21-C009-01',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una spia rossa accesa sul cruscotto a motore acceso segnala un\u2019anomalia grave che richiede arresto o intervento immediato.',
    risposta_corretta: true,
    spiegazione:
      'Codice dei colori: rosso = fermati / intervieni ora. Tipici: pressione olio, temperatura, freno, airbag, batteria.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-02',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le spie verdi sul cruscotto indicano il normale funzionamento di un dispositivo attivo.',
    risposta_corretta: true,
    spiegazione:
      'Verde = "ok, in funzione". Indicatori di direzione, anabbaglianti, luce di posizione attiva ecc.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-03',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le spie gialle o arancioni segnalano un\u2019anomalia da verificare al pi\u00f9 presto, senza urgenza di arresto immediato.',
    risposta_corretta: true,
    spiegazione:
      'Giallo = "attenzione, controlla presto". Tipici: ABS, ESP, spia motore generica, livello basso lavacristalli.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-04',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Una spia gialla accesa impone sempre l\u2019arresto immediato del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre" + "immediato" combinati. Il giallo \u00e8 "verificare al pi\u00f9 presto", non "fermati ora". Rosso \u00e8 l\u2019urgenza.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-05',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Una spia verde accesa segnala un\u2019anomalia che il conducente deve correggere prima di ripartire.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: il "colore che segnala anomalia" esiste (rosso), ma non \u00e8 il verde. Verde = funzionamento regolare.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-06',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 ignorare una spia rossa purch\u00e9 il veicolo continui a funzionare normalmente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la "possibilit\u00e0 di ignorare" una spia rossa non esiste. Il rosso indica rischio grave latente (es. pressione olio bassa) anche se l\u2019auto sembra camminare.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-07',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: durante la marcia in autostrada si accende la spia rossa della pressione olio. Devi fermarti appena possibile in sicurezza.',
    risposta_corretta: true,
    spiegazione:
      'Pressione olio insufficiente = rischio grippaggio in pochi minuti. Raggiungere rapidamente la prima piazzola di emergenza.',
    scenario_transfer: 'spia olio in autostrada',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-08',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: si accende la spia gialla ABS mentre guidi in citt\u00e0. Puoi completare il tragitto e far controllare il veicolo a breve.',
    risposta_corretta: true,
    spiegazione:
      'Giallo = controllare a breve. I freni restano funzionanti (il circuito idraulico tradizionale c\u2019\u00e8), l\u2019assistenza antibloccaggio potrebbe essere disattivata: guida con maggiore prudenza e fai verificare.',
    scenario_transfer: 'spia ABS urbana',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-09',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: freno a mano tirato e spia rossa del freno accesa, motore avviato. \u00c8 un funzionamento normale.',
    risposta_corretta: true,
    spiegazione:
      'La spia rossa del freno segnala (anche) il freno di stazionamento inserito; spegnendolo, se la spia rimane accesa allora c\u2019\u00e8 anomalia (livello liquido freni, pastiglie, ecc.).',
    scenario_transfer: 'freno a mano con spia freno',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG21-C009-10',
    concetto_codice: 'ARG21-C009',
    argomento_numero: 21,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega il "codice dei colori" delle spie cruscotto associando ciascun colore a un\u2019azione concreta del conducente.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: ROSSO \u2192 fermati in sicurezza e interveni; GIALLO \u2192 verifica al pi\u00f9 presto, guida con prudenza; VERDE \u2192 conferma funzione attiva, nessuna azione correttiva.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
] as const
