import { forwardRef, type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ok' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl ' +
  'transition-colors active:scale-[0.98] transition-transform ' +
  'disabled:opacity-50 disabled:cursor-not-allowed ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]',
  secondary:
    'bg-[var(--surface-2)] text-[var(--foreground)] hover:bg-[var(--border)]',
  ghost:
    'bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)]',
  ok: 'bg-[var(--ok)] text-white hover:brightness-110',
  danger: 'bg-[var(--danger)] text-white hover:brightness-110',
}

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm', // 44px touch target
  lg: 'h-12 px-6 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', fullWidth, className = '', ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
        {...rest}
      />
    )
  },
)
