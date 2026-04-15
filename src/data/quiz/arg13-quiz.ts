import type { QuizItem } from '../_types'

// Argomento 13 — Dispositivi di equipaggiamento, cinture, sistemi di ritenuta, casco
// 10 concetti × 10 item = 100 item V/F
// Pattern trappola dominanti: P03 (obbligo↔divieto), P04 (può↔deve),
// P12 (libertà apparente), F04 (termini esotici, usato come spia).
// Base normativa: CdS art. 171, 172; L. 177/2024; UNECE R129 (01/09/2024).

export const ARG13_QUIZ: readonly QuizItem[] = [
  // =====================================================================
  // ARG13-C001 — Obbligo della cintura di sicurezza
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C001-01',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente e i passeggeri degli autoveicoli equipaggiati con cinture di sicurezza devono indossarle durante la marcia.',
    risposta_corretta: true,
    spiegazione:
      'Art. 172 CdS: obbligo universale di uso delle cinture.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-02',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di usare la cintura si applica sia ai sedili anteriori sia a quelli posteriori.',
    risposta_corretta: true,
    spiegazione:
      'Estensione ai posteriori: nessuna distinzione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-03',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo della cintura vale anche per i tragitti brevi all\u2019interno della città.',
    risposta_corretta: true,
    spiegazione:
      'Nessuna deroga per "tragitti brevi".',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-04',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente è obbligato a indossare la cintura, mentre i passeggeri posteriori possono decidere liberamente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): nessuna "libertà" per i passeggeri posteriori. L\u2019obbligo è universale.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-05',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo della cintura vale unicamente fuori dai centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): l\u2019obbligo è continuo, urbano ed extraurbano.',
    pattern_trappola: 'P10',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-06',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può allacciare la cintura soltanto prima di raggiungere velocità superiori a 50 km/h.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numeri quasi-giusti) + P04: la cintura va allacciata SEMPRE durante la marcia, nessuna soglia di velocità.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-07',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un taxi devo comunque allacciare la cintura come passeggero posteriore.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019obbligo vale anche sui taxi (salvo le specifiche esenzioni di servizio). Il passeggero risponde personalmente.',
    scenario_transfer:
      'Corsa in taxi in città.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-08',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Anche durante una manovra di parcheggio in retromarcia nel cortile condominiale devo indossare la cintura.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la cintura va indossata durante la marcia, manovre incluse. Il cortile condominiale frequentato resta "strada".',
    scenario_transfer:
      'Manovra di parcheggio in retromarcia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-09',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un minivan con 8 posti la cintura va allacciata da tutti gli occupanti.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il numero dei posti non cambia l\u2019obbligo; ogni cintura deve essere indossata.',
    scenario_transfer:
      'Minivan familiare in viaggio.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C001-10',
    concetto_codice: 'ARG13-C001',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'La cintura va indossata solo quando il veicolo supera la velocità di 30 km/h.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la statistica degli incidenti urbani mostra lesioni gravi già a velocità basse. Nessuna soglia: sempre allacciata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },

  // =====================================================================
  // ARG13-C002 — Funzione delle cinture di sicurezza
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C002-01',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La cintura di sicurezza trattiene il corpo dell\u2019occupante al sedile durante un urto.',
    risposta_corretta: true,
    spiegazione:
      'Funzione primaria: impedire la proiezione fuori dal sedile.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-02',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La cintura distribuisce l\u2019energia dell\u2019urto sulle parti più resistenti del corpo (bacino e torace).',
    risposta_corretta: true,
    spiegazione:
      'Il design prevede di caricare lo scheletro e non gli organi molli.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-03',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Indossare la cintura riduce drasticamente la gravità delle lesioni in caso di incidente.',
    risposta_corretta: true,
    spiegazione:
      'Dato consolidato da epidemiologia stradale.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-04',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'La cintura di sicurezza protegge l\u2019occupante perché rallenta la velocità del veicolo in frenata.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): la cintura NON rallenta il veicolo. Protegge impedendo la proiezione dell\u2019occupante contro parti interne del veicolo.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-05',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019airbag rende superflua la cintura di sicurezza, perché svolge la stessa funzione di trattenimento dell\u2019occupante.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): l\u2019airbag è complementare, non sostitutivo. Senza cintura l\u2019airbag può persino aggravare le lesioni (impatto scorretto su viso/torace).',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-06',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'La cintura di sicurezza è efficace unicamente negli urti frontali.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale) + F01 ("unicamente"): è efficace anche in urti laterali, tamponamenti e ribaltamenti.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-07',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un tamponamento a 40 km/h la cintura impedisce che la testa colpisca il poggiatesta in maniera traumatica e ne riduce il colpo di frusta.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: anche ad urto basso la cintura evita movimenti incontrollati del tronco.',
    scenario_transfer:
      'Tamponamento urbano a bassa velocità.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-08',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un passeggero posteriore non allacciato può essere proiettato in avanti in caso di urto e colpire gli occupanti anteriori.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il rischio del "proiettile umano" è documentato nella fisica dell\u2019urto.',
    scenario_transfer:
      'Incidente frontale con passeggero posteriore non allacciato.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-09',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In un ribaltamento laterale la cintura riduce il rischio di essere espulsi dall\u2019abitacolo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019espulsione è uno dei principali fattori di mortalità nei ribaltamenti.',
    scenario_transfer:
      'Uscita di strada con ribaltamento.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG13-C002-10',
    concetto_codice: 'ARG13-C002',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'La cintura impedisce completamente qualsiasi trauma agli occupanti.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la cintura riduce drasticamente, non azzera, la gravità. È un dispositivo di mitigazione, non di immunità assoluta.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },

  // =====================================================================
  // ARG13-C003 — Responsabilità per mancato uso della cintura
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C003-01',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Della mancata osservanza dell\u2019obbligo di indossare la cintura risponde chi non la indossa.',
    risposta_corretta: true,
    spiegazione:
      'Art. 172 co. 10: principio generale di responsabilità personale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-02',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se il trasportato è minorenne, la responsabilità della mancata cintura ricade sul conducente.',
    risposta_corretta: true,
    spiegazione:
      'Il conducente deve accertarsi che i minori siano allacciati.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-03',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La responsabilità per il minore può ricadere anche su un altro soggetto che lo abbia in custodia al momento del trasporto.',
    risposta_corretta: true,
    spiegazione:
      'Il Codice ammette questa eccezione: la responsabilità segue l\u2019affidamento effettivo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-04',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Se il passeggero adulto non indossa la cintura, risponde il conducente del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P05 (inversione di ruoli): per gli ADULTI risponde chi non la indossa, non il conducente. Il conducente risponde solo per i minori.',
    pattern_trappola: 'P05',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-05',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può decidere di non verificare se i minori a bordo sono allacciati, demandandone la responsabilità ai genitori.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può" vs "deve"): il conducente DEVE accertarsi; la responsabilità non è delegabile a distanza.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-06',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'La responsabilità per la mancata cintura ricade unicamente sul conducente, anche per i passeggeri adulti.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 ("unicamente") + F01: risponde CHI non la indossa per gli adulti.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-07',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se porto in auto il figlio di un amico, della mancata cintura del minore rispondo io in quanto conducente.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il conducente risponde anche dei minori altrui che trasporta, salvo che viaggino con altro adulto custode.',
    scenario_transfer:
      'Trasporto occasionale di figlio di un amico.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-08',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se porto in auto mio figlio e il nonno che lo accudisce seduto accanto a lui, la responsabilità di verificare l\u2019allacciamento può ricadere sul nonno come custode.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: eccezione del custode prevista dall\u2019art. 172 co. 10.',
    scenario_transfer:
      'Bambino affidato al nonno sul sedile posteriore.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-09',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un passeggero adulto si slaccia la cintura durante la marcia e viene fermato per un controllo, la sanzione ricade su di lui.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: adulto = responsabilità propria.',
    scenario_transfer:
      'Passeggero adulto slacciato durante controllo stradale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C003-10',
    concetto_codice: 'ARG13-C003',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'La sanzione per mancata cintura ricade sul proprietario del veicolo, a prescindere da chi si trovi a bordo.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la responsabilità è di chi non la indossa (o del conducente se si tratta di minore), non del proprietario in quanto tale.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 10 CdS',
  },

  // =====================================================================
  // ARG13-C004 — Esenzioni dall'obbligo di cintura
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C004-01',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le persone affette da patologia che impedisce l\u2019uso della cintura sono esentate previa certificazione medica.',
    risposta_corretta: true,
    spiegazione:
      'Art. 172 co. 7: esenzione medica documentata.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-02',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le donne in stato di gravidanza possono essere esentate previa certificazione ginecologica.',
    risposta_corretta: true,
    spiegazione:
      'Esenzione specifica per gravidanza se il ginecologo la ritiene opportuna.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-03',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Gli appartenenti alle forze dell\u2019ordine in servizio di emergenza sono esentati dall\u2019obbligo della cintura.',
    risposta_corretta: true,
    spiegazione:
      'Esenzione legata alle esigenze operative di intervento.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-04',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Tutte le donne in stato di gravidanza sono automaticamente esentate dall\u2019obbligo della cintura.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 ("tutte") + P11 (eccezione nascosta): serve certificato ginecologico SPECIFICO; non esiste esenzione automatica.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-05',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Gli istruttori di scuola guida sono esentati dall\u2019obbligo della cintura quando viaggiano come passeggeri personali nel tempo libero.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + P18 (verità parziale): l\u2019esenzione vale SOLO durante le esercitazioni di guida professionali, non nel tempo libero.',
    pattern_trappola: 'P10',
    livello_difficolta: 4,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-06',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'I conducenti anziani oltre i 65 anni possono evitare la cintura senza certificato medico.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): non esiste esenzione per età. Servirebbe patologia documentata.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-07',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un ambulanziere sta trasportando un ferito in regime di emergenza: è esentato dall\u2019obbligo della cintura durante l\u2019assistenza.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: personale di soccorso in servizio = esente per esigenze operative.',
    scenario_transfer:
      'Corsa di emergenza in ambulanza con paziente a bordo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-08',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Durante una lezione pratica a un allievo, l\u2019istruttore a bordo del veicolo-scuola può essere esentato dall\u2019obbligo della cintura.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019esenzione copre proprio questo caso di esercitazione.',
    scenario_transfer:
      'Lezione pratica di scuola guida su veicolo-scuola.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-09',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una persona con scoliosi grave documentata da certificato medico rilasciato dall\u2019ASL può richiedere l\u2019esenzione dall\u2019uso della cintura.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: patologia + certificato = esenzione valida.',
    scenario_transfer:
      'Paziente con scoliosi grave e certificato ASL.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C004-10',
    concetto_codice: 'ARG13-C004',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'Sono esentati dall\u2019obbligo della cintura tutti i conducenti di taxi e NCC durante il servizio.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: nel testo vigente tale esenzione generale per taxi/NCC non è prevista. Permangono le esenzioni tassative dell\u2019art. 172 co. 7.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 172 co. 7 CdS',
  },

  // =====================================================================
  // ARG13-C005 — Sistema di ritenuta per bambini: altezza 1,50 m
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C005-01',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I bambini di statura inferiore a 1,50 m devono essere assicurati al sedile mediante un sistema di ritenuta omologato.',
    risposta_corretta: true,
    spiegazione:
      'Art. 172 co. 1 CdS: obbligo al di sotto di 1,50 m.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-02',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il sistema di ritenuta per bambini deve essere adeguato al peso del bambino.',
    risposta_corretta: true,
    spiegazione:
      'R44 classifica per peso; R129 per altezza, ma entrambe rispettano la proporzionalità al peso effettivo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-03',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Usare la sola cintura adulta senza seggiolino/rialzo su un bambino sotto 1,50 m è pericoloso perché la cintura passerebbe sul collo e sull\u2019addome.',
    risposta_corretta: true,
    spiegazione:
      'La cintura adulta non è ergonomicamente adeguata a un bambino basso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-04',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'I bambini di statura inferiore a 1,35 m devono essere assicurati con sistema di ritenuta omologato.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): il limite italiano è 1,50 m, non 1,35 m (che è la soglia di alcune direttive europee precedenti). Mnemonic: "1,50 = 150 cm = 1 metro e mezzo".',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-05',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sistema di ritenuta per bambini può essere qualsiasi dispositivo, anche non omologato, purché tenga il bambino fermo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente) + F04 (soluzioni fai-da-te): deve essere OMOLOGATO (R129 o R44).',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-06',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il sistema di ritenuta per bambini è obbligatorio unicamente sui sedili posteriori.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): l\u2019obbligo vale ovunque il bambino viaggi nel veicolo.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-07',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se porto mia nipote di 9 anni alta 135 cm a scuola, devo usare un rialzo omologato adeguato al suo peso.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: sotto 1,50 m = obbligo di sistema di ritenuta.',
    scenario_transfer:
      'Trasporto quotidiano di nipote a scuola.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-08',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Per un neonato di 5 mesi serve un seggiolino ovetto orientato in senso contrario a quello di marcia.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: fino ai 15 mesi (R129) il senso contrario è obbligatorio; l\u2019ovetto è la soluzione standard.',
    scenario_transfer:
      'Trasporto di neonato di 5 mesi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-09',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Su un taxi, per il trasporto di un bambino di 4 anni alto 95 cm, è comunque necessario un sistema di ritenuta adeguato.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019obbligo non decade sui taxi (salvo deroghe specifiche per servizio occasionale se disponibili).',
    scenario_transfer:
      'Taxi con bambino piccolo a bordo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C005-10',
    concetto_codice: 'ARG13-C005',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'Se il bambino è particolarmente robusto e ha un peso elevato per l\u2019età, il sistema di ritenuta non è obbligatorio.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il criterio italiano è la STATURA (< 1,50 m). Il peso rileva per scegliere il gruppo, non per esentare.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 co. 1 CdS',
  },

  // =====================================================================
  // ARG13-C006 — ECE R129 (i-Size) dal 1 settembre 2024
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C006-01',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dal 1° settembre 2024 i nuovi seggiolini immessi in commercio devono essere omologati UNECE R129 (i-Size).',
    risposta_corretta: true,
    spiegazione:
      'Data di transizione: 01/09/2024 per i prodotti nuovi.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS — UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-02',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I seggiolini R44 già in uso possono continuare a essere utilizzati fino al termine del loro ciclo di vita.',
    risposta_corretta: true,
    spiegazione:
      'Coesistenza: niente obbligo di sostituzione retroattiva.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS — UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-03',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il regolamento R129 classifica i dispositivi di ritenuta in base alla statura del bambino.',
    risposta_corretta: true,
    spiegazione:
      'Differenza rispetto a R44 (peso): R129 usa la statura (i-Size).',
    livello_difficolta: 3,
    articolo_cds: 'UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-04',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dal 1° gennaio 2024 i nuovi seggiolini immessi in commercio devono essere omologati R129.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (data quasi-giusta): la data è 1° SETTEMBRE 2024, non 1° gennaio. Mnemonic: "R129 come l\u2019inizio della scuola".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS — UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-05',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dal 1° settembre 2024 tutti i seggiolini R44 già acquistati devono essere sostituiti con modelli R129.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "tutti") + P18 (verità parziale): la sostituzione riguarda solo le NUOVE VENDITE. I dispositivi R44 già in uso restano validi.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS — UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-06',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il regolamento R129 classifica i seggiolini unicamente in base al peso del bambino, come faceva R44.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime): R129 usa la STATURA come criterio principale. R44 usava il peso.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-07',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se ho acquistato un seggiolino R44 a maggio 2024, posso continuare a usarlo sull\u2019auto nel 2025 e oltre.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il possesso precedente è tutelato fino al termine del ciclo di vita del dispositivo.',
    scenario_transfer:
      'Seggiolino R44 acquistato prima della transizione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS — UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-08',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se compro un seggiolino nuovo oggi in un negozio, devo assicurarmi che sia omologato R129 (i-Size).',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il commerciante può vendere solo R129 dopo il 01/09/2024.',
    scenario_transfer:
      'Acquisto di seggiolino nuovo post-transizione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS — UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-09',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un seggiolino R129 deve essere mantenuto in senso contrario a quello di marcia fino ai 15 mesi di età del bambino.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: uno dei requisiti distintivi di R129 è proprio il rearward facing fino a 15 mesi.',
    scenario_transfer:
      'Bambino di 12 mesi su seggiolino i-Size.',
    livello_difficolta: 3,
    articolo_cds: 'UNECE R129',
  },
  {
    codice: 'QUIZ-ARG13-C006-10',
    concetto_codice: 'ARG13-C006',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'Il regolamento R129 prevede test obbligatori solo sull\u2019urto frontale, come il suo predecessore.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: R129 introduce anche il test su urto LATERALE, prima non obbligatorio per R44. È proprio una delle novità principali.',
    livello_difficolta: 4,
    articolo_cds: 'UNECE R129',
  },

  // =====================================================================
  // ARG13-C007 — Airbag e seggiolino in senso contrario
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C007-01',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un seggiolino orientato in senso contrario a quello di marcia non va installato sul sedile anteriore se l\u2019airbag frontale è attivo.',
    risposta_corretta: true,
    spiegazione:
      'Art. 172 CdS: incompatibilità seggiolino rearward + airbag frontale attivo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-02',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Se devo necessariamente installare davanti un seggiolino contrario al senso di marcia, posso farlo solo dopo aver disattivato l\u2019airbag frontale.',
    risposta_corretta: true,
    spiegazione:
      'Disattivazione airbag (interruttore a chiave o impostazione dedicata) = condizione di sicurezza obbligatoria.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-03',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di apertura dell\u2019airbag frontale, un seggiolino rearward davanti verrebbe schiacciato con conseguenze potenzialmente letali per il bambino.',
    risposta_corretta: true,
    spiegazione:
      'La ratio tecnica dell\u2019incompatibilità.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-04',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Posso installare liberamente un seggiolino rearward sul sedile anteriore se l\u2019airbag frontale è attivo.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): vietato. Serve o disattivare l\u2019airbag o spostare il seggiolino dietro.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-05',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019incompatibilità airbag-seggiolino rearward riguarda unicamente l\u2019airbag laterale, non quello frontale.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime) + F01 ("unicamente"): riguarda l\u2019airbag FRONTALE. Invertire le due è un errore classico.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-06',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un seggiolino orientato nel senso di marcia sul sedile anteriore con airbag attivo è vietato al pari di quello in senso contrario.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): il divieto riguarda il seggiolino in SENSO CONTRARIO al senso di marcia. Quello forward facing è più tollerato (ma sempre meglio dietro).',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-07',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Per un ovetto con neonato sul sedile anteriore di un\u2019utilitaria con airbag non disattivabile, la soluzione è spostare il seggiolino sul sedile posteriore.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: se non si può disattivare l\u2019airbag, la sola soluzione sicura è il sedile posteriore.',
    scenario_transfer:
      'Utilitaria con airbag non disattivabile.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-08',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il mio veicolo ha un interruttore a chiave per disattivare l\u2019airbag passeggero e io lo attivo, posso installare l\u2019ovetto in senso contrario al senso di marcia davanti.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: con airbag disattivato l\u2019installazione è consentita.',
    scenario_transfer:
      'Veicolo con interruttore on/off airbag passeggero.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-09',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Anche con un\u2019auto sportiva a due posti con solo sedile passeggero dotato di airbag, vale la regola dell\u2019incompatibilità con il seggiolino rearward.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: configurazione del veicolo non esenta. Serve sempre disattivare l\u2019airbag se l\u2019unica sistemazione è quella davanti.',
    scenario_transfer:
      'Coupé a due posti con passeggero dotato di airbag.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 172 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C007-10',
    concetto_codice: 'ARG13-C007',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'Disattivare l\u2019airbag passeggero in modo occasionale, senza documentarlo, è sempre legale se la disattivazione è prevista dal costruttore.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la disattivazione è ammessa solo nei casi previsti (es. seggiolino rearward). Non è una libera scelta del conducente per ogni occasione.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 172 CdS',
  },

  // =====================================================================
  // ARG13-C008 — Casco protettivo: motocicli e ciclomotori
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C008-01',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente e il passeggero di motocicli e ciclomotori devono indossare il casco protettivo omologato.',
    risposta_corretta: true,
    spiegazione:
      'Art. 171 CdS: obbligo per conducente e passeggero.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-02',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il casco protettivo deve essere correttamente allacciato durante la marcia.',
    risposta_corretta: true,
    spiegazione:
      'Casco slacciato = equivalente a nessun casco ai fini sanzionatori.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-03',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo del casco vale su tutte le strade, in centri abitati e fuori.',
    risposta_corretta: true,
    spiegazione:
      'Nessuna distinzione territoriale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-04',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il casco protettivo è obbligatorio unicamente al di fuori dei centri abitati.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): obbligo universale.',
    pattern_trappola: 'P10',
    livello_difficolta: 2,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-05',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il casco può essere indossato slacciato se il conducente procede a bassa velocità.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può") + P12 (libertà apparente): il casco DEVE essere allacciato. Slacciato è come assente.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-06',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un casco non omologato allacciato correttamente è equivalente, ai fini del Codice, a un casco omologato.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): l\u2019allacciamento non basta — serve anche l\u2019omologazione.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-07',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Anche su un quadriciclo leggero non carrozzato il conducente deve indossare il casco.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019obbligo si estende ai quadricicli non carrozzati.',
    scenario_transfer:
      'Quadriciclo leggero non carrozzato (es. da spiaggia).',
    livello_difficolta: 3,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-08',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un passeggero su scooter deve indossare il casco anche per un tragitto di 500 metri.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: nessuna deroga per tragitti brevi.',
    scenario_transfer:
      'Breve corsa in scooter con passeggero.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-09',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Chi guida un ciclomotore deve indossare un casco omologato anche nei parcheggi aperti al pubblico.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: i parcheggi aperti al pubblico sono "strade" ai sensi del CdS.',
    scenario_transfer:
      'Parcheggio di supermercato.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 171 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C008-10',
    concetto_codice: 'ARG13-C008',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'Il casco è obbligatorio solo per il conducente del motociclo, non per il passeggero.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: obbligo anche per il passeggero. Il Codice non distingue.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 171 CdS',
  },

  // =====================================================================
  // ARG13-C009 — Casco per monopattini elettrici
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C009-01',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A seguito della Legge 177/2024 l\u2019uso del casco è obbligatorio per tutti i conducenti di monopattini elettrici.',
    risposta_corretta: true,
    spiegazione:
      'L. 177/2024: estensione a tutti, non più solo ai minorenni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-02',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il casco per monopattini elettrici deve essere conforme alle norme tecniche armonizzate (es. UNI EN 1078 o 1080).',
    risposta_corretta: true,
    spiegazione:
      'Stesse norme tecniche applicate ai caschi da ciclista urbano.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-03',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Prima della L. 177/2024 il casco per monopattino era obbligatorio solo per i minorenni.',
    risposta_corretta: true,
    spiegazione:
      'Contesto storico: l\u2019estensione è proprio la novità 2024.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-04',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il casco per monopattini elettrici è obbligatorio solo per i minorenni, come prima della L. 177/2024.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale temporalmente obsoleta): la regola pre-2024 era così, ma la L. 177/2024 ha esteso l\u2019obbligo a tutti.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-05',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente di monopattino elettrico può indossare liberamente un cappello da baseball in sostituzione del casco omologato.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): il casco deve essere CONFORME alle norme UNI EN 1078/1080. Un cappello non è un casco.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-06',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo del casco sui monopattini elettrici vale unicamente sulle piste ciclabili, non sulle strade ordinarie.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): l\u2019obbligo vale ovunque circoli il monopattino.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-07',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un adulto di 40 anni che usa un monopattino elettrico per andare al lavoro deve indossare il casco.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019età non rileva, l\u2019obbligo è per tutti.',
    scenario_transfer:
      'Commuter urbano adulto su monopattino elettrico.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-08',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Noleggiare un monopattino elettrico in sharing non esenta l\u2019utente dall\u2019obbligo del casco.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019obbligo è dell\u2019utilizzatore, indipendentemente dalla proprietà del mezzo. I servizi sharing oggi consigliano di portarsi il casco.',
    scenario_transfer:
      'Monopattino noleggiato in sharing urbano.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-09',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se viaggio in monopattino elettrico sotto la pioggia per brevi tratti urbani, devo comunque indossare il casco omologato.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: condizioni meteo e durata del tragitto non incidono sull\u2019obbligo.',
    scenario_transfer:
      'Tratto urbano breve sotto pioggia.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },
  {
    codice: 'QUIZ-ARG13-C009-10',
    concetto_codice: 'ARG13-C009',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'L\u2019obbligo del casco sui monopattini elettrici è sempre stato previsto dal Codice della strada, dal 2019.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: dal 2019 l\u2019obbligo era solo per i minorenni; l\u2019estensione a tutti è arrivata con la L. 177/2024.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
  },

  // =====================================================================
  // ARG13-C010 — Equipaggiamento obbligatorio del veicolo
  // =====================================================================
  {
    codice: 'QUIZ-ARG13-C010-01',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di fermata per avaria su extraurbana o autostrada chi scende dal veicolo deve indossare il giubbotto o le bretelle ad alta visibilità.',
    risposta_corretta: true,
    spiegazione:
      'Art. 162 CdS: visibilità obbligatoria in extraurbana/autostrada.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-02',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il veicolo fermo per guasto va segnalato con il triangolo retrorifrangente omologato.',
    risposta_corretta: true,
    spiegazione:
      'Triangolo = segnalazione statica obbligatoria.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-03',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il triangolo retrorifrangente va posto ad almeno 50 metri dietro il veicolo sulle strade extraurbane e nelle gallerie.',
    risposta_corretta: true,
    spiegazione:
      'Distanza minima di 50 m per segnalazione efficace.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-04',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il triangolo va posto a 30 metri dietro il veicolo sulle strade extraurbane.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): 50 m, non 30. Mnemonic: "50 metri come 50 cm... ma metri".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-05',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il giubbotto ad alta visibilità può essere indossato liberamente a scelta del conducente in caso di sosta per avaria in autostrada.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): l\u2019uso è OBBLIGATORIO per chi scende dal veicolo, non a discrezione.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-06',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo del giubbotto ad alta visibilità vale unicamente di notte.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): l\u2019obbligo vale anche di giorno, quando la visibilità è scarsa (nebbia, pioggia, gallerie).',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-07',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se mi si fora una gomma in autostrada di giorno e devo scendere per cambiarla, indosso le bretelle ad alta visibilità e posiziono il triangolo a 50 m.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: situazione standard di sosta per avaria.',
    scenario_transfer:
      'Foratura in autostrada diurna.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-08',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In una galleria di una statale, se devo scendere per un\u2019avaria, devo indossare il giubbotto ad alta visibilità anche se è giorno.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la galleria riduce la visibilità; l\u2019obbligo si attiva indipendentemente dall\u2019ora.',
    scenario_transfer:
      'Avaria in galleria su strada statale, diurna.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-09',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se il mio veicolo è fermo in extraurbana e devo raggiungere a piedi la colonnina SOS, devo comunque indossare il giubbotto ad alta visibilità.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: l\u2019obbligo vale per chiunque SCENDA in carreggiata, a prescindere dallo scopo.',
    scenario_transfer:
      'Avaria extraurbana con raggiungimento colonnina SOS.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
  {
    codice: 'QUIZ-ARG13-C010-10',
    concetto_codice: 'ARG13-C010',
    argomento_numero: 13,
    fase_rotta: 'origina',
    testo_domanda:
      'Il triangolo di pericolo è un dispositivo facoltativo: serve solo per cortesia verso gli altri utenti.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il triangolo è OBBLIGATORIO e sanzionato. La sua assenza costituisce violazione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 162 CdS',
  },
] as const
