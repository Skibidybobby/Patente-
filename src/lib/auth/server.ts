/**
 * Helper auth per Server Components / Route Handlers.
 *
 * Usa `getUser()` (verificato server-side contro il token) e mai
 * `getSession()` per decisioni di autorizzazione — vedi @supabase/ssr docs.
 */

import { redirect } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

import { createServerSupabaseClient } from '@/lib/db/client'

/** Ritorna l'utente verificato o `null` se non autenticato. */
export async function getCurrentUser(): Promise<User | null> {
  const db = await createServerSupabaseClient()
  const {
    data: { user },
  } = await db.auth.getUser()
  return user ?? null
}

/**
 * Ritorna l'utente verificato o redirige a `/login?next=<pathname>`.
 * Da usare all'inizio di Server Components protette e di Route Handlers.
 */
export async function requireUser(nextPath?: string): Promise<User> {
  const user = await getCurrentUser()
  if (!user) {
    const target = nextPath
      ? `/login?next=${encodeURIComponent(nextPath)}`
      : '/login'
    redirect(target)
  }
  return user
}
