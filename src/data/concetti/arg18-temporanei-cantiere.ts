import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 21 (opere, depositi e cantieri stradali),
// art. 39 (segnali verticali) + Reg. CdS artt. 30-43 (segnali temporanei),
// DM 10/07/2002 (disciplinare tecnico segnaletica cantieri).
// 8 concetti atomici per l'argomento 18 — Segnali complementari, temporanei,
// di cantiere.
//
// NOTA trappole (cfr. docs/research/03): esposto a P11 (prevalenza del
// segnale temporaneo sul permanente — "eccezione nascosta") e P13 (confusione
// tra complementare e temporaneo).

export const ARG18_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG18-C001',
    argomento_numero: 18,
    titolo: 'Segnali temporanei: sfondo giallo',
    descrizione:
      'I segnali temporanei sono riconoscibili dallo sfondo giallo (o arancione): devono attirare l\u2019attenzione del conducente anche se le condizioni della strada sono gi\u00e0 note agli utenti abituali.',
    regola_testo:
      'I segnali temporanei connessi a un cantiere o a situazioni provvisorie hanno sfondo giallo o arancione al posto del bianco; cos\u00ec distinti, segnalano con immediatezza che la situazione cui si riferiscono \u00e8 transitoria e impongono pi\u00f9 attenzione.',
    articolo_cds: 'Art. 21 CdS; art. 30 Reg. CdS',
    livello_difficolta: 1,
    tag: ['temporanei', 'giallo', 'cantiere'],
  },
  {
    codice: 'ARG18-C002',
    argomento_numero: 18,
    titolo: 'Prevalenza del temporaneo sul permanente',
    descrizione:
      'Quando un segnale temporaneo di cantiere contrasta con uno permanente, il primo prevale: \u00e8 l\u2019unica regola affidabile quando il conducente vede indicazioni contraddittorie.',
    regola_testo:
      'In caso di contrasto fra segnale temporaneo e segnale permanente, il conducente deve attenersi al segnale temporaneo; per rafforzarne l\u2019efficacia, il segnale permanente viene coperto, rimosso o sbarrato durante la presenza del cantiere.',
    articolo_cds: 'Art. 21 CdS; art. 38 Reg. CdS',
    livello_difficolta: 2,
    tag: ['prevalenza', 'contrasto', 'P11'],
  },
  {
    codice: 'ARG18-C003',
    argomento_numero: 18,
    titolo: 'Lavori in corso e strada deformata temporanea',
    descrizione:
      'Il segnale di lavori in corso su fondo giallo preavvisa un cantiere fisso o mobile: va letto assieme agli altri segnali temporanei (restringimento, deviazione, limite ridotto) che compongono la catena informativa.',
    regola_testo:
      'Il segnale "lavori" su sfondo giallo avverte della presenza di un cantiere stradale; comporta l\u2019obbligo di moderare sensibilmente la velocit\u00e0, prestare attenzione a operai e mezzi d\u2019opera ed eseguire senza indugio le manovre imposte dalla segnaletica di cantiere.',
    articolo_cds: 'Art. 21 CdS; art. 31 Reg. CdS',
    livello_difficolta: 2,
    tag: ['lavori', 'prudenza', 'F02'],
  },
  {
    codice: 'ARG18-C004',
    argomento_numero: 18,
    titolo: 'Coni, delineatori flessibili e barriere direzionali',
    descrizione:
      'Coni, delineatori flessibili e barriere mobili a strisce bianche e rosse sono segnali complementari che delimitano fisicamente il cantiere o la deviazione: segnano dove i veicoli non possono pi\u00f9 passare.',
    regola_testo:
      'I coni di canalizzazione, i delineatori flessibili e le barriere direzionali a strisce alternate bianche e rosse delimitano il margine del cantiere e orientano il traffico sulla nuova traiettoria; il conducente non deve in alcun caso scavalcarli n\u00e9 spostarli.',
    articolo_cds: 'Art. 42 CdS; artt. 40, 41 Reg. CdS',
    livello_difficolta: 2,
    tag: ['coni', 'delineatori', 'complementari'],
  },
  {
    codice: 'ARG18-C005',
    argomento_numero: 18,
    titolo: 'Segnaletica mobile su veicoli operativi',
    descrizione:
      'I cantieri mobili (spazzatura stradale, rifacimento segnaletica, potatura) sono segnalati da pannelli luminosi a frecce o strisce direzionali installati sul retro del veicolo operativo: indicano il lato verso cui il traffico deve deviare.',
    regola_testo:
      'Il pannello a messaggio variabile o a frecce lampeggianti installato sul retro di un veicolo operativo segnala un cantiere mobile e indica al conducente che sopraggiunge il lato di deviazione; va rispettato con la stessa obbligatoriet\u00e0 di un segnale verticale.',
    articolo_cds: 'Art. 21 CdS; artt. 39, 42 Reg. CdS',
    livello_difficolta: 3,
    tag: ['cantiere-mobile', 'pannello-variabile'],
  },
  {
    codice: 'ARG18-C006',
    argomento_numero: 18,
    titolo: 'Segnalamento luminoso e a luce intermittente',
    descrizione:
      'Nei cantieri stradali, specie di notte o con scarsa visibilit\u00e0, i segnali sono integrati da dispositivi luminosi gialli fissi o lampeggianti: rendono la segnaletica visibile e avvertono da maggiore distanza.',
    regola_testo:
      'Le luci gialle fisse o lampeggianti installate sui segnali di cantiere ne aumentano la visibilit\u00e0 di notte e in condizioni di scarsa illuminazione; indicano che il pericolo segnalato \u00e8 reale e operativo al momento del passaggio del veicolo.',
    articolo_cds: 'Art. 42 CdS; art. 42 Reg. CdS',
    livello_difficolta: 3,
    tag: ['luci', 'notte', 'visibilita'],
  },
  {
    codice: 'ARG18-C007',
    argomento_numero: 18,
    titolo: 'Segnali complementari: delineatori di margine e di curva',
    descrizione:
      'I delineatori di margine (paletti bianchi con catadiottro rosso a destra e bianco a sinistra) e i pannelli per curva a strisce bianche e nere sono segnali complementari permanenti: guidano il conducente nella corretta traiettoria.',
    regola_testo:
      'I delineatori di margine normali riportano un catadiottro rosso rettangolare sul lato destro del senso di marcia e uno bianco quadrato sul lato sinistro; i pannelli a strisce bianche e nere rafforzano il tracciato di una curva pericolosa.',
    articolo_cds: 'Art. 42 CdS; artt. 173-177 Reg. CdS',
    livello_difficolta: 3,
    tag: ['delineatori', 'margine', 'curva'],
  },
  {
    codice: 'ARG18-C008',
    argomento_numero: 18,
    titolo: 'Fine lavori e ripristino',
    descrizione:
      'La coda di un cantiere prevede il segnale di "fine lavori" o "via libera": da l\u00ec in avanti tornano a valere i segnali permanenti ordinari, compreso il limite di velocit\u00e0 originario.',
    regola_testo:
      'Il segnale "fine lavori" o l\u2019assenza di ulteriori segnali temporanei indicano che il tratto di cantiere \u00e8 terminato; cessano le prescrizioni temporanee e riprendono validit\u00e0 tutti i segnali permanenti che erano stati coperti o sovrascritti.',
    articolo_cds: 'Art. 21 CdS; art. 38 Reg. CdS',
    livello_difficolta: 2,
    tag: ['fine-lavori', 'ripristino'],
  },
] as const
