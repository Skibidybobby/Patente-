import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per l'argomento 20 — Fermata, sosta, arresto, partenza.
// 9 concetti × 10 item = 90 item.
// Pattern focus (ALTISSIMA densità, docs/research/03 § 5):
//  - P10 ambito silenzioso (centro abitato vs extraurbana)
//  - P11 eccezione nascosta (pannello integrativo che sovrascrive)
//  - P13 coppia terminologica fermata/sosta, arresto/fermata
//  - P14 "in corrispondenza" vs "in prossimità" con metri esatti
// NUMERI CRITICI:
//  - 5 m prima/dopo attraversamenti pedonali (divieto sosta in prossimità)
//  - 12 m dalle fermate TPL
//  - 50 km/h centro abitato
// V/F target 40-60%.

export const ARG20_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG20-C001 — Arresto, fermata, sosta, partenza
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C001-01',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019arresto è l\u2019interruzione della marcia dovuta a esigenze della circolazione, come una coda o un semaforo.',
    risposta_corretta: true,
    spiegazione: 'Art. 157 c.1 lett. a) CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-02',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La fermata è la sospensione della marcia di brevissima durata con conducente presente, tipicamente per la salita/discesa di persone.',
    risposta_corretta: true,
    spiegazione: 'Art. 157 c.1 lett. b) CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-03',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sosta è la sospensione prolungata della marcia, con o senza conducente a bordo.',
    risposta_corretta: true,
    spiegazione: 'Art. 157 c.1 lett. c) CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-04',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Fermata e sosta sono sinonimi: entrambe indicano la stessa sospensione della marcia.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica fermata/sosta. La fermata è breve, con conducente presente; la sosta è prolungata. L\u2019art. 157 le distingue nettamente.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-05',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un arresto prolungato davanti a un passaggio a livello chiuso equivale ad una sosta.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia arresto/sosta. L\u2019arresto è imposto dalla circolazione (passaggio chiuso); non è una scelta del conducente come la sosta.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-06',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni sospensione della marcia, in ogni caso, rientra nella categoria della sosta ai sensi dell\u2019art. 157.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "ogni/in ogni caso". L\u2019art. 157 distingue quattro fattispecie distinte: arresto, fermata, sosta, partenza.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-07',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un ingorgo in autostrada, il veicolo fermo da dieci minuti è in arresto, non in sosta.',
    risposta_corretta: true,
    spiegazione:
      'Transfer autostrada: l\u2019immobilizzazione dovuta al traffico rientra nell\u2019arresto, anche se prolungata.',
    scenario_transfer: 'Scenario ingorgo autostradale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-08',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un taxi che si ferma brevemente per far scendere un cliente sta effettuando una fermata, non una sosta.',
    risposta_corretta: true,
    spiegazione: 'Transfer taxi: fermata per salita/discesa è la fattispecie tipica.',
    scenario_transfer: 'Scenario taxi che lascia il cliente',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-09',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente che si ferma davanti a un edificio e scende dal veicolo per chiedere informazioni è in fermata.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a scenario informazioni: lasciare il veicolo (conducente non presente) trasforma la fermata in sosta.',
    scenario_transfer: 'Scenario conducente che abbandona il mezzo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C001-10',
    concetto_codice: 'ARG20-C001',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'Un\u2019auto lasciata col motore acceso e conducente a bordo per 20 minuti davanti a un ufficio è più vicina concettualmente a una sosta che a una fermata.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. La "brevissima durata" è tratto essenziale della fermata; 20 minuti la portano nella sosta anche se il conducente è presente.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 157 CdS',
  },

  // ============================================================
  // ARG20-C002 — Regole generali di collocazione
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C002-01',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Fermata e sosta si effettuano in vicinanza del margine destro della carreggiata.',
    risposta_corretta: true,
    spiegazione: 'Art. 157 c.2 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-02',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il veicolo in sosta deve essere collocato parallelamente al margine, salvo diversa segnaletica.',
    risposta_corretta: true,
    spiegazione: 'Art. 157 c.2: parallelismo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-03',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Su una strada a doppio senso, la sosta è ammessa anche sul margine sinistro.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Solo sulle strade a senso unico è ammessa anche a sinistra; sul doppio senso solo a destra.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-04',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il veicolo in sosta può essere collocato a destra o sinistra in ogni strada, in ogni caso.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Solo il senso unico ammette la sosta a sinistra; nel doppio senso è vietato.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-05',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sosta deve essere effettuata in corrispondenza del margine destro della carreggiata.',
    risposta_corretta: false,
    spiegazione:
      'P14 — "in corrispondenza" vs "in prossimità". L\u2019art. 157 usa "in prossimità/vicinanza"; non "in corrispondenza" (che significa esattamente lì).',
    pattern_trappola: 'P14',
    livello_difficolta: 4,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-06',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Sulla corsia di marcia il conducente può discrezionalmente sostare se non sussistono divieti espliciti.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "discrezionalmente". L\u2019art. 157 esige la vicinanza al margine, non sulla corsia di transito.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-07',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una via urbana a senso unico con entrambi i lati liberi, un\u2019auto può sostare indifferentemente a destra o a sinistra.',
    risposta_corretta: true,
    spiegazione: 'Transfer a senso unico: regola eccezionale del sinistro.',
    scenario_transfer: 'Scenario via urbana a senso unico',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-08',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana fuori centro abitato, la sosta può avvenire sulla banchina destra se sufficientemente ampia.',
    risposta_corretta: true,
    spiegazione:
      'Transfer extraurbana: la banchina è spazio di sosta fuori centro abitato, art. 157 + art. 3.',
    scenario_transfer: 'Scenario sosta su banchina extraurbana',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-09',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In centro abitato con segnaletica di stalli a spina di pesce, il parallelismo col margine non è richiesto.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a segnaletica specifica: "salvo diversa segnaletica" l\u2019art. 157 consente disposizioni obbliqu.',
    scenario_transfer: 'Scenario stalli a spina di pesce',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C002-10',
    concetto_codice: 'ARG20-C002',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'Un veicolo parcheggiato a 60 cm dal margine destro è conforme alla "vicinanza al margine" richiesta dall\u2019art. 157.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. 60 cm è troppo lontano dal margine; la prassi accettata è 20-30 cm. Il parcheggio deve avvicinarsi il più possibile al margine.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 157 CdS',
  },

  // ============================================================
  // ARG20-C003 — Divieto di fermata
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C003-01',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di fermata implica il divieto assoluto di interrompere la marcia, anche per brevi istanti.',
    risposta_corretta: true,
    spiegazione: 'Art. 158 c.1 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-02',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dove vige il divieto di fermata, è vietato a maggior ragione sostare.',
    risposta_corretta: true,
    spiegazione: 'Principio a fortiori.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-03',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di fermata è meno stringente del divieto di sosta.',
    risposta_corretta: false,
    spiegazione: 'FALSO. È più stringente: vieta anche la fermata breve.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-04',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dove vige il divieto di fermata, il conducente può sostare brevemente per far salire un passeggero.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica fermata/sosta invertita. Il divieto di fermata vieta ANCHE la fermata breve per salita/discesa, non ammette eccezioni di questo tipo.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-05',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di fermata è obbligatorio solo nei punti in cui è presente anche un divieto di sosta.',
    risposta_corretta: false,
    spiegazione:
      'P03 — scambio obbligo/divieto + P18. Il divieto di fermata è una fattispecie autonoma; la trappola confonde la sovrapposizione dei divieti.',
    pattern_trappola: 'P03',
    livello_difficolta: 4,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-06',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di fermata, in ogni caso, vieta sempre ogni tipo di interruzione della marcia, anche quella imposta dal semaforo rosso.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "in ogni caso/sempre". Il divieto di fermata riguarda le scelte del conducente, non gli arresti imposti dalla circolazione (semafori, code).',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-07',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Davanti all\u2019uscita di un ospedale con segnale di divieto di fermata, un\u2019ambulanza in servizio può fermarsi comunque.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a mezzi di soccorso: i veicoli di emergenza in servizio sono esentati (art. 177 CdS).',
    scenario_transfer: 'Scenario ambulanza in servizio davanti a ospedale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-08',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una galleria con divieto di fermata, un conducente con guasto motore deve comunque proseguire fino all\u2019uscita se il veicolo è manovrabile.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a galleria: la fermata in galleria è vietata e pericolosa; se possibile uscire, va fatto.',
    scenario_transfer: 'Scenario guasto in galleria',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-09',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada la fermata in corsia di marcia è sempre ammessa in caso di dubbio sul percorso.',
    risposta_corretta: false,
    spiegazione:
      'Transfer autostrada: la fermata sulla carreggiata autostradale è sempre vietata (art. 176), salvo guasto grave; il dubbio sul percorso non autorizza.',
    scenario_transfer: 'Scenario indecisione su uscita autostradale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C003-10',
    concetto_codice: 'ARG20-C003',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'Il divieto di fermata, essendo più stringente, incorpora logicamente anche il divieto di sosta.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Se è vietato fermarsi brevemente, è a maggior ragione vietato sostare (principio dell\u2019inclusione).',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },

  // ============================================================
  // ARG20-C004 — Divieto di sosta
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C004-01',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di sosta vieta la sospensione prolungata della marcia, ma consente la fermata breve.',
    risposta_corretta: true,
    spiegazione: 'Art. 158 c.2 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-02',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale di divieto di sosta è rotondo blu con una diagonale rossa.',
    risposta_corretta: true,
    spiegazione: 'Aspetto caratteristico del divieto di sosta.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-03',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dove vige divieto di sosta, è anche vietato fermarsi per far scendere un passeggero.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. La fermata per salita/discesa è consentita, purché breve e con conducente presente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-04',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sosta coincide con il divieto di fermata.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica fermata/sosta. Sono divieti distinti: il primo vieta solo la sosta prolungata; il secondo vieta anche la fermata breve.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-05',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sosta vale in ogni ora del giorno e della notte, salvo diversa indicazione.',
    risposta_corretta: true,
    spiegazione:
      'P11 — eccezione nascosta "salvo diversa indicazione". Formulazione CORRETTA: la clausola rende la regola vera, perché i pannelli integrativi possono limitarla.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-06',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sosta è posto in corrispondenza del luogo da cui inizia.',
    risposta_corretta: true,
    spiegazione:
      'P14 — "in corrispondenza" vs "in prossimità". In questo caso "in corrispondenza" è corretto: il segnale è posto esattamente dove inizia il divieto.',
    pattern_trappola: 'P14',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-07',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una via con divieto di sosta e pannello "lun-ven 8-20", la domenica l\u2019auto può sostare tutto il giorno.',
    risposta_corretta: true,
    spiegazione: 'Transfer a pannello temporale: fuori fascia il divieto non opera.',
    scenario_transfer: 'Scenario divieto sosta con fascia lavorativa',
    livello_difficolta: 1,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-08',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Davanti a una scuola con divieto di sosta, il genitore può fermare l\u2019auto il tempo necessario a far scendere il bambino, rimanendo a bordo.',
    risposta_corretta: true,
    spiegazione: 'Transfer a scuola: fermata breve ammessa nel divieto di sosta.',
    scenario_transfer: 'Scenario genitore davanti a scuola',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-09',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un conducente si allontana dal veicolo parcheggiato in zona con divieto di sosta, la violazione si configura appena lascia il posto di guida.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a abbandono veicolo: appena il conducente non è più presente pronto a ripartire, si passa da fermata a sosta.',
    scenario_transfer: 'Scenario allontanamento dal veicolo',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C004-10',
    concetto_codice: 'ARG20-C004',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'Una fermata di 30 secondi in zona con divieto di sosta, con conducente a bordo, è un comportamento ammesso.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. La fermata breve con conducente è compatibile con il divieto di sosta, che riguarda solo la sosta prolungata.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },

  // ============================================================
  // ARG20-C005 — "in corrispondenza" vs "in prossimità" — 5 m e 12 m
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C005-01',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La fermata e la sosta sono vietate in corrispondenza o in prossimità degli attraversamenti pedonali, a meno di 5 metri prima e dopo.',
    risposta_corretta: true,
    spiegazione: 'Art. 158 c.2 CdS: 5 m dagli attraversamenti pedonali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-02',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'È vietato sostare a meno di 12 metri dai segnali di fermata dei mezzi di trasporto pubblico di linea.',
    risposta_corretta: true,
    spiegazione: 'Art. 158 c.2 CdS: 12 m dalle fermate TPL.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-03',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il divieto di sosta in prossimità degli attraversamenti pedonali vale entro 15 metri prima e dopo.',
    risposta_corretta: false,
    spiegazione: 'FALSO. 5 metri, non 15.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-04',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sosta in prossimità degli attraversamenti pedonali vale entro 10 metri prima e dopo.',
    risposta_corretta: false,
    spiegazione:
      'P07 — numero quasi-giusto. Il valore corretto è 5 metri, non 10. Mnemonic: 5 m come 5 dita di una mano che attraversa la strada.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-05',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato sostare a meno di 15 metri dai segnali di fermata dei mezzi di trasporto pubblico di linea.',
    risposta_corretta: false,
    spiegazione:
      'P07 — numero quasi-giusto. 12 metri, non 15. Mnemonic: 12 come i passeggeri "da dozzina".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-06',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'È vietato sostare in corrispondenza dei segnali di fermata dei mezzi TPL, ma in prossimità la sosta è sempre ammessa.',
    risposta_corretta: false,
    spiegazione:
      'P14 — "in corrispondenza" vs "in prossimità" è la trappola regina. Il divieto vale IN ENTRAMBI i casi: in corrispondenza e in prossimità (entro 12 m).',
    pattern_trappola: 'P14',
    livello_difficolta: 4,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-07',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019auto parcheggiata a 4 metri da un attraversamento pedonale è sanzionabile per divieto di sosta.',
    risposta_corretta: true,
    spiegazione: 'Transfer a misura: 4 m < 5 m → violazione.',
    scenario_transfer: 'Scenario misurazione distanza da passaggio pedonale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-08',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019auto parcheggiata a 11 metri da una fermata del bus è sanzionabile.',
    risposta_corretta: true,
    spiegazione: 'Transfer a misura: 11 m < 12 m → violazione.',
    scenario_transfer: 'Scenario parcheggio vicino a fermata autobus',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-09',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una sosta a 6 metri da un attraversamento pedonale è conforme alla regola dei 5 metri.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a caso limite: 6 m > 5 m → conforme al minimo di legge.',
    scenario_transfer: 'Scenario sosta al margine del limite',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C005-10',
    concetto_codice: 'ARG20-C005',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'La distanza di 12 metri dalla fermata TPL è misurata dall\u2019asta del segnale e non dalla banchina della fermata.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019art. 158 parla di "segnali di fermata": il riferimento è il palo/segnale, non il bordo banchina.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 158 CdS',
  },

  // ============================================================
  // ARG20-C006 — Luoghi sempre vietati
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C006-01',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sosta è sempre vietata, anche senza segnaletica specifica, davanti ai passi carrabili regolarmente segnalati.',
    risposta_corretta: true,
    spiegazione: 'Art. 158 c.2 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-02',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sosta è sempre vietata sui marciapiedi, salvo diversa indicazione.',
    risposta_corretta: true,
    spiegazione: 'Art. 158 c.2 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-03',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sosta è ammessa sulle piste ciclabili se non ostacola il transito dei velocipedi.',
    risposta_corretta: false,
    spiegazione: 'FALSO. La sosta sulle piste ciclabili è sempre vietata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-04',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il divieto di sosta sulle piste ciclabili vale solo in centro abitato.',
    risposta_corretta: false,
    spiegazione:
      'P10 — ambito silenzioso. Il divieto vale ovunque: centro abitato, extraurbana, qualunque contesto.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-05',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Davanti a un passo carrabile non segnalato il divieto di sosta non si applica, neanche parzialmente.',
    risposta_corretta: false,
    spiegazione:
      'P11 — eccezione nascosta. L\u2019art. 158 richiede "passo carrabile regolarmente segnalato"; ma anche un passo non formalmente segnalato può rientrare in altri divieti (intralcio, art. 157).',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-06',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i marciapiedi, in qualsiasi strada e in ogni condizione, sono sempre vietati alla sosta, senza eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "tutti/sempre/senza eccezioni". La norma prevede "salvo diversa indicazione" (es. stalli disegnati su marciapiede rialzato).',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-07',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada extraurbana con binari del tram sul margine destro, è vietato sostare sui binari anche se la rotaia sembra disattivata.',
    risposta_corretta: true,
    spiegazione: 'Transfer a tramvia: sosta vietata sui binari (art. 158).',
    scenario_transfer: 'Scenario sosta vicino a binari tram',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-08',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una corsia riservata ai mezzi di trasporto pubblico, è vietato sostare anche di notte quando il servizio TPL è sospeso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer notte: l\u2019infrastruttura resta riservata; la sospensione del servizio non cambia il regime di sosta.',
    scenario_transfer: 'Scenario corsia TPL notturna',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-09',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In centro storico, il residente può parcheggiare sul marciapiede antistante la propria abitazione, a condizione di lasciare spazio ai pedoni.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a residente: il divieto di sosta sul marciapiede vale per tutti, residenti inclusi, salvo diversa indicazione ufficiale.',
    scenario_transfer: 'Scenario residente in centro storico',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C006-10',
    concetto_codice: 'ARG20-C006',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'Uno spartitraffico fisico che separa due corsie è luogo in cui la sosta è sempre vietata anche in assenza di segnale.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019art. 158 elenca espressamente gli spartitraffico tra i luoghi di divieto ex lege.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 158 CdS',
  },

  // ============================================================
  // ARG20-C007 — Strisce parcheggio: bianche, blu, gialle, rosa
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C007-01',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le strisce bianche delimitano gli stalli di sosta libera.',
    risposta_corretta: true,
    spiegazione: 'Codice colori parcheggio.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-02',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le strisce blu delimitano gli stalli di sosta a pagamento o a tempo.',
    risposta_corretta: true,
    spiegazione: 'Codice colori.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-03',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le strisce rosa delimitano gli stalli riservati ai disabili.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Le strisce rosa sono per donne in gravidanza e genitori con bambini fino a 2 anni; le strisce gialle per disabili.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-04',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le strisce gialle e le strisce rosa indicano entrambe stalli riservati a disabili.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia cromatica. Giallo = disabili, carico/scarico, taxi, servizi; Rosa = donne in gravidanza/genitori.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-05',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'In uno stallo blu il conducente può sempre liberamente sostare senza pagare se la colonnina non funziona.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "sempre/liberamente". Il regolamento locale determina come comportarsi (p.es. esporre prova del guasto); non è libertà piena.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-06',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti gli stalli blu, in ogni città, sono sempre a pagamento 24 ore su 24.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Il regime orario è stabilito dal regolamento comunale; pannelli integrativi specificano le fasce.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-07',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una zona residenziale con stalli bianchi destinati ai residenti, un non residente può parcheggiare solo se un pannello lo autorizza.',
    risposta_corretta: true,
    spiegazione: 'Transfer a stallo bianco riservato residenti.',
    scenario_transfer: 'Scenario zona residenti',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-08',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uno stallo giallo marcato "carico/scarico" può essere usato da un conducente privato solo per pochi minuti di consegna commerciale.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a carico/scarico: lo stallo è riservato a veicoli commerciali in servizio, non ai privati.',
    scenario_transfer: 'Scenario stallo carico/scarico',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-09',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una donna in gravidanza può parcheggiare in uno stallo rosa senza esporre contrassegno, se la normativa comunale lo consente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a stallo rosa: spesso la normativa comunale richiede contrassegno, ma non sempre; regime variabile.',
    scenario_transfer: 'Scenario stallo rosa',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG20-C007-10',
    concetto_codice: 'ARG20-C007',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'Uno stallo giallo può essere usato da un taxi in servizio anche senza pannello esplicito.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. Il giallo identifica stalli riservati ma la destinazione specifica (taxi, disabili, servizi) è indicata da pannello; senza pannello non si può presumere taxi.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 Reg. CdS',
  },

  // ============================================================
  // ARG20-C008 — Rimozione forzata e sanzioni
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C008-01',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La rimozione forzata del veicolo è disposta quando la sosta irregolare crea intralcio o pericolo.',
    risposta_corretta: true,
    spiegazione: 'Art. 159 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-02',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le spese di rimozione e custodia sono a carico del proprietario del veicolo.',
    risposta_corretta: true,
    spiegazione: 'Art. 159 CdS: oneri a carico del proprietario.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-03',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La rimozione forzata sostituisce la sanzione amministrativa.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. La rimozione si aggiunge alla sanzione amministrativa, non la sostituisce.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-04',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni sosta irregolare, in ogni caso, comporta sempre la rimozione forzata del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "ogni/sempre". La rimozione è prevista solo nei casi di intralcio/pericolo o nei luoghi tassativamente elencati (art. 159); sosta irregolare "semplice" = sanzione pecuniaria, non rimozione.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-05',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente lasciare il veicolo in doppia fila se dura pochi minuti.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "liberamente". La doppia fila è sempre vietata e può comportare rimozione; non è libertà del conducente.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 158 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-06',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il veicolo rimosso viene depositato, dal carro attrezzi, fino alla liberazione da parte del proprietario.',
    risposta_corretta: true,
    spiegazione:
      'P16 — passivo "viene depositato": corretta nel contenuto ma il passivo maschera chi agisce. Ricostruire: l\u2019ente preposto (polizia locale + carro attrezzi) dispone; il proprietario ritira.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-07',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In uno stallo disabili senza contrassegno, il veicolo è passibile di rimozione indipendentemente dalla durata della sosta.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a stallo disabili: è tra i casi tassativi di rimozione forzata.',
    scenario_transfer: 'Scenario sosta abusiva su stallo H',
    livello_difficolta: 2,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-08',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un\u2019auto abbandonata per due giorni in mezzo alla carreggiata può essere rimossa d\u2019ufficio.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a veicolo abbandonato: intralcio + pericolo → rimozione immediata.',
    scenario_transfer: 'Scenario veicolo abbandonato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-09',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Davanti a un passo carrabile segnalato, un veicolo in sosta può essere rimosso su richiesta del titolare del passo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a passo carrabile: richiesta del titolare → rimozione legittima.',
    scenario_transfer: 'Scenario passo carrabile bloccato',
    livello_difficolta: 2,
    articolo_cds: 'Art. 159 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C008-10',
    concetto_codice: 'ARG20-C008',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'La rimozione forzata, pur essendo misura amministrativa, può essere disposta senza coinvolgimento del proprietario al momento della rimozione stessa.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019art. 159 consente la rimozione senza previa notifica se il veicolo crea pericolo/intralcio; il proprietario sarà informato dopo.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 159 CdS',
  },

  // ============================================================
  // ARG20-C009 — Partenza e immissione
  // ============================================================
  {
    codice: 'QUIZ-ARG20-C009-01',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Prima di ripartire dopo una sosta, il conducente deve assicurarsi di poter compiere la manovra senza creare pericolo.',
    risposta_corretta: true,
    spiegazione: 'Art. 157 c.7 CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-02',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In partenza da un parcheggio, il conducente deve segnalare la manovra con l\u2019indicatore di direzione.',
    risposta_corretta: true,
    spiegazione: 'Art. 154 CdS: obbligo di segnalazione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-03',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In partenza da un parcheggio, il conducente ha la precedenza sui veicoli già in marcia sulla carreggiata.',
    risposta_corretta: false,
    spiegazione: 'FALSO. Deve dare la precedenza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-04',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'In fase di partenza, il conducente che ha innestato l\u2019indicatore di direzione ha automaticamente la precedenza sugli altri veicoli.',
    risposta_corretta: false,
    spiegazione:
      'P06 — inversione precedenza "ha/deve dare". L\u2019indicatore segnala l\u2019intenzione, ma non trasferisce la precedenza: deve darla comunque.',
    pattern_trappola: 'P06',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-05',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'In partenza il conducente può immettersi liberamente sulla carreggiata, confidando nella cortesia altrui.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente. La manovra va compiuta solo assicurandosi di non creare pericolo; non è libera.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-06',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente che riparte da una sosta può evitare di usare l\u2019indicatore di direzione se la strada è libera.',
    risposta_corretta: false,
    spiegazione:
      'P04 — può/deve. L\u2019indicatore va SEMPRE attivato in manovra di immissione; non è facoltà del conducente.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 154 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-07',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Uscendo da uno stallo "a pettine" in retromarcia, il conducente deve controllare specchietti e punto cieco prima di partire.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a retromarcia in parcheggio: dovere di assicurazione della manovra.',
    scenario_transfer: 'Scenario uscita retromarcia da stallo a pettine',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-08',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Immettendosi in carreggiata da una fermata sulla banchina extraurbana, il conducente può raggiungere rapidamente il limite di velocità della strada.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a extraurbana: prima deve assicurare la manovra in sicurezza e poi accelerare gradualmente; non è un\u2019immissione rapida "a tutti i costi".',
    scenario_transfer: 'Scenario ripartenza da banchina extraurbana',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-09',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, la partenza da una piazzola di sosta verso la carreggiata richiede la precedenza al traffico sulla carreggiata principale.',
    risposta_corretta: true,
    spiegazione:
      'Transfer autostrada: regola generale di immissione (art. 176 + art. 157).',
    scenario_transfer: 'Scenario ripartenza da piazzola autostradale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 176 CdS',
  },
  {
    codice: 'QUIZ-ARG20-C009-10',
    concetto_codice: 'ARG20-C009',
    argomento_numero: 20,
    fase_rotta: 'origina',
    testo_domanda:
      'La manovra di partenza da sosta e la manovra di svolta a sinistra condividono lo stesso dovere generale: dare la precedenza ai veicoli in marcia regolare.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Entrambe sono manovre "a rischio" che implicano il dovere di cedere la precedenza a chi procede sulla corsia di marcia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 154 CdS; art. 157 CdS',
  },
] as const
