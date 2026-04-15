import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 72, 171, 172 + Reg. (UE) 1259/2014 +
// UNECE R129 (i-Size).
// 10 concetti atomici per l'argomento 13 — Dispositivi equipaggiamento,
// cinture, sistemi di ritenuta, casco.
// NOTA normativa: dal 01/09/2024 i nuovi seggiolini omologati per la vendita
// devono essere conformi al regolamento UNECE R129 (i-Size), che sostituisce
// progressivamente R44. I seggiolini R44 già in uso restano utilizzabili fino
// al termine del loro ciclo di vita.

export const ARG13_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG13-C001',
    argomento_numero: 13,
    titolo: 'Obbligo della cintura di sicurezza',
    descrizione:
      'Il conducente e tutti i passeggeri di autoveicoli dotati di cinture devono indossarle, sui sedili anteriori e posteriori, in città e fuori città, sempre e su ogni tratto di strada. L\u2019obbligo vale anche per i tragitti brevi e per i viaggi a bassa velocità.',
    regola_testo:
      'Il conducente e i passeggeri degli autoveicoli equipaggiati con cinture di sicurezza devono indossarle in modo permanente durante la marcia; l\u2019obbligo si applica ai sedili anteriori e ai sedili posteriori.',
    articolo_cds: 'Art. 172 CdS',
    livello_difficolta: 1,
    tag: ['cinture', 'obbligo-generale', 'responsabilita'],
  },
  {
    codice: 'ARG13-C002',
    argomento_numero: 13,
    titolo: 'Funzione delle cinture di sicurezza',
    descrizione:
      'La cintura trattiene il bacino e il torace al sedile durante un urto o una frenata violenta, distribuendo l\u2019energia dell\u2019urto sulle parti del corpo più resistenti e impedendo la proiezione contro cruscotto, volante, parabrezza o altri occupanti. Riduce drasticamente la gravità delle lesioni.',
    regola_testo:
      'La cintura di sicurezza impedisce che in caso di urto o brusca decelerazione il corpo degli occupanti sia proiettato contro le strutture interne del veicolo o all\u2019esterno, contribuendo in modo decisivo alla sopravvivenza.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['cinture', 'funzione', 'sicurezza-passiva'],
  },
  {
    codice: 'ARG13-C003',
    argomento_numero: 13,
    titolo: 'Responsabilità per mancato uso della cintura',
    descrizione:
      'Della violazione risponde chi non indossa la cintura. Se il passeggero è minorenne, la responsabilità ricade sul conducente, che deve accertarsi che il minore sia correttamente allacciato o assicurato con dispositivo di ritenuta adeguato.',
    regola_testo:
      'Della mancata osservanza dell\u2019obbligo risponde chi non indossa la cintura; se il trasportato è minorenne, la responsabilità è del conducente, salvo che il minore viaggi con un altro soggetto che lo abbia in custodia.',
    articolo_cds: 'Art. 172 co. 10 CdS',
    livello_difficolta: 3,
    tag: ['responsabilita', 'minori', 'conducente'],
  },
  {
    codice: 'ARG13-C004',
    argomento_numero: 13,
    titolo: 'Esenzioni dall\u2019obbligo di cintura',
    descrizione:
      'Sono esentati dall\u2019obbligo, previa apposita certificazione medica, coloro che per patologia non possono indossarla; le donne in stato di gravidanza con certificato ginecologico; gli appartenenti a forze dell\u2019ordine e soccorso in servizio di emergenza; istruttori durante le esercitazioni di guida per la scuola-guida.',
    regola_testo:
      'Sono esentati dall\u2019uso della cintura soltanto i soggetti individuati dall\u2019art. 172 e dal relativo regolamento: persone con patologia accertata, donne in stato di gravidanza certificata, personale di sicurezza e soccorso in servizio, istruttori di scuola guida durante l\u2019esercitazione.',
    articolo_cds: 'Art. 172 co. 7 CdS',
    livello_difficolta: 3,
    tag: ['esenzioni', 'certificazione-medica', 'scuola-guida'],
  },
  {
    codice: 'ARG13-C005',
    argomento_numero: 13,
    titolo: 'Sistema di ritenuta per bambini: altezza 1,50 m',
    descrizione:
      'I bambini con altezza inferiore a 1,50 m devono essere assicurati al sedile mediante un dispositivo di ritenuta omologato, adeguato al loro peso e alla loro corporatura. L\u2019uso del solo cinturone per adulti senza seggiolino/adattatore è vietato perché la cintura passerebbe sul collo e sull\u2019addome, organi non protetti.',
    regola_testo:
      'Sugli autoveicoli dotati di cinture di sicurezza i bambini di statura inferiore a 1,50 m devono essere assicurati al sedile mediante un sistema di ritenuta omologato, adeguato al loro peso.',
    articolo_cds: 'Art. 172 co. 1 CdS',
    livello_difficolta: 2,
    tag: ['bambini', 'ritenuta', '1-50m', 'omologato'],
  },
  {
    codice: 'ARG13-C006',
    argomento_numero: 13,
    titolo: 'ECE R129 (i-Size) dal 1 settembre 2024',
    descrizione:
      'I seggiolini immessi in commercio dal 1° settembre 2024 devono essere omologati secondo il regolamento UNECE R129, noto come i-Size. Rispetto al precedente R44 classifica i dispositivi in base alla statura del bambino (non solo al peso), impone l\u2019orientamento contrario al senso di marcia fino a 15 mesi e richiede test su urto laterale.',
    regola_testo:
      'Dal 1° settembre 2024 i nuovi sistemi di ritenuta per bambini venduti devono essere omologati UNECE R129 (i-Size); i dispositivi R44 già in uso possono continuare a essere utilizzati fino al termine del loro ciclo di vita.',
    articolo_cds: 'Art. 172 CdS — UNECE R129',
    livello_difficolta: 4,
    tag: ['R129', 'i-Size', 'R44', 'omologazione', 'bambini', '2024-09-01'],
  },
  {
    codice: 'ARG13-C007',
    argomento_numero: 13,
    titolo: 'Airbag e seggiolino in senso contrario',
    descrizione:
      'Il seggiolino orientato in senso contrario a quello di marcia non va mai installato sul sedile anteriore se l\u2019airbag frontale è attivo: in caso di apertura l\u2019airbag colpirebbe la scocca del seggiolino contro il bambino con effetti letali. L\u2019airbag va disattivato oppure il seggiolino va spostato sul sedile posteriore.',
    regola_testo:
      'Non è consentito installare un seggiolino per bambini orientato in senso contrario a quello di marcia sul sedile anteriore protetto da airbag frontale attivo; l\u2019airbag deve essere disattivato o il dispositivo va sistemato sul sedile posteriore.',
    articolo_cds: 'Art. 172 CdS',
    livello_difficolta: 4,
    tag: ['airbag', 'seggiolino', 'bambini', 'senso-contrario'],
  },
  {
    codice: 'ARG13-C008',
    argomento_numero: 13,
    titolo: 'Casco protettivo: motocicli e ciclomotori',
    descrizione:
      'Il conducente e il passeggero di motocicli, ciclomotori e quadricicli non carrozzati devono indossare un casco protettivo omologato, allacciato correttamente. L\u2019obbligo vale su tutte le strade, in ogni condizione, senza distinzione tra urbano ed extraurbano. Il casco non omologato o slacciato equivale all\u2019assenza del casco.',
    regola_testo:
      'È obbligatorio per i conducenti e i passeggeri di ciclomotori e motoveicoli l\u2019uso, durante la marcia, di un casco protettivo conforme alle norme di omologazione; il casco deve essere correttamente allacciato.',
    articolo_cds: 'Art. 171 CdS',
    livello_difficolta: 1,
    tag: ['casco', 'ciclomotore', 'motociclo', 'omologazione'],
  },
  {
    codice: 'ARG13-C009',
    argomento_numero: 13,
    titolo: 'Casco per monopattini elettrici',
    descrizione:
      'A seguito della Legge 177/2024 l\u2019uso del casco protettivo è obbligatorio per tutti i conducenti di monopattini elettrici, non più solo per i minorenni. Il casco deve essere conforme alle norme UNI EN 1078 o 1080, come per i ciclisti urbani.',
    regola_testo:
      'I conducenti di monopattini elettrici sono tenuti a indossare un casco protettivo conforme alle norme tecniche armonizzate; l\u2019obbligo, originariamente riferito ai soli minori, è stato esteso a tutti dalla L. 177/2024.',
    articolo_cds: 'Art. 75-bis CdS — L. 177/2024',
    livello_difficolta: 3,
    tag: ['casco', 'monopattino', 'L177-2024', 'UNI-EN-1078'],
  },
  {
    codice: 'ARG13-C010',
    argomento_numero: 13,
    titolo: 'Equipaggiamento obbligatorio del veicolo',
    descrizione:
      'Il veicolo deve essere equipaggiato di dispositivi obbligatori in grado di segnalare un pericolo in caso di sosta per guasto: triangolo retroriflettente omologato, giubbotto/bretelle ad alta visibilità per scendere in carreggiata fuori dai centri abitati, luci di emergenza funzionanti. La loro assenza o il loro malfunzionamento comporta sanzione.',
    regola_testo:
      'In caso di fermata o sosta del veicolo per avaria su strade extraurbane e autostrade, il conducente e gli occupanti che scendono devono indossare il giubbotto o le bretelle retroriflettenti ad alta visibilità; il veicolo fermo va segnalato con il triangolo di pericolo.',
    articolo_cds: 'Art. 162 CdS',
    livello_difficolta: 2,
    tag: ['equipaggiamento', 'triangolo', 'giubbotto-alta-visibilita'],
  },
] as const
