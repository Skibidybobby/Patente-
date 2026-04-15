import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 2, 3 (definizioni stradali), art. 140
// (principio informatore della circolazione) e art. 141 (velocità).
// 8 concetti atomici per l'argomento 16 — Definizioni stradali e di traffico,
// doveri del conducente.
//
// NOTA trappole (cfr. docs/research/03): argomento fortemente esposto al
// pattern P13 — coppie terminologiche quasi-sinonime (carreggiata/corsia,
// banchina/marciapiede, intersezione/incrocio). Secondario P10 (ambito
// silenzioso: regole del centro abitato estese fuori).

export const ARG16_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG16-C001',
    argomento_numero: 16,
    titolo: 'Strada, carreggiata e corsia',
    descrizione:
      'La strada è l\u2019area di uso pubblico destinata alla circolazione; al suo interno la carreggiata è la parte destinata ai veicoli, a sua volta divisa in corsie, ciascuna di larghezza sufficiente al transito di una sola fila di veicoli.',
    regola_testo:
      'La carreggiata non comprende banchine, marciapiedi e piste ciclabili separate; la corsia \u00e8 invece una suddivisione longitudinale della carreggiata delimitata dalla segnaletica orizzontale e destinata al transito di una fila di veicoli.',
    articolo_cds: 'Art. 3 CdS',
    livello_difficolta: 2,
    tag: ['strada', 'carreggiata', 'corsia', 'P13'],
  },
  {
    codice: 'ARG16-C002',
    argomento_numero: 16,
    titolo: 'Banchina e marciapiede',
    descrizione:
      'Banchina e marciapiede sono entrambi laterali alla carreggiata ma hanno funzioni e utenti diversi: la banchina serve la sosta di emergenza e i pedoni fuori centro abitato, il marciapiede \u00e8 riservato ai pedoni.',
    regola_testo:
      'La banchina \u00e8 la parte della strada esterna alla carreggiata, compresa fra il margine di questa e il pi\u00f9 vicino fra marciapiede, spartitraffico, cunetta o ciglio; il marciapiede \u00e8 invece la parte della strada, esterna alla carreggiata, rialzata o diversamente delimitata, riservata ai pedoni.',
    articolo_cds: 'Art. 3 c.1 n. 4, n. 33 CdS',
    livello_difficolta: 3,
    tag: ['banchina', 'marciapiede', 'pedoni', 'P13'],
  },
  {
    codice: 'ARG16-C003',
    argomento_numero: 16,
    titolo: 'Pista ciclabile, corsia ciclabile e itinerario ciclopedonale',
    descrizione:
      'La pista ciclabile \u00e8 una parte di strada riservata ai velocipedi fisicamente o visivamente separata dalla carreggiata, distinta dalla semplice corsia ciclabile che \u00e8 segnata solo da linee orizzontali.',
    regola_testo:
      'La pista ciclabile \u00e8 la parte longitudinale della strada destinata alla circolazione dei velocipedi, separata fisicamente (cordolo, aiuola) oppure visivamente (strisce, colorazione del fondo); la corsia ciclabile \u00e8 una sola striscia riservata sulla corsia veicolare.',
    articolo_cds: 'Art. 3 c.1 n. 39, n. 12-bis CdS',
    livello_difficolta: 3,
    tag: ['ciclabile', 'ciclopedonale', 'velocipedi'],
  },
  {
    codice: 'ARG16-C004',
    argomento_numero: 16,
    titolo: 'Intersezione, incrocio e confluenza',
    descrizione:
      'L\u2019intersezione \u00e8 l\u2019area generica in cui due o pi\u00f9 strade si incontrano; include gli incroci (con attraversamento) e le confluenze (innesti a Y), dove le regole di precedenza cambiano secondo il tipo.',
    regola_testo:
      'L\u2019intersezione a raso \u00e8 l\u2019area comune a pi\u00f9 strade che si incrociano o confluiscono sullo stesso livello, organizzata in modo da permettere lo smistamento delle correnti di traffico; comprende gli incroci e le confluenze.',
    articolo_cds: 'Art. 3 c.1 n. 20, n. 21 CdS',
    livello_difficolta: 3,
    tag: ['intersezione', 'incrocio', 'confluenza', 'P13'],
  },
  {
    codice: 'ARG16-C005',
    argomento_numero: 16,
    titolo: 'Centro abitato come limite normativo',
    descrizione:
      'Il centro abitato non \u00e8 un concetto demografico ma un insieme di edifici delimitato da appositi segnali: il suo attraversamento attiva regole specifiche su velocit\u00e0, sosta, segnalazioni acustiche e luci.',
    regola_testo:
      'Il centro abitato \u00e8 l\u2019insieme di edifici delimitato lungo le vie di accesso dai segnali di inizio e fine centro abitato; al suo interno il limite generale di velocit\u00e0 \u00e8 50 km/h (art. 142) e vigono regole pi\u00f9 restrittive su uso del clacson (art. 156) e segnalazioni.',
    articolo_cds: 'Art. 3 c.1 n. 8 CdS',
    livello_difficolta: 2,
    tag: ['centro-abitato', 'limiti', 'P10'],
  },
  {
    codice: 'ARG16-C006',
    argomento_numero: 16,
    titolo: 'Classificazione delle strade (artt. 2 CdS)',
    descrizione:
      'L\u2019art. 2 CdS classifica le strade per caratteristiche costruttive e funzionali in autostrade (A), extraurbane principali (B), extraurbane secondarie (C), urbane di scorrimento (D), urbane di quartiere (E), locali (F), ciclabili (F-bis).',
    regola_testo:
      'Ogni categoria ha requisiti precisi: le autostrade prevedono carreggiate separate, almeno due corsie per senso pi\u00f9 corsia di emergenza e accesso solo per svincoli; le strade locali sono opposte, prive di requisiti costruttivi specifici e aperte a tutti gli utenti.',
    articolo_cds: 'Art. 2 CdS',
    livello_difficolta: 3,
    tag: ['classificazione', 'autostrada', 'urbana'],
  },
  {
    codice: 'ARG16-C007',
    argomento_numero: 16,
    titolo: 'Dovere generale del conducente (art. 140)',
    descrizione:
      'L\u2019art. 140 \u00e8 la norma-cardine dei doveri del conducente: impone di comportarsi in modo da non costituire pericolo o intralcio e da salvaguardare la sicurezza delle persone.',
    regola_testo:
      'Gli utenti della strada devono comportarsi in modo da non costituire pericolo o intralcio per la circolazione e in modo che sia salvaguardata la sicurezza stradale; questo dovere generale precede e integra tutte le singole regole di condotta.',
    articolo_cds: 'Art. 140 CdS',
    livello_difficolta: 1,
    tag: ['dovere-generale', 'sicurezza', 'P01'],
  },
  {
    codice: 'ARG16-C008',
    argomento_numero: 16,
    titolo: 'Velocit\u00e0 adeguata e controllo del veicolo (art. 141)',
    descrizione:
      'Accanto ai limiti massimi, il conducente deve sempre regolare la velocit\u00e0 alle condizioni reali di strada, traffico, visibilit\u00e0 e meteo: il limite del cartello non \u00e8 una velocit\u00e0 garantita.',
    regola_testo:
      'Il conducente deve regolare la velocit\u00e0 in modo che sia evitato ogni pericolo per la sicurezza delle persone e delle cose e ogni altra causa di disordine per la circolazione; deve mantenere il controllo del veicolo ed essere in grado di arrestarlo tempestivamente entro i limiti del proprio campo di visibilit\u00e0.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 2,
    tag: ['velocita-adeguata', 'controllo', 'P10', 'P04'],
  },
] as const
