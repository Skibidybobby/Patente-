import type { QuizItem } from '../_types'

// R.O.T.T.A. quiz items per l'argomento 18 — Segnali complementari, temporanei,
// di cantiere. 8 concetti × 10 item = 80 item.
// Pattern focus: P11 (il temporaneo prevale sul permanente è la regola, la
// trappola inverte), P10 (ambito silenzioso), P01 (universali).
// V/F target 40-60%.

export const ARG18_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG18-C001 — Segnali temporanei: sfondo giallo
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C001-01',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali temporanei di cantiere hanno sfondo giallo o arancione al posto del bianco.',
    risposta_corretta: true,
    spiegazione: 'Art. 30 Reg. CdS: colore distintivo del temporaneo.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-02',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Lo sfondo giallo indica che la situazione segnalata è transitoria.',
    risposta_corretta: true,
    spiegazione: 'Funzione del colore giallo nei segnali temporanei.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-03',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I segnali temporanei possono essere ignorati dal conducente che conosce la strada.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. I segnali temporanei vanno rispettati indipendentemente dalla conoscenza del percorso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-04',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'I segnali temporanei hanno sfondo verde per distinguerli da quelli permanenti bianchi.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia colore. Il giallo/arancio identifica il temporaneo; il verde è delle autostrade (permanente).',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-05',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i segnali posti in un cantiere, in ogni caso, hanno sempre sfondo giallo.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. In un cantiere coesistono segnali di pericolo, di prescrizione e delineatori bianchi/rossi; non tutti hanno sfondo giallo.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-06',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'I segnali temporanei sono collocati dall\u2019ente gestore per essere letti dal conducente.',
    risposta_corretta: true,
    spiegazione:
      'P16 — passivo "per essere letti": l\u2019affermazione è vera ma è bene ricostruire chi-fa-cosa (l\u2019ente installa, il conducente legge). Valore metacognitivo.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 21 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-07',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere notturno in autostrada, un segnale di pericolo con sfondo giallo ha lo stesso valore di un pericolo permanente triangolare con sfondo bianco.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a notte/autostrada: la funzione è la stessa; lo sfondo giallo segnala solo la temporaneità.',
    scenario_transfer: 'Scenario cantiere notturno autostradale',
    livello_difficolta: 2,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-08',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un segnale giallo di "lavori in corso" in una strada di montagna indica un cantiere stradale fisso o mobile.',
    risposta_corretta: true,
    spiegazione: 'Transfer a strada montana: il valore segnaletico non cambia.',
    scenario_transfer: 'Scenario cantiere stradale su strada di montagna',
    livello_difficolta: 1,
    articolo_cds: 'Art. 31 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-09',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una pista ciclabile sottoposta a lavori, un segnale temporaneo giallo "percorso interrotto" può reindirizzare i ciclisti sulla carreggiata veicolare.',
    risposta_corretta: true,
    spiegazione: 'Transfer a ciclisti: il temporaneo può deviare anche i velocipedi.',
    scenario_transfer: 'Scenario pista ciclabile in manutenzione',
    livello_difficolta: 2,
    articolo_cds: 'Art. 30 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C001-10',
    concetto_codice: 'ARG18-C001',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Un segnale a sfondo arancione lampeggiante su un veicolo operativo è da considerare un segnale temporaneo per il fatto stesso del colore.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Il colore arancione lampeggiante fuori dalla tipologia dei veicoli di soccorso rossi è tipico della segnaletica temporanea di cantiere mobile.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 30 Reg. CdS',
  },

  // ============================================================
  // ARG18-C002 — Prevalenza del temporaneo sul permanente
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C002-01',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di contrasto tra segnale temporaneo e segnale permanente, prevale il segnale temporaneo.',
    risposta_corretta: true,
    spiegazione: 'Regola fondamentale art. 38 Reg. CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-02',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per rafforzare la prevalenza del temporaneo, il segnale permanente può essere coperto, rimosso o sbarrato.',
    risposta_corretta: true,
    spiegazione: 'Art. 38 Reg. CdS: gestione fisica del segnale permanente.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-03',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Quando un cantiere coesiste con un segnale permanente in contrasto, il conducente deve seguire quello permanente.',
    risposta_corretta: false,
    spiegazione: 'FALSO. Deve seguire quello temporaneo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-04',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Quando segnale temporaneo e permanente sono in contrasto, il conducente deve seguire il segnale permanente perché ha carattere stabile.',
    risposta_corretta: false,
    spiegazione:
      'P11 — "eccezione nascosta" invertita: la regola è che il temporaneo prevale, proprio perché è l\u2019eccezione rispetto al sistema permanente. La trappola inverte la regola.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-05',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può ignorare liberamente un segnale temporaneo se gli pare in contrasto con la logica del percorso.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "liberamente". Il segnale temporaneo è vincolante: non c\u2019è discrezionalità nel rispettarlo.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-06',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni cantiere, in ogni strada, il temporaneo prevale sempre su tutti i segnali permanenti che incontra.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale "sempre/tutti". La prevalenza è limitata al contrasto specifico; non è un\u2019abrogazione generalizzata di tutta la segnaletica permanente del tratto.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-07',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada con limite permanente di 130 km/h, un segnale temporaneo giallo di 80 km/h impone il nuovo limite.',
    risposta_corretta: true,
    spiegazione: 'Transfer a velocità autostradale: il temporaneo sovrascrive il limite.',
    scenario_transfer: 'Scenario cantiere autostradale con limite temporaneo ridotto',
    livello_difficolta: 1,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-08',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un incrocio dove un cantiere installa un temporaneo "dare precedenza" sovrapposto a un segnale permanente "diritto di precedenza", il conducente deve dare la precedenza.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a precedenza: l\u2019inversione della precedenza è ammissibile via temporaneo se lo richiede l\u2019operatività del cantiere.',
    scenario_transfer: 'Scenario incrocio con inversione temporanea di precedenza',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-09',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un neopatentato incontra in autostrada un cantiere con limite temporaneo di 110 km/h, può mantenere quel limite.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a neopatentato: il limite temporaneo è un massimo generale; il neopatentato rimane vincolato al proprio limite individuale (100 km/h in autostrada, art. 117).',
    scenario_transfer: 'Scenario neopatentato e limite di cantiere',
    livello_difficolta: 4,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C002-10',
    concetto_codice: 'ARG18-C002',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Se un segnale permanente risulta coperto da un telo giallo durante un cantiere, dopo il cantiere va riscoperto ma l\u2019ente non è obbligato a reinstallarlo se già coperto.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. A fine lavori l\u2019ente ripristina tutti i segnali permanenti che erano stati sbarrati o coperti. La riscopertura è obbligatoria.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 Reg. CdS',
  },

  // ============================================================
  // ARG18-C003 — Lavori in corso
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C003-01',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale "lavori" su sfondo giallo avverte della presenza di un cantiere stradale.',
    risposta_corretta: true,
    spiegazione: 'Art. 31 Reg. CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 31 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-02',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In presenza del segnale "lavori", il conducente deve moderare la velocità e prestare attenzione.',
    risposta_corretta: true,
    spiegazione: 'Obbligo di prudenza rinforzato.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 31 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-03',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale "lavori" è collocato sempre in corrispondenza esatta del cantiere senza preavviso.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il segnale è di preavviso, collocato a distanza dal cantiere per dare tempo di reazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 31 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-04',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il segnale "lavori" è collocato in corrispondenza del cantiere, quindi il conducente può rallentare solo all\u2019ultimo momento.',
    risposta_corretta: false,
    spiegazione:
      'P14 — "in corrispondenza" vs "in prossimità". Il segnale è posto in prossimità (a distanza); rallentare all\u2019ultimo momento è pericoloso.',
    pattern_trappola: 'P14',
    livello_difficolta: 3,
    articolo_cds: 'Art. 31 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-05',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può sempre sorpassare liberamente nelle zone di cantiere se la carreggiata è doppia.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "liberamente". Nei cantieri il sorpasso può essere vietato con specifici segnali; non è mai libero.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 148 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-06',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nei cantieri di lavoro il conducente può limitarsi a non accelerare, senza essere tenuto a moderare sensibilmente la velocità.',
    risposta_corretta: false,
    spiegazione:
      'P04 — può vs deve. L\u2019art. 141 + 31 Reg. CdS impongono di MODERARE la velocità, non solo di non accelerare.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-07',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere mobile con operai a piedi sulla corsia, la velocità dovrebbe essere ridotta ben al di sotto del limite di cantiere standard.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a tutela operatori: la presenza di persone richiede prudenza superiore al limite tabellare.',
    scenario_transfer: 'Scenario operai a piedi in carreggiata',
    livello_difficolta: 2,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-08',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere notturno l\u2019assenza di illuminazione artificiale giustifica il conducente che viaggia al limite massimo segnalato.',
    risposta_corretta: false,
    spiegazione:
      'Transfer notte + cantiere: l\u2019art. 141 impone velocità adeguata alla visibilità ridotta, a maggior ragione vicino a un cantiere.',
    scenario_transfer: 'Scenario cantiere notturno senza illuminazione',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-09',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il segnale di lavori seguito da un pannello integrativo "300 m" indica che il cantiere inizia 300 metri dopo il segnale.',
    risposta_corretta: true,
    spiegazione:
      'Transfer con pannello di distanza: il pannello integrativo specifica la distanza alla situazione segnalata.',
    scenario_transfer: 'Scenario preavviso con pannello di distanza',
    livello_difficolta: 2,
    articolo_cds: 'Art. 83 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C003-10',
    concetto_codice: 'ARG18-C003',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Un cantiere di brevissima durata (es. taglio erba di un\u2019ora) può legittimamente richiedere l\u2019installazione di segnaletica temporanea.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. L\u2019obbligo di segnalazione non dipende dalla durata ma dal rischio per la circolazione; anche cantieri brevissimi vanno segnalati.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 21 CdS',
  },

  // ============================================================
  // ARG18-C004 — Coni, delineatori, barriere
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C004-01',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I coni di canalizzazione e le barriere a strisce bianche e rosse delimitano il margine del cantiere.',
    risposta_corretta: true,
    spiegazione: 'Artt. 40, 41 Reg. CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 40 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-02',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente non deve scavalcare né spostare coni e delineatori di cantiere.',
    risposta_corretta: true,
    spiegazione: 'Principio di rispetto della segnaletica fisica.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-03',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I delineatori flessibili hanno solo funzione decorativa e possono essere rimossi dai conducenti.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Sono segnali complementari vincolanti, non decorazioni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-04',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può liberamente spostare un cono di canalizzazione se gli impedisce la manovra.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente. È vietato spostare la segnaletica di cantiere, in qualsiasi circostanza.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-05',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'I delineatori flessibili e i delineatori di margine permanenti sono dispositivi equivalenti.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica. I flessibili sono temporanei di cantiere; i delineatori di margine sono permanenti e indicano il bordo della carreggiata. Funzioni diverse.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-06',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutte le barriere a strisce bianche e rosse sono segnali complementari direzionali, in ogni contesto.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Esistono barriere di chiusura (non direzionali) e barriere direzionali; le strisce bianche-rosse da sole non identificano una funzione univoca.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 40 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-07',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere autostradale con restringimento da due a una corsia, i coni guidano il flusso verso la corsia unica rimanente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer autostrada: la canalizzazione mediante coni è tipica dei restringimenti in autostrada.',
    scenario_transfer: 'Scenario restringimento autostradale',
    livello_difficolta: 1,
    articolo_cds: 'Art. 40 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-08',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un cono è stato abbattuto e giace sulla carreggiata, il conducente che vi passa sopra è libero da colpa perché il cono era già fuori posizione.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a segnaletica danneggiata: l\u2019obbligo di prudenza dell\u2019art. 140 si applica comunque; il conducente deve evitare ostacoli sulla carreggiata.',
    scenario_transfer: 'Scenario cono abbattuto sulla carreggiata',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-09',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada urbana, la canalizzazione con coni che restringe a senso unico alternato vale come segnaletica vincolante anche se non c\u2019è movieri presenti.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a senso unico alternato senza movieri: la segnaletica fisica è sufficiente a vincolare il flusso.',
    scenario_transfer: 'Scenario senso unico alternato con segnaletica fisica',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C004-10',
    concetto_codice: 'ARG18-C004',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Un cono di canalizzazione è un segnale complementare e non un segnale verticale di prescrizione.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. I coni rientrano nei segnali complementari (art. 42 CdS), distinti dai verticali di prescrizione triangolari/tondi. Hanno però valore vincolante.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 42 CdS',
  },

  // ============================================================
  // ARG18-C005 — Segnaletica mobile su veicoli operativi
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C005-01',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un pannello a frecce lampeggianti sul retro di un veicolo operativo indica un cantiere mobile.',
    risposta_corretta: true,
    spiegazione: 'Segnaletica mobile su veicoli di servizio.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-02',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le frecce lampeggianti sul retro di un veicolo operativo indicano il lato verso cui il traffico deve deviare.',
    risposta_corretta: true,
    spiegazione: 'Funzione del pannello a frecce.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-03',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il pannello a messaggio variabile su un veicolo operativo ha valore puramente estetico.',
    risposta_corretta: false,
    spiegazione: 'FALSO. Ha lo stesso valore vincolante di un segnale verticale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-04',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello a frecce sul retro di un veicolo operativo può essere ignorato perché è montato su mezzo in movimento.',
    risposta_corretta: false,
    spiegazione:
      'P11 — eccezione nascosta invertita. La natura mobile non elimina l\u2019obbligo di rispetto; il temporaneo prevale comunque.',
    pattern_trappola: 'P11',
    livello_difficolta: 3,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-05',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'In ogni caso, i veicoli operativi con segnaletica mobile sono sempre gialli.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Il veicolo può avere colore qualsiasi; è la segnaletica installata (lampeggianti arancio, pannello a frecce) a qualificarlo come operativo.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-06',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il pannello a frecce lampeggianti sul retro del veicolo operativo viene installato dall\u2019ente gestore affinché il conducente che sopraggiunge sia deviato.',
    risposta_corretta: true,
    spiegazione:
      'P16 — passivo "sia deviato". L\u2019affermazione è sostanzialmente corretta, ma è utile ricostruire: chi devia? Il conducente che segue le frecce. Valore metacognitivo.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-07',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, un veicolo spazzatrice operativo sulla corsia di emergenza con frecce lampeggianti segnala al conducente di non invadere la corsia di emergenza.',
    risposta_corretta: true,
    spiegazione: 'Transfer ad autostrada: ruolo protettivo della segnaletica mobile.',
    scenario_transfer: 'Scenario spazzatrice su corsia di emergenza',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-08',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un veicolo della polizia stradale con lampeggianti blu è equivalente a un veicolo operativo di cantiere con lampeggianti gialli.',
    risposta_corretta: false,
    spiegazione:
      'Transfer a veicoli emergenza: blu = mezzi di soccorso/polizia con diritto di precedenza; giallo = operativo ordinario. Funzioni diverse.',
    scenario_transfer: 'Scenario distinzione lampeggianti blu vs giallo',
    livello_difficolta: 2,
    articolo_cds: 'Art. 177 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-09',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un veicolo operativo che rimuove un\u2019auto in doppia fila può muoversi lentamente sulla carreggiata esponendo pannello a frecce.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a rimozione veicolo: il carro attrezzi è un veicolo operativo e usa la stessa segnaletica.',
    scenario_transfer: 'Scenario carro attrezzi in servizio',
    livello_difficolta: 2,
    articolo_cds: 'Art. 39 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C005-10',
    concetto_codice: 'ARG18-C005',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Un veicolo che circola privo di frecce operative ma con semplici quattro frecce di emergenza NON costituisce un cantiere mobile ai sensi del Reg. CdS.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Le quattro frecce indicano una situazione di pericolo del singolo veicolo, non un cantiere operativo attivo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 163 CdS',
  },

  // ============================================================
  // ARG18-C006 — Luci gialle/lampeggianti
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C006-01',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le luci gialle fisse o lampeggianti sui segnali di cantiere ne aumentano la visibilità di notte.',
    risposta_corretta: true,
    spiegazione: 'Funzione di rinforzo notturno.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-02',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una luce gialla lampeggiante su un segnale di cantiere indica che il pericolo segnalato è attivo al momento del passaggio.',
    risposta_corretta: true,
    spiegazione: 'Valore di attivazione del segnale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-03',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le luci lampeggianti gialle sono riservate solo ai veicoli di polizia.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Le luci gialle lampeggianti sono tipiche dei veicoli operativi e dei cantieri; la polizia usa i lampeggianti blu.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-04',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Una luce gialla fissa vale quanto una luce rossa in termini di pericolo.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia colore. Il rosso segnala divieto o arresto; il giallo segnala attenzione. Non equivalenti.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-05',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Di giorno il conducente può sempre ignorare le luci lampeggianti gialle dei cantieri.',
    risposta_corretta: false,
    spiegazione:
      'P10 — ambito silenzioso. Le luci di cantiere sono vincolanti di giorno come di notte; la regola non si attiva solo al buio.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-06',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le luci di cantiere sono installate dall\u2019ente gestore affinché siano rese visibili a tutti gli utenti della strada.',
    risposta_corretta: true,
    spiegazione:
      'P16 — passivo "siano rese visibili". Corretto ma richiede ricostruzione agente.',
    pattern_trappola: 'P16',
    livello_difficolta: 3,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-07',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una luce gialla lampeggiante su un semaforo spento indica di procedere con cautela cedendo a chi viene dall\u2019incrocio.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a semaforo: il giallo lampeggiante semaforico indica incrocio non regolato e precedenza secondo regola generale.',
    scenario_transfer: 'Scenario semaforo in modalità lampeggiante',
    livello_difficolta: 3,
    articolo_cds: 'Art. 41 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-08',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Di notte in autostrada, una serie di luci gialle lampeggianti in sequenza indica un restringimento progressivo di corsia.',
    risposta_corretta: true,
    spiegazione: 'Transfer notte autostrada: luci a freccia in sequenza = canalizzazione.',
    scenario_transfer: 'Scenario restringimento notturno in autostrada',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-09',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un automobilista che in un cantiere con luci lampeggianti gialle viaggia al limite segnalato rispetta l\u2019art. 141 solo se la visibilità è integra.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a velocità adeguata: il limite tabellare è un massimo, sempre condizionato alla visibilità.',
    scenario_transfer: 'Scenario limite di cantiere e visibilità ridotta',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C006-10',
    concetto_codice: 'ARG18-C006',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'L\u2019assenza di luci lampeggianti in un cantiere notturno è una condizione sufficiente per ritenere il cantiere "chiuso" al traffico di servizio.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA. L\u2019assenza di luci può segnalare un guasto, non necessariamente la chiusura; la segnaletica fissa può restare vincolante anche senza lampeggianti.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 42 Reg. CdS',
  },

  // ============================================================
  // ARG18-C007 — Delineatori di margine e pannelli curva
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C007-01',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I delineatori di margine normali hanno catadiottro rosso rettangolare sul lato destro del senso di marcia.',
    risposta_corretta: true,
    spiegazione: 'Reg. CdS artt. 173-177.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-02',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I delineatori di margine indicano il bordo destro e sinistro della carreggiata.',
    risposta_corretta: true,
    spiegazione: 'Funzione di segnaletica complementare permanente.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-03',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I pannelli a strisce bianche e nere segnalano un tratto rettilineo privo di pericoli.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Indicano curve pericolose o punti con rischio di uscita di strada.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-04',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'I delineatori di margine e i delineatori flessibili di cantiere hanno lo stesso significato per il conducente.',
    risposta_corretta: false,
    spiegazione:
      'P13 — coppia terminologica. I delineatori di margine sono permanenti; i flessibili sono temporanei di cantiere. Non equivalenti.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-05',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Ogni curva pericolosa, in qualsiasi strada, è sempre rinforzata da pannelli a strisce bianche e nere.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Solo le curve con caratteristiche di maggior rischio sono rinforzate; non tutte.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-06',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il catadiottro dei delineatori di margine è bianco a destra e rosso a sinistra del senso di marcia.',
    risposta_corretta: false,
    spiegazione:
      'P13/inversione. È l\u2019opposto: rosso a destra, bianco a sinistra. Errore classico di memoria.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-07',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una strada montana con tornanti, i pannelli a strisce bianche e nere sui lati della curva aiutano il conducente a leggere la traiettoria di notte.',
    risposta_corretta: true,
    spiegazione: 'Transfer notte tornanti: funzione catarifrangente.',
    scenario_transfer: 'Scenario tornanti notturni di montagna',
    livello_difficolta: 2,
    articolo_cds: 'Art. 42 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-08',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su una strada statale di pianura, i delineatori di margine a catadiottro permettono al conducente di stimare il bordo carreggiata in condizioni di nebbia.',
    risposta_corretta: true,
    spiegazione:
      'Transfer nebbia: i catadiottri catarifrangenti restano visibili nella luce dei fari.',
    scenario_transfer: 'Scenario guida in nebbia fitta',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-09',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In autostrada, i delineatori di margine sono rinforzati con catadiottri e possono aiutare in caso di guasto nella corsia di emergenza.',
    risposta_corretta: true,
    spiegazione: 'Transfer emergenza autostradale: riferimento visivo del margine.',
    scenario_transfer: 'Scenario guasto in corsia di emergenza',
    livello_difficolta: 2,
    articolo_cds: 'Art. 173 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C007-10',
    concetto_codice: 'ARG18-C007',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Il sistema catadiottro "rosso a destra, bianco a sinistra" è coerente con le luci del veicolo: posizione rosse dietro (margine raggiunto) e bianche davanti (margine da raggiungere).',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Buona mnemonic: il "rosso" corrisponde al lato dove il conducente sta andando, così come le luci posteriori del veicolo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 173 Reg. CdS',
  },

  // ============================================================
  // ARG18-C008 — Fine lavori e ripristino
  // ============================================================
  {
    codice: 'QUIZ-ARG18-C008-01',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il segnale "fine lavori" indica che il tratto di cantiere è terminato e riprendono validità i segnali permanenti.',
    risposta_corretta: true,
    spiegazione: 'Art. 38 Reg. CdS.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-02',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo il segnale di fine lavori, le prescrizioni temporanee cessano di valere.',
    risposta_corretta: true,
    spiegazione: 'Conseguenza diretta del ripristino.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-03',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo il segnale di fine lavori, il conducente deve continuare a rispettare il limite di velocità ridotto del cantiere.',
    risposta_corretta: false,
    spiegazione:
      'FALSO. Il limite di cantiere cessa; vale di nuovo il limite della strada.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-04',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo la fine lavori, il segnale permanente riacquista validità solo se viene fisicamente reinstallato dall\u2019ente.',
    risposta_corretta: false,
    spiegazione:
      'P11 — eccezione nascosta invertita. I segnali permanenti erano solo coperti/sbarrati: scoprirli equivale a reinstallarli. La regola è di ripristino, non di reinstallazione.',
    pattern_trappola: 'P11',
    livello_difficolta: 4,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-05',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Alla fine del cantiere, il conducente può sempre accelerare subito al limite originario, anche se la segnaletica è confusa.',
    risposta_corretta: false,
    spiegazione:
      'P12 — libertà apparente "sempre accelerare subito". L\u2019art. 141 impone comunque prudenza quando la strada non è chiaramente ripristinata.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-06',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutti i segnali temporanei, in ogni caso, devono avere una precisa indicazione "fine lavori" per cessare la prescrizione.',
    risposta_corretta: false,
    spiegazione:
      'P01 — quantificatore universale. Le prescrizioni temporanee possono cessare anche con la semplice rimozione del cantiere e scomparsa della segnaletica, non solo con un esplicito "fine lavori".',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-07',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un cantiere autostradale che termina con "fine lavori" e ripristino del limite 130 km/h, un neopatentato non può superare i 100 km/h.',
    risposta_corretta: true,
    spiegazione:
      'Transfer neopatentato: il ripristino riguarda il limite generale; il limite individuale dei neopatentati (art. 117) resta in vigore.',
    scenario_transfer: 'Scenario ripristino limite autostradale e neopatentato',
    livello_difficolta: 3,
    articolo_cds: 'Art. 117 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-08',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Alla fine di un cantiere su pista ciclabile, i velocipedi possono tornare a utilizzare il percorso dedicato senza necessità di nuovi segnali.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a pista ciclabile: la segnaletica permanente torna operativa con la rimozione del cantiere.',
    scenario_transfer: 'Scenario ripristino pista ciclabile',
    livello_difficolta: 2,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-09',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se dopo il cantiere l\u2019asfalto risulta danneggiato nonostante il "fine lavori", il conducente deve adattare la velocità alle condizioni reali.',
    risposta_corretta: true,
    spiegazione:
      'Transfer a condizione reale: il ripristino formale non implica condizioni ideali; vale sempre l\u2019art. 141.',
    scenario_transfer: 'Scenario asfalto danneggiato dopo fine lavori',
    livello_difficolta: 3,
    articolo_cds: 'Art. 141 CdS',
  },
  {
    codice: 'QUIZ-ARG18-C008-10',
    concetto_codice: 'ARG18-C008',
    argomento_numero: 18,
    fase_rotta: 'origina',
    testo_domanda:
      'Il segnale "fine lavori" è esso stesso un segnale temporaneo (sfondo giallo) pur segnando la cessazione di tutte le prescrizioni temporanee.',
    risposta_corretta: true,
    spiegazione:
      'ORIGINA. Pur chiudendo il cantiere, il segnale di fine lavori appartiene alla categoria dei temporanei e ne condivide lo sfondo giallo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 38 Reg. CdS',
  },
] as const
