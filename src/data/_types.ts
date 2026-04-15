// TIPI TEMPORANEI DI DOMINIO DATI — T2 CONTENUTI
// Verranno sostituiti dai tipi definitivi di T1 (src/types/) appena disponibili.
// L'underscore nel nome file indica la natura provvisoria.

export type TipoArgomento = 'primario' | 'integrativo'

export interface Argomento {
  numero: number
  nome: string
  tipo: TipoArgomento
  peso_quiz: number
  note?: string
}

export interface Concetto {
  codice: string
  argomento_numero: number
  titolo: string
  descrizione: string
  regola_testo: string
  articolo_cds: string | null
  livello_difficolta: 1 | 2 | 3 | 4 | 5
  tag?: string[]
}

export type FaseRotta = 'riconosci' | 'origina' | 'trappola' | 'trasferisci'

export type PatternId =
  | 'P01' | 'P02' | 'P03' | 'P04' | 'P05' | 'P06'
  | 'P07' | 'P08' | 'P09' | 'P10' | 'P11' | 'P12'
  | 'P13' | 'P14' | 'P15' | 'P16' | 'P17' | 'P18'

export type PatternFolkloreId = 'F01' | 'F02' | 'F03' | 'F04' | 'F05'

export interface Pattern {
  id: PatternId
  nome: string
  descrizione: string
  bias_cognitivo: string
  template: string
  spia_riconoscimento: string
  argomenti_rischio: number[]
}

export interface PatternFolklore {
  id: PatternFolkloreId
  nome: string
  descrizione: string
  esempi_lessicali: string[]
}

export interface QuizItem {
  codice: string
  concetto_codice: string
  argomento_numero: number
  fase_rotta: FaseRotta
  testo_domanda: string
  risposta_corretta: boolean
  spiegazione: string
  pattern_trappola?: PatternId
  scenario_transfer?: string
  livello_difficolta: 1 | 2 | 3 | 4 | 5
  articolo_cds?: string
}

export interface InterleavingGruppo {
  id: string
  nome: string
  argomenti: number[]
  pattern_dominanti: PatternId[]
  razionale: string
}

export interface Calibrazione {
  desired_retention: number
  desired_retention_exam_soon: number
  reps_per_mastery: { min: number; max: number }
  initial_interval_days: number
  transfer_scenarios: { min: number; target: number }
  items_per_concept: { min: number; target: number }
  min_interleaving_areas: number
  error_penalty_origina: boolean
  stability_threshold_mastery: number
}
