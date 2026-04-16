import { redirect } from 'next/navigation'

import { RegisterForm } from '@/components/auth/RegisterForm'
import { Card } from '@/components/ui/Card'
import { PageShell } from '@/components/ui/PageShell'
import { getCurrentUser } from '@/lib/auth/server'

export const metadata = { title: 'Registrati' }

export default async function RegisterPage() {
  const user = await getCurrentUser()
  if (user) redirect('/dashboard')

  return (
    <PageShell centered>
      <Card className="w-full">
        <div className="mb-6 flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crea il tuo account
          </h1>
          <p className="text-sm text-[var(--muted)]">
            Prepara la patente B con il metodo R.O.T.T.A.
          </p>
        </div>
        <RegisterForm />
      </Card>
    </PageShell>
  )
}
