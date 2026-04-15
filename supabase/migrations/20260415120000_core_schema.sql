-- ============================================================================
-- PatenteGo — core schema
-- ----------------------------------------------------------------------------
-- Coach intelligente per la patente B italiana 2026, metodo R.O.T.T.A.
-- Tabelle dominio (argomenti/concetti/quiz_items) + per-utente
-- (profiles/fsrs_cards/sessioni/risposte). RLS in una migrazione separata.
-- ============================================================================

-- gen_random_uuid() lives in pgcrypto, which Supabase ships with.
create extension if not exists pgcrypto;

-- ----------------------------------------------------------------------------
-- profiles — estende auth.users
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id                uuid primary key references auth.users(id) on delete cascade,
  display_name      text,
  exam_target_date  date,
  desired_retention numeric(4,3) not null default 0.90
                    check (desired_retention between 0.80 and 0.99),
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);
comment on table  public.profiles is
  'Profilo utente PatenteGo (estensione di auth.users).';
comment on column public.profiles.desired_retention is
  'Target FSRS di retrieval (0.80-0.99). Default 0.90 da Dunlosky 2013.';
comment on column public.profiles.exam_target_date is
  'Data esame teorico. Usata per aumentare desired_retention se <45gg.';

-- ----------------------------------------------------------------------------
-- argomenti — 25 argomenti ministeriali
-- ----------------------------------------------------------------------------
create table if not exists public.argomenti (
  id        serial primary key,
  numero    int  not null unique check (numero between 1 and 25),
  nome      text not null,
  tipo      text not null check (tipo in ('primario', 'integrativo')),
  peso_quiz int  not null default 0 check (peso_quiz >= 0)
);
comment on table  public.argomenti is
  '25 argomenti ministeriali del programma patente B (DM 19/12/2012).';
comment on column public.argomenti.tipo is
  '15 primari + 10 integrativi secondo la ripartizione ministeriale.';
comment on column public.argomenti.peso_quiz is
  'Numero stimato di domande all''esame reale per questo argomento.';

-- ----------------------------------------------------------------------------
-- concetti — ~330 concetti atomici
-- ----------------------------------------------------------------------------
create table if not exists public.concetti (
  id                 uuid primary key default gen_random_uuid(),
  argomento_id       int  not null references public.argomenti(id) on delete restrict,
  codice             text not null unique,
  titolo             text not null,
  descrizione        text,
  regola_testo       text,
  articolo_cds       text,
  livello_difficolta int check (livello_difficolta between 1 and 5),
  created_at         timestamptz not null default now()
);
comment on table  public.concetti is
  'Concetti atomici (~330) decomposti dai 25 argomenti ministeriali.';
comment on column public.concetti.codice is
  'Codice stabile tipo "ARG01-C003" per seed deterministici.';
comment on column public.concetti.articolo_cds is
  'Riferimento articolo del Codice della Strada (es. "art. 173 CdS").';

-- ----------------------------------------------------------------------------
-- quiz_items — domande V/F generate col metodo R.O.T.T.A.
-- ----------------------------------------------------------------------------
create table if not exists public.quiz_items (
  id                uuid primary key default gen_random_uuid(),
  concetto_id       uuid not null references public.concetti(id) on delete cascade,
  fase_rotta        text not null
                    check (fase_rotta in ('riconosci','origina','trappola','trasferisci','automatizza')),
  testo_domanda     text not null,
  risposta_corretta boolean not null,
  spiegazione       text,
  pattern_trappola  text, -- P01..P18, null se non è un item trappola
  scenario_transfer text, -- descrizione scenario, null se non è un item transfer
  created_at        timestamptz not null default now(),
  -- un item trappola deve avere pattern, un item transfer deve avere scenario
  constraint quiz_items_trappola_has_pattern
    check (fase_rotta <> 'trappola' or pattern_trappola is not null),
  constraint quiz_items_transfer_has_scenario
    check (fase_rotta <> 'trasferisci' or scenario_transfer is not null)
);
comment on table  public.quiz_items is
  'Domande V/F per le 5 fasi R.O.T.T.A., generate con pattern trappola.';
comment on column public.quiz_items.pattern_trappola is
  'ID pattern (P01-P18) dichiarato a posteriori nella spiegazione.';

-- ----------------------------------------------------------------------------
-- fsrs_cards — stato FSRS per ogni (utente, quiz_item)
-- ----------------------------------------------------------------------------
create table if not exists public.fsrs_cards (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references public.profiles(id) on delete cascade,
  quiz_item_id   uuid not null references public.quiz_items(id) on delete cascade,
  stability      double precision not null default 0,
  difficulty     double precision not null default 0,
  elapsed_days   double precision not null default 0,
  scheduled_days double precision not null default 0,
  reps           int  not null default 0 check (reps    >= 0),
  lapses         int  not null default 0 check (lapses  >= 0),
  state          text not null default 'new'
                 check (state in ('new','learning','review','relearning')),
  due            timestamptz,
  last_review    timestamptz,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  unique (user_id, quiz_item_id)
);
comment on table public.fsrs_cards is
  'Stato FSRS (Free Spaced Repetition Scheduler) per ogni coppia utente x item.';

-- ----------------------------------------------------------------------------
-- sessioni — log sessioni di studio
-- ----------------------------------------------------------------------------
create table if not exists public.sessioni (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid not null references public.profiles(id) on delete cascade,
  started_at          timestamptz not null default now(),
  ended_at            timestamptz,
  fase_rotta          text check (fase_rotta in
                        ('riconosci','origina','trappola','trasferisci','automatizza')),
  modalita            text not null default 'studio'
                      check (modalita in ('studio','simulazione')),
  items_total         int not null default 0 check (items_total   >= 0),
  items_correct       int not null default 0 check (items_correct >= 0),
  argomenti_mescolati int[] not null default '{}',
  durata_secondi      int check (durata_secondi >= 0)
);
comment on table  public.sessioni is
  'Log di una sessione di studio o simulazione esame.';
comment on column public.sessioni.fase_rotta is
  'Fase prevalente; null per sessioni miste o simulazione esame.';

-- ----------------------------------------------------------------------------
-- risposte — log di ogni risposta data
-- ----------------------------------------------------------------------------
create table if not exists public.risposte (
  id                uuid primary key default gen_random_uuid(),
  sessione_id       uuid not null references public.sessioni(id) on delete cascade,
  quiz_item_id      uuid not null references public.quiz_items(id) on delete restrict,
  user_id           uuid not null references public.profiles(id) on delete cascade,
  risposta_data     boolean not null,
  corretta          boolean not null,
  tempo_risposta_ms int check (tempo_risposta_ms >= 0),
  created_at        timestamptz not null default now()
);
comment on table public.risposte is
  'Log di ogni risposta V/F data dall''utente in una sessione.';

-- ----------------------------------------------------------------------------
-- Indici
-- ----------------------------------------------------------------------------
create index if not exists concetti_argomento_id_idx
  on public.concetti (argomento_id);

create index if not exists quiz_items_concetto_id_idx
  on public.quiz_items (concetto_id);

create index if not exists quiz_items_fase_rotta_idx
  on public.quiz_items (fase_rotta);

create index if not exists quiz_items_pattern_trappola_idx
  on public.quiz_items (pattern_trappola)
  where pattern_trappola is not null;

create index if not exists fsrs_cards_user_due_idx
  on public.fsrs_cards (user_id, due)
  where due is not null;

create index if not exists fsrs_cards_user_state_idx
  on public.fsrs_cards (user_id, state);

create index if not exists sessioni_user_started_idx
  on public.sessioni (user_id, started_at desc);

create index if not exists risposte_sessione_idx
  on public.risposte (sessione_id);

create index if not exists risposte_user_created_idx
  on public.risposte (user_id, created_at desc);

-- ----------------------------------------------------------------------------
-- updated_at — trigger automatico
-- ----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists fsrs_cards_set_updated_at on public.fsrs_cards;
create trigger fsrs_cards_set_updated_at
  before update on public.fsrs_cards
  for each row execute function public.set_updated_at();

-- ----------------------------------------------------------------------------
-- Auto-create profile on auth.users insert
-- ----------------------------------------------------------------------------
-- Alla registrazione di un nuovo utente Supabase crea automaticamente la
-- riga profiles corrispondente. display_name pescato da raw_user_meta_data
-- se l'app lo ha passato al sign-up, altrimenti null.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, exam_target_date)
  values (
    new.id,
    nullif(new.raw_user_meta_data->>'display_name', ''),
    (nullif(new.raw_user_meta_data->>'exam_target_date', ''))::date
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
