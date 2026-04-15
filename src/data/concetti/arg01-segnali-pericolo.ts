import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 39, 40 + Reg. CdS artt. 85-104.
// 15 concetti atomici per l'argomento 1 — Segnali di pericolo.
//
// Nota normativa: la riforma L. 177/2024 non ha modificato la disciplina
// dei segnali verticali di pericolo. I riferimenti restano agli artt. 39-40
// CdS e agli artt. 85 ss. del Regolamento di esecuzione (DPR 495/1992).

export const ARG01_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG01-C001',
    argomento_numero: 1,
    titolo: 'Forma e colori dei segnali di pericolo',
    descrizione:
      'Il segnale di pericolo ha forma triangolare con il vertice rivolto verso l\u2019alto, sfondo bianco, bordo rosso e simbolo nero: va riconosciuto a colpo d\u2019occhio prima ancora di leggerne il simbolo.',
    regola_testo:
      'I segnali di pericolo sono a forma di triangolo equilatero con vertice verso l\u2019alto, sfondo bianco bordato di rosso e simbolo nero; fanno eccezione per orientamento alcuni segnali specifici come il "dare precedenza".',
    articolo_cds: 'Art. 39 CdS; art. 85 Reg. CdS',
    livello_difficolta: 1,
    tag: ['forma', 'colore', 'riconoscimento'],
  },
  {
    codice: 'ARG01-C002',
    argomento_numero: 1,
    titolo: 'Funzione di preavviso del pericolo',
    descrizione:
      'Il segnale di pericolo non vieta e non obbliga: avverte il conducente che entro pochi metri dovrà affrontare una situazione che richiede maggiore attenzione e, se necessario, la riduzione della velocità.',
    regola_testo:
      'Il segnale di pericolo preavvisa l\u2019esistenza di un pericolo imponendo al conducente di adottare le cautele del caso, in particolare moderando la velocità e aumentando l\u2019attenzione.',
    articolo_cds: 'Art. 39 c.1 CdS',
    livello_difficolta: 2,
    tag: ['funzione', 'prudenza'],
  },
  {
    codice: 'ARG01-C003',
    argomento_numero: 1,
    titolo: 'Distanza di posa fuori dai centri abitati',
    descrizione:
      'Fuori dai centri abitati il segnale di pericolo va posto abbastanza lontano dal punto pericoloso da dare al conducente il tempo di rallentare e manovrare con sicurezza.',
    regola_testo:
      'Sulle strade extraurbane il segnale di pericolo è posto di norma a circa 150 metri prima del punto pericoloso; se la distanza è sensibilmente diversa, deve essere indicata da un pannello integrativo di distanza.',
    articolo_cds: 'Art. 39 c.2 CdS; art. 85 Reg. CdS',
    livello_difficolta: 3,
    tag: ['distanza', 'pannello-integrativo', 'P07'],
  },
  {
    codice: 'ARG01-C004',
    argomento_numero: 1,
    titolo: 'Strade con curve e curva pericolosa',
    descrizione:
      'Il segnale preavvisa una curva o una serie di curve in cui la visibilità è ridotta o il raggio è stretto: impone di ridurre la velocità e di non sorpassare se la visibilità non è piena.',
    regola_testo:
      'I segnali "curva a destra", "curva a sinistra", "doppia curva" avvertono di un tratto con curve pericolose in cui il conducente deve moderare la velocità, tenersi sulla propria destra ed evitare sorpassi azzardati.',
    articolo_cds: 'Art. 39 CdS; art. 86 Reg. CdS',
    livello_difficolta: 2,
    tag: ['curva', 'velocita'],
  },
  {
    codice: 'ARG01-C005',
    argomento_numero: 1,
    titolo: 'Strada deformata, dosso e cunetta',
    descrizione:
      'I segnali di strada deformata, dosso e cunetta indicano irregolarità del piano stradale che possono provocare perdita di aderenza o sobbalzi: richiedono velocità moderata per tutelare il veicolo e i passeggeri.',
    regola_testo:
      'Nei tratti con strada deformata, dosso o cunetta il conducente deve ridurre la velocità perché l\u2019irregolarità del fondo può compromettere la stabilità del veicolo e il controllo della sterzata.',
    articolo_cds: 'Art. 39 CdS; art. 87 Reg. CdS',
    livello_difficolta: 2,
    tag: ['fondo-stradale', 'velocita'],
  },
  {
    codice: 'ARG01-C006',
    argomento_numero: 1,
    titolo: 'Strada sdrucciolevole',
    descrizione:
      'Il segnale di strada sdrucciolevole avverte che il fondo, in determinate condizioni come la pioggia o il ghiaccio, offre poca aderenza e allunga lo spazio di frenata.',
    regola_testo:
      'Il segnale di strada sdrucciolevole impone di moderare la velocità, aumentare la distanza di sicurezza ed evitare brusche frenate o sterzate perché il fondo può risultare scivoloso anche con tempo asciutto.',
    articolo_cds: 'Art. 39 CdS; art. 88 Reg. CdS',
    livello_difficolta: 2,
    tag: ['aderenza', 'frenata', 'P17'],
  },
  {
    codice: 'ARG01-C007',
    argomento_numero: 1,
    titolo: 'Discesa e salita ripide',
    descrizione:
      'I segnali di discesa ripida e salita ripida indicano tratti con forte pendenza: la percentuale sulla figura rappresenta il dislivello in metri ogni 100 metri di strada percorsi.',
    regola_testo:
      'Nei tratti in discesa ripida il conducente deve usare il freno motore per non surriscaldare i freni; in salita ripida deve inserire per tempo una marcia adeguata ed evitare arresti non necessari che rendono difficile la ripartenza.',
    articolo_cds: 'Art. 39 CdS; art. 89 Reg. CdS',
    livello_difficolta: 3,
    tag: ['pendenza', 'freno-motore'],
  },
  {
    codice: 'ARG01-C008',
    argomento_numero: 1,
    titolo: 'Carreggiata che si restringe',
    descrizione:
      'I segnali di strettoia simmetrica o asimmetrica preavvisano che la carreggiata si riduce: possono accompagnarsi a regole di precedenza fra sensi opposti di marcia.',
    regola_testo:
      'Davanti a una strettoia il conducente deve moderare la velocità, tenersi il più possibile a destra e, se la visibilità è ridotta, essere pronto a cedere il passo al veicolo che proviene dall\u2019altro senso.',
    articolo_cds: 'Art. 39 CdS; art. 90 Reg. CdS',
    livello_difficolta: 3,
    tag: ['strettoia', 'precedenza'],
  },
  {
    codice: 'ARG01-C009',
    argomento_numero: 1,
    titolo: 'Ponte mobile, banchina pericolosa e sbocco su molo',
    descrizione:
      'Sono segnali di pericolo poco frequenti ma importanti: avvertono rispettivamente di un ponte che può aprirsi al transito, di una banchina senza protezione laterale verso l\u2019acqua e di un tratto che termina su una riva.',
    regola_testo:
      'In presenza dei segnali "ponte mobile", "banchina pericolosa" o "sbocco su molo o argine" il conducente deve moderare la velocità e tenersi lontano dal ciglio stradale, pronto a fermarsi se necessario.',
    articolo_cds: 'Art. 39 CdS; art. 91 Reg. CdS',
    livello_difficolta: 4,
    tag: ['segnali-rari'],
  },
  {
    codice: 'ARG01-C010',
    argomento_numero: 1,
    titolo: 'Attraversamento pedonale e bambini',
    descrizione:
      'I segnali di attraversamento pedonale e di attraversamento di bambini preavvisano la probabile presenza di utenti deboli sulla strada: impongono velocità adeguata e massima prontezza di frenata.',
    regola_testo:
      'In presenza dei segnali che preavvisano un attraversamento pedonale o la vicinanza di una scuola, il conducente deve moderare sensibilmente la velocità, essere pronto ad arrestarsi e dare precedenza ai pedoni che attraversano o stanno per attraversare.',
    articolo_cds: 'Art. 39 CdS; artt. 92, 93 Reg. CdS',
    livello_difficolta: 2,
    tag: ['pedoni', 'utenti-deboli', 'P01'],
  },
  {
    codice: 'ARG01-C011',
    argomento_numero: 1,
    titolo: 'Animali domestici e selvatici',
    descrizione:
      'Esistono due segnali distinti — "attraversamento di animali domestici" e "animali selvatici vaganti" — entrambi indicanti la possibilità di trovare un animale sulla carreggiata.',
    regola_testo:
      'Davanti a un segnale di attraversamento di animali il conducente deve ridurre la velocità ed essere pronto a frenare, soprattutto nelle ore di scarsa visibilità, poiché l\u2019animale può invadere all\u2019improvviso la sede stradale.',
    articolo_cds: 'Art. 39 CdS; art. 94 Reg. CdS',
    livello_difficolta: 2,
    tag: ['animali', 'visibilita'],
  },
  {
    codice: 'ARG01-C012',
    argomento_numero: 1,
    titolo: 'Passaggio a livello con e senza barriere',
    descrizione:
      'I segnali di passaggio a livello con barriere e senza barriere avvertono dell\u2019incrocio con una linea ferroviaria: la differenza è cruciale perché nel passaggio a livello senza barriere non c\u2019è una protezione meccanica all\u2019arrivo del treno.',
    regola_testo:
      'In prossimità di un passaggio a livello il conducente deve moderare la velocità ed essere pronto a fermarsi; davanti a un passaggio a livello senza barriere va posta attenzione ancora maggiore perché l\u2019arresto dipende interamente dalla propria diligenza.',
    articolo_cds: 'Art. 39 CdS; artt. 95, 96 Reg. CdS',
    livello_difficolta: 3,
    tag: ['passaggio-livello', 'ferrovia'],
  },
  {
    codice: 'ARG01-C013',
    argomento_numero: 1,
    titolo: 'Panelli distanziometrici del passaggio a livello',
    descrizione:
      'I pannelli con barre oblique rosse su fondo bianco sono posti in serie prima del passaggio a livello: tre barre, due barre e una barra indicano la progressiva riduzione della distanza al binario.',
    regola_testo:
      'I pannelli distanziometrici integrano il segnale di passaggio a livello e ripetono l\u2019avviso in tre tappe: tre barre alla massima distanza, due barre a metà, una barra in prossimità del binario.',
    articolo_cds: 'Art. 39 CdS; art. 97 Reg. CdS',
    livello_difficolta: 3,
    tag: ['pannelli', 'passaggio-livello'],
  },
  {
    codice: 'ARG01-C014',
    argomento_numero: 1,
    titolo: 'Lavori, materiale instabile e caduta massi',
    descrizione:
      'I segnali di lavori in corso, materiale instabile sulla strada e caduta massi avvertono di un pericolo originato dal fondo stradale o dal versante laterale: gli ostacoli possono essere improvvisi e mutare nel tempo.',
    regola_testo:
      'Davanti ai segnali di lavori, materiale instabile o caduta massi il conducente deve moderare la velocità, mantenere la massima attenzione al fondo e ai lati della strada ed essere pronto a deviare o arrestarsi.',
    articolo_cds: 'Art. 39 CdS; artt. 98-100 Reg. CdS',
    livello_difficolta: 2,
    tag: ['lavori', 'cantiere', 'F02'],
  },
  {
    codice: 'ARG01-C015',
    argomento_numero: 1,
    titolo: 'Vento laterale, aeromobili, doppio senso e altri pericoli',
    descrizione:
      'Fanno parte dei segnali di pericolo anche "vento laterale", "aeromobili a bassa quota", "doppio senso di circolazione" e il generico "altri pericoli": ciascuno richiede una risposta di guida specifica.',
    regola_testo:
      'Quando si trova davanti a segnali come vento laterale, doppio senso di circolazione o "altri pericoli", il conducente deve adattare la guida alla causa segnalata, ad esempio tenendosi più a destra in caso di vento o attendendosi veicoli in senso opposto nel doppio senso.',
    articolo_cds: 'Art. 39 CdS; artt. 101-104 Reg. CdS',
    livello_difficolta: 3,
    tag: ['vento', 'doppio-senso', 'altri-pericoli'],
  },
] as const
