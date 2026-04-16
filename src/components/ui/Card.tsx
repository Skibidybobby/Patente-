import type { HTMLAttributes, PropsWithChildren } from 'react'

export function Card({
  className = '',
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={
        'rounded-2xl bg-[var(--surface)] border border-[var(--border)] ' +
        'p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] ' +
        className
      }
      {...rest}
    >
      {children}
    </div>
  )
}
