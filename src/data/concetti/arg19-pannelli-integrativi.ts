import type { Concetto } from '../_types'

// Fonte: docs/research/01 + CdS art. 39 c.3 + Reg. CdS artt. 83, 115-124
// (pannelli integrativi dei segnali verticali).
// 7 concetti atomici per l'argomento 19 — Pannelli integrativi.
//
// NOTA trappole (cfr. docs/research/03): argomento strettamente legato al
// pattern P07 (numeri quasi-giusti sulla distanza) e P11 (eccezione nascosta
// veicolata dal pannello stesso). Un pannello pu\u00f2 restringere, estendere
// o invertire la prescrizione del segnale principale.

export const ARG19_CONCETTI: readonly Concetto[] = [
  {
    codice: 'ARG19-C001',
    argomento_numero: 19,
    titolo: 'Natura e funzione dei pannelli integrativi',
    descrizione:
      'Il pannello integrativo \u00e8 una targa rettangolare posta sotto il segnale verticale principale per precisarne, limitarne o estenderne il significato: non pu\u00f2 mai contraddire completamente il segnale, ma ne modula l\u2019ambito di applicazione.',
    regola_testo:
      'I pannelli integrativi, di forma rettangolare e collocati sotto il segnale principale, hanno la funzione di integrare il contenuto di un segnale verticale indicandone distanza, estensione, validit\u00e0 temporale, eccezioni, categorie di veicoli o altre informazioni accessorie.',
    articolo_cds: 'Art. 39 c.3 CdS; art. 83 Reg. CdS',
    livello_difficolta: 2,
    tag: ['definizione', 'funzione', 'rettangolare'],
  },
  {
    codice: 'ARG19-C002',
    argomento_numero: 19,
    titolo: 'Pannello di distanza (modello I)',
    descrizione:
      'Il pannello di distanza indica quanti metri mancano dal punto in cui \u00e8 posto il segnale all\u2019inizio del pericolo, dell\u2019obbligo o del divieto: \u00e8 obbligatorio quando la distanza differisce sensibilmente dai valori standard.',
    regola_testo:
      'Il pannello integrativo di distanza riporta in metri (es. "150 m", "300 m") lo spazio che intercorre fra il punto in cui \u00e8 posto il segnale e il punto in cui inizia realmente la situazione segnalata; va applicato quando la posa non rispetta la distanza ordinaria.',
    articolo_cds: 'Art. 39 CdS; art. 83 Reg. CdS modello I',
    livello_difficolta: 2,
    tag: ['distanza', 'metri', 'P07'],
  },
  {
    codice: 'ARG19-C003',
    argomento_numero: 19,
    titolo: 'Pannello di estesa (modello II)',
    descrizione:
      'Il pannello di estesa indica quanti metri di strada sono interessati dal pericolo o dalla prescrizione: la prescrizione vale dal punto del segnale fino alla lunghezza indicata.',
    regola_testo:
      'Il pannello integrativo di estesa riporta in metri la lunghezza del tratto in cui si applica la prescrizione o persiste il pericolo; la prescrizione del segnale principale vale per l\u2019intera distanza indicata, anche in assenza di ulteriori segnali.',
    articolo_cds: 'Art. 39 CdS; art. 83 Reg. CdS modello II',
    livello_difficolta: 2,
    tag: ['estesa', 'lunghezza', 'P07'],
  },
  {
    codice: 'ARG19-C004',
    argomento_numero: 19,
    titolo: 'Pannello di inizio, continuazione e fine di prescrizione',
    descrizione:
      'I pannelli con frecce (verso l\u2019alto, bidirezionale, verso il basso) segnalano rispettivamente l\u2019inizio, il proseguimento e la fine della prescrizione: informano il conducente sul punto esatto in cui vige e in cui cessa l\u2019obbligo o il divieto.',
    regola_testo:
      'Il pannello con freccia verticale rivolta verso l\u2019alto indica l\u2019inizio della prescrizione; quello con doppia freccia verticale la continuazione; quello con freccia verso il basso o con scritta "FINE" segnala la cessazione della prescrizione.',
    articolo_cds: 'Art. 39 CdS; art. 83 Reg. CdS modello III',
    livello_difficolta: 3,
    tag: ['inizio', 'fine', 'frecce'],
  },
  {
    codice: 'ARG19-C005',
    argomento_numero: 19,
    titolo: 'Pannello di validit\u00e0 temporale',
    descrizione:
      'Alcuni divieti (es. divieto di sosta o di transito) valgono solo in determinate fasce orarie o giorni: il pannello integrativo indica con precisione quando la prescrizione \u00e8 operativa.',
    regola_testo:
      'Il pannello di validit\u00e0 temporale riporta le fasce orarie e i giorni in cui vale la prescrizione del segnale principale (es. "8-20", "luned\u00ec-venerd\u00ec", cifre in nero su fondo bianco); fuori da tali fasce la prescrizione non si applica.',
    articolo_cds: 'Art. 39 CdS; art. 83 Reg. CdS modello IV',
    livello_difficolta: 3,
    tag: ['validita-oraria', 'fasce', 'P11'],
  },
  {
    codice: 'ARG19-C006',
    argomento_numero: 19,
    titolo: 'Pannello di categoria di veicoli ed eccezioni',
    descrizione:
      'Quando la prescrizione si applica solo a certe categorie di veicoli (autocarri, autobus, velocipedi, disabili) o quando sono previste eccezioni, il pannello integrativo indica la categoria con simbolo e/o scritta.',
    regola_testo:
      'Il pannello integrativo pu\u00f2 limitare la prescrizione a specifiche categorie di veicoli, riportandone il simbolo o l\u2019indicazione di peso; le eccezioni sono segnalate dalla parola "ECCETTO" seguita dalla categoria, dal simbolo o dalla dicitura (es. "ECCETTO RESIDENTI", "ECCETTO AUTOBUS").',
    articolo_cds: 'Art. 39 CdS; art. 83 Reg. CdS',
    livello_difficolta: 3,
    tag: ['categoria', 'eccetto', 'P11'],
  },
  {
    codice: 'ARG19-C007',
    argomento_numero: 19,
    titolo: 'Pannelli integrativi per la sosta',
    descrizione:
      'Nel settore sosta i pannelli integrativi sono cruciali: indicano rimozione forzata, tempo massimo con disco orario, tipo di stallo riservato, modalit\u00e0 di pagamento. Ignorarli espone a sanzione e rimozione.',
    regola_testo:
      'I pannelli integrativi di "rimozione forzata" (simbolo di autogr\u00f9), "disco orario" con limite massimo, "riservato H" (disabili) e pagamento a parchimetro precisano le condizioni della sosta consentita; in loro presenza la sosta fuori regola espone al carro attrezzi.',
    articolo_cds: 'Art. 157 CdS; art. 83 Reg. CdS',
    livello_difficolta: 2,
    tag: ['sosta', 'rimozione', 'disco-orario', 'P14'],
  },
] as const
