import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageShell } from '@/components/ui/PageShell'
import { requireUser } from '@/lib/auth/server'
import { createServerSupabaseClient } from '@/lib/db/client'
import {
  getConcettiProgressForUser,
  getCurrentProfile,
  getRecentSessioni,
} from '@/lib/db/queries'

export const metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
  const user = await requireUser('/dashboard')
  const db = await createServerSupabaseClient()

  const [profile, progressi, recenti] = await Promise.all([
    getCurrentProfile(db),
    getConcettiProgressForUser(db, user.id),
    getRecentSessioni(db, user.id, 3),
  ])

  const displayName = profile?.display_name?.trim() || 'benvenuto'
  const concetti_studiati = progressi.length
  const concetti_padroneggiati = progressi.filter(
    (p) => p.current_phase === 'automatizza',
  ).length

  return (
    <PageShell
      title={`Ciao ${displayName}`}
      subtitle="Pronto per la prossima sessione?"
    >
      <div className="flex flex-col gap-4">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
                Sessione di studio
              </span>
              <h2 className="text-lg font-semibold">20 minuti, metodo R.O.T.T.A.</h2>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/studio" className="contents">
              <Button size="lg" fullWidth>
                Inizia sessione
              </Button>
            </Link>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
              Concetti studiati
            </span>
            <p className="mt-1 text-2xl font-mono font-semibold">
              {concetti_studiati}
              <span className="text-base text-[var(--muted)]"> / 253</span>
            </p>
          </Card>
          <Card>
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
              Padroneggiati
            </span>
            <p className="mt-1 text-2xl font-mono font-semibold text-[var(--ok)]">
              {concetti_padroneggiati}
            </p>
          </Card>
        </div>

        {recenti.length > 0 && (
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Sessioni recenti
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {recenti.map((s) => {
                const pct =
                  s.items_total > 0
                    ? Math.round((s.items_correct / s.items_total) * 100)
                    : 0
                return (
                  <li key={s.id} className="flex items-center justify-between">
                    <span>
                      {new Date(s.started_at).toLocaleDateString('it-IT', {
                        day: '2-digit',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                    <span className="font-mono">
                      {s.items_correct}/{s.items_total}{' '}
                      <span
                        className={
                          pct >= 85
                            ? 'text-[var(--ok)]'
                            : pct >= 60
                            ? 'text-[var(--warn)]'
                            : 'text-[var(--danger)]'
                        }
                      >
                        ({pct}%)
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </Card>
        )}
      </div>
    </PageShell>
  )
}
