import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 72 (requisiti costruttivi), 78 (modifiche),
// 79 (efficienza), 80 (revisione), 93-94 (immatricolazione), 122 (bollo).
// 13 concetti atomici per l'argomento 25 — Elementi costitutivi del veicolo,
// manutenzione, stabilita\u0300 e tenuta di strada.
//
// Nota didattica (densita\u0300 trappole alta su P17 causa-effetto): lo spazio
// di frenata dipende da meccanica e aderenza, non dai riflessi; la tenuta di
// strada dipende da pneumatici, sospensioni e assetto, non dalla cilindrata.
// Rispettare rigorosamente la causa-effetto negli esempi.

export const ARG25_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG25-C001',
    argomento_numero: 25,
    titolo: 'Motore: principio di funzionamento e segnali di anomalia',
    descrizione:
      'Il motore a combustione interna trasforma l\u2019energia chimica del carburante in energia meccanica attraverso cicli di aspirazione, compressione, combustione e scarico; il funzionamento regolare si riconosce dall\u2019assenza di fumi anomali, di odori sospetti e di rumori irregolari.',
    regola_testo:
      'Fumo bianco denso allo scarico segnala ingresso di liquido di raffreddamento in camera di combustione (guarnizione testa compromessa); fumo azzurro segnala olio che brucia (consumo eccessivo); fumo nero intenso segnala carburazione troppo ricca o filtro aria intasato. Ogni fumo anomalo e la spia rossa del motore accesa impongono diagnosi immediata.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['motore', 'fumi', 'diagnosi', 'F04'],
  },
  {
    codice: 'ARG25-C002',
    argomento_numero: 25,
    titolo: 'Trasmissione e cambio',
    descrizione:
      'La trasmissione porta la coppia dal motore alle ruote motrici e include il cambio di velocita\u0300, che adatta il rapporto fra giri motore e giri ruota; la scelta della marcia giusta e\u0300 fondamentale per coppia, consumi e salute del motore.',
    regola_testo:
      'Il cambio e\u0300 l\u2019organo che permette di variare il rapporto di trasmissione fra il motore e le ruote: marce basse = alta coppia, bassa velocita\u0300; marce alte = minore coppia, piu\u0300 velocita\u0300. Inserire una marcia troppo alta a basso regime provoca "strappi" e danneggia gli organi di trasmissione; usare marce troppo basse a velocita\u0300 elevata porta il motore fuori giri.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['cambio', 'marce', 'rapporto-trasmissione'],
  },
  {
    codice: 'ARG25-C003',
    argomento_numero: 25,
    titolo: 'Frizione: funzione e usura',
    descrizione:
      'La frizione e\u0300 l\u2019organo che stacca temporaneamente il motore dal cambio durante il cambio di marcia e nelle ripartenze; e\u0300 soggetta a usura progressiva, soprattutto se usata male tenendo il piede sul pedale o slittando in partenza.',
    regola_testo:
      'La frizione permette di interrompere e ripristinare gradualmente la trasmissione del moto dal motore al cambio, sia in partenza sia durante il cambio marcia. Lasciare il piede appoggiato sul pedale anche leggermente, far slittare la frizione a lungo per trattenere il veicolo in salita o partire sempre a regime troppo alto sono comportamenti che ne accelerano l\u2019usura e portano al bruciato del disco.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['frizione', 'usura', 'partenza'],
  },
  {
    codice: 'ARG25-C004',
    argomento_numero: 25,
    titolo: 'Impianto frenante e spazio di frenata',
    descrizione:
      'L\u2019impianto frenante converte l\u2019energia cinetica del veicolo in calore attraverso l\u2019attrito fra pastiglie e dischi (o ganasce e tamburi); la sua efficienza dipende dallo stato degli organi meccanici, dal liquido freni e dall\u2019aderenza offerta dal fondo stradale.',
    regola_testo:
      'Lo spazio di frenata cresce con il quadrato della velocita\u0300 e dipende da aderenza pneumatici/fondo, stato di pastiglie e dischi, livello e qualita\u0300 del liquido freni, eventuale presenza di sistemi ABS ed ESP. Non dipende invece dai riflessi del conducente, che influenzano solo lo spazio di reazione: e\u0300 un errore tipico confondere le due componenti.',
    articolo_cds: 'Art. 79 CdS',
    livello_difficolta: 3,
    tag: ['frenata', 'aderenza', 'causa-effetto', 'P17'],
  },
  {
    codice: 'ARG25-C005',
    argomento_numero: 25,
    titolo: 'Sterzo e geometria delle ruote',
    descrizione:
      'Lo sterzo trasmette al pilota il comando di direzione alle ruote anteriori; la sua precisione dipende dalla geometria dell\u2019avantreno (convergenza, campanatura, incidenza), che va periodicamente controllata soprattutto dopo urti a ruote e marciapiedi.',
    regola_testo:
      'Uno sterzo efficiente deve ritornare con naturalezza in posizione rettilinea dopo una curva, non "tirare" da un lato e non presentare gioco eccessivo; un\u2019auto che sterza dolcemente da un lato o che mostra un\u2019usura irregolare dei pneumatici indica una geometria dell\u2019avantreno alterata, da controllare in officina; mai registrare da soli la convergenza.',
    articolo_cds: 'Art. 79 CdS',
    livello_difficolta: 3,
    tag: ['sterzo', 'convergenza', 'assetto'],
  },
  {
    codice: 'ARG25-C006',
    argomento_numero: 25,
    titolo: 'Sospensioni e ammortizzatori',
    descrizione:
      'Le sospensioni mantengono il contatto tra ruota e strada su ogni asperita\u0300 del fondo; gli ammortizzatori smorzano le oscillazioni della molla e impediscono al veicolo di "rimbalzare" dopo ogni sconnessione, contribuendo in modo diretto alla tenuta di strada.',
    regola_testo:
      'Ammortizzatori efficienti riducono lo spazio di frenata, prevengono l\u2019aquaplaning, migliorano la stabilita\u0300 in curva e limitano l\u2019usura degli pneumatici; ammortizzatori usurati si riconoscono da oscillazioni prolungate dopo un dosso, da un beccheggio accentuato in frenata e da usura irregolare del battistrada.',
    articolo_cds: 'Art. 79 CdS',
    livello_difficolta: 3,
    tag: ['sospensioni', 'ammortizzatori', 'tenuta-strada', 'P17'],
  },
  {
    codice: 'ARG25-C007',
    argomento_numero: 25,
    titolo: 'Pneumatici: struttura, pressione, usura',
    descrizione:
      'Il pneumatico e\u0300 l\u2019unico punto di contatto fra il veicolo e la strada: la sua struttura, la pressione di gonfiaggio e lo stato del battistrada determinano aderenza, spazio di frenata, consumi e stabilita\u0300 direzionale.',
    regola_testo:
      'Il battistrada dei pneumatici deve avere una profondita\u0300 minima legale di 1,6 mm; una pressione di gonfiaggio inferiore al prescritto aumenta la resistenza al rotolamento, fa salire il consumo, provoca surriscaldamento del fianco e rischio di scoppio, riduce stabilita\u0300 e precisione di guida; una pressione troppo alta riduce la superficie di contatto, diminuisce l\u2019aderenza e provoca un\u2019usura centrale del battistrada.',
    articolo_cds: 'Art. 79 CdS',
    livello_difficolta: 3,
    tag: ['pneumatici', 'pressione', 'battistrada-1.6mm', 'P07', 'P17'],
  },
  {
    codice: 'ARG25-C008',
    argomento_numero: 25,
    titolo: 'Pneumatici invernali e catene da neve',
    descrizione:
      'In inverno, su strade ghiacciate o innevate, i pneumatici estivi perdono aderenza; le ordinanze prefettizie impongono l\u2019uso di pneumatici invernali o, in alternativa, di avere a bordo le catene da neve da montare all\u2019occorrenza.',
    regola_testo:
      'Dal 15 novembre al 15 aprile le ordinanze prefettizie possono imporre, sulle strade indicate, l\u2019uso di pneumatici invernali (marcatura M+S, idealmente anche con il simbolo 3PMSF "fiocco di neve") oppure l\u2019obbligo di avere a bordo catene da neve compatibili; i pneumatici invernali offrono aderenza significativamente superiore sotto i 7\u00b0C e in condizioni di neve, ghiaccio o bagnato freddo.',
    articolo_cds: 'Art. 6 CdS; direttiva MIT 16/01/2013',
    livello_difficolta: 2,
    tag: ['invernali', 'M+S', 'catene', 'ordinanza'],
  },
  {
    codice: 'ARG25-C009',
    argomento_numero: 25,
    titolo: 'Batteria e impianto elettrico',
    descrizione:
      'La batteria di avviamento fornisce l\u2019energia elettrica per l\u2019accensione del motore e, a motore acceso, e\u0300 l\u2019alternatore a ricaricarla alimentando al contempo i servizi di bordo: la spia rossa della batteria accesa a motore acceso segnala sempre un problema del circuito di ricarica.',
    regola_testo:
      'Se la spia rossa della batteria (forma di accumulatore con +/-) si accende a motore acceso, non significa che "la batteria e\u0300 scarica" ma che l\u2019alternatore non sta piu\u0300 caricando: bisogna spegnere i carichi elettrici non essenziali e fermarsi al piu\u0300 presto, perche\u0301 dopo alcuni chilometri il veicolo si fermera\u0300 con la batteria esaurita.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['batteria', 'alternatore', 'spie-rosse', 'P18'],
  },
  {
    codice: 'ARG25-C010',
    argomento_numero: 25,
    titolo: 'Circuito di raffreddamento motore',
    descrizione:
      'Il motore produce grandi quantita\u0300 di calore che devono essere dissipate dal circuito di raffreddamento a liquido; un\u2019anomalia del sistema porta rapidamente al surriscaldamento del motore e a danni gravi, fino alla fusione delle parti interne.',
    regola_testo:
      'Il livello del liquido di raffreddamento va controllato a motore freddo, tra le tacche di minimo e massimo della vaschetta di espansione. La spia rossa della temperatura o il termometro in fascia rossa impongono l\u2019arresto immediato del veicolo: proseguire con il motore in surriscaldamento significa danneggiare in modo grave e spesso irreparabile i componenti interni.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['raffreddamento', 'liquido', 'surriscaldamento'],
  },
  {
    codice: 'ARG25-C011',
    argomento_numero: 25,
    titolo: 'Circuito di lubrificazione e olio motore',
    descrizione:
      'L\u2019olio motore riduce l\u2019attrito fra gli organi meccanici in movimento, ne raffredda le superfici e mantiene puliti i meccanismi; un livello troppo basso o un olio molto degradato possono distruggere il motore in pochi minuti di marcia.',
    regola_testo:
      'Il livello dell\u2019olio va controllato a motore caldo, spento e su terreno piano, usando l\u2019asta di livello. La spia rossa della pressione dell\u2019olio accesa a motore acceso impone di fermarsi immediatamente: il motore sta lavorando senza lubrificazione adeguata, e continuare la marcia significa grippaggio irreparabile.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['olio', 'lubrificazione', 'pressione', 'spie-rosse', 'P18'],
  },
  {
    codice: 'ARG25-C012',
    argomento_numero: 25,
    titolo: 'Revisione periodica e bollo auto',
    descrizione:
      'La revisione periodica del veicolo accerta l\u2019idoneita\u0300 alla circolazione in termini di sicurezza e di emissioni; il bollo (tassa automobilistica) e\u0300 l\u2019imposta regionale sul possesso del veicolo: sono obblighi distinti ma entrambi necessari per potersi muovere legalmente su strada.',
    regola_testo:
      'L\u2019autovettura nuova di fabbrica deve essere sottoposta a revisione entro quattro anni dall\u2019immatricolazione e, successivamente, ogni due anni (regola "4+2"); la mancata revisione comporta sanzione amministrativa, il divieto di circolazione fino a revisione effettuata e la possibile sospensione dal servizio. Il bollo va pagato alla scadenza anche se il veicolo non viene utilizzato, salvo annotazione di "veicolo fermo" o riduzioni regionali.',
    articolo_cds: 'Art. 80 CdS',
    livello_difficolta: 2,
    tag: ['revisione', '4+2', 'bollo', 'P07'],
  },
  {
    codice: 'ARG25-C013',
    argomento_numero: 25,
    titolo: 'Stabilita\u0300 e tenuta di strada',
    descrizione:
      'La tenuta di strada e\u0300 la capacita\u0300 del veicolo di mantenere la traiettoria voluta dal conducente senza sbandare; dipende dall\u2019aderenza offerta da pneumatici e fondo, dalla geometria dell\u2019assetto, dallo stato di sospensioni e ammortizzatori e dalla corretta distribuzione del carico, non dalla potenza o dalla cilindrata del motore.',
    regola_testo:
      'La tenuta di strada dipende principalmente da: aderenza dei pneumatici al fondo stradale, efficienza delle sospensioni e degli ammortizzatori, geometria dell\u2019avantreno corretta, distribuzione equilibrata del carico sul veicolo, velocita\u0300 adeguata alle condizioni di strada e di visibilita\u0300. Una cilindrata o una potenza maggiori non aumentano la tenuta di strada; possono anzi renderla piu\u0300 critica se la guida non e\u0300 adeguata.',
    articolo_cds: null,
    livello_difficolta: 4,
    tag: ['tenuta-strada', 'aderenza', 'assetto', 'causa-effetto', 'P17'],
  },
] as const
