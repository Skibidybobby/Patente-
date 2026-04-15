'use server'

/**
 * Server Actions per il flusso di autenticazione PatenteGo.
 *
 * Usabili da form nei Client Components come action={signInAction}.
 * Tutte le funzioni ritornano `{ error: string }` in caso di errore
 * invece di lanciare — così il form può mostrare il messaggio.
 */

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createServerSupabaseClient } from '@/lib/db/client'

export type AuthResult = { error: string } | { ok: true }

/** Sign-in con email e password. */
export async function signInWithPassword(
  email: string,
  password: string,
): Promise<AuthResult> {
  const db = await createServerSupabaseClient()
  const { error } = await db.auth.signInWithPassword({ email, password })
  if (error) return { error: error.message }
  revalidatePath('/', 'layout')
  return { ok: true }
}

export interface SignUpInput {
  email: string
  password: string
  display_name?: string
  /** Data esame in formato ISO `YYYY-MM-DD`. */
  exam_target_date?: string
}

/**
 * Sign-up con email e password. I metadati opzionali (display_name,
 * exam_target_date) vengono passati in raw_user_meta_data e letti dal
 * trigger SQL `handle_new_user` per popolare la riga profiles.
 */
export async function signUpWithPassword(
  input: SignUpInput,
): Promise<AuthResult> {
  const db = await createServerSupabaseClient()
  const { error } = await db.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        display_name: input.display_name ?? '',
        exam_target_date: input.exam_target_date ?? '',
      },
    },
  })
  if (error) return { error: error.message }
  revalidatePath('/', 'layout')
  return { ok: true }
}

/** Chiude la sessione e riporta alla home. */
export async function signOut(): Promise<never> {
  const db = await createServerSupabaseClient()
  await db.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/login')
}
