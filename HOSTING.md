# HOSTING — Prossimi passi per mettere online PatenteGo

Guida pratica per portare PatenteGo da "repo locale con Phase 1-4 committata"
a "app funzionante su Vercel con Supabase in produzione".

**Stack bersaglio:** Vercel (host + CI/CD) + Supabase (DB + Auth).
**Project ref Supabase:** `sngutjjgonwqrjxodypr`
**Branch attuale:** `claude/patentego-rotta-method-Pf7tU`

L'ordine conta. Saltare un passo può lasciare l'app in uno stato rotto
che è difficile da debuggare (tipico sintomo: login che "funziona" ma
`/api/quiz` ritorna 401).

---

## 0. Prerequisiti locali

- [ ] Node.js ≥ 20 (il repo è testato su Node 24 LTS). Controlla con `node -v`.
- [ ] `npm -v` funzionante.
- [ ] Account Vercel (vercel.com) con la CLI installata:
      `npm i -g vercel` e poi `vercel login`.
- [ ] Account Supabase con accesso al progetto `sngutjjgonwqrjxodypr`.
- [ ] (opzionale ma consigliato) Supabase CLI:
      `npm i -g supabase` o `brew install supabase/tap/supabase`.

---

## 1. Applicare le migrazioni a Supabase

Lo schema e le RLS policy vivono in due file SQL in
`supabase/migrations/`. **Non sono ancora applicate** al progetto remoto.
Tre opzioni, dal più al meno automatico.

### 1.a — Via MCP Supabase (consigliato se usi Claude Code)

Il file `.mcp.json` configura già il server MCP Supabase, ma serve
l'autenticazione. In una shell Claude Code:

```bash
claude /mcp                 # completa il flow OAuth Supabase
```

Poi chiedi a un agente di eseguire, nell'ordine, queste tool call:

```
mcp__plugin_supabase_supabase__apply_migration(
  project_id="sngutjjgonwqrjxodypr",
  name="core_schema",
  query=<contenuto di supabase/migrations/20260415120000_core_schema.sql>
)

mcp__plugin_supabase_supabase__apply_migration(
  project_id="sngutjjgonwqrjxodypr",
  name="rls_policies",
  query=<contenuto di supabase/migrations/20260415120100_rls_policies.sql>
)
```

### 1.b — Via Supabase CLI

```bash
# Login una tantum
supabase login

# Collega il repo locale al progetto remoto
supabase link --project-ref sngutjjgonwqrjxodypr

# Push delle migrazioni trovate in supabase/migrations/
supabase db push
```

`db push` applica in ordine tutti i file `*.sql` presenti in
`supabase/migrations/` che il server non conosce ancora (tracciati nella
tabella `supabase_migrations.schema_migrations`).

### 1.c — Via Supabase Dashboard (manuale)

1. Apri [https://supabase.com/dashboard/project/sngutjjgonwqrjxodypr/sql/new](https://supabase.com/dashboard/project/sngutjjgonwqrjxodypr/sql/new).
2. Incolla il contenuto di `supabase/migrations/20260415120000_core_schema.sql` e premi **Run**.
3. Incolla il contenuto di `supabase/migrations/20260415120100_rls_policies.sql` e premi **Run**.
4. Verifica in **Database → Tables** che `profiles`, `argomenti`,
   `concetti`, `quiz_items`, `fsrs_cards`, `sessioni`, `risposte` esistano.
5. Verifica in **Authentication → Policies** che le 7 tabelle abbiano
   **RLS enabled** con le policy create dal secondo file.

### Verifica post-migrazione

Indipendentemente dal metodo, controlla che gli advisor Supabase siano
puliti:

```
mcp__plugin_supabase_supabase__get_advisors(
  project_id="sngutjjgonwqrjxodypr", type="security"
)
```

oppure dalla Dashboard → **Advisors**. Aspettati 0 warning sulle tabelle
`public.*`. Se vedi "RLS disabled", torna al passo 1.

---

## 2. Popolare il database con i contenuti (seed)

Le tabelle `argomenti`, `concetti`, `quiz_items`, `patterns` vanno
riempite con i dati che T2 sta generando in `src/data/`. Il seed è
**server-side** e deve usare la service-role key per bypassare RLS.

- [ ] Attendere che T2 finisca `src/data/quiz/` e `src/data/seed.ts`.
- [ ] Creare uno script `scripts/seed.ts` (dominio T1) che:
      1. Carica `src/data/seed.ts` → `getSeedData()`
      2. Costruisce un client con `createServiceRoleClient()` da
         `@/lib/db/client`
      3. `upsert` argomenti (on conflict `numero`)
      4. `upsert` concetti (on conflict `codice`)
      5. `insert` quiz_items (o `upsert` con chiave composita)
- [ ] Aggiungere `"seed": "tsx scripts/seed.ts"` agli `scripts` di `package.json`.
- [ ] Dipendenza dev: `npm i -D tsx`.
- [ ] Eseguirlo con le env vars in locale:
      `npm run seed` (con `.env.local` già popolato — vedi passo 3).

Senza questi passi `/api/quiz` ritorna sempre `{ item: null }` perché
non ci sono `quiz_items` in tabella.

---

## 3. Variabili d'ambiente

### 3.a — In locale (`.env.local`)

```bash
cp .env.example .env.local
```

Poi prendi i valori dalla Dashboard Supabase → **Project Settings →
API**:

| Variabile                              | Fonte                                        |
| -------------------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`             | **Project URL** (già pre-compilato)          |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | **Publishable key** (`sb_publishable_...`)   |
| `SUPABASE_SERVICE_ROLE_KEY`            | **Service role key** — NON esporla al browser |

> Il codice usa la publishable key moderna (`sb_publishable_...`), visibile
> nella Dashboard Supabase → **Project Settings → API Keys → Publishable key**.
> È ruotabile in modo indipendente dalla legacy `anon` JWT.

Prova che tutto funzioni:

```bash
npm run typecheck
npm run dev
# apri http://localhost:3000
```

### 3.b — Su Vercel

```bash
# una volta fatto vercel link (vedi passo 4):
vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development
vercel env add NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY production preview development
vercel env add SUPABASE_SERVICE_ROLE_KEY production preview
```

Nota: **non** mettere `SUPABASE_SERVICE_ROLE_KEY` su `development` se
non serve. Idealmente sta solo su `production` (e su `preview` se ti
serve per gli scripts di seed automatici).

Dopo l'add puoi scaricare le env localmente con `vercel env pull .env.local`.

---

## 4. Collegare il progetto a Vercel

### 4.a — Primo link + deploy di prova

```bash
vercel login
vercel link                  # crea .vercel/project.json (gitignored)
vercel                       # deploy di preview dal branch corrente
```

Al primo `vercel link`:
- **Project name:** `patentego`
- **Framework:** Next.js (autodetect)
- **Root directory:** `./`
- **Build command / Output / Install:** lascia i default

### 4.b — Connessione GitHub per CI/CD (consigliato)

Dashboard Vercel → **New Project → Import Git Repository** →
`Skibidybobby/Patente-`. Vercel pushera un preview per ogni branch /
PR e un deploy production quando qualcosa arriva su `main`.

### 4.c — Promozione a produzione

Finché il codice vive su `claude/patentego-rotta-method-Pf7tU`:

```bash
vercel --prod                # forza produzione da questo branch
```

Quando sei pronto al merge definitivo su `main`, Vercel promuoverà
automaticamente.

---

## 5. Configurare Supabase Auth per l'URL reale

Se non lo fai, il link di conferma email punta a `localhost` e il login
fallisce in produzione con un redirect invalido.

Dashboard Supabase → **Authentication → URL Configuration**:

- [ ] **Site URL:** `https://patentego.vercel.app` (o il tuo dominio custom)
- [ ] **Redirect URLs:** aggiungi
      - `http://localhost:3000/**`
      - `https://patentego.vercel.app/**`
      - `https://*-patentego.vercel.app/**` (per i preview deploy)
      - il dominio custom quando ce l'hai: `https://patentego.it/**`

Dashboard Supabase → **Authentication → Providers → Email**:
- [ ] Abilita **Confirm email** se vuoi la conferma via email
      (raccomandato) o disabilitalo per testing rapido.
- [ ] (Opzionale) personalizza i template email in lingua italiana —
      **Authentication → Email Templates**.

---

## 6. (Opzionale) dominio custom

Una volta che hai il dominio (es. `patentego.it`):

1. Vercel → **Project → Settings → Domains → Add** → `patentego.it`.
2. Vercel ti dà i record DNS da impostare (CNAME o A).
3. Aggiorna il registrar.
4. Torna su Supabase e aggiungi `https://patentego.it/**` ai Redirect URLs (passo 5).

---

## 7. Smoke test post-deploy

Una volta deployato e configurato, verifica manualmente:

- [ ] `GET https://<dominio>/` risponde (pagina T4 quando sarà pronta).
- [ ] `GET https://<dominio>/api/quiz` senza cookie → **401** (corretto, unauthorized).
- [ ] Sign-up con una email test: deve arrivare email di conferma o
      autologin se hai disabilitato confirm email.
- [ ] In `profiles` della Dashboard Supabase → vedi la riga nuova con
      `display_name` valorizzato (il trigger `handle_new_user` ha girato).
- [ ] Una volta loggato, `GET /api/quiz` → **200** con `{ item: ..., source: "fresh" }`
      (assumendo che il seed del passo 2 sia andato).
- [ ] `POST /api/answer` con un quiz_item_id valido → **200** con la valutazione.

Se qualcosa sbaglia, prima cosa: controlla i log.

---

## 8. Monitoring e debugging

- **Log deploy:** `vercel logs <deployment-url>` o Dashboard Vercel → **Logs**.
- **Log runtime / invocazioni:** Vercel Dashboard → **Observability → Logs**.
- **Query DB lente / errori:** Supabase Dashboard → **Logs → Postgres Logs**.
- **Auth errors:** Supabase Dashboard → **Logs → Auth Logs**.
- **Stato sessione RLS:** dal SQL editor, `select auth.uid(), auth.role();`
  dentro una query da utente loggato.

Tool utili:
- `npm run build` in locale riproduce quasi 1:1 il build su Vercel.
- `next dev --inspect` per debuggare proxy / route handlers in VS Code.

---

## 9. Checklist di sicurezza prima del go-live

- [ ] `get_advisors(type="security")` di Supabase → 0 warning.
- [ ] Tutte le 7 tabelle hanno RLS **enabled** e le policy attese.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` è solo in Vercel (no commit, no client).
      Verifica con `grep -r "SUPABASE_SERVICE_ROLE_KEY" src/` → nessun hit.
- [ ] `.env.local` ignorato da git (già in `.gitignore`, check con
      `git check-ignore .env.local`).
- [ ] Password policy: Supabase Auth → **Providers → Email → Password**
      → min 8 caratteri, Leaked password protection **enabled**.
- [ ] Rate limiting: Supabase Auth → **Rate Limits** → valori di default
      vanno bene per MVP, rivedere sotto attacco.
- [ ] Rotazione delle chiavi pianificata (Supabase → **Project Settings
      → API → Legacy API keys** se le stai ancora usando).

---

## 10. Debiti tecnici aperti (non bloccanti per il go-live MVP)

Da fare dopo il primo deploy, quando T2/T3/T4 saranno completati:

- [ ] Sostituire `src/types/database.ts` scritto a mano con l'output
      di `supabase gen types typescript --project-id sngutjjgonwqrjxodypr`
      per evitare drift schema-codice.
- [ ] Integrare in `/api/quiz` e `/api/answer` la logica reale di T3
      (`src/lib/engine/session.selectNextItem`, `scheduler.reviewCard`)
      al posto degli stub attuali.
- [ ] Aggiungere `/api/session/start` e `/api/session/end` se T4 ne ha
      bisogno per il flusso UI.
- [ ] Aggiungere `/api/profile` per `updateCurrentProfile` (slider
      `desired_retention`, data esame).
- [ ] Observability: Vercel Speed Insights + Vercel Agent (AI code
      review sui PR) abilitati in Project Settings.
- [ ] Backup strategy: Supabase fa PITR di default sul piano Pro, su
      Free c'è solo daily → valuta l'upgrade prima di dati utenti reali.
- [ ] Cron job FSRS: quotidiano per calcolare reminder push delle cards
      scadute (Vercel Cron → `POST /api/cron/reminders`).
- [ ] Email templates Supabase Auth tradotti in italiano.
- [ ] PWA: T4 crea `public/manifest.json` e icone; verificare che
      l'installazione "Add to Home Screen" funzioni su iOS e Android.

---

**Riferimenti incrociati:**
- `CLAUDE.md` — convenzioni e mappa proprietà del repo
- `.env.example` — variabili d'ambiente attese
- `supabase/migrations/` — DDL da applicare
- `PROJECT_LOG.md` — log delle fasi del progetto
- [Next.js 16 deployment docs](https://nextjs.org/docs/app/getting-started/deploying)
- [Supabase SSR + Next.js guide](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Vercel Next.js hosting](https://vercel.com/docs/frameworks/nextjs)
