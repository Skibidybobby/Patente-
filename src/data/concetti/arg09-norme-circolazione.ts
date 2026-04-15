import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 140, 143, 144, 145, 146, 154, 191.
// 13 concetti atomici per l'argomento 9 — Norme sulla circolazione dei veicoli.
//
// NOTA trappole (cfr. docs/research/03 § 5): questo argomento è il
// terreno tipico di P01 (quantificatore universale infilato), P02
// (doppia negazione), P04 (può/deve), P12 (libertà apparente), P15
// (ovvero giuridico = oppure), P16 (passivo ingannevole).
//
// NOTA aggiornamenti: qui NON si citano i dettagli neopatentati (arg7)
// né la distanza laterale dai ciclisti (arg11), ma si resta sulle
// regole generali di posizione sulla carreggiata, svolta, retromarcia,
// cambio corsia, rotatorie e rispetto dei pedoni.

export const ARG09_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG09-C001',
    argomento_numero: 9,
    titolo: 'Principio generale di prudenza',
    descrizione:
      'Il CdS impone al conducente di comportarsi in modo da non costituire pericolo o intralcio, anche quando nessuna norma specifica lo vieta.',
    regola_testo:
      'Gli utenti della strada devono comportarsi in modo da non costituire pericolo o intralcio per la circolazione e da salvaguardare la sicurezza delle persone.',
    articolo_cds: 'Art. 140 CdS',
    livello_difficolta: 2,
    tag: ['prudenza', 'principio-generale'],
  },
  {
    codice: 'ARG09-C002',
    argomento_numero: 9,
    titolo: 'Circolare tenendo la destra',
    descrizione:
      'La posizione di base del veicolo sulla carreggiata è il più vicino possibile al margine destro.',
    regola_testo:
      'I veicoli devono circolare sulla parte destra della carreggiata e in prossimità del margine destro, anche quando la strada è libera.',
    articolo_cds: 'Art. 143 CdS',
    livello_difficolta: 1,
    tag: ['destra', 'posizione', 'P01'],
  },
  {
    codice: 'ARG09-C003',
    argomento_numero: 9,
    titolo: 'Uso delle corsie',
    descrizione:
      'Nelle strade a più corsie per senso di marcia, le corsie di sinistra servono al sorpasso, non alla marcia ordinaria.',
    regola_testo:
      'Fuori dai centri abitati la corsia di marcia normale è quella più a destra; le corsie a sinistra vanno usate per il sorpasso e abbandonate non appena completata la manovra.',
    articolo_cds: 'Art. 143 CdS',
    livello_difficolta: 3,
    tag: ['corsie', 'sorpasso'],
  },
  {
    codice: 'ARG09-C004',
    argomento_numero: 9,
    titolo: 'Cambio di direzione e di corsia',
    descrizione:
      'Ogni manovra che muta la traiettoria deve essere preceduta da controllo e segnalazione preventiva agli altri utenti.',
    regola_testo:
      'Prima di cambiare direzione o corsia il conducente deve accertarsi di poterlo fare senza pericolo e segnalare la manovra con sufficiente anticipo mediante gli indicatori di direzione.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 2,
    tag: ['svolta', 'corsia', 'indicatori'],
  },
  {
    codice: 'ARG09-C005',
    argomento_numero: 9,
    titolo: 'Svolta a destra',
    descrizione:
      'La svolta a destra si prepara accostandosi al margine destro, per evitare il taglio di corsia agli altri veicoli.',
    regola_testo:
      'Per svoltare a destra il conducente deve preventivamente accostarsi il più possibile al margine destro della carreggiata e compiere la manovra con il minimo ingombro.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 2,
    tag: ['svolta-destra'],
  },
  {
    codice: 'ARG09-C006',
    argomento_numero: 9,
    titolo: 'Svolta a sinistra',
    descrizione:
      'La svolta a sinistra richiede il preposizionamento presso l\u2019asse mediano e il rispetto rigoroso della precedenza del senso opposto.',
    regola_testo:
      'Per svoltare a sinistra il conducente deve portarsi in prossimità della mezzeria, dare la precedenza ai veicoli che provengono in senso opposto e svoltare lasciando il centro dell\u2019incrocio sulla propria sinistra.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 3,
    tag: ['svolta-sinistra', 'precedenza'],
  },
  {
    codice: 'ARG09-C007',
    argomento_numero: 9,
    titolo: 'Retromarcia: regola ed eccezione',
    descrizione:
      'La retromarcia è una manovra straordinaria, vietata salvo brevi tratti per parcheggio o manovra.',
    regola_testo:
      'La retromarcia è consentita solo per brevissimi tratti utili al parcheggio, all\u2019inversione di marcia o alla manovra, ed è sempre vietata in autostrada e sulle strade extraurbane principali.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 3,
    tag: ['retromarcia', 'autostrada', 'P01'],
  },
  {
    codice: 'ARG09-C008',
    argomento_numero: 9,
    titolo: 'Rotatorie: chi ha la precedenza',
    descrizione:
      'Nelle rotatorie moderne alla francese la precedenza è di chi è già all\u2019interno dell\u2019anello, segnalata dal segnale "dare precedenza".',
    regola_testo:
      'Chi si immette in una rotatoria con segnale di dare precedenza deve cedere il passo ai veicoli che già vi circolano; in assenza di segnale si applica la regola generale della precedenza a destra.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 3,
    tag: ['rotatoria', 'precedenza'],
  },
  {
    codice: 'ARG09-C009',
    argomento_numero: 9,
    titolo: 'Pedoni sulle strisce',
    descrizione:
      'Il conducente deve dare la precedenza ai pedoni che attraversano o che stanno per attraversare sulle strisce pedonali.',
    regola_testo:
      'Il conducente deve fermarsi per consentire l\u2019attraversamento ai pedoni che si trovino sugli attraversamenti pedonali o che stiano iniziando ad attraversare con evidente intenzione di farlo.',
    articolo_cds: 'Art. 191 CdS',
    livello_difficolta: 2,
    tag: ['pedoni', 'strisce', 'P04'],
  },
  {
    codice: 'ARG09-C010',
    argomento_numero: 9,
    titolo: 'Non impegnare l\u2019incrocio ingombro',
    descrizione:
      'Anche con semaforo verde, il conducente non deve entrare in un incrocio se rischia di bloccarlo rimanendovi fermo.',
    regola_testo:
      'I conducenti non devono impegnare un incrocio o un passaggio a livello se la situazione del traffico rende prevedibile che saranno costretti a fermarvisi, ostacolando gli altri utenti.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 3,
    tag: ['incrocio', 'blocco'],
  },
  {
    codice: 'ARG09-C011',
    argomento_numero: 9,
    titolo: 'Comportamento verso veicoli di emergenza',
    descrizione:
      'Ambulanze, polizia e vigili del fuoco in servizio di emergenza con sirena e lampeggiante hanno diritto alla libera circolazione.',
    regola_testo:
      'Alla vista o al suono del dispositivo acustico supplementare di un veicolo di emergenza, il conducente deve lasciare libera la strada, fermandosi se necessario.',
    articolo_cds: 'Art. 177 CdS',
    livello_difficolta: 2,
    tag: ['emergenza', 'sirena', 'P04'],
  },
  {
    codice: 'ARG09-C012',
    argomento_numero: 9,
    titolo: 'Uso degli indicatori di direzione',
    descrizione:
      'Gli indicatori di direzione (frecce) non sostituiscono la manovra: vanno azionati prima, mantenuti durante e spenti dopo.',
    regola_testo:
      'L\u2019azionamento degli indicatori di direzione deve avvenire con un anticipo sufficiente rispetto alla manovra, deve accompagnarla per tutta la durata e deve cessare subito dopo il suo completamento.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 2,
    tag: ['frecce', 'segnalazione'],
  },
  {
    codice: 'ARG09-C013',
    argomento_numero: 9,
    titolo: 'Divieto di segnalazioni acustiche in centri abitati',
    descrizione:
      'Il clacson nei centri abitati è uno strumento di sicurezza, non un avviso generico, e si usa solo quando indispensabile.',
    regola_testo:
      'Nei centri abitati è vietato l\u2019uso dei dispositivi di segnalazione acustica, salvo i casi di effettivo e concreto pericolo in cui il loro impiego sia necessario per evitare un incidente.',
    articolo_cds: 'Art. 156 CdS',
    livello_difficolta: 3,
    tag: ['clacson', 'centro-abitato', 'P12'],
  },
] as const
