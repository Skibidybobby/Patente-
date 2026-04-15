import type { QuizItem } from '../_types'

// Fonte: docs/research/03 + CdS artt. 189, 193, 196, 222 + D.Lgs. 209/2005
// artt. 122, 141, 149, 150 + artt. 2043, 2054 c.c. + artt. 589-bis, 590-bis c.p.
// + L. 177/2024.
// Quiz R.O.T.T.A. per argomento 23 — Responsabilità civile, penale e
// amministrativa, assicurazione RCA. 9 concetti × 10 item = 90 item.
// Pattern dominanti del batch: P16 (passivo ingannevole), P15 (ovvero
// "oppure" su civile/penale/amministrativa), P18 (verità fuori contesto),
// P13 (coppie terminologiche).

export const ARG23_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG23-C001 — Le tre forme di responsabilità
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C001-01',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La responsabilit\u00e0 civile derivante dalla circolazione obbliga al risarcimento dei danni prodotti a persone o cose.',
    risposta_corretta: true,
    spiegazione:
      'La civile risponde economicamente al danneggiato: \u00e8 la funzione riparatoria, coperta dalla polizza RCA.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 2043, 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C001-02',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La responsabilit\u00e0 penale risponde dei reati previsti dal codice penale e dal Codice della Strada.',
    risposta_corretta: true,
    spiegazione:
      'Tipici reati stradali: omicidio stradale (589-bis), lesioni stradali (590-bis), fuga e omissione di soccorso (art. 189 CdS).',
    livello_difficolta: 2,
    articolo_cds: 'Artt. 589-bis, 590-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C001-03',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le tre forme di responsabilit\u00e0 (civile, penale, amministrativa) sono per legge mutualmente esclusive: scelta una, le altre non si applicano.',
    risposta_corretta: false,
    spiegazione:
      'Stesso incidente = possibili contemporaneamente: risarcimento (civile), processo penale (penale), multa/punti (amministrativa). Non sono alternative.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C001-04',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dallo stesso fatto deriva responsabilit\u00e0 civile, ovvero penale, ovvero amministrativa: un\u2019unica delle tre \u00e8 applicabile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": in diritto "ovvero" = "oppure", ma QUI le tre forme possono coesistere, non sono alternative. La frase suggerisce una scelta esclusiva che non esiste.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 196 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C001-05',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'La responsabilit\u00e0 amministrativa \u00e8 vietata quando dal fatto deriva anche responsabilit\u00e0 penale.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: non c\u2019\u00e8 nessun "divieto". Le sanzioni amministrative possono coesistere con il procedimento penale per lo stesso fatto.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C001-06',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'La responsabilit\u00e0 penale colpisce anche il proprietario del veicolo, per il solo fatto di esserne titolare.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 – Passivo Ingannevole / Agente Cancellato: la penale \u00e8 personale (art. 27 Cost.): risponde CHI ha commesso il reato. Il proprietario risponde civilmente in solido, non penalmente "per propriet\u00e0".',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C001-07',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Marco investe un pedone a 80 km/h in centro abitato con tasso alcolemico 1,2 g/l. Rispondera\u0300 contemporaneamente in sede civile, penale e amministrativa.',
    risposta_corretta: true,
    spiegazione:
      'Civile: risarcire il pedone. Penale: lesioni stradali aggravate (590-bis) + ebbrezza (186). Amministrativa: multe art. 141/142, decurtazione punti.',
    scenario_transfer: 'investimento pedone in ebbrezza',
    livello_difficolta: 4,
    articolo_cds: 'Artt. 589-bis, 590-bis c.p.; CdS',
  },
  {
    codice: 'QUIZ-ARG23-C001-08',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: tamponamento a bassa velocit\u00e0 senza feriti, con soli danni materiali. Si attiva solo la responsabilit\u00e0 civile.',
    risposta_corretta: false,
    spiegazione:
      'Oltre alla civile (risarcimento danni) resta la amministrativa: chi ha tamponato ha violato l\u2019art. 149 CdS (distanza di sicurezza), quindi multa + punti. La penale \u00e8 l\u2019unica a mancare perch\u00e9 non ci sono feriti.',
    scenario_transfer: 'tamponamento lieve senza feriti',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C001-09',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: conducente colpevole di omicidio stradale viene assolto in sede penale per un vizio di prova. Pu\u00f2 comunque essere condannato al risarcimento civile ai superstiti.',
    risposta_corretta: true,
    spiegazione:
      'Civile e penale sono indipendenti: l\u2019assoluzione penale non esclude automaticamente la responsabilit\u00e0 civile, che segue regole di prova diverse (standard meno rigoroso).',
    scenario_transfer: 'assoluzione penale con condanna civile',
    livello_difficolta: 5,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C001-10',
    concetto_codice: 'ARG23-C001',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega con parole tue la differenza fra responsabilit\u00e0 civile, penale e amministrativa nella circolazione stradale, indicando "a chi risponde" ciascuna.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: civile \u2192 verso il danneggiato (risarcimento); penale \u2192 verso lo Stato (punizione del reato); amministrativa \u2192 verso la PA (sanzione dell\u2019infrazione al CdS). Le tre possono sommarsi sullo stesso fatto.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG23-C002 — Responsabilità del proprietario
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C002-01',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il proprietario del veicolo risponde in solido con il conducente dei danni prodotti dalla circolazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 2054 c.c.: responsabilit\u00e0 solidale proprietario + conducente. Il danneggiato pu\u00f2 rivolgersi indifferentemente a uno dei due (o alla compagnia RCA).',
    livello_difficolta: 2,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-02',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il proprietario non pu\u00f2 mai liberarsi dalla responsabilit\u00e0, nemmeno se prova che il veicolo circolava contro la sua volont\u00e0.',
    risposta_corretta: false,
    spiegazione:
      'Falso: l\u2019art. 2054 prevede la "prova liberatoria". Tipicamente furto o uso senza autorizzazione: se il proprietario la prova, si libera dalla responsabilit\u00e0 civile.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-03',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019usufruttuario e l\u2019acquirente con patto di riservato dominio rispondono come il proprietario.',
    risposta_corretta: true,
    spiegazione:
      'La responsabilit\u00e0 segue la disponibilit\u00e0 del veicolo, non la sola intestazione formale. Stessa regola per locatario in leasing.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 196 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C002-04',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il proprietario \u00e8 sempre responsabile dei danni causati dal veicolo, senza eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre / senza eccezioni" cancella la prova liberatoria (circolazione contro volont\u00e0 del proprietario), che la legge prevede esplicitamente.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-05',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il proprietario pu\u00f2 rispondere in solido con il conducente se lo ritiene opportuno.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: la solidariet\u00e0 non \u00e8 una scelta del proprietario, \u00e8 imposta dalla legge. Il "pu\u00f2" trasforma un obbligo legale in una discrezionalit\u00e0 inesistente.',
    pattern_trappola: 'P04',
    livello_difficolta: 2,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-06',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Chi \u00e8 danneggiato da un veicolo \u00e8 tenuto a essere risarcito dal solo conducente, non dal proprietario.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 – Passivo Ingannevole: "\u00e8 tenuto a essere risarcito dal solo..." cancella la solidariet\u00e0 proprietario+conducente. Il danneggiato pu\u00f2 agire contro entrambi (e la compagnia).',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-07',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Luca presta la macchina al cognato che causa un incidente. Il danneggiato pu\u00f2 chiedere il risarcimento sia al cognato sia a Luca.',
    risposta_corretta: true,
    spiegazione:
      'Il prestito consensuale non interrompe la solidariet\u00e0: Luca resta proprietario, risponde in solido con il conducente cognato.',
    scenario_transfer: 'prestito consensuale familiare',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-08',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: a Giulia rubano l\u2019auto; il ladro causa un incidente. Giulia, se prova il furto (denuncia), pu\u00f2 liberarsi dalla responsabilit\u00e0 civile.',
    risposta_corretta: true,
    spiegazione:
      'Furto = circolazione contro la volont\u00e0 del proprietario. La denuncia \u00e8 la prova liberatoria tipica.',
    scenario_transfer: 'veicolo rubato',
    livello_difficolta: 3,
    articolo_cds: 'Art. 2054 c.c.',
  },
  {
    codice: 'QUIZ-ARG23-C002-09',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: veicolo in leasing, incidente provocato dal locatario utilizzatore. Il locatario risponde dei danni come se fosse proprietario.',
    risposta_corretta: true,
    spiegazione:
      'Nel leasing la disponibilit\u00e0 del bene \u00e8 del locatario: \u00e8 lui a rispondere ai sensi dell\u2019art. 196 CdS, in luogo del proprietario formale (la societ\u00e0 di leasing).',
    scenario_transfer: 'veicolo in leasing',
    livello_difficolta: 4,
    articolo_cds: 'Art. 196 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C002-10',
    concetto_codice: 'ARG23-C002',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 la legge stabilisce la responsabilit\u00e0 solidale del proprietario con il conducente? Spiega in termini di tutela del danneggiato.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la solidariet\u00e0 aumenta le probabilit\u00e0 del danneggiato di essere effettivamente risarcito (due patrimoni anzich\u00e9 uno); responsabilizza il proprietario nella scelta di chi mette alla guida; evita che la separazione "chi paga / chi guida" produca vittime non risarcite.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 2054 c.c.',
  },

  // ============================================================
  // ARG23-C003 — RCA obbligatoria
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C003-01',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I veicoli a motore possono circolare su strade ad uso pubblico solo se coperti da assicurazione RCA.',
    risposta_corretta: true,
    spiegazione:
      'Obbligo base dell\u2019art. 193 CdS e dell\u2019art. 122 D.Lgs. 209/2005. Copertura = condizione di circolazione.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C003-02',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019obbligo di copertura RCA grava sul proprietario del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Il proprietario stipula e mantiene attiva la polizza. Per leasing/usufrutto l\u2019obbligo segue chi ha disponibilit\u00e0 giuridica effettiva.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 122 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C003-03',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo la L. 177/2024 l\u2019obbligo di RCA si applica anche ai monopattini elettrici.',
    risposta_corretta: true,
    spiegazione:
      'Estensione della copertura obbligatoria ai monopattini, in linea con il loro equiparamento ai "veicoli" per molte disposizioni del CdS.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS (mod. L. 177/2024)',
  },
  {
    codice: 'QUIZ-ARG23-C003-04',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019obbligo di RCA vale solo per i veicoli che circolano su strade pubbliche extraurbane.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: la copertura vale su tutte le strade ad uso pubblico e aree equiparate (piazzali, parcheggi, cortili accessibili), non solo extraurbane.',
    pattern_trappola: 'P10',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C003-05',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il proprietario pu\u00f2 stipulare l\u2019assicurazione RCA se lo desidera, altrimenti circola assumendosi i rischi.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la RCA non \u00e8 una scelta. \u00c8 condizione legale di circolazione. Senza polizza il veicolo non pu\u00f2 nemmeno muoversi.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C003-06',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'I monopattini elettrici sono in ogni caso esenti dall\u2019obbligo di assicurazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso" ignora l\u2019aggiornamento normativo. Dopo la L. 177/2024 l\u2019obbligo si estende anche ai monopattini elettrici.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C003-07',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: veicolo fermo in un cortile condominiale accessibile a chiunque. Deve essere assicurato anche se non esce dal cortile.',
    risposta_corretta: true,
    spiegazione:
      'Il cortile accessibile \u00e8 "area equiparata a strada pubblica": il veicolo in sosta va comunque coperto da RCA.',
    scenario_transfer: 'cortile condominiale aperto',
    livello_difficolta: 4,
    articolo_cds: 'Art. 122 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C003-08',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: monopattino elettrico usato per andare al lavoro in citt\u00e0. Dal 2024 richiede una polizza RCA dedicata.',
    risposta_corretta: true,
    spiegazione:
      'La L. 177/2024 estende l\u2019obbligo di copertura anche ai monopattini elettrici: servono polizze specifiche, spesso economiche.',
    scenario_transfer: 'monopattino urbano post-riforma',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C003-09',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: veicolo chiuso in un garage privato inaccessibile a estranei, senza targa smontata. Pu\u00f2 essere non assicurato.',
    risposta_corretta: true,
    spiegazione:
      'Area NON accessibile al pubblico = non "equiparata" a strada pubblica. Se non circola e non pu\u00f2 raggiungere area pubblica, l\u2019obbligo di RCA non scatta.',
    scenario_transfer: 'garage privato chiuso',
    livello_difficolta: 4,
    articolo_cds: 'Art. 122 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C003-10',
    concetto_codice: 'ARG23-C003',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 l\u2019obbligo di RCA non si limita alle strade pubbliche ma copre anche "aree ad esse equiparate"? Fornisci due esempi.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la tutela del danneggiato non dipende dal tipo tecnico-amministrativo del suolo ma dall\u2019accessibilit\u00e0 di fatto a terzi. Esempi: cortili condominiali aperti, parcheggi di supermercato, aree di servizio.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 122 D.Lgs. 209/2005',
  },

  // ============================================================
  // ARG23-C004 — Circolazione senza RCA
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C004-01',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Circolare con un veicolo senza copertura RCA comporta sanzione amministrativa e sequestro del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Doppia conseguenza immediata: multa e sequestro. In caso di reiterazione la confisca diventa definitiva.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C004-02',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La reiterazione nel biennio della circolazione senza RCA comporta la confisca del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'Seconda volta entro 2 anni = confisca. \u00c8 la sanzione pi\u00f9 grave sul versante patrimoniale nel settore assicurativo.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C004-03',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Anche per un incidente causato da veicolo non assicurato la vittima pu\u00f2 essere risarcita, attraverso il Fondo di Garanzia per le Vittime della Strada.',
    risposta_corretta: true,
    spiegazione:
      'Meccanismo di tutela dello Stato: il Fondo interviene al posto della compagnia mancante e poi agisce in rivalsa verso il responsabile.',
    livello_difficolta: 3,
    articolo_cds: 'D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C004-04',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'La circolazione senza RCA \u00e8 punita con una semplice ammenda, senza alcun sequestro del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che c\u2019\u00e8 una sanzione pecuniaria, ma NON "senza sequestro": il sequestro \u00e8 una sanzione accessoria automatica.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C004-05',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il Fondo di Garanzia per le Vittime della Strada risarcisce il danneggiato, ovvero rimborsa il conducente non assicurato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": qui "ovvero" sembra spiegare, in realt\u00e0 \u00e8 "oppure" giuridico. Ma nessuna delle due opzioni descrive il Fondo: esso risarcisce la vittima e poi agisce in rivalsa CONTRO il non assicurato, non lo rimborsa.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C004-06',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente di un veicolo non assicurato non pu\u00f2 subire sospensione della patente per tale violazione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto: la sospensione della patente \u00e8 invece prevista come sanzione accessoria, soprattutto dopo la L. 177/2024 che ha rafforzato il regime.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C004-07',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Piero circola con la polizza scaduta da 3 mesi senza saperlo. Viene fermato: sanzione + sequestro del veicolo.',
    risposta_corretta: true,
    spiegazione:
      'La buona fede non esonera dall\u2019obbligo: il veicolo \u00e8 oggettivamente non coperto, scattano le sanzioni. Responsabilit\u00e0 del proprietario verificare la validit\u00e0.',
    scenario_transfer: 'polizza scaduta involontariamente',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C004-08',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un pedone \u00e8 investito da un\u2019auto non assicurata, il conducente fugge. Pu\u00f2 essere risarcito tramite il Fondo di Garanzia.',
    risposta_corretta: true,
    spiegazione:
      'Caso tipico: veicolo non identificato o non assicurato. Il Fondo assicura comunque il risarcimento al pedone.',
    scenario_transfer: 'investimento con veicolo non assicurato e in fuga',
    livello_difficolta: 3,
    articolo_cds: 'D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C004-09',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: a Luisa viene contestata la seconda circolazione senza RCA in 18 mesi. Il veicolo pu\u00f2 essere definitivamente confiscato.',
    risposta_corretta: true,
    spiegazione:
      'Reiterazione entro 2 anni = confisca definitiva del veicolo, oltre alla multa.',
    scenario_transfer: 'recidiva biennale senza RCA',
    livello_difficolta: 3,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C004-10',
    concetto_codice: 'ARG23-C004',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 il legislatore ha previsto il Fondo di Garanzia per le Vittime della Strada, nonostante l\u2019obbligo generale di RCA?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: l\u2019obbligo non elimina i casi di violazione (non assicurati, veicoli non identificati, compagnie fallite, eventi in aree equiparate scoperte). Il Fondo assicura comunque la tutela della vittima, lasciando allo Stato la rivalsa verso il responsabile.',
    livello_difficolta: 4,
    articolo_cds: 'D.Lgs. 209/2005',
  },

  // ============================================================
  // ARG23-C005 — Risarcimento diretto
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C005-01',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Con il risarcimento diretto il danneggiato non colpevole viene risarcito direttamente dalla compagnia del responsabile del sinistro.',
    risposta_corretta: false,
    spiegazione:
      'Falso: nella procedura CARD il danneggiato si rivolge alla PROPRIA compagnia, che liquida per conto di quella del responsabile. \u00c8 proprio il "diretto" di risarcimento diretto.',
    livello_difficolta: 2,
    articolo_cds: 'Artt. 149-150 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-02',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il risarcimento diretto richiede che entrambi i veicoli siano identificati, assicurati e immatricolati in Italia.',
    risposta_corretta: true,
    spiegazione:
      'Requisiti oggettivi: senza uno dei tre si torna alla procedura ordinaria contro la compagnia del responsabile.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-03',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il risarcimento diretto si applica ai sinistri con danni solo materiali o lesioni lievi al conducente entro i limiti previsti.',
    risposta_corretta: true,
    spiegazione:
      'Se le lesioni superano la soglia si esce dalla CARD e si segue la procedura ordinaria.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-04',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Con il risarcimento diretto la compagnia del danneggiato rimborsa il danneggiato, ovvero la compagnia del responsabile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": la frase crea due alternative false. In realt\u00e0 la compagnia paga il proprio assicurato (danneggiato) e POI si rifar\u00e0 sulla compagnia del responsabile. Non \u00e8 un\u2019alternativa, \u00e8 una sequenza.',
    pattern_trappola: 'P15',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-05',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il risarcimento diretto si applica a tutti i sinistri fra veicoli a motore, anche con uno dei due non assicurato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "tutti". La CARD richiede esplicitamente che entrambi i veicoli siano assicurati.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-06',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nel risarcimento diretto il danneggiato \u00e8 sempre tenuto a essere rimborsato dalla compagnia del responsabile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 – Passivo Ingannevole: "\u00e8 tenuto a essere rimborsato..." \u00e8 ambiguo sull\u2019agente. Nella CARD il danneggiato va dalla PROPRIA compagnia, non da quella del responsabile. Il passivo nasconde il vero agente.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-07',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: tamponamento fra due auto italiane assicurate con danni solo materiali, soglia modesta. Anna (tamponata) apre sinistro CARD presso la propria compagnia.',
    risposta_corretta: true,
    spiegazione:
      'Caso-scuola: due veicoli identificati, italiani, assicurati, solo danni materiali = risarcimento diretto applicabile.',
    scenario_transfer: 'tamponamento tipico CARD',
    livello_difficolta: 2,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-08',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Carlo \u00e8 tamponato da un\u2019auto straniera con targa tedesca. Pu\u00f2 richiedere il risarcimento diretto alla propria compagnia italiana.',
    risposta_corretta: false,
    spiegazione:
      'Requisito: entrambi immatricolati in Italia. Con controparte straniera la CARD non si applica; si segue la procedura ordinaria (es. ufficio centrale italiano / compagnia estera).',
    scenario_transfer: 'controparte con targa estera',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-09',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: incidente con gravi lesioni al conducente danneggiato, prognosi superiore ai limiti CARD. Si ricorre alla procedura ordinaria.',
    risposta_corretta: true,
    spiegazione:
      'Quando le lesioni eccedono la soglia prevista, la CARD non si applica e il sinistro segue la procedura ordinaria contro la compagnia del responsabile.',
    scenario_transfer: 'lesioni gravi oltre soglia CARD',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },
  {
    codice: 'QUIZ-ARG23-C005-10',
    concetto_codice: 'ARG23-C005',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca i tre requisiti oggettivi del risarcimento diretto e spiega il vantaggio pratico per il danneggiato.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) veicoli identificati; (2) assicurati; (3) immatricolati in Italia; danni solo materiali o lesioni lievi entro soglia. Vantaggio: interlocutore unico (la propria compagnia), tempi pi\u00f9 brevi, meno burocrazia.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 149 D.Lgs. 209/2005',
  },

  // ============================================================
  // ARG23-C006 — Franchigia, massimale, bonus-malus
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C006-01',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La franchigia \u00e8 la quota di danno che resta a carico dell\u2019assicurato.',
    risposta_corretta: true,
    spiegazione:
      'Ogni sinistro: fino alla franchigia paga l\u2019assicurato, oltre paga la compagnia fino al massimale.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-02',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il massimale \u00e8 la quota di danno che l\u2019assicurato deve sempre anticipare di tasca propria prima dell\u2019intervento della compagnia.',
    risposta_corretta: false,
    spiegazione:
      'Inversione: quella \u00e8 la definizione di FRANCHIGIA. Il massimale \u00e8 invece il tetto massimo risarcito dalla compagnia; oltre quella cifra paga il responsabile.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-03',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nel sistema bonus-malus la classe di merito migliora in assenza di sinistri e peggiora a ogni sinistro con responsabilit\u00e0 principale.',
    risposta_corretta: true,
    spiegazione:
      'Meccanismo premiante/penalizzante: chi non causa incidenti scende in classi con premio pi\u00f9 basso, chi ne causa sale in classi pi\u00f9 costose.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-04',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Franchigia e massimale sono due termini equivalenti per indicare il tetto massimo rimborsabile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 – Coppie Terminologiche Quasi-Sinonime: franchigia e massimale sono OPPOSTI. Franchigia = quota a carico dell\u2019assicurato; massimale = tetto a carico della compagnia.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-05',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nel sistema bonus-malus la classe di merito peggiora in ogni caso, anche per i sinistri subiti senza colpa.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso". La classe peggiora solo per sinistri con responsabilit\u00e0 principale, non per quelli subiti.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-06',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il massimale rappresenta la quota di danno che l\u2019assicurato deve obbligatoriamente sostenere di tasca propria.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che esiste una "quota a carico dell\u2019assicurato", ma quella \u00e8 la FRANCHIGIA, non il massimale. La frase attribuisce la definizione al termine sbagliato.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-07',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: polizza con massimale RCA di 6 milioni di euro, franchigia 300 \u20ac. Danno causato 8.000 \u20ac. L\u2019assicurato paga 300 \u20ac, la compagnia 7.700 \u20ac.',
    risposta_corretta: true,
    spiegazione:
      'Franchigia 300 a carico dell\u2019assicurato; residuo 7.700 a carico della compagnia, ben sotto il massimale. Mnemonic: "franchigia sotto, massimale sopra".',
    scenario_transfer: 'liquidazione con franchigia',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-08',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: sinistro con un danno di 10 milioni di euro, massimale della tua polizza 8 milioni. I 2 milioni eccedenti restano a carico tuo.',
    risposta_corretta: true,
    spiegazione:
      'Oltre il massimale paga il responsabile. Per questo esistono polizze con massimali aumentati.',
    scenario_transfer: 'sinistro oltre massimale',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-09',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: sei in classe 8 di bonus-malus, rimani un anno senza sinistri a tua responsabilit\u00e0. Alla scadenza passerai in classe 7.',
    risposta_corretta: true,
    spiegazione:
      'In assenza di sinistri colposi la classe migliora di un livello all\u2019anno verso le classi pi\u00f9 convenienti.',
    scenario_transfer: 'miglioramento classe',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C006-10',
    concetto_codice: 'ARG23-C006',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Descrivi con un esempio numerico la differenza fra franchigia e massimale, mostrando chi paga cosa su un sinistro di 15.000 \u20ac con franchigia 500 e massimale 1 milione.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: assicurato paga 500 (franchigia), compagnia paga 14.500 (residuo), massimale non impattato (1 milione >> 15.000). Principio: franchigia taglia dal basso, massimale taglia dall\u2019alto.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG23-C007 — Obblighi in incidente con feriti
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C007-01',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'In caso di incidente con danno alle persone il conducente coinvolto deve fermarsi e prestare assistenza ai feriti.',
    risposta_corretta: true,
    spiegazione:
      'Art. 189 CdS: obbligo di arresto, assistenza e attesa degli organi di polizia. Non \u00e8 una scelta, \u00e8 un obbligo penalmente sanzionato.',
    livello_difficolta: 1,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-02',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La fuga dopo un incidente con feriti costituisce un reato autonomo, indipendente dalla responsabilit\u00e0 nell\u2019incidente.',
    risposta_corretta: true,
    spiegazione:
      'Il reato di fuga esiste a prescindere da chi abbia causato il sinistro: colpisce il comportamento successivo al fatto.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-03',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il reato di omissione di soccorso sanziona chi non presta assistenza a un ferito pur avendone la possibilit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Due reati distinti ma spesso congiunti: fuga (andare via) + omissione di soccorso (non aiutare). Reato penale pi\u00f9 grave.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-04',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente coinvolto pu\u00f2 allontanarsi dal luogo dell\u2019incidente se ritiene di non avere responsabilit\u00e0.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: non c\u2019\u00e8 nessun "pu\u00f2". L\u2019obbligo di fermarsi in caso di feriti \u00e8 assoluto, indipendente dalla responsabilit\u00e0 percepita o reale.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-05',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il ferito dell\u2019incidente deve essere soccorso da qualsiasi passante presente; il conducente coinvolto \u00e8 esonerato se qualcun altro interviene.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P16 – Passivo Ingannevole: "deve essere soccorso" cancella l\u2019agente. L\u2019obbligo personale del conducente non si trasferisce a terzi, anche se altri intervengono.',
    pattern_trappola: 'P16',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-06',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'In caso di incidente con danno alle sole cose il conducente deve fermarsi in ogni caso e prestare assistenza alle persone.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso" su "prestare assistenza alle persone" in assenza di feriti. Se non ci sono persone da assistere non c\u2019\u00e8 l\u2019obbligo di soccorso (c\u2019\u00e8 invece l\u2019obbligo di fermarsi per lo scambio dati e per i soli danni materiali).',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-07',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: investi un ciclista che cade e sembra solo contuso. Fermarti, chiamare il 112 e attendere l\u2019ambulanza \u00e8 una scelta, non un obbligo.',
    risposta_corretta: false,
    spiegazione:
      'Anche se le lesioni sembrano lievi, il ciclista \u00e8 un ferito: fermata, assistenza e chiamata ai soccorsi sono obblighi di legge dell\u2019art. 189.',
    scenario_transfer: 'investimento con lesioni lievi',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-08',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un conducente si ferma dopo un tamponamento con feriti, chiama l\u2019ambulanza, resta sul posto e si mette a disposizione delle forze dell\u2019ordine. Sta rispettando l\u2019art. 189 CdS.',
    risposta_corretta: true,
    spiegazione:
      'Comportamento completo richiesto: fermarsi + assistere + avvisare + disposizione per accertamenti. Tutti i passi rispettati.',
    scenario_transfer: 'comportamento conforme art. 189',
    livello_difficolta: 2,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-09',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: dopo un incidente con feriti, un conducente si allontana per paura senza chiamare aiuto. Risponde di fuga e di omissione di soccorso.',
    risposta_corretta: true,
    spiegazione:
      'Doppio reato: fuga (abbandono del luogo) + omissione di soccorso (mancata assistenza al ferito). Si cumulano con l\u2019eventuale responsabilit\u00e0 nell\u2019incidente originario.',
    scenario_transfer: 'fuga e omissione',
    livello_difficolta: 3,
    articolo_cds: 'Art. 189 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C007-10',
    concetto_codice: 'ARG23-C007',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca i quattro obblighi del conducente coinvolto in un incidente con feriti e spiega perch\u00e9 l\u2019ordinamento li configura come REATI e non come semplici illeciti amministrativi.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) fermarsi, (2) prestare assistenza, (3) avvisare gli organi di polizia, (4) mettersi a disposizione per accertamenti. Sono reati perch\u00e9 il bene tutelato \u00e8 la vita/integrit\u00e0 di persone gi\u00e0 ferite: il disvalore \u00e8 incompatibile con una sanzione solo amministrativa.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 189 CdS',
  },

  // ============================================================
  // ARG23-C008 — Omicidio stradale e lesioni stradali
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C008-01',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Chi causa la morte di una persona per colpa, con violazione delle norme sulla circolazione, risponde di omicidio stradale (art. 589-bis c.p.).',
    risposta_corretta: true,
    spiegazione:
      'Reato autonomo introdotto nel 2016: pi\u00f9 grave dell\u2019omicidio colposo comune, con aggravanti specifiche per condotte stradali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 589-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-02',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le lesioni personali gravi o gravissime provocate con violazione delle norme stradali configurano il reato di lesioni stradali (art. 590-bis c.p.).',
    risposta_corretta: true,
    spiegazione:
      'Specularmente all\u2019omicidio: lesioni stradali per i casi gravi/gravissimi. Entrambi i reati hanno aggravanti uguali.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 590-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-03',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'L\u2019ebbrezza oltre 1,5 g/l e gli stupefacenti sono aggravanti dell\u2019omicidio stradale.',
    risposta_corretta: true,
    spiegazione:
      'Aggravanti severe con pene raddoppiate: ebbrezza > 1,5, droga, velocit\u00e0 molto superiore al consentito.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 589-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-04',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019omicidio stradale e le lesioni stradali sono sinonimi, ovvero indicano lo stesso reato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P15 – Trappola Semantica "ovvero": qui "ovvero" vorrebbe spiegare, ma si tratta di DUE reati diversi: omicidio stradale (589-bis) riguarda la morte, lesioni stradali (590-bis) riguardano l\u2019integrit\u00e0 fisica.',
    pattern_trappola: 'P15',
    livello_difficolta: 3,
    articolo_cds: 'Artt. 589-bis, 590-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-05',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le aggravanti dell\u2019omicidio stradale scattano solo per l\u2019ebbrezza con tasso alcolemico oltre 0,5 g/l.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti: 0,5 \u00e8 il limite generale di ebbrezza (fascia amministrativa), NON la soglia aggravante dell\u2019omicidio stradale. Le aggravanti pi\u00f9 severe scattano oltre 1,5 g/l.',
    pattern_trappola: 'P07',
    livello_difficolta: 4,
    articolo_cds: 'Art. 589-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-06',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il reato di omicidio stradale pu\u00f2 essere commesso in ogni caso con dolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso + dolo". L\u2019omicidio stradale \u00e8 un reato COLPOSO per definizione (violazione colposa di norme stradali). Il dolo porta in altra fattispecie (omicidio volontario).',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: 'Art. 589-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-07',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Luca, sobrio e entro i limiti, investe accidentalmente un pedone che muore. Risponde di omicidio stradale ex art. 589-bis.',
    risposta_corretta: true,
    spiegazione:
      'Sufficiente l\u2019imprudenza/negligenza nella guida per integrare il reato. Le aggravanti sono assenti ma il reato base sussiste.',
    scenario_transfer: 'omicidio stradale base',
    livello_difficolta: 3,
    articolo_cds: 'Art. 589-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-08',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: Marta, con tasso 1,8 g/l, causa un incidente con lesioni gravissime. Risponde di lesioni stradali con l\u2019aggravante dell\u2019ebbrezza pi\u00f9 severa.',
    risposta_corretta: true,
    spiegazione:
      'Lesioni stradali aggravate (590-bis + ebbrezza > 1,5 g/l). Pena significativamente maggiorata rispetto al reato base.',
    scenario_transfer: 'lesioni stradali con ebbrezza grave',
    livello_difficolta: 3,
    articolo_cds: 'Art. 590-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-09',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: incidente con sole contusioni lievi guaribili in pochi giorni. Si applica comunque l\u2019art. 590-bis (lesioni stradali).',
    risposta_corretta: false,
    spiegazione:
      'L\u2019art. 590-bis copre solo lesioni GRAVI o GRAVISSIME. Per lesioni lievi si resta nelle fattispecie ordinarie dell\u2019art. 590 c.p., procedibili a querela.',
    scenario_transfer: 'lesioni lievi fuori 590-bis',
    livello_difficolta: 4,
    articolo_cds: 'Art. 590-bis c.p.',
  },
  {
    codice: 'QUIZ-ARG23-C008-10',
    concetto_codice: 'ARG23-C008',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 il legislatore ha introdotto i reati autonomi di omicidio stradale e lesioni stradali anzich\u00e9 mantenerli nelle fattispecie generali di omicidio e lesioni colpose?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: le condotte stradali pi\u00f9 gravi (ebbrezza, droga, alta velocit\u00e0) richiedevano pene pi\u00f9 severe di quelle generali e un set di aggravanti specifiche; la scelta di una fattispecie autonoma ha anche valore simbolico e comunicativo.',
    livello_difficolta: 4,
    articolo_cds: 'Artt. 589-bis, 590-bis c.p.',
  },

  // ============================================================
  // ARG23-C009 — Contrassegno e controlli
  // ============================================================
  {
    codice: 'QUIZ-ARG23-C009-01',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dal 18 ottobre 2015 il contrassegno cartaceo RCA non \u00e8 pi\u00f9 obbligatorio sul parabrezza.',
    risposta_corretta: true,
    spiegazione:
      'Dematerializzazione del controllo: non serve pi\u00f9 esporre il "tagliando"; la verifica avviene telematicamente.',
    livello_difficolta: 2,
    articolo_cds: 'L. 99/2009',
  },
  {
    codice: 'QUIZ-ARG23-C009-02',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La copertura assicurativa viene verificata telematicamente tramite la banca dati ANIA-Motorizzazione.',
    risposta_corretta: true,
    spiegazione:
      'Le forze dell\u2019ordine accedono in tempo reale alla banca dati: basta la targa per sapere se il veicolo \u00e8 assicurato.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C009-03',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il certificato di assicurazione deve comunque essere prodotto al controllo, in formato cartaceo o digitale.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019abolizione del contrassegno non elimina l\u2019obbligo di avere a bordo il certificato: va solo \u201cesibito\u201d e non pi\u00f9 \u201cesposto\u201d.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C009-04',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Dopo l\u2019abolizione del contrassegno il veicolo pu\u00f2 circolare senza essere assicurato, perch\u00e9 il controllo non \u00e8 pi\u00f9 visibile.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che il contrassegno non c\u2019\u00e8 pi\u00f9, ma l\u2019obbligo di copertura \u00e8 intatto. \u00c8 solo cambiato il metodo di verifica (telematico), non l\u2019obbligo sostanziale.',
    pattern_trappola: 'P18',
    livello_difficolta: 2,
    articolo_cds: 'Art. 193 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C009-05',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente scegliere se esibire o no il certificato di assicurazione a un controllo di polizia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: l\u2019esibizione a richiesta dell\u2019agente \u00e8 un obbligo, non una scelta.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C009-06',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il contrassegno cartaceo \u00e8 stato abolito in ogni caso per tutti i veicoli a motore, compresi quelli esteri.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P10 – Condizione Nascosta: l\u2019abolizione riguarda i veicoli immatricolati in Italia. I veicoli esteri seguono la disciplina dello Stato d\u2019origine (alcuni Paesi richiedono ancora la "green card").',
    pattern_trappola: 'P10',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C009-07',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: una pattuglia controlla la tua targa con il terminale di bordo. Lo strumento \u00e8 sufficiente per verificare la copertura RCA.',
    risposta_corretta: true,
    spiegazione:
      'Accesso ANIA-Motorizzazione: il terminale legge la targa e restituisce stato di copertura in tempo reale.',
    scenario_transfer: 'controllo telematico su strada',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C009-08',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: la compagnia ti ha inviato il certificato di assicurazione solo per email. Puoi mostrarlo dallo smartphone in caso di controllo.',
    risposta_corretta: true,
    spiegazione:
      'Formato digitale accettato: l\u2019importante \u00e8 che l\u2019agente possa leggerne i dati identificativi e la validit\u00e0.',
    scenario_transfer: 'certificato digitale su smartphone',
    livello_difficolta: 2,
    articolo_cds: 'Art. 180 CdS',
  },
  {
    codice: 'QUIZ-ARG23-C009-09',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: una targa risulta "non coperta" sul terminale di polizia. La tua compagnia sostiene che la polizza \u00e8 regolare. La verifica telematica prevale automaticamente.',
    risposta_corretta: false,
    spiegazione:
      'La banca dati pu\u00f2 avere disallineamenti. In caso di contestazione, il certificato e la prova della copertura stipulata consentono di chiarire la posizione ed eventualmente annullare il verbale.',
    scenario_transfer: 'disallineamento banca dati',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG23-C009-10',
    concetto_codice: 'ARG23-C009',
    argomento_numero: 23,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega perch\u00e9 l\u2019abolizione del contrassegno cartaceo ha reso il controllo RCA pi\u00f9 efficace anzich\u00e9 meno efficace.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: il contrassegno poteva essere contraffatto o essere aggiornato solo alla scadenza; la banca dati telematica consente di vedere l\u2019effettivo stato di copertura in ogni momento, anche in movimento, su qualunque veicolo a prescindere dalla sua vetrina.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
] as const
