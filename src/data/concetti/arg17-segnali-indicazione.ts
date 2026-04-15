import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 39 c.1 lett. c), art. 42 + Reg. CdS
// artt. 125-136 (segnali di indicazione).
// 8 concetti atomici per l'argomento 17 — Segnali di indicazione.
//
// NOTA trappole (cfr. docs/research/03): argomento esposto principalmente
// a P13 (confusione fra categorie di indicazione e segnali di prescrizione)
// e P18 (verit\u00e0 parziale fuori contesto sul colore di sfondo).

export const ARG17_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG17-C001',
    argomento_numero: 17,
    titolo: 'Funzione e forma dei segnali di indicazione',
    descrizione:
      'I segnali di indicazione non prescrivono obblighi o divieti: forniscono al conducente informazioni utili per orientarsi, raggiungere una localit\u00e0 o individuare servizi.',
    regola_testo:
      'I segnali di indicazione hanno di regola forma rettangolare o quadrata e contengono simboli, scritte o pittogrammi; servono a facilitare l\u2019orientamento e la scelta del percorso, non impongono comportamenti specifici al conducente.',
    articolo_cds: 'Art. 39 c.1 lett. c) CdS; art. 125 Reg. CdS',
    livello_difficolta: 1,
    tag: ['forma', 'funzione', 'indicazione'],
  },
  {
    codice: 'ARG17-C002',
    argomento_numero: 17,
    titolo: 'Codice colori per tipo di strada',
    descrizione:
      'Il colore di sfondo del segnale di indicazione di direzione rivela il tipo di strada che conduce alla localit\u00e0 indicata: \u00e8 una chiave di lettura fondamentale per pianificare il percorso.',
    regola_testo:
      'Lo sfondo dei segnali di direzione \u00e8 verde per autostrade, blu per strade extraurbane, bianco per strade urbane e locali; il marrone indica siti di interesse turistico e culturale, il giallo i percorsi provvisori o le deviazioni.',
    articolo_cds: 'Art. 39 CdS; art. 127 Reg. CdS',
    livello_difficolta: 2,
    tag: ['colori', 'autostrada', 'P18'],
  },
  {
    codice: 'ARG17-C003',
    argomento_numero: 17,
    titolo: 'Segnali di preavviso e di direzione',
    descrizione:
      'Prima di un\u2019intersezione complessa sono disposti pi\u00f9 segnali in successione: il preavviso di intersezione (a distanza), il segnale di direzione con freccia e, dopo l\u2019incrocio, il segnale di conferma.',
    regola_testo:
      'Il segnale di preavviso di intersezione annuncia a distanza le direzioni disponibili e le relative localit\u00e0; il segnale di direzione indica la stessa informazione in corrispondenza dell\u2019intersezione; il segnale di conferma rassicura il conducente dopo averla superata.',
    articolo_cds: 'Art. 39 CdS; artt. 128, 130 Reg. CdS',
    livello_difficolta: 2,
    tag: ['preavviso', 'direzione', 'conferma'],
  },
  {
    codice: 'ARG17-C004',
    argomento_numero: 17,
    titolo: 'Segnali di localit\u00e0 e centro abitato',
    descrizione:
      'I segnali di inizio e fine centro abitato non sono solo toponomastici: attivano e disattivano un intero insieme di regole di condotta (velocit\u00e0, uso del clacson, sosta, luci).',
    regola_testo:
      'Il segnale rettangolare con il nome della localit\u00e0 su fondo bianco e bordo nero indica l\u2019inizio del centro abitato e attiva il limite urbano di 50 km/h; il segnale con nome sbarrato indica la fine del centro abitato e disattiva le relative prescrizioni.',
    articolo_cds: 'Art. 39 CdS; art. 131 Reg. CdS',
    livello_difficolta: 2,
    tag: ['centro-abitato', 'inizio', 'fine', 'P10'],
  },
  {
    codice: 'ARG17-C005',
    argomento_numero: 17,
    titolo: 'Segnali di identificazione strade',
    descrizione:
      'Le strade italiane hanno un numero identificativo preceduto da una lettera (A per autostrade, SS per strade statali, SR regionali, SP provinciali, SC comunali): il segnale identificativo ne porta il codice su uno scudo colorato.',
    regola_testo:
      'Lo scudo autostradale \u00e8 verde con lettera A bianca e numero; lo scudo delle strade statali \u00e8 blu con sigla SS, delle regionali blu con SR, delle provinciali blu con SP; in Europa lo scudo verde con lettera E individua gli itinerari internazionali.',
    articolo_cds: 'Art. 39 CdS; art. 129 Reg. CdS',
    livello_difficolta: 3,
    tag: ['scudo', 'numerazione', 'europa'],
  },
  {
    codice: 'ARG17-C006',
    argomento_numero: 17,
    titolo: 'Segnali di itinerario, deviazione e uscita',
    descrizione:
      'Quando un tratto di strada \u00e8 chiuso o modificato, la segnaletica di indicazione guida il conducente lungo un percorso alternativo: itinerari consigliati, deviazioni, uscite provvisorie.',
    regola_testo:
      'I segnali di itinerario consigliato e di deviazione hanno sfondo giallo con freccia che indica il percorso alternativo; nei pressi dei caselli autostradali il segnale di uscita \u00e8 rettangolare con sfondo bianco e banda verde, riportando il numero di uscita e la localit\u00e0.',
    articolo_cds: 'Art. 39 CdS; artt. 130, 132 Reg. CdS',
    livello_difficolta: 3,
    tag: ['deviazione', 'uscita', 'giallo'],
  },
  {
    codice: 'ARG17-C007',
    argomento_numero: 17,
    titolo: 'Segnali di servizio',
    descrizione:
      'I segnali di servizio segnalano strutture utili al viaggio (stazioni di rifornimento, officine, pronto soccorso, telefono, bar, ristorante, area camper): non prescrivono nulla, informano soltanto.',
    regola_testo:
      'I segnali di servizio sono rettangolari con sfondo blu (in autostrada ed extraurbana) o bianco (urbana), contengono un pittogramma nero su riquadro bianco e indicano la presenza di servizi utili come distributori, officine, punti di ristoro e soccorso.',
    articolo_cds: 'Art. 39 CdS; art. 134 Reg. CdS',
    livello_difficolta: 2,
    tag: ['servizio', 'pittogramma', 'blu'],
  },
  {
    codice: 'ARG17-C008',
    argomento_numero: 17,
    titolo: 'Segnali turistici e di territorio',
    descrizione:
      'I segnali turistici indicano siti di interesse culturale, ambientale o turistico: musei, castelli, parchi, aree archeologiche. Hanno uno sfondo caratteristico che li distingue dai normali segnali di direzione.',
    regola_testo:
      'I segnali di indicazione turistica hanno sfondo marrone con scritte e simboli bianchi; si distinguono dai segnali di direzione ordinari e dalle segnalazioni di servizio, e si limitano a informare senza imporre restrizioni di marcia.',
    articolo_cds: 'Art. 39 CdS; art. 134 Reg. CdS',
    livello_difficolta: 2,
    tag: ['turistico', 'marrone', 'cultura', 'P13'],
  },
] as const
