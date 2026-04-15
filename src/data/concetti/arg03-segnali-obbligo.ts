import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 39, 40 lett. b) + Reg. CdS artt. 122-123 e
// 135-137 (segnali di obbligo).
// 10 concetti atomici per l'argomento 3 — Segnali di obbligo.
//
// Nota normativa: la L. 177/2024 non ha modificato la forma dei segnali di
// obbligo. La prescrizione rimane in vigore anche quando la circolazione è
// scarsa: l'obbligo non dipende dalla presenza di altri utenti.

export const ARG03_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG03-C001',
    argomento_numero: 3,
    titolo: 'Forma e colori dei segnali di obbligo',
    descrizione:
      'Il segnale di obbligo ha forma circolare, sfondo blu e simbolo bianco: impone al conducente un comportamento attivo (seguire una direzione, transitare in una corsia, rispettare una velocità minima).',
    regola_testo:
      'I segnali di obbligo sono a forma circolare con sfondo blu e simbolo bianco; indicano un\u2019azione che il conducente deve eseguire e perdono efficacia al segnale di fine obbligo o al primo incrocio successivo.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS',
    livello_difficolta: 1,
    tag: ['forma', 'colore'],
  },
  {
    codice: 'ARG03-C002',
    argomento_numero: 3,
    titolo: 'Direzione obbligatoria con freccia',
    descrizione:
      'I segnali con una freccia bianca dritta, a sinistra o a destra impongono di proseguire esclusivamente nella direzione indicata: sono tipici degli incroci e delle rotatorie.',
    regola_testo:
      'Il segnale di direzione obbligatoria impone al conducente di seguire la direzione indicata dalla freccia e vieta qualunque altra direzione, compresa la svolta a U in senso opposto.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS',
    livello_difficolta: 2,
    tag: ['direzione-obbligatoria'],
  },
  {
    codice: 'ARG03-C003',
    argomento_numero: 3,
    titolo: 'Direzioni consentite (doppia freccia)',
    descrizione:
      'Quando su un unico segnale compaiono più frecce bianche, il conducente può scegliere una qualsiasi delle direzioni indicate: si chiamano "direzioni consentite".',
    regola_testo:
      'Il segnale di direzioni consentite permette al conducente di scegliere una delle direzioni rappresentate dalle frecce, con esclusione di ogni altra direzione non indicata.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS',
    livello_difficolta: 2,
    tag: ['direzione-obbligatoria', 'P04'],
  },
  {
    codice: 'ARG03-C004',
    argomento_numero: 3,
    titolo: 'Preavviso di direzione obbligatoria',
    descrizione:
      'Il preavviso di direzione obbligatoria è un segnale posto prima dell\u2019incrocio che anticipa quale sarà la direzione imposta: serve a far preparare per tempo la manovra corretta.',
    regola_testo:
      'Il preavviso di direzione obbligatoria avverte il conducente che al successivo incrocio vigerà una direzione obbligatoria: deve dunque inserirsi per tempo nella corsia corretta e rallentare se necessario.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS',
    livello_difficolta: 3,
    tag: ['preavviso'],
  },
  {
    codice: 'ARG03-C005',
    argomento_numero: 3,
    titolo: 'Passaggio obbligatorio per veicoli operativi',
    descrizione:
      'Il segnale con pannello rettangolare blu e freccia bianca indica da quale lato i veicoli devono obbligatoriamente passare rispetto a un ostacolo o a un\u2019isola di traffico.',
    regola_testo:
      'Il segnale di passaggio obbligatorio impone di superare l\u2019ostacolo indicato tenendosi sul lato segnalato dalla freccia; è obbligatorio anche quando il passaggio dall\u2019altro lato sarebbe fisicamente possibile.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS',
    livello_difficolta: 3,
    tag: ['ostacoli', 'P01'],
  },
  {
    codice: 'ARG03-C006',
    argomento_numero: 3,
    titolo: 'Rotatoria — senso obbligato',
    descrizione:
      'Il segnale di rotatoria (tre frecce bianche a formare un cerchio su sfondo blu) impone di percorrere la rotatoria nel senso antiorario indicato dalle frecce.',
    regola_testo:
      'In presenza del segnale di rotatoria i conducenti devono percorrere l\u2019anello circolare nel senso indicato dalle frecce e dare la precedenza ai veicoli già impegnati nella rotatoria, salvo diversa indicazione.',
    articolo_cds: 'Art. 145 CdS; art. 122 Reg. CdS',
    livello_difficolta: 2,
    tag: ['rotatoria', 'precedenza'],
  },
  {
    codice: 'ARG03-C007',
    argomento_numero: 3,
    titolo: 'Piste e corsie riservate',
    descrizione:
      'I segnali di pista ciclabile, percorso pedonale, pista per cavalli e corsia riservata a una determinata categoria impongono l\u2019uso esclusivo di quel tracciato alle rispettive categorie di utenti.',
    regola_testo:
      'I segnali di pista o percorso obbligatorio impongono alla categoria indicata di usare quel tracciato e vietano alle altre categorie di impegnarlo, salvo esigenze di servizio o di attraversamento trasversale.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS',
    livello_difficolta: 3,
    tag: ['piste-riservate', 'P01'],
  },
  {
    codice: 'ARG03-C008',
    argomento_numero: 3,
    titolo: 'Catene da neve a bordo e gomme invernali',
    descrizione:
      'Il segnale con il pneumatico o le catene sopra il simbolo della ruota obbliga a montare catene o pneumatici termici conformi su tutte le ruote motrici: si trova tipicamente nelle strade di montagna durante il periodo invernale.',
    regola_testo:
      'Dove è posto il segnale di obbligo catene o pneumatici invernali, il veicolo deve essere dotato di tale equipaggiamento e montarlo sulle ruote motrici; l\u2019obbligo vale solo nel tratto indicato dal segnale.',
    articolo_cds: 'Art. 39 CdS; art. 122 Reg. CdS; art. 6 c.4 CdS',
    livello_difficolta: 3,
    tag: ['catene', 'neve'],
  },
  {
    codice: 'ARG03-C009',
    argomento_numero: 3,
    titolo: 'Limite minimo di velocità obbligatorio',
    descrizione:
      'Il segnale di velocità minima obbligatoria (cerchio blu con cifra bianca) impone di circolare a una velocità non inferiore a quella indicata, sempre nel rispetto delle condizioni di traffico.',
    regola_testo:
      'Il segnale di velocità minima obbligatoria impone di non scendere sotto la velocità indicata, se la sicurezza e le condizioni di traffico lo consentono: trova applicazione tipica in galleria e in autostrada.',
    articolo_cds: 'Art. 142 CdS; art. 122 Reg. CdS',
    livello_difficolta: 4,
    tag: ['velocita-minima', 'P03', 'P07'],
  },
  {
    codice: 'ARG03-C010',
    argomento_numero: 3,
    titolo: 'Alt-stop e dare precedenza: obblighi assoluti',
    descrizione:
      'I segnali "fermarsi e dare precedenza" (stop) e "dare precedenza" sono graficamente segnali di precedenza ma producono un obbligo attivo: arrestarsi e/o cedere il passo all\u2019incrocio.',
    regola_testo:
      'Il segnale di stop impone al conducente di arrestarsi completamente al limite dell\u2019intersezione e di dare precedenza ai veicoli sopraggiungenti da entrambi i sensi, ripartendo solo quando la manovra è sicura; il segnale "dare precedenza" impone di rallentare e cedere il passo senza obbligo di arresto.',
    articolo_cds: 'Art. 42 CdS; art. 106 Reg. CdS',
    livello_difficolta: 2,
    tag: ['stop', 'precedenza', 'P06'],
  },
] as const
