import { forwardRef, type InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  errorText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, errorText, className = '', id, ...rest },
  ref,
) {
  const inputId = id ?? rest.name
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      {label && (
        <span className="font-medium text-[var(--foreground)]">{label}</span>
      )}
      <input
        ref={ref}
        id={inputId}
        className={
          'h-11 rounded-xl bg-[var(--surface)] px-3 text-base ' +
          'text-[var(--foreground)] placeholder:text-[var(--muted)] ' +
          'border border-[var(--border)] ' +
          'focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 ' +
          (errorText ? 'border-[var(--danger)] ' : '') +
          className
        }
        aria-invalid={Boolean(errorText) || undefined}
        {...rest}
      />
      {(hint || errorText) && (
        <span
          className={
            errorText
              ? 'text-xs text-[var(--danger)]'
              : 'text-xs text-[var(--muted)]'
          }
        >
          {errorText ?? hint}
        </span>
      )}
    </label>
  )
})
