import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 38, 41, 43 (segnaletica luminosa
// e segnalazioni degli agenti del traffico).
// 10 concetti atomici per l'argomento 6 — Segnalazioni semaforiche e
// degli agenti del traffico.
//
// NOTA trappole (cfr. docs/research/03): questo argomento espone
// soprattutto P03 (scambio obbligo/divieto sul giallo e sul rosso lampeggiante),
// P06 (scambio "ha"/"deve dare" la precedenza davanti all'agente),
// P04 (può/deve all'arancione), P13 (semaforo veicolare vs pedonale vs
// tranviario) e P11 (eccezione: ordini dell'agente che prevalgono sui segnali).

export const ARG06_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG06-C001',
    argomento_numero: 6,
    titolo: 'Gerarchia tra segnali e agente',
    descrizione:
      'Quando in un incrocio sono presenti agente, semaforo, segnali verticali e segnaletica orizzontale, vale una gerarchia precisa.',
    regola_testo:
      'Prevalgono nell\u2019ordine: gli ordini dell\u2019agente del traffico, poi le segnalazioni luminose (semaforo), poi i segnali verticali e infine la segnaletica orizzontale.',
    articolo_cds: 'Art. 38 CdS',
    livello_difficolta: 2,
    tag: ['gerarchia', 'agente', 'P11'],
  },
  {
    codice: 'ARG06-C002',
    argomento_numero: 6,
    titolo: 'Semaforo veicolare: rosso',
    descrizione:
      'La luce rossa del semaforo veicolare impone l\u2019arresto prima della linea di arresto o, in sua assenza, prima dell\u2019attraversamento pedonale.',
    regola_testo:
      'Con luce rossa il conducente deve arrestare il veicolo prima della striscia di arresto o dell\u2019attraversamento pedonale, senza impegnare l\u2019incrocio.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 1,
    tag: ['semaforo', 'rosso', 'arresto'],
  },
  {
    codice: 'ARG06-C003',
    argomento_numero: 6,
    titolo: 'Semaforo veicolare: giallo',
    descrizione:
      'Il giallo fisso preannuncia il rosso e impone l\u2019arresto se possibile in condizioni di sicurezza.',
    regola_testo:
      'Con la luce gialla il conducente deve fermarsi prima della linea di arresto, salvo che vi sia così vicino da non potersi arrestare in condizioni di sufficiente sicurezza.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 3,
    tag: ['semaforo', 'giallo', 'P04'],
  },
  {
    codice: 'ARG06-C004',
    argomento_numero: 6,
    titolo: 'Semaforo veicolare: verde',
    descrizione:
      'La luce verde consente l\u2019avanzamento solo quando l\u2019incrocio può essere sgomberato e i pedoni sono in sicurezza.',
    regola_testo:
      'Con luce verde è consentito procedere nelle direzioni consentite, ma solo se l\u2019incrocio è libero e non si ostacolano i pedoni che stanno completando l\u2019attraversamento.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 2,
    tag: ['semaforo', 'verde', 'pedoni'],
  },
  {
    codice: 'ARG06-C005',
    argomento_numero: 6,
    titolo: 'Lampeggio giallo: prudenza, non precedenza',
    descrizione:
      'Il giallo lampeggiante segnala un impianto non operativo o un pericolo e disattiva il ruolo regolatore del semaforo.',
    regola_testo:
      'Con il giallo lampeggiante il conducente deve procedere con particolare prudenza osservando le regole di precedenza stabilite dai segnali verticali presenti nell\u2019incrocio.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 3,
    tag: ['semaforo', 'giallo-lampeggiante', 'prudenza'],
  },
  {
    codice: 'ARG06-C006',
    argomento_numero: 6,
    titolo: 'Frecce direzionali del semaforo',
    descrizione:
      'I semafori con luci a forma di freccia regolano separatamente una singola direzione di marcia.',
    regola_testo:
      'Le frecce verdi consentono di proseguire solo nella direzione indicata; le frecce rosse vietano di proseguire in quella direzione anche se altre luci dell\u2019impianto sono verdi.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 3,
    tag: ['semaforo', 'frecce', 'direzione'],
  },
  {
    codice: 'ARG06-C007',
    argomento_numero: 6,
    titolo: 'Semaforo pedonale',
    descrizione:
      'Le luci pedonali (omino rosso/verde) regolano il solo attraversamento del pedone e non riguardano i veicoli.',
    regola_testo:
      'Il pedone può attraversare con l\u2019omino verde; con l\u2019omino rosso deve rimanere sul marciapiede, mentre i veicoli restano regolati dal proprio semaforo veicolare.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 2,
    tag: ['semaforo', 'pedonale', 'P13'],
  },
  {
    codice: 'ARG06-C008',
    argomento_numero: 6,
    titolo: 'Semaforo tranviario a barre',
    descrizione:
      'I semafori con barre luminose bianche sono riservati ai mezzi su rotaia e non si applicano ai veicoli ordinari.',
    regola_testo:
      'Le barre luminose bianche regolano esclusivamente la marcia dei tram e dei veicoli su rotaia e non riguardano mai gli altri utenti della strada.',
    articolo_cds: 'Art. 41 CdS',
    livello_difficolta: 4,
    tag: ['semaforo', 'tram', 'P13'],
  },
  {
    codice: 'ARG06-C009',
    argomento_numero: 6,
    titolo: 'Segnali manuali dell\u2019agente',
    descrizione:
      'L\u2019agente del traffico regola la circolazione con posizioni e movimenti del corpo codificati.',
    regola_testo:
      'Braccio alzato verticalmente equivale al giallo (sgomberare l\u2019incrocio), braccia tese orizzontali valgono come rosso per chi le ha di fronte o alle spalle e come verde per chi le ha lateralmente.',
    articolo_cds: 'Art. 43 CdS',
    livello_difficolta: 3,
    tag: ['agente', 'braccia', 'P03'],
  },
  {
    codice: 'ARG06-C010',
    argomento_numero: 6,
    titolo: 'Ordini dell\u2019agente prevalgono',
    descrizione:
      'Gli ordini dell\u2019agente del traffico sovrascrivono qualunque altro segnale, anche se ne appaiono in contrasto.',
    regola_testo:
      'Il conducente deve obbedire agli ordini dell\u2019agente anche quando sono in contrasto con le luci del semaforo o con i segnali verticali presenti sul posto.',
    articolo_cds: 'Art. 43 CdS',
    livello_difficolta: 2,
    tag: ['agente', 'prevalenza', 'P11'],
  },
] as const
