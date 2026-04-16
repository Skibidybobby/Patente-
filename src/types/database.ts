/**
 * PatenteGo — tipi TypeScript generati dallo schema Supabase.
 *
 * Fonte di verità: `supabase/migrations/20260415120000_core_schema.sql`.
 *
 * Questo file è scritto a mano per non dipendere dall'MCP Supabase al primo
 * run. Una volta autenticato l'MCP, rigenerabile con:
 *
 *     mcp__supabase__generate_typescript_types(project_id="sngutjjgonwqrjxodypr")
 *
 * o con la Supabase CLI:
 *
 *     supabase gen types typescript --project-id sngutjjgonwqrjxodypr > src/types/database.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type FaseRottaDb =
  | 'riconosci'
  | 'origina'
  | 'trappola'
  | 'trasferisci'
  | 'automatizza'

export type CardStateDb = 'new' | 'learning' | 'review' | 'relearning'
export type TipoArgomentoDb = 'primario' | 'integrativo'
export type ModalitaSessioneDb = 'studio' | 'simulazione'

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: '12'
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          display_name: string | null
          exam_target_date: string | null
          desired_retention: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          display_name?: string | null
          exam_target_date?: string | null
          desired_retention?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          display_name?: string | null
          exam_target_date?: string | null
          desired_retention?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      argomenti: {
        Row: {
          id: number
          numero: number
          nome: string
          tipo: TipoArgomentoDb
          peso_quiz: number
        }
        Insert: {
          id?: number
          numero: number
          nome: string
          tipo: TipoArgomentoDb
          peso_quiz?: number
        }
        Update: {
          id?: number
          numero?: number
          nome?: string
          tipo?: TipoArgomentoDb
          peso_quiz?: number
        }
        Relationships: []
      }
      concetti: {
        Row: {
          id: string
          argomento_id: number
          codice: string
          titolo: string
          descrizione: string | null
          regola_testo: string | null
          articolo_cds: string | null
          livello_difficolta: number | null
          created_at: string
        }
        Insert: {
          id?: string
          argomento_id: number
          codice: string
          titolo: string
          descrizione?: string | null
          regola_testo?: string | null
          articolo_cds?: string | null
          livello_difficolta?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          argomento_id?: number
          codice?: string
          titolo?: string
          descrizione?: string | null
          regola_testo?: string | null
          articolo_cds?: string | null
          livello_difficolta?: number | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'concetti_argomento_id_fkey'
            columns: ['argomento_id']
            isOneToOne: false
            referencedRelation: 'argomenti'
            referencedColumns: ['id']
          },
        ]
      }
      quiz_items: {
        Row: {
          id: string
          concetto_id: string
          fase_rotta: FaseRottaDb
          testo_domanda: string
          risposta_corretta: boolean
          spiegazione: string | null
          pattern_trappola: string | null
          scenario_transfer: string | null
          created_at: string
        }
        Insert: {
          id?: string
          concetto_id: string
          fase_rotta: FaseRottaDb
          testo_domanda: string
          risposta_corretta: boolean
          spiegazione?: string | null
          pattern_trappola?: string | null
          scenario_transfer?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          concetto_id?: string
          fase_rotta?: FaseRottaDb
          testo_domanda?: string
          risposta_corretta?: boolean
          spiegazione?: string | null
          pattern_trappola?: string | null
          scenario_transfer?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'quiz_items_concetto_id_fkey'
            columns: ['concetto_id']
            isOneToOne: false
            referencedRelation: 'concetti'
            referencedColumns: ['id']
          },
        ]
      }
      fsrs_cards: {
        Row: {
          id: string
          user_id: string
          quiz_item_id: string
          stability: number
          difficulty: number
          elapsed_days: number
          scheduled_days: number
          reps: number
          lapses: number
          state: CardStateDb
          due: string | null
          last_review: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          quiz_item_id: string
          stability?: number
          difficulty?: number
          elapsed_days?: number
          scheduled_days?: number
          reps?: number
          lapses?: number
          state?: CardStateDb
          due?: string | null
          last_review?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          quiz_item_id?: string
          stability?: number
          difficulty?: number
          elapsed_days?: number
          scheduled_days?: number
          reps?: number
          lapses?: number
          state?: CardStateDb
          due?: string | null
          last_review?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'fsrs_cards_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'fsrs_cards_quiz_item_id_fkey'
            columns: ['quiz_item_id']
            isOneToOne: false
            referencedRelation: 'quiz_items'
            referencedColumns: ['id']
          },
        ]
      }
      sessioni: {
        Row: {
          id: string
          user_id: string
          started_at: string
          ended_at: string | null
          fase_rotta: FaseRottaDb | null
          modalita: ModalitaSessioneDb
          items_total: number
          items_correct: number
          argomenti_mescolati: number[]
          durata_secondi: number | null
        }
        Insert: {
          id?: string
          user_id: string
          started_at?: string
          ended_at?: string | null
          fase_rotta?: FaseRottaDb | null
          modalita?: ModalitaSessioneDb
          items_total?: number
          items_correct?: number
          argomenti_mescolati?: number[]
          durata_secondi?: number | null
        }
        Update: {
          id?: string
          user_id?: string
          started_at?: string
          ended_at?: string | null
          fase_rotta?: FaseRottaDb | null
          modalita?: ModalitaSessioneDb
          items_total?: number
          items_correct?: number
          argomenti_mescolati?: number[]
          durata_secondi?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'sessioni_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      risposte: {
        Row: {
          id: string
          sessione_id: string
          quiz_item_id: string
          user_id: string
          risposta_data: boolean
          corretta: boolean
          tempo_risposta_ms: number | null
          created_at: string
        }
        Insert: {
          id?: string
          sessione_id: string
          quiz_item_id: string
          user_id: string
          risposta_data: boolean
          corretta: boolean
          tempo_risposta_ms?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          sessione_id?: string
          quiz_item_id?: string
          user_id?: string
          risposta_data?: boolean
          corretta?: boolean
          tempo_risposta_ms?: number | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'risposte_sessione_id_fkey'
            columns: ['sessione_id']
            isOneToOne: false
            referencedRelation: 'sessioni'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'risposte_quiz_item_id_fkey'
            columns: ['quiz_item_id']
            isOneToOne: false
            referencedRelation: 'quiz_items'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'risposte_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      concetti_progress: {
        Row: {
          id: string
          user_id: string
          concetto_id: string
          current_phase: FaseRottaDb
          phase_items_completed: number
          phase_items_correct: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          concetto_id: string
          current_phase?: FaseRottaDb
          phase_items_completed?: number
          phase_items_correct?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          concetto_id?: string
          current_phase?: FaseRottaDb
          phase_items_completed?: number
          phase_items_correct?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'concetti_progress_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'concetti_progress_concetto_id_fkey'
            columns: ['concetto_id']
            isOneToOne: false
            referencedRelation: 'concetti'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// ---------- helper aliases ----------
export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']

export type Profile = Tables<'profiles'>
export type Argomento = Tables<'argomenti'>
export type Concetto = Tables<'concetti'>
export type QuizItem = Tables<'quiz_items'>
export type FsrsCard = Tables<'fsrs_cards'>
export type Sessione = Tables<'sessioni'>
export type Risposta = Tables<'risposte'>
export type ConcettoProgressRow = Tables<'concetti_progress'>
