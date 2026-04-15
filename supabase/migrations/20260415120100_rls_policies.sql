-- ============================================================================
-- PatenteGo — Row Level Security policies
-- ----------------------------------------------------------------------------
-- Regole:
--   * Contenuti normativi (argomenti, concetti, quiz_items) pubblici in lettura.
--   * Scritture su contenuti solo via service_role (nessuna policy di write).
--   * Dati per-utente (profiles, fsrs_cards, sessioni, risposte) visibili e
--     modificabili solo dal proprietario (auth.uid() = user_id).
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Abilitazione RLS
-- ----------------------------------------------------------------------------
alter table public.profiles    enable row level security;
alter table public.argomenti   enable row level security;
alter table public.concetti    enable row level security;
alter table public.quiz_items  enable row level security;
alter table public.fsrs_cards  enable row level security;
alter table public.sessioni    enable row level security;
alter table public.risposte    enable row level security;

-- ============================================================================
-- CONTENUTI (pubblici in lettura, write solo service_role)
-- ============================================================================

-- argomenti -------------------------------------------------------------------
drop policy if exists "argomenti are readable by everyone" on public.argomenti;
create policy "argomenti are readable by everyone"
  on public.argomenti
  for select
  to anon, authenticated
  using (true);

-- concetti --------------------------------------------------------------------
drop policy if exists "concetti are readable by everyone" on public.concetti;
create policy "concetti are readable by everyone"
  on public.concetti
  for select
  to anon, authenticated
  using (true);

-- quiz_items ------------------------------------------------------------------
drop policy if exists "quiz_items are readable by everyone" on public.quiz_items;
create policy "quiz_items are readable by everyone"
  on public.quiz_items
  for select
  to anon, authenticated
  using (true);

-- Nessuna policy di INSERT/UPDATE/DELETE su contenuti: solo service_role
-- (che bypassa RLS) può modificarli tramite seed script o admin API.

-- ============================================================================
-- PROFILES (ogni utente vede/modifica solo il proprio profilo)
-- ============================================================================
drop policy if exists "profiles are visible to the owner"     on public.profiles;
drop policy if exists "profiles can be inserted by the owner" on public.profiles;
drop policy if exists "profiles can be updated by the owner"  on public.profiles;
drop policy if exists "profiles can be deleted by the owner"  on public.profiles;

create policy "profiles are visible to the owner"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

-- Nota: la riga profiles viene di norma creata dal trigger handle_new_user
-- (SECURITY DEFINER), ma lasciamo una policy INSERT coerente nel caso
-- l'applicazione debba chiamare insert manualmente.
create policy "profiles can be inserted by the owner"
  on public.profiles
  for insert
  to authenticated
  with check (auth.uid() = id);

create policy "profiles can be updated by the owner"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "profiles can be deleted by the owner"
  on public.profiles
  for delete
  to authenticated
  using (auth.uid() = id);

-- ============================================================================
-- FSRS_CARDS (ogni utente vede/modifica solo le proprie card)
-- ============================================================================
drop policy if exists "fsrs_cards are visible to the owner"      on public.fsrs_cards;
drop policy if exists "fsrs_cards can be inserted by the owner"  on public.fsrs_cards;
drop policy if exists "fsrs_cards can be updated by the owner"   on public.fsrs_cards;
drop policy if exists "fsrs_cards can be deleted by the owner"   on public.fsrs_cards;

create policy "fsrs_cards are visible to the owner"
  on public.fsrs_cards
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "fsrs_cards can be inserted by the owner"
  on public.fsrs_cards
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "fsrs_cards can be updated by the owner"
  on public.fsrs_cards
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "fsrs_cards can be deleted by the owner"
  on public.fsrs_cards
  for delete
  to authenticated
  using (auth.uid() = user_id);

-- ============================================================================
-- SESSIONI (ogni utente vede/modifica solo le proprie sessioni)
-- ============================================================================
drop policy if exists "sessioni are visible to the owner"     on public.sessioni;
drop policy if exists "sessioni can be inserted by the owner" on public.sessioni;
drop policy if exists "sessioni can be updated by the owner"  on public.sessioni;
drop policy if exists "sessioni can be deleted by the owner"  on public.sessioni;

create policy "sessioni are visible to the owner"
  on public.sessioni
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "sessioni can be inserted by the owner"
  on public.sessioni
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "sessioni can be updated by the owner"
  on public.sessioni
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "sessioni can be deleted by the owner"
  on public.sessioni
  for delete
  to authenticated
  using (auth.uid() = user_id);

-- ============================================================================
-- RISPOSTE (ogni utente vede/modifica solo le proprie risposte)
-- ============================================================================
drop policy if exists "risposte are visible to the owner"     on public.risposte;
drop policy if exists "risposte can be inserted by the owner" on public.risposte;
drop policy if exists "risposte can be updated by the owner"  on public.risposte;
drop policy if exists "risposte can be deleted by the owner"  on public.risposte;

create policy "risposte are visible to the owner"
  on public.risposte
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "risposte can be inserted by the owner"
  on public.risposte
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "risposte can be updated by the owner"
  on public.risposte
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "risposte can be deleted by the owner"
  on public.risposte
  for delete
  to authenticated
  using (auth.uid() = user_id);
