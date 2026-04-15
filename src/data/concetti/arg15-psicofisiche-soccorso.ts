import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 186, 186-bis, 187 + L. 177/2024 +
// DM alcolock 2/7/2025 (GU n.171 del 25/7/2025, in vigore 26/07/2025) +
// Circolare Ministero Interno 11/04/2025 prot. 11280 + manualistica
// ministeriale sul primo soccorso.
// 12 concetti atomici per l'argomento 15 — Guida in condizioni psicofisiche
// alterate e primo soccorso.
//
// NORMATIVA CRITICA POST L. 177/2024:
// - Art. 186: alcolock obbligatorio per condannati, codici unionali 68 e 69;
//   valori sanzione espressi in fasce come da linee guida docs/research/02.
// - Art. 187: eliminato il requisito dello "stato di alterazione"; è
//   sufficiente la positività al principio attivo con nesso cronologico
//   (no metaboliti inattivi).
// - DM 2/7/2025: alcolock operativo dal 26/07/2025.

export const ARG15_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG15-C001',
    argomento_numero: 15,
    titolo: 'Condizioni psicofisiche per la guida',
    descrizione:
      'Per guidare in sicurezza sono necessarie condizioni psicofisiche integre: vigilanza, attenzione, riflessi, campo visivo, udito e capacità di elaborare informazioni. Stanchezza, sonnolenza, stress, farmaci, malattie, alcol e stupefacenti ne riducono le prestazioni e aumentano il rischio di incidente.',
    regola_testo:
      'Il conducente deve trovarsi in condizioni psicofisiche idonee a guidare in modo sicuro: non può mettersi alla guida quando per stanchezza, malessere o assunzione di sostanze ha ridotte le proprie capacità di attenzione, percezione e reazione.',
    articolo_cds: 'Art. 140 CdS',
    livello_difficolta: 1,
    tag: ['idoneita-psicofisica', 'attenzione', 'prudenza'],
  },
  {
    codice: 'ARG15-C002',
    argomento_numero: 15,
    titolo: 'Effetti dell\u2019alcol sulla guida',
    descrizione:
      'L\u2019alcol agisce sul sistema nervoso centrale riducendo riflessi, allungando i tempi di reazione, restringendo il campo visivo (effetto tunnel), compromettendo il giudizio e la percezione del rischio. Anche piccole quantità peggiorano le prestazioni, con effetto progressivo al crescere del tasso alcolemico.',
    regola_testo:
      'L\u2019assunzione di alcol, anche in quantità modeste, riduce le capacità di guida: allunga i tempi di reazione, restringe il campo visivo, altera la percezione delle distanze e del rischio, compromette la capacità di giudizio.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['alcol', 'effetti', 'tempi-reazione', 'campo-visivo'],
  },
  {
    codice: 'ARG15-C003',
    argomento_numero: 15,
    titolo: 'Limite alcolemico generale 0,5 g/l',
    descrizione:
      'Il limite generale di alcol nel sangue per chi si mette alla guida è di 0,5 g/l. Oltre questa soglia si configura la fattispecie della guida in stato di ebbrezza. Il livello dipende dalla quantità ingerita, dal peso, dal sesso, dal cibo e dal tempo trascorso: non esiste una regola sicura basata sul solo numero di bicchieri.',
    regola_testo:
      'È vietato guidare con un tasso alcolemico superiore a 0,5 g/l; il superamento di tale soglia integra la guida in stato di ebbrezza ai sensi dell\u2019art. 186 CdS.',
    articolo_cds: 'Art. 186 co. 2 CdS',
    livello_difficolta: 1,
    tag: ['limite-alcol', '0-5-gl', 'ebbrezza'],
  },
  {
    codice: 'ARG15-C004',
    argomento_numero: 15,
    titolo: 'Tasso zero: neopatentati e conducenti professionali',
    descrizione:
      'Per i neopatentati nei primi tre anni dal conseguimento della patente B e per i conducenti professionali (taxi, NCC, bus, camion) il limite è 0,0 g/l: qualunque assunzione di alcol è incompatibile con la guida. La Legge 177/2024 ha portato a 3 anni la durata del regime neopatentati.',
    regola_testo:
      'I conducenti di età inferiore a 21 anni, i neopatentati nei primi tre anni e i conducenti professionali devono mantenere un tasso alcolemico pari a zero; per loro è vietato assumere qualunque quantità di alcol prima di mettersi alla guida.',
    articolo_cds: 'Art. 186-bis CdS',
    livello_difficolta: 2,
    tag: ['neopatentati', 'professionali', '0-0-gl', 'L177-2024', '3-anni'],
  },
  {
    codice: 'ARG15-C005',
    argomento_numero: 15,
    titolo: 'Fasce di sanzione per l\u2019ebbrezza',
    descrizione:
      'L\u2019art. 186 distingue tre fasce crescenti: tasso oltre 0,5 e fino a 0,8 g/l (sanzione amministrativa, decurtazione punti, sospensione patente); oltre 0,8 e fino a 1,5 g/l (reato, ammenda, arresto e sospensione più lunga); oltre 1,5 g/l (reato aggravato, arresto, sospensione prolungata, confisca del veicolo e revoca della patente nei casi previsti).',
    regola_testo:
      'La sanzione per guida in stato di ebbrezza è strutturata in tre fasce: oltre 0,5 g/l fino a 0,8 g/l (illecito amministrativo), oltre 0,8 g/l fino a 1,5 g/l (reato), oltre 1,5 g/l (reato con aggravanti, confisca e, nei casi previsti, revoca della patente).',
    articolo_cds: 'Art. 186 co. 2 CdS',
    livello_difficolta: 3,
    tag: ['fasce-sanzione', 'amministrativa', 'penale', 'revoca'],
  },
  {
    codice: 'ARG15-C006',
    argomento_numero: 15,
    titolo: 'Alcolock e codici unionali 68-69',
    descrizione:
      'La Legge 177/2024, con decreto attuativo DM 2/7/2025 in vigore dal 26 luglio 2025, rende obbligatoria l\u2019installazione dell\u2019alcolock (dispositivo che impedisce l\u2019avvio del motore se il conducente è positivo all\u2019etilometro) per i condannati per guida in ebbrezza. Sulla patente viene annotato il codice unionale 68 (divieto assoluto di alcol, durata 2 o 3 anni secondo la fascia) oppure 69 (guida consentita solo con alcolock).',
    regola_testo:
      'Per i soggetti condannati per guida in stato di ebbrezza è obbligatorio installare sul veicolo il dispositivo di blocco dell\u2019avviamento (alcolock); sulla patente sono annotati i codici unionali 68 (niente alcol) e 69 (guida consentita solo con alcolock), con durata proporzionata alla gravità della violazione.',
    articolo_cds: 'Art. 186 co. 9-ter CdS — DM 2/7/2025',
    livello_difficolta: 4,
    tag: ['alcolock', 'codice-68', 'codice-69', 'L177-2024', 'DM-2-7-2025'],
  },
  {
    codice: 'ARG15-C007',
    argomento_numero: 15,
    titolo: 'Rifiuto dell\u2019accertamento etilometrico',
    descrizione:
      'Chi, richiesto dall\u2019autorità, rifiuta di sottoporsi all\u2019accertamento del tasso alcolemico (etilometro o prelievo ematico) è punito con le stesse sanzioni previste per la fascia più grave dell\u2019art. 186 (oltre 1,5 g/l): sanzione penale, sospensione o revoca, confisca. Il rifiuto non è una via d\u2019uscita.',
    regola_testo:
      'Il conducente che rifiuta di sottoporsi all\u2019accertamento del tasso alcolemico o all\u2019accertamento per stupefacenti è punito con le medesime sanzioni previste per la fascia più grave di ebbrezza o per la guida in stato di alterazione da stupefacenti.',
    articolo_cds: 'Art. 186 co. 7 CdS',
    livello_difficolta: 3,
    tag: ['rifiuto', 'etilometro', 'sanzione-aggravata'],
  },
  {
    codice: 'ARG15-C008',
    argomento_numero: 15,
    titolo: 'Stupefacenti: art. 187 riformato',
    descrizione:
      'La Legge 177/2024 ha modificato l\u2019art. 187 eliminando il requisito dello "stato di alterazione psicofisica": per integrare la violazione basta la positività al principio attivo della sostanza stupefacente accertata in nesso cronologico con la guida (non i semplici metaboliti inattivi). Il test salivare in loco è ammesso.',
    regola_testo:
      'È vietato guidare dopo aver assunto sostanze stupefacenti o psicotrope; la violazione sussiste quando gli accertamenti rilevano la positività al principio attivo in nesso cronologico con la guida, indipendentemente dalla prova di un attuale stato di alterazione psicofisica.',
    articolo_cds: 'Art. 187 CdS (L. 177/2024)',
    livello_difficolta: 4,
    tag: ['stupefacenti', 'L177-2024', 'principio-attivo', 'nesso-cronologico'],
  },
  {
    codice: 'ARG15-C009',
    argomento_numero: 15,
    titolo: 'Sonnolenza, farmaci e colpo di sonno',
    descrizione:
      'La sonnolenza è tra le prime cause di incidente in autostrada. I primi segnali — sbadigli ripetuti, difficoltà a mantenere la corsia, peso alle palpebre — impongono la sosta in sicurezza. Anche molti farmaci di uso comune (antistaminici, ansiolitici, antitosse, sciroppi) provocano sonnolenza: verificare il bugiardino e il pittogramma di avvertenza.',
    regola_testo:
      'Il conducente che avverte sonnolenza o senso di affaticamento deve interrompere la marcia e riprendere la guida solo dopo adeguato riposo; analogo obbligo vale se assume farmaci che possano ridurre l\u2019attenzione o provocare sonnolenza.',
    articolo_cds: 'Art. 187 CdS (per farmaci psicotropi) e art. 140 CdS',
    livello_difficolta: 2,
    tag: ['sonno', 'colpo-di-sonno', 'farmaci', 'bugiardino'],
  },
  {
    codice: 'ARG15-C010',
    argomento_numero: 15,
    titolo: 'Regola PAS — Proteggere, Allertare, Soccorrere',
    descrizione:
      'Di fronte a un incidente si segue la sequenza PAS. P (Proteggere): mettere in sicurezza la scena — luci di emergenza, triangolo, giubbotto ad alta visibilità, stop ai veicoli sopraggiungenti. A (Allertare): chiamare il 112/118 fornendo luogo, numero di feriti, condizioni apparenti. S (Soccorrere): prestare assistenza ai feriti solo se si è in grado di farlo senza mettersi in pericolo.',
    regola_testo:
      'Di fronte a un incidente il soccorritore occasionale deve applicare la regola PAS: proteggere prima la scena e sé stesso, poi allertare il 112/118, infine soccorrere i feriti con interventi compatibili con la propria formazione.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['PAS', 'primo-soccorso', '112', '118', 'sequenza'],
  },
  {
    codice: 'ARG15-C011',
    argomento_numero: 15,
    titolo: 'Posizione laterale di sicurezza e liquidi',
    descrizione:
      'Un ferito privo di coscienza ma che respira va posto in posizione laterale di sicurezza per prevenire il soffocamento causato dalla caduta della lingua o da vomito, salvo che si sospetti una lesione alla colonna vertebrale. Non si deve mai somministrare acqua, cibo o bevande alcoliche a un ferito: possono provocare soffocamento e interferire con l\u2019assistenza sanitaria successiva.',
    regola_testo:
      'La persona priva di coscienza ma con respirazione spontanea va posta in posizione laterale di sicurezza per garantire la pervietà delle vie aeree, salvo sospetto trauma spinale; è vietato somministrare liquidi o cibo a un ferito.',
    articolo_cds: null,
    livello_difficolta: 3,
    tag: ['posizione-laterale', 'PLS', 'no-liquidi', 'vie-aeree'],
  },
  {
    codice: 'ARG15-C012',
    argomento_numero: 15,
    titolo: 'Emorragie, shock e casco del motociclista',
    descrizione:
      'Un\u2019emorragia esterna si tampona con compressione diretta sulla ferita usando garze o tessuto pulito, mantenendo se possibile l\u2019arto sollevato. Lo shock va prevenuto coprendo il ferito per mantenerlo caldo e mantenendolo cosciente parlandogli. Il casco del motociclista va lasciato indossato: va rimosso solo in caso di arresto respiratorio o cardiaco evidente, idealmente a due soccorritori per proteggere il rachide cervicale.',
    regola_testo:
      'Le emorragie esterne si tamponano con compressione diretta; al ferito va evitata la perdita di calore per prevenire lo shock; il casco del motociclista non va rimosso, salvo necessità vitale, e comunque mai da un soccorritore solo.',
    articolo_cds: null,
    livello_difficolta: 4,
    tag: ['emorragia', 'shock', 'casco-motociclista', 'compressione-diretta'],
  },
] as const
