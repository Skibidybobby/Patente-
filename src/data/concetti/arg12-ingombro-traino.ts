import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 61, 62, 164, 165, 167, 170, 174
// 8 concetti atomici per l'argomento 12 — Ingombro carreggiata, traino,
// trasporto persone.
// Focus: carichi sporgenti, massa complessiva, rimorchio per patente B,
// trasporto di passeggeri su autoveicoli e bicicli/ciclomotori.

export const ARG12_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG12-C001',
    argomento_numero: 12,
    titolo: 'Ingombro e sagoma limite',
    descrizione:
      'Ogni veicolo rispetta dimensioni massime di sagoma: la carrozzeria, il carico e gli eventuali accessori non possono sporgere oltre i limiti di larghezza, lunghezza e altezza previsti dal Codice. Un carico che sporge oltre il profilo del veicolo costituisce ingombro della carreggiata e può provocare pericolo.',
    regola_testo:
      'La sagoma limite dei veicoli e dei loro carichi è fissata dall\u2019art. 61 CdS; è vietato far circolare un veicolo che ecceda, per carico o attrezzature, tali dimensioni senza apposita autorizzazione.',
    articolo_cds: 'Art. 61 CdS',
    livello_difficolta: 1,
    tag: ['sagoma', 'dimensioni', 'ingombro'],
  },
  {
    codice: 'ARG12-C002',
    argomento_numero: 12,
    titolo: 'Massa a vuoto e massa complessiva',
    descrizione:
      'La massa a vuoto è il peso del veicolo senza carico, conducente e passeggeri; la massa complessiva a pieno carico è il valore massimo di massa iscritto sulla carta di circolazione, che comprende il peso del veicolo, dei passeggeri, del carico e del rimorchio eventualmente ammesso. Superare la massa complessiva è vietato.',
    regola_testo:
      'Il conducente non può far circolare il veicolo con una massa complessiva superiore a quella indicata nella carta di circolazione; il sovraccarico compromette frenata, stabilità e tenuta di strada.',
    articolo_cds: 'Art. 62 CdS',
    livello_difficolta: 2,
    tag: ['massa', 'carta-circolazione', 'sovraccarico'],
  },
  {
    codice: 'ARG12-C003',
    argomento_numero: 12,
    titolo: 'Sistemazione e stabilità del carico',
    descrizione:
      'Il carico deve essere sistemato in modo che non sporga lateralmente oltre la sagoma del veicolo, non compromette la visibilità del conducente, non copra luci, targhe o indicatori di direzione, non cada sulla strada e non trascini sul suolo. Il fissaggio deve impedire spostamenti che possano squilibrare il mezzo.',
    regola_testo:
      'Il carico deve essere sistemato, assicurato e disposto in modo da non pregiudicare la stabilità del veicolo, la visibilità del conducente e da non cadere sulla strada; non deve coprire luci, dispositivi di segnalazione e targa.',
    articolo_cds: 'Art. 164 CdS',
    livello_difficolta: 3,
    tag: ['carico', 'sistemazione', 'visibilita', 'stabilita'],
  },
  {
    codice: 'ARG12-C004',
    argomento_numero: 12,
    titolo: 'Carichi sporgenti posteriormente',
    descrizione:
      'Su autoveicoli il carico può sporgere longitudinalmente dalla parte posteriore entro i 3/10 della lunghezza del veicolo. La sporgenza va segnalata con un pannello retrorifrangente quadrato a strisce rosse e bianche; di notte e in caso di scarsa visibilità occorre anche una luce rossa.',
    regola_testo:
      'Per gli autoveicoli la sporgenza massima longitudinale del carico è 3/10 della lunghezza del veicolo; quando eccede la sagoma posteriore deve essere segnalata con apposito pannello retrorifrangente a strisce rosse e bianche, integrato di notte da luce rossa.',
    articolo_cds: 'Art. 164 co. 4 CdS',
    livello_difficolta: 3,
    tag: ['sporgenza', 'pannello', 'segnalazione', '3-decimi'],
  },
  {
    codice: 'ARG12-C005',
    argomento_numero: 12,
    titolo: 'Traino: quando è ammesso',
    descrizione:
      'Il traino di un veicolo in avaria è ammesso solo con fune, barra rigida o rimorchio apposito, con velocità molto ridotta e preferibilmente fino alla prima area attrezzata. In autostrada il traino è consentito solo ai mezzi di soccorso fino al primo svincolo utile. Non si possono trainare più veicoli contemporaneamente.',
    regola_testo:
      'In caso di avaria il traino tra autoveicoli è consentito solo a velocità moderata, per raggiungere il luogo più vicino idoneo alla riparazione; in autostrada il traino è riservato ai mezzi di soccorso autorizzati fino al primo svincolo utile.',
    articolo_cds: 'Art. 165 CdS',
    livello_difficolta: 4,
    tag: ['traino', 'avaria', 'autostrada', 'soccorso'],
  },
  {
    codice: 'ARG12-C006',
    argomento_numero: 12,
    titolo: 'Patente B e massa rimorchiabile',
    descrizione:
      'La patente B consente di guidare autoveicoli con massa complessiva fino a 3.500 kg e di trainare un rimorchio leggero (massa ≤ 750 kg) oppure un rimorchio più pesante purché la somma dei due veicoli non superi 3.500 kg. Per complessi fino a 4.250 kg serve l\u2019estensione B96; oltre è richiesta la patente BE.',
    regola_testo:
      'Con la patente B si guidano autoveicoli fino a 3.500 kg di massa complessiva, con posti a sedere non superiori a 8 oltre al conducente; è ammesso il traino di rimorchio leggero (≤750 kg) o di rimorchio pesante se la massa complessiva del complesso non supera 3.500 kg.',
    articolo_cds: 'Art. 116 CdS',
    livello_difficolta: 3,
    tag: ['patente-B', 'rimorchio', 'B96', 'BE', '3500-kg'],
  },
  {
    codice: 'ARG12-C007',
    argomento_numero: 12,
    titolo: 'Trasporto persone in autovettura',
    descrizione:
      'Le autovetture possono trasportare al massimo il numero di persone indicato sulla carta di circolazione, compreso il conducente. È vietato trasportare passeggeri in numero superiore, sul bagagliaio, sui sedili anteriori in posizione tale da ridurre la libertà di manovra, o in modo da pregiudicare la visibilità e la stabilità del veicolo.',
    regola_testo:
      'Il numero dei passeggeri trasportabili non può eccedere quello indicato sulla carta di circolazione; il trasporto deve avvenire in modo da non compromettere la visibilità del conducente, la libertà dei suoi movimenti e la stabilità del veicolo.',
    articolo_cds: 'Art. 169 CdS',
    livello_difficolta: 2,
    tag: ['trasporto-persone', 'passeggeri', 'carta-circolazione'],
  },
  {
    codice: 'ARG12-C008',
    argomento_numero: 12,
    titolo: 'Trasporto bambini e animali',
    descrizione:
      'I bambini di altezza inferiore a 1,50 m devono viaggiare sempre trattenuti da un sistema di ritenuta omologato e adeguato al loro peso. Gli animali domestici possono essere trasportati purché non costituiscano impedimento per il conducente: più di un animale va custodito in gabbia, nel bagagliaio separato o dietro rete divisoria omologata.',
    regola_testo:
      'Il trasporto di bambini fino a 1,50 m di altezza avviene solo con idoneo sistema di ritenuta omologato; il trasporto di animali domestici è consentito purché non costituisca impedimento o pericolo per la guida, ricorrendo a gabbie, box o divisori per più di un animale.',
    articolo_cds: 'Art. 169 co. 6 CdS',
    livello_difficolta: 3,
    tag: ['bambini', 'animali', 'ritenuta', 'trasporto'],
  },
] as const
