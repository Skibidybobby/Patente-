import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 141, 142 + L. 177/2024 (art. 117
// neopatentati e modifica art. 142 su ripetute violazioni in 60 minuti).
// 11 concetti atomici per l'argomento 7 — Limiti di velocità, pericolo
// e intralcio alla circolazione.
//
// NOTA aggiornamento L. 177/2024:
// - Neopatentati (patenti dal 14/12/2024): autostrada 100 km/h, extraurbana
//   principale 90 km/h, periodo 3 anni.
// - Art. 142: più violazioni dello stesso limite in 60 minuti → si applica
//   la sanzione più grave aumentata di 1/3.
//
// NOTA trappole (cfr. docs/research/03): alta densità di P07 (numeri
// quasi-giusti: 50 vs 70, 90 vs 100, 110 vs 130) e P10 (ambito nascosto:
// il limite urbano confuso con quello extraurbano o in pioggia).

export const ARG07_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG07-C001',
    argomento_numero: 7,
    titolo: 'Velocità adeguata, non solo limite',
    descrizione:
      'La velocità massima di una strada è un tetto, non la velocità corretta: il conducente deve sempre adeguarla alle condizioni reali.',
    regola_testo:
      'Il conducente deve regolare la velocità in modo da mantenere il pieno controllo del veicolo e da poterlo arrestare tempestivamente entro i limiti del proprio campo di visibilità.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 2,
    tag: ['velocita-adeguata', 'visibilita', 'P10'],
  },
  {
    codice: 'ARG07-C002',
    argomento_numero: 7,
    titolo: 'Limiti generali di velocità',
    descrizione:
      'Il CdS fissa limiti massimi generali per ciascuna categoria di strada, salvo segnaletica specifica.',
    regola_testo:
      'Salvo diversa segnaletica, i limiti generali per le autovetture sono 50 km/h nei centri abitati, 90 km/h sulle strade extraurbane secondarie, 110 km/h sulle extraurbane principali e 130 km/h in autostrada.',
    articolo_cds: 'Art. 142 CdS',
    livello_difficolta: 1,
    tag: ['limiti', 'generali', 'P07'],
  },
  {
    codice: 'ARG07-C003',
    argomento_numero: 7,
    titolo: 'Urbano: 50 km/h salvo diverso segnale',
    descrizione:
      'Nei centri abitati il limite base è 50 km/h, elevabile fino a 70 km/h su alcune strade urbane di scorrimento quando indicato.',
    regola_testo:
      'Il limite generale in centro abitato è di 50 km/h e può essere elevato fino a 70 km/h solo su strade urbane di scorrimento appositamente segnalate dall\u2019ente proprietario.',
    articolo_cds: 'Art. 142 CdS',
    livello_difficolta: 3,
    tag: ['urbano', '50', '70', 'P07'],
  },
  {
    codice: 'ARG07-C004',
    argomento_numero: 7,
    titolo: 'Riduzioni per pioggia',
    descrizione:
      'In caso di precipitazioni, autostrade ed extraurbane principali hanno limiti ridotti rispetto al valore in condizioni normali.',
    regola_testo:
      'Con precipitazioni atmosferiche il limite massimo è ridotto a 110 km/h in autostrada e a 90 km/h sulle strade extraurbane principali, indipendentemente dalla segnaletica ordinaria.',
    articolo_cds: 'Art. 142 CdS',
    livello_difficolta: 3,
    tag: ['pioggia', 'autostrada', '110', 'P07', 'P10'],
  },
  {
    codice: 'ARG07-C005',
    argomento_numero: 7,
    titolo: 'Riduzioni per nebbia o scarsa visibilità',
    descrizione:
      'Nebbia fitta, pioggia intensa e scarsa visibilità impongono di ridurre ulteriormente la velocità indipendentemente dai limiti di tabella.',
    regola_testo:
      'Con nebbia, forte pioggia o neve il conducente deve ridurre la velocità e, comunque, non superare mai quella che consente l\u2019arresto nello spazio visibile davanti al veicolo.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 2,
    tag: ['nebbia', 'visibilita', 'prudenza'],
  },
  {
    codice: 'ARG07-C006',
    argomento_numero: 7,
    titolo: 'Neopatentati: limiti 100/90',
    descrizione:
      'Le patenti B conseguite dal 14/12/2024 (L. 177/2024) sono soggette per 3 anni a limiti di velocità inferiori al valore ordinario.',
    regola_testo:
      'Per i primi 3 anni dal conseguimento della patente B il conducente non può superare 100 km/h in autostrada e 90 km/h sulle strade extraurbane principali.',
    articolo_cds: 'Art. 117 CdS',
    livello_difficolta: 3,
    tag: ['neopatentati', '100', '90', 'L177/2024', 'P07'],
  },
  {
    codice: 'ARG07-C007',
    argomento_numero: 7,
    titolo: 'Velocità minima in autostrada',
    descrizione:
      'Accanto al massimo esiste un minimo: procedere troppo piano in autostrada è intralcio.',
    regola_testo:
      'In autostrada è vietato procedere a velocità inferiore a quella minima prescritta o così lentamente da intralciare il normale flusso della circolazione, salvo motivi di sicurezza.',
    articolo_cds: 'Art. 142 CdS',
    livello_difficolta: 3,
    tag: ['minima', 'intralcio', 'autostrada'],
  },
  {
    codice: 'ARG07-C008',
    argomento_numero: 7,
    titolo: 'Moderare la velocità: casi tipici',
    descrizione:
      'Il CdS impone di moderare la velocità in situazioni specifiche a maggior rischio, anche molto al di sotto del limite di tabella.',
    regola_testo:
      'Occorre moderare la velocità nelle ore notturne, in prossimità di scuole, curve, dossi, attraversamenti pedonali, incroci, strade strette o quando si trasportano bambini, anziani o disabili.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 2,
    tag: ['moderare', 'casi', 'P10'],
  },
  {
    codice: 'ARG07-C009',
    argomento_numero: 7,
    titolo: 'Sanzioni art. 142 per fasce',
    descrizione:
      'Chi supera i limiti di velocità è sanzionato per fasce crescenti che comportano multa, decurtazione punti e, oltre certe soglie, sospensione patente.',
    regola_testo:
      'Le fasce di eccesso di velocità sono: fino a 10 km/h, da 10 a 40 km/h, da 40 a 60 km/h e oltre 60 km/h, con sanzioni amministrative e punti decurtati progressivamente più gravi.',
    articolo_cds: 'Art. 142 CdS',
    livello_difficolta: 3,
    tag: ['sanzioni', 'fasce', 'punti'],
  },
  {
    codice: 'ARG07-C010',
    argomento_numero: 7,
    titolo: 'Ripetute violazioni in 60 minuti',
    descrizione:
      'La L. 177/2024 ha introdotto all\u2019art. 142 una regola di cumulo specifica per chi commette più violazioni del limite di velocità nello stesso breve arco di tempo.',
    regola_testo:
      'Quando il conducente commette più violazioni dello stesso limite di velocità entro 60 minuti, si applica la sanzione più grave aumentata di un terzo.',
    articolo_cds: 'Art. 142 CdS',
    livello_difficolta: 5,
    tag: ['cumulo', '60-minuti', 'L177/2024'],
  },
  {
    codice: 'ARG07-C011',
    argomento_numero: 7,
    titolo: 'Pericolo e intralcio alla circolazione',
    descrizione:
      'Una velocità incongrua (troppo alta o troppo bassa) che generi pericolo o intralcio è sanzionata anche se formalmente entro i limiti di tabella.',
    regola_testo:
      'Il conducente deve scegliere una velocità che non crei pericolo né intralcio agli altri utenti: una guida anomala in eccesso o in difetto può essere sanzionata a prescindere dal limite formale.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 2,
    tag: ['pericolo', 'intralcio'],
  },
] as const
