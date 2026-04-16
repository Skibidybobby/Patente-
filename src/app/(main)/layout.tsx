import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import { SignOutButton } from '@/components/auth/SignOutButton'
import { requireUser } from '@/lib/auth/server'

export default async function MainLayout({ children }: PropsWithChildren) {
  await requireUser()
  return (
    <div className="flex-1 flex flex-col">
      <header className="safe-top border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 py-3">
          <Link
            href="/dashboard"
            className="font-semibold tracking-tight"
          >
            PatenteGo
          </Link>
          <SignOutButton />
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  )
}
