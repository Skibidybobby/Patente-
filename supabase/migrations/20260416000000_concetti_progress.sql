-- ============================================================================
-- PatenteGo — concetti_progress
-- ----------------------------------------------------------------------------
-- Persistenza dello stato R.O.T.T.A. per coppia (utente, concetto):
-- fase corrente + contatori della fase. Richiesta dall'engine
-- (`src/lib/engine/rotta.ts` → `ConceptProgress`).
-- ============================================================================

create table if not exists public.concetti_progress (
  id                     uuid primary key default gen_random_uuid(),
  user_id                uuid not null references public.profiles(id) on delete cascade,
  concetto_id            uuid not null references public.concetti(id) on delete cascade,
  current_phase          text not null default 'riconosci'
                         check (current_phase in
                           ('riconosci','origina','trappola','trasferisci','automatizza')),
  phase_items_completed  int  not null default 0 check (phase_items_completed >= 0),
  phase_items_correct    int  not null default 0 check (phase_items_correct   >= 0),
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now(),
  unique (user_id, concetto_id),
  -- correct non può superare completed
  constraint concetti_progress_correct_lte_completed
    check (phase_items_correct <= phase_items_completed)
);

comment on table public.concetti_progress is
  'Stato R.O.T.T.A. per utente × concetto: fase corrente e contatori della fase.';
comment on column public.concetti_progress.current_phase is
  'Fase R.O.T.T.A. corrente del concetto per l''utente.';
comment on column public.concetti_progress.phase_items_completed is
  'Numero di item della fase corrente a cui l''utente ha già risposto.';
comment on column public.concetti_progress.phase_items_correct is
  'Numero di risposte corrette date nella fase corrente.';

-- ----------------------------------------------------------------------------
-- Indici
-- ----------------------------------------------------------------------------
create index if not exists concetti_progress_user_phase_idx
  on public.concetti_progress (user_id, current_phase);

create index if not exists concetti_progress_user_concept_idx
  on public.concetti_progress (user_id, concetto_id);

-- ----------------------------------------------------------------------------
-- updated_at trigger
-- ----------------------------------------------------------------------------
drop trigger if exists concetti_progress_set_updated_at on public.concetti_progress;
create trigger concetti_progress_set_updated_at
  before update on public.concetti_progress
  for each row execute function public.set_updated_at();

-- ----------------------------------------------------------------------------
-- RLS
-- ----------------------------------------------------------------------------
alter table public.concetti_progress enable row level security;

drop policy if exists "concetti_progress are visible to the owner"     on public.concetti_progress;
drop policy if exists "concetti_progress can be inserted by the owner" on public.concetti_progress;
drop policy if exists "concetti_progress can be updated by the owner"  on public.concetti_progress;
drop policy if exists "concetti_progress can be deleted by the owner"  on public.concetti_progress;

create policy "concetti_progress are visible to the owner"
  on public.concetti_progress
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "concetti_progress can be inserted by the owner"
  on public.concetti_progress
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "concetti_progress can be updated by the owner"
  on public.concetti_progress
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "concetti_progress can be deleted by the owner"
  on public.concetti_progress
  for delete
  to authenticated
  using (auth.uid() = user_id);
