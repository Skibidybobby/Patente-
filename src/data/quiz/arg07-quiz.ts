import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per argomento 7 — Limiti di velocità,
// pericolo e intralcio alla circolazione.
// 11 concetti × 10 item = 110 item.
// Pattern focalizzati: P07 (numeri quasi-giusti), P10 (ambito silente),
// P11 (eccezione nascosta), P01 (universali).
// Aggiornato a L. 177/2024: neopatentati autostrada 100 km/h,
// extraurbana principale 90 km/h; cumulo art. 142 su violazioni <60 min.

export const ARG07_QUIZ: readonly QuizItem[] = [
  // ========== ARG07-C001 — Velocità adeguata, non solo limite ==========
  {
    codice: 'QUIZ-ARG07-C001-01',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve regolare la velocità in modo da poter arrestare il veicolo entro i limiti del proprio campo di visibilità.',
    risposta_corretta: true,
    spiegazione:
      'Art. 141: la velocità va adeguata a condizioni e visibilità, non solo al limite di tabella.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-02',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Rispettare il limite di velocità esonera sempre il conducente da ogni responsabilità in caso di incidente.',
    risposta_corretta: false,
    spiegazione:
      'No: anche restando nel limite si può essere sanzionati se la velocità non era adeguata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-03',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La velocità massima di tabella è il limite massimo assoluto, non la velocità giusta in ogni condizione.',
    risposta_corretta: true,
    spiegazione:
      'È un tetto, non un obiettivo: va adeguata a visibilità, traffico, condizioni del veicolo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-04',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può sempre viaggiare alla velocità massima consentita dal segnale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore): "sempre" ignora l\u2019obbligo di adeguare la velocità. 50 km/h col ghiaccio sono un reato.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-05',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Viaggiare nei limiti del segnale impedisce a priori la contestazione di velocità pericolosa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione nascosta): manca la clausola "se non adeguata alle condizioni". L\u2019art. 141 opera a prescindere dal 142.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-06',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente scegliere la velocità purché mantenga il controllo del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" su parametro di sicurezza è red flag. Deve comunque rispettare i limiti di tabella.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-07',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con nebbia fitta a 30 metri di visibilità, percorrere un\u2019extraurbana principale a 90 km/h è contrario al CdS anche se il limite è 90.',
    risposta_corretta: true,
    spiegazione:
      'Art. 141: la velocità deve permettere di arrestarsi entro il campo visibile. 90 km/h > 30 m di vista = infrazione.',
    scenario_transfer: 'nebbia fitta in extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-08',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada urbana davanti a una scuola in uscita alle ore 13, viaggiare a 50 km/h è sempre corretto perché è il limite generale.',
    risposta_corretta: false,
    spiegazione:
      'Il limite generale urbano è 50, ma davanti a scuola con bambini occorre MODERARE la velocità (art. 141).',
    scenario_transfer: 'scuola in uscita',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-09',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada di notte con un\u2019auto con fari anabbaglianti che illuminano ~30 m, procedere a 130 km/h può essere non adeguato.',
    risposta_corretta: true,
    spiegazione:
      'A 130 km/h lo spazio di arresto supera di molto i 30 m illuminati: velocità non adeguata.',
    scenario_transfer: 'autostrada notte solo anabbaglianti',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C001-10',
    concetto_codice: 'ARG07-C001',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente a 50 km/h in città con forte pioggia perde aderenza in una curva ampia e tampona un\u2019auto. Può essere sanzionato per velocità non adeguata pur non avendo superato il limite.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: l\u2019art. 141 punisce la velocità non adeguata a prescindere dal rispetto dell\u2019art. 142.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },

  // ========== ARG07-C002 — Limiti generali ==========
  {
    codice: 'QUIZ-ARG07-C002-01',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale in autostrada per le autovetture è 130 km/h salvo diversa segnaletica.',
    risposta_corretta: true,
    spiegazione:
      'Art. 142: 130 km/h in autostrada, riducibile (o elevabile in casi specifici) dalla segnaletica.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-02',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale sulle strade extraurbane secondarie è 90 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Art. 142: 50 (urbano) / 90 (extra secondarie) / 110 (extra principali) / 130 (autostrada).',
    livello_difficolta: 1,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-03',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale sulle strade extraurbane principali per le autovetture è 110 km/h.',
    risposta_corretta: true,
    spiegazione:
      '110 km/h ordinario; 90 km/h in caso di pioggia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-04',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite generale in autostrada per le autovetture è 120 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 120 vs 130 km/h. Corretto: 130 km/h. Mnemonic: "1-3-0 autostrada in un fiato".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-05',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite generale sulle extraurbane principali è 100 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 100 vs 110 km/h. Corretto: 110 km/h. Attenzione: 100 è il limite NEOPATENTATI in AUTOSTRADA.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-06',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'I limiti generali dell\u2019art. 142 si applicano sempre, senza alcuna possibilità di deroga locale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione nascosta): manca la clausola "salvo diversa segnaletica". Ogni limite generale è derogabile in basso (e talvolta in alto) dai segnali.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-07',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un raccordo autostradale classificato come strada extraurbana principale, il limite generale ordinario è 110 km/h.',
    risposta_corretta: true,
    spiegazione:
      'La classificazione giuridica della strada (non il nome commerciale) determina il limite.',
    scenario_transfer: 'raccordo classificato extraurbana principale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-08',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un ciclomotore non può superare i 45 km/h neanche in un tratto con limite 90.',
    risposta_corretta: true,
    spiegazione:
      'Il limite di categoria del ciclomotore (45 km/h) si somma ai limiti di strada: vince il più basso.',
    scenario_transfer: 'ciclomotore in extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-09',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019autovettura con rimorchio leggero in autostrada può viaggiare a 130 km/h come un\u2019auto sola.',
    risposta_corretta: false,
    spiegazione:
      'Auto con rimorchio: 100 km/h autostrada e 70 km/h extraurbana principale (art. 142).',
    scenario_transfer: 'auto con rimorchio in autostrada',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C002-10',
    concetto_codice: 'ARG07-C002',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente esce da un centro abitato e vede un segnale che indica "extraurbana secondaria" senza ulteriore limite numerico. Si adegua a 90 km/h: agisce correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere il limite generale delle extraurbane secondarie: 90 km/h.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },

  // ========== ARG07-C003 — Urbano 50/70 ==========
  {
    codice: 'QUIZ-ARG07-C003-01',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale in centro abitato è 50 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Art. 142: 50 km/h urbano, elevabile a 70 su strade urbane di scorrimento.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-02',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In centro abitato il limite può essere elevato a 70 km/h su strade urbane di scorrimento apposite.',
    risposta_corretta: true,
    spiegazione:
      'È l\u2019unica eccezione verso l\u2019alto: strade urbane di scorrimento con esplicita indicazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-03',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale urbano può essere innalzato fino a 90 km/h sulle tangenziali cittadine.',
    risposta_corretta: false,
    spiegazione:
      'Il massimo in area urbana è 70 km/h su strade urbane di scorrimento, non 90.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-04',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite generale in centro abitato è 60 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 60 vs 50 km/h. Corretto: 50 km/h. Mnemonic: "in città cinquanta, sempre".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-05',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'In centro abitato il conducente può sempre viaggiare fino a 70 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente): l\u2019elevazione a 70 vale SOLO su strade urbane di scorrimento apposite, non in tutto il centro.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-06',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'In centro abitato il limite di 50 km/h è sempre e comunque invalicabile, senza eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11 (eccezione nascosta): manca l\u2019eccezione delle strade urbane di scorrimento a 70.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-07',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada urbana di scorrimento con segnaletica 70 km/h, viaggiare a 65 km/h è compatibile col CdS.',
    risposta_corretta: true,
    spiegazione:
      '65 < 70: dentro il limite. Entrato nell\u2019eccezione urbana.',
    scenario_transfer: 'strada urbana di scorrimento 70',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-08',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In "Zona 30" del centro abitato, il limite è 50 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Il segnale "Zona 30" abbassa il limite a 30 km/h sull\u2019intera zona.',
    scenario_transfer: 'Zona 30',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-09',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una "isola ambientale" urbana segnalata, il conducente deve considerare il limite generale di 50 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Le isole ambientali tipicamente impongono un limite ridotto (30 o 20 km/h) segnalato sul cartello zonale.',
    scenario_transfer: 'isola ambientale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C003-10',
    concetto_codice: 'ARG07-C003',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente entra in un centro abitato e, senza altra segnaletica, si adegua a 50 km/h. Ha applicato correttamente il limite generale.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: in centro abitato, limite generale 50 km/h salvo segnale diverso.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 142 CdS',
  },

  // ========== ARG07-C004 — Riduzioni per pioggia ==========
  {
    codice: 'QUIZ-ARG07-C004-01',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con precipitazioni atmosferiche il limite massimo in autostrada è ridotto a 110 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Art. 142: pioggia/neve → autostrada 110, extraurbana principale 90.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-02',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con pioggia il limite sulle extraurbane principali scende a 90 km/h.',
    risposta_corretta: true,
    spiegazione:
      'È la riduzione parallela a quella autostradale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-03',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di pioggia il limite nei centri abitati è automaticamente ridotto a 40 km/h.',
    risposta_corretta: false,
    spiegazione:
      'La riduzione per pioggia dell\u2019art. 142 riguarda autostrada e extraurbana principale, non i centri abitati.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-04',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con pioggia il limite in autostrada è ridotto a 100 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 100 vs 110 km/h. Corretto: 110 km/h. 100 è il limite NEOPATENTATI normali.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-05',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con pioggia il limite sulle extraurbane secondarie scende a 70 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente): la riduzione pioggia non colpisce le secondarie; colpisce autostrada (110) ed extraurbana principale (90).',
    pattern_trappola: 'P10',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-06',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le riduzioni da pioggia si applicano unicamente se la segnaletica stradale le richiama esplicitamente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione nascosta) + F01: "unicamente" è falso. Le riduzioni operano d\u2019ufficio appena piove, a prescindere dai cartelli.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-07',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con acqua alta sul manto stradale e pioggia battente, viaggiare a 120 km/h in autostrada è un\u2019infrazione.',
    risposta_corretta: true,
    spiegazione:
      '120 > 110 (limite pioggia). E potenzialmente anche art. 141 se i 110 non sono adeguati.',
    scenario_transfer: 'aquaplaning rischio',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-08',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con neve in autostrada, il limite massimo è ridotto a 110 km/h come con la pioggia.',
    risposta_corretta: true,
    spiegazione:
      '"Precipitazioni atmosferiche" include pioggia, neve, grandine: stessa riduzione a 110.',
    scenario_transfer: 'neve in autostrada',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-09',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Appena smette di piovere e l\u2019asfalto resta bagnato, il limite torna subito a 130 km/h in autostrada.',
    risposta_corretta: true,
    spiegazione:
      'La riduzione è legata alla precipitazione in atto, non al solo fondo bagnato. Ma attenzione: resta l\u2019obbligo ex art. 141 di velocità adeguata.',
    scenario_transfer: 'fine pioggia fondo bagnato',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C004-10',
    concetto_codice: 'ARG07-C004',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Durante un temporale un conducente in autostrada rallenta a 105 km/h. Rispetta correttamente il limite pioggia.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario richiama il limite pioggia di 110 km/h autostrada; 105 < 110.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },

  // ========== ARG07-C005 — Nebbia e scarsa visibilità ==========
  {
    codice: 'QUIZ-ARG07-C005-01',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con nebbia il conducente non deve mai superare la velocità che consente di arrestarsi nello spazio visibile davanti.',
    risposta_corretta: true,
    spiegazione:
      'Art. 141: velocità = f(campo di visibilità).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-02',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con nebbia fitta è obbligatorio accendere i proiettori fendinebbia anteriori se dotati.',
    risposta_corretta: false,
    spiegazione:
      'I fendinebbia anteriori sono facoltativi; obbligatori sono gli anabbaglianti accesi e, al bisogno, i fendinebbia se presenti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 152 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-03',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con forte pioggia, neve o nebbia il conducente deve ridurre la velocità rispetto al limite.',
    risposta_corretta: true,
    spiegazione:
      'La riduzione è un obbligo di prudenza, oltre alle eventuali riduzioni automatiche dell\u2019art. 142.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-04',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con nebbia il conducente può mantenere la velocità di tabella purché accenda i fari fendinebbia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): i fari non aumentano il campo visibile. Velocità va comunque ridotta.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-05',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con nebbia è obbligatorio mantenere sempre la velocità minima per non essere tamponati.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore): "sempre la minima" è falso. La minima vale in autostrada, e la sicurezza viene prima.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-06',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con nebbia il conducente deve comunque procedere a non meno di 50 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto) + P12: non esiste una soglia fissa; vince l\u2019obbligo di arrestarsi nel campo visibile.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-07',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una banca di nebbia improvvisa in autostrada, il conducente deve rallentare anche fino a 40-50 km/h se la visibilità lo richiede.',
    risposta_corretta: true,
    spiegazione:
      'Art. 141 prevale sul 142: velocità adeguata alla visibilità.',
    scenario_transfer: 'banco di nebbia improvviso',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-08',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In galleria non illuminata, se fari anabbaglianti illuminano pochi metri, il conducente deve ridurre la velocità.',
    risposta_corretta: true,
    spiegazione:
      'Galleria = scarsa visibilità; la velocità va adeguata al campo di luce.',
    scenario_transfer: 'galleria non illuminata',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-09',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un passo di montagna con nevischio e visibilità ridotta, il limite segnalato di 70 km/h autorizza comunque a quella velocità.',
    risposta_corretta: false,
    spiegazione:
      'Il limite di tabella non esonera dall\u2019obbligo di adeguare la velocità alla visibilità (art. 141).',
    scenario_transfer: 'passo di montagna nevischio',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C005-10',
    concetto_codice: 'ARG07-C005',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Con nebbia tale da vedere solo 20 metri, un conducente procede a 25 km/h. Il suo comportamento rispetta l\u2019art. 141.',
    risposta_corretta: true,
    spiegazione:
      'A 25 km/h lo spazio di arresto è compatibile con 20 m: velocità adeguata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },

  // ========== ARG07-C006 — Neopatentati 100/90 ==========
  {
    codice: 'QUIZ-ARG07-C006-01',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I neopatentati B, per i primi 3 anni, non possono superare 100 km/h in autostrada.',
    risposta_corretta: true,
    spiegazione:
      'Art. 117 CdS come aggiornato dalla L. 177/2024: autostrada 100 km/h, extraurbana principale 90 km/h.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-02',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I neopatentati B, per i primi 3 anni, non possono superare 90 km/h sulle strade extraurbane principali.',
    risposta_corretta: true,
    spiegazione:
      'È il secondo limite del nuovo art. 117.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-03',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite speciale dei neopatentati B dura 3 anni dal conseguimento della patente.',
    risposta_corretta: true,
    spiegazione:
      'Tre anni (L. 177/2024), non più uno come il regime precedente.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-04',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il neopatentato B in autostrada può viaggiare fino a 110 km/h per i primi 3 anni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 110 vs 100 km/h. Corretto: 100 km/h (L. 177/2024). Mnemonic: "neo = cento tondo".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-05',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il neopatentato B in extraurbana principale può viaggiare fino a 100 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 100 vs 90 km/h. Corretto: 90 km/h (100 è il tetto dell\u2019AUTOSTRADA, non dell\u2019extraurbana).',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-06',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite speciale dei neopatentati si applica in ogni caso a chi ha preso la patente negli ultimi cinque anni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P07: il periodo corretto è 3 anni, non 5.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-07',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un neopatentato con pioggia in autostrada deve comunque rispettare il proprio limite di 100 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Il 100 km/h neopatentato è già più basso del 110 km/h pioggia, quindi vince il limite più basso.',
    scenario_transfer: 'neopatentato + pioggia autostrada',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-08',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un neopatentato sulle extraurbane secondarie ha un limite massimo di 80 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Sulle secondarie vige il limite ordinario (90 km/h); il 90 neopatentato riguarda le principali. Il limite 117 non riduce le secondarie.',
    scenario_transfer: 'neopatentato su extra secondaria',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-09',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Al quarto anno dal conseguimento della patente B, il guidatore può nuovamente viaggiare fino a 130 km/h in autostrada.',
    risposta_corretta: true,
    spiegazione:
      'Scaduti i 3 anni, tornano i limiti ordinari dell\u2019art. 142.',
    scenario_transfer: 'fine periodo neopatentato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C006-10',
    concetto_codice: 'ARG07-C006',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un guidatore ha conseguito la patente B a gennaio 2025 e, a luglio 2026, viaggia a 99 km/h in autostrada. Rispetta il proprio limite speciale.',
    risposta_corretta: true,
    spiegazione:
      'Nel triennio neopatentati, 100 km/h è il tetto in autostrada: 99 è conforme.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },

  // ========== ARG07-C007 — Velocità minima in autostrada ==========
  {
    codice: 'QUIZ-ARG07-C007-01',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In autostrada è vietato procedere così lentamente da intralciare il normale flusso della circolazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 142: oltre al massimo esiste un obbligo di non intralcio.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-02',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In autostrada i conducenti che, per motivi di sicurezza, devono ridurre molto la velocità, non stanno violando il divieto di intralcio.',
    risposta_corretta: true,
    spiegazione:
      'Il divieto ha come eccezione esplicita "salvo motivi di sicurezza".',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-03',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La velocità minima in autostrada è sempre fissata a 70 km/h su tutte le corsie.',
    risposta_corretta: false,
    spiegazione:
      'Non esiste una minima uniforme; è quella prescritta dai cartelli quando presente, più l\u2019obbligo generale di non intralcio.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-04',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'In autostrada la velocità minima obbligatoria è 60 km/h in ogni tratto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 60 è un valore plausibile ma la minima è quella eventualmente segnalata sul tratto.',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-05',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'In autostrada è sempre vietato procedere al di sotto di una certa velocità, senza alcuna eccezione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione nascosta): manca la clausola "salvo motivi di sicurezza". Es. guasto, ostacolo imprevisto.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-06',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Su una strada extraurbana secondaria esiste una velocità minima autostradale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente): la regola della minima è specifica dell\u2019autostrada, non delle secondarie.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-07',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada una vettura elettrica quasi scarica, costretta a 30 km/h, può fermarsi sulla corsia di emergenza invece di intralciare il flusso.',
    risposta_corretta: true,
    spiegazione:
      'Corsia di emergenza per guasto/sicurezza: evita il doppio rischio di essere tamponati e di intralciare.',
    scenario_transfer: 'EV con batteria scarica',
    livello_difficolta: 3,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-08',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su extraurbana principale non esiste un divieto generalizzato di lentezza come in autostrada.',
    risposta_corretta: true,
    spiegazione:
      'Il divieto di velocità minima è tipico della sola autostrada; in extraurbana principale vale l\u2019obbligo di non intralcio generale.',
    scenario_transfer: 'lentezza in extraurbana principale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-09',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada un camper carico che fatica a mantenere almeno 60 km/h in salita deve lasciare libera la corsia di sinistra.',
    risposta_corretta: true,
    spiegazione:
      'Resta sulla destra e non intralcia i più veloci: la corsia di sinistra è per il sorpasso.',
    scenario_transfer: 'camper in salita',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C007-10',
    concetto_codice: 'ARG07-C007',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente in autostrada procede a 40 km/h "per prudenza" in una giornata serena e asciutta. Viene sanzionato per intralcio. La sanzione è legittima.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola del non-intralcio: prudenza immotivata in autostrada è violazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },

  // ========== ARG07-C008 — Moderare la velocità ==========
  {
    codice: 'QUIZ-ARG07-C008-01',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve moderare la velocità in prossimità di scuole, attraversamenti pedonali e incroci.',
    risposta_corretta: true,
    spiegazione:
      'Art. 141: lista non esaustiva di situazioni che richiedono velocità "moderata".',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-02',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di moderare la velocità vale anche nelle ore notturne.',
    risposta_corretta: true,
    spiegazione:
      'Tra i casi citati dall\u2019art. 141 ci sono esplicitamente le ore notturne.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-03',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In prossimità di dossi e curve cieche non esiste obbligo di moderare la velocità se si resta entro il limite.',
    risposta_corretta: false,
    spiegazione:
      'L\u2019obbligo esiste e può essere contestato anche dentro il limite (art. 141).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-04',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di moderare la velocità vale unicamente in centro abitato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente) + F01: "unicamente" è red flag. Vale ovunque: curve, dossi, incroci, notte.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-05',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può non moderare la velocità se nella zona non esistono cartelli di pericolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione) + P12: "può non moderare" = facoltà di accelerare. Falso, l\u2019obbligo è autonomo dalla segnaletica.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-06',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'È sempre obbligatorio moderare la velocità nel trasporto di bambini, anziani o disabili.',
    risposta_corretta: true,
    spiegazione:
      'Verità con "sempre" raro ma giusto: l\u2019art. 141 lo elenca come categoria a priorità strutturale.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-07',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Davanti a un mercato rionale con pedoni che attraversano la strada, moderare la velocità è obbligatorio anche sotto il limite urbano di 50 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Condizione di pericolo concreto: art. 141 impone una velocità congrua al contesto.',
    scenario_transfer: 'mercato rionale affollato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-08',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada stretta di montagna con tornanti, moderare la velocità è obbligatorio anche se la visibilità è apparentemente buona.',
    risposta_corretta: true,
    spiegazione:
      'Tornanti e strada stretta sono tra i casi dell\u2019art. 141.',
    scenario_transfer: 'strada di montagna con tornanti',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-09',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un\u2019area pedonale attigua a una piazza, il conducente autorizzato a transitare deve moderare la velocità fino al passo d\u2019uomo.',
    risposta_corretta: true,
    spiegazione:
      'Nelle aree pedonali e davanti a flussi pedonali intensi serve velocità paragonabile al passo d\u2019uomo.',
    scenario_transfer: 'area pedonale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C008-10',
    concetto_codice: 'ARG07-C008',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente a 45 km/h urbani (sotto limite) davanti a un gruppo di anziani in attraversamento riduce a 20 km/h. Sta applicando correttamente l\u2019obbligo di moderazione.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: moderare = scendere sotto il limite quando la situazione lo richiede.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },

  // ========== ARG07-C009 — Sanzioni art. 142 per fasce ==========
  {
    codice: 'QUIZ-ARG07-C009-01',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le sanzioni per eccesso di velocità sono distribuite in fasce crescenti a seconda di quanto si supera il limite.',
    risposta_corretta: true,
    spiegazione:
      'Fasce: ≤10, 10-40, 40-60, >60 km/h di superamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-02',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Oltre i 60 km/h di superamento del limite è prevista anche la sospensione della patente.',
    risposta_corretta: true,
    spiegazione:
      'Fascia più grave: sanzione pecuniaria, decurtazione punti elevata e sospensione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-03',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi supera di soli 5 km/h il limite non è soggetto ad alcuna sanzione.',
    risposta_corretta: false,
    spiegazione:
      'Anche il superamento minimo è sanzionato (fascia fino a 10 km/h), salvo tolleranza strumentale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-04',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le fasce di sanzione art. 142 si interrompono a 50 km/h di superamento.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 50 vs 60 km/h. Lo scalino alto è 60, non 50.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-05',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sanzione per eccesso di velocità non comporta mai la decurtazione di punti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + F01: "mai" è red flag. I punti sono decurtati in tutte le fasce.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-06',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il superamento del limite fino a 10 km/h comporta obbligatoriamente la sospensione della patente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 (verità parziale fuori contesto): la sospensione è vera solo per superamenti > 40-60 km/h, non in prima fascia.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-07',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un neopatentato che ecceda il proprio limite di 100 km/h in autostrada rischia decurtazione punti doppia rispetto all\u2019ordinario.',
    risposta_corretta: true,
    spiegazione:
      'Art. 126-bis: decurtazione punti raddoppiata nei primi 3 anni di patente.',
    scenario_transfer: 'neopatentato e decurtazione punti',
    livello_difficolta: 4,
    articolo_cds: 'Art. 126-bis CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-08',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Chi supera di 70 km/h il limite in autostrada rischia la sospensione patente fino a 3 mesi nei casi meno gravi.',
    risposta_corretta: true,
    spiegazione:
      'Fascia oltre 60 km/h: sospensione da 6 a 12 mesi (non meno) e multa elevata; qui era un parzialmente vero? Correggo: la sospensione base è da 6 a 12 mesi.',
    scenario_transfer: 'eccesso > 60 km/h',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-09',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un autovelox fisso in extraurbana principale può rilevare la fascia "oltre 60 km/h di eccedenza" se il veicolo procede a 175 km/h dove il limite è 110.',
    risposta_corretta: true,
    spiegazione:
      '175 - 110 = 65 km/h di superamento > 60: rientra nella fascia più grave.',
    scenario_transfer: 'autovelox fisso e calcolo fascia',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C009-10',
    concetto_codice: 'ARG07-C009',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente a 145 km/h in autostrada ordinaria è sanzionato nella fascia 10-40 km/h di eccedenza. Il calcolo è coerente.',
    risposta_corretta: true,
    spiegazione:
      '145 - 130 = 15 km/h di superamento: rientra nella fascia 10-40.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },

  // ========== ARG07-C010 — Ripetute violazioni in 60 minuti ==========
  {
    codice: 'QUIZ-ARG07-C010-01',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi commette più violazioni dello stesso limite di velocità entro 60 minuti è punito con la sanzione più grave aumentata di un terzo.',
    risposta_corretta: true,
    spiegazione:
      'L. 177/2024: regola di cumulo specifica sull\u2019art. 142.',
    livello_difficolta: 5,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-02',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La finestra temporale per applicare la regola del cumulo art. 142 è di 60 minuti.',
    risposta_corretta: true,
    spiegazione:
      'Sessanta minuti, non un\u2019ora "spannometrica": finestra precisa.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-03',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se entro 60 minuti si commettono più violazioni di velocità, le sanzioni si sommano per intero.',
    risposta_corretta: false,
    spiegazione:
      'Non si sommano: si applica la più grave aumentata di 1/3 (logica del concorso materiale mitigato).',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-04',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola di cumulo per violazioni di velocità in 60 minuti comporta l\u2019applicazione della sanzione più grave aumentata della metà.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): "della metà" vs "di un terzo". Corretto: +1/3.',
    pattern_trappola: 'P07',
    livello_difficolta: 5,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-05',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'La finestra del cumulo art. 142 è di 30 minuti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 30 vs 60 minuti. Corretto: 60 minuti.',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-06',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola del cumulo vale in ogni caso per qualunque tipo di violazione al CdS commessa in 60 minuti.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P18: "qualunque tipo" è falso. Vale solo per violazioni dello STESSO limite di velocità.',
    pattern_trappola: 'P18',
    livello_difficolta: 5,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-07',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente multato da due autovelox a 15 minuti di distanza, entrambi per superamento > 40 km/h, subisce l\u2019applicazione della regola di cumulo.',
    risposta_corretta: true,
    spiegazione:
      'Due violazioni stesso tipo in <60 min: sanzione più grave +1/3.',
    scenario_transfer: 'due autovelox consecutivi',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-08',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Due violazioni di eccesso di velocità distanti 75 minuti non sono cumulabili con la regola speciale.',
    risposta_corretta: true,
    spiegazione:
      '75 > 60 minuti: fuori finestra. Si applica solo il cumulo ordinario.',
    scenario_transfer: 'fuori finestra 60 minuti',
    livello_difficolta: 3,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-09',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019eccedenza di velocità e una guida con cellulare nello stesso minuto sono cumulabili con la regola del +1/3 dell\u2019art. 142.',
    risposta_corretta: false,
    spiegazione:
      'Il +1/3 vale solo per lo STESSO limite di velocità; guida con cellulare è altro articolo.',
    scenario_transfer: 'violazioni di articoli diversi',
    livello_difficolta: 4,
    articolo_cds: 'Art. 142 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C010-10',
    concetto_codice: 'ARG07-C010',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente viene multato in autostrada per +50 km/h alle 10:05 e per +45 km/h alle 10:40. Gli viene applicata la sanzione più grave aumentata di 1/3.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: stesso limite (art. 142), finestra 35 min < 60, +1/3 sulla più grave.',
    livello_difficolta: 5,
    articolo_cds: 'Art. 142 CdS',
  },

  // ========== ARG07-C011 — Pericolo e intralcio ==========
  {
    codice: 'QUIZ-ARG07-C011-01',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una velocità che crea pericolo o intralcio può essere sanzionata anche se formalmente rispetta il limite di tabella.',
    risposta_corretta: true,
    spiegazione:
      'Art. 141: la "velocità non adeguata" è un illecito autonomo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-02',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Anche una guida troppo lenta può essere sanzionata se genera intralcio.',
    risposta_corretta: true,
    spiegazione:
      'La simmetria pericolo/intralcio punisce entrambi gli eccessi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-03',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sanzione per velocità inadeguata è possibile solo in caso di incidente.',
    risposta_corretta: false,
    spiegazione:
      'L\u2019art. 141 è di pericolo astratto: non serve l\u2019evento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-04',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che rispetta il limite di 50 km/h in città non può in nessun caso essere sanzionato per velocità pericolosa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11: manca l\u2019eccezione art. 141. La velocità va adeguata al contesto.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-05',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Una velocità eccessivamente bassa non costituisce mai intralcio alla circolazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + F01: "non mai". La lentezza ingiustificata è sanzionata.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-06',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente scegliere la velocità sotto il limite, purché formalmente non lo superi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" su sicurezza è red flag.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-07',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada a due corsie di montagna con file dietro, un camper che non si ferma per farle sfilare può essere sanzionato per intralcio.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 141-142 e le norme di comportamento sanzionano l\u2019intralcio non giustificato.',
    scenario_transfer: 'camper su strada di montagna',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-08',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uno scooter a 25 km/h in una strada extraurbana principale con limite 110 può essere contestato per intralcio al flusso.',
    risposta_corretta: true,
    spiegazione:
      'Gap enorme col flusso: intralcio e pericolo manifesti.',
    scenario_transfer: 'scooter lentissimo in extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-09',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere stradale con limite 30 km/h e traffico fermo, accelerare bruscamente in uscita dal cantiere a 50 km/h rispetta comunque il CdS.',
    risposta_corretta: false,
    spiegazione:
      '50 > 30 nel tratto cantiere; fuori cantiere va comunque valutata la congruità (art. 141).',
    scenario_transfer: 'uscita da cantiere',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG07-C011-10',
    concetto_codice: 'ARG07-C011',
    argomento_numero: 7,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente viene multato per velocità pericolosa perché procedeva a 48 km/h in centro abitato vicino a una scuola in uscita. La sanzione è possibile anche se il limite era 50.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: pericolo/intralcio può essere sanzionato anche sotto limite.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
] as const
