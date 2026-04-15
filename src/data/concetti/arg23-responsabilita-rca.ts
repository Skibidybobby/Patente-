import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 189, 193, 196, 222 + D.Lgs. 209/2005
// (Codice delle Assicurazioni) artt. 122, 141, 149, 150 + L. 177/2024
// (rafforzamento responsabilita\u0300 proprietario, art. 193 CdS).
// 9 concetti atomici per l'argomento 23 — Responsabilita\u0300 civile, penale e
// amministrativa, assicurazione RCA.
//
// Nota normativa: l\u2019assicurazione obbligatoria RCA resta disciplinata dal
// D.Lgs. 209/2005 (Codice delle Assicurazioni); la L. 177/2024 ha rafforzato
// i profili di responsabilita\u0300 del proprietario del veicolo circolante senza
// copertura e modernizzato le sanzioni dell\u2019art. 193 CdS.

export const ARG23_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG23-C001',
    argomento_numero: 23,
    titolo: 'Le tre forme di responsabilita\u0300 nella circolazione',
    descrizione:
      'Dalla circolazione di un veicolo possono nascere contemporaneamente tre tipi di responsabilita\u0300: civile (per risarcire il danno), penale (per il reato commesso) e amministrativa (per l\u2019infrazione al Codice della Strada). Non sono alternative, possono sommarsi sullo stesso fatto.',
    regola_testo:
      'La responsabilita\u0300 civile obbliga al risarcimento dei danni prodotti a persone o cose; la responsabilita\u0300 penale risponde dei reati previsti dal codice penale e dal CdS (lesioni colpose, omicidio stradale, fuga, omissione di soccorso); la responsabilita\u0300 amministrativa risponde delle violazioni al CdS con sanzioni amministrative pecuniarie e accessorie. Le tre forme possono coesistere per il medesimo evento.',
    articolo_cds: 'Artt. 2043-2054 c.c.; art. 589-bis c.p.; CdS',
    livello_difficolta: 3,
    tag: ['civile', 'penale', 'amministrativa', 'P03'],
  },
  {
    codice: 'ARG23-C002',
    argomento_numero: 23,
    titolo: 'Responsabilita\u0300 del proprietario del veicolo',
    descrizione:
      'Il proprietario del veicolo non e\u0300 solo chi possiede il mezzo: e\u0300 il garante della sua circolazione sicura. Per questo risponde in solido con il conducente dei danni causati, salvo prova di circolazione contro la propria volonta\u0300.',
    regola_testo:
      'Il proprietario del veicolo, o in sua vece l\u2019usufruttuario, l\u2019acquirente con patto di riservato dominio o il locatario in leasing, risponde in solido con il conducente dei danni prodotti a persone o cose dalla circolazione del veicolo, salvo che provi che la circolazione e\u0300 avvenuta contro la sua volonta\u0300.',
    articolo_cds: 'Art. 2054 c.c.; art. 196 CdS',
    livello_difficolta: 3,
    tag: ['proprietario', 'solidarieta', 'P04'],
  },
  {
    codice: 'ARG23-C003',
    argomento_numero: 23,
    titolo: 'Assicurazione RCA obbligatoria',
    descrizione:
      'Ogni veicolo a motore che circola su strade ad uso pubblico o su aree ad esse equiparate deve essere coperto da un\u2019assicurazione obbligatoria per la responsabilita\u0300 civile verso i terzi: senza copertura non puo\u0300 nemmeno muoversi dal cortile di casa, se questo e\u0300 accessibile a estranei.',
    regola_testo:
      'I veicoli a motore senza guida di rotaie e i rimorchi possono circolare su strade ad uso pubblico e su aree ad esse equiparate solo se coperti da assicurazione per la responsabilita\u0300 civile verso i terzi (RCA); l\u2019obbligo assicurativo grava sul proprietario e si estende oggi anche ai monopattini elettrici dopo la L. 177/2024.',
    articolo_cds: 'Art. 193 CdS; art. 122 D.Lgs. 209/2005',
    livello_difficolta: 2,
    tag: ['RCA', 'obbligo', 'monopattini', 'riforma-2024', 'P01'],
  },
  {
    codice: 'ARG23-C004',
    argomento_numero: 23,
    titolo: 'Circolazione senza copertura assicurativa',
    descrizione:
      'Guidare un veicolo senza RCA valida e\u0300 una delle violazioni piu\u0300 severe del CdS: comporta una sanzione amministrativa elevata, il sequestro del veicolo e, in caso di recidiva, la confisca definitiva a favore dell\u2019erario.',
    regola_testo:
      'La circolazione di un veicolo privo di copertura assicurativa RCA e\u0300 punita con sanzione amministrativa pecuniaria consistente (rinforzata dalla L. 177/2024), sequestro amministrativo del veicolo e, in caso di reiterazione nel biennio, confisca; per assicurare la vittima, anche il veicolo non assicurato puo\u0300 far ricorrere al Fondo di Garanzia per le Vittime della Strada.',
    articolo_cds: 'Art. 193 CdS (mod. L. 177/2024)',
    livello_difficolta: 3,
    tag: ['non-assicurato', 'sequestro', 'riforma-2024'],
  },
  {
    codice: 'ARG23-C005',
    argomento_numero: 23,
    titolo: 'Risarcimento diretto',
    descrizione:
      'Il risarcimento diretto e\u0300 una procedura introdotta per semplificare la gestione dei sinistri: l\u2019automobilista danneggiato viene risarcito dalla propria compagnia assicurativa anziche\u0301 da quella del veicolo responsabile, che poi regolera\u0300 i conti con la compagnia del danneggiante.',
    regola_testo:
      'Nel caso di sinistro fra due veicoli a motore entrambi identificati, assicurati e immatricolati in Italia, con danni solo materiali o con lesioni personali lievi al conducente (entro i limiti previsti), il danneggiato non colpevole puo\u0300 rivolgere la richiesta di risarcimento direttamente alla propria compagnia assicurativa, che liquida il danno per conto di quella del responsabile.',
    articolo_cds: 'Artt. 149, 150 D.Lgs. 209/2005',
    livello_difficolta: 3,
    tag: ['risarcimento-diretto', 'CARD', 'P18'],
  },
  {
    codice: 'ARG23-C006',
    argomento_numero: 23,
    titolo: 'Franchigia, massimale e bonus-malus',
    descrizione:
      'Le polizze RCA si distinguono per tre parametri economici fondamentali: la franchigia (quota di danno a carico dell\u2019assicurato), il massimale (tetto alla somma risarcita dalla compagnia) e il meccanismo bonus-malus (classe di merito che sale o scende a seconda dei sinistri causati).',
    regola_testo:
      'La franchigia e\u0300 la quota di danno che resta a carico dell\u2019assicurato; il massimale e\u0300 la somma massima risarcita dalla compagnia, non inferiore ai minimi di legge; la classe di merito del sistema bonus-malus migliora in assenza di sinistri causati e peggiora a ogni sinistro con responsabilita\u0300 principale, determinando la riduzione o l\u2019aumento del premio alle scadenze successive.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['franchigia', 'massimale', 'bonus-malus', 'P13'],
  },
  {
    codice: 'ARG23-C007',
    argomento_numero: 23,
    titolo: 'Obblighi in caso di incidente con danni a persone',
    descrizione:
      'Quando da un incidente derivano danni alle persone, ogni conducente coinvolto deve fermarsi e prestare assistenza: scappare e\u0300 un reato a se\u0301 stante (fuga) e non prestare soccorso a un ferito e\u0300 un ulteriore reato (omissione di soccorso), indipendentemente da chi abbia causato il sinistro.',
    regola_testo:
      'Il conducente coinvolto in un incidente con danno alle persone ha l\u2019obbligo di fermarsi, prestare la necessaria assistenza ai feriti, avvisare gli organi di polizia e mettersi a disposizione per gli accertamenti; in caso contrario risponde dei reati di fuga e di omissione di soccorso previsti dall\u2019art. 189 CdS.',
    articolo_cds: 'Art. 189 CdS',
    livello_difficolta: 3,
    tag: ['incidente', 'fuga', 'omissione-soccorso', 'P01'],
  },
  {
    codice: 'ARG23-C008',
    argomento_numero: 23,
    titolo: 'Omicidio stradale e lesioni personali stradali',
    descrizione:
      'L\u2019omicidio stradale e le lesioni personali stradali sono reati autonomi introdotti nel codice penale per rispondere in modo specifico alle conseguenze piu\u0300 gravi dei sinistri stradali; prevedono aggravanti severe per ebbrezza, stupefacenti e alta velocita\u0300.',
    regola_testo:
      'Chiunque, con violazione delle norme sulla circolazione, provoca per colpa la morte di una persona risponde del reato di omicidio stradale (art. 589-bis c.p.); se provoca lesioni personali gravi o gravissime risponde del reato di lesioni stradali (art. 590-bis c.p.). Le pene sono aggravate se il conducente era in stato di ebbrezza oltre 1,5 g/l, sotto effetto di stupefacenti o procedeva a velocita\u0300 molto superiori a quelle consentite.',
    articolo_cds: 'Artt. 589-bis, 590-bis c.p.',
    livello_difficolta: 4,
    tag: ['omicidio-stradale', 'lesioni', 'aggravanti'],
  },
  {
    codice: 'ARG23-C009',
    argomento_numero: 23,
    titolo: 'Contrassegno assicurativo e controlli',
    descrizione:
      'Il tradizionale contrassegno cartaceo sul parabrezza e\u0300 stato abolito nel 2015: oggi la verifica della copertura RCA avviene per via telematica, ma l\u2019obbligo di avere una polizza attiva e di poter dimostrare la copertura resta pieno.',
    regola_testo:
      'Dal 18 ottobre 2015 il contrassegno cartaceo RCA non e\u0300 piu\u0300 obbligatorio; l\u2019esistenza della copertura assicurativa viene verificata telematicamente tramite la banca dati ANIA-Motorizzazione; il certificato di assicurazione deve comunque essere prodotto, in formato cartaceo o digitale, quando richiesto dagli organi di polizia stradale in sede di controllo.',
    articolo_cds: 'Art. 180 CdS; art. 31 L. 99/2009',
    livello_difficolta: 2,
    tag: ['contrassegno', 'controllo-telematico', 'ANIA'],
  },
] as const
