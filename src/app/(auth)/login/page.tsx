import { redirect } from 'next/navigation'

import { LoginForm } from '@/components/auth/LoginForm'
import { Card } from '@/components/ui/Card'
import { PageShell } from '@/components/ui/PageShell'
import { getCurrentUser } from '@/lib/auth/server'

export const metadata = { title: 'Accedi' }

export default async function LoginPage() {
  const user = await getCurrentUser()
  if (user) redirect('/dashboard')

  return (
    <PageShell centered>
      <Card className="w-full">
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Accedi</h1>
          <p className="text-sm text-[var(--muted)]">
            Riprendi il tuo percorso R.O.T.T.A.
          </p>
        </div>
        <LoginForm />
      </Card>
    </PageShell>
  )
}
