/**
 * Logica del metodo R.O.T.T.A. — avanzamento per fasi e selezione item per fase.
 *
 * Criteri di avanzamento (baseline research, rivalidabili con dati utenti):
 *   - Riconosci  → Origina    : ≥3 item, ratio ≥ 2/3 corretti  (active recall consolidato)
 *   - Origina    → Trappola   : ≥1 tentativo, NESSUNA soglia di accuracy
 *                               (productive failure, Sinha & Kapur 2021)
 *   - Trappola   → Trasferisci: ≥3 item, ratio ≥ 2/3 corretti
 *   - Trasferisci→ Automatizza: ≥3 item, ratio ≥ 2/3 corretti (scenari diversi,
 *                               garantiti a monte dalla curation di T2)
 *   - Automatizza              : fase terminale; la padronanza è governata
 *                               da `isCardMastered` lato FSRS, non da qui.
 */

import type { ConceptProgress, FaseRotta, QuizItem } from './types'

/** Tentativi minimi prima di poter avanzare di fase (eccetto Origina). */
export const MIN_ATTEMPTS_PER_PHASE = 3

/** Ratio minimo di risposte corrette (eccetto Origina). */
export const PASS_RATIO = 2 / 3

const NEXT_PHASE: Record<FaseRotta, FaseRotta | null> = {
  riconosci: 'origina',
  origina: 'trappola',
  trappola: 'trasferisci',
  trasferisci: 'automatizza',
  automatizza: null,
}

/**
 * Crea un `ConceptProgress` iniziale, in fase `riconosci`.
 */
export function createConceptProgress(conceptId: string): ConceptProgress {
  return {
    concept_id: conceptId,
    current_phase: 'riconosci',
    phase_items_completed: 0,
    phase_items_correct: 0,
    can_advance: false,
  }
}

/**
 * Ritorna la fase corrente del concetto. Utility convenience: pura lettura.
 */
export function getConceptPhase(progress: ConceptProgress): FaseRotta {
  return progress.current_phase
}

/**
 * True se i criteri di avanzamento alla fase successiva sono soddisfatti.
 * - Automatizza: sempre false (fase terminale; la mastery arriva da FSRS).
 * - Origina: basta ≥1 tentativo (productive failure, nessuna soglia).
 * - Altre fasi: ≥`MIN_ATTEMPTS_PER_PHASE` con accuracy ≥ `PASS_RATIO`.
 */
export function canAdvancePhase(progress: ConceptProgress): boolean {
  const { current_phase, phase_items_completed, phase_items_correct } = progress

  if (current_phase === 'automatizza') return false

  if (current_phase === 'origina') {
    return phase_items_completed >= 1
  }

  if (phase_items_completed < MIN_ATTEMPTS_PER_PHASE) return false
  return phase_items_correct / phase_items_completed >= PASS_RATIO
}

/**
 * Sposta il concetto alla fase successiva, azzerando i contatori.
 * Se il concetto è già in `automatizza`, ritorna il progress invariato.
 */
export function advancePhase(progress: ConceptProgress): ConceptProgress {
  const next = NEXT_PHASE[progress.current_phase]
  if (!next) return progress
  return {
    ...progress,
    current_phase: next,
    phase_items_completed: 0,
    phase_items_correct: 0,
    can_advance: false,
  }
}

/**
 * Aggiorna il progress dopo una risposta: incrementa i contatori e ricalcola
 * `can_advance`. NON avanza automaticamente di fase — l'avanzamento è esplicito
 * via `advancePhase` così il chiamante può mostrare il passaggio all'utente.
 */
export function updateProgressAfterAnswer(
  progress: ConceptProgress,
  correct: boolean,
): ConceptProgress {
  const next: ConceptProgress = {
    ...progress,
    phase_items_completed: progress.phase_items_completed + 1,
    phase_items_correct: progress.phase_items_correct + (correct ? 1 : 0),
    can_advance: false,
  }
  next.can_advance = canAdvancePhase(next)
  return next
}

/**
 * Filtra gli item di un concetto per una specifica fase R.O.T.T.A.
 * Usata dal session manager per costruire il flusso di studio.
 */
export function getPhaseItems(
  conceptId: string,
  phase: FaseRotta,
  allItems: QuizItem[],
): QuizItem[] {
  return allItems.filter(
    (it) => it.concetto_id === conceptId && it.fase_rotta === phase,
  )
}
