# T4 — UI & FRONTEND

> **Setup terminale:** `/effort high` — Abilita plugin: shadcn/ui (tramite plugin Vercel), Agent Browser (per verificare visivamente le pagine su mobile)

---

Sei l'AGENTE UI del progetto PatenteGo — un coach intelligente per la patente B italiana 2026, basato sul metodo R.O.T.T.A. Mobile-first, dark mode.

**Working directory:** questa cartella è già il repo clonato, branch `claude/patentego-rotta-method-Pf7tU`.

## REGOLA DI COORDINAMENTO

Ci sono 4 agenti Claude Code che lavorano **in parallelo nella stessa cartella**. L'agente T1 (Architetto) è il direttore.

**IL TUO DOMINIO ESCLUSIVO è:**
- `src/components/` (tutti i componenti React)
- `src/app/` (pagine e layout di sezione — **ESCLUSO** `src/app/layout.tsx` root e `src/app/api/`)
- `src/styles/` (stili globali aggiuntivi, se necessario)
- `public/` (assets statici, icone, manifest)

**NON TOCCARE MAI:**
- Root config (`package.json`, `next.config`, `tailwind.config`) — dominio di T1
- `supabase/`, `src/types/`, `src/lib/db/`, `src/lib/auth/` — dominio di T1
- `src/app/layout.tsx` (root layout) — dominio di T1
- `src/app/api/` — dominio di T1
- `src/data/`, `docs/content/` — dominio di T2
- `src/lib/engine/`, `src/lib/fsrs/` — dominio di T3

Se vedi file di altri agenti, **NON modificarli**. Per i dati e le funzioni engine, crea mock/stub temporanei in `src/components/__mocks__/`. Quando gli altri agenti finiranno, collegherai tutto.

Se `src/app/layout.tsx` non esiste ancora (T1 non ha finito), **aspetta** — non creare il root layout. Crea solo le tue pagine e i tuoi layout di sezione.

## DESIGN SYSTEM

- **Mobile-first** (360px baseline, scale up con Tailwind breakpoints `sm:`, `md:`, `lg:`)
- **Dark mode default** — sfondo zinc-950/900, testi zinc-50/100
- Accento primario: **indaco** (`indigo-500`) per azioni primarie
- Feedback: **verde** (`emerald-500`) per corretto, **rosso** (`rose-500`) per errore, **ambra** (`amber-500`) per warning
- Font: **Geist Sans** per UI, **Geist Mono** per codici/numeri/timer
- Angoli arrotondati (`rounded-xl` per card, `rounded-lg` per bottoni)
- Spacing generoso per touch target (**min 44px** aree cliccabili)
- Palette: zinc/neutral per sfondo, un accento primario, feedback cromatico chiaro

**Usa shadcn/ui:**
- Controlla se T1 ha già inizializzato shadcn (`components.json` esiste?). Se no, inizializza: `npx shadcn@latest init` (dark mode, zinc, New York style)
- Installa i componenti necessari: `npx shadcn@latest add button card progress badge dialog sheet tabs separator avatar slider toggle`

## IL TUO LAVORO

### Fase 1 — Mock data

Crea `src/components/__mocks__/data.ts` con dati fittizi per tutti i componenti:
```typescript
// Mock quiz items, sessioni, progressi, profilo utente
// Questi mock saranno rimpiazzati dai dati reali di T2 e T3
export const mockQuizItem = { ... }
export const mockSession = { ... }
export const mockProgress = { ... }
export const mockUser = { display_name: 'Marco', exam_target_date: '2026-06-15', ... }
```

### Fase 2 — Componenti layout

Crea `src/components/layout/`:

**BottomNav.tsx** — navigazione mobile bottom bar
- 4 tab: Studio (icona libro), Simulazione (icona cronometro), Progressi (icona grafico), Profilo (icona utente)
- Evidenzia tab attivo con accento indaco
- Fixed bottom, safe area padding per notch/home indicator
- Nascondi su desktop (>768px), sostituisci con sidebar

**Header.tsx** — header compatto
- Logo "PatenteGo" a sinistra (testo bold + icona strada stilizzata)
- Streak badge al centro (fiamma + numero)
- Settings gear a destra

**PageShell.tsx** — wrapper layout
- Header top + contenuto scrollabile + BottomNav bottom
- Padding safe area top/bottom
- Max width `md` per centrare su desktop

### Fase 3 — Componenti Quiz

Crea `src/components/quiz/`:

**QuizCard.tsx** — card principale domanda V/F
- Mostra: testo domanda (font grande, leggibile), badge argomento (colorato), badge fase R.O.T.T.A. (con icona)
- Due bottoni grandi: **VERO** (verde outline) e **FALSO** (rosso outline)
- Min altezza bottoni: **60px**, full width, spacing generoso
- Animazione press: scale down leggero

**QuizFeedback.tsx** — overlay post-risposta
- Background verde (corretto) o rosso (sbagliato) con opacità leggera
- Icona grande (check/X) con animazione
- Testo spiegazione con scroll se lungo
- Per items trappola: sezione evidenziata "Pattern P04 — Scambio può/deve" con badge
- Per items transfer: "Scenario: Autostrada di notte con pioggia"
- Pulsante "Avanti →" grande in fondo

**QuizTimer.tsx** — timer circolare (solo per modalità simulazione)
- SVG circle progress, countdown da 20:00
- Colore: bianco → ambra sotto 5 min → rosso sotto 2 min
- Font Geist Mono per i numeri

**QuizProgress.tsx** — barra progresso sessione
- Progress bar con items fatti / totali
- Piccoli indicatori colorati per ogni risposta data (verde/rosso)

**SessionSummary.tsx** — riepilogo fine sessione
- Card con statistiche: totali, corretti, %, tempo
- Lista errori raggruppati per argomento
- Badge "PROMOSSO" o "BOCCIATO" per simulazione
- Due CTA: "Studia ancora" e "Torna alla home"

### Fase 4 — Pagine dell'app

**Pagine auth** — `src/app/(auth)/`:

`login/page.tsx` — login semplice
- Card centrata, campo email + password, pulsante "Entra"
- Link "Non hai un account? Registrati"
- Background decorativo sottile (road lines?)

`register/page.tsx` — registrazione
- Nome, email, password
- Date picker "Quando hai l'esame?" (campo importante per calibrazione FSRS)
- Pulsante "Inizia il viaggio"

**Layout main** — `src/app/(main)/layout.tsx`:
- Wrappa con PageShell (Header + BottomNav)
- **NON è il root layout** — è il layout del gruppo (main)

**Home** — `src/app/(main)/page.tsx`:
- Saluto: "Ciao Marco! -42 giorni al tuo esame"
- Card "Studia ora" — grande, accento indaco, icona libro → link a /studio
- Card "Simula esame" — secondaria, icona cronometro → link a /simulazione
- Progress bar globale: "127/330 concetti padroneggiati"
- Streak badge: "🔥 7 giorni consecutivi"
- Sezione "Aree da ripassare" — top 3 argomenti deboli con mini barra progresso

**Studio** — `src/app/(main)/studio/page.tsx`:
- Schermata di setup: scegli durata (10/20/30 min), argomenti focus (opzionale)
- Poi flusso quiz: QuizCard → risposta → QuizFeedback → next → ... → SessionSummary
- Header con fase R.O.T.T.A. corrente e QuizProgress

**Simulazione** — `src/app/(main)/simulazione/page.tsx`:
- Intro: "Esame simulato — 30 domande, 20 minuti, max 3 errori"
- Pulsante "Inizia"
- Flusso: QuizCard + QuizTimer, feedback solo alla fine
- Risultato: SessionSummary con verdetto PROMOSSO/BOCCIATO

**Progressi** — `src/app/(main)/progressi/page.tsx`:
- Tabs: "Argomenti" | "R.O.T.T.A." | "Calendario"
- Tab Argomenti: 25 barre orizzontali con % e colore
- Tab R.O.T.T.A.: per ogni argomento, indicatore delle 5 fasi (quali completate)
- Tab Calendario: heatmap settimanale (stile GitHub contributions)
- ReadinessGauge in alto: cerchio con % stima superamento

**Profilo** — `src/app/(main)/profilo/page.tsx`:
- Avatar + nome
- Data esame (modificabile)
- Slider desired_retention (0.85 - 0.95) con spiegazione breve
- Statistiche lifetime: sessioni totali, items completati, tempo totale
- Pulsante logout

### Fase 5 — Componenti Progressi

Crea `src/components/progress/`:

**ArgomentoBar.tsx** — barra singola argomento
- Nome argomento a sinistra, % a destra, barra colorata (rosso <40%, ambra 40-70%, verde >70%)

**ReadinessGauge.tsx** — cerchio SVG con % stima esame
- Grande, centrato, con numero % al centro
- Colore: rosso <50%, ambra 50-75%, verde >75%
- Testo sotto: "Probabilità di superamento"

**WeeklyHeatmap.tsx** — griglia 7×N settimane
- Celle colorate per intensità studio (0 = vuoto, 1-3 = leggero, 4+ = intenso)

**StreakBadge.tsx** — badge compatto fiamma + numero
- Animazione fiamma se streak > 0

**PhaseIndicator.tsx** — 5 step orizzontali per le fasi R.O.T.T.A.
- Icone: 👁 Riconosci, 💡 Origina, ⚠️ Trappola, 🔄 Trasferisci, ⚡ Automatizza
- Step completato = pieno, corrente = pulsante, futuro = grigio

### Fase 6 — Loading, error, stati vuoti

Per ogni pagina in `(main)/`:
- `loading.tsx` — skeleton coerente col layout (shimmer su dark)
- `error.tsx` — messaggio amichevole con pulsante retry
- Stati vuoti dentro le pagine:
  - Home senza sessioni: "Benvenuto! Inizia la tua prima sessione di studio"
  - Progressi vuoti: "Completa la prima sessione per vedere i tuoi progressi"
  - Simulazione mai fatta: "Non hai ancora simulato un esame — provaci!"

### Fase 7 — PWA basics

Crea `public/manifest.json`:
```json
{
  "name": "PatenteGo — Coach Patente B",
  "short_name": "PatenteGo",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#09090b",
  "theme_color": "#6366f1",
  "icons": [...]
}
```

Crea icone SVG semplici in `public/icons/` — lettera "P" stilizzata su sfondo indaco, varie dimensioni (192×192, 512×512).

---

**Committa e push** al completamento di ogni fase.

**NOTA:** Usa **SEMPRE** dati mock dai file in `__mocks__/`. Quando T1-T3 finiranno, il collegamento sarà semplice — basterà sostituire gli import mock con quelli reali.
