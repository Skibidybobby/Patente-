import type { QuizItem } from '../_types'

// Argomento 12 — Ingombro carreggiata, traino, trasporto persone
// 8 concetti × 10 item = 80 item V/F
// Pattern trappola dominanti: P03 (obbligo↔divieto), P07 (numeri quasi-giusti),
// P12 (libertà apparente).
// Base normativa: CdS art. 61, 62, 116, 164, 165, 167, 169, 170.

export const ARG12_QUIZ: readonly QuizItem[] = [
  // =====================================================================
  // ARG12-C001 — Ingombro e sagoma limite
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C001-01',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Ogni veicolo deve rispettare la sagoma limite fissata dal Codice della strada.',
    risposta_corretta: true,
    spiegazione:
      'Art. 61 CdS: sagoma limite di larghezza, altezza e lunghezza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-02',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sagoma limite riguarda sia la carrozzeria sia il carico e gli accessori.',
    risposta_corretta: true,
    spiegazione:
      'Nessuna parte del veicolo può eccedere la sagoma senza autorizzazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-03',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un carico che sporge oltre il profilo del veicolo costituisce ingombro della carreggiata e può essere pericoloso.',
    risposta_corretta: true,
    spiegazione:
      'Rischio di urto con veicoli o utenti in affiancamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-04',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente far circolare un veicolo che eccede la sagoma limite, purché proceda a velocità ridotta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): serve una specifica autorizzazione per trasporti eccezionali; la velocità ridotta non è una scappatoia.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-05',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le dimensioni di sagoma limite riguardano solo la larghezza del veicolo, non la lunghezza o l\u2019altezza.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale fuori contesto): l\u2019art. 61 disciplina tutte e tre le dimensioni.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-06',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'È consentito far circolare un veicolo con accessori che eccedono la sagoma, poiché la sagoma riguarda unicamente la carrozzeria.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 + F01 ("unicamente"): la sagoma riguarda anche gli accessori e il carico.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-07',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Montare portabici posteriori che coprono la targa senza soluzione alternativa di ripetizione della targa integra una violazione delle regole sulla sagoma e visibilità.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la targa è parte dei dispositivi obbligatori che devono restare visibili. Va usata targa ripetitrice.',
    scenario_transfer:
      'Portabici posteriore su SUV in viaggio extraurbano.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 61 e 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-08',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Trasportare un materasso legato al tetto che sporge lateralmente oltre lo specchietto destro costituisce violazione della sagoma limite.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la sporgenza laterale oltre il profilo del veicolo non è ammessa.',
    scenario_transfer:
      'Trasporto di materasso sul tetto di un\u2019auto familiare.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-09',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un furgone con antenna radio di grandi dimensioni che supera l\u2019altezza di sagoma ammessa deve richiedere autorizzazione per circolare.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: superamento dell\u2019altezza = trasporto eccezionale, servono autorizzazione e scorta.',
    scenario_transfer:
      'Furgone con antenna radio oversize.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 61 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C001-10',
    concetto_codice: 'ARG12-C001',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'La sagoma limite vale solo per i veicoli commerciali: le automobili private non sono soggette a limiti dimensionali.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la sagoma limite si applica a tutti i veicoli, privati compresi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 61 CdS',
  },

  // =====================================================================
  // ARG12-C002 — Massa a vuoto e massa complessiva
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C002-01',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La massa a vuoto è il peso del veicolo senza carico, conducente e passeggeri.',
    risposta_corretta: true,
    spiegazione:
      'Definizione standard. La carta di circolazione riporta separatamente massa a vuoto e massa complessiva.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-02',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La massa complessiva a pieno carico è il valore massimo iscritto sulla carta di circolazione.',
    risposta_corretta: true,
    spiegazione:
      'Include veicolo + passeggeri + carico + eventuale rimorchio.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-03',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sovraccarico compromette la frenata, la stabilità e la tenuta di strada del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Spazi di frenata più lunghi, rischio di ribaltamento, usura pneumatici.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-04',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può far circolare il veicolo con una massa complessiva superiore a quella indicata sulla carta di circolazione fino a un 10% di tolleranza.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente) + P07 (numero quasi-giusto): nessuna tolleranza del 10%. Il limite è quello iscritto, punto.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-05',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'La massa a vuoto indicata sulla carta di circolazione comprende il peso del conducente stimato in 75 kg.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): la massa a vuoto è del solo veicolo senza conducente. Il peso di 75 kg rientra in altri calcoli tecnici ma non nella "massa a vuoto".',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-06',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato far circolare il veicolo con una massa complessiva superiore a quella a vuoto indicata sulla carta di circolazione.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime): il limite rilevante è la MASSA COMPLESSIVA, non la massa a vuoto. La massa complessiva è per definizione superiore a quella a vuoto.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-07',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se con un\u2019auto da 5 posti viaggio con 5 adulti e il bagagliaio pieno, devo verificare di non superare la massa complessiva indicata sul libretto.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: passeggeri + bagagli devono rientrare nella massa complessiva.',
    scenario_transfer:
      'Vacanza famiglia 5 persone con bagagli pieni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-08',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un furgone con massa complessiva di 3.500 kg che all\u2019ingresso del peso pubblico risulta 3.700 kg è in condizione di sovraccarico sanzionabile.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: applicazione diretta del limite iscritto.',
    scenario_transfer:
      'Peso pubblico su furgone commerciale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-09',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se aggiungo al mio veicolo un carrello porta-bici che porta la massa complessiva oltre il limite del libretto, sto commettendo una violazione.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: anche il carrello concorre al calcolo del complesso (se agganciato) o del carico utile.',
    scenario_transfer:
      'Carrello porta-bici con due e-bike su SUV.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 62 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C002-10',
    concetto_codice: 'ARG12-C002',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'La massa complessiva di un veicolo è un parametro puramente fiscale, senza implicazioni per la sicurezza della circolazione.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la massa complessiva determina frenata, tenuta di strada e stabilità. Ha implicazioni di sicurezza primarie.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 62 CdS',
  },

  // =====================================================================
  // ARG12-C003 — Sistemazione e stabilità del carico
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C003-01',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il carico deve essere sistemato in modo da non compromettere la stabilità del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 164 CdS: sistemazione sicura del carico.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-02',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il carico non deve coprire luci, targa e dispositivi di segnalazione del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Le superfici di segnalazione devono restare pienamente visibili.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-03',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il fissaggio del carico deve impedire che esso cada sulla strada durante la marcia.',
    risposta_corretta: true,
    spiegazione:
      'Caduta del carico = pericolo grave; obbligo di fissaggio efficace.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-04',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente sistemare il carico nel modo che preferisce, purché sia sopra il piano di carico.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): la sistemazione è vincolata da regole precise sulla stabilità, visibilità e non-caduta.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-05',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'È consentito che il carico copra gli indicatori di direzione del veicolo, purché le luci di posizione restino visibili.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P03 (scambio obbligo↔divieto): NESSUN dispositivo di segnalazione può essere coperto, indicatori inclusi.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-06',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il carico può trascinare lievemente sul suolo se il veicolo procede a bassa velocità nei centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + P12: il trascinamento del carico è vietato in ogni condizione e su ogni strada.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-07',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se trasporto un frigorifero legato con una corda sottile che rischia di rompersi, il mio fissaggio non è conforme all\u2019art. 164.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il fissaggio deve garantire che il carico NON possa spostarsi o cadere.',
    scenario_transfer:
      'Trasporto di elettrodomestico su pick-up.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-08',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il bagaglio nel portabagagli di un\u2019auto SUV è così alto da oscurare completamente il lunotto posteriore, la sistemazione non è conforme al Codice.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il carico non deve compromettere la visibilità del conducente (lunotto = campo visivo posteriore).',
    scenario_transfer:
      'SUV con bagagli accatastati sopra il piano dei sedili abbattuti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-09',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se i sacchi di cemento nel cassone di un pick-up sono tutti sbilanciati su un lato, la stabilità del veicolo può risultarne compromessa.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: lo squilibrio laterale altera la dinamica; l\u2019art. 164 lo vieta.',
    scenario_transfer:
      'Pick-up con sacchi di cemento sbilanciati lateralmente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C003-10',
    concetto_codice: 'ARG12-C003',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'Se il carico è sistemato in modo da non cadere subito, nessun altro requisito è richiesto dalla legge.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: oltre al non-cadere servono stabilità, visibilità, copertura dei dispositivi di segnalazione, assenza di sporgenze laterali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 CdS',
  },

  // =====================================================================
  // ARG12-C004 — Carichi sporgenti posteriormente
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C004-01',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Su un autoveicolo il carico può sporgere longitudinalmente dalla parte posteriore entro i 3/10 della lunghezza del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 164 co. 4: limite dei 3/10 per la sporgenza posteriore.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-02',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sporgenza posteriore del carico va segnalata con un pannello retrorifrangente quadrato a strisce rosse e bianche.',
    risposta_corretta: true,
    spiegazione:
      'Pannello quadrato retrorifrangente a strisce rosse/bianche, ben visibile ai veicoli che seguono.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-03',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Di notte la sporgenza del carico va integrata con una luce rossa visibile posteriormente.',
    risposta_corretta: true,
    spiegazione:
      'La luce rossa di notte è obbligatoria quando la visibilità è ridotta.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-04',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Su un autoveicolo il carico può sporgere posteriormente entro 1/10 della lunghezza del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti): il valore corretto è 3/10, non 1/10. Mnemonic: "tre decimi dietro, come tre dita".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-05',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sporgenza posteriore va segnalata con un pannello retrorifrangente a strisce gialle e nere.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime — confusione con altri pannelli): il pannello è rosso/bianco. Gialle/nere = segnaletica di cantiere, non di carico.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-06',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello segnalatore della sporgenza è necessario unicamente se il carico sporge lateralmente, non se sporge posteriormente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale) + F01 ("unicamente"): il pannello serve proprio per la sporgenza POSTERIORE. La sporgenza laterale ha regole proprie.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-07',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se trasporto tubi di ferro che sporgono 60 cm dietro a un furgone lungo 5 metri, sono entro il limite dei 3/10 della lunghezza.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: 3/10 di 5 m = 1,5 m. 60 cm è entro il limite. Il pannello va comunque esposto.',
    scenario_transfer:
      'Furgone artigiano con tubi di ferro sporgenti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-08',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se di notte trasporto una scala che sporge 80 cm dal bagagliaio, devo esporre il pannello a strisce e integrare con una luce rossa.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: notte + sporgenza = pannello + luce rossa.',
    scenario_transfer:
      'Trasporto notturno di scala artigianale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-09',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se ho un\u2019auto di 4 metri, un carico che sporge 1,5 m posteriormente eccede il limite ammesso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: 3/10 di 4 m = 1,2 m. 1,5 m eccede il limite, serve autorizzazione.',
    scenario_transfer:
      'Auto compatta con carico eccedente.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C004-10',
    concetto_codice: 'ARG12-C004',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'Il pannello segnalatore della sporgenza è necessario solo se il carico supera i 2 metri di lunghezza assoluta.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il criterio è la sporgenza oltre la sagoma, non una lunghezza assoluta del carico. Anche una sporgenza minima va segnalata se eccede la sagoma posteriore.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 164 co. 4 CdS',
  },

  // =====================================================================
  // ARG12-C005 — Traino: quando è ammesso
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C005-01',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il traino tra autoveicoli in caso di avaria è consentito solo per raggiungere il luogo più vicino idoneo alla riparazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 165 CdS: finalità tassativa del traino d\u2019emergenza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-02',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il traino d\u2019emergenza va effettuato a velocità moderata.',
    risposta_corretta: true,
    spiegazione:
      'Velocità ridotta: il veicolo trainato ha freni e sterzo non pienamente operativi.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-03',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In autostrada il traino dei veicoli in avaria è riservato ai mezzi di soccorso autorizzati, fino al primo svincolo utile.',
    risposta_corretta: true,
    spiegazione:
      'Art. 165: in autostrada solo mezzi di soccorso; trasporto fino al primo svincolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-04',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'In autostrada il conducente può trainare liberamente un amico in avaria con una fune fino al casello più vicino.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente) + P10 (ambito silenzioso): in autostrada è vietato ai privati; solo mezzi di soccorso autorizzati.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-05',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il traino di un veicolo in avaria è consentito anche per lunghi tragitti, purché a velocità ridotta.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): la velocità ridotta è solo una delle condizioni; il traino deve avere come meta il luogo IDONEO PIÙ VICINO alla riparazione, non "dove si vuole".',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-06',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un autoveicolo può trainare contemporaneamente più di un veicolo in avaria se la somma delle masse è inferiore alla propria.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P03 (obbligo↔divieto): il Codice VIETA di trainare più veicoli contemporaneamente, a prescindere dal bilancio delle masse.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-07',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se mia sorella rimane in panne in extraurbana, posso trainarla con una fune fino alla prima officina lungo la strada.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: extraurbana + veicolo in avaria = traino a velocità moderata fino al luogo idoneo più vicino è ammesso (non è autostrada).',
    scenario_transfer:
      'Strada extraurbana secondaria, auto familiare in panne.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-08',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se mi si rompe l\u2019auto in A4, non posso farmi trainare dal camper di un conoscente fino al casello successivo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: in autostrada SOLO mezzi di soccorso autorizzati. Il camper di un conoscente non rientra.',
    scenario_transfer:
      'Auto in panne in autostrada A4.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-09',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante il traino d\u2019emergenza in extraurbana devo procedere a velocità moderata e segnalare la situazione con le quattro frecce.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: velocità moderata + segnalazione di pericolo = buone pratiche imposte dall\u2019art. 165 e norme generali di circolazione.',
    scenario_transfer:
      'Traino d\u2019emergenza su extraurbana.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 165 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C005-10',
    concetto_codice: 'ARG12-C005',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'Il traino d\u2019emergenza tra autoveicoli è sempre consentito purché il veicolo trainante abbia patente BE.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il traino d\u2019emergenza (art. 165) è diverso dal trainare un rimorchio omologato (per cui serve patente idonea). L\u2019emergenza è regolata specificamente e non dipende dalla BE.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 165 CdS',
  },

  // =====================================================================
  // ARG12-C006 — Patente B e massa rimorchiabile
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C006-01',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con la patente B si possono guidare autoveicoli con massa complessiva fino a 3.500 kg.',
    risposta_corretta: true,
    spiegazione:
      'Art. 116 CdS: limite base della patente B.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-02',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con la patente B è ammesso il traino di un rimorchio leggero di massa non superiore a 750 kg.',
    risposta_corretta: true,
    spiegazione:
      'Rimorchio leggero ≤750 kg sempre ammesso con B.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-03',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con la patente B si può trainare un rimorchio più pesante di 750 kg purché la massa complessiva del complesso non superi 3.500 kg.',
    risposta_corretta: true,
    spiegazione:
      'Complesso fino a 3.500 kg ammesso con B.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-04',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con la patente B si possono guidare autoveicoli con massa complessiva fino a 4.500 kg.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti): il limite è 3.500 kg, non 4.500. Mnemonic: "B = 3500".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-05',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con la patente B è sempre ammesso il traino di un rimorchio pesante, indipendentemente dalla massa totale del complesso.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "sempre"): il traino di rimorchio oltre 750 kg è ammesso SOLO se il complesso resta sotto 3.500 kg; altrimenti serve B96 o BE.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-06',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con la patente B si può guidare un autoveicolo con 9 posti a sedere oltre al conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti): il limite è 8 posti OLTRE al conducente (totale 9 con il conducente). Mnemonic: "8+1 come 8 amici + te".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-07',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con patente B, per trainare un caravan da 1.200 kg con un\u2019auto di 2.000 kg, devo verificare che il complesso non superi 3.500 kg.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: 2000+1200 = 3200 kg, sotto i 3500 → patente B sufficiente.',
    scenario_transfer:
      'Auto con caravan in vacanza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-08',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Per guidare un complesso fino a 4.250 kg con patente B serve l\u2019estensione B96.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: B96 copre fino a 4.250 kg di complesso. Oltre serve BE.',
    scenario_transfer:
      'Utente che vuole caricare caravan + motrice più pesanti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-09',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con patente B semplice non posso guidare un complesso auto+rimorchio che pesa 4.000 kg.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: 4000 > 3500, servono B96 o BE.',
    scenario_transfer:
      'Complesso auto+rimorchio pesante 4 tonnellate.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 116 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C006-10',
    concetto_codice: 'ARG12-C006',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'Con patente B posso guidare un minibus da 15 posti, purché il peso del veicolo resti sotto 3.500 kg.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: oltre al limite di massa c\u2019è quello dei posti a sedere (8 oltre al conducente, totale 9). 15 posti eccede ampiamente: serve patente D1 o D.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 116 CdS',
  },

  // =====================================================================
  // ARG12-C007 — Trasporto persone in autovettura
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C007-01',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le autovetture non possono trasportare un numero di persone superiore a quello indicato sulla carta di circolazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 169 CdS: limite tassativo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-02',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il trasporto di passeggeri non deve compromettere la visibilità del conducente né la libertà dei suoi movimenti.',
    risposta_corretta: true,
    spiegazione:
      'Art. 169: requisiti di sicurezza nella sistemazione dei passeggeri.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-03',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'È vietato trasportare passeggeri nel bagagliaio di un\u2019autovettura.',
    risposta_corretta: true,
    spiegazione:
      'Il bagagliaio non è omologato per il trasporto di persone.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-04',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può trasportare liberamente un passeggero in più oltre a quelli indicati sulla carta di circolazione, se è un bambino.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): il limite è tassativo e include anche i bambini. Ognuno di loro richiede posto e sistema di ritenuta.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-05',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'È consentito trasportare passeggeri sui sedili anteriori anche in posizione che riduce la libertà di manovra del conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P03 (obbligo↔divieto): tale trasporto è VIETATO dall\u2019art. 169. Nessuno può ostacolare i movimenti del conducente.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-06',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il numero massimo di persone trasportabili comprende il conducente e i passeggeri, con esclusione dei minori di 3 anni.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): il limite di persone include tutti, minori compresi. Non esiste l\u2019esclusione dei minori di 3 anni dal conteggio.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-07',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se la mia utilitaria omologa 5 posti ma siamo 6 persone, devo organizzare due viaggi o usare un altro veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: applicazione diretta del limite.',
    scenario_transfer:
      'Utilitaria 5 posti con 6 persone.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-08',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un passeggero adulto seduto davanti tiene in braccio un neonato, il trasporto del neonato non è conforme al Codice.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il neonato deve essere in un sistema di ritenuta omologato, non in braccio. Il cuscino umano non è un dispositivo di sicurezza.',
    scenario_transfer:
      'Genitore con neonato in braccio sul sedile anteriore.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-09',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un passeggero seduto davanti impedisce al conducente di ruotare correttamente il volante, la sistemazione è scorretta.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019art. 169 impone di non compromettere la libertà di manovra.',
    scenario_transfer:
      'Passeggero adulto ingombrante sul sedile anteriore.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C007-10',
    concetto_codice: 'ARG12-C007',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'Il numero di persone trasportabili indicato sulla carta di circolazione è un valore suggerito, non vincolante per percorsi brevi.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: è vincolante e assoluto. Non esiste deroga per "percorsi brevi".',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 CdS',
  },

  // =====================================================================
  // ARG12-C008 — Trasporto bambini e animali
  // =====================================================================
  {
    codice: 'QUIZ-ARG12-C008-01',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I bambini di altezza inferiore a 1,50 m devono essere trasportati con un sistema di ritenuta omologato e adeguato al loro peso.',
    risposta_corretta: true,
    spiegazione:
      'Art. 172 CdS: obbligo di seggiolino/rialzo per bambini sotto 1,50 m.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-02',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli animali domestici possono essere trasportati in auto purché non costituiscano impedimento o pericolo per la guida.',
    risposta_corretta: true,
    spiegazione:
      'Art. 169 co. 6 CdS.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-03',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Più di un animale domestico va trasportato in gabbia, nel vano posteriore separato o dietro una rete divisoria omologata.',
    risposta_corretta: true,
    spiegazione:
      'Art. 169 co. 6 CdS: richiesto il contenimento per più animali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-04',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'I bambini di altezza inferiore a 1,40 m devono essere trasportati con sistema di ritenuta omologato.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti): la soglia è 1,50 m, non 1,40. Mnemonic: "uno-e-cinquanta = cintura adulto".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-05',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'È consentito trasportare liberamente più cani in abitacolo, senza gabbie né divisori.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): per più di un animale servono contenimenti idonei.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-06',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un bambino di 130 cm di altezza può essere trasportato senza seggiolino se indossa solo la cintura degli adulti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): 130 cm è sotto la soglia di 1,50 m, quindi serve un sistema di ritenuta (normalmente rialzo/booster). La cintura adulto da sola non basta.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-07',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se trasporto due gatti in un viaggio di mezz\u2019ora, devono essere contenuti in trasportini idonei.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: "più di un animale" = contenimento richiesto anche per tragitti brevi.',
    scenario_transfer:
      'Viaggio dal veterinario con due gatti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 169 co. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-08',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se mia figlia di 7 anni è alta 125 cm, deve viaggiare su un rialzo omologato adeguato al suo peso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: 125 cm < 150 cm → sistema di ritenuta obbligatorio.',
    scenario_transfer:
      'Bambina di 7 anni in auto familiare.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-09',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se mio figlio di 10 anni è già alto 155 cm, può indossare direttamente la cintura di sicurezza degli adulti.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: 155 cm ≥ 150 cm → cintura adulto sufficiente (ma responsabilità conducente resta).',
    scenario_transfer:
      'Preadolescente alto sopra 150 cm.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG12-C008-10',
    concetto_codice: 'ARG12-C008',
    argomento_numero: 12,
    fase_rotta: 'origina',
    testo_domanda:
      'I bambini di peso inferiore a 10 kg sono esentati da qualsiasi sistema di ritenuta.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: al contrario, i più piccoli richiedono sistemi specifici (gruppo 0/0+). Nessuna esenzione: l\u2019obbligo è massimo proprio per i neonati.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
] as const
