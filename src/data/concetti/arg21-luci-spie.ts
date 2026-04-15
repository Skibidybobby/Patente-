import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 152, 153, 154, 155, 156 + Reg. CdS artt. 238 ss.
// 9 concetti atomici per l'argomento 21 — Uso delle luci e dei dispositivi
// acustici, spie e simboli.
//
// Nota normativa: la disciplina dell'uso dei proiettori e dei dispositivi di
// segnalazione visiva e acustica non e' stata riscritta dalla L. 177/2024;
// restano centrali gli artt. 152-156 CdS. I concetti qui sotto sono scritti
// in lingua italiana didattica, senza copiare il testo ministeriale.

export const ARG21_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG21-C001',
    argomento_numero: 21,
    titolo: 'Luci di posizione: quando si accendono',
    descrizione:
      'Le luci di posizione (o luci di ingombro) servono a rendere visibile il veicolo da chi segue e da chi incrocia: vanno accese ogni volta che si circola al buio o quando la luce ambiente non basta a vedere ed essere visti.',
    regola_testo:
      'Le luci di posizione devono essere accese durante la marcia da mezz\u2019ora dopo il tramonto a mezz\u2019ora prima del sorgere del sole, nelle gallerie, in caso di nebbia, caduta di neve, foschia, pioggia intensa o comunque quando le condizioni di visibilita\u0300 lo richiedono; vanno tenute accese anche durante la fermata o la sosta sulla carreggiata al di fuori dei centri abitati.',
    articolo_cds: 'Art. 152 CdS',
    livello_difficolta: 2,
    tag: ['luci-posizione', 'visibilita', 'sosta'],
  },
  {
    codice: 'ARG21-C002',
    argomento_numero: 21,
    titolo: 'Anabbaglianti fuori dai centri abitati',
    descrizione:
      'Gli anabbaglianti sono il dispositivo di illuminazione di uso ordinario in circolazione: fuori dai centri abitati vanno tenuti accesi anche di giorno, per garantire la percezione reciproca fra veicoli.',
    regola_testo:
      'L\u2019uso dei proiettori anabbaglianti e\u0300 obbligatorio di giorno fuori dai centri abitati, in tutte le gallerie, durante la circolazione notturna e ogni volta che, pur essendo giorno, le condizioni atmosferiche rendano necessaria una maggiore visibilita\u0300.',
    articolo_cds: 'Art. 153 CdS',
    livello_difficolta: 2,
    tag: ['anabbaglianti', 'giorno', 'extraurbana', 'P10'],
  },
  {
    codice: 'ARG21-C003',
    argomento_numero: 21,
    titolo: 'Abbaglianti: uso e divieti',
    descrizione:
      'Gli abbaglianti sono proiettori di profondita\u0300 che illuminano a grande distanza ma che possono abbagliare gli altri conducenti: per questo vanno usati solo quando servono davvero e spenti in tempo utile quando si incrocia qualcuno.',
    regola_testo:
      'I proiettori abbaglianti possono essere accesi fuori dai centri abitati quando il buio o la scarsa visibilita\u0300 lo richiedono; devono essere spenti e commutati in anabbaglianti in presenza di veicoli che procedono in senso inverso, durante le operazioni di sorpasso dopo aver raggiunto il veicolo che precede, nelle aree illuminate e quando si marcia dietro a un altro veicolo a breve distanza.',
    articolo_cds: 'Art. 153 CdS',
    livello_difficolta: 3,
    tag: ['abbaglianti', 'incrocio', 'sorpasso', 'P01'],
  },
  {
    codice: 'ARG21-C004',
    argomento_numero: 21,
    titolo: 'Fendinebbia anteriori e posteriori',
    descrizione:
      'I proiettori fendinebbia sono luci aggiuntive pensate per la nebbia, la neve o la pioggia molto intensa: quelli anteriori potenziano la visibilita\u0300 verso l\u2019avanti, quelli posteriori rendono il veicolo piu\u0300 riconoscibile da dietro a scapito di un forte abbagliamento se usati impropriamente.',
    regola_testo:
      'I proiettori fendinebbia anteriori si possono usare in caso di nebbia, caduta di neve o pioggia intensa; il fendinebbia posteriore puo\u0300 essere acceso soltanto quando la visibilita\u0300 e\u0300 inferiore a 50 metri o in caso di forti precipitazioni, e deve essere spento appena le condizioni migliorano per non abbagliare chi segue.',
    articolo_cds: 'Art. 153 CdS',
    livello_difficolta: 3,
    tag: ['fendinebbia', 'visibilita-50m', 'P07'],
  },
  {
    codice: 'ARG21-C005',
    argomento_numero: 21,
    titolo: 'Indicatori di direzione (frecce)',
    descrizione:
      'Gli indicatori di direzione servono a comunicare in anticipo ogni cambio di traiettoria: la mancata o la tardiva segnalazione priva gli altri utenti di informazioni essenziali per adattare la propria guida.',
    regola_testo:
      'Il conducente deve azionare gli indicatori di direzione in tempo utile prima di svoltare, cambiare corsia, immettersi nel flusso del traffico, sorpassare, rientrare dopo un sorpasso, fermarsi o ripartire dalla sosta; gli indicatori vanno spenti appena conclusa la manovra.',
    articolo_cds: 'Art. 154 CdS',
    livello_difficolta: 2,
    tag: ['frecce', 'manovra', 'P04'],
  },
  {
    codice: 'ARG21-C006',
    argomento_numero: 21,
    titolo: 'Luci di emergenza (quattro frecce)',
    descrizione:
      'Le quattro frecce sono il segnale di emergenza del veicolo: comunicano agli altri utenti che c\u2019e\u0300 un pericolo imminente o che il veicolo e\u0300 fermo in condizioni anomale, e non sostituiscono la regolarita\u0300 della sosta.',
    regola_testo:
      'Le luci di emergenza devono essere attivate in caso di fermata o sosta forzata del veicolo dovuta a guasto o incidente, quando ci si trova alla coda di un ingorgo improvviso sulle strade extraurbane e in ogni altra situazione di pericolo segnalata agli altri conducenti; non possono sostituire la segnaletica di sosta vietata ne\u0301 giustificare un\u2019occupazione impropria della carreggiata.',
    articolo_cds: 'Art. 153 c.5 CdS',
    livello_difficolta: 3,
    tag: ['emergenza', 'quattro-frecce', 'P12'],
  },
  {
    codice: 'ARG21-C007',
    argomento_numero: 21,
    titolo: 'Segnalazioni acustiche (clacson)',
    descrizione:
      'Il dispositivo acustico di segnalazione (clacson) non e\u0300 un modo per esprimere nervosismo: e\u0300 un aiuto alla sicurezza, da usare con misura e solo per evitare un pericolo concreto o per farsi sentire dove la visibilita\u0300 e\u0300 ridotta.',
    regola_testo:
      'Il dispositivo acustico puo\u0300 essere usato soltanto per evitare un incidente imminente o, fuori dai centri abitati, per segnalare la propria presenza nei tratti con scarsa visibilita\u0300 come curve cieche e dossi; nei centri abitati il suo uso e\u0300 di norma vietato salvo situazioni di effettivo pericolo, ed e\u0300 comunque vietato in prossimita\u0300 di ospedali e strutture di cura.',
    articolo_cds: 'Art. 156 CdS',
    livello_difficolta: 2,
    tag: ['clacson', 'centro-abitato', 'ospedali', 'P01'],
  },
  {
    codice: 'ARG21-C008',
    argomento_numero: 21,
    titolo: 'Segnalazioni luminose (lampeggio abbaglianti)',
    descrizione:
      'Il lampeggio degli abbaglianti serve a chiamare l\u2019attenzione di un altro utente senza abbagliarlo: e\u0300 utile soprattutto di notte e fuori dai centri abitati, dove il suono del clacson sarebbe meno efficace o vietato.',
    regola_testo:
      'Le segnalazioni luminose possono essere usate come avvertimento a un altro utente della strada nelle situazioni in cui il dispositivo acustico non e\u0300 consentito o risulterebbe inefficace, in particolare di notte per annunciare la propria presenza nei tratti extraurbani con scarsa visibilita\u0300.',
    articolo_cds: 'Art. 156 CdS',
    livello_difficolta: 3,
    tag: ['lampeggio', 'notte', 'F02'],
  },
  {
    codice: 'ARG21-C009',
    argomento_numero: 21,
    titolo: 'Spie e simboli sul cruscotto',
    descrizione:
      'Il cruscotto riassume lo stato del veicolo attraverso spie di colore diverso: il rosso segnala un\u2019anomalia grave che richiede arresto o intervento, il giallo/arancio un\u2019anomalia da controllare al piu\u0300 presto, il verde il normale funzionamento di un dispositivo attivo.',
    regola_testo:
      'Le spie rosse accese a motore acceso (pressione olio, temperatura, freno, carica batteria, airbag, freni ABS con avaria) impongono di fermarsi quanto prima in sicurezza; le spie gialle indicano un guasto da verificare senza urgenza assoluta; le spie verdi confermano l\u2019attivazione di un dispositivo come indicatori, anabbaglianti o retronebbia.',
    articolo_cds: null,
    livello_difficolta: 2,
    tag: ['spie', 'cruscotto', 'colori', 'F04'],
  },
] as const
