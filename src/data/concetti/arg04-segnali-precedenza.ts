import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 42 + Reg. CdS artt. 106-115.
// 9 concetti atomici per l'argomento 4 — Segnali di precedenza.
//
// Nota normativa: la L. 177/2024 non ha modificato la disciplina dei segnali
// di precedenza. I pattern a rischio indicati in docs/research/03 § 5 sono
// P03, P05, P06, P13.

export const ARG04_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG04-C001',
    argomento_numero: 4,
    titolo: 'Funzione generale dei segnali di precedenza',
    descrizione:
      'I segnali di precedenza regolano il diritto di passaggio fra veicoli che si trovano su strade che si incrociano, rompendo la simmetria fra i due flussi.',
    regola_testo:
      'I segnali di precedenza stabiliscono quale fra i conducenti che confluiscono in un incrocio ha diritto di passare per primo e quale invece deve cedere il passo; in assenza di segnali vale la regola generale della precedenza a destra.',
    articolo_cds: 'Art. 42 CdS',
    livello_difficolta: 2,
    tag: ['precedenza', 'P06'],
  },
  {
    codice: 'ARG04-C002',
    argomento_numero: 4,
    titolo: 'Segnale "dare precedenza"',
    descrizione:
      'Il segnale "dare precedenza" è un triangolo con il vertice in basso, sfondo bianco e bordo rosso: impone di cedere il passo ma non impone l\u2019arresto se la visibilità è sufficiente.',
    regola_testo:
      'Davanti al segnale "dare precedenza" il conducente deve rallentare, essere pronto a fermarsi e cedere il passo ai veicoli che provengono da destra e da sinistra; può proseguire senza fermarsi solo se la manovra è sicura.',
    articolo_cds: 'Art. 42 c.3 CdS; art. 107 Reg. CdS',
    livello_difficolta: 2,
    tag: ['dare-precedenza', 'P06'],
  },
  {
    codice: 'ARG04-C003',
    argomento_numero: 4,
    titolo: 'Segnale "fermarsi e dare precedenza" (stop)',
    descrizione:
      'Il segnale di stop è un ottagono rosso con scritta bianca: impone l\u2019arresto completo del veicolo al limite dell\u2019intersezione, anche se non arriva nessuno dagli altri rami.',
    regola_testo:
      'Al segnale di stop il conducente deve arrestarsi completamente al margine dell\u2019intersezione e ripartire solo dopo essersi accertato di poter impegnare l\u2019incrocio senza creare intralcio o pericolo; l\u2019arresto è obbligatorio anche in assenza di traffico.',
    articolo_cds: 'Art. 42 c.4 CdS; art. 106 Reg. CdS',
    livello_difficolta: 2,
    tag: ['stop', 'P01', 'P04'],
  },
  {
    codice: 'ARG04-C004',
    argomento_numero: 4,
    titolo: 'Intersezione con diritto di precedenza',
    descrizione:
      'Il segnale triangolare con simbolo di incrocio nero (o con freccia che evidenzia la strada prioritaria) avvisa che si sta per attraversare un incrocio su cui si ha diritto di precedenza.',
    regola_testo:
      'Il segnale di intersezione con diritto di precedenza avverte il conducente che ha la precedenza sui veicoli provenienti dalle strade laterali; resta comunque obbligato a moderare la velocità e a verificare che le altre corsie cedano effettivamente il passo.',
    articolo_cds: 'Art. 42 CdS; art. 108 Reg. CdS',
    livello_difficolta: 3,
    tag: ['intersezione', 'P06'],
  },
  {
    codice: 'ARG04-C005',
    argomento_numero: 4,
    titolo: 'Strada con diritto di precedenza',
    descrizione:
      'Il segnale quadrato giallo bordato di nero disposto con vertice in alto indica che la strada su cui si viaggia gode del diritto di precedenza: il diritto vale per tutti gli incroci successivi fino al segnale di fine.',
    regola_testo:
      'Il segnale di strada con diritto di precedenza attribuisce al conducente la precedenza su tutti i veicoli che provengono dalle strade laterali, fino a quando non si incontra il segnale di fine del diritto di precedenza o un\u2019indicazione contraria.',
    articolo_cds: 'Art. 42 CdS; art. 109 Reg. CdS',
    livello_difficolta: 3,
    tag: ['strada-prioritaria'],
  },
  {
    codice: 'ARG04-C006',
    argomento_numero: 4,
    titolo: 'Fine del diritto di precedenza',
    descrizione:
      'Il segnale quadrato giallo con barra obliqua nera segnala la cessazione della strada con diritto di precedenza: da quel punto il conducente torna alle regole ordinarie (precedenza a destra o segnali specifici).',
    regola_testo:
      'Quando incontra il segnale di fine del diritto di precedenza, il conducente perde la prerogativa della strada prioritaria e deve applicare le regole generali di precedenza o quelle indicate dai successivi segnali.',
    articolo_cds: 'Art. 42 CdS; art. 110 Reg. CdS',
    livello_difficolta: 3,
    tag: ['fine-precedenza'],
  },
  {
    codice: 'ARG04-C007',
    argomento_numero: 4,
    titolo: 'Precedenza nei sensi unici alternati',
    descrizione:
      'In un tratto stretto in cui non possono transitare due veicoli affiancati, due segnali opposti indicano chi ha la precedenza: il segnale a frecce rossa/nera impone di cedere il passo al veicolo che proviene dall\u2019altro senso.',
    regola_testo:
      'Nei sensi unici alternati il segnale con freccia rossa verso di sé e freccia nera in allontanamento impone di dare la precedenza al veicolo opposto, mentre il segnale simmetrico (freccia nera verso di sé) assegna la precedenza nel proprio senso di marcia.',
    articolo_cds: 'Art. 42 CdS; art. 111 Reg. CdS',
    livello_difficolta: 4,
    tag: ['senso-alternato', 'P05'],
  },
  {
    codice: 'ARG04-C008',
    argomento_numero: 4,
    titolo: 'Preavviso di dare precedenza e di stop',
    descrizione:
      'I segnali di preavviso di "dare precedenza" o di "stop" sono posti a maggior distanza rispetto al punto di applicazione: avvertono il conducente che fra pochi metri dovrà cedere il passo o fermarsi.',
    regola_testo:
      'Il preavviso di dare precedenza o di stop avverte che, prima del successivo incrocio, il conducente incontrerà il segnale vero e proprio: serve a ridurre per tempo la velocità e a organizzare la manovra.',
    articolo_cds: 'Art. 42 CdS; art. 112 Reg. CdS',
    livello_difficolta: 3,
    tag: ['preavviso', 'stop'],
  },
  {
    codice: 'ARG04-C009',
    argomento_numero: 4,
    titolo: 'Rapporto fra segnali e regola della destra',
    descrizione:
      'La precedenza a destra è la regola di default ma cede davanti a un segnale, a un agente del traffico o a un impianto semaforico: solo in assenza di questi elementi regge fra due veicoli che si incontrano in un incrocio.',
    regola_testo:
      'Nell\u2019incrocio senza semafori, senza agenti e senza segnaletica di precedenza, vale la regola della destra: chi si trova alla destra dell\u2019altro ha il diritto di precedenza.',
    articolo_cds: 'Art. 145 CdS',
    livello_difficolta: 3,
    tag: ['precedenza-destra', 'P13', 'P18'],
  },
] as const
