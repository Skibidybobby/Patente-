import type { QuizItem } from '../_types'

// Argomento 15 — Psicofisiche e primo soccorso
// 12 concetti × 10 item = 120 item V/F
// Pattern trappola dominanti: P07 (numeri alcol), P10 (ambito silenzioso),
// P15 (ovvero), P17 (causa-effetto invertita).
// Base normativa: CdS art. 140, 186, 186-bis, 187; L. 177/2024;
// DM 2/7/2025 (alcolock, in vigore 26/07/2025).
//
// NUMERI CRITICI:
// - 0,5 g/l generale; 0,0 g/l neopatentati (3 anni) e professionali
// - Fascia 1: 0,5-0,8 (amministrativa)
// - Fascia 2: 0,8-1,5 (penale)
// - Fascia 3: >1,5 (penale aggravata + revoca)
// - Codici unionali 68 (niente alcol) / 69 (solo alcolock)

export const ARG15_QUIZ: readonly QuizItem[] = [
  // =====================================================================
  // ARG15-C001 — Condizioni psicofisiche per la guida
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C001-01',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente deve trovarsi in condizioni psicofisiche idonee a guidare in sicurezza.',
    risposta_corretta: true,
    spiegazione: 'Art. 140 CdS: principio di idoneità psicofisica.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-02',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Stanchezza, stress e malattie riducono le capacità di attenzione e percezione del conducente.',
    risposta_corretta: true,
    spiegazione: 'Fattori di riduzione prestazionale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-03',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per guidare in sicurezza servono vigilanza, attenzione, riflessi, campo visivo e capacità di elaborare informazioni.',
    risposta_corretta: true,
    spiegazione: 'Lista delle funzioni cognitive essenziali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-04',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può mettersi alla guida anche se avverte forte stanchezza, purché guidi a velocità moderata.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può") + P12: l\u2019art. 140 impone di NON guidare se le condizioni psicofisiche sono ridotte. La velocità non compensa la stanchezza.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-05',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Lo stress non è una condizione che riduce le capacità di guida, al contrario aumenta l\u2019attenzione del conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): lo stress elevato riduce l\u2019attenzione, non la aumenta (oltre una soglia bassa di attivazione).',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-06',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di idoneità psicofisica si applica unicamente alla guida su autostrada.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): vale su tutte le strade.',
    pattern_trappola: 'P10',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-07',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo una notte in bianco in ospedale, non è saggio mettersi alla guida per tornare a casa in auto.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: privazione di sonno = riduzione prestazionale paragonabile all\u2019alcol.',
    scenario_transfer: 'Caregiver uscito dall\u2019ospedale dopo la notte.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-08',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se ho appena assunto un antistaminico che provoca sonnolenza, devo rinunciare a guidare finché l\u2019effetto non è finito.',
    risposta_corretta: true,
    spiegazione: 'Transfer: farmaci sonnolenza = idoneità ridotta.',
    scenario_transfer: 'Allergia primaverile con antistaminico.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-09',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se durante un lungo viaggio sento di non riuscire a mantenere la concentrazione, devo fermarmi in area di servizio per riposare.',
    risposta_corretta: true,
    spiegazione: 'Transfer: auto-monitoraggio e pausa sicura.',
    scenario_transfer: 'Lungo viaggio autostradale con calo di attenzione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C001-10',
    concetto_codice: 'ARG15-C001',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Un conducente esperto non ha bisogno di valutare le proprie condizioni psicofisiche prima di mettersi al volante.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019esperienza non sostituisce la lucidità. L\u2019auto-valutazione è obbligatoria per tutti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },

  // =====================================================================
  // ARG15-C002 — Effetti dell'alcol sulla guida
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C002-01',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019assunzione di alcol allunga i tempi di reazione del conducente.',
    risposta_corretta: true,
    spiegazione: 'Effetto documentato sul SNC.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-02',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019alcol restringe il campo visivo creando il cosiddetto "effetto tunnel".',
    risposta_corretta: true,
    spiegazione: 'Riduzione della visione periferica.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-03',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Anche piccole quantità di alcol peggiorano le prestazioni di guida.',
    risposta_corretta: true,
    spiegazione: 'Effetto progressivo, non lineare con la quantità.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-04',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019alcol migliora i riflessi e la velocità di reazione del conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): effetto opposto — l\u2019alcol allunga i tempi di reazione.',
    pattern_trappola: 'P17',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-05',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un caffè forte assunto dopo l\u2019alcol azzera gli effetti della sostanza sul conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale — falso mito): la caffeina non accelera lo smaltimento dell\u2019etanolo. Solo il tempo lo riduce.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-06',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019alcol compromette la percezione del rischio unicamente a dosi elevate.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 + F01 ("unicamente"): la percezione del rischio è compromessa anche a dosi basse.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-07',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo aver bevuto due bicchieri di vino a cena, posso ritenere compromessa la mia percezione delle distanze di sicurezza anche se non mi sento ubriaco.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la soggettiva "sobrietà" non coincide con l\u2019effettiva prestazione.',
    scenario_transfer: 'Cena con due bicchieri di vino.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-08',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se ho bevuto alcolici a pranzo, un sonnellino di mezz\u2019ora non è sufficiente a far tornare i miei riflessi ai livelli normali.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: lo smaltimento dell\u2019etanolo è lineare nel tempo, non accelerabile con il sonno breve.',
    scenario_transfer: 'Pasto alcolico + pisolino corto.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-09',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'A parità di quantità bevuta, una persona magra a stomaco vuoto raggiunge un tasso alcolemico più alto di una persona robusta a stomaco pieno.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: peso corporeo + cibo nello stomaco sono fattori che modificano il picco alcolemico.',
    scenario_transfer: 'Due persone bevono lo stesso bicchiere in condizioni diverse.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C002-10',
    concetto_codice: 'ARG15-C002',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Bere birra invece di vino è sicuro perché la birra contiene meno alcol.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: il contenuto alcolico della birra standard è inferiore in percentuale ma il volume tipico è maggiore: la quantità assoluta di etanolo può essere simile o superiore.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },

  // =====================================================================
  // ARG15-C003 — Limite alcolemico generale 0,5 g/l
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C003-01',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il limite generale di tasso alcolemico per chi guida è 0,5 g/l.',
    risposta_corretta: true,
    spiegazione: 'Art. 186 co. 2 CdS: soglia generale di ebbrezza.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-02',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il superamento di 0,5 g/l integra la guida in stato di ebbrezza.',
    risposta_corretta: true,
    spiegazione: 'Fattispecie base dell\u2019art. 186.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-03',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il tasso alcolemico effettivo dipende da quantità ingerita, peso, sesso, cibo nello stomaco e tempo trascorso.',
    risposta_corretta: true,
    spiegazione: 'Fattori biologici e comportamentali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-04',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite generale di tasso alcolemico per chi guida è 0,05 g/l.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): il limite è 0,5 g/l, non 0,05 g/l. Mnemonic: "zero virgola cinque, non una virgola in più".',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-05',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il limite generale di tasso alcolemico per chi guida è 0,8 g/l.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): 0,8 g/l è la SOGLIA del reato penale, non il limite base. Il limite è 0,5 g/l.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-06',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Esiste una regola sicura basata sul numero di bicchieri: un bicchiere a cena non supera mai i 0,5 g/l.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale) + P12 (libertà apparente): il tasso dipende da troppi fattori individuali per una regola-bicchieri sicura.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-07',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una persona minuta di 50 kg che beve due calici di vino a stomaco vuoto può facilmente superare lo 0,5 g/l.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: basso peso + stomaco vuoto = picco alcolemico elevato.',
    scenario_transfer: 'Donna minuta a cena leggera con due calici di vino.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-08',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Per essere sicuri di non superare lo 0,5 g/l è meglio non bere alcol prima di guidare.',
    risposta_corretta: true,
    spiegazione: 'Transfer: la regola "zero dubbi" è la più sicura.',
    scenario_transfer: 'Cena fuori casa con previsione di guidare al ritorno.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-09',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un test alcolemico effettuato a 10 minuti dal consumo può essere inattendibile per chi non ha ancora raggiunto il picco.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il picco alcolemico si raggiunge 30-60 minuti dopo l\u2019assunzione.',
    scenario_transfer: 'Test etilometrico subito dopo un brindisi.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C003-10',
    concetto_codice: 'ARG15-C003',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Il limite di 0,5 g/l si applica solo ai conducenti di autoveicoli, non a quelli di ciclomotori e motocicli.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: si applica a tutti i conducenti di veicoli a motore; ciclomotori e motocicli inclusi.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },

  // =====================================================================
  // ARG15-C004 — Tasso zero: neopatentati e professionali
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C004-01',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per i neopatentati il limite del tasso alcolemico è 0,0 g/l.',
    risposta_corretta: true,
    spiegazione: 'Art. 186-bis CdS: tolleranza zero.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-02',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per i conducenti professionali (taxi, NCC, bus, camion) il limite del tasso alcolemico è 0,0 g/l.',
    risposta_corretta: true,
    spiegazione: 'Tolleranza zero per ragioni di servizio.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-03',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con la Legge 177/2024 il periodo di "neopatentato" soggetto al tasso zero è stato portato a 3 anni dalla data di conseguimento della patente B.',
    risposta_corretta: true,
    spiegazione:
      'L. 177/2024: estensione da 1 a 3 anni della durata del regime neopatentati.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-04',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per i neopatentati il limite del tasso alcolemico è 0,2 g/l.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): il limite è ZERO. 0,2 g/l era una soglia di alcuni paesi, non quella italiana per i neopatentati.',
    pattern_trappola: 'P07',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-05',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il regime di tasso zero per i neopatentati dura 1 anno dalla data di conseguimento della patente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero aggiornato): con la L. 177/2024 la durata è stata portata a 3 ANNI. L\u2019informazione "1 anno" è vecchia.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-06',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il tasso zero per i neopatentati si applica unicamente nei primi sei mesi dalla patente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): è per 3 anni dal conseguimento.',
    pattern_trappola: 'P10',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-07',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se ho conseguito la patente B da 2 anni non posso bere neanche un bicchiere di birra prima di guidare.',
    risposta_corretta: true,
    spiegazione: 'Transfer: 2 anni < 3 → ancora neopatentato → tasso zero.',
    scenario_transfer: 'Neopatentato da 2 anni.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-08',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un tassista in servizio deve presentare un tasso alcolemico pari a zero.',
    risposta_corretta: true,
    spiegazione: 'Transfer: conducente professionale = tasso zero.',
    scenario_transfer: 'Tassista in servizio in città.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-09',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un autista di autobus di linea in servizio non può consumare alcolici anche alla pausa pranzo.',
    risposta_corretta: true,
    spiegazione: 'Transfer: 0,0 g/l = pasto senza alcol.',
    scenario_transfer: 'Autista di autobus in pausa pranzo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186-bis CdS',
  },
  {
    codice: 'QUIZ-ARG15-C004-10',
    concetto_codice: 'ARG15-C004',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Per i conducenti di età inferiore a 21 anni il limite di tasso alcolemico è lo stesso della popolazione generale (0,5 g/l).',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: i minori di 21 anni sono soggetti allo stesso tasso zero dei neopatentati per tutelare la sicurezza e la maturazione delle capacità di guida.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186-bis CdS',
  },

  // =====================================================================
  // ARG15-C005 — Fasce di sanzione per l'ebbrezza
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C005-01',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019art. 186 CdS distingue tre fasce sanzionatorie crescenti per la guida in stato di ebbrezza.',
    risposta_corretta: true,
    spiegazione: 'Fasce: 0,5-0,8 / 0,8-1,5 / oltre 1,5 g/l.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-02',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La fascia 0,5-0,8 g/l comporta sanzione amministrativa, non penale.',
    risposta_corretta: true,
    spiegazione: 'Fascia 1: illecito amministrativo + sospensione patente.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-03',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La fascia oltre 1,5 g/l comporta reato aggravato, confisca del veicolo e, nei casi previsti, revoca della patente.',
    risposta_corretta: true,
    spiegazione: 'Fascia 3: sanzioni penali massime.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-04',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'La fascia di sanzione penale base per l\u2019ebbrezza si attiva oltre 1,0 g/l.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto): la fascia penale parte da 0,8 g/l, non da 1,0. Mnemonic: "0,8 suona come la soglia del reato".',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-05',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'La revoca della patente per ebbrezza scatta unicamente quando il tasso supera 2,0 g/l.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (numero quasi-giusto) + F01 ("unicamente"): la soglia aggravata è 1,5 g/l, non 2,0.',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-06',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il superamento di 0,5 g/l comporta sempre e comunque un reato penale.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): la fascia 0,5-0,8 è solo AMMINISTRATIVA. Il reato parte da 0,8 g/l.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-07',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente risultato con 0,7 g/l rientra nella fascia sanzionatoria amministrativa, non penale.',
    risposta_corretta: true,
    spiegazione: 'Transfer: 0,7 è tra 0,5 e 0,8 → fascia 1.',
    scenario_transfer: 'Etilometro al controllo stradale: 0,7 g/l.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-08',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente con tasso rilevato a 1,2 g/l commette il reato di guida in stato di ebbrezza ai sensi dell\u2019art. 186 co. 2 lett. b.',
    risposta_corretta: true,
    spiegazione: 'Transfer: 1,2 è tra 0,8 e 1,5 → fascia 2 (penale).',
    scenario_transfer: 'Controllo con risultato 1,2 g/l.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-09',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un tasso di 1,8 g/l attiva la fascia penale aggravata con possibile revoca della patente.',
    risposta_corretta: true,
    spiegazione: 'Transfer: 1,8 > 1,5 → fascia 3.',
    scenario_transfer: 'Controllo con risultato 1,8 g/l.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C005-10',
    concetto_codice: 'ARG15-C005',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'La sanzione per guida in stato di ebbrezza non comporta mai la sospensione della patente, ma solo un\u2019ammenda pecuniaria.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la sospensione è sanzione accessoria prevista in tutte e tre le fasce, con durate crescenti.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 2 CdS',
  },

  // =====================================================================
  // ARG15-C006 — Alcolock e codici unionali 68-69
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C006-01',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per i condannati per guida in stato di ebbrezza è obbligatoria l\u2019installazione dell\u2019alcolock sul veicolo.',
    risposta_corretta: true,
    spiegazione: 'Art. 186 co. 9-ter CdS + DM 2/7/2025 (in vigore dal 26/07/2025).',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-02',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il codice unionale 68 sulla patente indica il divieto assoluto di assunzione di alcol.',
    risposta_corretta: true,
    spiegazione: 'Durata tipicamente 2 o 3 anni a seconda della gravità.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-03',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il codice unionale 69 sulla patente indica che la guida è consentita solo con alcolock installato sul veicolo.',
    risposta_corretta: true,
    spiegazione: 'Codice 69 = "guida solo con alcolock".',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-04',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019alcolock è un dispositivo facoltativo che il condannato può scegliere di installare per ottenere sconti assicurativi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): l\u2019alcolock è OBBLIGATORIO per i condannati, non una scelta per sconti.',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-05',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il codice unionale 68 e il codice 69 sono intercambiabili: indicano entrambi l\u2019obbligo di alcolock.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime): 68 = divieto alcol; 69 = solo alcolock. Significati distinti.',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-06',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo dell\u2019alcolock previsto dal DM 2/7/2025 è operativo dal 1° gennaio 2026.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P07 (data quasi-giusta): il DM è in vigore dal 26 LUGLIO 2025 (GU n.171 del 25/7/2025).',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'DM 2/7/2025',
  },
  {
    codice: 'QUIZ-ARG15-C006-07',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Dopo una condanna per guida in ebbrezza con tasso 1,3 g/l, il condannato deve circolare con un veicolo dotato di alcolock.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la condanna attiva l\u2019obbligo dell\u2019alcolock e l\u2019annotazione del codice 69.',
    scenario_transfer: 'Condanna per ebbrezza fascia 2.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-08',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un conducente con codice unionale 68 sulla patente non può consumare alcol in nessuna occasione, anche quando non guida.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: il codice 68 impone divieto assoluto di alcol per tutta la durata della misura.',
    scenario_transfer: 'Patente con annotazione del codice 68.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-09',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'L\u2019alcolock impedisce fisicamente l\u2019avvio del motore se il conducente è positivo all\u2019etilometro di bordo.',
    risposta_corretta: true,
    spiegazione: 'Transfer: definizione funzionale del dispositivo.',
    scenario_transfer: 'Auto con alcolock installato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },
  {
    codice: 'QUIZ-ARG15-C006-10',
    concetto_codice: 'ARG15-C006',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'L\u2019alcolock è obbligatorio per tutti i conducenti neopatentati, a prescindere da condanne.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: è obbligatorio SOLO per i condannati ex art. 186. I neopatentati hanno già il tasso zero ma non l\u2019alcolock obbligatorio.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 9-ter CdS',
  },

  // =====================================================================
  // ARG15-C007 — Rifiuto dell'accertamento etilometrico
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C007-01',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il conducente che rifiuta di sottoporsi all\u2019accertamento del tasso alcolemico è punito con le stesse sanzioni della fascia più grave.',
    risposta_corretta: true,
    spiegazione: 'Art. 186 co. 7 CdS: equiparazione alla fascia oltre 1,5 g/l.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-02',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il rifiuto dell\u2019accertamento etilometrico comporta sanzione penale.',
    risposta_corretta: true,
    spiegazione: 'Sanzioni penali analoghe al reato aggravato.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-03',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il rifiuto può comportare sospensione o revoca della patente e confisca del veicolo.',
    risposta_corretta: true,
    spiegazione: 'Sanzioni accessorie parallele alla fascia 3.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-04',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Rifiutare il test etilometrico è una strategia legittima per evitare la contestazione della guida in stato di ebbrezza.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): il rifiuto è equiparato alla fascia più grave. Non è una scappatoia.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-05',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può rifiutarsi di sottoporsi all\u2019etilometro senza alcuna conseguenza, se non beve alcolici abitualmente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può") + P18 (verità parziale): il rifiuto è sanzionato indipendentemente dalle proprie abitudini.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-06',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il rifiuto del test etilometrico è punito con la sanzione amministrativa ovvero con una sanzione penale.',
    risposta_corretta: true,
    spiegazione:
      'TRAPPOLA P15 ("ovvero" = oppure, non "cioè"): nel linguaggio giuridico "ovvero" significa "oppure"; la frase — correttamente letta — afferma che le due sanzioni sono alternative. Il rifiuto comporta comunque sanzione penale, e la formulazione con "ovvero" (= oppure) resta tecnicamente valida perché non esclude la sanzione penale. Questo item allena la lettura del connettivo.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-07',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il rifiuto di sottoporsi al prelievo ematico presso la struttura sanitaria, richiesto dagli agenti, ha le stesse conseguenze del rifiuto dell\u2019etilometro.',
    risposta_corretta: true,
    spiegazione: 'Transfer: il rifiuto copre tutti gli accertamenti richiesti.',
    scenario_transfer: 'Prelievo ematico in ospedale dopo controllo stradale.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-08',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Anche il rifiuto dell\u2019accertamento per sostanze stupefacenti ha sanzioni equiparate a quelle del reato per guida sotto l\u2019effetto di stupefacenti.',
    risposta_corretta: true,
    spiegazione: 'Transfer: simmetria con l\u2019art. 187.',
    scenario_transfer: 'Rifiuto del test salivare per stupefacenti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-09',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se durante un controllo di routine un conducente rifiuta il test etilometrico, gli agenti possono comunque contestare le sanzioni della fascia più grave.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: applicazione diretta dell\u2019art. 186 co. 7.',
    scenario_transfer: 'Conducente che rifiuta il test in posto di blocco.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C007-10',
    concetto_codice: 'ARG15-C007',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Il rifiuto dell\u2019etilometro, essendo un comportamento passivo, non costituisce reato ma solo illecito amministrativo.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: è reato, equiparato alla fascia più grave dell\u2019art. 186.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 186 co. 7 CdS',
  },

  // =====================================================================
  // ARG15-C008 — Stupefacenti: art. 187 riformato
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C008-01',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'È vietato guidare dopo aver assunto sostanze stupefacenti o psicotrope.',
    risposta_corretta: true,
    spiegazione: 'Art. 187 CdS: divieto generale.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-02',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La L. 177/2024 ha eliminato il requisito dello "stato di alterazione" per l\u2019art. 187: basta la positività al principio attivo con nesso cronologico.',
    risposta_corretta: true,
    spiegazione: 'Novità normativa: semplificazione probatoria.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 187 CdS (L. 177/2024)',
  },
  {
    codice: 'QUIZ-ARG15-C008-03',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il test salivare in loco è ammesso per l\u2019accertamento dell\u2019assunzione di stupefacenti.',
    risposta_corretta: true,
    spiegazione: 'Test rapido compatibile con la nuova disciplina.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-04',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per integrare il reato di guida sotto l\u2019effetto di stupefacenti serve dimostrare l\u2019attuale stato di alterazione psicofisica del conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale temporalmente obsoleta): prima della L. 177/2024 sì; con la riforma basta la positività al principio attivo in nesso cronologico.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-05',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per sanzionare la guida sotto stupefacenti è sufficiente rilevare i metaboliti inattivi della sostanza nel conducente.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime): il Codice richiede il PRINCIPIO ATTIVO con nesso cronologico, NON i soli metaboliti inattivi (che possono persistere giorni dopo l\u2019uso senza attualità).',
    pattern_trappola: 'P13',
    livello_difficolta: 4,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-06',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può assumere sostanze stupefacenti in quantità moderata prima di guidare, se si sente lucido.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P04 ("può") + P12: divieto assoluto, indipendente dalla "lucidità soggettiva".',
    pattern_trappola: 'P04',
    livello_difficolta: 1,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-07',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Un test salivare positivo al principio attivo di una sostanza stupefacente, in nesso cronologico con la guida, integra la violazione dell\u2019art. 187.',
    risposta_corretta: true,
    spiegazione: 'Transfer: applicazione diretta della nuova disciplina.',
    scenario_transfer: 'Controllo stradale con test salivare positivo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-08',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Una persona che ha assunto cannabis due giorni prima e risulta positiva solo ai metaboliti inattivi non dovrebbe essere sanzionata ai sensi del nuovo art. 187, mancando il nesso cronologico.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: la riforma mira proprio a distinguere i metaboliti inattivi dal principio attivo.',
    scenario_transfer: 'Positività tardiva ai soli metaboliti.',
    livello_difficolta: 5,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-09',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Il rifiuto del test salivare per stupefacenti comporta le stesse sanzioni del rifiuto dell\u2019etilometro: equiparazione alla fattispecie più grave.',
    risposta_corretta: true,
    spiegazione: 'Transfer: simmetria tra art. 186 e 187.',
    scenario_transfer: 'Rifiuto del test salivare.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C008-10',
    concetto_codice: 'ARG15-C008',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'L\u2019art. 187 si applica solo alle droghe "pesanti", non alle sostanze psicoattive leggere o naturali.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: l\u2019art. 187 copre tutte le sostanze stupefacenti o psicotrope classificate, indipendentemente dal giudizio sociale di "pesante/leggera".',
    livello_difficolta: 3,
    articolo_cds: 'Art. 187 CdS',
  },

  // =====================================================================
  // ARG15-C009 — Sonnolenza, farmaci e colpo di sonno
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C009-01',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La sonnolenza è tra le principali cause di incidente in autostrada.',
    risposta_corretta: true,
    spiegazione: 'Dato epidemiologico consolidato.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-02',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Molti farmaci di uso comune come gli antistaminici possono provocare sonnolenza.',
    risposta_corretta: true,
    spiegazione: 'Leggere il bugiardino: pittogramma triangolo rosso.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 187 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-03',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I primi segnali di sonnolenza (sbadigli, peso palpebre) impongono una sosta di riposo.',
    risposta_corretta: true,
    spiegazione: 'Segnali precoci da non ignorare.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-04',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per contrastare la sonnolenza in autostrada è sufficiente abbassare il finestrino e alzare il volume della radio.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita) + falso mito: aria fresca e musica non ripristinano le capacità di attenzione. Solo il riposo lo fa.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-05',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente può assumere liberamente farmaci che provocano sonnolenza prima di guidare, se sono stati prescritti dal medico.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): la prescrizione medica non esenta dal dovere di auto-valutazione dell\u2019idoneità (art. 140).',
    pattern_trappola: 'P12',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-06',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'La sonnolenza causa colpi di sonno unicamente nei viaggi notturni.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P10 (ambito silenzioso) + F01 ("unicamente"): i colpi di sonno avvengono anche di giorno, specie nel primo pomeriggio (calo circadiano).',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-07',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se dopo aver preso uno sciroppo sedativo per la tosse avverto sonnolenza, devo rinunciare a guidare.',
    risposta_corretta: true,
    spiegazione: 'Transfer: sciroppi antitussivi spesso causano sonnolenza.',
    scenario_transfer: 'Raffreddore con sciroppo sedativo.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-08',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Leggere il foglietto illustrativo prima di assumere un farmaco è parte del dovere di verificare l\u2019idoneità alla guida.',
    risposta_corretta: true,
    spiegazione: 'Transfer: bugiardino = fonte di informazione obbligata.',
    scenario_transfer: 'Prima assunzione di un nuovo farmaco.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-09',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'In caso di colpo di sonno imminente in autostrada devo fermarmi in area di servizio e riposare, non proseguire fino al prossimo casello.',
    risposta_corretta: true,
    spiegazione: 'Transfer: la prima area utile è la scelta corretta.',
    scenario_transfer: 'Sintomi di colpo di sonno in A1.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 140 CdS',
  },
  {
    codice: 'QUIZ-ARG15-C009-10',
    concetto_codice: 'ARG15-C009',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Un pisolino di 5 minuti in area di servizio è sufficiente a recuperare completamente dalla sonnolenza accumulata in un viaggio di 6 ore.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: un power nap di 10-20 minuti riduce ma non "azzera" il debito di sonno. 5 minuti sono insufficienti.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 140 CdS',
  },

  // =====================================================================
  // ARG15-C010 — Regola PAS — Proteggere, Allertare, Soccorrere
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C010-01',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La regola PAS prevede la sequenza: Proteggere, Allertare, Soccorrere.',
    risposta_corretta: true,
    spiegazione: 'Acronimo mnemonico standard del primo soccorso.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-02',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La prima fase della regola PAS è mettere in sicurezza la scena e sé stessi.',
    risposta_corretta: true,
    spiegazione: 'Non si può soccorrere se si diventa seconde vittime.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-03',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La seconda fase della regola PAS consiste nell\u2019allertare il 112 o il 118.',
    risposta_corretta: true,
    spiegazione: 'Allertamento dei soccorsi sanitari.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-04',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'La regola PAS prevede di soccorrere i feriti PRIMA di mettere in sicurezza la scena.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita / ordine invertito): l\u2019ordine corretto è Proteggere → Allertare → Soccorrere. Soccorrere prima di proteggere espone il soccorritore a diventare seconda vittima.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-05',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nella regola PAS la A sta per "Aspettare", cioè attendere che i sanitari arrivino senza agire.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P13 (coppie quasi-sinonime): la A sta per ALLERTARE, non aspettare. Attendere passivamente è l\u2019opposto del soccorso.',
    pattern_trappola: 'P13',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-06',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il soccorritore occasionale può decidere liberamente quale fase della regola PAS applicare per prima.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): l\u2019ordine è vincolato. Il senso della sequenza è proprio la priorità.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-07',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Davanti a un incidente in autostrada devo prima segnalare la scena con il triangolo e indossare il giubbotto, poi chiamare il 112 e infine assistere i feriti.',
    risposta_corretta: true,
    spiegazione: 'Transfer: applicazione pratica di PAS.',
    scenario_transfer: 'Incidente in autostrada con soccorritore occasionale.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-08',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se fornisco al 118 l\u2019indicazione precisa del chilometro autostradale, riduco i tempi di intervento dei soccorsi.',
    risposta_corretta: true,
    spiegazione: 'Transfer: dato critico per triangolazione.',
    scenario_transfer: 'Chiamata 118 da autostrada.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-09',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Nella fase "Soccorrere" il principio base è "primum non nocere": non peggiorare la situazione con manovre improprie.',
    risposta_corretta: true,
    spiegazione: 'Transfer: principio medico applicato al primo soccorso.',
    scenario_transfer: 'Soccorritore non professionale.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C010-10',
    concetto_codice: 'ARG15-C010',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Il soccorritore occasionale deve sempre tentare manovre di rianimazione cardiopolmonare anche senza formazione specifica.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: senza formazione, le compressioni possono essere inefficaci. La fase S di PAS richiede azione compatibile con le proprie competenze — e il 112 può guidare telefonicamente.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // =====================================================================
  // ARG15-C011 — Posizione laterale di sicurezza e liquidi
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C011-01',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una persona priva di coscienza ma con respirazione spontanea va posta in posizione laterale di sicurezza.',
    risposta_corretta: true,
    spiegazione: 'PLS: previene soffocamento da caduta lingua o vomito.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-02',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di sospetto trauma alla colonna vertebrale, la posizione laterale di sicurezza va evitata.',
    risposta_corretta: true,
    spiegazione: 'Rischio di aggravare lesioni spinali.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-03',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Al ferito non si deve somministrare acqua, cibo o bevande alcoliche.',
    risposta_corretta: true,
    spiegazione: 'Rischio soffocamento + interferenze cliniche.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-04',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'La posizione laterale di sicurezza si applica sempre, anche a feriti con sospetto trauma spinale.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "sempre") + P11 (eccezione nascosta): esiste l\u2019eccezione del trauma spinale.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-05',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Al ferito si può somministrare un po\u2019 d\u2019acqua se ha sete, purché a piccoli sorsi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P12 (libertà apparente): nessuna somministrazione di liquidi. Anche piccoli sorsi sono vietati.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-06',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il ferito va girato a pancia in giù per facilitare la respirazione.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): la posizione corretta è LATERALE, non prona. Pancia in giù può ostruire la respirazione.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-07',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se trovo una persona svenuta dopo un incidente che respira regolarmente e non ha segni di trauma spinale, posso metterla in posizione laterale di sicurezza.',
    risposta_corretta: true,
    spiegazione: 'Transfer: condizioni perfette per la PLS.',
    scenario_transfer: 'Svenimento senza trauma spinale.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-08',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un ferito chiede dell\u2019acqua, devo rifiutargliela e spiegargli che non è possibile darla finché non arrivano i sanitari.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: gentilezza + rifiuto motivato. La richiesta è comprensibile ma pericolosa.',
    scenario_transfer: 'Ferito cosciente che chiede da bere.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-09',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un motociclista è caduto ad alta velocità e lamenta dolore al collo, devo evitare di spostarlo e limitarmi a stabilizzare la testa in linea con il corpo.',
    risposta_corretta: true,
    spiegazione: 'Transfer: sospetto trauma cervicale → immobilizzazione.',
    scenario_transfer: 'Motociclista caduto con dolore cervicale.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C011-10',
    concetto_codice: 'ARG15-C011',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Somministrare a un ferito un bicchierino di liquore può aiutare a riprendere coscienza.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: falso mito. L\u2019alcol è vasodilatatore e peggiora lo shock; il soggetto incosciente rischia l\u2019inalazione.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },

  // =====================================================================
  // ARG15-C012 — Emorragie, shock e casco del motociclista
  // =====================================================================
  {
    codice: 'QUIZ-ARG15-C012-01',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Un\u2019emorragia esterna si tampona con compressione diretta sulla ferita usando garze o tessuto pulito.',
    risposta_corretta: true,
    spiegazione: 'Tecnica base del controllo delle emorragie.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-02',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Per prevenire lo shock, il ferito va coperto per mantenerlo caldo.',
    risposta_corretta: true,
    spiegazione: 'La perdita di calore accelera lo shock.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-03',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il casco di un motociclista ferito va lasciato indossato, salvo necessità vitale.',
    risposta_corretta: true,
    spiegazione: 'Protezione del rachide cervicale.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-04',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per contenere un\u2019emorragia esterna è sufficiente legare un laccio a monte della ferita.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P18 (verità parziale): il tourniquet è misura estrema, non base. La tecnica di base è la compressione diretta. Il laccio mal fatto può peggiorare le cose.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-05',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Per prevenire lo shock il ferito va raffreddato con panni bagnati freddi.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P17 (causa-effetto invertita): lo shock richiede di MANTENERE il calore, non di raffreddare. Il raffreddamento peggiora lo stato.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-06',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il casco di un motociclista ferito va sempre rimosso da un soccorritore solo, il prima possibile.',
    risposta_corretta: false,
    spiegazione:
      'TRAPPOLA P01 (quantificatore "sempre") + P04 + F01 ("sempre"): la rimozione deve essere eccezionale, a due soccorritori, per proteggere il rachide.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-07',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un ciclista ferito sanguina da un arto, posso comprimere direttamente con un tessuto pulito e sollevare se possibile l\u2019arto.',
    risposta_corretta: true,
    spiegazione: 'Transfer: compressione + sollevamento = tecnica base.',
    scenario_transfer: 'Ciclista ferito con emorragia all\u2019arto.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-08',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Se un motociclista caduto ha arresto cardiaco evidente, il casco può essere rimosso, idealmente a due soccorritori mantenendo allineato il collo.',
    risposta_corretta: true,
    spiegazione:
      'Transfer: arresto = necessità vitale → rimozione con tecnica a due.',
    scenario_transfer: 'Motociclista in arresto cardiaco.',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-09',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Coprire un ferito con una coperta termica in attesa dei soccorsi è parte della prevenzione dello shock.',
    risposta_corretta: true,
    spiegazione: 'Transfer: coperta termica = buona pratica standard.',
    scenario_transfer: 'Attesa dei soccorsi con ferito a terra.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG15-C012-10',
    concetto_codice: 'ARG15-C012',
    argomento_numero: 15,
    fase_rotta: 'origina',
    testo_domanda:
      'Per fermare un\u2019emorragia è consigliato cauterizzare immediatamente la ferita con fonti di calore disponibili sulla scena.',
    risposta_corretta: false,
    spiegazione:
      'ORIGINA: la cauterizzazione empirica è pericolosa e non raccomandata. La tecnica base resta la compressione diretta.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
] as const
