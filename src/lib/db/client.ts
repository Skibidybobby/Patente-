/**
 * Supabase clients per i 3 contesti di runtime:
 *   - Browser / Client Components        -> createBrowserSupabaseClient
 *   - Server Components + Route Handlers -> createServerSupabaseClient
 *   - Admin server-side (bypass RLS)     -> createServiceRoleClient
 *
 * Pattern ufficiale `@supabase/ssr` con cookies `getAll`/`setAll`.
 * Il refresh della sessione viene gestito in `src/proxy.ts`.
 */

import {
  createBrowserClient,
  createServerClient,
} from '@supabase/ssr'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

import type { Database } from '@/types/database'

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(
      `[PatenteGo] Missing environment variable: ${name}. ` +
        `Copy .env.example to .env.local and fill in the Supabase credentials.`,
    )
  }
  return value
}

function getSupabaseUrl(): string {
  return requireEnv('NEXT_PUBLIC_SUPABASE_URL')
}

function getAnonKey(): string {
  return requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

/**
 * Client per Client Components / browser.
 * Safe to import from any "use client" file. Uses localStorage + cookies
 * for session persistence (handled by @supabase/ssr automatically).
 */
export function createBrowserSupabaseClient() {
  return createBrowserClient<Database>(getSupabaseUrl(), getAnonKey())
}

/**
 * Client per Server Components e Route Handlers.
 * **Deve essere awaited**, perché `cookies()` di `next/headers` è async.
 *
 * Nota: in alcuni contesti (Server Components puri) la scrittura di
 * cookies non è permessa e il `try/catch` maschera l'errore — va bene,
 * il proxy in `src/proxy.ts` si occupa del refresh al prossimo request.
 */
export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(getSupabaseUrl(), getAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options)
          }
        } catch {
          // Server Component contesto: non possiamo scrivere cookies qui.
          // Proxy.ts refresherà la sessione al prossimo request.
        }
      },
    },
  })
}

/**
 * Client con la service_role key — bypassa RLS.
 * **SOLO per codice server-side di amministrazione** (seed, migrazioni dati,
 * cron jobs). Non esporre mai questa chiave al browser.
 */
export function createServiceRoleClient() {
  const key = requireEnv('SUPABASE_SERVICE_ROLE_KEY')
  return createSupabaseClient<Database>(getSupabaseUrl(), key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })
}
