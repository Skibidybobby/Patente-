import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 145, 146 (incroci e precedenza) e
// regole d'intersezione del DPR 495/1992.
// 10 concetti atomici per l'argomento 10 — Esempi di precedenza.
//
// NOTA trappole (cfr. docs/research/03 § 5): precedenza = regno di
// P05 (chi precede / chi segue), P06 ("ha" vs "deve dare" la precedenza),
// P03 (scambio obbligo/divieto), P13 (carreggiata vs corsia,
// tranviario vs ferroviario), P11 (eccezione: cartello che sovrascrive
// la regola generale).
//
// NOTA: questo argomento NON introduce i segnali in sé (arg4), ma le
// situazioni concrete in cui applicarli. Copre: precedenza a destra,
// STOP, dare precedenza, strisce bianche, rotatorie, incroci segnalati
// in contrasto, veicoli su rotaia, emergenza, pedoni sul prolungamento
// di svolta, strada sterrata vs asfaltata.

export const ARG10_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG10-C001',
    argomento_numero: 10,
    titolo: 'Precedenza a destra',
    descrizione:
      'Quando nessun segnale disciplina l\u2019incrocio, prevale la regola generale della destra.',
    regola_testo:
      'In un incrocio non segnalato il conducente deve dare la precedenza ai veicoli che provengono dalla sua destra.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 1,
    tag: ['destra', 'regola-generale', 'P06'],
  },
  {
    codice: 'ARG10-C002',
    argomento_numero: 10,
    titolo: 'STOP: obbligo di arresto',
    descrizione:
      'Al segnale "fermarsi e dare precedenza" il conducente deve arrestare effettivamente il veicolo, non solo rallentare.',
    regola_testo:
      'Al segnale di STOP il conducente deve arrestare completamente il veicolo in corrispondenza della striscia di arresto e dare la precedenza ai veicoli provenienti da entrambe le direzioni della strada principale.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 2,
    tag: ['stop', 'arresto', 'P03'],
  },
  {
    codice: 'ARG10-C003',
    argomento_numero: 10,
    titolo: 'Dare precedenza: non sempre serve fermarsi',
    descrizione:
      'Il triangolo rovesciato "dare precedenza" obbliga a cedere il passo ma non impone un arresto se non c\u2019è altro veicolo.',
    regola_testo:
      'Al segnale di dare precedenza il conducente deve cedere il passo ai veicoli che percorrono la strada principale e deve fermarsi solo se la situazione del traffico lo richiede.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 3,
    tag: ['dare-precedenza', 'triangolo', 'P03'],
  },
  {
    codice: 'ARG10-C004',
    argomento_numero: 10,
    titolo: 'Strisce bianche a triangolo al suolo',
    descrizione:
      'I triangoli bianchi al suolo ("denti di squalo") segnalano l\u2019obbligo di dare la precedenza anche in assenza del segnale verticale.',
    regola_testo:
      'La linea di triangoli bianchi trasversali alla marcia indica l\u2019obbligo di dare la precedenza ai veicoli provenienti dalla strada che si sta per impegnare.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 3,
    tag: ['denti-squalo', 'orizzontale', 'P13'],
  },
  {
    codice: 'ARG10-C005',
    argomento_numero: 10,
    titolo: 'Rotatorie: dentro passa prima',
    descrizione:
      'Nelle rotatorie moderne il flusso interno è prioritario rispetto a chi si deve immettere.',
    regola_testo:
      'Nelle rotatorie con segnale di dare precedenza all\u2019ingresso, i veicoli che si immettono devono cedere il passo a quelli che stanno già percorrendo l\u2019anello.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 2,
    tag: ['rotatoria', 'immissione', 'P05'],
  },
  {
    codice: 'ARG10-C006',
    argomento_numero: 10,
    titolo: 'Tram e veicoli su rotaia',
    descrizione:
      'I tram e i veicoli circolanti su rotaia hanno la precedenza per la difficoltà tecnica di arrestarsi.',
    regola_testo:
      'Il conducente deve dare la precedenza ai tram e ai veicoli circolanti su rotaia sia quando provengono da destra sia quando provengono da sinistra, salvo diversa segnalazione.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 3,
    tag: ['tram', 'rotaia', 'P06', 'P13'],
  },
  {
    codice: 'ARG10-C007',
    argomento_numero: 10,
    titolo: 'Svolta a sinistra: dare precedenza al senso opposto',
    descrizione:
      'Chi svolta a sinistra taglia la corsia opposta e deve cedere il passo a chi procede diritto o svolta a destra.',
    regola_testo:
      'Il conducente che svolta a sinistra deve dare la precedenza ai veicoli che provengono dal senso opposto e proseguono dritto o svoltano a destra.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 2,
    tag: ['svolta-sinistra', 'senso-opposto', 'P06'],
  },
  {
    codice: 'ARG10-C008',
    argomento_numero: 10,
    titolo: 'Veicoli di emergenza in servizio',
    descrizione:
      'I veicoli di polizia, vigili del fuoco e ambulanze in servizio di emergenza con sirena e lampeggianti non sono soggetti alle regole ordinarie di precedenza.',
    regola_testo:
      'I veicoli di emergenza in servizio di istituto con lampeggiante e sirena in funzione hanno la precedenza su tutti gli altri utenti, che devono lasciare libera la strada.',
    articolo_cds: 'Art. 177 CdS',
    livello_difficolta: 2,
    tag: ['emergenza', 'sirena'],
  },
  {
    codice: 'ARG10-C009',
    argomento_numero: 10,
    titolo: 'Strada sterrata vs asfaltata',
    descrizione:
      'Quando una strada senza fondo stabilizzato incrocia una strada asfaltata, chi proviene dalla sterrata deve cedere il passo.',
    regola_testo:
      'Il conducente che da una strada senza fondo stabilizzato si immette su una strada con fondo stabilizzato deve dare la precedenza ai veicoli che percorrono quest\u2019ultima.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 5,
    tag: ['sterrato', 'fondo-stabilizzato', 'P11'],
  },
  {
    codice: 'ARG10-C010',
    argomento_numero: 10,
    titolo: 'Pedoni durante la svolta',
    descrizione:
      'Anche quando la svolta è consentita, il pedone che attraversa il ramo su cui ci si sta immettendo mantiene la priorità.',
    regola_testo:
      'Il conducente che svolta per immettersi in un\u2019altra strada deve dare la precedenza ai pedoni che stanno attraversando la carreggiata in cui sta per entrare.',
    articolo_cds: 'Art. 191 CdS',
    livello_difficolta: 3,
    tag: ['pedoni', 'svolta', 'P06'],
  },
] as const
