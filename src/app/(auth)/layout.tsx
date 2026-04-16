import Link from 'next/link'
import type { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 flex flex-col">
      <header className="px-4 pt-6 safe-top">
        <Link
          href="/"
          className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          ← PatenteGo
        </Link>
      </header>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}
