import type { Concetto } from '../_types'
import { ARG01_CONCETTI } from './arg01-segnali-pericolo'
import { ARG02_CONCETTI } from './arg02-segnali-divieto'
import { ARG03_CONCETTI } from './arg03-segnali-obbligo'
import { ARG04_CONCETTI } from './arg04-segnali-precedenza'
import { ARG05_CONCETTI } from './arg05-segnaletica-orizzontale'
import { ARG06_CONCETTI } from './arg06-semafori-agenti'
import { ARG07_CONCETTI } from './arg07-limiti-velocita'
import { ARG08_CONCETTI } from './arg08-distanza-sicurezza'
import { ARG09_CONCETTI } from './arg09-norme-circolazione'
import { ARG10_CONCETTI } from './arg10-precedenze'
import { ARG11_CONCETTI } from './arg11-sorpasso'
import { ARG12_CONCETTI } from './arg12-ingombro-traino'
import { ARG13_CONCETTI } from './arg13-dispositivi-ritenuta'
import { ARG14_CONCETTI } from './arg14-incidenti'
import { ARG15_CONCETTI } from './arg15-psicofisiche-soccorso'
import { ARG16_CONCETTI } from './arg16-definizioni-doveri'
import { ARG17_CONCETTI } from './arg17-segnali-indicazione'
import { ARG18_CONCETTI } from './arg18-temporanei-cantiere'
import { ARG19_CONCETTI } from './arg19-pannelli-integrativi'
import { ARG20_CONCETTI } from './arg20-fermata-sosta'
import { ARG21_CONCETTI } from './arg21-luci-spie'
import { ARG22_CONCETTI } from './arg22-patenti-sanzioni'
import { ARG23_CONCETTI } from './arg23-responsabilita-rca'
import { ARG24_CONCETTI } from './arg24-ambiente-consumi'
import { ARG25_CONCETTI } from './arg25-veicolo-manutenzione'

// Aggregazione dei 253 concetti atomici per i 25 argomenti ministeriali.
// La distribuzione esatta rispecchia la tabella "Concetti atomici" di
// docs/research/01-programma-esame.md § 3.

export const CONCETTI_BY_ARGOMENTO: Readonly<Record<number, readonly Concetto[]>> = {
  1: ARG01_CONCETTI,
  2: ARG02_CONCETTI,
  3: ARG03_CONCETTI,
  4: ARG04_CONCETTI,
  5: ARG05_CONCETTI,
  6: ARG06_CONCETTI,
  7: ARG07_CONCETTI,
  8: ARG08_CONCETTI,
  9: ARG09_CONCETTI,
  10: ARG10_CONCETTI,
  11: ARG11_CONCETTI,
  12: ARG12_CONCETTI,
  13: ARG13_CONCETTI,
  14: ARG14_CONCETTI,
  15: ARG15_CONCETTI,
  16: ARG16_CONCETTI,
  17: ARG17_CONCETTI,
  18: ARG18_CONCETTI,
  19: ARG19_CONCETTI,
  20: ARG20_CONCETTI,
  21: ARG21_CONCETTI,
  22: ARG22_CONCETTI,
  23: ARG23_CONCETTI,
  24: ARG24_CONCETTI,
  25: ARG25_CONCETTI,
} as const

export const CONCETTI: readonly Concetto[] = [
  ...ARG01_CONCETTI, ...ARG02_CONCETTI, ...ARG03_CONCETTI, ...ARG04_CONCETTI, ...ARG05_CONCETTI,
  ...ARG06_CONCETTI, ...ARG07_CONCETTI, ...ARG08_CONCETTI, ...ARG09_CONCETTI, ...ARG10_CONCETTI,
  ...ARG11_CONCETTI, ...ARG12_CONCETTI, ...ARG13_CONCETTI, ...ARG14_CONCETTI, ...ARG15_CONCETTI,
  ...ARG16_CONCETTI, ...ARG17_CONCETTI, ...ARG18_CONCETTI, ...ARG19_CONCETTI, ...ARG20_CONCETTI,
  ...ARG21_CONCETTI, ...ARG22_CONCETTI, ...ARG23_CONCETTI, ...ARG24_CONCETTI, ...ARG25_CONCETTI,
]

export function getConcettiByArgomento(numero: number): readonly Concetto[] {
  return CONCETTI_BY_ARGOMENTO[numero] ?? []
}

export function getConcettoByCodice(codice: string): Concetto | undefined {
  return CONCETTI.find((c) => c.codice === codice)
}

export const CONCETTI_COUNT = CONCETTI.length
