import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 40 + Reg. CdS artt. 137-155 (segnaletica
// orizzontale e segni sugli ostacoli).
// 12 concetti atomici per l'argomento 5 — Segnaletica orizzontale e segni
// sugli ostacoli.
//
// Nota normativa: la L. 177/2024 non ha modificato la segnaletica orizzontale.
// Segnali orizzontali e verticali devono essere coerenti: in caso di
// contraddizione prevale sempre il segnale verticale.

export const ARG05_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG05-C001',
    argomento_numero: 5,
    titolo: 'Funzione della segnaletica orizzontale',
    descrizione:
      'La segnaletica orizzontale è formata da strisce, simboli e scritte tracciati sulla superficie stradale: delimita le corsie, indica il senso di marcia, regola manovre, sosta e attraversamenti.',
    regola_testo:
      'La segnaletica orizzontale ha la funzione di canalizzare il traffico, regolare manovre, indicare zone riservate e integrare la segnaletica verticale; in caso di contrasto con i segnali verticali prevalgono sempre questi ultimi.',
    articolo_cds: 'Art. 40 CdS; art. 137 Reg. CdS',
    livello_difficolta: 2,
    tag: ['segnaletica-orizzontale', 'P18'],
  },
  {
    codice: 'ARG05-C002',
    argomento_numero: 5,
    titolo: 'Striscia bianca continua di mezzeria',
    descrizione:
      'La striscia bianca continua di mezzeria separa due sensi di marcia o due corsie opposte e vieta di attraversarla o sorpassare impegnando l\u2019altra corsia.',
    regola_testo:
      'La striscia continua di mezzeria non può essere oltrepassata né calpestata: vieta il sorpasso e l\u2019invasione della corsia opposta, salvo per raggiungere una strada laterale o un accesso privato.',
    articolo_cds: 'Art. 40 c.4 CdS; art. 138 Reg. CdS',
    livello_difficolta: 2,
    tag: ['striscia-continua', 'sorpasso', 'P01'],
  },
  {
    codice: 'ARG05-C003',
    argomento_numero: 5,
    titolo: 'Striscia bianca discontinua e strisce miste',
    descrizione:
      'La striscia discontinua di mezzeria può essere attraversata per sorpassi e manovre; la striscia mista (una continua + una discontinua affiancate) consente il sorpasso solo nel senso in cui la discontinua è adiacente.',
    regola_testo:
      'La striscia discontinua permette di superarla per manovre di sorpasso o svolta quando le condizioni di visibilità lo consentono; la striscia mista consente di oltrepassarla soltanto al conducente che ha la linea discontinua sul proprio lato.',
    articolo_cds: 'Art. 40 CdS; art. 138 Reg. CdS',
    livello_difficolta: 3,
    tag: ['striscia-discontinua', 'striscia-mista', 'P13'],
  },
  {
    codice: 'ARG05-C004',
    argomento_numero: 5,
    titolo: 'Strisce di corsia e di margine',
    descrizione:
      'Le strisce di corsia separano due corsie dello stesso senso, le strisce di margine delimitano la carreggiata dalla banchina: cambiano spessore e continuità in base alla funzione e al contesto.',
    regola_testo:
      'Le strisce di corsia discontinue permettono il cambio di corsia; le strisce di margine, continue o discontinue, indicano i limiti della carreggiata e non possono essere oltrepassate se non per emergenze o sosta consentita.',
    articolo_cds: 'Art. 40 CdS; artt. 140, 141 Reg. CdS',
    livello_difficolta: 3,
    tag: ['corsia', 'margine'],
  },
  {
    codice: 'ARG05-C005',
    argomento_numero: 5,
    titolo: 'Frecce direzionali sulla carreggiata',
    descrizione:
      'Le frecce direzionali dipinte su una corsia indicano le direzioni consentite a chi la percorre quando l\u2019incrocio viene raggiunto: sono equivalenti a un segnale verticale di direzione obbligatoria.',
    regola_testo:
      'Chi si trova in una corsia con frecce direzionali deve proseguire solo nelle direzioni indicate dalle frecce; il cambio di corsia deve essere effettuato prima di entrare nella zona delle frecce.',
    articolo_cds: 'Art. 40 CdS; art. 142 Reg. CdS',
    livello_difficolta: 3,
    tag: ['frecce', 'corsia', 'P03'],
  },
  {
    codice: 'ARG05-C006',
    argomento_numero: 5,
    titolo: 'Strisce di arresto (stop e dare precedenza)',
    descrizione:
      'La striscia di arresto è tracciata sulla carreggiata come complemento di un segnale verticale: continua per lo stop, discontinua (triangoli bianchi) per il "dare precedenza".',
    regola_testo:
      'La striscia di arresto continua impone di fermarsi prima di essa in attuazione del segnale di stop; la striscia di arresto a triangoli impone di cedere il passo secondo il segnale di "dare precedenza".',
    articolo_cds: 'Art. 40 CdS; art. 143 Reg. CdS',
    livello_difficolta: 2,
    tag: ['stop', 'dare-precedenza'],
  },
  {
    codice: 'ARG05-C007',
    argomento_numero: 5,
    titolo: 'Attraversamenti pedonali',
    descrizione:
      'L\u2019attraversamento pedonale è formato da strisce bianche longitudinali parallele al senso di marcia dei veicoli: riserva ai pedoni una fascia di carreggiata sulla quale hanno la precedenza.',
    regola_testo:
      'In presenza di un attraversamento pedonale, anche non regolato da semaforo, il conducente deve dare la precedenza ai pedoni che l\u2019hanno impegnato o che si accingono a impegnarlo e non può sostare sopra di esso.',
    articolo_cds: 'Art. 191 CdS; art. 145 Reg. CdS',
    livello_difficolta: 2,
    tag: ['pedoni', 'attraversamento', 'P14'],
  },
  {
    codice: 'ARG05-C008',
    argomento_numero: 5,
    titolo: 'Attraversamenti ciclabili e passaggi a livello',
    descrizione:
      'L\u2019attraversamento ciclabile è segnato da due file di quadrati bianchi paralleli; il passaggio a livello è marcato da strisce trasversali bianche abbinate al segnale verticale: entrambi richiedono prudenza elevata.',
    regola_testo:
      'In corrispondenza degli attraversamenti ciclabili il conducente deve dare la precedenza ai ciclisti che l\u2019hanno impegnato; in prossimità di un passaggio a livello deve moderare la velocità e fermarsi al chiudersi delle barriere o ai segnali luminosi.',
    articolo_cds: 'Art. 40 CdS; artt. 146, 147 Reg. CdS',
    livello_difficolta: 3,
    tag: ['ciclabili', 'passaggio-livello'],
  },
  {
    codice: 'ARG05-C009',
    argomento_numero: 5,
    titolo: 'Isole di traffico e zebrature',
    descrizione:
      'Le isole di traffico delimitate da zebrature bianche (o bianche e gialle) canalizzano il traffico: delimitano aree non calpestabili dove il transito è vietato.',
    regola_testo:
      'Sulle zebrature e sulle isole di traffico delimitate da strisce oblique bianche i veicoli non possono transitare né sostare; tali aree vanno aggirate nel senso indicato dai segnali o dalla geometria stessa.',
    articolo_cds: 'Art. 40 CdS; art. 150 Reg. CdS',
    livello_difficolta: 3,
    tag: ['isola-traffico', 'zebrature'],
  },
  {
    codice: 'ARG05-C010',
    argomento_numero: 5,
    titolo: 'Strisce gialle, di sosta e aree riservate',
    descrizione:
      'Le strisce gialle delimitano zone di sosta riservate (invalidi, carico/scarico, bus, taxi) o di fermata obbligata: vietano la sosta a chi non è autorizzato.',
    regola_testo:
      'Le strisce di delimitazione gialle individuano aree di sosta o fermata riservate a determinate categorie (invalidi, veicoli di soccorso, autobus, taxi, carico/scarico): la sosta da parte di altri conducenti è vietata.',
    articolo_cds: 'Art. 40 CdS; art. 149 Reg. CdS',
    livello_difficolta: 3,
    tag: ['sosta', 'aree-riservate', 'P13'],
  },
  {
    codice: 'ARG05-C011',
    argomento_numero: 5,
    titolo: 'Iscrizioni e simboli sulla carreggiata',
    descrizione:
      'Sono considerati segnaletica orizzontale anche i simboli e le iscrizioni come "STOP", "BUS", "30", il simbolo della bicicletta o la silhouette del bambino: ripetono o anticipano la prescrizione di un segnale verticale.',
    regola_testo:
      'Le scritte e i simboli tracciati sulla carreggiata integrano la segnaletica verticale ripetendo l\u2019indicazione o anticipandola; devono essere rispettati come il corrispondente segnale verticale, purché non in contrasto con esso.',
    articolo_cds: 'Art. 40 CdS; art. 148 Reg. CdS',
    livello_difficolta: 3,
    tag: ['iscrizioni', 'simboli'],
  },
  {
    codice: 'ARG05-C012',
    argomento_numero: 5,
    titolo: 'Segni sugli ostacoli e delineatori',
    descrizione:
      'Le strisce bianche e rosse (o bianche e nere) dipinte su pilastri, cuspidi, barriere e paracarri segnalano un ostacolo fisico: sono associate a delineatori speciali catarifrangenti, rossi a destra e bianchi a sinistra.',
    regola_testo:
      'I segni sugli ostacoli indicano al conducente un pericolo fisso lungo il ciglio o sulla carreggiata; i delineatori di margine (rossi a destra, bianchi a sinistra) aiutano a riconoscere la sede stradale in condizioni di scarsa visibilità.',
    articolo_cds: 'Art. 40 CdS; artt. 152, 153 Reg. CdS',
    livello_difficolta: 3,
    tag: ['ostacoli', 'delineatori', 'P10'],
  },
] as const
