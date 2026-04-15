import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per argomento 9 — Norme sulla circolazione dei veicoli.
// 13 concetti × 10 item = 130 item.
// Pattern focalizzati: P01 (universali), P02 (doppia negazione),
// P04 (può/deve), P12 (libertà apparente), P15 (ovvero giuridico),
// P16 (passivo ingannevole).

export const ARG09_QUIZ: readonly QuizItem[] = [
  // ========== ARG09-C001 — Principio generale di prudenza ==========
  {
    codice: 'QUIZ-ARG09-C001-01',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli utenti della strada devono comportarsi in modo da non costituire pericolo o intralcio per la circolazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 140: principio generale di comportamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-02',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il principio generale di prudenza vale anche quando nessuna norma specifica disciplina il caso.',
    risposta_corretta: true,
    spiegazione:
      'È norma di chiusura: copre i buchi lasciati dalle norme specifiche.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-03',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019art. 140 si applica solo agli automobilisti, non a pedoni e ciclisti.',
    risposta_corretta: false,
    spiegazione:
      'Si applica a "gli utenti della strada" (tutti).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-04',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di non costituire pericolo o intralcio non vale quando non c\u2019è traffico.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione) + P10: la norma vale sempre, a prescindere dall\u2019intensità di traffico.',
    pattern_trappola: 'P02',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-05',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il principio di prudenza consente al conducente di valutare liberamente cosa sia pericolo o intralcio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" su sicurezza è sempre red flag. La valutazione è oggettiva.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-06',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'La salvaguardia della sicurezza delle persone è demandata agli altri utenti, non al conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 (passivo ingannevole): l\u2019agente è cancellato. Il soggetto attivo dell\u2019obbligo è il conducente stesso.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-07',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un ciclista che percorre contromano una strada senza creare incidenti viola comunque l\u2019art. 140.',
    risposta_corretta: true,
    spiegazione:
      'Contromano crea pericolo in astratto: l\u2019art. 140 punisce anche il rischio.',
    scenario_transfer: 'ciclista contromano',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-08',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un pedone che attraversa fuori dalle strisce con traffico intenso può essere sanzionato per violazione del principio generale di sicurezza.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 140 vale anche per i pedoni quando creano pericolo.',
    scenario_transfer: 'pedone fuori strisce',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-09',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente che lancia oggetti dal finestrino in autostrada viola l\u2019art. 140.',
    risposta_corretta: true,
    spiegazione:
      'Crea pericolo per gli altri utenti, anche in assenza di norma specifica sull\u2019oggetto lanciato.',
    scenario_transfer: 'lancio oggetti dal finestrino',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C001-10',
    concetto_codice: 'ARG09-C001',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente rallenta davanti a un cane libero sul ciglio, pur non essendoci un cartello di pericolo. Sta applicando il principio generale dell\u2019art. 140.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la norma di chiusura: prudenza anche in assenza di norma specifica.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },

  // ========== ARG09-C002 — Tenere la destra ==========
  {
    codice: 'QUIZ-ARG09-C002-01',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I veicoli devono circolare sulla parte destra della carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Art. 143: posizione di base.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-02',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di tenere la destra vale anche quando la strada è libera.',
    risposta_corretta: true,
    spiegazione:
      'Non dipende dalla presenza di altro traffico.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-03',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In strada libera il conducente può scegliere liberamente la corsia più comoda.',
    risposta_corretta: false,
    spiegazione:
      'Deve tenere la destra anche a strada libera.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-04',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente deve sempre viaggiare sulla corsia di sinistra in strada libera.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore): "sempre ... sinistra" è falso. Regola: tenere la destra.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-05',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente non è tenuto a non circolare sulla sinistra se la strada è libera.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione): "non tenuto a non circolare a sinistra" = libero di farlo. Falso: deve tenere la destra.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-06',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può tenere la destra, ovvero la corsia a lui più vicina.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure) + P04: "può tenere la destra" indebolisce il dovere. La destra è un OBBLIGO, non una delle opzioni.',
    pattern_trappola: 'P04',
    livello_difficolta: 4,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-07',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana a due carreggiate separate con due corsie ciascuna, il conducente deve tenere la corsia destra salvo sorpasso.',
    risposta_corretta: true,
    spiegazione:
      'Corsie di sinistra solo per sorpasso.',
    scenario_transfer: 'extraurbana a 2 corsie',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-08',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada a 3 corsie per senso di marcia in autostrada, viaggiare costantemente nella corsia centrale quando la destra è libera è una violazione.',
    risposta_corretta: true,
    spiegazione:
      'Occupare inutilmente la centrale viola l\u2019obbligo di tenere la destra.',
    scenario_transfer: 'autostrada a 3 corsie',
    livello_difficolta: 3,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-09',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uno scooter in città deve tenere la destra come un\u2019auto.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019obbligo dell\u2019art. 143 non fa eccezioni di categoria.',
    scenario_transfer: 'scooter in città',
    livello_difficolta: 1,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C002-10',
    concetto_codice: 'ARG09-C002',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente termina un sorpasso in autostrada e rientra subito sulla corsia destra. Sta applicando correttamente l\u2019art. 143.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: le corsie a sinistra vanno abbandonate appena completato il sorpasso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },

  // ========== ARG09-C003 — Uso delle corsie ==========
  {
    codice: 'QUIZ-ARG09-C003-01',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Fuori dai centri abitati la corsia di marcia normale è quella più a destra.',
    risposta_corretta: true,
    spiegazione:
      'Art. 143: marcia ordinaria a destra, sinistra per sorpasso.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-02',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo aver sorpassato occorre rientrare sulla corsia di destra appena possibile.',
    risposta_corretta: true,
    spiegazione:
      'Principio di riapertura delle corsie di sinistra al flusso veloce.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-03',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La corsia centrale in autostrada è destinata alla marcia ordinaria.',
    risposta_corretta: false,
    spiegazione:
      'La marcia ordinaria è la più a destra; la centrale è usata in sorpasso/flusso denso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-04',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può viaggiare sulla corsia di sinistra, ovvero la corsia di marcia normale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): la frase non "definisce" la corsia di marcia normale. La corsia di marcia normale è la DESTRA, non la sinistra.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-05',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente non è tenuto a non restare sulla corsia di sinistra dopo aver completato un sorpasso.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione): "non tenuto a non restare" = libero di restare. Falso: va abbandonata appena possibile (art. 143).',
    pattern_trappola: 'P02',
    livello_difficolta: 5,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-06',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può rimanere indefinitamente sulla corsia di sinistra se ritiene di procedere a velocità sostenuta.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): rimanere "indefinitamente" a sinistra è sempre violazione (art. 143).',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-07',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada a 3 corsie, un\u2019auto che viaggia a 130 km/h sulla corsia di sinistra impedendo i rientri a destra deve comunque cedere la corsia al veicolo più veloce che arriva da dietro.',
    risposta_corretta: true,
    spiegazione:
      'La corsia di sinistra deve restare libera per il sorpasso del più veloce.',
    scenario_transfer: 'autostrada congestionata a 3 corsie',
    livello_difficolta: 3,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-08',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Nei centri abitati, con corsie riservate ai bus, un\u2019autovettura può utilizzarle per sorpassare in caso di bus fermo.',
    risposta_corretta: false,
    spiegazione:
      'Le corsie bus sono riservate: divieto di utilizzo salvo eccezioni specifiche.',
    scenario_transfer: 'corsia bus urbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-09',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada con traffico molto rallentato, è consentito restare nella corsia centrale mantenendo il passo del flusso.',
    risposta_corretta: true,
    spiegazione:
      'Nel traffico denso i cambi frequenti di corsia aumentano il rischio: la regola del rientro cede al principio di prudenza.',
    scenario_transfer: 'autostrada in coda densa',
    livello_difficolta: 4,
    articolo_cds: 'Art. 143 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C003-10',
    concetto_codice: 'ARG09-C003',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente in extraurbana, fuori centri abitati, dopo aver sorpassato rientra nella corsia di destra e mantiene quella posizione. Ha applicato correttamente l\u2019art. 143.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola del rientro.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 143 CdS',
  },

  // ========== ARG09-C004 — Cambio direzione e corsia ==========
  {
    codice: 'QUIZ-ARG09-C004-01',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Prima di cambiare direzione o corsia, il conducente deve accertarsi di poterlo fare senza pericolo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 154: controllo + segnalazione preventiva.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-02',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La manovra di cambio direzione deve essere segnalata con sufficiente anticipo tramite gli indicatori di direzione.',
    risposta_corretta: true,
    spiegazione:
      'Anticipo + durata + cessazione sono i tre momenti della segnalazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-03',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La segnalazione con gli indicatori di direzione è facoltativa per manovre brevi.',
    risposta_corretta: false,
    spiegazione:
      'Obbligatoria per ogni cambio di direzione o corsia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-04',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può cambiare corsia senza segnalare purché verifichi di non disturbare nessuno.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): "può non segnalare" è falso. DEVE segnalare.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-05',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Gli indicatori di direzione devono essere usati liberamente dal conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" è red flag. L\u2019uso è normato (anticipo, durata, cessazione).',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-06',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'La manovra di cambio corsia è consentita senza particolari accertamenti se preceduta dall\u2019accensione delle frecce.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 (passivo/agente cancellato) + P18: la freccia non sostituisce il dovere di accertarsi. La segnalazione NON attribuisce la precedenza.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-07',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, cambiare corsia all\u2019ultimo istante prima di un\u2019uscita senza anticipo è una violazione.',
    risposta_corretta: true,
    spiegazione:
      'Manca l\u2019anticipo della segnalazione richiesto dall\u2019art. 154.',
    scenario_transfer: 'manovra in prossimità uscita autostrada',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-08',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uno scooterista deve segnalare il cambio di corsia anche quando la strada è libera.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019obbligo è oggettivo, non dipende dalla presenza di altri.',
    scenario_transfer: 'scooter su strada libera',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-09',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uscendo da un parcheggio in retromarcia sulla carreggiata, il conducente deve segnalare la manovra.',
    risposta_corretta: true,
    spiegazione:
      'Ogni manovra che muta la traiettoria va segnalata (art. 154).',
    scenario_transfer: 'uscita dal parcheggio',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C004-10',
    concetto_codice: 'ARG09-C004',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'In autostrada un conducente accende la freccia destra, controlla lo specchio e l\u2019angolo cieco, poi rientra. Ha applicato correttamente l\u2019art. 154.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere il ciclo completo: segnalazione + accertamento + manovra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },

  // ========== ARG09-C005 — Svolta a destra ==========
  {
    codice: 'QUIZ-ARG09-C005-01',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per svoltare a destra il conducente deve preventivamente accostarsi al margine destro della carreggiata.',
    risposta_corretta: true,
    spiegazione:
      'Art. 154: accosto al margine destro per minimizzare il taglio di corsia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-02',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La svolta a destra si compie con il minimo ingombro possibile.',
    risposta_corretta: true,
    spiegazione:
      'Minimo ingombro = non invadere le corsie adiacenti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-03',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per svoltare a destra è consentito preventivamente spostarsi verso il centro della carreggiata.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: ci si accosta al margine destro.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-04',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per svoltare a destra il conducente può portarsi verso la mezzeria per avere maggiore raggio di curva.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve) + P18: è la manovra per la svolta a SINISTRA, non a destra.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-05',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Durante la svolta a destra il conducente non è tenuto a non spostarsi verso la mezzeria.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione): "non tenuto a non spostarsi verso la mezzeria" = libero di spostarsi a sinistra. Falso: nella svolta a destra ci si ACCOSTA al margine destro, non ci si sposta verso la mezzeria.',
    pattern_trappola: 'P02',
    livello_difficolta: 5,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-06',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per svoltare a destra è sempre obbligatorio cedere la precedenza ai veicoli provenienti dal senso opposto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 (verità parziale fuori contesto): la regola della precedenza al senso opposto è della svolta a SINISTRA, non a destra.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-07',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Svoltando a destra in una strada urbana con ciclabile sul lato destro, il conducente deve dare la precedenza al ciclista che procede dritto.',
    risposta_corretta: true,
    spiegazione:
      'Il ciclista sulla ciclabile ha priorità sul veicolo che svolta.',
    scenario_transfer: 'svolta a destra + ciclabile',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-08',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una svolta a destra con semaforo verde, il conducente deve comunque dare la precedenza ai pedoni in attraversamento sul ramo di destinazione.',
    risposta_corretta: true,
    spiegazione:
      'Il verde non cancella la precedenza ai pedoni.',
    scenario_transfer: 'svolta a destra + pedoni sul ramo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-09',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un camion che svolta a destra in un incrocio urbano stretto può allargarsi temporaneamente verso sinistra per completare la manovra.',
    risposta_corretta: true,
    spiegazione:
      'Mezzi lunghi devono poter allargarsi (con frecce), pur dovendo evitare ciclisti e pedoni sul "cono cieco".',
    scenario_transfer: 'camion in manovra stretta',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C005-10',
    concetto_codice: 'ARG09-C005',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente che vuole svoltare a destra in un incrocio urbano si accosta al margine destro della propria corsia in anticipo. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: accosto + minimo ingombro.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },

  // ========== ARG09-C006 — Svolta a sinistra ==========
  {
    codice: 'QUIZ-ARG09-C006-01',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per svoltare a sinistra il conducente deve portarsi in prossimità della mezzeria.',
    risposta_corretta: true,
    spiegazione:
      'Art. 154: preposizionamento presso l\u2019asse mediano.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-02',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Svoltando a sinistra il conducente deve dare la precedenza ai veicoli che provengono dal senso opposto.',
    risposta_corretta: true,
    spiegazione:
      'Obbligo fondamentale della svolta a sinistra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-03',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La svolta a sinistra si esegue lasciando il centro dell\u2019incrocio sulla propria destra.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: il centro dell\u2019incrocio va lasciato sulla propria SINISTRA.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-04',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Svoltando a sinistra, il conducente ha la precedenza sui veicoli provenienti dal senso opposto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): deve DARE la precedenza, non averla.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-05',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per svoltare a sinistra il conducente può preventivamente accostarsi al margine destro.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve) + P18: quella è la preparazione della svolta a destra. A sinistra va alla mezzeria.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-06',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con il semaforo verde il conducente che svolta a sinistra può svoltare senza dare la precedenza al senso opposto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione nascosta): manca la clausola "salvo freccia verde direzionale". Col solo verde circolare, la precedenza al senso opposto resta.',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-07',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio extraurbano senza semaforo, svoltando a sinistra va data la precedenza sia al senso opposto sia ai veicoli che provengono dalla destra del ramo di destinazione.',
    risposta_corretta: true,
    spiegazione:
      'Somma delle regole: opposto + destra = priorità multiple.',
    scenario_transfer: 'incrocio extraurbano senza semaforo',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-08',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Svoltando a sinistra da una strada a senso unico su un\u2019altra strada a senso unico, il conducente può accostarsi al margine sinistro.',
    risposta_corretta: true,
    spiegazione:
      'In strada a senso unico ci si preposizione al margine sinistro per la svolta a sinistra.',
    scenario_transfer: 'senso unico in svolta a sinistra',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-09',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con freccia verde direzionale a sinistra accesa, il conducente svolta senza dover dare la precedenza ai veicoli frontali.',
    risposta_corretta: true,
    spiegazione:
      'La freccia direzionale a sinistra blocca il flusso opposto e autorizza la manovra.',
    scenario_transfer: 'freccia direzionale verde',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C006-10',
    concetto_codice: 'ARG09-C006',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'A un incrocio con solo verde circolare, un conducente che deve svoltare a sinistra resta fermo in prossimità della mezzeria fino a quando il senso opposto si libera, poi svolta. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola completa: preposizionamento mezzeria + precedenza senso opposto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },

  // ========== ARG09-C007 — Retromarcia ==========
  {
    codice: 'QUIZ-ARG09-C007-01',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La retromarcia è consentita solo per brevissimi tratti utili al parcheggio, all\u2019inversione o alla manovra.',
    risposta_corretta: true,
    spiegazione:
      'Art. 154: manovra straordinaria.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-02',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La retromarcia è sempre vietata in autostrada e sulle strade extraurbane principali.',
    risposta_corretta: true,
    spiegazione:
      'Divieto assoluto; chi sbaglia uscita esce a quella successiva.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-03',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In autostrada è ammessa la retromarcia per rientrare verso l\u2019uscita mancata.',
    risposta_corretta: false,
    spiegazione:
      'Mai: l\u2019unica opzione è uscire alla successiva.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-04',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può sempre effettuare la retromarcia se necessaria al suo percorso.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P04: "può sempre" nasconde il divieto in autostrada/extraurbana principale.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-05',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'La retromarcia in autostrada è consentita solo nella corsia di emergenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione inventata): non esiste questa eccezione. Il divieto è totale.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-06',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'La retromarcia è consentita liberamente nelle strade urbane per esigenze di manovra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" è red flag. È consentita solo per tratti brevissimi e manovre specifiche.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-07',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un raccordo autostradale classificato come extraurbana principale, la retromarcia è vietata come in autostrada.',
    risposta_corretta: true,
    spiegazione:
      'Il divieto riguarda autostrade ed extraurbane principali, a prescindere dal nome.',
    scenario_transfer: 'raccordo classificato extraurbana principale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-08',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un vicolo urbano cieco, la retromarcia per uscirne è consentita.',
    risposta_corretta: true,
    spiegazione:
      'Brevissimo tratto per manovra: rientra nell\u2019eccezione ammessa.',
    scenario_transfer: 'vicolo cieco urbano',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-09',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Percorrere 50 metri in retromarcia su una strada extraurbana secondaria per tornare a un incrocio mancato è consentito.',
    risposta_corretta: false,
    spiegazione:
      '50 metri non è un "brevissimo tratto" per manovra: è guida in retromarcia, non consentita.',
    scenario_transfer: 'retromarcia lunga extraurbana secondaria',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C007-10',
    concetto_codice: 'ARG09-C007',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente in autostrada si accorge di aver superato l\u2019uscita, prosegue fino alla successiva e rientra. Ha rispettato il CdS.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: in autostrada mai retromarcia, uscire alla successiva.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 176 CdS',
  },

  // ========== ARG09-C008 — Rotatorie ==========
  {
    codice: 'QUIZ-ARG09-C008-01',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nelle rotatorie con segnale di "dare precedenza" all\u2019ingresso, chi si immette deve cedere il passo a chi circola nell\u2019anello.',
    risposta_corretta: true,
    spiegazione:
      'Modello "alla francese" delle rotatorie moderne.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-02',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In una rotatoria senza segnale di dare precedenza si applica la regola generale della precedenza a destra.',
    risposta_corretta: true,
    spiegazione:
      'Rotatoria "all\u2019italiana", oggi rara: chi è dentro cede a chi si immette da destra.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-03',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In rotatoria con dare precedenza all\u2019ingresso, il conducente che si immette ha la precedenza su chi è già nell\u2019anello.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: deve cedere il passo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-04',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'In rotatoria moderna il conducente che si immette ha la precedenza sui veicoli già in rotatoria.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): l\u2019inversione classica. Chi si immette DEVE DARE la precedenza a chi è dentro.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-05',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nelle rotatorie la segnalazione con gli indicatori di direzione è facoltativa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente) + P04: le frecce restano obbligatorie in uscita.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-06',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni rotatoria senza segnale, chi entra ha la precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P06: "in ogni ... chi entra" è falso. Senza segnale vale la precedenza a destra.',
    pattern_trappola: 'P06',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-07',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Nelle rotatorie a più corsie è buona norma segnalare con la freccia sinistra la permanenza nell\u2019anello e con la destra l\u2019uscita.',
    risposta_corretta: true,
    spiegazione:
      'Convenzione operativa per chiarire la propria intenzione agli altri.',
    scenario_transfer: 'rotatoria a 2 corsie',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-08',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente che vuole uscire dalla rotatoria deve accendere la freccia destra prima dell\u2019uscita scelta.',
    risposta_corretta: true,
    spiegazione:
      'Segnala l\u2019uscita per liberare correttamente l\u2019anello.',
    scenario_transfer: 'uscita da rotatoria',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-09',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una rotatoria urbana congestionata è ammesso fermarsi all\u2019interno dell\u2019anello pur di non intralciare altri.',
    risposta_corretta: false,
    spiegazione:
      'Non si deve mai impegnare una rotatoria se non se ne può uscire: equivalente all\u2019incrocio ingombro.',
    scenario_transfer: 'rotatoria congestionata',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C008-10',
    concetto_codice: 'ARG09-C008',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente, arrivato a una rotatoria moderna, si ferma all\u2019ingresso e lascia passare i veicoli già nell\u2019anello prima di immettersi. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola delle rotatorie moderne.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG09-C009 — Pedoni sulle strisce ==========
  {
    codice: 'QUIZ-ARG09-C009-01',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve fermarsi per consentire l\u2019attraversamento ai pedoni sulle strisce pedonali.',
    risposta_corretta: true,
    spiegazione:
      'Art. 191: obbligo anche verso pedoni che stanno per attraversare con evidente intenzione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-02',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo verso i pedoni sulle strisce vale anche per chi sta iniziando ad attraversare con evidente intenzione.',
    risposta_corretta: true,
    spiegazione:
      'Non solo pedoni già sulle strisce: anche quelli in procinto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-03',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di cedere il passo ai pedoni sulle strisce esiste solo di giorno.',
    risposta_corretta: false,
    spiegazione:
      'Vale anche di notte.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-04',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può dare la precedenza ai pedoni sulle strisce.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): "può dare" è facoltativo. DEVE dare la precedenza.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-05',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di cedere il passo non sussiste se il pedone è ancora sul marciapiede ma pronto ad attraversare.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione inventata) + F01: l\u2019art. 191 esplicita "o stiano iniziando ad attraversare con evidente intenzione".',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-06',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ai pedoni che attraversano sulle strisce è concessa la precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 (passivo/agente cancellato): "è concessa" nasconde il dovere. Il pedone HA la precedenza, non "gli viene concessa".',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-07',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Sotto la pioggia, davanti a un pedone in procinto di attraversare sulle strisce, il conducente deve comunque cedere il passo.',
    risposta_corretta: true,
    spiegazione:
      'La pioggia non esonera dall\u2019art. 191.',
    scenario_transfer: 'pioggia + strisce',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-08',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un motociclista in città deve dare la precedenza ai pedoni sulle strisce come un automobilista.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 191 non fa eccezioni di categoria.',
    scenario_transfer: 'motociclista in città',
    livello_difficolta: 1,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-09',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se i pedoni attraversano fuori dalle strisce, il conducente non ha più alcun obbligo verso di loro.',
    risposta_corretta: false,
    spiegazione:
      'Deve comunque evitare di investirli (art. 140, 191); la priorità sulle strisce è formale, ma il dovere di prudenza resta.',
    scenario_transfer: 'attraversamento fuori strisce',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C009-10',
    concetto_codice: 'ARG09-C009',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente vede una persona anziana col bastone avvicinarsi al bordo delle strisce. Rallenta e si ferma. Sta applicando correttamente l\u2019art. 191.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: anche chi sta INIZIANDO ad attraversare ha la precedenza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },

  // ========== ARG09-C010 — Non impegnare incrocio ingombro ==========
  {
    codice: 'QUIZ-ARG09-C010-01',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I conducenti non devono impegnare un incrocio se prevedibilmente saranno costretti a fermarvisi bloccandolo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 145: principio del "non chiudere l\u2019incrocio".',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-02',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di impegnare un incrocio ingombro vale anche con semaforo verde.',
    risposta_corretta: true,
    spiegazione:
      'Il verde è autorizzazione condizionata.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-03',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con semaforo verde il conducente può comunque entrare in un incrocio bloccato.',
    risposta_corretta: false,
    spiegazione:
      'No: il divieto di ingombro prevale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-04',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può impegnare un incrocio anche bloccato, purché lo attraversi lentamente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve) + P12: "può ... lentamente" è falso. Divieto assoluto quando il deflusso non è garantito.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-05',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'In un incrocio ingombro il conducente non è obbligato a non impegnarlo quando il semaforo è verde.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P02 (doppia negazione): "non obbligato a non impegnarlo" = libero di farlo. Falso.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-06',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di impegnare un incrocio ingombro vale per tutti i conducenti, ovvero solo per quelli diretti verso il centro.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): la frase introduce un\u2019alternativa falsa. Vale per tutti, senza restrizioni geografiche.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-07',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Davanti a un passaggio a livello con barriere ancora alzate ma traffico bloccato oltre, il conducente non deve impegnare il passaggio se non può uscirne.',
    risposta_corretta: true,
    spiegazione:
      'Stessa logica: mai bloccare un incrocio o un passaggio.',
    scenario_transfer: 'passaggio a livello',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-08',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un\u2019area di cantiere temporanea, se non è garantito il deflusso oltre il cantiere, il conducente deve attendere prima di entrarvi.',
    risposta_corretta: true,
    spiegazione:
      'Il principio generale del "non bloccare" vale per qualunque restringimento.',
    scenario_transfer: 'cantiere stradale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-09',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Nelle ore di punta in centro, fermarsi dentro un incrocio per "far passare il verde" è sanzionabile.',
    risposta_corretta: true,
    spiegazione:
      'Gli incroci non sono aree di attesa: art. 145.',
    scenario_transfer: 'ora di punta urbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C010-10',
    concetto_codice: 'ARG09-C010',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente vede il semaforo verde ma osserva che il traffico oltre l\u2019incrocio è fermo. Si arresta prima della linea. Agisce correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola del "non blocca".',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG09-C011 — Veicoli di emergenza ==========
  {
    codice: 'QUIZ-ARG09-C011-01',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Alla vista o al suono di un veicolo di emergenza in servizio, il conducente deve lasciare libera la strada.',
    risposta_corretta: true,
    spiegazione:
      'Art. 177: obbligo di facilitare il passaggio.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-02',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale distintivo di un veicolo di emergenza è dato da sirena + lampeggianti contemporaneamente.',
    risposta_corretta: true,
    spiegazione:
      'I due dispositivi insieme identificano lo stato di servizio di emergenza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-03',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un\u2019ambulanza con solo lampeggianti accesi, senza sirena, è comunque considerata in servizio di emergenza attivo con tutti i privilegi.',
    risposta_corretta: false,
    spiegazione:
      'Servono entrambi; con soli lampeggianti è in trasferimento/rientro, non in emergenza.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-04',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Davanti a un veicolo di emergenza con sirena, il conducente può scegliere di farsi sorpassare o no.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): DEVE lasciare libera la strada.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-05',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un conducente è tenuto a non non facilitare il passaggio di un veicolo di soccorso.',
    risposta_corretta: true,
    spiegazione:
      'Hai visto P02 (doppia negazione): "non non facilitare" = facilitare. Corretto: sì, è tenuto a facilitare.',
    pattern_trappola: 'P02',
    livello_difficolta: 4,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-06',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un veicolo di emergenza in servizio d\u2019istituto è liberamente esentato dal rispetto dei semafori.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" è red flag. L\u2019esenzione esiste ma è subordinata alla massima prudenza e alla responsabilità del conducente del mezzo.',
    pattern_trappola: 'P12',
    livello_difficolta: 4,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-07',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada con corsia di emergenza libera, il conducente può spostarsi sulla destra per facilitare il passaggio dell\u2019ambulanza.',
    risposta_corretta: true,
    spiegazione:
      'Facilitare il passaggio include spostarsi al margine per consentire il sorpasso.',
    scenario_transfer: 'autostrada + ambulanza',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-08',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada in coda, i conducenti devono formare il "corridoio di soccorso" tra le corsie estreme.',
    risposta_corretta: true,
    spiegazione:
      'Best practice normata: auto a destra si accostano a destra, auto a sinistra si accostano a sinistra, creando un varco centrale.',
    scenario_transfer: 'corridoio di soccorso in coda',
    livello_difficolta: 4,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-09',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un\u2019ambulanza in emergenza è alle spalle mentre si è fermi al semaforo rosso, si può impegnare leggermente l\u2019incrocio per lasciarla passare.',
    risposta_corretta: true,
    spiegazione:
      'Il dovere di facilitare il passaggio prevale, con la massima prudenza.',
    scenario_transfer: 'ambulanza dietro a semaforo rosso',
    livello_difficolta: 4,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C011-10',
    concetto_codice: 'ARG09-C011',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente sente la sirena di una volante della polizia dietro di sé e, appena possibile, si accosta a destra per farla passare. Agisce correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: al segnale acustico, liberare il passo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },

  // ========== ARG09-C012 — Indicatori di direzione ==========
  {
    codice: 'QUIZ-ARG09-C012-01',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli indicatori di direzione vanno azionati con sufficiente anticipo rispetto alla manovra.',
    risposta_corretta: true,
    spiegazione:
      'Art. 154: anticipo + durata + cessazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-02',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli indicatori di direzione vanno mantenuti attivi per tutta la durata della manovra.',
    risposta_corretta: true,
    spiegazione:
      'Vanno spenti solo a manovra completata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-03',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli indicatori di direzione sostituiscono l\u2019obbligo di controllare la strada prima della manovra.',
    risposta_corretta: false,
    spiegazione:
      'Segnalare non esime dal controllo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-04',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019accensione degli indicatori di direzione attribuisce al conducente la precedenza sul cambio di corsia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 (passivo/agente cancellato) + P18: la freccia SEGNALA, non ATTRIBUISCE precedenza.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-05',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può usare gli indicatori di direzione liberamente, anche senza una manovra reale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): uso scorretto delle frecce confonde e crea rischio.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-06',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo la manovra, le frecce devono cessare immediatamente, ovvero entro almeno 30 secondi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): l\u2019ovvero introduce un\u2019alternativa falsa. "Immediatamente" e "30 secondi" non sono equivalenti.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-07',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Entrando in autostrada, va azionata la freccia sinistra per segnalare l\u2019immissione nella corsia principale.',
    risposta_corretta: true,
    spiegazione:
      'Manovra di immissione = cambio di corsia = frecce obbligatorie.',
    scenario_transfer: 'immissione in autostrada',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-08',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uscendo dall\u2019autostrada, va azionata la freccia destra prima di impegnare la corsia di decelerazione.',
    risposta_corretta: true,
    spiegazione:
      'Segnalare in anticipo per avvertire chi è dietro.',
    scenario_transfer: 'uscita autostrada',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-09',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In rotatoria, la freccia destra prima dell\u2019uscita è facoltativa se la rotatoria è piccola.',
    risposta_corretta: false,
    spiegazione:
      'È obbligatoria a prescindere dalle dimensioni.',
    scenario_transfer: 'rotatoria piccola',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C012-10',
    concetto_codice: 'ARG09-C012',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente cambia corsia in autostrada dopo aver acceso le frecce e aver verificato l\u2019angolo cieco, poi spegne le frecce. Ha applicato correttamente l\u2019art. 154.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere il ciclo completo segnalare-verificare-manovrare-spegnere.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },

  // ========== ARG09-C013 — Clacson in centri abitati ==========
  {
    codice: 'QUIZ-ARG09-C013-01',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nei centri abitati è vietato l\u2019uso dei dispositivi di segnalazione acustica salvo concreto pericolo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 156: divieto generale con eccezione di pericolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-02',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019uso del clacson in centro abitato è ammesso quando serve a evitare un incidente.',
    risposta_corretta: true,
    spiegazione:
      'È l\u2019unica eccezione al divieto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-03',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In centro abitato il clacson può essere usato per esprimere fretta agli altri conducenti.',
    risposta_corretta: false,
    spiegazione:
      'Uso non consentito: non è una segnalazione di pericolo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-04',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nei centri abitati il conducente può liberamente utilizzare il clacson per segnalare la propria presenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "liberamente" è red flag. In centro abitato il clacson è vietato salvo pericolo.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-05',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto del clacson in centri abitati non prevede mai eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11: manca l\u2019eccezione "concreto pericolo".',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-06',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nei centri abitati, ovvero nelle sole strade residenziali, è vietato l\u2019uso del clacson.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): introduce un\u2019equivalenza falsa. "Centro abitato" include molto più delle sole strade residenziali.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-07',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Fuori centri abitati il clacson può essere usato per segnalare la propria presenza in una curva cieca.',
    risposta_corretta: true,
    spiegazione:
      'Fuori centri abitati il clacson è permesso per segnalazione di presenza in curve cieche, dossi, sorpassi.',
    scenario_transfer: 'curva cieca extraurbana',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-08',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte nei centri abitati il clacson va sostituito con brevi lampeggi dei proiettori per le segnalazioni non urgenti.',
    risposta_corretta: true,
    spiegazione:
      'Art. 156: di notte si segnala visivamente, non acusticamente, in centro abitato.',
    scenario_transfer: 'notte in centro abitato',
    livello_difficolta: 4,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-09',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un motociclista in centro abitato può usare liberamente il clacson perché il suo è meno rumoroso di quello di un\u2019auto.',
    risposta_corretta: false,
    spiegazione:
      'Non ci sono deroghe per tipo di veicolo.',
    scenario_transfer: 'moto in centro abitato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 156 CdS',
  },
  {
    codice: 'QUIZ-ARG09-C013-10',
    concetto_codice: 'ARG09-C013',
    argomento_numero: 9,
    fase_rotta: 'origina',
    testo_domanda:
      'In un centro abitato, un bambino sta per scendere dal marciapiede senza vedere l\u2019auto in arrivo; il conducente suona brevemente il clacson per avvertirlo. Non ha violato l\u2019art. 156.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere l\u2019eccezione di concreto pericolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 156 CdS',
  },
] as const
