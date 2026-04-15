import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 39, 40 lett. b) + Reg. CdS artt. 116-135.
// 14 concetti atomici per l'argomento 2 — Segnali di divieto.
//
// Nota normativa: la L. 177/2024 non ha modificato la forma dei segnali di
// divieto. Dove il divieto riguarda velocità o sosta, i quiz devono seguire i
// valori e la terminologia CdS vigenti post 14/12/2024.

export const ARG02_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG02-C001',
    argomento_numero: 2,
    titolo: 'Forma e colori dei segnali di divieto',
    descrizione:
      'I segnali di divieto hanno forma circolare con bordo rosso e sfondo bianco: vietano al conducente un comportamento o l\u2019accesso a una determinata categoria di veicoli.',
    regola_testo:
      'I segnali di divieto sono di forma circolare, con bordo rosso e sfondo bianco (o sfondo blu per i divieti di sosta e fermata); indicano il termine di un divieto quando lo stesso simbolo compare sbarrato o in forma attenuata.',
    articolo_cds: 'Art. 39 CdS; art. 116 Reg. CdS',
    livello_difficolta: 1,
    tag: ['forma', 'colore'],
  },
  {
    codice: 'ARG02-C002',
    argomento_numero: 2,
    titolo: 'Ambito spaziale del divieto',
    descrizione:
      'Il segnale di divieto produce effetto dal punto in cui è posto fino al primo incrocio successivo o fino al segnale di fine, salvo diversa indicazione di un pannello integrativo.',
    regola_testo:
      'Un segnale di divieto vale dal punto di installazione fino alla successiva intersezione, oppure fino al segnale di fine divieto; un pannello integrativo di estesa o di zona può estenderne l\u2019efficacia su un tratto più lungo.',
    articolo_cds: 'Art. 39 CdS; art. 104 Reg. CdS',
    livello_difficolta: 3,
    tag: ['efficacia', 'pannello-integrativo', 'P11'],
  },
  {
    codice: 'ARG02-C003',
    argomento_numero: 2,
    titolo: 'Divieto di transito e senso vietato',
    descrizione:
      'Il divieto di transito (cerchio rosso vuoto su sfondo bianco) vieta a tutti i veicoli di transitare nei due sensi; il senso vietato (cerchio rosso con barra orizzontale bianca) vieta il transito solo nel verso di marcia in cui si incontra il segnale.',
    regola_testo:
      'Il divieto di transito impedisce l\u2019accesso a tutti i veicoli in entrambi i sensi di marcia, mentre il senso vietato (divieto di accesso) vieta soltanto di percorrere la strada nel verso in cui il segnale è visibile e si accompagna, dall\u2019altro lato, a un segnale di senso unico.',
    articolo_cds: 'Art. 39 CdS; art. 117 Reg. CdS',
    livello_difficolta: 2,
    tag: ['transito', 'senso-unico', 'P03'],
  },
  {
    codice: 'ARG02-C004',
    argomento_numero: 2,
    titolo: 'Divieti di transito a categorie specifiche',
    descrizione:
      'Alcuni segnali vietano il transito solo a determinate categorie (autoveicoli, motocicli, velocipedi, pedoni, mezzi pesanti), rappresentate con la silhouette corrispondente dentro il cerchio.',
    regola_testo:
      'Il divieto di transito a una determinata categoria riguarda solo i veicoli raffigurati nel simbolo: gli altri veicoli possono continuare a circolare, sempre nel rispetto delle regole ordinarie.',
    articolo_cds: 'Art. 39 CdS; art. 118 Reg. CdS',
    livello_difficolta: 2,
    tag: ['categoria-veicoli'],
  },
  {
    codice: 'ARG02-C005',
    argomento_numero: 2,
    titolo: 'Limite massimo di velocità',
    descrizione:
      'Il segnale "limite massimo di velocità" impone di non superare il valore indicato in km/h fino al segnale di fine o al primo incrocio utile, tenendo conto delle condizioni della strada.',
    regola_testo:
      'Il limite massimo di velocità segnalato vieta di superare il valore indicato; resta ferma l\u2019obbligo generale di adeguare la velocità alle condizioni di strada, traffico e visibilità, anche se il limite consentirebbe una velocità superiore.',
    articolo_cds: 'Art. 142 CdS; art. 119 Reg. CdS',
    livello_difficolta: 2,
    tag: ['velocita', 'P07', 'P10'],
  },
  {
    codice: 'ARG02-C006',
    argomento_numero: 2,
    titolo: 'Distanziamento minimo e limite di massa',
    descrizione:
      'Alcuni divieti agiscono su parametri dinamici o statici del veicolo: distanziamento minimo fra veicoli, massa complessiva a pieno carico, massa per asse, larghezza, altezza e lunghezza.',
    regola_testo:
      'Questi segnali vietano la circolazione ai veicoli la cui caratteristica (distanza dal veicolo che precede, massa, larghezza, altezza, lunghezza) supera il valore indicato sul cartello.',
    articolo_cds: 'Art. 39 CdS; artt. 120-125 Reg. CdS',
    livello_difficolta: 4,
    tag: ['massa', 'sagoma', 'distanziamento'],
  },
  {
    codice: 'ARG02-C007',
    argomento_numero: 2,
    titolo: 'Divieto di sorpasso',
    descrizione:
      'Il segnale di divieto di sorpasso vieta di sorpassare qualsiasi veicolo a motore a due o più ruote, ma non i veicoli a trazione animale, i velocipedi e i ciclomotori a due ruote che procedono a velocità ridotta.',
    regola_testo:
      'Dove è posto il divieto di sorpasso è vietato sorpassare i veicoli a motore a due o più ruote; il divieto termina al successivo segnale di fine divieto di sorpasso, al primo incrocio o al segnale di inizio del centro abitato, salvo diversa indicazione.',
    articolo_cds: 'Art. 148 CdS; art. 126 Reg. CdS',
    livello_difficolta: 3,
    tag: ['sorpasso', 'P11'],
  },
  {
    codice: 'ARG02-C008',
    argomento_numero: 2,
    titolo: 'Divieto di segnalazioni acustiche',
    descrizione:
      'Il segnale di divieto di segnalazioni acustiche vieta l\u2019uso del clacson e si applica tipicamente nei centri abitati, in prossimità di ospedali e di aree sensibili.',
    regola_testo:
      'Dove è installato il segnale di divieto di segnalazioni acustiche, l\u2019uso del clacson è consentito soltanto in caso di effettivo e immediato pericolo per la sicurezza della circolazione.',
    articolo_cds: 'Art. 156 CdS; art. 127 Reg. CdS',
    livello_difficolta: 3,
    tag: ['clacson', 'P01'],
  },
  {
    codice: 'ARG02-C009',
    argomento_numero: 2,
    titolo: 'Alt-dogana, alt-polizia, alt-stazione',
    descrizione:
      'I segnali "alt" impongono l\u2019arresto assoluto del veicolo per consentire controlli di dogana, di polizia o di stazione di esazione: non si tratta di un semplice invito a rallentare.',
    regola_testo:
      'In presenza di un segnale di alt-polizia, alt-dogana o alt-stazione il conducente deve fermare il veicolo e non può ripartire finché l\u2019agente non dia via libera o finché il segnale automatico non lo consenta.',
    articolo_cds: 'Art. 39 CdS; art. 128 Reg. CdS',
    livello_difficolta: 2,
    tag: ['arresto-obbligatorio'],
  },
  {
    codice: 'ARG02-C010',
    argomento_numero: 2,
    titolo: 'Divieto di sosta e divieto di fermata',
    descrizione:
      'Il divieto di sosta (cerchio rosso-blu con una barra) e il divieto di fermata (cerchio rosso-blu con due barre incrociate) si distinguono nettamente: il secondo è molto più severo perché vieta qualsiasi interruzione della marcia.',
    regola_testo:
      'Il divieto di sosta vieta di lasciare il veicolo in un determinato tratto; il divieto di fermata vieta anche solo di arrestarsi, se non per esigenze di circolazione, di forza maggiore o per ordine degli agenti.',
    articolo_cds: 'Art. 158 CdS; artt. 129, 130 Reg. CdS',
    livello_difficolta: 3,
    tag: ['sosta', 'fermata', 'P13'],
  },
  {
    codice: 'ARG02-C011',
    argomento_numero: 2,
    titolo: 'Sosta consentita a giorni alterni',
    descrizione:
      'Il divieto di sosta può essere limitato a determinati giorni del mese, distinguendo la metà della carreggiata su cui sostare secondo giorni pari e dispari indicati dal segnale.',
    regola_testo:
      'Il segnale di sosta regolamentata a giorni alterni vieta di sostare su un lato della strada nei giorni pari o dispari secondo quanto riportato sul segnale, lasciando sempre almeno una metà della carreggiata disponibile alla sosta.',
    articolo_cds: 'Art. 157 CdS; art. 130 Reg. CdS',
    livello_difficolta: 4,
    tag: ['sosta', 'giorni-alterni'],
  },
  {
    codice: 'ARG02-C012',
    argomento_numero: 2,
    titolo: 'Divieti di svolta e di inversione',
    descrizione:
      'I divieti di svolta a destra, a sinistra e di inversione a U vietano al conducente le relative manovre all\u2019incrocio o nel tratto indicato.',
    regola_testo:
      'Dove è posto il segnale di divieto di svolta o di divieto di inversione a U, il conducente non può compiere la manovra vietata, neppure se la manovra sarebbe utile per cambiare direzione o tornare indietro.',
    articolo_cds: 'Art. 154 CdS; artt. 131, 132 Reg. CdS',
    livello_difficolta: 2,
    tag: ['svolta', 'inversione'],
  },
  {
    codice: 'ARG02-C013',
    argomento_numero: 2,
    titolo: 'Limite minimo di velocità',
    descrizione:
      'Anche se è graficamente simile agli altri divieti, il limite minimo di velocità è una prescrizione diversa: obbliga a non procedere al di sotto della velocità indicata, salvo impedimenti di traffico.',
    regola_testo:
      'Il limite minimo di velocità vieta di circolare a una velocità inferiore al valore indicato, sempre che le condizioni di traffico lo consentano; è tipico delle gallerie, delle rampe autostradali e delle corsie veloci.',
    articolo_cds: 'Art. 142 CdS; art. 124 Reg. CdS',
    livello_difficolta: 4,
    tag: ['velocita-minima', 'P03'],
  },
  {
    codice: 'ARG02-C014',
    argomento_numero: 2,
    titolo: 'Fine dei divieti',
    descrizione:
      'I segnali di fine divieto (cerchio bianco con barra obliqua nera o grigia) revocano una singola prescrizione; il segnale di "via libera" cancella invece tutte le prescrizioni precedenti.',
    regola_testo:
      'Il segnale di fine divieto toglie efficacia al solo divieto richiamato nel simbolo; il segnale di "via libera" annulla contemporaneamente tutti i divieti precedentemente imposti ad eccezione di quelli di carattere generale.',
    articolo_cds: 'Art. 39 CdS; art. 134 Reg. CdS',
    livello_difficolta: 3,
    tag: ['fine-divieto', 'via-libera'],
  },
] as const
