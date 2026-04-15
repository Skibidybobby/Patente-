import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per argomento 10 — Esempi di precedenza.
// 10 concetti × 10 item = 100 item.
// Pattern focalizzati: P05 (precede/segue), P06 (ha/deve dare),
// P03 (obbligo/divieto), P13 (coppie quasi-sinonime), P11 (eccezioni).

export const ARG10_QUIZ: readonly QuizItem[] = [
  // ========== ARG10-C001 — Precedenza a destra ==========
  {
    codice: 'QUIZ-ARG10-C001-01',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In un incrocio non segnalato il conducente deve dare la precedenza ai veicoli provenienti dalla sua destra.',
    risposta_corretta: true,
    spiegazione:
      'Art. 145: regola generale quando manca altra segnaletica.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-02',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La regola della precedenza a destra si applica solo in assenza di segnaletica disciplinante l\u2019incrocio.',
    risposta_corretta: true,
    spiegazione:
      'È una regola residuale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-03',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La precedenza a destra vale anche con STOP sulla propria strada.',
    risposta_corretta: false,
    spiegazione:
      'Lo STOP è segnale che disciplina l\u2019incrocio: la regola residuale non si applica più.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-04',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'In un incrocio non segnalato il conducente ha la precedenza sui veicoli provenienti dalla sua destra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): è l\u2019inversione classica. DEVE DARE la precedenza a destra, non averla.',
    pattern_trappola: 'P06',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-05',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'In un incrocio non segnalato è vietato dare la precedenza ai veicoli provenienti dalla destra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): è esattamente il contrario, è OBBLIGATORIO darla.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-06',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola della precedenza a destra vale in ogni caso, anche quando l\u2019incrocio è disciplinato da un semaforo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11 (eccezione): il semaforo sovrascrive la regola della destra.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-07',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un parcheggio privato aperto al pubblico con incrocio tra corsie, si applica la regola della precedenza a destra in assenza di segnaletica.',
    risposta_corretta: true,
    spiegazione:
      'Il CdS si applica anche alle aree private aperte al pubblico.',
    scenario_transfer: 'parcheggio aperto al pubblico',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-08',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una piccola strada di quartiere con incroci senza segnali, è regola tra ciclisti e automobilisti rispettare la precedenza a destra.',
    risposta_corretta: true,
    spiegazione:
      'La regola vale tra tutti gli utenti a motore e non.',
    scenario_transfer: 'incrocio tra ciclisti e auto',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-09',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio extraurbano non segnalato tra due strade di pari importanza, entrambi i conducenti devono fermarsi per valutare la reciproca posizione.',
    risposta_corretta: true,
    spiegazione:
      'Prudenza operativa: nessuno ha "la precedenza" chiara quando entrambi hanno l\u2019altro a destra (incrocio a croce).',
    scenario_transfer: 'incrocio extraurbano',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C001-10',
    concetto_codice: 'ARG10-C001',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente arriva a un incrocio di strade residenziali senza alcun segnale: vede un\u2019auto arrivare alla sua destra e si ferma per farla passare. Ha applicato correttamente la regola generale.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola residuale della destra.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C002 — STOP ==========
  {
    codice: 'QUIZ-ARG10-C002-01',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al segnale di STOP il conducente deve arrestare completamente il veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Arresto, non solo rallentamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-02',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al segnale di STOP l\u2019arresto si compie in corrispondenza della striscia di arresto.',
    risposta_corretta: true,
    spiegazione:
      'La striscia di arresto è il punto di fermo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-03',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al segnale di STOP è sufficiente rallentare fino al passo d\u2019uomo se non ci sono altri veicoli.',
    risposta_corretta: false,
    spiegazione:
      'STOP impone arresto effettivo, anche se la strada sembra libera.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-04',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al segnale di STOP il conducente può decidere di arrestare il veicolo oppure di rallentare se la strada è libera.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve) + P12: arresto obbligatorio, non alternativa.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-05',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al segnale di STOP è vietato arrestare completamente il veicolo per non bloccare il traffico.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): è OBBLIGATORIO arrestarsi.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-06',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale di STOP equivale al segnale di "dare precedenza".',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): STOP = arresto obbligatorio; "dare precedenza" = cedere il passo senza obbligo di arresto.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-07',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte, su strada deserta, il segnale di STOP impone comunque l\u2019arresto completo.',
    risposta_corretta: true,
    spiegazione:
      'Nessuna eccezione per orario o traffico.',
    scenario_transfer: 'STOP di notte strada deserta',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-08',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo l\u2019arresto allo STOP, se la visibilità è bloccata da un\u2019auto parcheggiata, il conducente deve avanzare lentamente per ottenere la visuale prima di immettersi.',
    risposta_corretta: true,
    spiegazione:
      'Arresto iniziale + avanzamento prudente per visibilità = condotta corretta.',
    scenario_transfer: 'STOP con visuale ostruita',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-09',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uno STOP + giallo lampeggiante al semaforo obbliga all\u2019arresto come se il semaforo fosse del tutto assente.',
    risposta_corretta: true,
    spiegazione:
      'Giallo lampeggiante disattiva il semaforo: prevale il segnale verticale STOP.',
    scenario_transfer: 'STOP + giallo lampeggiante',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C002-10',
    concetto_codice: 'ARG10-C002',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente allo STOP si arresta completamente, guarda a destra e sinistra, vede nessuno e riparte. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: arresto, osservazione, ripartenza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C003 — Dare precedenza ==========
  {
    codice: 'QUIZ-ARG10-C003-01',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al segnale di "dare precedenza" il conducente deve cedere il passo ai veicoli che percorrono la strada principale.',
    risposta_corretta: true,
    spiegazione:
      'Cedere il passo: fermarsi solo se necessario.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-02',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al "dare precedenza" il conducente si deve fermare solo se la situazione del traffico lo richiede.',
    risposta_corretta: true,
    spiegazione:
      'A differenza dello STOP, l\u2019arresto non è obbligatorio se la strada è libera.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-03',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al segnale di "dare precedenza" il conducente deve sempre arrestarsi completamente.',
    risposta_corretta: false,
    spiegazione:
      'Quello è lo STOP. Il "dare precedenza" non obbliga all\u2019arresto.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-04',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al "dare precedenza" il conducente ha diritto di precedenza sui veicoli della strada principale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): è il contrario. Chi ha il triangolo DEVE cedere il passo.',
    pattern_trappola: 'P06',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-05',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale di "dare precedenza" impone sempre di fermarsi prima dell\u2019incrocio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): confonde "dare precedenza" con STOP. L\u2019arresto è obbligatorio solo se la situazione lo richiede.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-06',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al segnale di "dare precedenza" è vietato proseguire se non c\u2019è alcun veicolo sulla strada principale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): è consentito proseguire senza arrestarsi se la strada è libera.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-07',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una svolta a destra immettendosi in una strada principale con triangolo "dare precedenza", se sopraggiunge un\u2019auto veloce, il conducente deve fermarsi prima della linea di arresto tratteggiata.',
    risposta_corretta: true,
    spiegazione:
      'La linea tratteggiata è la linea di arresto del "dare precedenza".',
    scenario_transfer: 'immissione con traffico in arrivo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-08',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su rotatoria moderna il segnale di "dare precedenza" all\u2019ingresso non obbliga l\u2019arresto se l\u2019anello è completamente libero.',
    risposta_corretta: true,
    spiegazione:
      'Stesso principio del triangolo: arresto solo se necessario.',
    scenario_transfer: 'rotatoria libera',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-09',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Al "dare precedenza" in un incrocio extraurbano, l\u2019auto che ha sulla sinistra un veicolo molto lontano può proseguire senza cedere il passo.',
    risposta_corretta: true,
    spiegazione:
      'Se il traffico non richiede arresto, si prosegue.',
    scenario_transfer: 'veicolo lontano sulla principale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C003-10',
    concetto_codice: 'ARG10-C003',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente al segnale di "dare precedenza" trova la principale libera e prosegue senza fermarsi. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la differenza con lo STOP.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C004 — Denti di squalo ==========
  {
    codice: 'QUIZ-ARG10-C004-01',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I triangoli bianchi trasversali al senso di marcia (denti di squalo) indicano l\u2019obbligo di dare la precedenza.',
    risposta_corretta: true,
    spiegazione:
      'Equivalenti orizzontali del triangolo verticale.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-02',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I denti di squalo bianchi segnalano precedenza anche in assenza del segnale verticale.',
    risposta_corretta: true,
    spiegazione:
      'Sono autosufficienti: segnalano cedere il passo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-03',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I denti di squalo bianchi sono un semplice elemento decorativo al suolo.',
    risposta_corretta: false,
    spiegazione:
      'Sono segnaletica orizzontale con valore normativo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-04',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'I denti di squalo bianchi hanno lo stesso valore della linea di arresto continua dello STOP.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): denti di squalo = "dare precedenza" (tratteggiata); linea continua = STOP. Funzioni diverse.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-05',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al segnale orizzontale dei denti di squalo il conducente ha la precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): è l\u2019inversione classica. Deve cedere il passo.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-06',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Se la segnaletica orizzontale dei denti di squalo contraddice un segnale verticale di "dare precedenza", prevale la prima.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (inversione gerarchia): la segnaletica verticale prevale sull\u2019orizzontale, non il contrario.',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-07',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'All\u2019uscita di un parcheggio segnalata da denti di squalo, il conducente deve cedere il passo al flusso della strada in cui si immette.',
    risposta_corretta: true,
    spiegazione:
      'Uscita dal privato + segnale = cedere il passo.',
    scenario_transfer: 'uscita parcheggio denti di squalo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-08',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'All\u2019ingresso di una rotatoria con denti di squalo al suolo, il conducente che arriva si comporta come davanti al triangolo verticale di dare precedenza.',
    risposta_corretta: true,
    spiegazione:
      'Equivalenza funzionale orizzontale-verticale.',
    scenario_transfer: 'rotatoria con denti di squalo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-09',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Denti di squalo parzialmente cancellati dall\u2019usura non hanno alcun valore legale.',
    risposta_corretta: false,
    spiegazione:
      'Fino a quando sono riconoscibili, hanno valore normativo.',
    scenario_transfer: 'segnaletica usurata',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C004-10',
    concetto_codice: 'ARG10-C004',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente vede al suolo una fila di triangoli bianchi puntati verso di sé, trasversali alla marcia. Interpreta correttamente "dare precedenza".',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere l\u2019identificazione visiva dei denti di squalo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C005 — Rotatorie ==========
  {
    codice: 'QUIZ-ARG10-C005-01',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nelle rotatorie moderne i veicoli che si immettono devono cedere il passo a quelli che già percorrono l\u2019anello.',
    risposta_corretta: true,
    spiegazione:
      'Modello "alla francese" con segnale di dare precedenza all\u2019ingresso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-02',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In una rotatoria moderna chi è già nell\u2019anello prevale su chi entra.',
    risposta_corretta: true,
    spiegazione:
      'Flusso continuo agevolato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-03',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In ogni rotatoria il veicolo che si immette ha la precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Nelle rotatorie moderne è il contrario.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-04',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nella rotatoria moderna il veicolo nell\u2019anello deve dare la precedenza a quello che si immette.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P05 (inversione "che precede/segue" applicata a dentro/fuori anello) + P06: inversione classica.',
    pattern_trappola: 'P05',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-05',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni rotatoria, a prescindere dalla segnaletica, chi è dentro l\u2019anello ha la precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11: non è "in ogni", ma solo nelle rotatorie moderne con segnale. Le (rare) rotatorie senza segnale seguono la destra.',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-06',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nelle rotatorie moderne chi entra ha diritto di precedenza, ovvero deve cedere il passo a chi è nell\u2019anello.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): la frase presenta come equivalenti due affermazioni opposte. Solo la seconda è vera.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-07',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una rotatoria a 4 ingressi con flusso costante, un conducente che vi arriva può doversi fermare a lungo prima di potersi immettere.',
    risposta_corretta: true,
    spiegazione:
      'Conseguenza della precedenza a chi è dentro.',
    scenario_transfer: 'rotatoria a traffico intenso',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-08',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una mini-rotatoria urbana con al centro una piazzola rialzata, le regole di precedenza sono identiche a quelle delle rotatorie grandi.',
    risposta_corretta: true,
    spiegazione:
      'Dimensioni non cambiano la regola.',
    scenario_transfer: 'mini rotatoria',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-09',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una rotatoria con semaforo all\u2019ingresso, il semaforo prevale sul "dare precedenza".',
    risposta_corretta: true,
    spiegazione:
      'Semaforo > segnaletica verticale.',
    scenario_transfer: 'rotatoria semaforizzata',
    livello_difficolta: 4,
    articolo_cds: 'Art. 38 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C005-10',
    concetto_codice: 'ARG10-C005',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente si avvicina a una rotatoria con segnale "dare precedenza" all\u2019ingresso, vede un\u2019auto arrivare da sinistra nell\u2019anello, rallenta e attende. Ha applicato correttamente la norma.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola delle rotatorie moderne.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C006 — Tram e veicoli su rotaia ==========
  {
    codice: 'QUIZ-ARG10-C006-01',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve dare la precedenza ai tram e ai veicoli circolanti su rotaia, salvo diversa segnalazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 145: regola generale per i mezzi su rotaia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-02',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La precedenza al tram vale sia quando proviene da destra sia da sinistra.',
    risposta_corretta: true,
    spiegazione:
      'Non si applica la regola "destra" ordinaria: il tram ha priorità sempre.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-03',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il tram cede sempre la precedenza agli altri veicoli provenienti da destra.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: il tram ha la precedenza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-04',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al tram proveniente dalla sinistra il conducente ha diritto di precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): inversione classica. DEVE darla al tram.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-05',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola di precedenza ai tram si applica in ogni caso senza eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11: manca "salvo diversa segnalazione". Ad esempio il semaforo può dare ordine opposto.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-06',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'La precedenza ai veicoli su rotaia vale anche per i veicoli su sede tranviaria riservata.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 (coppie quasi-sinonime): "veicoli su rotaia" (tram, treni) ≠ "veicoli su sede tranviaria" (bus su corsia riservata). La norma si riferisce ai primi.',
    pattern_trappola: 'P13',
    livello_difficolta: 5,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-07',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio urbano con un tram in arrivo dalla destra, il conducente di un\u2019auto deve cedere il passo.',
    risposta_corretta: true,
    spiegazione:
      'Applicazione base della regola.',
    scenario_transfer: 'auto + tram da destra',
    livello_difficolta: 2,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-08',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio semaforizzato con verde per l\u2019auto e rosso per il tram, prevale il semaforo e l\u2019auto può passare.',
    risposta_corretta: true,
    spiegazione:
      'Il semaforo sovrascrive la regola generale dei tram.',
    scenario_transfer: 'semaforo che regola auto/tram',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-09',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente deve cedere il passo a un tram in manovra di uscita da capolinea.',
    risposta_corretta: true,
    spiegazione:
      'Anche in manovra il mezzo su rotaia ha priorità ex art. 145.',
    scenario_transfer: 'tram in uscita da capolinea',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C006-10',
    concetto_codice: 'ARG10-C006',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente approccia un incrocio urbano senza segnali e vede un tram sopraggiungere dalla sua sinistra. Rallenta e cede il passo. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: tram ha priorità da entrambi i lati.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C007 — Svolta a sinistra: senso opposto ==========
  {
    codice: 'QUIZ-ARG10-C007-01',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente che svolta a sinistra deve dare la precedenza ai veicoli provenienti dal senso opposto.',
    risposta_corretta: true,
    spiegazione:
      'Art. 154: regola fondamentale della svolta a sinistra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-02',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La precedenza va data sia ai veicoli del senso opposto che procedono dritti sia a quelli che svoltano a destra.',
    risposta_corretta: true,
    spiegazione:
      'Entrambi i flussi del senso opposto hanno priorità.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-03',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi svolta a sinistra ha la precedenza sui veicoli in arrivo dal senso opposto.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-04',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che svolta a sinistra ha la precedenza sui veicoli che provengono dal senso opposto se accende le frecce.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare) + P18: le frecce segnalano, non concedono precedenza.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-05',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato dare la precedenza al senso opposto quando si svolta a sinistra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 (obbligo/divieto): è OBBLIGATORIO darla.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-06',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che svolta a sinistra, ovvero che attraversa la corsia opposta, può proseguire se i veicoli opposti sono lontani.',
    risposta_corretta: true,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): in questo caso la definizione è accettabile (attraversare la corsia opposta è proprio ciò che fa chi svolta a sinistra). Se i veicoli sono sufficientemente lontani, proseguire è legittimo purché si dia la precedenza a quelli in transito.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-07',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio urbano senza semaforo, chi svolta a sinistra deve dare la precedenza sia al senso opposto sia ai pedoni sul ramo di destinazione.',
    risposta_corretta: true,
    spiegazione:
      'Doppio dovere di precedenza.',
    scenario_transfer: 'svolta sinistra + pedoni',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-08',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada a senso unico, in assenza di traffico opposto, la regola della precedenza al senso opposto nella svolta a sinistra non si applica.',
    risposta_corretta: true,
    spiegazione:
      'Non c\u2019è un "senso opposto" a cui dare precedenza.',
    scenario_transfer: 'senso unico',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-09',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con freccia verde direzionale a sinistra, il conducente svolta senza dover dare la precedenza ai veicoli frontali perché il loro flusso è bloccato.',
    risposta_corretta: true,
    spiegazione:
      'La freccia direzionale interrompe il traffico opposto.',
    scenario_transfer: 'freccia verde direzionale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C007-10',
    concetto_codice: 'ARG10-C007',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente fermo al centro dell\u2019incrocio in attesa che l\u2019ultima auto opposta transiti, poi svolta a sinistra. Ha applicato correttamente la regola.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: attendere il senso opposto prima di completare la svolta.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },

  // ========== ARG10-C008 — Veicoli di emergenza ==========
  {
    codice: 'QUIZ-ARG10-C008-01',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I veicoli di emergenza in servizio con lampeggiante e sirena in funzione hanno la precedenza su tutti gli altri utenti.',
    risposta_corretta: true,
    spiegazione:
      'Art. 177: dispositivi supplementari + servizio d\u2019istituto = precedenza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-02',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli altri utenti della strada devono lasciare libera la strada ai veicoli di emergenza in servizio.',
    risposta_corretta: true,
    spiegazione:
      'Dovere correlato alla precedenza del mezzo di soccorso.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-03',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un\u2019ambulanza senza sirena ma con solo lampeggianti ha comunque tutti i diritti del veicolo di emergenza in servizio.',
    risposta_corretta: false,
    spiegazione:
      'Servono entrambi i dispositivi per avere lo status di emergenza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-04',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Davanti a un veicolo di emergenza in servizio il conducente ha la facoltà di cedergli il passo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 (può/deve): DEVE cedergli il passo, non è facoltativo.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-05',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un veicolo di polizia con sirena ha la precedenza unicamente se proviene da strada principale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente) + F01: "unicamente" è red flag. La precedenza è assoluta, non dipende dal tipo di strada.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-06',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un veicolo dei vigili del fuoco in rientro in caserma, ovvero in servizio di istituto, ha la precedenza assoluta.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero giuridico = oppure): la frase equipara erroneamente "rientro in caserma" a "servizio di istituto". Il rientro senza chiamata attiva NON è servizio d\u2019istituto.',
    pattern_trappola: 'P15',
    livello_difficolta: 5,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-07',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una rotatoria, un\u2019ambulanza in servizio con sirena ha la precedenza anche sui veicoli già nell\u2019anello.',
    risposta_corretta: true,
    spiegazione:
      'Precedenza assoluta prevale sulla regola della rotatoria.',
    scenario_transfer: 'rotatoria + ambulanza',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-08',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada un veicolo dei vigili del fuoco in servizio con sirena può utilizzare la corsia di emergenza a velocità sostenuta.',
    risposta_corretta: true,
    spiegazione:
      'I mezzi di emergenza possono usare la corsia di emergenza in servizio d\u2019istituto.',
    scenario_transfer: 'autostrada + VVF',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-09',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019ambulanza senza sirena in trasferimento ordinario ha precedenza sui veicoli in coda.',
    risposta_corretta: false,
    spiegazione:
      'Senza sirena + lampeggianti non è in servizio di emergenza.',
    scenario_transfer: 'ambulanza in trasferimento',
    livello_difficolta: 3,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C008-10',
    concetto_codice: 'ARG10-C008',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente a un incrocio con verde si ferma per far passare un\u2019ambulanza con sirena proveniente da destra con rosso per sé. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la priorità assoluta del mezzo di emergenza.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },

  // ========== ARG10-C009 — Strada sterrata vs asfaltata ==========
  {
    codice: 'QUIZ-ARG10-C009-01',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi proviene da una strada senza fondo stabilizzato deve dare la precedenza ai veicoli che percorrono una strada con fondo stabilizzato.',
    risposta_corretta: true,
    spiegazione:
      'Art. 145: eccezione alla regola della destra per tipo di fondo.',
    livello_difficolta: 5,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-02',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi esce da una strada sterrata per immettersi su una strada asfaltata deve cedere il passo a chi percorre l\u2019asfaltata.',
    risposta_corretta: true,
    spiegazione:
      'Formulazione concreta dello stesso principio.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-03',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In un incrocio tra strada sterrata e strada asfaltata, la regola della destra si applica come se fossero due strade equivalenti.',
    risposta_corretta: false,
    spiegazione:
      'Il fondo stabilizzato ha priorità: prevale sempre.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-04',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Chi arriva da una strada asfaltata deve dare la precedenza a chi arriva da una strada sterrata proveniente dalla destra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P05 (inversione) + P06: è l\u2019inverso. Chi arriva dallo sterrato deve cedere il passo all\u2019asfaltato, a prescindere dalla regola della destra.',
    pattern_trappola: 'P05',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-05',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019eccezione del fondo stabilizzato vale unicamente se sulla strada sterrata è presente un segnale di dare precedenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione inventata) + F01: "unicamente" è red flag. L\u2019eccezione è automatica, non servono segnali.',
    pattern_trappola: 'P11',
    livello_difficolta: 5,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-06',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al crocevia tra strada sterrata e strada asfaltata, il conducente proveniente dall\u2019asfalto ha la precedenza, ovvero deve darla.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 (ovvero = oppure): la frase affianca due opposti come equivalenti. Solo la prima è vera.',
    pattern_trappola: 'P15',
    livello_difficolta: 5,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-07',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente di trattore che esce da una strada di campagna sterrata su una provinciale asfaltata deve dare la precedenza al flusso sulla provinciale.',
    risposta_corretta: true,
    spiegazione:
      'Applicazione tipica della regola.',
    scenario_transfer: 'trattore da campagna',
    livello_difficolta: 3,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-08',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Entrando da una strada privata non asfaltata su una strada pubblica asfaltata, il conducente deve cedere il passo anche ai ciclisti.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019obbligo vale verso tutti gli utenti della strada principale.',
    scenario_transfer: 'strada privata sterrata',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-09',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una pista in ghiaietto fa parte delle strade con fondo stabilizzato.',
    risposta_corretta: false,
    spiegazione:
      'Ghiaietto/sterrato sono senza fondo stabilizzato. Il fondo stabilizzato richiede asfalto/cemento/pavimentazione consolidata.',
    scenario_transfer: 'pista in ghiaietto',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C009-10',
    concetto_codice: 'ARG10-C009',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente su strada asfaltata prosegue senza fermarsi mentre un\u2019auto sulla sua destra esce da una strada di terra. Ha agito correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere l\u2019eccezione del fondo stabilizzato.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 145 CdS',
  },

  // ========== ARG10-C010 — Pedoni durante la svolta ==========
  {
    codice: 'QUIZ-ARG10-C010-01',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente che svolta per immettersi in un\u2019altra strada deve dare la precedenza ai pedoni che stanno attraversando la carreggiata su cui si immette.',
    risposta_corretta: true,
    spiegazione:
      'Art. 191: pedoni sulla corsia di destinazione hanno priorità.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-02',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La precedenza ai pedoni in attraversamento nel ramo di destinazione vale anche quando il conducente ha il verde semaforico.',
    risposta_corretta: true,
    spiegazione:
      'Il verde non elimina l\u2019obbligo verso i pedoni sulle strisce.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-03',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con il verde semaforico il conducente che svolta ha la precedenza sui pedoni.',
    risposta_corretta: false,
    spiegazione:
      'Non ha la precedenza sui pedoni in attraversamento.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-04',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che svolta ha diritto di precedenza sui pedoni che attraversano il ramo in cui si immette.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P06 (ha/deve dare): inversione classica. Deve darla ai pedoni.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-05',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di precedenza ai pedoni durante la svolta vale solo quando sono già sulle strisce.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P11 (eccezione inventata): vale anche per chi sta iniziando ad attraversare con evidente intenzione (art. 191).',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-06',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che svolta a destra ha un obbligo di precedenza verso i pedoni diverso dal conducente che svolta a sinistra.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 (verità parziale fuori contesto): l\u2019obbligo verso i pedoni nel ramo di destinazione è identico per entrambe le svolte.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-07',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una svolta a destra in uscita da una rotatoria, il conducente deve fermarsi per lasciar passare i pedoni sulle strisce del ramo di uscita.',
    risposta_corretta: true,
    spiegazione:
      'Pedoni in uscita rotatoria = ramo di destinazione con priorità.',
    scenario_transfer: 'uscita rotatoria + pedoni',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-08',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un camion in svolta a destra in una strada stretta deve attendere che un gruppo di bambini abbia finito di attraversare sulle strisce del ramo di destinazione.',
    risposta_corretta: true,
    spiegazione:
      'Obbligo di attesa per i pedoni sempre.',
    scenario_transfer: 'camion + bambini in attraversamento',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-09',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un motociclista che svolta a sinistra con verde semaforico può ignorare un pedone che sta attraversando sulle strisce perpendicolari al ramo di arrivo.',
    risposta_corretta: false,
    spiegazione:
      'Non può: deve dare la precedenza al pedone sulle strisce.',
    scenario_transfer: 'moto + pedone in svolta',
    livello_difficolta: 3,
    articolo_cds: 'Art. 191 CdS',
  },
  {
    codice: 'QUIZ-ARG10-C010-10',
    concetto_codice: 'ARG10-C010',
    argomento_numero: 10,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente in svolta a destra attende che due pedoni completino l\u2019attraversamento sul ramo di destinazione prima di terminare la manovra. Ha applicato correttamente l\u2019art. 191.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 191 CdS',
  },
] as const
