import type { QuizItem } from '../_types'
import { ARG01_QUIZ } from './arg01-quiz'
import { ARG02_QUIZ } from './arg02-quiz'
import { ARG03_QUIZ } from './arg03-quiz'
import { ARG04_QUIZ } from './arg04-quiz'
import { ARG05_QUIZ } from './arg05-quiz'
import { ARG06_QUIZ } from './arg06-quiz'
import { ARG07_QUIZ } from './arg07-quiz'
import { ARG08_QUIZ } from './arg08-quiz'
import { ARG09_QUIZ } from './arg09-quiz'
import { ARG10_QUIZ } from './arg10-quiz'
import { ARG11_QUIZ } from './arg11-quiz'
import { ARG12_QUIZ } from './arg12-quiz'
import { ARG13_QUIZ } from './arg13-quiz'
import { ARG14_QUIZ } from './arg14-quiz'
import { ARG15_QUIZ } from './arg15-quiz'
import { ARG16_QUIZ } from './arg16-quiz'
import { ARG17_QUIZ } from './arg17-quiz'
import { ARG18_QUIZ } from './arg18-quiz'
import { ARG19_QUIZ } from './arg19-quiz'
import { ARG20_QUIZ } from './arg20-quiz'
import { ARG21_QUIZ } from './arg21-quiz'
import { ARG22_QUIZ } from './arg22-quiz'
import { ARG23_QUIZ } from './arg23-quiz'
import { ARG24_QUIZ } from './arg24-quiz'
import { ARG25_QUIZ } from './arg25-quiz'

// Aggregazione dei 2530 quiz items R.O.T.T.A. per i 25 argomenti.
// Generati da T2 Fase 3 seguendo il metodo (3 riconosci + 3 trappola + 3 trasferisci + 1 origina)
// per ognuno dei 253 concetti atomici di src/data/concetti/.

export const QUIZ_BY_ARGOMENTO: Readonly<Record<number, readonly QuizItem[]>> = {
  1: ARG01_QUIZ,   2: ARG02_QUIZ,   3: ARG03_QUIZ,   4: ARG04_QUIZ,   5: ARG05_QUIZ,
  6: ARG06_QUIZ,   7: ARG07_QUIZ,   8: ARG08_QUIZ,   9: ARG09_QUIZ,  10: ARG10_QUIZ,
  11: ARG11_QUIZ, 12: ARG12_QUIZ, 13: ARG13_QUIZ, 14: ARG14_QUIZ, 15: ARG15_QUIZ,
  16: ARG16_QUIZ, 17: ARG17_QUIZ, 18: ARG18_QUIZ, 19: ARG19_QUIZ, 20: ARG20_QUIZ,
  21: ARG21_QUIZ, 22: ARG22_QUIZ, 23: ARG23_QUIZ, 24: ARG24_QUIZ, 25: ARG25_QUIZ,
} as const

export const QUIZ_ITEMS: readonly QuizItem[] = [
  ...ARG01_QUIZ, ...ARG02_QUIZ, ...ARG03_QUIZ, ...ARG04_QUIZ, ...ARG05_QUIZ,
  ...ARG06_QUIZ, ...ARG07_QUIZ, ...ARG08_QUIZ, ...ARG09_QUIZ, ...ARG10_QUIZ,
  ...ARG11_QUIZ, ...ARG12_QUIZ, ...ARG13_QUIZ, ...ARG14_QUIZ, ...ARG15_QUIZ,
  ...ARG16_QUIZ, ...ARG17_QUIZ, ...ARG18_QUIZ, ...ARG19_QUIZ, ...ARG20_QUIZ,
  ...ARG21_QUIZ, ...ARG22_QUIZ, ...ARG23_QUIZ, ...ARG24_QUIZ, ...ARG25_QUIZ,
]

export function getQuizByArgomento(numero: number): readonly QuizItem[] {
  return QUIZ_BY_ARGOMENTO[numero] ?? []
}

export function getQuizByConcetto(concettoCodice: string): readonly QuizItem[] {
  return QUIZ_ITEMS.filter((q) => q.concetto_codice === concettoCodice)
}

export const QUIZ_COUNT = QUIZ_ITEMS.length
