import type { QuizItem } from '../_types'

// Fonte: docs/research/03 + CdS artt. 72, 78, 79, 80, 93-94, 122.
// Quiz R.O.T.T.A. per argomento 25 — Elementi costitutivi del veicolo,
// manutenzione, stabilità e tenuta di strada.
// 13 concetti × 10 item = 130 item.
// Pattern dominanti del batch: P17 (causa-effetto CRITICO: spazio frenata
// vs riflessi; tenuta strada vs cilindrata), P18 (verità fuori contesto),
// P07 (numeri quasi-giusti: 1,6 mm), F04 (termini esotici distrattori).

export const ARG25_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG25-C001 — Motore: fumi e anomalie
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C001-01',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il fumo bianco denso allo scarico segnala l\u2019ingresso di liquido di raffreddamento in camera di combustione.',
    risposta_corretta: true,
    spiegazione:
      'Tipico sintomo di guarnizione testata compromessa: il liquido entra nel cilindro e vaporizza uscendo come vapore bianco.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-02',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il fumo azzurro allo scarico indica olio che brucia nel motore.',
    risposta_corretta: true,
    spiegazione:
      'Azzurrognolo = olio. Tipico di segmenti usurati o guide valvole logore. Consumo di olio anomalo.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-03',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Fumo nero intenso allo scarico indica normalmente un surplus di aria rispetto al carburante.',
    risposta_corretta: false,
    spiegazione:
      '\u00c8 l\u2019opposto: fumo nero = miscela troppo ricca (pi\u00f9 carburante di quanto l\u2019aria disponibile possa bruciare) o filtro aria intasato. Il surplus di aria d\u00e0 miscela magra, non fumo nero.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-04',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il fumo bianco allo scarico segnala olio che brucia, mentre il fumo azzurro segnala liquido di raffreddamento.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: la domanda inverte le associazioni. Corrette: bianco = liquido di raffreddamento, azzurro = olio, nero = miscela ricca.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-05',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un fumo anomalo allo scarico \u00e8 un fastidio estetico ma non richiede diagnosi n\u00e9 intervento.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che il fumo pu\u00f2 sembrare "solo fastidioso", ma segnala danni meccanici concreti che peggiorano nel tempo. Diagnosi obbligatoria.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-06',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il colore dei fumi \u00e8 dovuto principalmente al "differenziale autobloccante" del motore.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto F04 – Termini esotici = distrattori falsi. Il differenziale autobloccante \u00e8 un componente della trasmissione, non ha nulla a che vedere con i fumi di scarico.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-07',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: la mattina a motore freddo noti un po\u2019 di vapore bianco che sparisce dopo un minuto. \u00c8 normale condensa da umidit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Vapore leggero all\u2019avvio freddo \u00e8 solo condensa della marmitta che si riscalda. Diverso dal fumo bianco DENSO persistente = guarnizione.',
    scenario_transfer: 'condensa fredda al mattino',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-08',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: fumo azzurro costante allo scarico e livello dell\u2019olio che cala rapidamente. Dovresti far controllare il motore il prima possibile.',
    risposta_corretta: true,
    spiegazione:
      'Fumo azzurro + calo olio = conferma diagnosi "olio che brucia". Serve intervento prima che il motore soffra danni maggiori.',
    scenario_transfer: 'fumo azzurro persistente',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-09',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: fumo nero denso su un diesel in forte accelerazione. Pu\u00f2 indicare un filtro aria intasato o un problema agli iniettori.',
    risposta_corretta: true,
    spiegazione:
      'Nero = miscela ricca. Su diesel spesso legato a filtro aria o iniettori che dosano male il gasolio.',
    scenario_transfer: 'nero su diesel in accelerazione',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C001-10',
    concetto_codice: 'ARG25-C001',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Associa ciascun colore di fumo (bianco denso, azzurro, nero) alla causa meccanica pi\u00f9 probabile e spiega perch\u00e9 il colore \u00e8 diagnostico.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: bianco denso = liquido di raffreddamento (vapore d\u2019acqua); azzurro = olio che brucia; nero = miscela ricca / combustione incompleta / filtro intasato. Il colore corrisponde a sostanze diverse che si mescolano ai gas di scarico, ciascuna con "firma" cromatica specifica.',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG25-C002 — Trasmissione e cambio
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C002-01',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il cambio permette di variare il rapporto di trasmissione fra il motore e le ruote.',
    risposta_corretta: true,
    spiegazione:
      'Funzione base del cambio: adattare coppia e velocit\u00e0 a ogni condizione di marcia.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-02',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Marce basse forniscono alta coppia e bassa velocit\u00e0; marce alte danno meno coppia e pi\u00f9 velocit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Relazione inversa fra coppia e velocit\u00e0 finale. Marce basse = spunto e salita; marce alte = crociera.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-03',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Inserire una marcia troppo alta a basso regime \u00e8 una pratica neutra, senza effetti sulla meccanica.',
    risposta_corretta: false,
    spiegazione:
      'Sottocoppia + strappi = stress su ingranaggi, semiassi, supporti motore. Pratica da evitare.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-04',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il cambio trasmette la coppia dal motore alle ruote attraverso lo "spinterogeno".',
    risposta_corretta: false,
    spiegazione:
      'Hai visto F04 – Termini esotici = distrattori falsi. Lo spinterogeno \u00e8 un componente (ormai raro) dell\u2019accensione nei motori a benzina, nulla a che vedere con la trasmissione.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-05',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Marce basse danno sempre pi\u00f9 velocit\u00e0 massima rispetto alle marce alte.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: le marce basse amplificano la COPPIA a scapito della velocit\u00e0. La velocit\u00e0 massima del veicolo si ottiene in marce alte.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-06',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente scegliere di partire sempre in quinta marcia per risparmiare.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: partire in marcia troppo alta fa strappare il motore, logora frizione e consuma pi\u00f9 carburante. Nessun "risparmio" reale.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-07',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: devi affrontare una salita ripida in citt\u00e0 da fermo. Inserire la 1a marcia \u00e8 la scelta corretta.',
    risposta_corretta: true,
    spiegazione:
      '1a = massima coppia disponibile, necessaria per partire in salita senza far strappare il motore o bruciare la frizione.',
    scenario_transfer: 'partenza in salita',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-08',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: tieni la 2a a 100 km/h su una statale pianeggiante. Stai facendo un uso corretto del cambio.',
    risposta_corretta: false,
    spiegazione:
      '2a a 100 km/h = regime altissimo, motore "urla", consumo raddoppiato. Dovresti inserire la marcia pi\u00f9 alta compatibile con quella velocit\u00e0 (5a/6a).',
    scenario_transfer: 'marcia troppo bassa in crociera',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-09',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: affronti una lunga discesa in montagna. Scalare in una marcia pi\u00f9 bassa per sfruttare il freno motore risparmia i freni.',
    risposta_corretta: true,
    spiegazione:
      'Il freno motore riduce il ricorso ai freni meccanici, prevenendo surriscaldamento e "fading" su lunghe discese.',
    scenario_transfer: 'discesa lunga con freno motore',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C002-10',
    concetto_codice: 'ARG25-C002',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega con un esempio concreto perch\u00e9 la scelta della marcia \u00e8 un compromesso fra coppia e velocit\u00e0, e come questo influenza consumi e usura.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: a velocit\u00e0 fissa, marce basse = pi\u00f9 giri motore = pi\u00f9 consumo e rumore; marce alte = meno giri ma pi\u00f9 lavoro per ciclo, rischio sottocoppia. La marcia giusta mantiene il motore in zona di coppia ottimale, minimizzando consumo e stress meccanico.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG25-C003 — Frizione
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C003-01',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La frizione permette di interrompere e ripristinare gradualmente la trasmissione del moto dal motore al cambio.',
    risposta_corretta: true,
    spiegazione:
      'Funzione base: disinnesto-innesto progressivo per cambiare marcia e partire da fermo senza strappi.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-02',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Tenere il piede leggermente appoggiato sul pedale della frizione \u00e8 una buona pratica per risparmiare il disco.',
    risposta_corretta: false,
    spiegazione:
      '\u00c8 il contrario: il disco di frizione slitta leggermente producendo calore e usura. "Piede sul pedale" = frizione che brucia prima.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-03',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Far slittare la frizione a lungo per trattenere il veicolo in salita logora il disco.',
    risposta_corretta: true,
    spiegazione:
      'In salita si usa il freno (mano o servizio), NON la frizione tenuta sul punto di stacco. Quest\u2019ultima scalda e consuma il disco.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-04',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La frizione collega direttamente il motore alle ruote motrici, saltando il cambio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: la frizione collega il motore al CAMBIO, non direttamente alle ruote. Dal cambio la coppia passa al differenziale e poi alle ruote.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-05',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente tenere il piede sul pedale della frizione durante la marcia, non ci sono conseguenze.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: "liberamente / nessuna conseguenza" ignora l\u2019usura. Consumo del disco accelerato = guasto precoce e riparazione costosa.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-06',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La frizione \u00e8 un organo della trasmissione, ovvero un componente del differenziale posteriore.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": qui "ovvero" dovrebbe spiegare, ma le due cose sono diverse. La frizione \u00e8 fra motore e cambio; il differenziale \u00e8 a valle del cambio, sull\u2019asse motore.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-07',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in coda in salita, trattieni l\u2019auto solo con il gioco di frizione per evitare di tirare il freno a mano. Stai logorando il disco.',
    risposta_corretta: true,
    spiegazione:
      '"Giocare" con la frizione tra stacco e innesto \u00e8 slittamento continuo = calore, usura, possibile bruciatura del disco. Usa il freno.',
    scenario_transfer: 'coda in salita con frizione',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-08',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: senti odore di "bruciato" dopo aver manovrato a lungo in un parcheggio in salita. Probabile frizione surriscaldata.',
    risposta_corretta: true,
    spiegazione:
      'Odore tipico del materiale di frizione che si \u00e8 scaldato e ha iniziato a degradarsi. Lasciala raffreddare ed evita ulteriore uso intenso.',
    scenario_transfer: 'odore di frizione bruciata',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-09',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: il pedale della frizione \u00e8 diventato molto alto di stacco e l\u2019auto "slitta" anche in marce alte. Sintomo tipico di frizione usurata.',
    risposta_corretta: true,
    spiegazione:
      'Disco consumato: il punto di stacco si sposta, e sotto carico la coppia non viene pi\u00f9 trasmessa interamente (slittamento in marcia alta).',
    scenario_transfer: 'diagnosi usura frizione',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C003-10',
    concetto_codice: 'ARG25-C003',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega perch\u00e9 la frizione \u00e8 un componente "usurabile" anche con uso corretto, e come migliorarne la durata con lo stile di guida.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la frizione trasmette coppia per attrito, e ogni innesto comporta un minimo slittamento abrasivo. Uso corretto: innesti rapidi, non tenere il piede sul pedale, non trattenere il veicolo in salita con la frizione, partire a regime moderato.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG25-C004 — Impianto frenante e spazio di frenata (CRITICO)
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C004-01',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo spazio di frenata cresce con il quadrato della velocit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Fisica: energia cinetica \u221d v\u00b2. Raddoppiando la velocit\u00e0 lo spazio di frenata quadruplica, a parit\u00e0 di aderenza.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-02',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo spazio di frenata dipende dall\u2019aderenza dei pneumatici al fondo stradale.',
    risposta_corretta: true,
    spiegazione:
      'Con aderenza dimezzata (bagnato, ghiaccio) lo spazio di frenata raddoppia. L\u2019aderenza \u00e8 la prima variabile fisica che lo determina.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-03',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo stato di pastiglie, dischi e liquido freni non ha effetti apprezzabili sullo spazio di frenata, che dipende solo dalla velocit\u00e0.',
    risposta_corretta: false,
    spiegazione:
      'Falso: pastiglie usurate, dischi vetrificati, liquido freni vecchio (igroscopico, ebollizione sotto sforzo) peggiorano l\u2019efficienza frenante e aumentano lo spazio di frenata a parit\u00e0 di velocit\u00e0.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-04',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di frenata dipende dai riflessi del conducente.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: TRAPPOLA CLASSICA. I riflessi influenzano lo SPAZIO DI REAZIONE, non quello di frenata. Lo spazio di frenata dipende da meccanica + aderenza + velocit\u00e0. Mnemonic: "Arresto = Reazione + Frenata".',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-05',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo spazio di frenata cresce linearmente con la velocit\u00e0: a velocit\u00e0 doppia corrisponde spazio doppio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita (legge fisica sbagliata): \u00e8 un rapporto QUADRATICO, non lineare. A velocit\u00e0 doppia lo spazio quadruplica. Mnemonic: "\u00e9 = v\u00b2".',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-06',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'I sistemi ABS ed ESP riducono in ogni caso lo spazio di frenata indipendentemente dal fondo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato + P18: ABS/ESP impediscono il BLOCCO delle ruote mantenendo direzionalit\u00e0. Su fondi molto scivolosi (ghiaccio, brecciolino) lo spazio pu\u00f2 essere addirittura MAGGIORE di quello con ruote bloccate, in cambio di controllo direzionale.',
    pattern_trappola: 'P01',
    livello_difficolta: 5,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-07',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: su asfalto bagnato lo spazio di frenata a parit\u00e0 di velocit\u00e0 \u00e8 maggiore che su asfalto asciutto.',
    risposta_corretta: true,
    spiegazione:
      'Bagnato \u2192 aderenza ridotta \u2192 spazio di frenata maggiore, spesso ~50% in pi\u00f9. Ragione fisica: coefficiente d\u2019attrito pi\u00f9 basso.',
    scenario_transfer: 'frenata bagnato vs asciutto',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-08',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: lo spazio di reazione dipende dai riflessi e dallo stato di attenzione del conducente.',
    risposta_corretta: true,
    spiegazione:
      'Esattamente: riflessi \u2192 spazio di REAZIONE (~1 secondo di guida "alla cieca" prima di iniziare a frenare). Non lo spazio di frenata.',
    scenario_transfer: 'distinzione reazione vs frenata',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-09',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: lunga discesa in montagna, freni surriscaldati dopo molte frenate. Lo spazio di frenata pu\u00f2 aumentare anche con ABS.',
    risposta_corretta: true,
    spiegazione:
      'Surriscaldamento = "fading" dei freni: pastiglie e dischi perdono efficacia. L\u2019ABS non risolve un impianto meccanicamente compromesso dal calore.',
    scenario_transfer: 'fading in discesa',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C004-10',
    concetto_codice: 'ARG25-C004',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Scrivi la formula mnemonica "Arresto = Reazione + Frenata" e spiega da quali fattori dipende ciascun termine.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: spazio di arresto = spazio di reazione + spazio di frenata. Reazione dipende da: riflessi, attenzione, alcol, stanchezza (velocit\u00e0 * tempo di reazione). Frenata dipende da: velocit\u00e0 (al quadrato), aderenza, stato impianto frenante, peso del veicolo. Non confondere le due cose.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },

  // ============================================================
  // ARG25-C005 — Sterzo e geometria
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C005-01',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Uno sterzo efficiente deve ritornare naturalmente in posizione rettilinea dopo una curva.',
    risposta_corretta: true,
    spiegazione:
      'Il ritorno naturale \u00e8 funzione della geometria (incidenza, caster): se manca \u00e8 sintomo di anomalia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-02',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un\u2019auto che "tira" da un lato in rettilineo \u00e8 un fenomeno normale privo di rilevanza diagnostica.',
    risposta_corretta: false,
    spiegazione:
      'Falso: "tira" da un lato \u00e8 sintomo tipico di geometria alterata, pneumatico sgonfio o freno che frena da un lato solo. Da verificare in officina.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-03',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un gioco eccessivo nello sterzo \u00e8 un\u2019anomalia da fare verificare.',
    risposta_corretta: true,
    spiegazione:
      'Gioco eccessivo pu\u00f2 nascondere un componente usurato della scatola sterzo o dei giunti. Fonte potenziale di perdita di controllo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-04',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un\u2019auto che tira da un lato "tira" a causa del livello di carburante sbilanciato nel serbatoio.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: il livello di carburante non genera apprezzabili squilibri laterali. La causa tipica \u00e8 geometria alterata o pneumatico sgonfio.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-05',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente regolare la convergenza delle ruote a casa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la convergenza va regolata in officina con strumenti di misura. Un "fai da te" pu\u00f2 peggiorare usura, consumi e stabilit\u00e0.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-06',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019usura irregolare dei pneumatici dipende dal "dispositivo di iniezione diretta" del motore.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto F04 – Termini esotici distrattori. L\u2019iniezione diretta \u00e8 una tecnologia del motore, non ha alcun legame con l\u2019usura pneumatici, che \u00e8 legata a geometria, pressione e stile di guida.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-07',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: dopo un urto frontale a un marciapiede l\u2019auto non segue pi\u00f9 dritto il volante. Devi far controllare la geometria dell\u2019avantreno.',
    risposta_corretta: true,
    spiegazione:
      'Urto frontale pu\u00f2 alterare convergenza/campanatura. Controllo e regolazione in officina specializzata.',
    scenario_transfer: 'dopo urto a marciapiede',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-08',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: pneumatico anteriore destro consumato solo sul bordo esterno. Indica tipicamente un problema di convergenza o campanatura.',
    risposta_corretta: true,
    spiegazione:
      'Usura "a bordo" \u00e8 spia di geometria alterata; da far controllare insieme alle sospensioni dell\u2019avantreno.',
    scenario_transfer: 'usura asimmetrica',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-09',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: il volante vibra alle alte velocit\u00e0. Spesso \u00e8 dovuto a uno squilibrio delle ruote anteriori.',
    risposta_corretta: true,
    spiegazione:
      'Vibrazione sopra i 90-110 km/h \u00e8 tipicamente squilibratura delle ruote. Si risolve con equilibratura in officina.',
    scenario_transfer: 'vibrazione volante alta velocit\u00e0',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C005-10',
    concetto_codice: 'ARG25-C005',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca tre sintomi tipici di una geometria dell\u2019avantreno alterata e spiega perch\u00e9 intervenire presto.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) auto che tira; (2) usura irregolare pneumatici; (3) volante non centrato in rettilineo; (4) ritorno anomalo dopo una curva. Intervento tempestivo: risparmio pneumatici e sicurezza direzionale.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },

  // ============================================================
  // ARG25-C006 — Sospensioni e ammortizzatori
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C006-01',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Ammortizzatori efficienti riducono lo spazio di frenata e migliorano la stabilit\u00e0 in curva.',
    risposta_corretta: true,
    spiegazione:
      'Ammortizzatori mantengono le ruote a contatto con la strada: se la ruota "rimbalza", l\u2019attrito utile cala e lo spazio di frenata aumenta.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-02',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Ammortizzatori usurati si riconoscono da oscillazioni prolungate del veicolo dopo un dosso.',
    risposta_corretta: true,
    spiegazione:
      'Test semplice: premere sull\u2019angolo del veicolo e vedere se "rimbalza". Ammortizzatore buono smorza in 1-2 oscillazioni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-03',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli ammortizzatori non hanno alcun ruolo nella prevenzione dell\u2019aquaplaning, che dipende esclusivamente dal battistrada.',
    risposta_corretta: false,
    spiegazione:
      'Tenendo la ruota sull\u2019asfalto anche su fondi dissestati, aiutano il battistrada a "scaricare" l\u2019acqua evitando galleggiamento.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-04',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La tenuta di strada dipende dalla cilindrata del motore: motori pi\u00f9 grandi tengono meglio la strada.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: TRAPPOLA CLASSICA. La tenuta di strada dipende da pneumatici, sospensioni, assetto e aderenza. La cilindrata aumenta la potenza, che pu\u00f2 anzi rendere la guida pi\u00f9 critica.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-05',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ammortizzatori usurati non influiscono sullo spazio di frenata, perch\u00e9 lo spazio di frenata dipende solo dall\u2019impianto frenante.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: lo spazio di frenata dipende anche dall\u2019aderenza, che dipende anche dal mantenere il contatto ruota-strada, funzione degli ammortizzatori.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-06',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il beccheggio eccessivo in frenata del veicolo \u00e8 causato dall\u2019"albero di trasmissione" usurato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto F04 – Termini esotici distrattori. L\u2019albero di trasmissione trasmette coppia alle ruote motrici (AWD/trazione posteriore) e non governa il beccheggio. Il beccheggio dipende da ammortizzatori.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-07',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: dopo un dosso a 50 km/h l\u2019auto oscilla 3-4 volte prima di stabilizzarsi. Probabile ammortizzatore usurato.',
    risposta_corretta: true,
    spiegazione:
      'Ammortizzatore sano smorza in 1-2 oscillazioni. Pi\u00f9 di due = componente da far verificare.',
    scenario_transfer: 'oscillazione post-dosso',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-08',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: noti forte beccheggio in frenata e tuffo del muso. Il sintomo pu\u00f2 essere riconducibile agli ammortizzatori anteriori.',
    risposta_corretta: true,
    spiegazione:
      'Beccheggio in frenata esagerato = ammortizzatori anteriori che non smorzano il trasferimento di carico in avanti.',
    scenario_transfer: 'beccheggio in frenata',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-09',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: aquaplaning su un\u2019auto con ammortizzatori usurati \u00e8 pi\u00f9 probabile che su un\u2019auto con sospensioni in buono stato.',
    risposta_corretta: true,
    spiegazione:
      'Ammortizzatori buoni tengono la ruota incollata all\u2019asfalto, consentendo al battistrada di scaricare acqua. Sospensioni andate = ruota che "salta" sull\u2019acqua = aquaplaning precoce.',
    scenario_transfer: 'aquaplaning e sospensioni',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C006-10',
    concetto_codice: 'ARG25-C006',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega perch\u00e9 gli ammortizzatori influenzano sia la stabilit\u00e0 in curva sia lo spazio di frenata, usando il concetto di "contatto ruota-strada".',
    risposta_corretta: true,
    spiegazione:
      'Atteso: l\u2019aderenza esiste solo quando la ruota \u00e8 in contatto con l\u2019asfalto. Senza ammortizzatori efficaci, su buche o dossi la ruota rimbalza e perde momentaneamente contatto: zero attrito in quegli istanti = zero frenata utile e zero controllo direzionale. Quindi tenuta e spazio di frenata peggiorano simultaneamente.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },

  // ============================================================
  // ARG25-C007 — Pneumatici (1,6 mm!)
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C007-01',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La profondit\u00e0 minima legale del battistrada dei pneumatici \u00e8 di 1,6 mm.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "1,6 battistrada". Sotto questa soglia lo scarico dell\u2019acqua \u00e8 insufficiente: aquaplaning, spazi di frenata aumentati.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-02',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una pressione di gonfiaggio inferiore al prescritto aumenta il consumo di carburante e il rischio di scoppio.',
    risposta_corretta: true,
    spiegazione:
      'Gomma sgonfia = pi\u00f9 attrito, surriscaldamento dei fianchi, rischio di "cedimento" a caldo soprattutto in autostrada.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-03',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una pressione di gonfiaggio troppo alta aumenta la superficie di contatto e provoca usura solo sulle spalle del battistrada.',
    risposta_corretta: false,
    spiegazione:
      'Inversione: una pressione eccessiva RIDUCE la superficie di contatto (impronta "bombata") e provoca usura al CENTRO, non alle spalle. L\u2019usura alle spalle \u00e8 tipica del sottogonfiaggio.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-04',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La profondit\u00e0 minima legale del battistrada \u00e8 di 1,0 mm.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 1,0 mm \u00e8 un valore "sotto" il vero, plausibile ma sbagliato. Mnemonic "1,6 battistrada". Sotto 1,6 mm il pneumatico \u00e8 fuorilegge.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-05',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pneumatico \u00e8 l\u2019unico punto di contatto fra veicolo e strada, ovvero \u00e8 il solo componente a determinare il comfort di marcia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": "ovvero" non spiega. La prima affermazione \u00e8 vera, la seconda no: il comfort dipende anche da sospensioni, ammortizzatori, sedili, isolamento.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-06',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Pneumatici molto sgonfi riducono lo spazio di frenata grazie alla maggiore superficie di contatto con l\u2019asfalto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: \u00e8 vero che l\u2019impronta cresce, MA la gomma si deforma, perde reattivit\u00e0, scalda, e il coefficiente d\u2019attrito utile peggiora. Lo spazio di frenata aumenta, non diminuisce.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-07',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: controlli il battistrada e misuri 1,8 mm. Sei ancora in regola, ma il pneumatico \u00e8 prossimo al limite e da sostituire a breve.',
    risposta_corretta: true,
    spiegazione:
      '1,8 mm > 1,6 mm limite legale = in regola, ma con pochissimo margine. Pianifica la sostituzione prima del prossimo inverno.',
    scenario_transfer: 'battistrada al limite',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-08',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: noti usura centrale del battistrada con spalle ancora buone. Probabilmente stavi guidando con pressione troppo alta.',
    risposta_corretta: true,
    spiegazione:
      'Usura al centro con spalle preservate = impronta bombata = sovragonfiaggio. Correggi la pressione al valore indicato nel libretto.',
    scenario_transfer: 'usura centrale da sovrapressione',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-09',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in autostrada ad alta velocit\u00e0 con gomme sgonfie, senti vibrazioni e odore di gomma. \u00c8 un sintomo di surriscaldamento pericoloso.',
    risposta_corretta: true,
    spiegazione:
      'Sgonfio + velocit\u00e0 = calore eccessivo sui fianchi. Odore, vibrazioni e deformazioni sono sintomi pre-scoppio: ridurre velocit\u00e0 e fermarsi in sicurezza per controllare.',
    scenario_transfer: 'gomme sgonfie in autostrada',
    livello_difficolta: 4,
    articolo_cds: 'Art. 79 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C007-10',
    concetto_codice: 'ARG25-C007',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Quale \u00e8 la profondit\u00e0 minima legale del battistrada e perch\u00e9 \u00e8 stata scelta proprio quella soglia in termini di sicurezza?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: 1,6 mm. Sotto questa soglia gli intagli del battistrada non riescono pi\u00f9 a "scaricare" l\u2019acqua dalle zone di contatto: aderenza sul bagnato cala drasticamente, rischio aquaplaning e spazio di frenata allungato. \u00c8 il compromesso fra durata economica del pneumatico e sicurezza minima.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 79 CdS',
  },

  // ============================================================
  // ARG25-C008 — Pneumatici invernali e catene
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C008-01',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dal 15 novembre al 15 aprile le ordinanze prefettizie possono imporre pneumatici invernali o catene a bordo.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "15/11 - 15/4". Le date sono una finestra standard; le singole ordinanze possono variare localmente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C008-02',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I pneumatici invernali offrono aderenza significativamente superiore sotto i 7 \u00b0C o in caso di neve e ghiaccio.',
    risposta_corretta: true,
    spiegazione:
      'Mescole invernali restano elastiche al freddo; battistrada con lamelle per "mordere" su neve e ghiaccio. Vantaggio misurabile.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C008-03',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La marcatura "M+S" identifica un pneumatico omologato esclusivamente per uso estivo.',
    risposta_corretta: false,
    spiegazione:
      '"Mud + Snow": marcatura standard degli invernali. La marcatura "3PMSF" (fiocco di neve) \u00e8 pi\u00f9 stringente e garantita.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C008-04',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di pneumatici invernali scatta in ogni caso su tutte le strade italiane dal 15 novembre.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso / tutte le strade". L\u2019obbligo dipende dalle singole ordinanze prefettizie per le strade indicate, non \u00e8 universale.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C008-05',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dal 15 novembre al 15 aprile il conducente pu\u00f2 scegliere liberamente se montare pneumatici invernali o tenere quelli estivi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: su strade oggetto di ordinanza la scelta non \u00e8 libera. L\u2019alternativa prevista \u00e8 tenere a bordo catene compatibili, non "proseguire con gli estivi".',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C008-06',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le catene da neve sono obbligatorie ogni volta che si circola, anche senza neve sull\u2019asfalto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: le catene non si usano "senza neve"; vanno MONTATE in presenza di neve/ghiaccio. L\u2019obbligo \u00e8 di averle a bordo, non di montarle sempre.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C008-07',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: devi attraversare una strada di montagna il 20 dicembre. L\u2019ordinanza prefettizia richiede "invernali o catene a bordo". Con estivi + catene nel bagagliaio sei in regola.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019alternativa legale \u00e8 proprio questa: estivi + catene compatibili a bordo pronte per essere montate all\u2019occorrenza.',
    scenario_transfer: 'montagna invernale con catene',
    livello_difficolta: 3,
    articolo_cds: 'Art. 6 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C008-08',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: temperatura esterna 5 \u00b0C, asfalto asciutto. Gli pneumatici invernali offrono aderenza migliore degli estivi anche su asciutto.',
    risposta_corretta: true,
    spiegazione:
      'Sotto i 7 \u00b0C la mescola estiva diventa rigida e perde grip. La mescola invernale \u00e8 progettata per restare elastica al freddo, quindi guadagna aderenza anche sull\u2019asciutto.',
    scenario_transfer: 'invernali su asciutto freddo',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C008-09',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: estate, asfalto 35 \u00b0C. Usare pneumatici invernali \u00e8 indifferente rispetto agli estivi.',
    risposta_corretta: false,
    spiegazione:
      'Con caldo estivo la mescola invernale si surriscalda e si deforma: aderenza peggiore, usura accelerata, spazi di frenata maggiori. Non sono equivalenti.',
    scenario_transfer: 'invernali in estate',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C008-10',
    concetto_codice: 'ARG25-C008',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega perch\u00e9 il legislatore ha dato due alternative (pneumatici invernali OPPURE catene a bordo), indicando pro e contro di ciascuna.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: invernali = comfort, usati sempre nel periodo, buoni su neve e freddo, costo e due cambi gomme/anno; catene = economiche, ingombranti nel bagagliaio, vanno montate e smontate all\u2019occorrenza, efficaci solo su neve/ghiaccio. Il legislatore consente di adattare la scelta al tipo di uso del veicolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 6 CdS',
  },

  // ============================================================
  // ARG25-C009 — Batteria e impianto elettrico
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C009-01',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A motore acceso \u00e8 la batteria che continua ad alimentare l\u2019alternatore e i servizi di bordo.',
    risposta_corretta: false,
    spiegazione:
      'Funzione dell\u2019alternatore: genera energia elettrica dal moto del motore, la invia a batteria e servizi simultaneamente.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-02',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La spia rossa della batteria accesa a motore acceso segnala che l\u2019alternatore sta caricando regolarmente.',
    risposta_corretta: false,
    spiegazione:
      '\u00c8 il contrario: la spia rossa significa che l\u2019alternatore NON sta caricando. Se tutto \u00e8 regolare la spia deve essere spenta. Dopo qualche chilometro la batteria si esaurisce e il veicolo si ferma.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-03',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di spia rossa della batteria conviene spegnere i carichi elettrici non essenziali e fermarsi al pi\u00f9 presto.',
    risposta_corretta: true,
    spiegazione:
      'Ridurre i consumi (radio, climatizzazione, luci non necessarie) prolunga l\u2019autonomia residua della batteria prima dell\u2019arresto.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-04',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La spia rossa della batteria accesa significa sempre che la batteria \u00e8 scarica.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: il simbolo \u00e8 "forma di batteria" ma il problema segnalato \u00e8 sulla RICARICA (alternatore). La batteria sar\u00e0 scarica DOPO, non \u00e8 gi\u00e0 scarica al momento dell\u2019accensione spia.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-05',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il "ponte raddrizzatore" della batteria \u00e8 il componente che alimenta l\u2019impianto frenante.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto F04 – Termini esotici distrattori. Il ponte raddrizzatore converte corrente alternata (dall\u2019alternatore) in continua per la batteria, non ha relazione con l\u2019impianto frenante.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-06',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente ignorare la spia rossa della batteria perch\u00e9 l\u2019auto continua a marciare normalmente per qualche chilometro.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: ignorarla = fermarsi in mezzo al traffico quando la batteria \u00e8 definitivamente scarica. Va presa sul serio e gestita subito.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-07',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: la batteria \u00e8 scarica al mattino dopo una notte di freddo intenso. Possibile causa oltre alla temperatura: una porta rimasta socchiusa con luce interna accesa.',
    risposta_corretta: true,
    spiegazione:
      'Carichi "parassiti" durante la notte (porta socchiusa, luce interna) sommati al freddo (che riduce la capacit\u00e0 chimica della batteria) sono causa tipica di mancato avviamento al mattino.',
    scenario_transfer: 'scarica notturna',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-08',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: durante la marcia compare la spia rossa della batteria in autostrada. Raggiungere la prima uscita o piazzola \u00e8 la scelta corretta.',
    risposta_corretta: true,
    spiegazione:
      'Uscire prima che la batteria residua si esaurisca ti permette di fermarti in sicurezza invece di trovarti in corsia di marcia.',
    scenario_transfer: 'spia batteria in autostrada',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-09',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: ascolti musica con motore spento per 30 minuti. La batteria potrebbe non bastare ad avviare il motore.',
    risposta_corretta: true,
    spiegazione:
      'A motore spento i carichi attingono direttamente dalla batteria, senza ricarica. 30 minuti di radio possono ridurre sensibilmente la capacit\u00e0 residua.',
    scenario_transfer: 'utilizzi a motore spento',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C009-10',
    concetto_codice: 'ARG25-C009',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega la differenza fra "la batteria \u00e8 scarica" e "la spia rossa della batteria \u00e8 accesa a motore acceso", indicando l\u2019azione corretta per ciascun caso.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: "batteria scarica" = auto non si avvia, servono cavi o batteria carica; "spia rossa a motore acceso" = alternatore non ricarica, spegnere carichi e fermarsi al pi\u00f9 presto perch\u00e9 la batteria si esaurir\u00e0. Due problemi diversi, due risposte diverse.',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG25-C010 — Raffreddamento
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C010-01',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il livello del liquido di raffreddamento va controllato a motore freddo, tra le tacche di minimo e massimo.',
    risposta_corretta: true,
    spiegazione:
      'A caldo il liquido si espande: leggere a caldo darebbe un livello falsato; inoltre aprire a caldo \u00e8 pericoloso (pressione e vapore).',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-02',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La spia rossa della temperatura o il termometro in fascia rossa impongono l\u2019arresto immediato del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Proseguire = rischio fusione di componenti interni (guarnizione testata, pistoni). Il danno cresce rapidamente con il tempo.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-03',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il circuito di raffreddamento serve a dissipare il calore prodotto dal motore in funzionamento.',
    risposta_corretta: true,
    spiegazione:
      'Il motore produce grandi quantit\u00e0 di calore: il circuito a liquido lo trasferisce al radiatore, che lo cede all\u2019aria.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-04',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il livello del liquido di raffreddamento si controlla preferibilmente a motore caldo, per avere misura pi\u00f9 precisa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: a caldo il liquido \u00e8 espanso e la vaschetta \u00e8 pressurizzata: pericoloso da aprire e il valore non \u00e8 di riferimento. Si misura a FREDDO.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-05',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con il termometro in fascia rossa il conducente pu\u00f2 proseguire fino alla prossima officina, anche se distante 50 km.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: nessuna "libera scelta" con surriscaldamento. Il danno al motore si produce in pochi minuti, il veicolo va fermato SUBITO e si chiama assistenza.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-06',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il circuito di raffreddamento utilizza acqua pura, ovvero \u00e8 riempito di refrigerante puro.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": le due opzioni non sono equivalenti. In realt\u00e0 si usa una miscela di acqua e antigelo (glicole), mai acqua pura (congela in inverno) n\u00e9 antigelo puro.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-07',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in autostrada il termometro dell\u2019acqua sale rapidamente alla fascia rossa. La scelta corretta \u00e8 raggiungere la prima piazzola e spegnere il motore.',
    risposta_corretta: true,
    spiegazione:
      'Arresto immediato in sicurezza = proteggere motore e passeggeri. Riprendere la marcia senza diagnosi e riparazione = danni irreparabili.',
    scenario_transfer: 'surriscaldamento autostradale',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-08',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: noti chiazze verdi o rosa sotto l\u2019auto al mattino. Probabile perdita di liquido di raffreddamento.',
    risposta_corretta: true,
    spiegazione:
      'Il liquido di raffreddamento \u00e8 tipicamente colorato (verde, rosa, giallo fluorescente) per individuarne le perdite. Da controllare prima di ripartire.',
    scenario_transfer: 'perdita liquido sotto auto',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-09',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: apri il tappo della vaschetta di espansione a motore bollente. \u00c8 una pratica sicura se fatta velocemente.',
    risposta_corretta: false,
    spiegazione:
      'A motore caldo il circuito \u00e8 pressurizzato e il liquido sopra i 100 \u00b0C; aprire rischia un\u2019eiezione di vapore bollente sul viso e sulle mani. Mai aprire a caldo.',
    scenario_transfer: 'apertura tappo a caldo',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C010-10',
    concetto_codice: 'ARG25-C010',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 proseguire la marcia con il termometro acqua in fascia rossa \u00e8 sempre una cattiva idea, anche solo per pochi chilometri?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: il surriscaldamento rompe la guarnizione della testata, deforma componenti in alluminio, fonde parti interne. I danni sono spesso irreparabili e il costo \u00e8 quello di una motore nuovo. Pochi minuti bastano, i pochi km "per arrivare" sono un risparmio illusorio.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG25-C011 — Lubrificazione e olio
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C011-01',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019olio motore riduce l\u2019attrito fra gli organi meccanici e ne raffredda le superfici.',
    risposta_corretta: true,
    spiegazione:
      'Doppia funzione: lubrificazione e dissipazione termica, oltre alla pulizia interna e protezione dalla corrosione.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-02',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il livello dell\u2019olio va controllato a motore caldo, spento e su terreno piano, usando l\u2019asta di livello.',
    risposta_corretta: true,
    spiegazione:
      'A motore caldo l\u2019olio \u00e8 distribuito nel circuito: attendere 2-3 minuti dopo lo spegnimento per far tornare l\u2019olio nella coppa e leggere il livello corretto.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-03',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La spia rossa della pressione dell\u2019olio accesa a motore acceso impone di fermarsi immediatamente.',
    risposta_corretta: true,
    spiegazione:
      'Pressione olio zero o insufficiente = lubrificazione che manca = grippaggio in pochi minuti. Arresto immediato in sicurezza.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-04',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il livello dell\u2019olio si controlla con il motore in movimento, per leggerlo "in funzione".',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: a motore acceso l\u2019olio circola nel circuito e nella coppa ne resta poco; la misura sarebbe falsata. Serve motore SPENTO, caldo, veicolo piano.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-05',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con la spia rossa della pressione olio accesa il conducente pu\u00f2 proseguire per qualche decina di chilometri se il motore suona ancora normale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: il danno da mancata lubrificazione avviene prima che il "rumore" si senta. Fermarsi SUBITO \u00e8 l\u2019unica scelta sicura.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-06',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019olio motore serve esclusivamente a lubrificare, ovvero a raffreddare le parti interne.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": qui "ovvero" introduce un\u2019alternativa che non \u00e8 esclusiva. L\u2019olio fa ENTRAMBE le cose (lubrifica E raffredda), oltre a pulire e proteggere dalla corrosione.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-07',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: livello olio al minimo sull\u2019asta di livello durante un viaggio lungo. Conviene rabboccare prima di ripartire.',
    risposta_corretta: true,
    spiegazione:
      'Il livello al minimo \u00e8 gi\u00e0 "limite di sicurezza": in salita, curva o frenata il pescante potrebbe risucchiare aria, con danni al motore. Rabbocca tra minimo e massimo.',
    scenario_transfer: 'livello olio al minimo',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-08',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: spia pressione olio accesa dopo 10 km in autostrada. Esci alla prima uscita e fermati, anche se manca l\u2019area di servizio.',
    risposta_corretta: true,
    spiegazione:
      'Non attendere l\u2019area di servizio: scendere alla prima uscita, raggiungere un\u2019area sicura, spegnere il motore, chiamare assistenza.',
    scenario_transfer: 'spia olio in viaggio autostradale',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-09',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: olio motore molto scuro e denso dopo molti mesi senza cambio. Il motore pu\u00f2 sviluppare maggiore attrito e usura.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019olio si "ossida" e perde propriet\u00e0 lubrificanti; inoltre accumula impurit\u00e0. Cambio olio nei tempi indicati dal libretto \u00e8 manutenzione essenziale.',
    scenario_transfer: 'olio non cambiato',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C011-10',
    concetto_codice: 'ARG25-C011',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega la procedura corretta per controllare il livello olio motore e perch\u00e9 ogni passaggio \u00e8 importante.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: (1) motore caldo ma spento da 2-3 minuti (olio tornato nella coppa); (2) veicolo su piano (livello non inclinato); (3) estrarre l\u2019asta, pulirla, reinserirla e rileggere (prima lettura falsata da spruzzi); (4) livello tra min e max. Ogni passaggio elimina una fonte di errore nella lettura.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG25-C012 — Revisione e bollo
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C012-01',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019autovettura nuova di fabbrica deve essere sottoposta a revisione entro 4 anni dall\u2019immatricolazione.',
    risposta_corretta: true,
    spiegazione:
      'Mnemonic "4 + 2": prima revisione a 4 anni, poi ogni 2 anni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-02',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo la prima revisione il veicolo va revisionato ogni 2 anni.',
    risposta_corretta: true,
    spiegazione:
      'Regola "4+2". Ogni revisione successiva ha cadenza biennale fino al fine vita del veicolo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-03',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il bollo auto \u00e8 un\u2019imposta regionale sul possesso del veicolo, distinta dalla revisione.',
    risposta_corretta: true,
    spiegazione:
      'Sono due obblighi separati: revisione = sicurezza tecnica; bollo = tassa di propriet\u00e0. Il mancato rinnovo di ciascuno ha conseguenze diverse.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C012-04',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La prima revisione dell\u2019autovettura nuova \u00e8 prevista entro 3 anni dall\u2019immatricolazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 3 anni \u00e8 vicino ma sbagliato. La regola italiana \u00e8 "4+2". Mnemonic: "quattro-piu-due".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-05',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo la prima revisione la cadenza successiva \u00e8 annuale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: cadenza annuale \u00e8 distrattore. La cadenza \u00e8 BIENNALE per le autovetture private. Mnemonic: "4+2".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-06',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente decidere se pagare il bollo, perch\u00e9 \u00e8 una tassa facoltativa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: il bollo \u00e8 un\u2019imposta obbligatoria per il possesso del veicolo; il mancato pagamento comporta sanzioni e interessi.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C012-07',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: veicolo immatricolato nel marzo 2022. La prima revisione scadr\u00e0 entro marzo 2026.',
    risposta_corretta: true,
    spiegazione:
      'Prima revisione entro 4 anni dall\u2019immatricolazione: marzo 2022 + 4 anni = marzo 2026.',
    scenario_transfer: 'calcolo scadenza prima revisione',
    livello_difficolta: 2,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-08',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: prima revisione effettuata a febbraio 2026. La successiva dovr\u00e0 avvenire entro febbraio 2028.',
    risposta_corretta: true,
    spiegazione:
      'Cadenza biennale dopo la prima revisione: +2 anni.',
    scenario_transfer: 'calcolo revisioni successive',
    livello_difficolta: 2,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-09',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: circoli con veicolo con revisione scaduta. Sanzione amministrativa e divieto di circolazione fino a revisione effettuata.',
    risposta_corretta: true,
    spiegazione:
      'Revisione scaduta = sanzione + sospensione dal servizio: non puoi circolare fino al rifacimento.',
    scenario_transfer: 'circolazione con revisione scaduta',
    livello_difficolta: 2,
    articolo_cds: 'Art. 80 CdS',
  },
  {
    codice: 'QUIZ-ARG25-C012-10',
    concetto_codice: 'ARG25-C012',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Qual \u00e8 la differenza fra "revisione" e "bollo auto", e perch\u00e9 entrambi sono necessari per poter circolare legalmente?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: revisione = certificazione tecnica di idoneit\u00e0 alla circolazione (sicurezza, emissioni); bollo = imposta regionale sul possesso del veicolo. Entrambi obbligatori: senza revisione \u00e8 vietato circolare; senza bollo scattano sanzioni fiscali e, a lungo andare, iscrizione a ruolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 80 CdS',
  },

  // ============================================================
  // ARG25-C013 — Tenuta di strada (CRITICO P17)
  // ============================================================
  {
    codice: 'QUIZ-ARG25-C013-01',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La tenuta di strada dipende dall\u2019aderenza dei pneumatici al fondo stradale.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019aderenza \u00e8 il primo fattore: senza attrito utile le altre componenti non bastano a mantenere la traiettoria voluta.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-02',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La tenuta di strada dipende dall\u2019efficienza delle sospensioni e degli ammortizzatori.',
    risposta_corretta: true,
    spiegazione:
      'Mantengono la ruota a contatto con il fondo anche su buche e dossi: condizione necessaria per l\u2019aderenza utile in ogni istante.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-03',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una distribuzione equilibrata del carico sul veicolo migliora la stabilit\u00e0 e la tenuta di strada.',
    risposta_corretta: true,
    spiegazione:
      'Carico sbilanciato = centro di massa spostato = comportamento imprevedibile in curva e in frenata. Distribuire e fissare il carico \u00e8 buona pratica.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-04',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La tenuta di strada dipende principalmente dalla cilindrata del motore.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: TRAPPOLA CRITICA. La tenuta di strada NON dipende dalla cilindrata. Dipende da pneumatici, sospensioni, assetto, aderenza, distribuzione del carico. Pi\u00f9 cilindrata = pi\u00f9 potenza, che pu\u00f2 anzi rendere la guida pi\u00f9 critica.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-05',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un motore pi\u00f9 potente garantisce automaticamente una migliore tenuta di strada in curva.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: la potenza non migliora la tenuta. Anzi: pi\u00f9 potenza = pi\u00f9 rischio di eccedere l\u2019aderenza disponibile se il conducente spinge troppo.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-06',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'trappola',
    testo_domanda:
      'La tenuta di strada \u00e8 garantita in ogni caso dai moderni sistemi elettronici (ESP, ABS, ASR) indipendentemente dallo stato di pneumatici e sospensioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato + P18: i sistemi elettronici AIUTANO, ma non possono creare aderenza dove non c\u2019\u00e8. Su gomme lisce o ammortizzatori andati, ABS ed ESP non compensano l\u2019assenza di attrito utile.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-07',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: SUV potente con pneumatici logori su asfalto bagnato. La tenuta di strada \u00e8 comunque ottima grazie al peso elevato.',
    risposta_corretta: false,
    spiegazione:
      'Il peso non compensa la mancanza di battistrada utile. Pneumatici logori + bagnato = aquaplaning e spazi di frenata enormi, SUV o non SUV.',
    scenario_transfer: 'SUV con pneumatici logori',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-08',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: piccola utilitaria con pneumatici nuovi, sospensioni in buono stato e carico ben distribuito. La tenuta di strada \u00e8 mediamente migliore di un\u2019auto pi\u00f9 grande trascurata.',
    risposta_corretta: true,
    spiegazione:
      'I fattori che contano sono aderenza, sospensioni, assetto, distribuzione del carico. La dimensione e la potenza non compensano la manutenzione carente.',
    scenario_transfer: 'utilitaria ben mantenuta',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-09',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in curva l\u2019auto "sottosterza" (tende a proseguire dritta nonostante il volante). Il problema \u00e8 tipicamente legato ad aderenza ruote anteriori insufficiente.',
    risposta_corretta: true,
    spiegazione:
      'Sottosterzo = anteriore che perde aderenza prima del posteriore. Cause: velocit\u00e0 eccessiva, gomme anteriori logore, sospensioni anteriori usurate, carico spostato.',
    scenario_transfer: 'sottosterzo in curva',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG25-C013-10',
    concetto_codice: 'ARG25-C013',
    argomento_numero: 25,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca i cinque fattori principali che determinano la tenuta di strada e spiega perch\u00e9 la cilindrata NON compare fra loro.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) aderenza dei pneumatici al fondo; (2) efficienza di sospensioni e ammortizzatori; (3) geometria dell\u2019avantreno corretta; (4) distribuzione equilibrata del carico; (5) velocit\u00e0 adeguata alle condizioni. La cilindrata determina la potenza disponibile, non il grip: pi\u00f9 potenza senza grip adeguato \u00e8 solo un moltiplicatore di rischio.',
    livello_difficolta: 5,
    articolo_cds: undefined,
  },
] as const
