import type { Concetto } from '../_types'

// Fonte: docs/research/01 + docs/research/02 + CdS artt. 116, 117, 125, 126,
// 126-bis, 128, 173, 180, 186, 186-bis, 218, 218-ter + L. 25/11/2024, n. 177.
// 11 concetti atomici per l'argomento 22 — Patenti, documenti di circolazione,
// sistema sanzionatorio, obblighi verso gli organi di polizia stradale.
//
// Nota normativa: questo argomento e\u0300 pesantemente impattato dalla
// L. 177/2024 (GU n.280 del 29/11/2024, in vigore dal 14/12/2024). Le modifiche
// riguardano in particolare gli artt. 117 (neopatentati 3 anni), 173 (cellulare),
// 218-ter (sospensione breve). Gli importi sono espressi in fasce, in
// coerenza con l\u2019aggiornamento biennale ex art. 195 c.3 CdS.

export const ARG22_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG22-C001',
    argomento_numero: 22,
    titolo: 'Categorie di patente e requisiti per la B',
    descrizione:
      'La patente B abilita alla guida di autoveicoli fino a 3,5 t di massa complessiva, progettati per il trasporto di non piu\u0300 di otto passeggeri oltre al conducente; consente inoltre, con vincoli, il traino di rimorchi leggeri o di un rimorchio piu\u0300 pesante.',
    regola_testo:
      'La patente di categoria B e\u0300 richiesta per la guida di autoveicoli con massa complessiva a pieno carico fino a 3.500 kg, progettati per trasportare al massimo otto persone oltre al conducente; eta\u0300 minima 18 anni; consente il traino di un rimorchio leggero (fino a 750 kg) o di un rimorchio piu\u0300 pesante purche\u0301 la massa complessiva della combinazione non superi 4.250 kg (oltre tale soglia e fino a 7.000 kg serve l\u2019estensione B96 o la patente BE).',
    articolo_cds: 'Art. 116 CdS',
    livello_difficolta: 2,
    tag: ['patente-B', 'eta', 'massa', 'rimorchio'],
  },
  {
    codice: 'ARG22-C002',
    argomento_numero: 22,
    titolo: 'Neopatentati: durata del regime (3 anni)',
    descrizione:
      'La L. 177/2024 ha esteso da 1 a 3 anni la durata del regime vincolato dei neopatentati per quanto riguarda i limiti di potenza del veicolo; il limite del tasso alcolemico e il regime sanzionatorio rinforzato restano sui tre anni gia\u0300 previsti.',
    regola_testo:
      'Per le patenti di categoria B conseguite a decorrere dal 14 dicembre 2024 il regime dei neopatentati dura tre anni dal conseguimento; durante questo periodo si applicano il limite di potenza del veicolo, il limite di velocita\u0300 ridotto su strade extraurbane e il limite di tasso alcolemico pari a zero.',
    articolo_cds: 'Art. 117 CdS (mod. L. 177/2024)',
    livello_difficolta: 3,
    tag: ['neopatentati', 'riforma-2024', '3-anni', 'P07'],
  },
  {
    codice: 'ARG22-C003',
    argomento_numero: 22,
    titolo: 'Neopatentati: limite di potenza del veicolo',
    descrizione:
      'Il neopatentato non puo\u0300 guidare qualsiasi auto: la legge limita il rapporto potenza/tara e, per le autovetture, fissa un tetto assoluto di potenza, per evitare che chi ha appena conseguito la patente si confronti con veicoli troppo performanti.',
    regola_testo:
      'Nei primi tre anni dal rilascio della patente B, il conducente non puo\u0300 guidare autoveicoli con potenza specifica superiore a 75 kW/t riferita alla tara; per le autovetture di categoria M1 e\u0300 inoltre fissato un limite assoluto di 105 kW di potenza massima. La violazione e\u0300 sanzionata con una multa compresa nella fascia 165-660 euro e la sospensione della patente da 2 a 8 mesi.',
    articolo_cds: 'Art. 117 CdS',
    livello_difficolta: 4,
    tag: ['neopatentati', 'potenza', '75kW', '105kW', 'P07'],
  },
  {
    codice: 'ARG22-C004',
    argomento_numero: 22,
    titolo: 'Neopatentati: velocita\u0300 e tasso alcolemico',
    descrizione:
      'I neopatentati non guidano agli stessi limiti degli altri utenti: la velocita\u0300 massima consentita e\u0300 ridotta sulle strade veloci e il tasso alcolemico ammesso e\u0300 sempre e comunque pari a zero, anche per assunzioni minime di alcol.',
    regola_testo:
      'Nei primi tre anni di patente la velocita\u0300 massima consentita e\u0300 di 100 km/h in autostrada e 90 km/h sulle strade extraurbane principali; il tasso alcolemico consentito e\u0300 0,0 g/l: qualsiasi valore superiore configura sempre la guida in stato di ebbrezza con le aggravanti dell\u2019art. 186-bis CdS.',
    articolo_cds: 'Art. 117, art. 186-bis CdS',
    livello_difficolta: 3,
    tag: ['neopatentati', 'velocita-100', 'alcol-zero', 'P07', 'P10'],
  },
  {
    codice: 'ARG22-C005',
    argomento_numero: 22,
    titolo: 'Documenti da portare a bordo e esibizione agli agenti',
    descrizione:
      'Il conducente deve avere con se\u0301 i documenti che dimostrano la propria abilitazione alla guida e quelli che attestano la regolarita\u0300 del veicolo; se richiesti dagli organi di polizia stradale deve esibirli ed e\u0300 tenuto a un comportamento collaborativo.',
    regola_testo:
      'Durante la guida il conducente deve avere con se\u0301 la patente in corso di validita\u0300, la carta di circolazione (libretto) del veicolo e il certificato di assicurazione obbligatoria RC; in caso di controllo deve fermarsi e fornire agli organi di polizia stradale i dati personali, i documenti e le informazioni richieste per l\u2019accertamento.',
    articolo_cds: 'Art. 180, art. 192 CdS',
    livello_difficolta: 2,
    tag: ['documenti', 'controllo-polizia', 'P03'],
  },
  {
    codice: 'ARG22-C006',
    argomento_numero: 22,
    titolo: 'Patente a punti: saldo, detrazione, azzeramento',
    descrizione:
      'Ogni patente nasce con un saldo di 20 punti, che si incrementa o diminuisce nel tempo in funzione del comportamento del conducente: le infrazioni piu\u0300 gravi sottraggono punti, mentre due anni di guida senza infrazioni che comportano decurtazione incrementano il saldo.',
    regola_testo:
      'Il saldo patente parte da 20 punti; ogni due anni senza infrazioni sanzionate con decurtazione si aggiungono 2 punti fino a un massimo di 30; ogni violazione prevista dall\u2019art. 126-bis comporta una detrazione; quando il saldo raggiunge lo zero il conducente deve sottoporsi a nuova prova di esame di idoneita\u0300 tecnica presso la Motorizzazione, pena la sospensione della patente.',
    articolo_cds: 'Art. 126-bis CdS',
    livello_difficolta: 3,
    tag: ['punti', 'saldo', 'revisione-patente', 'P07'],
  },
  {
    codice: 'ARG22-C007',
    argomento_numero: 22,
    titolo: 'Cellulare alla guida (art. 173 dopo il 14/12/2024)',
    descrizione:
      'L\u2019uso del telefono cellulare alla guida e\u0300 uno dei comportamenti piu\u0300 pericolosi e, dopo la riforma, e\u0300 anche uno dei piu\u0300 severamente puniti: la sanzione colpisce contemporaneamente con multa, sottrazione di punti e sospensione immediata della patente.',
    regola_testo:
      'Durante la marcia e\u0300 vietato fare uso di apparecchi radiotelefonici, smartphone o simili tenendoli in mano; la prima violazione e\u0300 punita con una sanzione amministrativa da 250 a 1.000 euro, la sospensione immediata della patente da 15 giorni a 2 mesi e la decurtazione di 5 punti; la recidiva entro due anni comporta sanzione da 350 a 1.400 euro, sospensione da 1 a 3 mesi e decurtazione di 10 punti.',
    articolo_cds: 'Art. 173 CdS (mod. L. 177/2024)',
    livello_difficolta: 4,
    tag: ['cellulare', 'riforma-2024', 'sospensione-immediata', 'P07'],
  },
  {
    codice: 'ARG22-C008',
    argomento_numero: 22,
    titolo: 'Sospensione breve della patente (art. 218-ter)',
    descrizione:
      'La L. 177/2024 ha introdotto una nuova sanzione accessoria di brevissima durata che scatta quando il conducente commette un\u2019infrazione da decurtazione avendo gia\u0300 un saldo punti basso: serve a mettere in guardia chi si avvicina all\u2019azzeramento senza attendere l\u2019iter amministrativo ordinario.',
    regola_testo:
      'Quando il conducente commette una violazione che comporta decurtazione di almeno cinque punti ed ha un saldo compreso tra 10 e 19 punti, la patente e\u0300 sospesa per 7 giorni; se il saldo e\u0300 inferiore a 10 punti la sospensione e\u0300 di 15 giorni. La misura si aggiunge alle sanzioni principali previste per la violazione accertata.',
    articolo_cds: 'Art. 218-ter CdS (nuovo, L. 177/2024)',
    livello_difficolta: 4,
    tag: ['sospensione-breve', 'riforma-2024', '7-giorni', '15-giorni', 'P07'],
  },
  {
    codice: 'ARG22-C009',
    argomento_numero: 22,
    titolo: 'Guida in stato di ebbrezza (art. 186) e alcolock',
    descrizione:
      'La guida in stato di ebbrezza e\u0300 disciplinata su tre fasce progressive di tasso alcolemico; dalla riforma del 2024, ai condannati per ebbrezza puo\u0300 essere imposto l\u2019alcolock, dispositivo che impedisce l\u2019avviamento del veicolo se rileva alcol nel respiro.',
    regola_testo:
      'Il limite generale del tasso alcolemico e\u0300 di 0,5 g/l; la fascia 0,5-0,8 g/l e\u0300 sanzione amministrativa, la fascia 0,8-1,5 g/l e\u0300 reato con sospensione patente, oltre 1,5 g/l e\u0300 reato con revoca. Per chi e\u0300 condannato ai sensi dell\u2019art. 186 CdS, il giudice applica l\u2019obbligo di installazione dell\u2019alcolock sul veicolo e il codice unionale 68 "niente alcool" per un periodo di 2 o 3 anni a seconda della fascia.',
    articolo_cds: 'Art. 186 CdS (mod. L. 177/2024); DM 02/07/2025 (alcolock)',
    livello_difficolta: 4,
    tag: ['ebbrezza', 'alcolock', 'fasce', 'codice-68', 'P07'],
  },
  {
    codice: 'ARG22-C010',
    argomento_numero: 22,
    titolo: 'Rinnovo della patente B',
    descrizione:
      'La validita\u0300 della patente B non e\u0300 illimitata: dipende dall\u2019eta\u0300 del titolare e si accorcia con il passare degli anni, per tenere conto della progressiva evoluzione delle capacita\u0300 psico-fisiche richieste dalla guida.',
    regola_testo:
      'La patente B va rinnovata ogni 10 anni fino ai 50 anni di eta\u0300; ogni 5 anni tra i 50 e i 70 anni; ogni 3 anni tra i 70 e gli 80 anni; ogni 2 anni dopo gli 80 anni. Il rinnovo richiede una visita medica di idoneita\u0300 psico-fisica presso un medico abilitato.',
    articolo_cds: 'Art. 126 CdS',
    livello_difficolta: 2,
    tag: ['rinnovo', 'validita', 'visita-medica', 'P07'],
  },
  {
    codice: 'ARG22-C011',
    argomento_numero: 22,
    titolo: 'Obblighi in caso di fermo o sequestro del veicolo',
    descrizione:
      'Quando il veicolo e\u0300 sottoposto a fermo amministrativo o sequestro, il proprietario e il conducente hanno obblighi precisi di custodia e di astensione dalla circolazione: ignorarli comporta sanzioni aggravate e la perdita del veicolo a favore dell\u2019erario.',
    regola_testo:
      'Il fermo amministrativo obbliga a sospendere la circolazione del veicolo per il periodo stabilito; il sequestro amministrativo comporta la custodia del mezzo in attesa della confisca definitiva. La circolazione con un veicolo sottoposto a fermo o a sequestro e\u0300 punita con sanzione amministrativa, confisca del veicolo e, per il conducente, sospensione della patente.',
    articolo_cds: 'Artt. 213, 214 CdS',
    livello_difficolta: 4,
    tag: ['fermo', 'sequestro', 'confisca'],
  },
] as const
