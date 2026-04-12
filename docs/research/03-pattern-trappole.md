# Fase 0 — Agente 3: Tassonomia pattern trappola quiz ministeriale

Data ricerca: 2026-04-12

## 1. Cornice ufficiale del quiz

- 30 V/F, 20 minuti, max 3 errori (DM 27/10/2021)
- Banca ministeriale >7.000 item su 25 argomenti
- Distribuita dal Portale Automobilista, scheda generata a estrazione
- Per DSA: tempo maggiorato + audio (DM 243, 258)
- Nessuna penalità negativa oltre i 3 errori

> VERIFICA: testo integrale DM 27/10/2021 da reperire alla fonte istituzionale.

## 2. Tassonomia 18 pattern

Per ciascun pattern: nome | descrizione | bias | template | come riconoscerlo.

### P01 — Quantificatore Universale Infilato
- Inserimento di "sempre/mai/solo/in ogni caso" in regola che ammette eccezioni.
- Bias: euristica della fluenza.
- Template: "È [sempre/in ogni caso/mai] obbligatorio X quando Y".
- Spia: presenza lessicale di un universale + regola di condotta.

### P02 — Doppia Negazione Annidata
- ≥2 negazioni che richiedono parsing logico.
- Bias: carico cognitivo working memory.
- Template: "Non è consentito non [azione obbligatoria], salvo che non…".
- Spia: contare "non/né/senza" → >1 = sospetto.

### P03 — Scambio Obbligo ↔ Divieto
- Sostituire "è obbligatorio" con "è vietato" lasciando il resto identico.
- Bias: anchoring visivo sull'argomento.
- Template: "[È obbligatorio/È vietato] [azione] quando [condizione]".

### P04 — Scambio Potere ↔ Dovere ("può" vs "deve")
- "Può" dove la norma impone "deve".
- Bias: sinonimia apparente.
- Template: "Il conducente [può/deve] [azione] in presenza di [condizione]".

### P05 — Inversione "che precede" ↔ "che segue"
- Scambio dei ruoli tra veicolo che precede e che segue.
- Tipico in distanza di sicurezza e sorpasso.
- Template: "Il veicolo [che segue/che precede] deve [mantenere distanza/segnalare]".

### P06 — Inversione Precedenza "ha" ↔ "deve dare"
- Scambio "ha diritto di precedenza" ↔ "deve dare la precedenza".
- Bias: riconoscimento del segnale prima del parsing linguistico.
- Template: "Al segnale X il conducente [ha/deve dare] la precedenza rispetto a Y".

### P07 — Numeri Quasi-Giusti
- Valore plausibile vicino a quello corretto (0,5 vs 0,05 g/l; 50 vs 70 km/h; 10 vs 15 m).
- Bias: ancoraggio sulla cifra.
- Template: "Il limite di [grandezza] è [numero errato vicino al vero]".

### P08 — Scambio Unità di Misura
- Metri dove servono secondi (distanza di sicurezza), km/h ↔ m/s.
- Bias: cecità dimensionale.

### P09 — Scambio Reazione ↔ Frenata ↔ Arresto
- Permutazione delle 3 componenti della distanza di sicurezza.
- Bias: chunking concettuale.

### P10 — Condizione Nascosta / Ambito Silenzioso
- Regola vera in centro abitato estesa ad autostrada/extraurbana/notte/pioggia.
- Bias: scotoma contestuale.
- Spia: cerchiare locuzioni locative/temporali.

### P11 — Eccezione Nascosta ("salvo diversa indicazione")
- Regola generale enunciata senza la clausola di eccezione.
- Bias: chiusura prematura.
- Spia: "esiste un cartello che può sovrascrivere?".

### P12 — Libertà Apparente
- Discrezionalità ("liberamente", "facoltativo") su parametri di sicurezza.
- Bias: desiderabilità.
- Spia: lessico permissivo su sicurezza = red flag.

### P13 — Coppie Terminologiche Quasi-Sinonime
- carreggiata/corsia, fermata/sosta, attraversamento/passaggio,
  freno servizio/freno mano, ferroviario/tranviario.
- Bias: approssimazione lessicale del parlato.

### P14 — "in corrispondenza" ↔ "in prossimità"
- Locuzioni con effetti normativi diversi (sosta, segnalazione).
- Bias: equivalenza percepita.

### P15 — Trappola Semantica "ovvero"
- "Ovvero" giuridico = "oppure", non "cioè".
- Bias: uso comune ≠ uso giuridico.

### P16 — Passivo Ingannevole / Agente Cancellato
- Agente assente o ambiguo, non si capisce su chi ricade l'obbligo.
- Bias: default al soggetto grammaticale come agente.
- Spia: ogni "essere + participio" → ricostruire chi-fa-cosa.

### P17 — Causa-Effetto Invertita
- "Spazio di frenata dipende dai riflessi" (no, dipende da meccanica/aderenza).
- Bias: associazione libera nel dominio.

### P18 — Verità Parziale Fuori Contesto
- Affermazione vera ma attribuita al concetto sbagliato.
- Bias: source monitoring error.
- Spia: ogni verità richiede "vera DI CHE?".

## 3. Pattern folklore (F01-F05) — segnali deboli

Pattern statistici NON linguistici. Da usare come "spie" nelle spiegazioni,
NON come stampi per generare item.

- **F01**: lessico-segnale di FALSO ("unicamente", "facoltativo", "diurne",
  "interrotta", "affiancati")
- **F02**: lessico-segnale di VERO ("potrebbe", "improvvisamente", "ridotto",
  "tornanti", "sporgente")
- **F03**: principio di prudenza (la formulazione prudente è statisticamente vera)
- **F04**: termini esotici → distrattori falsi ("spinterogeno", "albero trasm.")
- **F05**: commutazione singolare/plurale ("veicolo"/"veicoli")

## 4. Regole di design TRAPPOLA per R.O.T.T.A.

1. **Una trappola per item** — isolare UN pattern per V/F.
2. **2V+1F o 1V+2F** alternati — no distribuzione indovinabile.
3. **Pattern dichiarato a posteriori** — "hai appena visto P04", valore meta-cognitivo.
4. **Rispetto del concetto appena visto** — la trappola colpisce LA FORMULAZIONE,
   non un contenuto diverso. Sbagliare = aver letto male, non non sapere.
5. **Niente F01-F05 come stampo** — solo come badge "spia lessicale" nella spiegazione.
6. **Numeri sempre in coppia** — affiancare nella spiegazione il numero corretto
   con mnemonic.
7. **Template = canovaccio per autore umano**, non template-fill automatico.
8. **Vietato copiare item ministeriali** — i pattern bastano per generare originale.

## 5. Mappa pattern → argomento ad alto rischio

| Argomento | Pattern dominanti |
|---|---|
| Distanza di sicurezza | P07, P08, P09, P17, P18 (densità altissima) |
| Precedenze e segnali | P03, P05, P06, P13 |
| Sosta e fermata | P10, P11, P13, P14 |
| Alcol/velocità/sanzioni | P07 + P10 |
| Dispositivi/equipaggiamento | P03, P12, F04 |
| Norme di comportamento | P01, P02, P04, P12, P15, P16 |

## Note operative

1. Letteratura accademica italiana sulla psicolinguistica dei quiz patente:
   non trovata. Eventuale ricerca futura su Osservatorio Sicurezza Stradale.
2. Tassi di errore per pattern: solo patentati.it fornisce % (27-38% su distanza
   di sicurezza). PatenteGo può raccogliere il proprio dataset.
3. Nessun rischio legale: i pattern qui sono originali, non item ministeriali.

## Fonti

- https://www.ilportaledellautomobilista.it/web/portale-automobilista/foglio-rosa-e-prove-new
- https://www.asaps.it/4263-scheda_quiz_per_l_esame_teorico_della_patente_b.html
- https://www.lapatentediguida.com/esame-patente-b-strategie-non-testa-la-memoria-ma-la-capacita-di-riconoscere-schemi/
- https://www.skuola.net/news/motori/trucchi-trabocchetti-patente.html
- https://www.virgilio.it/motori/info-utili/patente/quiz-patente-errori/271773/
- https://www.agenziapallacorda.it/trucchi-quiz-patente/
- https://www.patentati.it/quiz-patente-b/trucchi/domande-trabocchetto/distanza-di-sicurezza.html
- https://www.money.it/quiz-patente-consigli-trucchi-superare-scritto
- https://neith.guidaevai.com/blogs/blog/domande-difficili-esame-patente
- https://www.ammissione.it/quiz-patente/distanza-sicurezza-esame-teoria-patente/27209/
