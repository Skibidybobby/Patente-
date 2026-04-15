/**
 * Next.js 16 Proxy (ex "middleware"): refresh della sessione Supabase su
 * ogni request. È una **optimistic check** — non sostituisce i controlli
 * di autorizzazione nei Server Components / Route Handlers.
 *
 * Docs:
 *   - https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 *   - https://supabase.com/docs/guides/auth/server-side/nextjs
 */

import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

import type { Database } from '@/types/database'

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // In dev potrebbe mancare .env.local — non bloccare i page load, ma
  // proxy non ha modo di rinfrescare la sessione.
  if (!supabaseUrl || !supabaseKey) return response

  const supabase = createServerClient<Database>(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        // Il token è stato rinfrescato: dobbiamo committare i nuovi cookies
        // sia sulla request (per il rendering corrente) sia sulla response
        // (perché il browser li memorizzi).
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value)
        }
        response = NextResponse.next({ request })
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options)
        }
      },
    },
  })

  // IMPORTANTISSIMO: getUser() qui attiva il refresh del token. Non
  // rimuovere questa chiamata, o avrai logout random e sessioni scadute.
  await supabase.auth.getUser()

  return response
}

export const config = {
  // Evita di girare sui file statici — sprecherebbe CPU e non rinfresca
  // niente. Le API routes invece passano per proxy (servono i cookies).
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|manifest\\.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
