import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageShell } from '@/components/ui/PageShell'
import { getCurrentUser } from '@/lib/auth/server'

export default async function Home() {
  const user = await getCurrentUser()
  if (user) redirect('/dashboard')

  return (
    <PageShell>
      <section className="pt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)]">
            Patente B · Italia 2026
          </span>
          <h1 className="text-4xl font-semibold tracking-tight leading-tight">
            Il coach che ti fa passare la teoria al primo colpo.
          </h1>
          <p className="text-base text-[var(--muted)]">
            Metodo <b className="text-[var(--foreground)]">R.O.T.T.A.</b> + ripetizione
            spaziata FSRS. Ogni concetto, 5 fasi: Riconosci, Origina, Trappola,
            Trasferisci, Automatizza.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/register" className="contents">
            <Button size="lg" fullWidth>
              Inizia gratis
            </Button>
          </Link>
          <Link href="/login" className="contents">
            <Button size="lg" variant="secondary" fullWidth>
              Ho già un account
            </Button>
          </Link>
        </div>

        <Card className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            Cosa c&apos;è dentro
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>• 25 argomenti ministeriali, 253 concetti atomici</li>
            <li>• 2.530 domande V/F con 18 pattern trappola</li>
            <li>• Interleaving ≥3 macro-aree per sessione</li>
            <li>• Spaced repetition calibrato (retention 0.90)</li>
          </ul>
        </Card>
      </section>
    </PageShell>
  )
}
