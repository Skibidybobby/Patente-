import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per argomento 6 — Segnalazioni semaforiche
// e degli agenti del traffico.
// 10 concetti × 10 item = 100 item.
// Pattern focalizzati: P03 (obbligo↔divieto), P04 (può↔deve),
// P06 (ha↔deve dare la precedenza), P11 (eccezione: ordini agente),
// P13 (coppie terminologiche: veicolare/pedonale/tranviario).
// Fasi R.O.T.T.A. per concetto: 3 riconosci, 3 trappola, 3 trasferisci, 1 origina.

export const ARG06_QUIZ: readonly QuizItem[] = [
  // ========== ARG06-C001 — Gerarchia tra segnali e agente ==========
  {
    codice: 'QUIZ-ARG06-C001-01',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In un incrocio regolato contemporaneamente da agente del traffico e semaforo, prevalgono le indicazioni dell\u2019agente.',
    risposta_corretta: true,
    spiegazione:
      'La gerarchia è: agente > semaforo > segnali verticali > segnaletica orizzontale. L\u2019agente è il livello più alto.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-02',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La segnaletica orizzontale prevale sulla segnaletica verticale quando le due sono in contrasto.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: la segnaletica verticale prevale sempre sull\u2019orizzontale. Ordine: agente > semaforo > verticali > orizzontali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-03',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le segnalazioni luminose del semaforo prevalgono sui segnali verticali fissi.',
    risposta_corretta: true,
    spiegazione:
      'Nella gerarchia dell\u2019art. 38 il semaforo viene subito dopo l\u2019agente e prima dei segnali verticali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-04',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può obbedire indifferentemente al semaforo o all\u2019agente del traffico quando le due indicazioni sono in contrasto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): "può obbedire indifferentemente" è libertà apparente. In realtà deve obbedire all\u2019agente, che prevale.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-05',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni caso, se il semaforo è verde, il conducente può ignorare gli ordini dell\u2019agente del traffico.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore universale): "in ogni caso" nasconde un\u2019eccezione. L\u2019agente prevale anche sul verde.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-06',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato proseguire se l\u2019agente ordina di avanzare ma il semaforo è rosso.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (scambio obbligo/divieto): la frase inverte il dovere. Con agente presente si DEVE seguire l\u2019agente, anche contro il rosso.',
    pattern_trappola: 'P03',
    livello_difficolta: 4,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-07',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio dove una linea di arresto dipinta dice di fermarsi ma il semaforo è verde, il conducente può proseguire.',
    risposta_corretta: true,
    spiegazione:
      'La luce semaforica (livello 2) prevale sulla segnaletica orizzontale (livello 4). Transfer gerarchia: il livello più alto vince.',
    scenario_transfer: 'incrocio urbano con vernice sbiadita al suolo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-08',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante lavori stradali, se un movimentiere autorizzato indica manualmente una corsia diversa da quella prevista dai coni, il conducente deve seguire il movimentiere.',
    risposta_corretta: true,
    spiegazione:
      'Stessa logica gerarchica: chi regola manualmente il traffico autorizzato prevale sulla segnaletica provvisoria al suolo.',
    scenario_transfer: 'cantiere stradale con movimentiere',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-09',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In prossimità di un passaggio a livello senza barriere, il segnale verticale di STOP prevale sulle strisce orizzontali.',
    risposta_corretta: true,
    spiegazione:
      'Verticale sopra orizzontale: la regola gerarchica vale anche lontano dagli incroci ordinari.',
    scenario_transfer: 'passaggio a livello',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C001-10',
    concetto_codice: 'ARG06-C001',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'A un incrocio un vigile alza il braccio ordinando l\u2019arresto mentre il semaforo, appena diventato verde, dà via libera. Il conducente che si ferma agisce correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Da questo scenario si deduce la regola di gerarchia: agente > semaforo. Fermarsi obbedendo all\u2019agente è la condotta corretta.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 CdS',
  },

  // ========== ARG06-C002 — Semaforo rosso ==========
  {
    codice: 'QUIZ-ARG06-C002-01',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con la luce rossa del semaforo veicolare il conducente deve arrestare il veicolo prima della striscia di arresto.',
    risposta_corretta: true,
    spiegazione:
      'Regola base art. 41: il rosso impone l\u2019arresto prima della linea di arresto o, in assenza, prima dell\u2019attraversamento pedonale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-02',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In assenza di linea di arresto, con il rosso il conducente si deve fermare prima dell\u2019attraversamento pedonale.',
    risposta_corretta: true,
    spiegazione:
      'Il riferimento secondario di arresto è l\u2019attraversamento pedonale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-03',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al rosso il conducente può impegnare l\u2019incrocio purché proceda a bassa velocità.',
    risposta_corretta: false,
    spiegazione:
      'Il rosso impone arresto: nessuna velocità ridotta autorizza a superarlo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-04',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al semaforo rosso il conducente può avanzare lentamente oltre la linea di arresto per migliorare la visibilità.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): "può avanzare" maschera il dovere di fermarsi. Il rosso è arresto totale.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-05',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al semaforo rosso è vietato arrestarsi prima della linea di arresto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (scambio obbligo/divieto): la frase trasforma l\u2019obbligo di fermarsi in un divieto di fermarsi.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-06',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Quando il semaforo è rosso, il conducente non è obbligato a non impegnare mai l\u2019incrocio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione): "non è obbligato a non impegnare" = può impegnare. Sbagliato: al rosso non si impegna mai.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-07',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, con strada deserta, al semaforo rosso ordinario il conducente è comunque tenuto a fermarsi.',
    risposta_corretta: true,
    spiegazione:
      'Il rosso ordinario (fisso, non lampeggiante) vale anche di notte: nessuna eccezione di traffico scarso.',
    scenario_transfer: 'notte con strada deserta',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-08',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Alla guida di uno scooter, al semaforo rosso ci si può infilare davanti alla linea di arresto tra le auto ferme.',
    risposta_corretta: false,
    spiegazione:
      'Scooter o auto: il rosso impone l\u2019arresto dietro la linea come ogni altro veicolo.',
    scenario_transfer: 'scooter in coda',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-09',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In uscita da una galleria con semaforo rosso, il conducente deve arrestarsi anche se il traffico alle spalle lo obbligherebbe a frenare bruscamente.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019obbligo di arresto al rosso non ammette eccezioni di comodità: semmai si deve viaggiare a distanza di sicurezza adeguata.',
    scenario_transfer: 'uscita galleria',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C002-10',
    concetto_codice: 'ARG06-C002',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'In un incrocio senza striscia di arresto visibile, il conducente si ferma esattamente prima dell\u2019attraversamento pedonale al sopraggiungere del rosso. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: in assenza di linea di arresto, il riferimento è l\u2019attraversamento pedonale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },

  // ========== ARG06-C003 — Semaforo giallo ==========
  {
    codice: 'QUIZ-ARG06-C003-01',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con luce gialla fissa il conducente deve fermarsi prima della linea di arresto, salvo che vi sia troppo vicino per farlo in sicurezza.',
    risposta_corretta: true,
    spiegazione:
      'È la formulazione testuale dell\u2019art. 41 sul giallo fisso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-02',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il giallo fisso preannuncia il rosso ed è un segnale di arresto condizionato.',
    risposta_corretta: true,
    spiegazione:
      'Il giallo è segnale di arresto: non di "liberalizzazione" al passaggio prima che diventi rosso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-03',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con luce gialla fissa è sempre consentito accelerare per superare l\u2019incrocio prima del rosso.',
    risposta_corretta: false,
    spiegazione:
      'Il giallo è arresto, salvo impossibilità materiale. Accelerare è vietato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-04',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con luce gialla fissa il conducente può fermarsi prima della linea di arresto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): "può" trasforma un dovere in facoltà. In realtà DEVE fermarsi, salvo eccezione di sicurezza.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-05',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con il giallo fisso il conducente deve sempre fermarsi, senza alcuna eccezione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore universale): "sempre, senza eccezione" ignora la clausola di prossimità. Eccezione: troppo vicino per frenare in sicurezza.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-06',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il giallo lampeggiante ha lo stesso significato del giallo fisso.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): "fisso" e "lampeggiante" sembrano simili ma il secondo segnala impianto non funzionante con prudenza, non arresto.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-07',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto la pioggia, a 50 km/h, se il giallo si accende a pochi metri dalla linea di arresto, il conducente può proseguire perché una frenata brusca sul bagnato sarebbe pericolosa.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019eccezione "troppo vicino per arrestarsi in sicurezza" opera anche sul bagnato, dove lo spazio di frenata si allunga.',
    scenario_transfer: 'pioggia a 50 km/h',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-08',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In discesa ripida, quando scatta il giallo lontano dalla linea, il conducente deve comunque arrestarsi.',
    risposta_corretta: true,
    spiegazione:
      'Se lo spazio per frenare in sicurezza c\u2019è, vige l\u2019obbligo di arresto, discesa o no.',
    scenario_transfer: 'discesa ripida',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-09',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Alla guida di un mezzo pesante con carico, davanti a un giallo appena scattato a distanza minima, proseguire è preferibile a una frenata che potrebbe ribaltare il carico.',
    risposta_corretta: true,
    spiegazione:
      'Stessa eccezione di sicurezza: se la frenata comprometterebbe il controllo, il giallo consente di proseguire.',
    scenario_transfer: 'mezzo pesante con carico',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C003-10',
    concetto_codice: 'ARG06-C003',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente a 60 km/h vede il giallo fisso a 5 metri dalla linea di arresto, non riesce a frenare in sicurezza e prosegue. La sua scelta rientra nell\u2019eccezione prevista dalla norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere l\u2019eccezione di sicurezza del giallo: proseguire quando l\u2019arresto non è possibile in sufficiente sicurezza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },

  // ========== ARG06-C004 — Semaforo verde ==========
  {
    codice: 'QUIZ-ARG06-C004-01',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con luce verde il conducente può procedere solo se l\u2019incrocio è libero e non ostacola pedoni in attraversamento.',
    risposta_corretta: true,
    spiegazione:
      'Il verde è autorizzazione condizionata: serve che l\u2019incrocio sia effettivamente transitabile.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-02',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il verde obbliga il conducente a partire immediatamente, senza valutare la situazione.',
    risposta_corretta: false,
    spiegazione:
      'Il verde non obbliga a partire: autorizza a farlo solo a condizioni sicure.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-03',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con verde, se un pedone sta completando l\u2019attraversamento, il conducente deve attendere che sia in sicurezza prima di ripartire.',
    risposta_corretta: true,
    spiegazione:
      'Il verde non toglie la precedenza ai pedoni che stanno ultimando l\u2019attraversamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-04',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il verde dà sempre la precedenza assoluta sul traffico trasversale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore universale): "sempre, assoluta". Il verde è condizionato a incrocio libero e pedoni al sicuro.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-05',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con luce verde è vietato non entrare nell\u2019incrocio quando questo è libero.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione): "vietato non entrare" = obbligo di entrare. Ma il verde autorizza, non obbliga.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-06',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con la luce verde il conducente è obbligato a impegnare l\u2019incrocio anche se questo è ingombro di veicoli.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (scambio obbligo/divieto): la norma è il contrario, è VIETATO impegnare l\u2019incrocio ingombro, anche col verde.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 e 145 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-07',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio congestionato con semaforo verde, se non c\u2019è spazio per uscire dall\u2019incrocio, il conducente deve attendere il verde successivo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: "no incrocio ingombro" vale anche col verde, in qualunque contesto.',
    scenario_transfer: 'incrocio congestionato ora di punta',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-08',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, al verde su strada deserta, il conducente può partire senza ulteriori controlli.',
    risposta_corretta: false,
    spiegazione:
      'Deve comunque verificare che l\u2019incrocio sia libero: pedone notturno o ciclista possibile.',
    scenario_transfer: 'notte strada deserta',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-09',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una svolta a sinistra con verde semaforico, la precedenza al senso opposto resta in vigore.',
    risposta_corretta: true,
    spiegazione:
      'Il verde non cancella l\u2019obbligo di dare la precedenza ai veicoli che procedono dritti in senso opposto.',
    scenario_transfer: 'svolta a sinistra al verde',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C004-10',
    concetto_codice: 'ARG06-C004',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'Al verde un conducente vede che l\u2019uscita dell\u2019incrocio è bloccata da una fila ferma; si astiene dall\u2019entrare e aspetta. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario mostra la natura condizionata del verde: senza spazio di deflusso, non si entra.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG06-C005 — Giallo lampeggiante ==========
  {
    codice: 'QUIZ-ARG06-C005-01',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con il giallo lampeggiante il conducente deve procedere con prudenza rispettando le regole di precedenza proprie dell\u2019incrocio.',
    risposta_corretta: true,
    spiegazione:
      'Il giallo lampeggiante significa impianto non operativo: la precedenza è regolata dai segnali verticali eventualmente presenti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-02',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il giallo lampeggiante equivale a un rosso: occorre fermarsi.',
    risposta_corretta: false,
    spiegazione:
      'Giallo lampeggiante = prudenza e precedenza dei segnali verticali. Non è un arresto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-03',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Davanti a giallo lampeggiante non si applicano le regole di precedenza ordinarie.',
    risposta_corretta: false,
    spiegazione:
      'Vale il contrario: si applicano i segnali verticali e la precedenza a destra in assenza di segnali.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-04',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al giallo lampeggiante il conducente ha la precedenza sui veicoli provenienti dalla destra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): il giallo lampeggiante non dà precedenza; vige la regola della destra o il segnale verticale.',
    pattern_trappola: 'P06',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-05',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con giallo lampeggiante il conducente può procedere liberamente senza curarsi dei segnali verticali.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" su un punto di sicurezza è red flag. I segnali verticali riprendono vigore.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-06',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il giallo lampeggiante del semaforo veicolare equivale al rosso lampeggiante del passaggio a livello.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): giallo lampeggiante = prudenza; rosso lampeggiante a PL = arresto obbligatorio.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-07',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, a un incrocio con solo giallo lampeggiante e nessun segnale verticale, si applica la precedenza a destra.',
    risposta_corretta: true,
    spiegazione:
      'Impianto disattivato + nessun segnale = regola generale della precedenza a destra.',
    scenario_transfer: 'notte incrocio disattivato',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-08',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A un giallo lampeggiante con un segnale di STOP presente sul proprio ramo, il conducente deve arrestarsi.',
    risposta_corretta: true,
    spiegazione:
      'Il segnale verticale (STOP) riprende vigore quando l\u2019impianto lampeggia giallo.',
    scenario_transfer: 'STOP + giallo lampeggiante',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-09',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A un incrocio con giallo lampeggiante e segnale di "dare precedenza" sul proprio ramo, il conducente può proseguire senza cedere il passo.',
    risposta_corretta: false,
    spiegazione:
      'Deve cedere il passo: il "dare precedenza" è attivo, il lampeggio rimette in gioco i segnali verticali.',
    scenario_transfer: '"dare precedenza" + giallo lampeggiante',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C005-10',
    concetto_codice: 'ARG06-C005',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'A un incrocio con semaforo lampeggiante giallo e nessun cartello, un conducente rallenta, si guarda a destra, dà la precedenza a chi viene da quella direzione e poi prosegue. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: giallo lampeggiante = prudenza + regole ordinarie di precedenza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },

  // ========== ARG06-C006 — Frecce direzionali ==========
  {
    codice: 'QUIZ-ARG06-C006-01',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una freccia verde a sinistra consente di svoltare a sinistra anche se la luce rossa circolare del medesimo semaforo è accesa.',
    risposta_corretta: true,
    spiegazione:
      'La freccia verde autorizza la sola direzione indicata, prevalendo sulla luce circolare per quella manovra.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-02',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La freccia rossa vieta di proseguire nella direzione indicata, anche con le altre luci verdi.',
    risposta_corretta: true,
    spiegazione:
      'La freccia rossa è un divieto direzionale specifico, opera anche in presenza di verde circolare.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-03',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una freccia verde a destra consente anche di proseguire dritto.',
    risposta_corretta: false,
    spiegazione:
      'La freccia autorizza una sola direzione: quella indicata dalla freccia stessa.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-04',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Se la freccia verde a sinistra è accesa, il conducente può svoltare in ogni direzione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore): "in ogni direzione" è falso. La freccia autorizza SOLO la sua direzione.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-05',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'La freccia verde a destra del semaforo veicolare ha lo stesso significato del triangolo "dare precedenza".',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): semaforo e segnale verticale appartengono a livelli diversi. La freccia verde autorizza; il triangolo impone cedere il passo.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-06',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con la freccia rossa a sinistra accesa il conducente deve svoltare a sinistra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): la freccia rossa VIETA quella direzione, non la impone.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-07',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una svolta con corsia dedicata e freccia verde a sinistra, il conducente che svolta deve comunque dare la precedenza ai pedoni sulle strisce del ramo di destinazione.',
    risposta_corretta: true,
    spiegazione:
      'La freccia verde autorizza la direzione ma non cancella l\u2019obbligo verso i pedoni.',
    scenario_transfer: 'svolta con corsia dedicata',
    livello_difficolta: 4,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-08',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A un incrocio semaforico con verde circolare e freccia rossa a destra, il conducente che vuole svoltare a destra deve fermarsi.',
    risposta_corretta: true,
    spiegazione:
      'Il verde circolare autorizza dritto/sinistra; la freccia rossa vieta specificamente la destra.',
    scenario_transfer: 'verde circolare + freccia rossa',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-09',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Nelle intersezioni a T, la freccia verde nell\u2019unica direzione consentita autorizza comunque a svoltare nel senso opposto.',
    risposta_corretta: false,
    spiegazione:
      'La freccia autorizza ESCLUSIVAMENTE la direzione indicata dalla freccia stessa.',
    scenario_transfer: 'intersezione a T',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C006-10',
    concetto_codice: 'ARG06-C006',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'A un incrocio un conducente vede rosso circolare e freccia verde a destra. Svolta a destra. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: la freccia verde autorizza la propria direzione anche con rosso circolare.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },

  // ========== ARG06-C007 — Semaforo pedonale ==========
  {
    codice: 'QUIZ-ARG06-C007-01',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le luci del semaforo pedonale (omino rosso/verde) regolano esclusivamente il pedone, non i veicoli.',
    risposta_corretta: true,
    spiegazione:
      'I veicoli restano regolati dal proprio semaforo veicolare.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-02',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con omino rosso il pedone deve rimanere sul marciapiede.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019omino rosso è divieto di attraversamento pedonale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-03',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il semaforo pedonale sostituisce il semaforo veicolare per i conducenti.',
    risposta_corretta: false,
    spiegazione:
      'Non lo sostituisce: conducenti e pedoni hanno ciascuno il proprio semaforo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-04',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Quando il semaforo pedonale è verde, il conducente ha la precedenza sui pedoni che attraversano.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): col verde pedonale il pedone ha la priorità; il conducente DEVE dare la precedenza.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-05',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019omino verde del semaforo pedonale ha lo stesso valore del verde del semaforo veicolare.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): pedonale e veicolare regolano utenze distinte.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-06',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pedone può sempre attraversare quando il semaforo veicolare è rosso, anche senza l\u2019omino verde.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore): "sempre". Se esiste un semaforo pedonale, deve attendere l\u2019omino verde.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-07',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una svolta a destra col verde veicolare, se l\u2019omino pedonale sul ramo di destinazione è verde, il conducente deve arrestarsi e dare la precedenza ai pedoni.',
    risposta_corretta: true,
    spiegazione:
      'Il verde veicolare non cancella la priorità dei pedoni nel ramo di destinazione.',
    scenario_transfer: 'svolta a destra + omino verde',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-08',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, davanti a un semaforo pedonale con omino rosso, il conducente non deve verificare la presenza di pedoni.',
    risposta_corretta: false,
    spiegazione:
      'Deve sempre verificare pedoni imprudenti che attraversano col rosso; l\u2019omino rosso non garantisce assenza di pedoni.',
    scenario_transfer: 'notte e pedoni indisciplinati',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-09',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un attraversamento protetto da semaforo pedonale guasto, il conducente deve comportarsi come se fosse un normale attraversamento pedonale.',
    risposta_corretta: true,
    spiegazione:
      'Se il semaforo è spento/guasto, tornano in vigore le regole generali sui pedoni.',
    scenario_transfer: 'semaforo pedonale guasto',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C007-10',
    concetto_codice: 'ARG06-C007',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pedone attende sul marciapiede davanti all\u2019omino rosso anche se i veicoli sono fermi al loro semaforo rosso. Si comporta correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario mostra l\u2019indipendenza tra i due semafori: il pedone segue il pedonale, non l\u2019assenza di traffico.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 41 CdS',
  },

  // ========== ARG06-C008 — Semaforo tranviario a barre ==========
  {
    codice: 'QUIZ-ARG06-C008-01',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le barre luminose bianche del semaforo tranviario riguardano solo i tram e i veicoli su rotaia.',
    risposta_corretta: true,
    spiegazione:
      'Sono segnali riservati ai mezzi su rotaia; gli altri conducenti seguono il proprio semaforo ordinario.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-02',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un\u2019auto davanti a un semaforo con barre luminose bianche deve seguire quelle indicazioni come se fossero rosso/verde.',
    risposta_corretta: false,
    spiegazione:
      'Le barre bianche non valgono per le auto: il conducente di un\u2019auto segue il proprio semaforo veicolare.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-03',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una barra bianca verticale del semaforo tranviario autorizza il tram a proseguire dritto.',
    risposta_corretta: true,
    spiegazione:
      'Le barre bianche indicano al tram la direzione consentita (verticale = dritto).',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-04',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le barre luminose bianche del semaforo tranviario valgono anche per i veicoli ordinari.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): tranviario ≠ veicolare. Sono categorie diverse di destinatari.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-05',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il semaforo a barre bianche regola in ogni caso tutti gli utenti della strada.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore): "in ogni caso tutti". Regola solo i mezzi su rotaia.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-06',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il semaforo con barre bianche si applica sia ai veicoli circolanti su rotaia sia a quelli circolanti su sede tranviaria.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 (verità parziale fuori contesto): è vero che i tram hanno propri segnali, ma "sede tranviaria" non significa "semaforo tranviario"; quest\u2019ultimo è riservato ai mezzi su rotaia.',
    pattern_trappola: 'P18',
    livello_difficolta: 5,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-07',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente di scooter, vedendo un semaforo con barre bianche in alto a una corsia tranviaria, deve considerarlo irrilevante per sé.',
    risposta_corretta: true,
    spiegazione:
      'Lo scooter non è un veicolo su rotaia: segue il proprio semaforo.',
    scenario_transfer: 'scooter e semaforo tranviario',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-08',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio dove tram e auto convivono, l\u2019auto può ignorare le barre bianche ma deve comunque dare la precedenza ai tram secondo le regole ordinarie.',
    risposta_corretta: true,
    spiegazione:
      'Il semaforo tranviario non interessa l\u2019auto, ma l\u2019art. 145 sulla precedenza ai tram sì.',
    scenario_transfer: 'convivenza tram-auto',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-09',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, quando il semaforo ordinario è spento e resta acceso solo quello a barre bianche, un\u2019auto non è obbligata a fermarsi a quest\u2019ultimo.',
    risposta_corretta: true,
    spiegazione:
      'Le barre bianche non sono mai rivolte alle auto: solo ai mezzi su rotaia.',
    scenario_transfer: 'notte con semaforo ordinario spento',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C008-10',
    concetto_codice: 'ARG06-C008',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente in auto vede un semaforo a barre bianche orizzontali. Ritenendo che non lo riguardi, continua a seguire il proprio semaforo circolare verde. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: barre bianche = solo mezzi su rotaia.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 41 CdS',
  },

  // ========== ARG06-C009 — Segnali manuali dell'agente ==========
  {
    codice: 'QUIZ-ARG06-C009-01',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019agente con braccio alzato verticalmente equivale a un semaforo giallo: sgombrare l\u2019incrocio.',
    risposta_corretta: true,
    spiegazione:
      'Braccio alzato = giallo: chi ha iniziato la manovra la completa, chi non l\u2019ha iniziata si ferma.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-02',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le braccia tese orizzontali dell\u2019agente equivalgono al rosso per chi si trova di fronte all\u2019agente o alle sue spalle.',
    risposta_corretta: true,
    spiegazione:
      'Di fronte/alle spalle = rosso; lateralmente = verde.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-03',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con braccia tese orizzontali, chi ha l\u2019agente di lato deve fermarsi.',
    risposta_corretta: false,
    spiegazione:
      'Di lato = verde: può procedere. Rosso solo per chi è di fronte/alle spalle.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-04',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che ha l\u2019agente di fronte, a braccia orizzontali, può proseguire lentamente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): non "può proseguire", DEVE fermarsi (rosso).',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-05',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Davanti all\u2019agente con braccio alzato, è obbligatorio attraversare immediatamente l\u2019incrocio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): non è obbligatorio attraversare; chi non ha iniziato DEVE fermarsi.',
    pattern_trappola: 'P03',
    livello_difficolta: 4,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-06',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019agente del traffico vale come il vigile urbano: i due termini sono equivalenti in ogni contesto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): "agente del traffico" è la categoria ampia (polizia, vigili, CC), mentre "vigile urbano" è una sottocategoria; la sovrapposizione non è totale.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-07',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante una manifestazione sportiva con chiusura stradale, gli agenti usano gli stessi segnali manuali codificati del traffico ordinario.',
    risposta_corretta: true,
    spiegazione:
      'I segnali dell\u2019art. 43 valgono in ogni contesto di regolazione manuale del traffico.',
    scenario_transfer: 'manifestazione sportiva',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-08',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In presenza di un agente che agita la paletta frontalmente, il conducente in arrivo frontale deve fermarsi.',
    risposta_corretta: true,
    spiegazione:
      'Paletta frontale = ordine di arresto per chi la riceve.',
    scenario_transfer: 'paletta frontale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-09',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un agente che tende le braccia orizzontalmente autorizza il traffico che proviene sia frontalmente sia alle sue spalle.',
    risposta_corretta: false,
    spiegazione:
      'Di fronte/alle spalle = rosso; solo chi è di lato può procedere.',
    scenario_transfer: 'incrocio con agente',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C009-10',
    concetto_codice: 'ARG06-C009',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'In un incrocio con semaforo guasto, un agente alza un braccio verticalmente mentre un conducente è già a metà svolta. Quel conducente completa la manovra con prudenza: ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Braccio alzato = giallo: chi ha già impegnato l\u2019incrocio lo sgombera.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },

  // ========== ARG06-C010 — Ordini dell'agente prevalgono ==========
  {
    codice: 'QUIZ-ARG06-C010-01',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli ordini dell\u2019agente del traffico prevalgono sulle luci del semaforo e sui segnali verticali.',
    risposta_corretta: true,
    spiegazione:
      'Art. 43: l\u2019agente è al vertice della gerarchia dei segnali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-02',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se l\u2019agente è in contrasto con un segnale di STOP, il conducente deve dare retta al segnale.',
    risposta_corretta: false,
    spiegazione:
      'L\u2019agente prevale su qualunque segnale, incluso lo STOP.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-03',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di obbedire all\u2019agente vale anche se il suo ordine appare in contrasto con le luci semaforiche.',
    risposta_corretta: true,
    spiegazione:
      'È proprio il caso tipico in cui la prevalenza dell\u2019agente fa la differenza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-04',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente deve in ogni caso seguire i segnali stradali verticali, salvo diverse luci semaforiche.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione nascosta): manca l\u2019eccezione dell\u2019agente, che prevale su entrambi.',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-05',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può scegliere se obbedire all\u2019agente o al semaforo quando sono in contrasto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): "può scegliere" = libertà apparente. DEVE obbedire all\u2019agente.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-06',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato seguire l\u2019ordine dell\u2019agente se contraddice il semaforo rosso.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): è OBBLIGATORIO seguire l\u2019agente, non vietato.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-07',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante un incidente, se un carabiniere ordina di invertire la marcia in un tratto normalmente senza tale possibilità, il conducente deve obbedire.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019agente prevale anche sulle regole generali sul senso di marcia.',
    scenario_transfer: 'incidente e inversione forzata',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-08',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere autostradale, se un agente della polizia stradale indica di passare sulla corsia opposta, il conducente è tenuto a obbedire.',
    risposta_corretta: true,
    spiegazione:
      'In autostrada, come ovunque, l\u2019agente prevale sui segnali di cantiere.',
    scenario_transfer: 'cantiere autostradale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-09',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un agente in servizio può imporre al conducente di ignorare un divieto di svolta indicato dalla segnaletica verticale.',
    risposta_corretta: true,
    spiegazione:
      'Stesso principio: l\u2019agente prevale sulla segnaletica fissa.',
    scenario_transfer: 'divieto di svolta vs agente',
    livello_difficolta: 3,
    articolo_cds: 'Art. 43 CdS',
  },
  {
    codice: 'QUIZ-ARG06-C010-10',
    concetto_codice: 'ARG06-C010',
    argomento_numero: 6,
    fase_rotta: 'origina',
    testo_domanda:
      'A un semaforo verde un vigile fischia e alza la mano verso un conducente per fermarlo. Il conducente si ferma. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: l\u2019agente prevale sul semaforo, verde incluso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 43 CdS',
  },
] as const
