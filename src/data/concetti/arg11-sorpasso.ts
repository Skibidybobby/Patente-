import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 142, 145, 146, 148, 149 + L. 177/2024
// 11 concetti atomici per l'argomento 11 — Norme sul sorpasso.
// Nota L. 177/2024: introduzione distanza laterale minima 1,5 m per sorpasso
// di ciclisti (art. 148 CdS), pattern ad alto rischio per la scheda d'esame.

export const ARG11_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG11-C001',
    argomento_numero: 11,
    titolo: 'Definizione di sorpasso',
    descrizione:
      'Il sorpasso è la manovra con cui un veicolo supera un altro veicolo o animale in movimento che precede sulla stessa carreggiata, portandosi sulla sua sinistra e poi rientrando nella corsia di marcia originaria.',
    regola_testo:
      'Il sorpasso si esegue di norma sulla sinistra; la manovra comprende tre fasi distinte — spostamento, affiancamento, rientro — durante le quali il conducente deve garantire assenza di pericolo per sé, per il sorpassato e per chi sopraggiunge.',
    articolo_cds: 'Art. 148 CdS',
    livello_difficolta: 1,
    tag: ['definizione', 'manovra', 'fasi'],
  },
  {
    codice: 'ARG11-C002',
    argomento_numero: 11,
    titolo: 'Verifiche preliminari al sorpasso',
    descrizione:
      'Prima di iniziare la manovra il conducente deve valutare visibilità, spazio disponibile, velocità propria, velocità del sorpassato e dei veicoli che sopraggiungono dietro o in senso opposto. In mancanza di una sola di queste condizioni, il sorpasso va rimandato.',
    regola_testo:
      'Il conducente che intende sorpassare deve preventivamente accertarsi di poter effettuare la manovra senza creare pericolo o intralcio: la responsabilità della sicurezza dell\u2019intera manovra ricade su chi sorpassa.',
    articolo_cds: 'Art. 148 co. 2 CdS',
    livello_difficolta: 2,
    tag: ['preparazione', 'responsabilita', 'visibilita'],
  },
  {
    codice: 'ARG11-C003',
    argomento_numero: 11,
    titolo: 'Segnalazione della manovra',
    descrizione:
      'L\u2019inizio e la fine del sorpasso devono essere segnalati con l\u2019indicatore di direzione: sinistro all\u2019inizio dello spostamento, destro prima del rientro. Di notte, fuori dai centri abitati, è consentito usare brevi lampeggi per avvisare chi precede.',
    regola_testo:
      'Chi sorpassa ha l\u2019obbligo di azionare l\u2019indicatore di direzione sinistro prima di spostarsi e l\u2019indicatore destro prima di rientrare nella corsia di marcia; la segnalazione deve essere tempestiva rispetto all\u2019inizio e al termine della manovra.',
    articolo_cds: 'Art. 148 co. 3 CdS',
    livello_difficolta: 2,
    tag: ['indicatori-direzione', 'segnalazione'],
  },
  {
    codice: 'ARG11-C004',
    argomento_numero: 11,
    titolo: 'Distanza laterale di sicurezza',
    descrizione:
      'Durante l\u2019affiancamento il sorpassante deve mantenere una distanza laterale adeguata rispetto al veicolo sorpassato, tale da non urtarlo in caso di sbandamento o manovra improvvisa. La distanza dipende dalla velocità, dalle dimensioni dei veicoli e dalle condizioni della strada.',
    regola_testo:
      'Il conducente che sorpassa deve tenersi a una distanza laterale adeguata dal veicolo o dall\u2019utente sorpassato, proporzionata alla velocità della manovra e al tipo di mezzi coinvolti.',
    articolo_cds: 'Art. 148 co. 4 CdS',
    livello_difficolta: 3,
    tag: ['distanza-laterale', 'affiancamento'],
  },
  {
    codice: 'ARG11-C005',
    argomento_numero: 11,
    titolo: 'Sorpasso di ciclisti: 1,5 m minimo',
    descrizione:
      'Per il sorpasso di velocipedi e ciclomotori il conducente deve mantenere una distanza laterale di almeno 1,5 m. È una delle principali novità introdotte dalla Legge 25/11/2024 n. 177, in vigore dal 14/12/2024, e si applica su tutte le strade.',
    regola_testo:
      'Nel sorpassare velocipedi, ciclomotori o veicoli analoghi il conducente è tenuto a mantenere una distanza laterale non inferiore a 1,5 metri; se lo spazio disponibile non lo consente, il sorpasso va rinviato fino a quando le condizioni non lo permettono.',
    articolo_cds: 'Art. 148 co. 9-bis CdS (L. 177/2024)',
    livello_difficolta: 3,
    tag: ['ciclisti', 'distanza-1-5m', 'utenti-vulnerabili', 'L177-2024'],
  },
  {
    codice: 'ARG11-C006',
    argomento_numero: 11,
    titolo: 'Divieto di ostacolare chi viene sorpassato',
    descrizione:
      'Chi è sorpassato ha l\u2019obbligo di agevolare la manovra: non deve aumentare la velocità, non deve ostacolare il rientro del sorpassante e deve mantenersi il più possibile vicino al margine destro della carreggiata.',
    regola_testo:
      'Il conducente sorpassato deve agevolare la manovra di chi sta sorpassando: non aumentare la velocità, non stringersi verso il centro della carreggiata e tenersi a destra; se sopraggiungono veicoli in senso opposto è tenuto a rallentare per rendere più rapido il rientro.',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 3,
    tag: ['sorpassato', 'collaborazione', 'rientro'],
  },
  {
    codice: 'ARG11-C007',
    argomento_numero: 11,
    titolo: 'Divieto di sorpasso per scarsa visibilità',
    descrizione:
      'Il sorpasso è vietato nei tratti in cui la visibilità è ridotta o insufficiente: dossi, curve, gallerie prive di illuminazione, tratti in discesa con carreggiate strette. In queste situazioni il superamento è consentito solo se la strada è a senso unico o se esistono più corsie per senso di marcia separate.',
    regola_testo:
      'È vietato il sorpasso in prossimità o in corrispondenza di curve, dossi e di ogni altro tratto di strada con visibilità limitata, salvo che la strada abbia due o più corsie per senso di marcia delimitate da apposita segnaletica.',
    articolo_cds: 'Art. 148 co. 7 CdS',
    livello_difficolta: 3,
    tag: ['divieto', 'visibilita', 'dossi', 'curve'],
  },
  {
    codice: 'ARG11-C008',
    argomento_numero: 11,
    titolo: 'Divieto di sorpasso agli attraversamenti pedonali',
    descrizione:
      'Il sorpasso è vietato in corrispondenza o in prossimità degli attraversamenti pedonali. Il divieto vale anche quando le strisce non sono in uso, per tutelare la piena visibilità verso gli utenti vulnerabili che potrebbero impegnare la carreggiata.',
    regola_testo:
      'Il conducente non può sorpassare in corrispondenza o in prossimità degli attraversamenti pedonali, né in corrispondenza degli incroci, salvo nei casi espressamente previsti dal Codice.',
    articolo_cds: 'Art. 148 co. 8 CdS',
    livello_difficolta: 2,
    tag: ['divieto', 'pedoni', 'attraversamenti'],
  },
  {
    codice: 'ARG11-C009',
    argomento_numero: 11,
    titolo: 'Divieto di sorpasso a passaggi a livello e incroci',
    descrizione:
      'È vietato il sorpasso in prossimità o in corrispondenza degli incroci, dei passaggi a livello non custoditi e dei passaggi a livello chiusi o in fase di chiusura. Negli incroci con diritto di precedenza chiaramente segnalato il divieto può decadere.',
    regola_testo:
      'Il sorpasso è vietato in corrispondenza o prossimità degli incroci e dei passaggi a livello privi di barriere; è ammesso solo agli incroci dove il diritto di precedenza è regolato da segnalazione verticale o da agente del traffico e la visibilità è piena.',
    articolo_cds: 'Art. 148 co. 8 CdS',
    livello_difficolta: 3,
    tag: ['divieto', 'incroci', 'passaggi-livello'],
  },
  {
    codice: 'ARG11-C010',
    argomento_numero: 11,
    titolo: 'Sorpasso in colonna e veicoli fermi ad attraversamento',
    descrizione:
      'Non si può sorpassare una colonna di veicoli fermi o rallentati per dare precedenza ai pedoni: il conducente di ogni veicolo in colonna deve mantenere la propria posizione. Sorpassare in queste situazioni crea rischio d\u2019investimento per chi attraversa coperto dalla visuale.',
    regola_testo:
      'Quando un veicolo è fermo o rallentato per consentire l\u2019attraversamento dei pedoni, i conducenti dei veicoli che seguono o che si affiancano non possono effettuare sorpasso né superarlo.',
    articolo_cds: 'Art. 191 co. 2 CdS',
    livello_difficolta: 4,
    tag: ['divieto', 'colonna', 'pedoni', 'rischio-investimento'],
  },
  {
    codice: 'ARG11-C011',
    argomento_numero: 11,
    titolo: 'Sorpasso a destra: casi consentiti',
    descrizione:
      'Il sorpasso a destra è ammesso solo in casi tassativi: quando il conducente che precede ha segnalato l\u2019intenzione di svoltare a sinistra e si è portato sulla mezzeria, nei tram su rotaie centrali, sulle strade a più corsie per senso di marcia in condizioni di traffico intenso e rallentato.',
    regola_testo:
      'Il sorpasso si effettua sulla sinistra; è consentito sulla destra solo quando il conducente che precede abbia chiaramente indicato di volere svoltare a sinistra e si sia portato verso l\u2019asse della carreggiata, nei confronti dei tram su sede propria, e sulle carreggiate a più corsie in caso di rallentamento progressivo.',
    articolo_cds: 'Art. 148 co. 5-6 CdS',
    livello_difficolta: 4,
    tag: ['sorpasso-destra', 'eccezioni', 'tram'],
  },
] as const
