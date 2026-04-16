import type { PropsWithChildren, ReactNode } from 'react'

export interface PageShellProps {
  title?: string
  subtitle?: string
  headerRight?: ReactNode
  /** Se true, contenuto centrato verticalmente (per auth / landing). */
  centered?: boolean
}

export function PageShell({
  title,
  subtitle,
  headerRight,
  centered,
  children,
}: PropsWithChildren<PageShellProps>) {
  return (
    <div
      className={
        'mx-auto w-full max-w-2xl px-4 pb-12 safe-top safe-bottom ' +
        (centered ? 'flex-1 flex flex-col justify-center' : '')
      }
    >
      {(title || headerRight) && (
        <header className="flex items-start justify-between gap-4 pt-6 pb-6">
          <div className="flex flex-col gap-1">
            {title && (
              <h1 className="text-2xl font-semibold tracking-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-sm text-[var(--muted)]">{subtitle}</p>
            )}
          </div>
          {headerRight && <div className="shrink-0">{headerRight}</div>}
        </header>
      )}
      {children}
    </div>
  )
}
