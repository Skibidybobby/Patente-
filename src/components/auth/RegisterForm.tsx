'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useTransition } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { signUpWithPassword } from '@/lib/auth/actions'

export function RegisterForm() {
  const router = useRouter()

  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  async function onSubmit(formData: FormData) {
    setError(null)
    setOk(null)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')
    const display_name = String(formData.get('display_name') ?? '').trim()
    const exam_target_date =
      String(formData.get('exam_target_date') ?? '').trim() || undefined

    startTransition(async () => {
      const res = await signUpWithPassword({
        email,
        password,
        display_name: display_name || undefined,
        exam_target_date,
      })
      if ('error' in res) {
        setError(res.error)
        return
      }
      // Supabase può richiedere conferma email. Se la sessione esiste già,
      // `/dashboard` funziona; altrimenti mostriamo messaggio di conferma.
      setOk('Account creato. Controlla la email per confermare, poi accedi.')
      setTimeout(() => router.replace('/login'), 2000)
    })
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-4">
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="nome@esempio.it"
        autoComplete="email"
        required
      />
      <Input
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        hint="Almeno 6 caratteri"
        required
        minLength={6}
      />
      <Input
        name="display_name"
        type="text"
        label="Nome (opzionale)"
        placeholder="Come vuoi essere chiamato"
        autoComplete="name"
      />
      <Input
        name="exam_target_date"
        type="date"
        label="Data esame (opzionale)"
        hint="Se < 45 giorni, il sistema alza la retention target"
      />
      {error && (
        <p className="text-sm text-[var(--danger)]" role="alert">
          {error}
        </p>
      )}
      {ok && (
        <p className="text-sm text-[var(--ok)]" role="status">
          {ok}
        </p>
      )}
      <Button type="submit" fullWidth size="lg" disabled={pending}>
        {pending ? 'Registrazione…' : 'Crea account'}
      </Button>
      <p className="text-center text-sm text-[var(--muted)]">
        Hai già un account?{' '}
        <Link
          href="/login"
          className="font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
        >
          Accedi
        </Link>
      </p>
    </form>
  )
}
