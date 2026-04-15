import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per argomento 8 — Distanza di sicurezza.
// 8 concetti × 10 item = 80 item.
//
// ATTENZIONE: è l'argomento con DENSITÀ TRAPPOLA MASSIMA di tutto
// l'esame. Il file esibisce volutamente varietà estrema di
// P07 (numeri quasi-giusti), P08 (scambio unità m↔s),
// P09 (permutazione reazione/frenata/arresto),
// P17 (causa-effetto invertita),
// P18 (verità parziale fuori contesto).
//
// I numeri chiave ricorrono in coppia "sbagliato → corretto" nelle
// spiegazioni delle trappole, con mnemonic.

export const ARG08_QUIZ: readonly QuizItem[] = [
  // ========== ARG08-C001 — Reazione + frenata = arresto ==========
  {
    codice: 'QUIZ-ARG08-C001-01',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo spazio di arresto è la somma dello spazio di reazione e dello spazio di frenata.',
    risposta_corretta: true,
    spiegazione:
      'Arresto = reazione (prima di frenare) + frenata (dal momento in cui si frena).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-02',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo spazio di reazione è il tratto percorso PRIMA che il conducente inizi a frenare.',
    risposta_corretta: true,
    spiegazione:
      'È lo spazio percorso durante il tempo di reazione, non di frenata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-03',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo spazio di frenata è il tratto percorso dall\u2019avvistamento dell\u2019ostacolo fino all\u2019arresto.',
    risposta_corretta: false,
    spiegazione:
      'Quella è la definizione di spazio di ARRESTO. La frenata parte dal momento in cui si inizia a frenare.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-04',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di arresto è la somma dello spazio di reazione e dello spazio di avvistamento.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P09 (permutazione reazione/frenata/arresto): ti ha sostituito "frenata" con "avvistamento". Corretto: reazione + frenata = arresto.',
    pattern_trappola: 'P09',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-05',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di frenata è il tratto percorso durante il tempo di reazione del conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P09 (permutazione): ha scambiato reazione e frenata. Lo spazio di reazione (non di frenata) è quello percorso nel tempo di reazione.',
    pattern_trappola: 'P09',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-06',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di arresto si misura in secondi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P08 (scambio unità): lo spazio di arresto si misura in METRI. I secondi misurano il tempo di reazione.',
    pattern_trappola: 'P08',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-07',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A parità di velocità, con un conducente stanco lo spazio di arresto complessivo aumenta principalmente per l\u2019aumento dello spazio di reazione.',
    risposta_corretta: true,
    spiegazione:
      'La stanchezza allunga il tempo di reazione, non modifica la fisica della frenata. Quindi cresce la componente "reazione".',
    scenario_transfer: 'conducente stanco',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-08',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su asfalto bagnato lo spazio di arresto aumenta soprattutto per l\u2019aumento dello spazio di frenata.',
    risposta_corretta: true,
    spiegazione:
      'Minore aderenza = frenata più lunga. Il tempo di reazione umano non cambia per l\u2019asfalto.',
    scenario_transfer: 'asfalto bagnato',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-09',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un\u2019autostrada di notte, con ostacolo improvviso, un conducente attento avrà lo stesso spazio di frenata ma uno spazio di reazione simile al giorno.',
    risposta_corretta: true,
    spiegazione:
      'La meccanica non cambia con la luce; il tempo di reazione è simile se il guidatore è vigile.',
    scenario_transfer: 'autostrada di notte',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C001-10',
    concetto_codice: 'ARG08-C001',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente percorre 15 metri prima di iniziare a frenare e altri 20 metri mentre rallenta fino a fermarsi. Il suo spazio di arresto è 35 metri.',
    risposta_corretta: true,
    spiegazione:
      'Arresto = reazione (15 m) + frenata (20 m) = 35 m. Lo scenario fa emergere la definizione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },

  // ========== ARG08-C002 — Regola dei 2 secondi ==========
  {
    codice: 'QUIZ-ARG08-C002-01',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La regola pratica dei 2 secondi stima la distanza di sicurezza in unità di tempo, non di metri.',
    risposta_corretta: true,
    spiegazione:
      'Si conta il tempo tra il passaggio di un riferimento fisso da parte del veicolo che precede e il proprio.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-02',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In condizioni normali di asfalto asciutto, 5 secondi sono considerati il tempo minimo prudenziale di distacco dal veicolo che precede.',
    risposta_corretta: false,
    spiegazione:
      'La soglia minima pratica è 2 secondi, non 5. In condizioni avverse può salire a 3-4 secondi, ma non si parte da 5.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-03',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La regola dei 2 secondi fissa la distanza di sicurezza a 2 metri dal veicolo che precede.',
    risposta_corretta: false,
    spiegazione:
      '2 secondi non sono 2 metri: la distanza in metri corrispondente dipende dalla velocità.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-04',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola dei 2 secondi impone di mantenere almeno 2 metri dal veicolo che precede.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P08 (scambio unità): 2 secondi ≠ 2 metri. A 100 km/h, 2 s corrispondono a circa 55 m, non 2 m. Mnemonic: "secondi, non metri".',
    pattern_trappola: 'P08',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-05',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il riferimento pratico per la distanza di sicurezza è di circa 0,5 secondi in condizioni normali.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 0,5 vs 2 s. Corretto: 2 secondi. Mnemonic: "due secondi, due parole: sono-io".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-06',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola dei 2 secondi vale sempre indipendentemente dalle condizioni del fondo stradale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente): i 2 s valgono in condizioni normali; su bagnato/ghiaccio salgono a 4-6 s.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-07',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A 100 km/h in autostrada, 2 secondi di distacco corrispondono a circa 55 metri di distanza.',
    risposta_corretta: true,
    spiegazione:
      '100 km/h ≈ 27,8 m/s; × 2 s ≈ 55 m. Conferma che secondi si convertono in metri in funzione della velocità.',
    scenario_transfer: 'autostrada a 100 km/h',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-08',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Con asfalto bagnato e scarsa visibilità è prudente portare il distacco a 3-4 secondi invece di 2.',
    risposta_corretta: true,
    spiegazione:
      'Raddoppiare la finestra di sicurezza è la prassi quando aderenza/visibilità calano.',
    scenario_transfer: 'bagnato + scarsa visibilità',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-09',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In coda ferma a un semaforo, la regola dei 2 secondi non si applica perché non c\u2019è moto relativo.',
    risposta_corretta: true,
    spiegazione:
      'Da fermi la regola temporale non ha senso; si applica la distanza minima per la ripartenza.',
    scenario_transfer: 'coda ferma a semaforo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C002-10',
    concetto_codice: 'ARG08-C002',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente conta "uno-milleuno-due-milledue" tra il passaggio di un cartello da parte dell\u2019auto che lo precede e il proprio. Ha rispettato la regola pratica del distacco.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere il metodo dei 2 secondi: si conta nel tempo, non in metri.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },

  // ========== ARG08-C003 — Spazio di frenata ~ (v/10)^2 ==========
  {
    codice: 'QUIZ-ARG08-C003-01',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo spazio di frenata cresce con il QUADRATO della velocità, non linearmente.',
    risposta_corretta: true,
    spiegazione:
      'Formula approssimata: (v/10)^2 metri su asciutto. Raddoppiare v quadruplica lo spazio di frenata.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-02',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A 50 km/h su asciutto lo spazio di frenata approssimato è di circa 25 metri.',
    risposta_corretta: true,
    spiegazione:
      '(50/10)^2 = 25 m. Formula approssimata su asfalto asciutto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-03',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A 100 km/h su asciutto lo spazio di frenata approssimato è di circa 100 metri.',
    risposta_corretta: true,
    spiegazione:
      '(100/10)^2 = 100 m. Quattro volte il valore a 50 km/h: conferma la natura quadratica.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-04',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'A 100 km/h su asciutto lo spazio di frenata approssimato è di circa 50 metri.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 50 vs 100 m. Corretto: ~100 m (formula (v/10)^2). Mnemonic: "cento cento".',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-05',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di frenata raddoppia quando la velocità raddoppia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 (causa-effetto invertita) sul rapporto: la relazione è QUADRATICA, non lineare. Raddoppiando v, lo spazio di frenata quadruplica.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-06',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di frenata dipende principalmente dai riflessi del conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 (causa-effetto invertita): i riflessi influenzano il tempo di REAZIONE, non la frenata. La frenata dipende da velocità, aderenza e impianto frenante.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-07',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su asfalto bagnato lo spazio di frenata stimato con (v/10)^2 va considerato come minimo e non come massimo.',
    risposta_corretta: true,
    spiegazione:
      'La formula vale sull\u2019asciutto; sul bagnato la realtà è peggiore (1,5-2× più lunga).',
    scenario_transfer: 'asfalto bagnato',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-08',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A 130 km/h in autostrada (asciutto) lo spazio di frenata è circa 169 metri.',
    risposta_corretta: true,
    spiegazione:
      '(130/10)^2 = 169 m. Conferma quanto la velocità autostradale pesi in modo non lineare.',
    scenario_transfer: 'autostrada a 130 km/h',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-09',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Per un\u2019auto con pneumatici usurati lo spazio di frenata stimato con (v/10)^2 è sottostimato rispetto alla realtà.',
    risposta_corretta: true,
    spiegazione:
      'Pneumatici usurati = meno aderenza = frenata più lunga della stima.',
    scenario_transfer: 'pneumatici usurati',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C003-10',
    concetto_codice: 'ARG08-C003',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente scopre che a 80 km/h ha bisogno di circa 64 metri per frenare su asciutto. Questo dato è coerente con la formula (v/10)^2.',
    risposta_corretta: true,
    spiegazione:
      '(80/10)^2 = 64 m. Lo scenario fa emergere l\u2019uso operativo della formula.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },

  // ========== ARG08-C004 — Obbligo di mantenere la distanza ==========
  {
    codice: 'QUIZ-ARG08-C004-01',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve mantenere, rispetto al veicolo che lo precede, una distanza tale da garantire un tempestivo arresto.',
    risposta_corretta: true,
    spiegazione:
      'Art. 149: obbligo a carico di chi segue.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-02',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di mantenere la distanza di sicurezza grava sul conducente del veicolo che segue.',
    risposta_corretta: true,
    spiegazione:
      'Chi segue, non chi precede.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-03',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di mantenere la distanza di sicurezza grava sul conducente del veicolo che precede.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: l\u2019obbligo è di chi segue.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-04',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il veicolo che precede deve mantenere una distanza di sicurezza dal veicolo che segue.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P05 (inversione precede/segue): l\u2019obbligo è di chi SEGUE di tenersi lontano da chi PRECEDE, non viceversa.',
    pattern_trappola: 'P05',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-05',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di distanza di sicurezza vale solo in autostrada.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente): l\u2019art. 149 vale ovunque, non solo in autostrada.',
    pattern_trappola: 'P10',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-06',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che segue può ridurre a piacere la distanza purché il veicolo che precede non freni bruscamente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente): "a piacere" su sicurezza è red flag. L\u2019obbligo esiste anche se davanti non frena.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-07',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In città, a 50 km/h in coda, l\u2019obbligo di distanza di sicurezza resta in vigore anche se la distanza richiesta è piccola in metri.',
    risposta_corretta: true,
    spiegazione:
      'La norma non ha soglie di strada: si applica sempre.',
    scenario_transfer: 'città in coda',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-08',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incolonnamento lento su raccordo anulare, avvicinarsi a meno di 2 metri dal veicolo che precede per impedire a terzi di inserirsi è una violazione dell\u2019art. 149.',
    risposta_corretta: true,
    spiegazione:
      'Anche "chiudere il buco" è contrario al dovere di distanza di sicurezza.',
    scenario_transfer: 'raccordo anulare',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-09',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uno scooter che sfila tra le auto ferme in coda è tenuto al rispetto della distanza di sicurezza come un\u2019auto.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019art. 149 non ha eccezioni di categoria per motocicli.',
    scenario_transfer: 'scooter filtering in coda',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C004-10',
    concetto_codice: 'ARG08-C004',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente in tangenziale mantiene sempre un distacco pari a circa 3 secondi dal veicolo davanti. Sta rispettando il principio dell\u2019art. 149.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola: chi segue deve garantirsi il tempo di arresto.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },

  // ========== ARG08-C005 — Fattori che aumentano la distanza ==========
  {
    codice: 'QUIZ-ARG08-C005-01',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La distanza di sicurezza deve essere aumentata con pioggia, neve, ghiaccio o fondo bagnato.',
    risposta_corretta: true,
    spiegazione:
      'Minore aderenza = frenata più lunga = distanza maggiore.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-02',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Stanchezza e consumo di alcool aumentano il tempo di reazione e quindi richiedono maggiore distanza.',
    risposta_corretta: true,
    spiegazione:
      'Ogni fattore che allunga la reazione allunga lo spazio di arresto.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-03',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un carico pesante e un rimorchio non influenzano la distanza di sicurezza necessaria.',
    risposta_corretta: false,
    spiegazione:
      'Massa maggiore = frenata più lunga. Distanza da aumentare.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-04',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con pneumatici invernali omologati la distanza di sicurezza si può sempre dimezzare rispetto al valore normale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 (libertà apparente) + P17: gli pneumatici invernali migliorano l\u2019aderenza, ma non legittimano a dimezzare la distanza di sicurezza.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-05',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'La distanza di sicurezza dipende esclusivamente dalla velocità del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 (verità parziale fuori contesto): la velocità conta, ma non è l\u2019unico fattore. Aderenza, carico, reazione, visibilità pesano quanto.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-06',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'A un carico elevato corrisponde uno spazio di frenata più breve perché il peso maggiore aumenta l\u2019aderenza.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 (causa-effetto invertita): il carico pesante AUMENTA lo spazio di frenata per energia cinetica, non lo riduce.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-07',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In discesa ripida la distanza di sicurezza va aumentata rispetto al piano.',
    risposta_corretta: true,
    spiegazione:
      'Gravità aiuta il moto, frenata meno efficace, spazio maggiore.',
    scenario_transfer: 'discesa ripida',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-08',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In notturna, la distanza di sicurezza andrebbe aumentata anche quando l\u2019asfalto è asciutto.',
    risposta_corretta: true,
    spiegazione:
      'Visibilità ridotta = avvistamento ostacolo più tardivo = serve più spazio.',
    scenario_transfer: 'notturna su asciutto',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-09',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Trainare un rimorchio con tenda a 90 km/h in extraurbana richiede una distanza di sicurezza maggiore rispetto alla sola autovettura.',
    risposta_corretta: true,
    spiegazione:
      'Massa complessiva maggiore = più spazio di frenata.',
    scenario_transfer: 'auto con rimorchio tenda',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C005-10',
    concetto_codice: 'ARG08-C005',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'Sotto una pioggia intensa un conducente porta il distacco dall\u2019auto che precede da 2 a 4 secondi. Sta applicando correttamente la regola dell\u2019art. 149.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola del raddoppio in condizioni avverse.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },

  // ========== ARG08-C006 — Tempo di reazione ==========
  {
    codice: 'QUIZ-ARG08-C006-01',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il tempo di reazione medio di un conducente vigile è di circa 1 secondo.',
    risposta_corretta: true,
    spiegazione:
      'Circa 1 secondo in condizioni normali; aumenta con stanchezza, distrazione, alcool.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-02',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il tempo di reazione dipende principalmente dalla meccanica del veicolo e pochissimo dal conducente.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: il tempo di reazione dipende dallo STATO del conducente (vigilanza, alcool, distrazione). La meccanica influenza la frenata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-03',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il tempo di reazione è indipendente dall\u2019uso di cellulare o altri distrattori.',
    risposta_corretta: false,
    spiegazione:
      'Distrazione aumenta drammaticamente il tempo di reazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-04',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il tempo di reazione medio è di circa 0,1 secondi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 0,1 vs 1 s. Corretto: circa 1 secondo. Mnemonic: "un battito per reagire".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-05',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il tempo di reazione dipende principalmente dall\u2019efficienza dell\u2019impianto frenante.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 (causa-effetto invertita): l\u2019impianto frenante influenza la FRENATA, non la REAZIONE.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-06',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il tempo di reazione si misura in metri.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P08 (scambio unità): il TEMPO di reazione si misura in secondi; lo SPAZIO di reazione in metri.',
    pattern_trappola: 'P08',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-07',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente al telefono vede un ostacolo: il suo spazio di reazione è maggiore rispetto a chi guida attento, a parità di velocità.',
    risposta_corretta: true,
    spiegazione:
      'Distrazione allunga il tempo di reazione, e quindi lo spazio percorso prima di frenare.',
    scenario_transfer: 'guida con cellulare',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-08',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A 90 km/h, in un secondo di reazione il veicolo percorre circa 25 metri.',
    risposta_corretta: true,
    spiegazione:
      '90 km/h ≈ 25 m/s; × 1 s = 25 m. Valore chiave per capire quanto costa un\u2019esitazione.',
    scenario_transfer: 'extraurbana a 90 km/h',
    livello_difficolta: 4,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-09',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo una notte insonne, un conducente può avere un tempo di reazione doppio rispetto alla norma.',
    risposta_corretta: true,
    spiegazione:
      'Privazione di sonno è paragonabile a tasso alcolemico elevato.',
    scenario_transfer: 'guida dopo notte insonne',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C006-10',
    concetto_codice: 'ARG08-C006',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente a 50 km/h (circa 14 m/s) impiega 1 secondo per reagire a un ostacolo. Lo spazio di reazione è ~14 metri.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere il calcolo: spazio di reazione = v × t_reazione.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },

  // ========== ARG08-C007 — Tamponamento = presunzione di colpa ==========
  {
    codice: 'QUIZ-ARG08-C007-01',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi tampona il veicolo che lo precede si presume responsabile per mancato rispetto della distanza di sicurezza, salvo prova contraria.',
    risposta_corretta: true,
    spiegazione:
      'Art. 149 + giurisprudenza: presunzione relativa a carico di chi segue.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-02',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente tamponato è automaticamente responsabile se ha frenato all\u2019improvviso.',
    risposta_corretta: false,
    spiegazione:
      'No: la presunzione è a carico di chi tampona. Il tamponato può essere corresponsabile solo se prova una frenata ingiustificata.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-03',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La presunzione di colpa sul tamponante può essere superata dalla prova contraria.',
    risposta_corretta: true,
    spiegazione:
      'È una presunzione relativa (iuris tantum), non assoluta.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-04',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di tamponamento, il veicolo che precede è presunto responsabile se non aveva acceso le luci di stop.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P05 (inversione precede/segue): la presunzione è a carico di chi SEGUE (tamponante), non di chi precede.',
    pattern_trappola: 'P05',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-05',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'La responsabilità del tamponante è assoluta e non ammette mai prova contraria.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 (quantificatore) + P11 (eccezione nascosta): manca la clausola "salvo prova contraria".',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-06',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'La presunzione di colpa nel tamponamento si applica unicamente ai sinistri avvenuti in autostrada.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 (ambito silente) + F01: "unicamente" è red flag. Vale ovunque.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-07',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un tamponamento a catena in coda a un semaforo, il primo che tampona è presunto responsabile del suo impatto.',
    risposta_corretta: true,
    spiegazione:
      'Ogni tamponante risponde del proprio impatto, salvo spinta da terzo veicolo dimostrata.',
    scenario_transfer: 'tamponamento a catena',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-08',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019auto che investe il veicolo che la precede in galleria autostradale si presume responsabile del tamponamento.',
    risposta_corretta: true,
    spiegazione:
      'La presunzione non cambia in galleria: chi segue deve mantenere la distanza.',
    scenario_transfer: 'galleria autostradale',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-09',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente che tampona un veicolo fermo in seconda fila può comunque essere ritenuto responsabile per mancato rispetto della distanza.',
    risposta_corretta: true,
    spiegazione:
      'Sosta irregolare può ridurre la colpa ma non annulla il dovere di avvistamento e distanza di arresto.',
    scenario_transfer: 'veicolo fermo in seconda fila',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C007-10',
    concetto_codice: 'ARG08-C007',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'In un tamponamento urbano, senza ulteriori elementi, l\u2019assicurazione considera responsabile il conducente che ha colpito posteriormente l\u2019auto che lo precedeva.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la presunzione di colpa ex art. 149.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 CdS',
  },

  // ========== ARG08-C008 — Galleria e incolonnamenti ==========
  {
    codice: 'QUIZ-ARG08-C008-01',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In galleria autostradale è prescritto mantenere una distanza maggiore per consentire la fuga in caso di incendio o incidente.',
    risposta_corretta: true,
    spiegazione:
      'La sicurezza in galleria include anche l\u2019esigenza di fuga: distanze maggiori indicate dalla segnaletica.',
    livello_difficolta: 5,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-02',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In galleria, se la segnaletica indica una distanza minima in metri, quella prevale sulla regola dei 2 secondi.',
    risposta_corretta: true,
    spiegazione:
      'I cartelli operativi in galleria (100 m, 150 m) sono imperativi.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-03',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In galleria la distanza di sicurezza può essere ridotta rispetto alla strada aperta.',
    risposta_corretta: false,
    spiegazione:
      'È il contrario: va aumentata per consentire evacuazione sicura.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-04',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'In galleria il conducente può mantenere una distanza di 5 metri dal veicolo che precede.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 (numero quasi-giusto): 5 m vs decine o centinaia di metri. In galleria servono almeno alcune decine di metri; in autostrada i cartelli indicano tipicamente 100 m minimi.',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-05',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'In galleria la distanza di sicurezza si esprime sempre in secondi, mai in metri.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P08 (scambio unità) + P01: in galleria è comune la prescrizione in METRI con cartelli dedicati.',
    pattern_trappola: 'P08',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-06',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'trappola',
    testo_domanda:
      'In galleria è sufficiente mantenere 2 secondi di distacco come in strada aperta, perché non c\u2019è vento.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 (verità parziale): il "no vento" è vero ma irrilevante per la distanza. La vera ragione della distanza maggiore è l\u2019evacuazione.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-07',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incolonnamento in autostrada, se il traffico è quasi fermo ma scorre a strappi, la distanza di sicurezza si calcola in funzione della velocità corrente, non di quella di tabella.',
    risposta_corretta: true,
    spiegazione:
      'La distanza segue la velocità effettiva: è un concetto di tempo, non di cartello.',
    scenario_transfer: 'incolonnamento a strappi',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-08',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In galleria ferma per incidente, serve mantenere comunque un minimo di spazio dal veicolo davanti per consentire il passaggio dei mezzi di soccorso.',
    risposta_corretta: true,
    spiegazione:
      'Anche da fermi: regola operativa per il "corridoio di soccorso".',
    scenario_transfer: 'galleria ferma per incidente',
    livello_difficolta: 4,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-09',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una galleria bidirezionale a carreggiata unica, la distanza di sicurezza dal veicolo che precede deve essere maggiore rispetto a una galleria a carreggiate separate.',
    risposta_corretta: true,
    spiegazione:
      'Il rischio incidente/evacuazione è più alto con traffico opposto nella stessa canna.',
    scenario_transfer: 'galleria bidirezionale a canna unica',
    livello_difficolta: 5,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG08-C008-10',
    concetto_codice: 'ARG08-C008',
    argomento_numero: 8,
    fase_rotta: 'origina',
    testo_domanda:
      'All\u2019ingresso di una galleria autostradale, un cartello indica "distanza minima 100 m". Un conducente porta il distacco dall\u2019auto davanti oltre 100 metri. Agisce correttamente.',
    risposta_corretta: true,
    spiegazione:
      'Lo scenario fa emergere la regola delle distanze prescritte in galleria.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 CdS',
  },
] as const
