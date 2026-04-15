@AGENTS.md

# PatenteGo — Guida per gli agenti

Coach intelligente per la patente B italiana 2026, basato sul metodo
**R.O.T.T.A.** (Riconosci, Origina, Trappola, Trasferisci, Automatizza).

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind v4 + Supabase + Vercel. Mobile-first, dark mode.

## Lingua

- **Contenuti** (quiz, spiegazioni, UI testuale): **italiano**
- **Codice, commenti tecnici, identificatori, nomi di file**: **inglese**
- Eccezione: i tipi di dominio che mappano il CdS possono usare termini italiani (`argomenti`, `concetti`, `fase_rotta`, `trappola`, etc.) perché la terminologia ministeriale è italiana.

## Coordinamento multi-agente

Questo repo è lavorato in parallelo da **4 agenti Claude Code** nella stessa working directory, sullo stesso branch (`claude/patentego-rotta-method-Pf7tU`). Ogni agente ha un dominio esclusivo. **Non uscire dal tuo dominio.** Se vedi file di un altro agente, non modificarli.

| Agente | Ruolo | Dominio esclusivo |
| --- | --- | --- |
| **T1** Architetto | Infra, DB, auth, API | Root config, `supabase/`, `src/types/`, `src/lib/db/`, `src/lib/auth/`, `src/app/layout.tsx` (root), `src/app/api/`, `proxy.ts`, `CLAUDE.md` |
| **T2** Contenuti | Dati normativi e quiz | `src/data/`, `docs/content/` |
| **T3** Engine | Metodo R.O.T.T.A. + FSRS | `src/lib/engine/`, `src/lib/fsrs/` |
| **T4** UI | Frontend | `src/components/`, `src/app/` (pagine e layout di sezione, **NON** il root layout né `src/app/api/`), `src/styles/`, `public/` |

Regola generica: se una cartella del tuo dominio non esiste ancora, creala tu; ma non creare cartelle al di fuori del tuo dominio. Se hai bisogno di tipi condivisi che T1 non ha ancora creato, usa **tipi locali temporanei** nel tuo dominio (es. `src/data/_types.ts`, `src/lib/engine/types.ts`) e collegali quando T1 avrà finito.

## Convenzioni di progetto

### Struttura file
```
src/
  app/
    layout.tsx          # root layout (T1)
    page.tsx            # home page (T4)
    globals.css         # stili globali (T4)
    (auth)/             # route group login/register (T4)
    (main)/             # route group app autenticata (T4)
    api/                # route handlers (T1)
  components/           # React components (T4)
  data/                 # contenuti normativi (T2)
  lib/
    db/                 # client Supabase + query helpers (T1)
    auth/               # sign in/up/out, session helpers (T1)
    engine/             # motore R.O.T.T.A., session manager (T3)
    fsrs/               # wrapper ts-fsrs (T3)
  styles/               # (T4)
  types/                # tipi condivisi (T1)
proxy.ts                # Next.js 16 proxy (auth refresh) (T1)
supabase/
  migrations/           # .sql migrazioni (T1)
public/                 # (T4)
docs/
  research/             # Fase 0 research — READ-ONLY per tutti
  content/              # (T2)
```

### Naming
- File TypeScript: `kebab-case.ts` per utility, `PascalCase.tsx` per componenti React
- Cartelle: `kebab-case`
- Funzioni e variabili: `camelCase`
- Tipi e interfacce: `PascalCase`
- Costanti top-level: `SCREAMING_SNAKE_CASE`
- Tabelle e colonne DB: `snake_case` (italiano per i domini di dominio: `argomenti`, `concetti`, `quiz_items`, `fase_rotta`, etc.)

### Import
- Usa sempre l'alias `@/*` per import da `src/` (configurato in `tsconfig.json`)
- Non usare import relativi lunghi (`../../../`)
- Ordina: library → `@/lib` → `@/components` → `@/types` → `./`

### Tailwind v4
Questo progetto usa **Tailwind v4** (config CSS-first tramite `@theme` in `src/app/globals.css`). Non esiste `tailwind.config.ts`. Per aggiungere token personalizzati, modifica `@theme` in `globals.css` (dominio di T4).

### Design system (riassunto per T1 quando tocca layout)
- Mobile-first, dark mode di default
- Sfondo: zinc-950/900; Testo: zinc-50/100
- Accento primario: indigo-500
- Feedback: emerald-500 (ok), rose-500 (errore), amber-500 (warn)
- Font: Geist Sans (UI) + Geist Mono (numeri, timer, codici)
- Touch target minimo: 44px

## Supabase

- **Project ref:** `sngutjjgonwqrjxodypr`
- **URL:** `https://sngutjjgonwqrjxodypr.supabase.co`
- **MCP:** configurato in `.mcp.json` — richiede `claude /mcp` per l'auth
- **Client lib:** `@supabase/ssr` (server + browser + proxy), `@supabase/supabase-js`
- Variabili: vedi `.env.example` → copiare in `.env.local`
- Pattern SSR: `getAll`/`setAll` per i cookies (il pattern `get`/`set`/`remove` è deprecato)
- Usa **`supabase.auth.getUser()`** per decisioni di autorizzazione (verifica token server-side). `getSession()` non è verificato.

## Next.js 16 — Note critiche

Vedi anche `AGENTS.md`. Punti salienti rispetto a Next.js ≤15:
- **`middleware.ts` è diventato `proxy.ts`** (stessa funzionalità, nuovo nome). Il file sta nella root del progetto o in `src/`. La funzione si chiama `proxy`, non `middleware`.
- **Proxy NON deve essere usato come unico sistema di autorizzazione.** È una "optimistic check". La sessione va verificata anche nei route handlers / server components (ogni Server Function è una POST sul proprio path, quindi un matcher che esclude un path salta la sessione).
- **Route Handlers** non sono cachate di default. Per cachare un GET usa `export const dynamic = 'force-static'`.
- **Runtime:** di default Node.js, sia per proxy che per route handlers. Evita l'edge runtime (compatibilità ridotta, no Fluid Compute).
- **Tailwind v4** — config CSS in `@theme`, non in `tailwind.config.ts`.
- **React 19** — `use()` hook, async Server Components, etc.

## Commit e branch

- Branch di sviluppo: `claude/patentego-rotta-method-Pf7tU`
- Commit messages: presente imperativo in italiano o inglese, brevi. Prefissi consigliati: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- Commit incrementali per fase (non batchare tutto il lavoro in un solo commit).
- **Non** fare force push su branch condivisi.
- **Non** modificare file fuori dal tuo dominio, anche in modo "innocuo".

## Comandi utili

```bash
npm run dev          # dev server
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint flat config
```

## Riferimenti documentazione interna

- `docs/research/01-programma-esame.md` — programma ministeriale (25 argomenti, ~330 concetti)
- `docs/research/02-cds-aggiornato.md` — CdS 2024-2026 (L. 177/2024)
- `docs/research/03-pattern-trappole.md` — 18 pattern trappola + 5 folkloristici
- `docs/research/04-evidenze-scientifiche.md` — base scientifica del metodo R.O.T.T.A. e parametri di calibrazione
- `PROJECT_LOG.md` — log di progetto per fase
- `T1-ARCHITETTO.md`, `T2-CONTENUTI.md`, `T3-ENGINE.md`, `T4-UI.md` — brief di ciascun agente
