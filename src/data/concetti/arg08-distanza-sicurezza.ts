import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 149 (distanza di sicurezza).
// 8 concetti atomici per l'argomento 8 — Distanza di sicurezza.
//
// NOTA trappole (cfr. docs/research/03 § 5): questo argomento ha la
// massima densità di pattern trappola del programma.
// Dominanti: P07 (numeri quasi-giusti: 0,5 vs 5 s; 10 vs 15 m),
// P08 (scambio unità: metri vs secondi), P09 (permutazione reazione /
// frenata / arresto), P17 (causa-effetto invertita: "frenata dipende
// dai riflessi"), P18 (verità parziale fuori contesto).
//
// Copertura richiesta dal brief:
// (a) definizione, (b) regola dei 2 secondi, (c) formula (v/10)^2,
// (d) fattori che aumentano/diminuiscono, (e) obbligo di mantenere,
// (f) tamponamento = presunzione di colpa, (g) condizioni avverse /
// galleria, (h) scie di frenata come diagnostica.

export const ARG08_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG08-C001',
    argomento_numero: 8,
    titolo: 'Spazio di reazione, frenata, arresto',
    descrizione:
      'Lo spazio di arresto si scompone in due fasi sequenziali: il tratto percorso durante il tempo di reazione e il tratto percorso mentre il veicolo sta effettivamente rallentando.',
    regola_testo:
      'Lo spazio di arresto è la somma dello spazio di reazione (percorso prima che il conducente inizi a frenare) e dello spazio di frenata (percorso dall\u2019inizio della frenata fino all\u2019arresto).',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 3,
    tag: ['formula', 'reazione', 'frenata', 'arresto', 'P09'],
  },
  {
    codice: 'ARG08-C002',
    argomento_numero: 8,
    titolo: 'Regola dei 2 secondi',
    descrizione:
      'Una stima rapida della distanza di sicurezza in strada si fa misurando il tempo, non i metri, rispetto al veicolo che precede.',
    regola_testo:
      'Scegliere un riferimento fisso sulla strada e contare i secondi tra il passaggio del veicolo che precede e il proprio: se sono meno di circa 2 secondi in condizioni normali, la distanza è insufficiente.',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 2,
    tag: ['2-secondi', 'stima', 'P08'],
  },
  {
    codice: 'ARG08-C003',
    argomento_numero: 8,
    titolo: 'Spazio di frenata ~ (v/10)^2',
    descrizione:
      'Una buona approssimazione in metri dello spazio di frenata su asfalto asciutto si ottiene elevando al quadrato un decimo della velocità in km/h.',
    regola_testo:
      'Su asfalto asciutto lo spazio di frenata in metri è circa uguale al quadrato di un decimo della velocità in km/h: a 50 km/h ~25 m, a 100 km/h ~100 m.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 4,
    tag: ['formula', 'quadratica', 'P07', 'P17'],
  },
  {
    codice: 'ARG08-C004',
    argomento_numero: 8,
    titolo: 'Obbligo di mantenere la distanza',
    descrizione:
      'Il CdS impone a chi segue, non a chi precede, di assicurare lo spazio necessario ad arrestarsi tempestivamente.',
    regola_testo:
      'Il conducente deve mantenere rispetto al veicolo che lo precede una distanza di sicurezza tale da garantire, in ogni caso, un tempestivo arresto evitando la collisione.',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 1,
    tag: ['obbligo', 'chi-segue', 'P05'],
  },
  {
    codice: 'ARG08-C005',
    argomento_numero: 8,
    titolo: 'Fattori che aumentano la distanza necessaria',
    descrizione:
      'La distanza di sicurezza corretta dipende da velocità, aderenza, carico, stato psicofisico del conducente e caratteristiche del veicolo.',
    regola_testo:
      'La distanza di sicurezza va aumentata con pioggia, neve, ghiaccio, fondo bagnato, nebbia, buio, pneumatici usurati, carico elevato, stanchezza o traino di rimorchio.',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 3,
    tag: ['fattori', 'aderenza', 'P10'],
  },
  {
    codice: 'ARG08-C006',
    argomento_numero: 8,
    titolo: 'Tempo di reazione e fattori umani',
    descrizione:
      'Il tempo di reazione dipende dallo stato del conducente, non dal veicolo, ed è la prima componente dello spazio di arresto.',
    regola_testo:
      'Il tempo di reazione medio è di circa 1 secondo in condizioni normali e può aumentare significativamente con stanchezza, alcool, droghe, farmaci o distrazione da cellulare.',
    articolo_cds: 'Art. 141 CdS',
    livello_difficolta: 3,
    tag: ['reazione', 'fattori-umani', 'P17'],
  },
  {
    codice: 'ARG08-C007',
    argomento_numero: 8,
    titolo: 'Tamponamento e presunzione di colpa',
    descrizione:
      'In caso di collisione con il veicolo che precede, la responsabilità ricade di norma su chi tampona per mancato rispetto della distanza.',
    regola_testo:
      'Chi tampona il veicolo che lo precede si presume responsabile dell\u2019incidente per non aver rispettato la distanza di sicurezza, salvo prova contraria.',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 2,
    tag: ['tamponamento', 'responsabilita', 'P05'],
  },
  {
    codice: 'ARG08-C008',
    argomento_numero: 8,
    titolo: 'Distanza in galleria e incolonnamenti',
    descrizione:
      'In galleria e nelle code in autostrada esistono riferimenti specifici per mantenere lo spazio minimo in sicurezza.',
    regola_testo:
      'In galleria occorre mantenere una distanza maggiore dal veicolo che precede per consentire la fuga in caso di incidente o incendio, rispettando le distanze minime indicate dalla segnaletica.',
    articolo_cds: 'Art. 149 CdS',
    livello_difficolta: 5,
    tag: ['galleria', 'sicurezza', 'P10'],
  },
] as const
