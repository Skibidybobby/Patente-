import type { Calibrazione } from './_types'

// Fonte: docs/research/04-evidenze-scientifiche.md
// Tutti i numeri sono baseline da rivalidare dopo 2-4 settimane di dati reali.
// Non modificare questi valori senza aggiornare anche la ricerca di riferimento.

export const CALIBRATION: Calibrazione = {
  // FSRS desired retention.
  // 0.90 default (Cepeda 2008 + default libreria FSRS).
  // 0.92-0.93 se esame in <45 giorni (ridgeline più alta = meno dimenticanze).
  desired_retention: 0.9,
  desired_retention_exam_soon: 0.93,

  // Karpicke & Roediger 2008 + convergenza FSRS su stability > 60gg @ R 0.9
  // per portare un concetto da "appena visto" a "padroneggiato".
  reps_per_mastery: { min: 5, max: 7 },

  // Default FSRS: prima esposizione → primo ripasso a 12-36 ore.
  initial_interval_days: 1,

  // Barnett & Ceci 2002 + Paas 1994: ≥3 varianti = near transfer,
  // 5-6 varianti = far transfer accettabile.
  transfer_scenarios: { min: 3, target: 6 },

  // 3-4 base × 2-3 trappole + transfer + origina ≈ 8-12.
  items_per_concept: { min: 8, target: 12 },

  // Brunmair & Richter 2019: benefit max con categorie simili + almeno 3 macro-aree.
  min_interleaving_areas: 3,

  // Sinha & Kapur 2021 (productive failure):
  // in Origina l'errore È il meccanismo, non va penalizzato.
  error_penalty_origina: false,

  // Stability > 60 giorni a retention 0.9 = criterio operativo di padronanza.
  stability_threshold_mastery: 60,
} as const

// Derivate comode per gli altri moduli.
export function getDesiredRetention(daysToExam: number | null): number {
  if (daysToExam != null && daysToExam < 45) {
    return CALIBRATION.desired_retention_exam_soon
  }
  return CALIBRATION.desired_retention
}
