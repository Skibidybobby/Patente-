import type { Pattern, PatternFolklore } from './_types'

// Fonte: docs/research/03-pattern-trappole.md
// 18 pattern trappola P01-P18 + 5 pattern folklore F01-F05.
// REGOLA DI DESIGN:
//  - i pattern P## sono STAMPI per generare item V/F (UNA trappola per item)
//  - i folklore F## NON sono stampi, si usano solo come "spie" nelle spiegazioni
//
// La mappa argomenti_rischio si riferisce ai numeri in src/data/argomenti.ts.

export const PATTERNS: readonly Pattern[] = [
  {
    id: 'P01',
    nome: 'Quantificatore Universale Infilato',
    descrizione:
      'Inserimento di "sempre/mai/solo/in ogni caso" in una regola che in realtà ammette eccezioni.',
    bias_cognitivo: 'Euristica della fluenza: frasi assolute suonano "ufficiali".',
    template: 'È [sempre/in ogni caso/mai] obbligatorio X quando Y.',
    spia_riconoscimento:
      'Cerca "sempre, mai, solo, in ogni caso" in una regola di condotta: spesso indica FALSO.',
    argomenti_rischio: [9, 13, 16, 20],
  },
  {
    id: 'P02',
    nome: 'Doppia Negazione Annidata',
    descrizione:
      'Due o più negazioni nella stessa frase che costringono a un parsing logico innaturale.',
    bias_cognitivo: 'Carico sulla working memory: il lettore risolve solo la prima negazione.',
    template: 'Non è consentito non [azione obbligatoria], salvo che non [condizione].',
    spia_riconoscimento:
      'Conta "non / né / senza" nella frase: più di uno = sospetto trappola, riscrivi in positivo.',
    argomenti_rischio: [9, 16, 22],
  },
  {
    id: 'P03',
    nome: 'Scambio Obbligo ↔ Divieto',
    descrizione:
      'La regola originaria è riformulata sostituendo "è obbligatorio" con "è vietato" (o viceversa), lasciando il resto identico.',
    bias_cognitivo: 'Anchoring visivo sull\u2019argomento: il lettore si fida del contorno.',
    template: '[È obbligatorio / È vietato] [azione] quando [condizione].',
    spia_riconoscimento:
      'Di fronte a "obbligatorio/vietato" isola l\u2019azione e chiediti: la norma la impone o la proibisce?',
    argomenti_rischio: [2, 3, 13, 20, 21],
  },
  {
    id: 'P04',
    nome: 'Scambio Potere ↔ Dovere ("può" vs "deve")',
    descrizione:
      'La norma impone "deve" ma l\u2019item dice "può" (o viceversa), rendendo facoltativo un obbligo.',
    bias_cognitivo: 'Sinonimia apparente fra verbi modali.',
    template: 'Il conducente [può / deve] [azione] in presenza di [condizione].',
    spia_riconoscimento:
      '"Può" in un contesto di sicurezza = red flag: quasi sempre la norma usa "deve".',
    argomenti_rischio: [9, 13, 14, 16, 21],
  },
  {
    id: 'P05',
    nome: 'Inversione "che precede" ↔ "che segue"',
    descrizione:
      'Scambio dei ruoli tra il veicolo che precede e quello che segue. Tipico in distanza di sicurezza e sorpasso.',
    bias_cognitivo: 'Corto circuito fra prospettiva guida e testo normativo.',
    template: 'Il veicolo [che segue / che precede] deve [mantenere distanza / segnalare].',
    spia_riconoscimento:
      'Sottolinea "che precede" o "che segue" e ricostruisci la scena: chi sta davanti, chi dietro?',
    argomenti_rischio: [8, 11],
  },
  {
    id: 'P06',
    nome: 'Inversione Precedenza "ha" ↔ "deve dare"',
    descrizione:
      'Scambio "ha diritto di precedenza" ↔ "deve dare la precedenza". Il contorno sembra coerente ma il senso è opposto.',
    bias_cognitivo: 'Riconoscimento del segnale prima del parsing linguistico.',
    template: 'Al segnale X il conducente [ha / deve dare] la precedenza rispetto a Y.',
    spia_riconoscimento: 'Forza te stesso a leggere il verbo di precedenza due volte.',
    argomenti_rischio: [4, 6, 10],
  },
  {
    id: 'P07',
    nome: 'Numeri Quasi-Giusti',
    descrizione:
      'Valore numerico plausibile ma vicino a quello reale (0,5 vs 0,05 g/l; 50 vs 70 km/h; 10 vs 15 m).',
    bias_cognitivo: 'Ancoraggio sulla cifra: il cervello approssima.',
    template: 'Il limite di [grandezza] è [numero errato vicino al vero].',
    spia_riconoscimento:
      'Ogni numero = verifica esplicita. Se non ricordi la cifra esatta non tirare a indovinare.',
    argomenti_rischio: [7, 8, 13, 15, 22],
  },
  {
    id: 'P08',
    nome: 'Scambio Unità di Misura',
    descrizione:
      'Metri dove servono secondi (distanza di sicurezza), km/h al posto di m/s, cv al posto di kW.',
    bias_cognitivo: 'Cecità dimensionale: si legge il numero, non l\u2019unità.',
    template: 'La distanza di sicurezza è pari ad almeno [valore] [unità sbagliata].',
    spia_riconoscimento:
      'Ogni numero in un quiz = riquadro mentale su grandezza + unità.',
    argomenti_rischio: [7, 8, 25],
  },
  {
    id: 'P09',
    nome: 'Scambio Reazione ↔ Frenata ↔ Arresto',
    descrizione:
      'Permutazione delle tre componenti della distanza di sicurezza: spazio di reazione, spazio di frenata, spazio di arresto.',
    bias_cognitivo: 'Chunking concettuale: "tutto quel che riguarda la frenata" diventa un blocco.',
    template:
      'Lo spazio di [reazione / frenata / arresto] [dipende da / coincide con] [altra componente].',
    spia_riconoscimento:
      'Arresto = reazione + frenata. Usa sempre questa mini-formula per disambiguare.',
    argomenti_rischio: [8],
  },
  {
    id: 'P10',
    nome: 'Condizione Nascosta / Ambito Silenzioso',
    descrizione:
      'La regola è vera in centro abitato ma viene estesa ad autostrada, extraurbana, notte o pioggia senza dichiarare il contesto.',
    bias_cognitivo: 'Scotoma contestuale: il lettore non cerca il "dove/quando".',
    template: '[Azione/divieto] è consentito/vietato (senza specificare il luogo o l\u2019orario).',
    spia_riconoscimento:
      'Cerca locuzioni locative/temporali: se mancano, prova ad aggiungere "in autostrada" o "di notte".',
    argomenti_rischio: [7, 11, 20, 21],
  },
  {
    id: 'P11',
    nome: 'Eccezione Nascosta ("salvo diversa indicazione")',
    descrizione:
      'Regola generale enunciata senza la clausola di eccezione che normalmente l\u2019accompagna.',
    bias_cognitivo: 'Chiusura prematura: il lettore smette di leggere appena riconosce la regola.',
    template: '[Regola generale]. (Omesso: "salvo diversa segnalazione".)',
    spia_riconoscimento:
      'Chiediti: esiste un cartello che può sovrascrivere questa regola? Se sì, l\u2019assoluto è sospetto.',
    argomenti_rischio: [2, 7, 17, 20],
  },
  {
    id: 'P12',
    nome: 'Libertà Apparente',
    descrizione:
      'Discrezionalità apparente ("liberamente", "facoltativo") applicata a parametri di sicurezza.',
    bias_cognitivo: 'Desiderabilità sociale: un utente vuole credere di essere libero.',
    template: 'Il conducente può [liberamente/facoltativamente] [azione di sicurezza].',
    spia_riconoscimento:
      'Lessico permissivo su sicurezza = red flag. Le regole di sicurezza non sono "facoltative".',
    argomenti_rischio: [13, 9, 16],
  },
  {
    id: 'P13',
    nome: 'Coppie Terminologiche Quasi-Sinonime',
    descrizione:
      'Termini quasi-sinonimi usati come se fossero equivalenti: carreggiata/corsia, fermata/sosta, attraversamento/passaggio, freno di servizio/freno a mano, ferroviario/tranviario.',
    bias_cognitivo: 'Approssimazione lessicale del parlato.',
    template: '[Termine quasi-sinonimo] al posto di [termine esatto] nella stessa regola.',
    spia_riconoscimento:
      'Tieni una mini-glossa in testa delle coppie a rischio: ogni parola tecnica = controllo.',
    argomenti_rischio: [5, 16, 20, 25],
  },
  {
    id: 'P14',
    nome: '"in corrispondenza" ↔ "in prossimità"',
    descrizione:
      'Locuzioni con effetti normativi diversi (sosta, segnalazione) usate come sinonimi.',
    bias_cognitivo: 'Equivalenza percepita.',
    template: 'È vietata la sosta [in corrispondenza / in prossimità] di [elemento].',
    spia_riconoscimento:
      'Corrispondenza = esattamente lì; prossimità = fascia di qualche metro attorno. Non coincidono.',
    argomenti_rischio: [20, 5],
  },
  {
    id: 'P15',
    nome: 'Trappola Semantica "ovvero"',
    descrizione:
      'In linguaggio giuridico "ovvero" significa "oppure", non "cioè": spesso introduce un\u2019alternativa, non un chiarimento.',
    bias_cognitivo: 'Uso comune ≠ uso giuridico.',
    template: 'È obbligatorio fare X, ovvero Y (dove X e Y sono alternative, non equivalenti).',
    spia_riconoscimento:
      'Nei quiz patente "ovvero" = "oppure". Sostituisci mentalmente e rileggi.',
    argomenti_rischio: [16, 22, 23],
  },
  {
    id: 'P16',
    nome: 'Passivo Ingannevole / Agente Cancellato',
    descrizione:
      'Agente assente o ambiguo: non si capisce su chi ricade l\u2019obbligo.',
    bias_cognitivo: 'Default al soggetto grammaticale come agente.',
    template: '[È obbligatorio essere soccorsi / essere segnalati] in caso di [evento].',
    spia_riconoscimento:
      'Ogni "essere + participio" → ricostruisci chi-fa-cosa (conducente? proprietario? passeggero?).',
    argomenti_rischio: [14, 16, 22, 23],
  },
  {
    id: 'P17',
    nome: 'Causa-Effetto Invertita',
    descrizione:
      '"Lo spazio di frenata dipende dai riflessi": no, dipende da meccanica + aderenza. Lo spazio di reazione dipende dai riflessi.',
    bias_cognitivo: 'Associazione libera nel dominio.',
    template: '[Grandezza A] dipende da [fattore che in realtà determina grandezza B].',
    spia_riconoscimento:
      'Per ogni "dipende da" costruisci esplicitamente la catena causale.',
    argomenti_rischio: [8, 25],
  },
  {
    id: 'P18',
    nome: 'Verità Parziale Fuori Contesto',
    descrizione:
      'Affermazione in sé vera ma riferita al concetto sbagliato.',
    bias_cognitivo: 'Source monitoring error: "so che è vero" ≠ "è vero qui".',
    template: '[Fatto vero] → attribuito a [oggetto errato].',
    spia_riconoscimento:
      'Ogni verità richiede "vera DI CHE?". Se l\u2019oggetto cambia, cambia il valore di verità.',
    argomenti_rischio: [8, 15, 22, 25],
  },
] as const

export const PATTERNS_FOLKLORE: readonly PatternFolklore[] = [
  {
    id: 'F01',
    nome: 'Lessico-segnale di FALSO',
    descrizione:
      'Parole statisticamente associate a item falsi nel pool ministeriale. NON usare come stampo, solo come spia nelle spiegazioni.',
    esempi_lessicali: ['unicamente', 'facoltativo', 'diurne', 'interrotta', 'affiancati'],
  },
  {
    id: 'F02',
    nome: 'Lessico-segnale di VERO',
    descrizione:
      'Parole statisticamente associate a item veri. Stesso avvertimento di F01.',
    esempi_lessicali: ['potrebbe', 'improvvisamente', 'ridotto', 'tornanti', 'sporgente'],
  },
  {
    id: 'F03',
    nome: 'Principio di prudenza',
    descrizione:
      'La formulazione prudente è statisticamente vera nei quiz ministeriali. È un indizio debole, non una regola.',
    esempi_lessicali: ['rallentare', 'moderare la velocità', 'in caso di dubbio', 'prudenza'],
  },
  {
    id: 'F04',
    nome: 'Termini esotici → distrattori falsi',
    descrizione:
      'Componenti rari o tecnicismi inusuali tendono a essere distrattori falsi ("spinterogeno", "albero di trasmissione" su meccanica base).',
    esempi_lessicali: ['spinterogeno', 'albero di trasmissione', 'differenziale autobloccante'],
  },
  {
    id: 'F05',
    nome: 'Commutazione singolare/plurale',
    descrizione:
      'Passaggio "veicolo" ↔ "veicoli" che cambia l\u2019applicabilità della regola. Osservare, non esaltare.',
    esempi_lessicali: ['veicolo', 'veicoli', 'ogni veicolo', 'tutti i veicoli'],
  },
] as const

export function getPatternById(id: string): Pattern | undefined {
  return PATTERNS.find((p) => p.id === id)
}
