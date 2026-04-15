import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 7 (ZTL), 142 (velocita\u0300), 157 (sosta),
// 179 (motore acceso a veicolo fermo) + Reg. (UE) 2018/858 (omologazione Euro
// 7) + normativa comunale ZTL/Area B/C.
// 8 concetti atomici per l'argomento 24 — Limitazione dei consumi, rispetto
// dell'ambiente, inquinamento.
//
// Nota didattica: questo argomento non e\u0300 stato toccato direttamente dalla
// L. 177/2024, ma beneficia del piu\u0300 ampio contesto europeo di riduzione
// delle emissioni; le classi Euro restano il riferimento normativo per
// l\u2019accesso alle ZTL e alle aree ambientali dei comuni italiani.

export const ARG24_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG24-C001',
    argomento_numero: 24,
    titolo: 'Guida economica ed ecologica (eco-driving)',
    descrizione:
      'La guida economica, o eco-driving, consiste nell\u2019adottare uno stile che riduce contemporaneamente i consumi di carburante, le emissioni inquinanti e l\u2019usura meccanica: non e\u0300 una guida lenta, ma una guida fluida e anticipata.',
    regola_testo:
      'Per ridurre consumi ed emissioni il conducente deve partire dolcemente e inserire rapidamente la marcia piu\u0300 alta possibile, mantenere una velocita\u0300 costante ed evitare accelerazioni e frenate brusche, anticipare le decelerazioni rilasciando l\u2019acceleratore in tempo utile, spegnere il motore durante le soste prolungate e alleggerire il carico non necessario.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['eco-driving', 'consumi', 'guida-anticipata', 'F03'],
  },
  {
    codice: 'ARG24-C002',
    argomento_numero: 24,
    titolo: 'Manutenzione e consumi',
    descrizione:
      'Un veicolo in buone condizioni meccaniche consuma meno e inquina meno: la manutenzione ordinaria regolare e il controllo periodico di alcuni componenti hanno un effetto diretto sul consumo e sulle emissioni.',
    regola_testo:
      'Un motore tenuto bene, filtri dell\u2019aria puliti, olio cambiato negli intervalli previsti, pneumatici gonfiati alla pressione corretta e allineamento delle ruote conforme riducono sensibilmente il consumo di carburante; una pressione di gonfiaggio troppo bassa aumenta l\u2019attrito di rotolamento, fa crescere consumi ed emissioni e accelera l\u2019usura del battistrada.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['manutenzione', 'pneumatici', 'filtri', 'P17'],
  },
  {
    codice: 'ARG24-C003',
    argomento_numero: 24,
    titolo: 'Marcia alta e regime motore',
    descrizione:
      'Il motore consuma di piu\u0300 quando gira a regimi elevati: per questo, a parita\u0300 di velocita\u0300, utilizzare una marcia piu\u0300 alta riduce il numero di giri al minuto e, con esso, il consumo di carburante e l\u2019emissione di CO2.',
    regola_testo:
      'A parita\u0300 di velocita\u0300, un rapporto di trasmissione piu\u0300 alto (marcia superiore) fa girare il motore a un numero di giri inferiore e quindi riduce il consumo specifico di carburante; viceversa, guidare con marce basse a velocita\u0300 sostenuta fa salire il regime, aumenta il consumo e il rumore senza benefici di accelerazione.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['marcia-alta', 'regime', 'consumi', 'P04'],
  },
  {
    codice: 'ARG24-C004',
    argomento_numero: 24,
    titolo: 'Velocita\u0300, aerodinamica e consumi',
    descrizione:
      'La resistenza aerodinamica cresce con il quadrato della velocita\u0300: raddoppiando la velocita\u0300 il motore deve vincere una resistenza quattro volte maggiore, e il consumo sale in modo piu\u0300 che proporzionale al tempo risparmiato.',
    regola_testo:
      'I consumi di carburante aumentano in modo piu\u0300 che lineare con la velocita\u0300 a causa della resistenza aerodinamica, che cresce quadraticamente; a velocita\u0300 elevate in autostrada il consumo puo\u0300 raddoppiare rispetto alla marcia a velocita\u0300 di crociera moderata, a parita\u0300 di distanza percorsa; anche il portapacchi e gli accessori esterni penalizzano in modo apprezzabile l\u2019aerodinamica.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['aerodinamica', 'velocita', 'autostrada', 'P17'],
  },
  {
    codice: 'ARG24-C005',
    argomento_numero: 24,
    titolo: 'Emissioni inquinanti e classi Euro',
    descrizione:
      'I motori a combustione interna emettono una miscela di gas di cui alcuni sono altamente tossici (monossido di carbonio, ossidi di azoto, particolato) e altri responsabili del riscaldamento climatico (anidride carbonica); le classi Euro misurano quanto un veicolo inquina secondo le normative europee.',
    regola_testo:
      'Le emissioni nocive principali sono il monossido di carbonio (CO), gli ossidi di azoto (NOx), gli idrocarburi incombusti (HC), il particolato (PM10, PM2,5) e la CO2 come gas serra; la classificazione Euro (oggi da Euro 0 a Euro 6, con Euro 7 in arrivo) stabilisce i limiti massimi ammessi e determina l\u2019accesso alle zone a traffico limitato di molti centri urbani italiani.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['inquinanti', 'classi-Euro', 'CO2', 'PM10', 'F04'],
  },
  {
    codice: 'ARG24-C006',
    argomento_numero: 24,
    titolo: 'Zone a Traffico Limitato (ZTL) e aree ambientali',
    descrizione:
      'Le ZTL e le aree ambientali sono strumenti con cui i Comuni limitano l\u2019accesso di certi veicoli in determinate fasce orarie per tutelare la qualita\u0300 dell\u2019aria, la sicurezza dei pedoni o la valenza storico-artistica delle zone centrali.',
    regola_testo:
      'Le Zone a Traffico Limitato sono istituite con provvedimento del sindaco e sono segnalate dall\u2019apposito segnale di divieto; l\u2019accesso e\u0300 consentito solo ai veicoli autorizzati o appartenenti a categorie ammesse (residenti, disabili, servizi pubblici). Dopo la L. 177/2024 le violazioni ripetute nella stessa ZTL nell\u2019arco dello stesso giorno sono sanzionate una volta sola, pur restando verbalizzabili.',
    articolo_cds: 'Art. 7 CdS; art. 198 CdS (mod. L. 177/2024)',
    livello_difficolta: 3,
    tag: ['ZTL', 'aree-ambientali', 'sanzione-unica', 'P10'],
  },
  {
    codice: 'ARG24-C007',
    argomento_numero: 24,
    titolo: 'Motore acceso a veicolo fermo',
    descrizione:
      'Tenere il motore al minimo quando il veicolo e\u0300 fermo in sosta inquina inutilmente, consuma carburante, genera rumore e in molte ipotesi e\u0300 espressamente vietato dal CdS.',
    regola_testo:
      'Durante le soste prolungate e\u0300 vietato tenere il motore acceso per alimentare impianti di climatizzazione o di refrigerazione, salvo nei casi espressamente previsti; la violazione comporta una sanzione amministrativa pecuniaria. In generale, la buona pratica e\u0300 spegnere il motore per soste superiori a qualche decina di secondi.',
    articolo_cds: 'Art. 157 c.7-bis CdS',
    livello_difficolta: 2,
    tag: ['minimo', 'sosta', 'stop-start'],
  },
  {
    codice: 'ARG24-C008',
    argomento_numero: 24,
    titolo: 'Veicoli ibridi, elettrici e a carburanti alternativi',
    descrizione:
      'I veicoli ibridi ed elettrici sostituiscono in tutto o in parte il motore a combustione con un motore elettrico alimentato da batteria ricaricabile: riducono i consumi e le emissioni locali, mantenendo in circolazione regimi operativi piu\u0300 efficienti.',
    regola_testo:
      'I veicoli ibridi combinano un motore a combustione interna con uno o piu\u0300 motori elettrici, recuperando energia in frenata e riducendo i consumi in citta\u0300; i veicoli elettrici puri si muovono solo con energia elettrica immagazzinata nella batteria e non producono emissioni locali durante la marcia; i veicoli a gas GPL o metano e quelli a idrogeno rappresentano ulteriori alternative a minore impatto rispetto al ciclo benzina/gasolio tradizionale.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['ibridi', 'elettrico', 'GPL', 'metano', 'idrogeno', 'F02'],
  },
] as const
