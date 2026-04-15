/**
 * Public API del motore R.O.T.T.A. + analytics.
 *
 * Consumers (route handlers, UI) dovrebbero importare da `@/lib/engine`
 * piuttosto che dai file interni.
 */

export * from './types'
export * from './rotta'
export * from './session'
export * from './simulator'
export * from './analytics'
