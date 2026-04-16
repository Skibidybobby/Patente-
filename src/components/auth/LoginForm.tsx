'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useTransition } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { signInWithPassword } from '@/lib/auth/actions'

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') ?? '/dashboard'

  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  async function onSubmit(formData: FormData) {
    setError(null)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')

    startTransition(async () => {
      const res = await signInWithPassword(email, password)
      if ('error' in res) {
        setError(res.error)
        return
      }
      router.replace(next)
      router.refresh()
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
        autoComplete="current-password"
        required
        minLength={6}
      />
      {error && (
        <p className="text-sm text-[var(--danger)]" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" fullWidth size="lg" disabled={pending}>
        {pending ? 'Accesso in corso…' : 'Accedi'}
      </Button>
      <p className="text-center text-sm text-[var(--muted)]">
        Non hai un account?{' '}
        <Link
          href="/register"
          className="font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
        >
          Registrati
        </Link>
      </p>
    </form>
  )
}
