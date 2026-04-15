import type { QuizItem } from '../_types'

// Fonte: docs/research/03 + CdS artt. 7, 142, 157, 179 + normativa Euro.
// Quiz R.O.T.T.A. per argomento 24 — Limitazione dei consumi, rispetto
// dell'ambiente, inquinamento. 8 concetti × 10 item = 80 item.
// Pattern dominanti del batch: P17 (causa-effetto), P18 (verità fuori
// contesto), P12 (libertà apparente), P04 (può/deve), P10 (condizione
// nascosta).

export const ARG24_QUIZ: readonly QuizItem[] = [
  // ============================================================
  // ARG24-C001 — Eco-driving
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C001-01',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Accelerazioni e frenate brusche, se frequenti, sono uno stile di guida pi\u00f9 economico della marcia a velocit\u00e0 costante.',
    risposta_corretta: false,
    spiegazione:
      'Regola base dell\u2019eco-driving: la guida fluida minimizza l\u2019energia sprecata in accelerazioni e riscaldamenti dei freni.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-02',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una guida anticipata, che permette di rilasciare l\u2019acceleratore prima di frenare, riduce il consumo di carburante.',
    risposta_corretta: true,
    spiegazione:
      'Anticipare le decelerazioni significa sfruttare il freno motore e ridurre il ricorso ai freni idraulici.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-03',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Alleggerire il carico non necessario del veicolo contribuisce a ridurre il consumo di carburante.',
    risposta_corretta: true,
    spiegazione:
      'Meno massa da accelerare = meno energia richiesta. Portapacchi vuoti, bagagli, oggetti inutili pesano sui consumi.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-04',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'La guida economica consiste esclusivamente nel procedere a velocit\u00e0 molto bassa in ogni contesto.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: "ridurre la velocit\u00e0 fa risparmiare" \u00e8 vero alle alte velocit\u00e0, ma l\u2019eco-driving NON si riduce a "guidare piano": \u00e8 guida FLUIDA, con marcia alta, andatura costante e anticipazione. Guidare troppo piano in marce basse fa salire i consumi.',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-05',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nella guida economica il conducente pu\u00f2 liberamente tenere la marcia pi\u00f9 bassa possibile per avere pi\u00f9 spinta.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la "marcia bassa per la spinta" \u00e8 il contrario dell\u2019eco-driving, che richiede di inserire RAPIDAMENTE la marcia pi\u00f9 alta possibile compatibilmente con coppia e regime.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-06',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Nella guida economica \u00e8 obbligatorio mantenere sempre il motore al minimo durante la marcia per risparmiare.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto (+ P17): non esiste questo "obbligo". Viaggiare "al minimo" in marcia non \u00e8 possibile: il motore risponde al carico, non all\u2019acceleratore sganciato.',
    pattern_trappola: 'P03',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-07',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in autostrada in salita, inserire una marcia pi\u00f9 bassa per non far calare la velocit\u00e0 pu\u00f2 essere eco-compatibile.',
    risposta_corretta: true,
    spiegazione:
      'L\u2019eco-driving non \u00e8 "marcia massima sempre": in salita il motore sottocoppia consumerebbe di pi\u00f9 con strappi e "knock". Scalare al regime di coppia \u00e8 pi\u00f9 efficiente.',
    scenario_transfer: 'salita autostradale',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-08',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: davanti a un semaforo rosso che vedi da 150 m, rilasci l\u2019acceleratore e arrivi in decelerazione a freno motore. Stai facendo eco-driving.',
    risposta_corretta: true,
    spiegazione:
      'Anticipazione tipica: zero consumo durante la decelerazione con marcia inserita (cut-off iniettori) invece di frenare in ultimo.',
    scenario_transfer: 'avvicinamento anticipato a semaforo',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-09',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in citt\u00e0 acceleri fino a 50, freni per un dosso, riacceleri, rifreni per un altro semaforo. La guida "a dente di sega" \u00e8 pi\u00f9 economica di una marcia costante a 30 km/h.',
    risposta_corretta: false,
    spiegazione:
      'La guida "on/off" \u00e8 il peggiore dei mondi: ogni accelerazione costa, ogni frenata butta via energia cinetica. Una marcia costante a velocit\u00e0 moderata \u00e8 pi\u00f9 economica.',
    scenario_transfer: 'guida a dente di sega urbana',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C001-10',
    concetto_codice: 'ARG24-C001',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca almeno cinque pratiche di eco-driving e spiega il principio fisico comune che le collega.',
    risposta_corretta: true,
    spiegazione:
      'Attese: marcia alta, velocit\u00e0 costante, anticipazione, alleggerimento carico, spegnimento in sosta prolungata, pressione pneumatici corretta. Principio: minimizzare la dissipazione di energia (attriti, calore da freno, resistenza aerodinamica).',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG24-C002 — Manutenzione e consumi
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C002-01',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La pressione dei pneumatici \u00e8 un parametro di comfort che non influisce sul consumo di carburante.',
    risposta_corretta: false,
    spiegazione:
      'Falso: pneumatici sottogonfiati aumentano la resistenza al rotolamento, facendo crescere sensibilmente il consumo. La pressione corretta \u00e8 variabile chiave sia per sicurezza sia per efficienza.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-02',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Filtri dell\u2019aria puliti e olio cambiato regolarmente migliorano consumi ed emissioni.',
    risposta_corretta: true,
    spiegazione:
      'Filtri intasati penalizzano la combustione; olio vecchio aumenta gli attriti interni. Manutenzione = efficienza.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-03',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Una pressione di gonfiaggio troppo bassa aumenta il consumo e accelera l\u2019usura del battistrada.',
    risposta_corretta: true,
    spiegazione:
      'Pneumatico sgonfio = area di contatto pi\u00f9 grande e "sbracciata" = attrito, calore, usura bordi laterali, consumo.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-04',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'I consumi di carburante dipendono dallo stato dell\u2019impianto audio di bordo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: l\u2019audio non \u00e8 una causa dei consumi. La catena reale \u00e8 filtri, olio, pneumatici, allineamento, aerodinamica. L\u2019audio assorbe qualche watt trascurabili.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-05',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Pneumatici sovragonfiati riducono i consumi senza alcun effetto negativo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che la pressione alta riduce l\u2019attrito di rotolamento, MA riduce anche aderenza e area di contatto, con usura centrale del battistrada e rischi per la sicurezza. Non \u00e8 "senza effetto negativo".',
    pattern_trappola: 'P18',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-06',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente decidere se mantenere la pressione degli pneumatici, perch\u00e9 influenza solo il comfort di marcia.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la pressione pneumatici incide su sicurezza, consumi, emissioni e durata. Non \u00e8 una questione di "comfort a piacere".',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-07',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: controlli la pressione delle gomme e trovi 1,8 bar invece dei 2,3 prescritti. Gonfiandole a 2,3 ridurrai consumi e usura.',
    risposta_corretta: true,
    spiegazione:
      'Pressione sotto il prescritto di 0,5 bar \u00e8 gi\u00e0 sufficiente a far lievitare l\u2019attrito di rotolamento. Riportarle al giusto valore \u00e8 beneficio immediato.',
    scenario_transfer: 'correzione pressione pneumatici',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-08',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: filtro aria molto sporco. Non incide sul consumo perch\u00e9 tanto il motore aspira quello che serve.',
    risposta_corretta: false,
    spiegazione:
      'Filtro intasato = miscela alterata = maggiore consumo specifico e peggiori emissioni. La cura manutentiva \u00e8 efficace.',
    scenario_transfer: 'filtro aria intasato',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-09',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: dopo un forte urto a un marciapiede noti consumo di pneumatici a "bordo" irregolare. Pu\u00f2 dipendere da un disallineamento delle ruote.',
    risposta_corretta: true,
    spiegazione:
      'Disallineamento (convergenza) fa usurare in modo asimmetrico il battistrada e aumenta l\u2019attrito di rotolamento = consumo e usura.',
    scenario_transfer: 'usura irregolare pneumatici',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C002-10',
    concetto_codice: 'ARG24-C002',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Indica tre interventi di manutenzione ordinaria che influenzano direttamente consumi ed emissioni, spiegando per ciascuno il meccanismo fisico.',
    risposta_corretta: true,
    spiegazione:
      'Attesi: (1) filtro aria pulito (combustione ottimale); (2) olio motore cambiato (riduzione attriti interni); (3) pressione pneumatici corretta (minima resistenza al rotolamento). Meccanismo comune: minimizzare le perdite di energia del sistema.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG24-C003 — Marcia alta e regime motore
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C003-01',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A parit\u00e0 di velocit\u00e0, una marcia pi\u00f9 alta fa girare il motore a regime pi\u00f9 alto e aumenta il consumo specifico.',
    risposta_corretta: false,
    spiegazione:
      'Marcia alta = giri bassi = meno cicli di combustione per distanza = meno carburante bruciato a pari percorso.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-02',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Guidare con marce basse a velocit\u00e0 sostenuta fa salire il regime e il consumo senza benefici sulla accelerazione.',
    risposta_corretta: true,
    spiegazione:
      'A velocit\u00e0 di crociera, tenere marce basse "urla" il motore e brucia carburante inutilmente: il veicolo non accelera pi\u00f9.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-03',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il cambio serve a variare il rapporto di trasmissione fra motore e ruote: marce alte = bassa coppia, alta velocit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Principio base del cambio. Le marce basse moltiplicano la coppia (spunto), le alte moltiplicano la velocit\u00e0 finale.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-04',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il consumo di carburante dipende dal colore della carrozzeria del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: il colore non \u00e8 una causa dei consumi. Il consumo dipende da massa, aerodinamica, regime, marcia, aderenza, accessori. Il colore al pi\u00f9 influenza la temperatura interna in sosta.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-05',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 invece che deve scegliere una marcia adatta al regime del motore.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P04 – Scambio Potere \u2194 Dovere: la scelta della marcia appropriata \u00e8 un dovere di buona conduzione, non un "pu\u00f2". Una marcia inadeguata danneggia motore e trasmissione oltre a consumare di pi\u00f9.',
    pattern_trappola: 'P04',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-06',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'A parit\u00e0 di velocit\u00e0, la marcia alta consuma sempre meno in ogni situazione di guida.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre / ogni situazione". In salita ripida, con marcia troppo alta, il motore va "sottocoppia" e consuma DI PI\u00d9 di una marcia inferiore che tiene il regime in zona di coppia ottimale.',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-07',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in autostrada a 130 km/h con cambio manuale, usare la 6a marcia \u00e8 preferibile alla 5a per consumi.',
    risposta_corretta: true,
    spiegazione:
      'In autostrada a velocit\u00e0 di crociera la marcia pi\u00f9 alta disponibile mantiene i giri pi\u00f9 bassi riducendo consumi.',
    scenario_transfer: 'crociera autostradale',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-08',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: salita ripida a 60 km/h in 5a marcia, il motore \u00e8 sotto i 1.400 giri e "strappa". Scalare in 4a \u00e8 pi\u00f9 economico.',
    risposta_corretta: true,
    spiegazione:
      'Quando il motore \u00e8 sottocoppia il consumo specifico peggiora e le vibrazioni danneggiano meccanica. Scalare \u00e8 pi\u00f9 efficiente.',
    scenario_transfer: 'salita in sottocoppia',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-09',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: partenza da fermo con 3a marcia invece che con 1a. Risparmia carburante perch\u00e9 la marcia \u00e8 pi\u00f9 alta.',
    risposta_corretta: false,
    spiegazione:
      'In partenza la 1a \u00e8 necessaria per vincere l\u2019inerzia e mettere in coppia il motore. Partire in 3a fa strappare il motore, logora frizione e consuma di pi\u00f9.',
    scenario_transfer: 'partenza in marcia troppo alta',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C003-10',
    concetto_codice: 'ARG24-C003',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega perch\u00e9 la regola "marcia alta = meno consumo" non \u00e8 assoluta, con un controesempio preciso.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la regola vale quando il motore \u00e8 in zona di coppia utile. Sotto una certa soglia di giri (tipicamente 1.300-1.500 rpm) il motore va "sottocoppia", vibra, brucia di pi\u00f9 per produrre la stessa trazione. Esempio: salita ripida in 6a a 60 km/h, 1.100 rpm = consumo peggiore di 4a/5a.',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG24-C004 — Velocità, aerodinamica, consumi
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C004-01',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La resistenza aerodinamica dell\u2019aria cresce in modo perfettamente lineare con la velocit\u00e0.',
    risposta_corretta: false,
    spiegazione:
      'Falso: la crescita \u00e8 QUADRATICA (F \u221d v\u00b2), non lineare. Raddoppiare la velocit\u00e0 quadruplica la resistenza dell\u2019aria a parit\u00e0 di superficie frontale.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-02',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'A velocit\u00e0 elevate in autostrada il consumo di carburante pu\u00f2 crescere in modo pi\u00f9 che lineare rispetto alla velocit\u00e0.',
    risposta_corretta: true,
    spiegazione:
      'Ci\u00f2 che cresce quadraticamente \u00e8 la resistenza; il consumo segue a sua volta un andamento pi\u00f9 che lineare.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-03',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Portapacchi e accessori esterni penalizzano in modo apprezzabile l\u2019aerodinamica e quindi i consumi.',
    risposta_corretta: true,
    spiegazione:
      'Ogni superficie aggiuntiva aumenta il coefficiente di resistenza. Smontare box e portabici quando non servono \u00e8 buona pratica.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-04',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Raddoppiando la velocit\u00e0 il consumo di carburante resta invariato, perch\u00e9 il percorso viene coperto in met\u00e0 tempo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: il ragionamento "tempo/2 \u2192 consumo/2" ignora la causa-effetto reale. Il consumo per chilometro AUMENTA pi\u00f9 che proporzionalmente con la velocit\u00e0 a causa della resistenza aerodinamica quadratica.',
    pattern_trappola: 'P17',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-05',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019aerodinamica influenza i consumi solo in autostrada, non sulle strade urbane.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che l\u2019effetto \u00e8 pi\u00f9 marcato ad alta velocit\u00e0, MA anche a velocit\u00e0 urbane un portapacchi carico pesa (non quadraticamente, ma linearmente). La differenza \u00e8 quantitativa, non qualitativa.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-06',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il consumo di carburante a 90 km/h \u00e8 identico a quello a 130 km/h.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P07 – Numeri Quasi-Giusti "di segno opposto": i due valori non sono equivalenti. Passare da 90 a 130 km/h raddoppia circa la potenza richiesta (resistenza aerodinamica cresce da v\u00b2).',
    pattern_trappola: 'P07',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-07',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: viaggio estivo con portabici montato ma senza biciclette. Per risparmiare dovresti smontarlo.',
    risposta_corretta: true,
    spiegazione:
      'Il portabici vuoto pesa poco ma ha superficie frontale: aumenta resistenza aerodinamica e consumo. Smontato = consumo pi\u00f9 basso.',
    scenario_transfer: 'portabici vuoto in autostrada',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-08',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: in autostrada scegli di mantenere 110 km/h anzich\u00e9 130 km/h. Il tuo consumo per chilometro scende apprezzabilmente.',
    risposta_corretta: true,
    spiegazione:
      'Passare da 130 a 110 riduce la resistenza aerodinamica di circa il 28% (1.30\u00b2 vs 1.10\u00b2), con risparmio di consumo misurabile a parit\u00e0 di distanza.',
    scenario_transfer: 'riduzione velocit\u00e0 di crociera',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-09',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: guidi con i finestrini aperti a 120 km/h con aria condizionata spenta. Risparmi carburante rispetto a guidare con aria condizionata a finestrini chiusi.',
    risposta_corretta: false,
    spiegazione:
      'A velocit\u00e0 autostradali i finestrini aperti alterano l\u2019aerodinamica pi\u00f9 del consumo dell\u2019A/C. Sopra ~80 km/h l\u2019aria condizionata a finestrini chiusi \u00e8 pi\u00f9 efficiente.',
    scenario_transfer: 'finestrini aperti vs aria condizionata',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C004-10',
    concetto_codice: 'ARG24-C004',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Spiega perch\u00e9 il consumo cresce pi\u00f9 che linearmente con la velocit\u00e0 in autostrada, partendo dalla legge della resistenza aerodinamica.',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la resistenza dell\u2019aria cresce col quadrato della velocit\u00e0 (F \u221d v\u00b2); la potenza necessaria per vincerla cresce col cubo (P \u221d v\u00b3). Il consumo riflette questa potenza, attenuato da efficienza del motore. Il risultato netto: consumo per km che cresce pi\u00f9 che proporzionalmente alla velocit\u00e0.',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG24-C005 — Emissioni e classi Euro
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C005-01',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Il monossido di carbonio (CO) \u00e8 una delle principali emissioni nocive dei motori a combustione.',
    risposta_corretta: true,
    spiegazione:
      'CO \u00e8 prodotto da combustione incompleta; tossico per l\u2019uomo. I catalizzatori riducono drasticamente le emissioni di CO.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-02',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La classificazione Euro stabilisce i limiti massimi ammessi alle emissioni dei veicoli omologati.',
    risposta_corretta: true,
    spiegazione:
      'Le classi Euro (da 0 a 6/7) fissano i tetti per CO, NOx, HC, PM. Ogni classe \u00e8 pi\u00f9 severa della precedente.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-03',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La CO2 non \u00e8 un inquinante tossico diretto, ma \u00e8 il principale gas serra prodotto dai motori a combustione.',
    risposta_corretta: true,
    spiegazione:
      'CO2 non attacca la salute umana direttamente (non \u00e8 tossica) ma contribuisce al riscaldamento globale: \u00e8 regolata separatamente dagli altri inquinanti.',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-04',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Gli ossidi di azoto (NOx) sono gli unici inquinanti dei veicoli a benzina; il particolato riguarda solo i diesel.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che i diesel storici producono molto pi\u00f9 PM, ma i moderni motori a benzina (soprattutto GDI) producono anch\u2019essi particolato. I NOx non sono esclusivi del benzina.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-05',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le emissioni dipendono esclusivamente dalla marca del veicolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: la marca \u00e8 solo un indicatore indiretto. Le emissioni reali dipendono da tecnologia del motore, classe Euro, manutenzione, carburante, stile di guida. Due modelli della stessa marca possono avere emissioni molto diverse.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-06',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'La classe Euro di un veicolo non ha rilevanza per accedere alle ZTL delle grandi citt\u00e0 italiane.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P03 – Scambio Obbligo \u2194 Divieto con negazione: l\u2019accesso a molte ZTL e aree ambientali \u00e8 proprio condizionato dalla classe Euro minima ammessa. Le classi pi\u00f9 vecchie sono bloccate.',
    pattern_trappola: 'P03',
    livello_difficolta: 2,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C005-07',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: auto diesel Euro 3. L\u2019accesso \u00e8 spesso vietato nelle aree ambientali delle grandi citt\u00e0 italiane.',
    risposta_corretta: true,
    spiegazione:
      'Le classi pi\u00f9 datate (Euro 0-3 diesel) sono le pi\u00f9 limitate da ordinanze comunali per la qualit\u00e0 dell\u2019aria.',
    scenario_transfer: 'diesel Euro 3 in citt\u00e0',
    livello_difficolta: 3,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C005-08',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un\u2019auto elettrica pura non produce CO, NOx, HC o PM localmente durante la marcia.',
    risposta_corretta: true,
    spiegazione:
      'Assenza di motore a combustione = nessuna emissione locale. Le emissioni sono a monte (produzione elettricit\u00e0) o indirette (usura pneumatici/freni produce un po\u2019 di PM).',
    scenario_transfer: 'elettrica pura in marcia',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-09',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: confronto fra un Euro 6 ben mantenuto e un Euro 4 trascurato. L\u2019Euro 4 emette comunque meno inquinanti locali grazie all\u2019et\u00e0.',
    risposta_corretta: false,
    spiegazione:
      'La logica \u00e8 rovesciata: l\u2019Euro 6 ha limiti pi\u00f9 severi di legge, quindi emette strutturalmente meno inquinanti, e la buona manutenzione preserva questi valori. L\u2019Euro 4 parte da limiti pi\u00f9 permissivi e la trascuratezza peggiora ulteriormente.',
    scenario_transfer: 'confronto Euro 6 vs Euro 4',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C005-10',
    concetto_codice: 'ARG24-C005',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Elenca almeno quattro inquinanti tipici delle combustioni interne e spiega la differenza di regolazione fra inquinanti "sanitari" (CO, NOx, PM) e gas serra (CO2).',
    risposta_corretta: true,
    spiegazione:
      'Attesi: CO (tossico), NOx (irritanti, smog), HC (reattivi), PM (particolato fine), CO2 (gas serra). I primi 4 sono regolati dalle classi Euro per impatto sanitario diretto; la CO2 \u00e8 regolata a parte (target flotta CAFE, etichette consumi) per il suo ruolo sul clima.',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },

  // ============================================================
  // ARG24-C006 — ZTL e aree ambientali
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C006-01',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Le Zone a Traffico Limitato (ZTL) sono istituite con provvedimento del sindaco e segnalate dall\u2019apposito segnale di divieto.',
    risposta_corretta: true,
    spiegazione:
      'Art. 7 CdS: le ZTL sono strumento locale (provvedimento comunale) con segnaletica dedicata. Non sono imposte a livello nazionale.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-02',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Nelle ZTL sono ammessi i veicoli autorizzati o appartenenti alle categorie elencate dal provvedimento (residenti, disabili, servizi pubblici).',
    risposta_corretta: true,
    spiegazione:
      'Il provvedimento del Comune definisce categorie e orari; tutto il resto \u00e8 escluso pena sanzione.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-03',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Dopo la L. 177/2024 le violazioni ripetute nella stessa ZTL nell\u2019arco dello stesso giorno sono sanzionate una volta sola.',
    risposta_corretta: true,
    spiegazione:
      'Novit\u00e0 della riforma: niente moltiplicazione automatica di multe sullo stesso giorno; la singola violazione copre la giornata.',
    livello_difficolta: 3,
    articolo_cds: 'Art. 198 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-04',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Le ZTL sono istituite con provvedimento del Presidente della Regione.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P13 – Coppie Terminologiche Quasi-Sinonime: sindaco vs Presidente della Regione sono livelli amministrativi diversi. Le ZTL sono prerogativa COMUNALE.',
    pattern_trappola: 'P13',
    livello_difficolta: 3,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-05',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'L\u2019accesso alle ZTL \u00e8 sempre vietato a qualsiasi veicolo privato senza eccezioni.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre / qualsiasi / senza eccezioni". I provvedimenti prevedono categorie ammesse (residenti, disabili, servizi). Le ZTL non sono un blocco totale.',
    pattern_trappola: 'P01',
    livello_difficolta: 2,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-06',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 entrare liberamente in una ZTL se ha bisogno di fare la spesa nel centro storico.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: "fare la spesa" non \u00e8 una categoria ammessa. Servono i requisiti previsti dal provvedimento (residenza, autorizzazione, et\u00e0, tipologia veicolo).',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-07',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: entri per errore in una ZTL attiva. Trenta minuti dopo vi rientri per cercare parcheggio. Dopo la riforma del 2024 subisci una sola sanzione.',
    risposta_corretta: true,
    spiegazione:
      'Pi\u00f9 ingressi nella stessa ZTL nello stesso giorno: sanzione unica a partire dalla L. 177/2024. Resta per\u00f2 l\u2019eventuale verbalizzazione di tutti i transiti.',
    scenario_transfer: 'rientri multipli in ZTL',
    livello_difficolta: 3,
    articolo_cds: 'Art. 198 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-08',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: sei disabile con contrassegno CUDE valido. Puoi accedere alle ZTL italiane anche quando la tua auto non \u00e8 quella registrata, a determinate condizioni.',
    risposta_corretta: true,
    spiegazione:
      'Il registro CUDE nazionale consente ai disabili di accedere con il proprio contrassegno nelle ZTL, previo rispetto delle regole locali di registrazione.',
    scenario_transfer: 'CUDE e ZTL',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C006-09',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: ZTL con fascia oraria solo diurna 7-20. Alle 22 puoi transitare senza autorizzazione.',
    risposta_corretta: true,
    spiegazione:
      'Fuori dalla fascia di attivit\u00e0 la ZTL non si applica: la circolazione \u00e8 libera.',
    scenario_transfer: 'ZTL fuori fascia oraria',
    livello_difficolta: 2,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C006-10',
    concetto_codice: 'ARG24-C006',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Qual \u00e8 la differenza fra "ZTL" e "area ambientale" e perch\u00e9 il legislatore ha previsto entrambi gli strumenti?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: la ZTL limita il numero di veicoli (tutela storica/estetica/mobilit\u00e0); l\u2019area ambientale limita per classi Euro (tutela qualit\u00e0 dell\u2019aria). Possono coesistere: un veicolo Euro 6 pu\u00f2 entrare nell\u2019area ambientale ma non nella ZTL, e viceversa.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 7 CdS',
  },

  // ============================================================
  // ARG24-C007 — Motore al minimo a veicolo fermo
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C007-01',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Durante le soste prolungate \u00e8 vietato tenere il motore acceso per alimentare l\u2019impianto di climatizzazione.',
    risposta_corretta: true,
    spiegazione:
      'Art. 157 c.7-bis CdS: divieto esplicito, per tutelare aria e rumore. Salvo ipotesi specifiche tecniche.',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C007-02',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'Tenere il motore acceso in sosta prolungata consuma carburante, inquina e produce rumore inutilmente.',
    risposta_corretta: true,
    spiegazione:
      'Il motore al minimo consuma comunque qualche centilitro di carburante al minuto e produce emissioni senza alcuna funzione utile.',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C007-03',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'La buona pratica suggerisce di spegnere il motore per soste superiori a qualche decina di secondi.',
    risposta_corretta: true,
    spiegazione:
      'Moderne auto con start/stop lo fanno automaticamente; per le altre, spegnere dopo ~30-60 secondi di sosta \u00e8 gi\u00e0 un risparmio.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C007-04',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il conducente pu\u00f2 liberamente tenere il motore al minimo in sosta prolungata per mantenere fresca l\u2019abitacolo.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P12 – Libert\u00e0 Apparente: la norma (art. 157 c.7-bis) vieta proprio questo. Non c\u2019\u00e8 "libera scelta" del conducente.',
    pattern_trappola: 'P12',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C007-05',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Il motore al minimo non consuma carburante, perch\u00e9 non si muove nulla.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: \u00e8 vero che il veicolo non si sposta, ma il motore compie comunque cicli di combustione per restare acceso. Consumo minimo ma non zero.',
    pattern_trappola: 'P17',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C007-06',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Durante le soste in prossimit\u00e0 di semafori il motore deve sempre essere spento.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "sempre". La norma vieta il motore acceso in soste PROLUNGATE; la sosta breve al semaforo non rientra, a meno che non ci sia sistema start/stop che agisce comunque.',
    pattern_trappola: 'P01',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C007-07',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: aspetti in auto qualcuno per 20 minuti in un parcheggio, con motore acceso per tenere l\u2019aria condizionata. Stai violando l\u2019art. 157 CdS.',
    risposta_corretta: true,
    spiegazione:
      '20 minuti \u00e8 sosta prolungata. Motore acceso per climatizzazione = violazione con sanzione amministrativa.',
    scenario_transfer: 'attesa prolungata con A/C',
    livello_difficolta: 3,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C007-08',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: al semaforo rosso per 15 secondi tieni il motore acceso. Non stai violando l\u2019art. 157.',
    risposta_corretta: true,
    spiegazione:
      '15 secondi non sono "sosta prolungata". Tipicamente lo start/stop interviene dopo qualche secondo; senza start/stop non c\u2019\u00e8 infrazione.',
    scenario_transfer: 'sosta breve al semaforo',
    livello_difficolta: 2,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C007-09',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un camion frigorifero in sosta tiene acceso il motore per alimentare la cella di refrigerazione. Pu\u00f2 essere esentato in casi specifici.',
    risposta_corretta: true,
    spiegazione:
      'Il divieto del c.7-bis art. 157 contiene eccezioni per necessit\u00e0 tecniche (refrigerazione). L\u2019esenzione non \u00e8 libera ma prevista da normativa specifica.',
    scenario_transfer: 'camion frigorifero',
    livello_difficolta: 4,
    articolo_cds: 'Art. 157 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C007-10',
    concetto_codice: 'ARG24-C007',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Perch\u00e9 il legislatore ha previsto un divieto specifico (art. 157 c.7-bis) per il motore al minimo in sosta, anzich\u00e9 lasciare la questione alla sola coscienza del conducente?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: esiste un effetto cumulativo sull\u2019aria urbana e sul rumore che rende la singola infrazione "innocua" ma il fenomeno aggregato dannoso. Il divieto esplicito consente di sanzionare il comportamento a prescindere dall\u2019evidenza di danno individuale.',
    livello_difficolta: 4,
    articolo_cds: 'Art. 157 CdS',
  },

  // ============================================================
  // ARG24-C008 — Ibridi, elettrici, GPL/metano/idrogeno
  // ============================================================
  {
    codice: 'QUIZ-ARG24-C008-01',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I veicoli ibridi combinano un motore a combustione interna con uno o pi\u00f9 motori elettrici.',
    risposta_corretta: true,
    spiegazione:
      'Architettura "ibrida": il motore elettrico aiuta in accelerazione/crociera e recupera energia in frenata (frenata rigenerativa).',
    livello_difficolta: 1,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-02',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I veicoli elettrici puri si muovono solo con energia elettrica e non producono emissioni locali durante la marcia.',
    risposta_corretta: true,
    spiegazione:
      'Nessun motore a combustione a bordo = zero emissioni allo scarico. Le emissioni indirette sono nella produzione dell\u2019energia e dalla pneumatica/freni.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-03',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'riconosci',
    testo_domanda:
      'I veicoli a GPL e metano emettono generalmente meno inquinanti rispetto ai carburanti tradizionali.',
    risposta_corretta: true,
    spiegazione:
      'Carburanti gassosi = combustione pi\u00f9 "pulita", meno particolato, meno HC incombusti rispetto a benzina/gasolio.',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-04',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'I veicoli ibridi non utilizzano mai il motore a combustione interna, per questo consumano meno carburante.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P17 – Causa-Effetto Invertita: la ragione del risparmio negli ibridi NON \u00e8 "niente motore termico", ma \u00e8 l\u2019integrazione dei due motori + recupero in frenata. Il termico c\u2019\u00e8 ed \u00e8 attivo in larga parte della marcia.',
    pattern_trappola: 'P17',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-05',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'Un veicolo elettrico puro non produce in ogni caso alcuna emissione dannosa nel suo intero ciclo di vita.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P01 – Quantificatore Universale Infilato: "in ogni caso + nessuna nel ciclo di vita". Le emissioni ci sono: produzione dell\u2019elettricit\u00e0 (se da fonti fossili), produzione batterie, smaltimento. Il bilancio \u00e8 migliore ma non \u00e8 "zero totale".',
    pattern_trappola: 'P01',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-06',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'trappola',
    testo_domanda:
      'I veicoli a idrogeno sono equiparati ai veicoli a benzina perch\u00e9 utilizzano comunque un combustibile liquido pressurizzato.',
    risposta_corretta: false,
    spiegazione:
      'Hai visto P18 – Verit\u00e0 Parziale Fuori Contesto: \u00e8 vero che l\u2019idrogeno va pressurizzato, ma NON \u00e8 liquido ("gas pressurizzato") e NON \u00e8 equiparato ai benzina: funzionano con celle a combustibile (come elettrici) o motori a combustione di H2 con emissione di sola acqua.',
    pattern_trappola: 'P18',
    livello_difficolta: 4,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-07',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: auto ibrida in sosta al semaforo. Il motore termico si spegne automaticamente e si riavvia alla ripartenza: \u00e8 funzionamento normale.',
    risposta_corretta: true,
    spiegazione:
      'Funzione tipica degli ibridi: in "EV mode" / arresto il termico si spegne, il sistema \u00e8 alimentato dalla batteria. Riparte alla richiesta di coppia.',
    scenario_transfer: 'stop urbano su ibrido',
    livello_difficolta: 2,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-08',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: un\u2019auto elettrica urbana su un percorso con molte frenate pu\u00f2 sfruttare la frenata rigenerativa per ricaricare parzialmente la batteria.',
    risposta_corretta: true,
    spiegazione:
      'Il motore elettrico in frenata diventa generatore: riconverte l\u2019energia cinetica in energia elettrica (parzialmente). \u00c8 uno dei vantaggi principali dell\u2019elettrico in citt\u00e0.',
    scenario_transfer: 'frenata rigenerativa urbana',
    livello_difficolta: 3,
    articolo_cds: undefined,
  },
  {
    codice: 'QUIZ-ARG24-C008-09',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'trasferisci',
    testo_domanda:
      'Scenario: auto a metano in ZTL con limiti alle sole classi Euro basse. Il metano non garantisce di per s\u00e9 l\u2019accesso se la classe Euro del veicolo non \u00e8 ammessa.',
    risposta_corretta: true,
    spiegazione:
      'Il tipo di carburante non basta: \u00e8 la combinazione carburante + classe Euro a definire l\u2019ammissibilit\u00e0 in ZTL e aree ambientali.',
    scenario_transfer: 'metano vs classe Euro',
    livello_difficolta: 4,
    articolo_cds: 'Art. 7 CdS',
  },
  {
    codice: 'QUIZ-ARG24-C008-10',
    concetto_codice: 'ARG24-C008',
    argomento_numero: 24,
    fase_rotta: 'origina',
    testo_domanda:
      'Confronta ibrido, elettrico puro e GPL/metano in termini di emissioni LOCALI (durante la marcia) ed emissioni GLOBALI (ciclo di vita). Quando ciascuna soluzione conviene di pi\u00f9?',
    risposta_corretta: true,
    spiegazione:
      'Atteso: elettrico puro \u2192 zero emissioni locali, emissioni globali dipendono dal mix elettrico; ibrido \u2192 emissioni locali ridotte, globali intermedie; GPL/metano \u2192 emissioni locali inferiori ai benzina ma comunque presenti. Il "meglio" dipende da uso (urbano vs autostradale), origine energia e infrastruttura di ricarica/rifornimento.',
    livello_difficolta: 5,
    articolo_cds: undefined,
  },
] as const
