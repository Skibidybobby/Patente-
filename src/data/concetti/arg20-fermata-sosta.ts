import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS artt. 157 (fermata, sosta, arresto, partenza),
// 158 (divieto di fermata e di sosta), 159 (rimozione), 175 (autostrade) e
// richiami ad artt. 40, 190, 191.
// 9 concetti atomici per l'argomento 20 — Fermata, sosta, arresto, partenza.
//
// NOTA trappole (cfr. docs/research/03): argomento con la densit\u00e0 pi\u00f9 alta
// dei pattern P10 (ambito silenzioso — centro abitato vs extraurbana),
// P11 (eccezione nascosta — pannello integrativo che sovrascrive),
// P13 (coppia terminologica fermata/sosta, arresto/fermata) e
// P14 ("in corrispondenza" vs "in prossimit\u00e0" con metri esatti).

export const ARG20_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG20-C001',
    argomento_numero: 20,
    titolo: 'Arresto, fermata, sosta, partenza: quattro concetti distinti',
    descrizione:
      'L\u2019art. 157 CdS distingue quattro condizioni del veicolo non in marcia: arresto (impedimento momentaneo), fermata (sospensione breve con conducente presente), sosta (sospensione prolungata), partenza (inizio della marcia). Confondere arresto con fermata o fermata con sosta \u00e8 la trappola tipica del P13.',
    regola_testo:
      'L\u2019arresto \u00e8 l\u2019interruzione della marcia dovuta a esigenze della circolazione (semaforo, coda, precedenza); la fermata \u00e8 la sospensione della marcia per consentire la salita/discesa di persone o altre esigenze di brevissima durata, con il conducente presente e pronto a ripartire; la sosta \u00e8 la sospensione della marcia protratta, con o senza conducente a bordo.',
    articolo_cds: 'Art. 157 c.1 CdS',
    livello_difficolta: 2,
    tag: ['definizione', 'arresto', 'fermata', 'sosta', 'P13'],
  },
  {
    codice: 'ARG20-C002',
    argomento_numero: 20,
    titolo: 'Regole generali della fermata e della sosta',
    descrizione:
      'Dove non sussistono divieti, il conducente deve comunque scegliere la collocazione del veicolo in modo da non creare pericolo o intralcio: margine destro, parallelo al senso di marcia, fuori dalla corsia riservata al transito.',
    regola_testo:
      'Fermata e sosta si effettuano fuori dalla carreggiata, in vicinanza del margine destro; su strade a senso unico sono ammesse anche sul lato sinistro. Il veicolo deve essere collocato parallelamente al margine, salvo diversa segnaletica, e non deve costituire intralcio n\u00e9 pericolo per la circolazione.',
    articolo_cds: 'Art. 157 c.2 CdS',
    livello_difficolta: 2,
    tag: ['collocazione', 'margine-destro', 'P01'],
  },
  {
    codice: 'ARG20-C003',
    argomento_numero: 20,
    titolo: 'Divieto di fermata: portata assoluta',
    descrizione:
      'Il divieto di fermata \u00e8 molto pi\u00f9 stringente del divieto di sosta: individua punti in cui anche una breve interruzione della marcia costituisce pericolo. Dove vige il divieto di fermata, \u00e8 vietato a maggior ragione sostare.',
    regola_testo:
      'Il divieto di fermata implica il divieto assoluto di interrompere la marcia, sia pure per brevi istanti e anche con il conducente a bordo; \u00e8 previsto nei luoghi in cui la sola sospensione della marcia crea pericolo o grave intralcio. Chi non pu\u00f2 fermarsi non pu\u00f2, a maggior ragione, sostare.',
    articolo_cds: 'Art. 158 c.1 CdS',
    livello_difficolta: 3,
    tag: ['divieto-fermata', 'assoluto', 'P03', 'P13'],
  },
  {
    codice: 'ARG20-C004',
    argomento_numero: 20,
    titolo: 'Divieto di sosta: meno stringente del divieto di fermata',
    descrizione:
      'Il divieto di sosta vieta la sospensione prolungata della marcia ma non la fermata breve: dove c\u2019\u00e8 solo divieto di sosta, il conducente pu\u00f2 fermarsi per far salire o scendere un passeggero, se il conducente resta a bordo pronto a ripartire.',
    regola_testo:
      'Il divieto di sosta (segnale rotondo blu con una diagonale rossa) vieta la sospensione prolungata della marcia, ma consente la fermata per consentire la salita e la discesa delle persone, purch\u00e9 di brevissima durata e con il conducente presente; non va confuso con il divieto di fermata, pi\u00f9 restrittivo.',
    articolo_cds: 'Art. 158 c.2 CdS',
    livello_difficolta: 3,
    tag: ['divieto-sosta', 'P13', 'P11'],
  },
  {
    codice: 'ARG20-C005',
    argomento_numero: 20,
    titolo: '"In corrispondenza" vs "in prossimit\u00e0": cinque metri e dodici metri',
    descrizione:
      'La legge distingue i luoghi in cui fermata o sosta sono vietati "in corrispondenza" (cio\u00e8 esattamente nel punto) dai luoghi in cui sono vietate anche "in prossimit\u00e0" (cio\u00e8 a distanza minore di un valore fisso): cinque metri prima e dopo gli attraversamenti pedonali e ciclabili, dodici metri dalle fermate dei mezzi di trasporto pubblico.',
    regola_testo:
      'La fermata e la sosta sono vietate in corrispondenza o in prossimit\u00e0 degli attraversamenti pedonali e ciclabili (5 metri prima e dopo), delle intersezioni, nei dossi e curve, davanti ai passi carrabili, sulle corsie riservate, e a meno di 12 metri dai segnali di fermata dei mezzi di trasporto pubblico di linea.',
    articolo_cds: 'Art. 158 c.2 CdS',
    livello_difficolta: 4,
    tag: ['metri', 'attraversamento', 'fermate-tpl', 'P07', 'P14'],
  },
  {
    codice: 'ARG20-C006',
    argomento_numero: 20,
    titolo: 'Luoghi vietati alla sosta: passi carrabili, incroci, spartitraffico',
    descrizione:
      'Oltre ai divieti sanciti dalla segnaletica, l\u2019art. 158 elenca luoghi in cui la sosta \u00e8 sempre vietata anche senza cartello: davanti ai passi carrabili, sugli spartitraffico, sui marciapiedi salvo diversa indicazione, sulle piste ciclabili, sui binari del tram.',
    regola_testo:
      'La sosta \u00e8 sempre vietata, anche in assenza di segnaletica specifica, davanti ai passi carrabili regolarmente segnalati, sugli spartitraffico, sulle piste ciclabili, sui marciapiedi (salvo diversa indicazione), sui binari e sulle corsie riservate ai mezzi di trasporto pubblico di linea.',
    articolo_cds: 'Art. 158 c.2 CdS',
    livello_difficolta: 3,
    tag: ['passo-carrabile', 'marciapiede', 'pista-ciclabile', 'P10'],
  },
  {
    codice: 'ARG20-C007',
    argomento_numero: 20,
    titolo: 'Parcheggio: strisce bianche, blu, gialle, rosa',
    descrizione:
      'Il colore delle strisce che delimitano lo stallo indica il regime: bianche per la sosta libera, blu per la sosta a pagamento, gialle per gli stalli riservati (disabili, carico/scarico, taxi, veicoli di servizio), rosa per le donne in gravidanza e con bambini.',
    regola_testo:
      'Gli stalli con strisce bianche segnalano la sosta libera; le strisce blu la sosta a pagamento o a tempo; le strisce gialle gli stalli riservati a disabili, veicoli di servizio, carico/scarico o taxi; le strisce rosa gli stalli riservati a donne in gravidanza e genitori con bambini fino a due anni.',
    articolo_cds: 'Art. 157 CdS; art. 149 Reg. CdS',
    livello_difficolta: 2,
    tag: ['strisce', 'parcheggio', 'disabili', 'P13'],
  },
  {
    codice: 'ARG20-C008',
    argomento_numero: 20,
    titolo: 'Rimozione forzata e sanzioni',
    descrizione:
      'Nei casi pi\u00f9 gravi di sosta irregolare (intralcio, pericolo, stalli riservati, passi carrabili, zone di rimozione) \u00e8 prevista la rimozione forzata del veicolo: oltre alla sanzione pecuniaria, il conducente paga le spese di rimozione e deposito.',
    regola_testo:
      'La rimozione forzata \u00e8 disposta quando il veicolo sosta in luoghi in cui crea intralcio o pericolo (davanti ai passi carrabili, in doppia fila, nelle zone di rimozione segnalate, sugli stalli riservati) o nei casi previsti dall\u2019art. 159; le spese di rimozione e custodia sono a carico del proprietario e si aggiungono alla sanzione amministrativa.',
    articolo_cds: 'Art. 159 CdS',
    livello_difficolta: 3,
    tag: ['rimozione', 'sanzioni', 'carro-attrezzi'],
  },
  {
    codice: 'ARG20-C009',
    argomento_numero: 20,
    titolo: 'Partenza e immissione in carreggiata: obblighi al conducente',
    descrizione:
      'La partenza dopo una sosta o fermata non \u00e8 una manovra libera: il conducente deve assicurarsi di poterla compiere senza pericolo per gli altri utenti, segnalarla con l\u2019indicatore di direzione e dare la precedenza ai veicoli in marcia sulla carreggiata.',
    regola_testo:
      'Prima di immettersi nel flusso di marcia dopo una sosta o fermata il conducente deve accertarsi di poter compiere la manovra senza creare pericolo o intralcio agli altri utenti, segnalare tempestivamente la manovra con l\u2019indicatore di direzione e dare la precedenza ai veicoli che transitano sulla carreggiata.',
    articolo_cds: 'Art. 157 c.7 CdS; art. 154 CdS',
    livello_difficolta: 3,
    tag: ['partenza', 'indicatore', 'precedenza', 'P04'],
  },
] as const
