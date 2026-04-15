import type { QuizItem } from '../_types'

// Argomento 11 — Norme sul sorpasso
// 11 concetti × 10 item = 110 item V/F
// Pattern trappola dominanti: P05 (che precede/che segue), P06 (ha/deve dare),
// P10 (ambito silenzioso), P13 (coppie quasi-sinonime), P18 (verità parziale).
// Base normativa: CdS art. 148, 149, 191; L. 177/2024 (1,5 m ciclisti).

export const ARG11_QUIZ: readonly QuizItem[] = [
  // =====================================================================
  // ARG11-C001 — Definizione di sorpasso
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C001-01',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso è la manovra con cui un veicolo supera un altro veicolo o animale in movimento che precede sulla stessa carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Definizione base dell\u2019art. 148 CdS: il sorpasso presuppone che il veicolo sorpassato sia in movimento sulla stessa carreggiata.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-02',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le fasi del sorpasso sono tre: spostamento sulla sinistra, affiancamento e rientro nella corsia di marcia.',
    risposta_corretta: true,
    spiegazione:
      'Le tre fasi sono proprio spostamento-affiancamento-rientro; ogni fase richiede al conducente valutazioni autonome di sicurezza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-03',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso si esegue di norma sulla sinistra del veicolo che si intende superare.',
    risposta_corretta: true,
    spiegazione:
      'Regola generale: la sinistra è la regola, la destra è l\u2019eccezione (art. 148 co. 1).',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-04',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso è la manovra con cui il veicolo che segue supera un altro veicolo fermo sulla carreggiata.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale fuori contesto): superare un veicolo fermo non è tecnicamente "sorpasso" ai sensi dell\u2019art. 148. La definizione richiede veicolo in movimento; il superamento di un veicolo fermo rientra invece nella nozione di "superamento di ostacolo".',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-05',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Durante il sorpasso il veicolo che precede deve portarsi sulla sinistra e poi rientrare nella propria corsia.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P05 (inversione "che precede" / "che segue"): a spostarsi sulla sinistra è il veicolo CHE SEGUE (sorpassante), non quello che precede. Mnemonic: "segue = supera".',
    pattern_trappola: 'P05',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-06',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso è sempre la manovra di spostamento sulla corsia adiacente, indipendentemente dal fatto che l\u2019altro veicolo sia in marcia o in sosta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore universale "sempre"): l\u2019art. 148 definisce il sorpasso solo rispetto a veicolo o animale IN MOVIMENTO. Il superamento di veicoli in sosta segue regole diverse.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-07',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un ciclista che supera un altro ciclista più lento sulla stessa pista ciclabile sta eseguendo una manovra di sorpasso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la definizione di sorpasso si applica a tutti i veicoli. La bicicletta è un velocipede e quindi un veicolo ai sensi del CdS.',
    scenario_transfer:
      'Pista ciclabile: due ciclisti, uno supera l\u2019altro.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-08',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Superare un cavallo condotto a briglia sulla carreggiata costituisce una manovra di sorpasso soggetta alle regole dell\u2019art. 148.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019art. 148 include esplicitamente il superamento di "animale in movimento" tra le manovre di sorpasso.',
    scenario_transfer:
      'Strada extraurbana secondaria con cavallo condotto.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-09',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada a senso unico con due corsie, spostarsi dalla corsia di destra a quella di sinistra per superare un veicolo più lento è una manovra di sorpasso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la definizione si applica anche sulle strade a senso unico; le fasi sono spostamento-affiancamento-rientro.',
    scenario_transfer:
      'Viale urbano a senso unico con due corsie per lo stesso senso di marcia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C001-10',
    concetto_codice: 'ARG11-C001',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente che cambia corsia per svoltare a sinistra, senza superare alcun veicolo, sta effettuando una manovra di sorpasso.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il cambio corsia senza il fine di superare un veicolo in movimento non è sorpasso; è una normale manovra di svolta/cambio di corsia regolata da altri articoli.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 CdS',
  },

  // =====================================================================
  // ARG11-C002 — Verifiche preliminari al sorpasso
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C002-01',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Prima di sorpassare il conducente deve accertarsi di poter effettuare la manovra senza creare pericolo o intralcio.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 2: la responsabilità della verifica delle condizioni ricade interamente sul sorpassante.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-02',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Tra le verifiche preliminari c\u2019è la visibilità disponibile sulla strada davanti a sé.',
    risposta_corretta: true,
    spiegazione:
      'Senza visibilità sufficiente il sorpasso va rinviato; è il parametro primario.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-03',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La responsabilità della sicurezza dell\u2019intera manovra di sorpasso ricade sul conducente che sorpassa.',
    risposta_corretta: true,
    spiegazione:
      'Regola cardine: chi sorpassa risponde dell\u2019esito della manovra. Il sorpassato ha obblighi di agevolazione, non di sicurezza della manovra altrui.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-04',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Prima di sorpassare il conducente può accertarsi che la strada sia libera, se lo ritiene opportuno.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può" vs "deve"): la norma dice "DEVE accertarsi", non "può". Lessico permissivo su sicurezza = red flag (spia F01).',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-05',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che sorpassa è liberamente responsabile di scegliere se verificare o no la distanza dai veicoli in senso opposto.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): nessuna "libertà" sulla verifica della distanza dai veicoli che sopraggiungono; è una verifica obbligatoria.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-06',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'La responsabilità della sicurezza della manovra di sorpasso ricade sul conducente che viene sorpassato, che ha l\u2019obbligo di agevolare il rientro.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): è vero che il sorpassato deve agevolare (art. 149), ma la responsabilità della SICUREZZA della manovra resta al sorpassante.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-07',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana secondaria a doppio senso, se non riesco a vedere oltre il veicolo che precede, devo rinunciare al sorpasso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: quando manca la visibilità oltre il sorpassando, la manovra va rinviata. Un mezzo pesante davanti è il caso tipico.',
    scenario_transfer:
      'Strada extraurbana secondaria dietro un camion.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-08',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada a tre corsie, se un veicolo più veloce sopraggiunge sulla corsia di sinistra, devo rinviare il mio spostamento per sorpassare.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la verifica dei veicoli che sopraggiungono da dietro vale anche in autostrada; il sorpassante risponde della propria manovra.',
    scenario_transfer:
      'Autostrada A1 a tre corsie, traffico scorrevole.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-09',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se sto per sorpassare ma il veicolo davanti inizia ad accelerare, devo rinunciare e rientrare in corsia.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il peggioramento delle condizioni durante la preparazione impone di rinunciare — la valutazione è continua, non una volta sola.',
    scenario_transfer:
      'Sorpasso iniziato ma sorpassando che accelera.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C002-10',
    concetto_codice: 'ARG11-C002',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Se il passeggero mi assicura che la strada è libera, posso sorpassare fidandomi della sua verifica.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la responsabilità è personale e non delegabile al passeggero; il conducente DEVE accertarsi lui stesso.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 2 CdS',
  },

  // =====================================================================
  // ARG11-C003 — Segnalazione della manovra
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C003-01',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi sorpassa deve azionare l\u2019indicatore di direzione sinistro prima di spostarsi sulla corsia di sinistra.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 3: segnalazione obbligatoria dell\u2019inizio della manovra con freccia sinistra.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-02',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Prima di rientrare nella corsia di marcia dopo un sorpasso va azionato l\u2019indicatore di direzione destro.',
    risposta_corretta: true,
    spiegazione:
      'La fine della manovra va segnalata con la freccia destra, in modo tempestivo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-03',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Di notte, fuori dai centri abitati, è consentito usare brevi lampeggi di fari per avvisare il conducente che precede dell\u2019intenzione di sorpassarlo.',
    risposta_corretta: true,
    spiegazione:
      'Eccezione notturna extraurbana: brevi lampeggi consentiti come segnalazione preventiva.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-04',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Chi sorpassa ha l\u2019obbligo di azionare l\u2019indicatore di direzione destro prima di spostarsi e quello sinistro prima di rientrare.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (termini quasi-equivalenti scambiati): gli indicatori sono invertiti. Sinistro per uscire, destro per rientrare. Mnemonic: "la freccia punta dove vai".',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-05',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nei centri abitati, di notte, è consentito usare brevi lampeggi per annunciare il sorpasso al veicolo che precede.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso): l\u2019eccezione dei lampeggi vale solo FUORI dai centri abitati. In città va usato solo l\u2019indicatore di direzione.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-06',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Chi sorpassa può azionare l\u2019indicatore di direzione sinistro, se lo ritiene utile alla manovra.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può" vs "deve"): l\u2019art. 148 co. 3 usa "deve", non "può". La segnalazione è obbligatoria.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-07',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada a doppio senso, quando sorpasso un ciclista devo comunque azionare l\u2019indicatore di direzione sinistro prima di spostarmi.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la segnalazione vale per qualsiasi sorpasso, anche di velocipedi.',
    scenario_transfer:
      'Strada urbana a doppio senso, ciclista sulla destra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-08',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, prima di rientrare nella corsia di marcia dopo aver sorpassato, devo azionare l\u2019indicatore di direzione destro.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: nessuna differenza tra strade urbane e autostrade sull\u2019obbligo di segnalazione.',
    scenario_transfer:
      'Autostrada, rientro dalla corsia di sorpasso.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-09',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se guido di notte su una statale extraurbana dietro un trattore agricolo lento, posso dare brevi lampeggi prima di sorpassarlo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: notte + extraurbano = eccezione dei lampeggi applicabile anche al sorpasso di un trattore.',
    scenario_transfer:
      'Strada statale notturna con trattore davanti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C003-10',
    concetto_codice: 'ARG11-C003',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il sorpasso può essere segnalato esclusivamente con il clacson, senza uso degli indicatori di direzione.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il clacson non sostituisce gli indicatori. L\u2019art. 148 prevede esplicitamente l\u2019uso della freccia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 3 CdS',
  },

  // =====================================================================
  // ARG11-C004 — Distanza laterale di sicurezza
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C004-01',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante l\u2019affiancamento il sorpassante deve mantenere una distanza laterale adeguata rispetto al veicolo sorpassato.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 4: principio generale di distanza laterale proporzionata.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-02',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La distanza laterale di sicurezza durante il sorpasso dipende dalla velocità della manovra e dalle dimensioni dei mezzi coinvolti.',
    risposta_corretta: true,
    spiegazione:
      'Fattori: velocità relativa, larghezza dei veicoli, condizioni strada/meteo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-03',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante il sorpasso di un autocarro occorre una distanza laterale maggiore rispetto al sorpasso di un\u2019autovettura.',
    risposta_corretta: true,
    spiegazione:
      'Gli autocarri generano turbolenze aerodinamiche più forti e hanno dimensioni maggiori: la distanza va aumentata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-04',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente sorpassato deve mantenere una distanza laterale adeguata dal veicolo che sta sorpassando.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P05 ("che precede" / "che segue"): l\u2019obbligo della distanza laterale è del sorpassante, non del sorpassato. Quest\u2019ultimo ha l\u2019obbligo opposto: mantenersi a destra e agevolare.',
    pattern_trappola: 'P05',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-05',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'La distanza laterale durante un sorpasso può essere scelta liberamente dal conducente in base alla propria sensibilità.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): nessuna discrezionalità soggettiva; la distanza deve essere "adeguata" secondo criteri oggettivi (velocità, dimensioni, strada).',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-06',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'La distanza laterale durante il sorpasso deve essere adeguata, in ogni caso non inferiore a 50 centimetri tra autovetture.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti): l\u2019art. 148 co. 4 NON fissa un valore numerico minimo per il sorpasso tra auto; parla di distanza "adeguata". Il valore di 1,5 m è specifico per velocipedi/ciclomotori (co. 9-bis).',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-07',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In caso di vento laterale forte devo aumentare la distanza laterale durante un sorpasso rispetto alle condizioni normali.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: vento forte = maggior rischio di sbandamento laterale del sorpassato → distanza maggiore.',
    scenario_transfer:
      'Viadotto autostradale con vento laterale forte.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-08',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Quando sorpasso un motociclista a velocità elevata devo mantenere una distanza laterale maggiore rispetto a un\u2019auto, per evitare che la turbolenza d\u2019aria ne comprometta la stabilità.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: utente vulnerabile a due ruote + turbolenza = distanza maggiore.',
    scenario_transfer:
      'Strada extraurbana, sorpasso di motociclista a 100 km/h.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-09',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se la carreggiata è molto stretta e non posso garantire una distanza laterale adeguata, devo rinunciare al sorpasso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: lo spazio insufficiente obbliga al rinvio, anche se la visibilità sarebbe teoricamente sufficiente.',
    scenario_transfer:
      'Strada di montagna stretta a doppio senso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C004-10',
    concetto_codice: 'ARG11-C004',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'È sufficiente non toccare fisicamente il veicolo sorpassato per considerare rispettata la distanza laterale di sicurezza.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la distanza va mantenuta tale da prevenire collisioni in caso di piccoli sbandamenti, non solo ad evitare il contatto immediato.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 4 CdS',
  },

  // =====================================================================
  // ARG11-C005 — Sorpasso ciclisti: 1,5 m minimo
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C005-01',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nel sorpassare un ciclista il conducente deve mantenere una distanza laterale non inferiore a 1,5 metri.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 9-bis (L. 177/2024, in vigore dal 14/12/2024): distanza minima 1,5 m.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-02',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La distanza minima di 1,5 m per il sorpasso di un ciclista vale su tutte le strade, urbane ed extraurbane.',
    risposta_corretta: true,
    spiegazione:
      'Nessuna limitazione territoriale: la regola si applica ovunque circolino velocipedi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-03',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se non è possibile mantenere 1,5 m laterali durante il sorpasso di un ciclista, la manovra va rinviata.',
    risposta_corretta: true,
    spiegazione:
      'Spazio insufficiente = rinvio obbligatorio. Non c\u2019è tolleranza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-04',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nel sorpassare un ciclista il conducente deve mantenere una distanza laterale non inferiore a 1 metro.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti): la distanza corretta è 1,5 m, non 1 m. Mnemonic: "un metro e mezzo come un ciclista sdraiato".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-05',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può mantenere una distanza laterale inferiore a 1,5 m dal ciclista, purché proceda a velocità ridotta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può"): la norma usa "deve" e non ammette la riduzione di velocità come compensazione del limite spaziale.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-06',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di 1,5 m laterali per il sorpasso di un ciclista vale unicamente fuori dai centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): l\u2019obbligo vale ovunque, centro abitato incluso. "Unicamente" è una classica spia di falso.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-07',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Anche per sorpassare un ciclomotore devo mantenere una distanza laterale di almeno 1,5 m.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019art. 148 co. 9-bis estende la regola a velocipedi, ciclomotori e veicoli analoghi.',
    scenario_transfer:
      'Strada urbana con ciclomotore davanti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-08',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana secondaria a una sola corsia per senso, se incontro un gruppo di ciclisti in fila indiana e non riesco a garantire 1,5 m devo rinunciare al sorpasso anche se nulla sopraggiunge in senso opposto.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019assenza di traffico contrario non compensa la mancanza di spazio laterale.',
    scenario_transfer:
      'Extraurbana secondaria, gruppo ciclisti in fila indiana.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-09',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Per sorpassare un ciclista in sicurezza posso sconfinare parzialmente nella corsia opposta se la strada è libera e rispetto così i 1,5 m.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: è una soluzione comune e corretta. La linea di mezzeria può essere attraversata se consentito e se la visibilità è piena.',
    scenario_transfer:
      'Extraurbana con striscia discontinua e visibilità piena.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },
  {
    codice: 'QUIZ-ARG11-C005-10',
    concetto_codice: 'ARG11-C005',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il limite di 1,5 m per il sorpasso dei ciclisti è una raccomandazione ministeriale ma non costituisce un obbligo giuridico.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: è un vero obbligo sanzionato, introdotto dalla L. 177/2024 nell\u2019art. 148 CdS.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 9-bis CdS',
  },

  // =====================================================================
  // ARG11-C006 — Divieto di ostacolare chi viene sorpassato
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C006-01',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente che viene sorpassato deve agevolare la manovra di chi lo sorpassa.',
    risposta_corretta: true,
    spiegazione:
      'Art. 149: obbligo di agevolazione. Tenersi a destra, non aumentare la velocità.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-02',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpassato non deve aumentare la velocità mentre viene superato.',
    risposta_corretta: true,
    spiegazione:
      'Accelerare durante il sorpasso altrui è espressamente vietato: mette in pericolo entrambi.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-03',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpassato deve tenersi il più possibile vicino al margine destro della carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Tenersi a destra fa parte degli obblighi di agevolazione dell\u2019art. 149.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-04',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che viene sorpassato può aumentare la velocità, se lo ritiene utile.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può" vs "deve"): non "può" aumentare — ha il divieto di farlo. L\u2019art. 149 impone di NON aumentare la velocità.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-05',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Chi sorpassa deve tenersi il più possibile vicino al margine destro per agevolare il veicolo che viene sorpassato.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P05 ("che precede" / "che segue"): invertiti i ruoli. A tenersi a destra è il SORPASSATO, non il sorpassante.',
    pattern_trappola: 'P05',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-06',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Se sopraggiungono veicoli dal senso opposto il sorpassato è obbligato ad accelerare per far concludere prima la manovra.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale + inversione logica): è vero che deve aiutare il rientro, ma la modalità corretta è RALLENTARE — non accelerare — per consentire al sorpassante di rientrare.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-07',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un\u2019auto più veloce mi sta sorpassando in extraurbana e vedo un veicolo che sopraggiunge in senso opposto, devo rallentare per consentirle di rientrare prima.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: rallentare è proprio l\u2019obbligo dell\u2019art. 149 quando il rientro diventa urgente.',
    scenario_transfer:
      'Extraurbana con auto che sta sorpassando e veicolo che sopraggiunge.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-08',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se sto guidando un camion e un\u2019auto mi supera, devo tenermi a destra per lasciarle spazio sufficiente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il dovere del sorpassato vale per qualsiasi veicolo, compresi i mezzi pesanti.',
    scenario_transfer:
      'Camion in extraurbana sorpassato da autovettura.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-09',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Mentre vengo sorpassato in autostrada, non devo stringermi verso la corsia di sorpasso né aumentare il ritmo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: gli obblighi di agevolazione si applicano identici in autostrada.',
    scenario_transfer:
      'Autostrada, auto sorpassata in corsia di marcia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C006-10',
    concetto_codice: 'ARG11-C006',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il sorpassato, avendo la precedenza sulla propria corsia, non è tenuto a collaborare con chi lo sorpassa.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019art. 149 impone espressamente la collaborazione. La "precedenza sulla corsia" non esenta dagli obblighi di agevolazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },

  // =====================================================================
  // ARG11-C007 — Divieto di sorpasso per scarsa visibilità
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C007-01',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso è vietato nei tratti con visibilità ridotta come dossi e curve.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 7: dossi, curve, tratti a visibilità limitata = divieto.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-02',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di sorpasso su dossi e curve non si applica se la strada ha due o più corsie per senso di marcia delimitate da apposita segnaletica.',
    risposta_corretta: true,
    spiegazione:
      'Eccezione dell\u2019art. 148 co. 7: su strade pluricorsia per senso separate da segnaletica il divieto decade.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-03',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nelle gallerie prive di illuminazione il sorpasso va evitato per il rischio di scarsa visibilità.',
    risposta_corretta: true,
    spiegazione:
      'La galleria non illuminata è tipico tratto a visibilità limitata; si applica il divieto.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-04',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso è sempre consentito in corrispondenza di un dosso, purché il conducente acceleri abbastanza da ridurre il tempo di esposizione.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "sempre") + P12 (libertà apparente): sul dosso vale il divieto. L\u2019accelerazione non è una scappatoia.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-05',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso è consentito in prossimità delle curve, purché il conducente segnali con l\u2019indicatore di direzione.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): segnalare è sempre obbligatorio, ma non autorizza il sorpasso proibito. In curva il divieto resta.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-06',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sorpasso in prossimità delle curve si applica unicamente fuori dai centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): il divieto si applica ovunque, anche in città.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-07',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su autostrada a tre corsie per senso di marcia è ammesso sorpassare anche in curva, se la segnaletica lo permette.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: ricade nell\u2019eccezione delle strade pluricorsia per senso separate da segnaletica. Il limite di 1,5 m ai ciclisti e le altre regole restano.',
    scenario_transfer:
      'Autostrada a tre corsie in curva ampia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-08',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada di montagna a doppio senso, in salita verso un dosso, non posso sorpassare il veicolo davanti.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: dosso + doppio senso a corsia unica = divieto. Il rischio di trovare un veicolo in senso opposto è massimo.',
    scenario_transfer:
      'Strada di montagna a doppio senso in salita verso dosso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-09',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una galleria urbana illuminata a doppio senso non posso sorpassare perché lo spazio laterale è tipicamente insufficiente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: anche se illuminata, la galleria a doppio senso è comunque a visibilità limitata e spazi stretti; il sorpasso è vietato.',
    scenario_transfer:
      'Galleria urbana illuminata a doppio senso.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C007-10',
    concetto_codice: 'ARG11-C007',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il divieto di sorpasso per visibilità limitata si applica solo se esplicitamente segnalato da un cartello.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il divieto è intrinseco alle condizioni di visibilità; il cartello non è condizione di validità. Il conducente deve riconoscere da sé i tratti a visibilità ridotta.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 7 CdS',
  },

  // =====================================================================
  // ARG11-C008 — Divieto di sorpasso agli attraversamenti pedonali
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C008-01',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'È vietato sorpassare in corrispondenza degli attraversamenti pedonali.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 8: divieto sugli attraversamenti pedonali.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-02',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di sorpasso vale anche in prossimità degli attraversamenti pedonali, non solo in corrispondenza.',
    risposta_corretta: true,
    spiegazione:
      'La norma copre sia "in corrispondenza" sia "in prossimità" — una fascia ampia di tutela dei pedoni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-03',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di sorpasso sugli attraversamenti pedonali tutela la visibilità dei pedoni che potrebbero impegnare la carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Il rationale è la prevenzione dell\u2019investimento di pedoni nascosti dalla sagoma del veicolo sorpassato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-04',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sorpasso vale unicamente in corrispondenza degli attraversamenti pedonali, non nelle immediate vicinanze.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P14 ("in corrispondenza" vs "in prossimità"): il Codice vieta in ENTRAMBI i casi, non solo "in corrispondenza".',
    pattern_trappola: 'P14',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-05',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso può essere effettuato sugli attraversamenti pedonali se non si vedono pedoni nelle vicinanze.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può") + verità parziale P18: il divieto è incondizionato, non dipende dalla presenza visibile di pedoni.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-06',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato sorpassare in corrispondenza dei passaggi pedonali, dove il termine "passaggio" ha lo stesso significato di "attraversamento" del Codice.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime): il Codice parla di "attraversamento pedonale", non di "passaggio". Anche se il senso pratico è simile, nel linguaggio ministeriale i termini non si sovrappongono perfettamente — il quiz è formulato in modo impreciso.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-07',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un viale urbano con attraversamento pedonale rialzato non posso superare il veicolo che mi precede anche se procede lentamente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il divieto si applica indipendentemente dalla velocità del sorpassando.',
    scenario_transfer:
      'Viale urbano con attraversamento pedonale rialzato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-08',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A 20 metri prima di un attraversamento pedonale, se il veicolo davanti rallenta, devo mantenermi dietro senza superare.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: "in prossimità" copre anche la fascia di alcune decine di metri precedenti le strisce.',
    scenario_transfer:
      'Strada urbana, avvicinamento a strisce pedonali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-09',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un attraversamento pedonale regolato da semaforo verde per i veicoli non autorizza comunque il sorpasso sulle strisce.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il semaforo verde non annulla il divieto di sorpasso — il pedone potrebbe comunque impegnare le strisce in ritardo.',
    scenario_transfer:
      'Incrocio urbano semaforizzato con strisce pedonali.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C008-10',
    concetto_codice: 'ARG11-C008',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il divieto di sorpasso alle strisce pedonali cade quando queste non sono visibili perché usurate.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019usura della segnaletica non incide sul divieto, che tutela i pedoni indipendentemente dalla manutenzione visiva.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },

  // =====================================================================
  // ARG11-C009 — Divieto di sorpasso a passaggi a livello e incroci
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C009-01',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso è vietato in prossimità o in corrispondenza degli incroci.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 8: divieto base agli incroci.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-02',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso è vietato ai passaggi a livello privi di barriere.',
    risposta_corretta: true,
    spiegazione:
      'Passaggio a livello non custodito = rischio alto, divieto assoluto.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-03',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Agli incroci il sorpasso può essere ammesso solo se il diritto di precedenza è regolato da segnaletica o da agente del traffico e la visibilità è piena.',
    risposta_corretta: true,
    spiegazione:
      'Eccezione stretta: segnale di precedenza esplicito + visibilità piena. Altrimenti vale il divieto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-04',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ai passaggi a livello con barriere chiuse il sorpasso è consentito, purché a velocità ridotta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P03 (obbligo↔divieto): il Codice VIETA il sorpasso ai passaggi a livello chiusi o in fase di chiusura, non lo consente.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-05',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso è vietato unicamente in corrispondenza degli incroci, mai in prossimità.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P14 ("in corrispondenza" ↔ "in prossimità") + F01 ("unicamente"): il divieto copre entrambe le locuzioni.',
    pattern_trappola: 'P14',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-06',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'A tutti gli incroci è sempre vietato sorpassare, senza eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "sempre"): l\u2019eccezione esiste (incroci con precedenza esplicita e piena visibilità).',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-07',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Al semaforo rosso spento lampeggiante in un incrocio a quattro vie non posso sorpassare il veicolo che mi precede.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il semaforo rosso spento lampeggiante indica obbligo di fermarsi; l\u2019incrocio resta incrocio e il divieto di sorpasso si applica.',
    scenario_transfer:
      'Incrocio con semaforo rosso lampeggiante.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-08',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In prossimità di un passaggio a livello con barriere in chiusura devo rinunciare al sorpasso anche se il veicolo davanti rallenta.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la chiusura in corso rende il contesto critico; divieto assoluto.',
    scenario_transfer:
      'Passaggio a livello con barriere che iniziano ad abbassarsi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-09',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada con diritto di precedenza chiaramente indicato da cartello e visibilità piena, posso superare un veicolo più lento anche avvicinandomi a un incrocio secondario.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: siamo esattamente nel caso di eccezione dell\u2019art. 148 co. 8.',
    scenario_transfer:
      'Strada principale con cartello "dare precedenza" sul ramo secondario e visibilità piena.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C009-10',
    concetto_codice: 'ARG11-C009',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il divieto di sorpasso agli incroci si applica solo agli autoveicoli, non a motocicli e ciclomotori.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la regola riguarda tutti i veicoli; non esiste corsia preferenziale per i motoveicoli.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 8 CdS',
  },

  // =====================================================================
  // ARG11-C010 — Sorpasso in colonna e veicoli fermi ad attraversamento
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C010-01',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se un veicolo è fermo per consentire l\u2019attraversamento dei pedoni, i veicoli che seguono non possono sorpassarlo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 191 co. 2: divieto di sorpasso per veicoli fermi/in rallentamento che agevolano pedoni.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-02',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto vale anche per chi si affianca al veicolo rallentato su una corsia adiacente.',
    risposta_corretta: true,
    spiegazione:
      'Art. 191 co. 2: ogni forma di superamento è vietata, non solo il sorpasso classico.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-03',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di sorpasso in colonna tutela i pedoni che attraversano nascosti dalla sagoma del veicolo fermo.',
    risposta_corretta: true,
    spiegazione:
      'Il pedone invisibile dietro al veicolo fermo è proprio il rischio che la norma intende prevenire.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-04',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Se il veicolo che precede si ferma per far attraversare un pedone, il conducente che segue può liberamente sorpassarlo se la corsia adiacente è libera.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): nessuna "libertà" — l\u2019art. 191 co. 2 vieta esattamente questa manovra.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-05',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il veicolo che segue può superare quello che precede fermatosi per i pedoni, purché segnali con la freccia.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può") + verità parziale: la segnalazione non sana una manovra vietata.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-06',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sorpasso del veicolo fermo per i pedoni vale sempre e solo nei centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso): il divieto vale ovunque ci siano attraversamenti pedonali, non solo in centro abitato.',
    pattern_trappola: 'P10',
    livello_difficolta: 4,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-07',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un viale urbano a due corsie per senso, se un\u2019auto nella corsia di destra si ferma per un pedone, io in corsia sinistra devo rallentare e fermarmi, non proseguire.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la regola copre esplicitamente il caso della corsia affiancata — rischio investimento da veicolo che "passa" sull\u2019altra corsia.',
    scenario_transfer:
      'Viale urbano a due corsie per senso, auto nella corsia destra ferma per pedone.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-08',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se l\u2019autobus davanti a me si ferma in corrispondenza delle strisce per far scendere passeggeri che poi attraversano, non devo sorpassarlo finché la scena non è chiara.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la ratio del divieto è la protezione del pedone invisibile; l\u2019autobus è il caso classico.',
    scenario_transfer:
      'Fermata autobus in corrispondenza di attraversamento pedonale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-09',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana, se il veicolo davanti rallenta perché un anziano sta attraversando senza strisce, non devo sorpassarlo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la regola tutela i pedoni anche fuori dalle strisce, se un veicolo si è già rallentato per loro.',
    scenario_transfer:
      'Extraurbana con pedone anziano che attraversa fuori dalle strisce.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C010-10',
    concetto_codice: 'ARG11-C010',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il divieto di sorpasso dei veicoli in rallentamento per i pedoni non si applica se il pedone ha già completato l\u2019attraversamento.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: in realtà il divieto dura finché non è sicuro riprendere la marcia normale; il "sembra finito" non basta (potrebbe esserci un altro pedone dietro).',
    livello_difficolta: 4,
    articolo_cds: 'Art. 191 co. 2 CdS',
  },

  // =====================================================================
  // ARG11-C011 — Sorpasso a destra: casi consentiti
  // =====================================================================
  {
    codice: 'QUIZ-ARG11-C011-01',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso a destra è consentito quando il conducente che precede ha segnalato l\u2019intenzione di svoltare a sinistra e si è portato verso il centro della carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Art. 148 co. 5: eccezione tipica di sorpasso a destra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-02',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sorpasso a destra è consentito nei confronti dei tram che circolano su sede propria al centro della carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Tram su sede propria = eccezione tassativa.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-03',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Sulle carreggiate a più corsie per senso di marcia, in caso di traffico rallentato e veicoli in colonna, è consentito il superamento sulla destra.',
    risposta_corretta: true,
    spiegazione:
      'Eccezione del traffico congestionato pluricorsia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-04',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso a destra è sempre consentito sulle strade con due corsie per senso di marcia.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "sempre") + P10 (ambito silenzioso): non "sempre"; solo in caso di traffico rallentato in colonna, o negli altri casi tassativi.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-05',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Posso sorpassare a destra un\u2019auto che ha segnalato l\u2019intenzione di svoltare a destra e si è portata verso il margine destro.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie invertite): l\u2019eccezione vale per svolta a SINISTRA con spostamento verso il CENTRO, non per svolta a destra.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-06',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sorpasso si effettua a destra ogni volta che la corsia di sinistra è occupata da altri veicoli.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P03 (scambio obbligo↔divieto): la regola è l\u2019opposto. Il sorpasso si fa di norma a SINISTRA; l\u2019eccezione a destra è tassativa.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-07',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada in coda con tre corsie per senso, posso trovarmi in una corsia la cui velocità è superiore a quella della corsia di sinistra: ciò non costituisce sorpasso a destra vietato.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: nel traffico congestionato pluricorsia, velocità relative sfasate non sono "sorpasso a destra" vietato.',
    scenario_transfer:
      'Autostrada in coda a tre corsie.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-08',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un viale urbano con binari del tram al centro e corsie veicolari ai lati, posso superare il tram sulla destra.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: tram su sede propria al centro = sorpasso a destra espressamente consentito.',
    scenario_transfer:
      'Viale urbano con binari tranviari centrali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-09',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il conducente davanti in extraurbana rallenta e si sposta sulla mezzeria per svoltare a sinistra in un\u2019area privata, posso superarlo sulla destra.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la situazione integra l\u2019eccezione dell\u2019art. 148 co. 5, a condizione che lo spazio a destra sia sufficiente e sicuro.',
    scenario_transfer:
      'Extraurbana con veicolo in attesa di svolta a sinistra.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 148 co. 5 CdS',
  },
  {
    codice: 'QUIZ-ARG11-C011-10',
    concetto_codice: 'ARG11-C011',
    argomento_numero: 11,
    fase_rotta: 'origina',
    testo_domanda:
      'Il sorpasso a destra è una delle tre modalità ordinarie di sorpasso, al pari di quello a sinistra e di quello in affiancamento.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il sorpasso è di norma a sinistra; quello a destra è l\u2019eccezione tassativa. L\u2019espressione "tre modalità ordinarie" non esiste nel Codice.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 CdS',
  },
] as const
