import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 189, 190, 193 + L. 177/2024
// 10 concetti atomici per l'argomento 14 — Incidenti stradali.
// Focus: obblighi del conducente coinvolto, prova di soccorso, omissione,
// tutela dei feriti, conservazione della scena dell\u2019incidente.

export const ARG14_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG14-C001',
    argomento_numero: 14,
    titolo: 'Definizione di incidente stradale',
    descrizione:
      'Per incidente stradale si intende qualunque evento che coinvolga almeno un veicolo in movimento sulla rete stradale e dal quale derivi un danno a persone o a cose. Include tamponamenti, collisioni, investimenti, uscite di carreggiata, ribaltamenti, anche quando danneggiano il solo veicolo responsabile.',
    regola_testo:
      'Costituisce incidente stradale ogni evento che, in occasione della circolazione di un veicolo, determina un danno a persone (lesione o morte) o a cose; il conducente coinvolto è soggetto agli obblighi previsti dall\u2019art. 189 CdS.',
    articolo_cds: 'Art. 189 co. 1 CdS',
    livello_difficolta: 2,
    tag: ['definizione', 'sinistro', 'coinvolgimento'],
  },
  {
    codice: 'ARG14-C002',
    argomento_numero: 14,
    titolo: 'Obbligo di fermarsi',
    descrizione:
      'Il conducente coinvolto in un incidente deve fermarsi immediatamente, qualunque sia l\u2019entità del danno e indipendentemente dal ritenersi responsabile. L\u2019obbligo sorge dal semplice coinvolgimento nel sinistro; allontanarsi senza essersi identificati costituisce il reato di fuga.',
    regola_testo:
      'L\u2019utente della strada, in caso di incidente comunque ricollegabile al suo comportamento, ha l\u2019obbligo di fermarsi e di prestare l\u2019assistenza occorrente a coloro che, eventualmente, abbiano subito danno alla persona.',
    articolo_cds: 'Art. 189 co. 1 CdS',
    livello_difficolta: 1,
    tag: ['obbligo-fermarsi', 'fuga', 'coinvolgimento'],
  },
  {
    codice: 'ARG14-C003',
    argomento_numero: 14,
    titolo: 'Obbligo di prestare soccorso',
    descrizione:
      'Quando dal sinistro derivano danni alla persona, il conducente ha l\u2019obbligo di prestare assistenza ai feriti: mettere in sicurezza la scena, allertare il 112 o il 118, non abbandonare la vittima. L\u2019omissione di soccorso è sanzionata più gravemente del semplice omesso fermarsi.',
    regola_testo:
      'In presenza di persone ferite il conducente coinvolto nell\u2019incidente deve prestare l\u2019assistenza necessaria e chiedere l\u2019intervento dei soccorsi sanitari; l\u2019abbandono dei feriti costituisce omissione di soccorso e comporta conseguenze penali.',
    articolo_cds: 'Art. 189 co. 6-7 CdS',
    livello_difficolta: 2,
    tag: ['soccorso', 'feriti', '112', 'omissione'],
  },
  {
    codice: 'ARG14-C004',
    argomento_numero: 14,
    titolo: 'Identificazione e generalità',
    descrizione:
      'Il conducente coinvolto deve fornire le proprie generalità e i dati del veicolo (targa, assicurazione, proprietario) agli altri soggetti coinvolti, agli agenti intervenuti e, se richiesto, ai feriti o loro congiunti. Anche se non vi sono feriti, l\u2019allontanamento senza generalità integra l\u2019illecito di fuga.',
    regola_testo:
      'Il conducente è obbligato a fornire le proprie generalità, quelle del proprietario del veicolo e gli estremi dell\u2019assicurazione obbligatoria RCA alle persone coinvolte e, su richiesta, alle autorità intervenute.',
    articolo_cds: 'Art. 189 co. 5 CdS',
    livello_difficolta: 3,
    tag: ['identificazione', 'generalita', 'RCA'],
  },
  {
    codice: 'ARG14-C005',
    argomento_numero: 14,
    titolo: 'Segnalazione del veicolo fermo dopo il sinistro',
    descrizione:
      'Subito dopo il fermo, il veicolo e la scena dell\u2019incidente vanno segnalati per impedire ulteriori collisioni: attivare le luci di emergenza, indossare il giubbotto ad alta visibilità, collocare il triangolo a distanza adeguata (almeno 50 m dal veicolo, maggiore in autostrada). Invitare i testimoni a mantenersi al riparo dalla carreggiata.',
    regola_testo:
      'Il conducente coinvolto in un incidente deve adottare le misure necessarie per salvaguardare la sicurezza della circolazione, segnalando il veicolo e la scena con luci di emergenza, triangolo retroriflettente e indumenti ad alta visibilità.',
    articolo_cds: 'Art. 189 co. 2 CdS',
    livello_difficolta: 2,
    tag: ['segnalazione', 'triangolo', 'sicurezza-scena'],
  },
  {
    codice: 'ARG14-C006',
    argomento_numero: 14,
    titolo: 'Non alterare lo stato dei luoghi',
    descrizione:
      'In attesa dell\u2019autorità, se dal sinistro è derivato un danno a persone, bisogna evitare di modificare la posizione dei veicoli, dei detriti e delle tracce: quelle informazioni servono agli agenti per ricostruire la dinamica. La rimozione è ammessa solo se strettamente necessaria per liberare la carreggiata o soccorrere un ferito.',
    regola_testo:
      'In caso di incidente con danni alle persone i veicoli e le cose non devono essere rimossi né la scena alterata, salvo che ciò sia indispensabile per prestare soccorso o per evitare ulteriore pericolo alla circolazione.',
    articolo_cds: 'Art. 189 co. 3 CdS',
    livello_difficolta: 3,
    tag: ['conservazione-scena', 'rilievi', 'non-rimozione'],
  },
  {
    codice: 'ARG14-C007',
    argomento_numero: 14,
    titolo: 'Incidente con soli danni alle cose',
    descrizione:
      'Se l\u2019incidente ha provocato solo danni ai veicoli o ad altre cose, i conducenti devono comunque fermarsi, identificarsi reciprocamente e liberare al più presto la carreggiata spostando i veicoli, per ridurre il rischio di un secondo incidente. La compilazione del Modulo CAI (Constatazione Amichevole) agevola poi la pratica assicurativa.',
    regola_testo:
      'Quando dall\u2019incidente derivano soltanto danni alle cose, i conducenti hanno l\u2019obbligo di rimuovere sollecitamente i veicoli dalla carreggiata per ripristinare la circolazione, dopo essersi scambiati i dati reciproci.',
    articolo_cds: 'Art. 189 co. 9-bis CdS',
    livello_difficolta: 3,
    tag: ['danni-cose', 'modulo-CAI', 'rimozione', 'liberare-carreggiata'],
  },
  {
    codice: 'ARG14-C008',
    argomento_numero: 14,
    titolo: 'Fuga e omissione di soccorso',
    descrizione:
      'Chi non si ferma dopo un incidente con danni alle persone commette il reato di fuga; chi non presta l\u2019assistenza necessaria commette l\u2019ulteriore reato di omissione di soccorso. Le due violazioni sono autonome e cumulabili e comportano pene detentive, sospensione o revoca della patente.',
    regola_testo:
      'L\u2019utente che, in presenza di persone ferite in conseguenza del sinistro, non ottempera all\u2019obbligo di fermarsi o all\u2019obbligo di prestare assistenza, è punito con reclusione e con la sospensione o revoca della patente, secondo la gravità del fatto.',
    articolo_cds: 'Art. 189 co. 6-7 CdS',
    livello_difficolta: 4,
    tag: ['fuga', 'omissione-soccorso', 'reato', 'revoca'],
  },
  {
    codice: 'ARG14-C009',
    argomento_numero: 14,
    titolo: 'Come soccorrere un ferito in sicurezza',
    descrizione:
      'Chi assiste un ferito deve proteggere la scena, allertare i soccorsi (112/118), evitare di spostare il ferito salvo pericolo imminente (incendio, rischio di nuovo urto), non somministrare liquidi o cibo, non rimuovere il casco a un motociclista se non strettamente necessario e solo con tecnica a due persone. Mantenere la vittima calda e cosciente se sveglia.',
    regola_testo:
      'Chi presta soccorso a un ferito deve prima mettere in sicurezza la scena, chiamare i soccorsi sanitari e proteggere la vittima, evitando manovre di spostamento non necessarie e senza somministrare liquidi o cibo.',
    articolo_cds: 'Art. 189 CdS',
    livello_difficolta: 3,
    tag: ['soccorso-pratico', 'scena-sicura', '112', 'casco-moto'],
  },
  {
    codice: 'ARG14-C010',
    argomento_numero: 14,
    titolo: 'Testimone obbligato all\u2019assistenza',
    descrizione:
      'Chi assiste a un incidente senza esserne coinvolto, pur non avendo gli obblighi dell\u2019utente coinvolto, non può sottrarsi all\u2019obbligo di prestare aiuto secondo il generale dovere di solidarietà: allertare il 112, segnalare la scena, non ostacolare i soccorsi. L\u2019omissione di soccorso prevista dal Codice penale si applica a chiunque, non solo a chi ha causato il sinistro.',
    regola_testo:
      'Chiunque, trovando una persona ferita o in pericolo, ometta di prestare l\u2019assistenza occorrente o di avvertire l\u2019autorità, risponde di omissione di soccorso ai sensi del Codice penale; il dovere grava anche sul semplice testimone.',
    articolo_cds: 'Art. 593 c.p. — integrazione art. 189 CdS',
    livello_difficolta: 3,
    tag: ['testimone', 'omissione-soccorso', 'solidarieta'],
  },
] as const
