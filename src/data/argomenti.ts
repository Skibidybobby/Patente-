import type { Argomento } from './_types'

// Fonte: docs/research/01-programma-esame.md (DM 19/12/2012, GU n.25/2013)
// I 25 argomenti ministeriali che alimentano la banca quiz del Portale Automobilista.
// Scheda d'esame vigente 2026: 30 V/F, 20 min, max 3 errori (DM 27/10/2021).
//
// NOTA peso_quiz: lo schema storico 15×2 + 10×1 = 40 era pre-2021.
// La ripartizione effettiva dei 30 quesiti post-2021 non è pubblicata in forma
// ufficiale: manteniamo 2 per primari / 1 per integrativi come baseline
// didattico (da rivalidare con un conteggio reale sul pool ministeriale).

export const ARGOMENTI: readonly Argomento[] = [
  // --- PRIMARI (15) ---
  { numero: 1,  nome: 'Segnali di pericolo',                                           tipo: 'primario',    peso_quiz: 2 },
  { numero: 2,  nome: 'Segnali di divieto',                                            tipo: 'primario',    peso_quiz: 2 },
  { numero: 3,  nome: 'Segnali di obbligo',                                            tipo: 'primario',    peso_quiz: 2 },
  { numero: 4,  nome: 'Segnali di precedenza',                                         tipo: 'primario',    peso_quiz: 2 },
  { numero: 5,  nome: 'Segnaletica orizzontale e segni sugli ostacoli',                tipo: 'primario',    peso_quiz: 2 },
  { numero: 6,  nome: 'Segnalazioni semaforiche e degli agenti del traffico',          tipo: 'primario',    peso_quiz: 2 },
  { numero: 7,  nome: 'Limiti di velocità, pericolo e intralcio alla circolazione',    tipo: 'primario',    peso_quiz: 2 },
  { numero: 8,  nome: 'Distanza di sicurezza',                                         tipo: 'primario',    peso_quiz: 2,
    note: 'Densità trappola massima: P07, P08, P09, P17, P18 (cfr. docs/research/03).' },
  { numero: 9,  nome: 'Norme sulla circolazione dei veicoli',                          tipo: 'primario',    peso_quiz: 2 },
  { numero: 10, nome: 'Esempi di precedenza',                                          tipo: 'primario',    peso_quiz: 2 },
  { numero: 11, nome: 'Norme sul sorpasso',                                            tipo: 'primario',    peso_quiz: 2 },
  { numero: 12, nome: 'Ingombro della carreggiata, traino, trasporto di persone',      tipo: 'primario',    peso_quiz: 2 },
  { numero: 13, nome: 'Dispositivi di equipaggiamento, cinture, sistemi di ritenuta, casco', tipo: 'primario', peso_quiz: 2,
    note: 'Aggiornare su ECE R129 / i-Size dal 01/09/2024.' },
  { numero: 14, nome: 'Incidenti stradali',                                            tipo: 'primario',    peso_quiz: 2 },
  { numero: 15, nome: 'Guida in condizioni psicofisiche alterate e primo soccorso',    tipo: 'primario',    peso_quiz: 2,
    note: 'Integrare alcolock post-26/07/2025 e art. 187 aggiornato (L. 177/2024).' },

  // --- INTEGRATIVI (10) ---
  { numero: 16, nome: 'Definizioni stradali e di traffico, doveri del conducente',     tipo: 'integrativo', peso_quiz: 1 },
  { numero: 17, nome: 'Segnali di indicazione',                                        tipo: 'integrativo', peso_quiz: 1 },
  { numero: 18, nome: 'Segnali complementari, temporanei, di cantiere',                tipo: 'integrativo', peso_quiz: 1 },
  { numero: 19, nome: 'Pannelli integrativi',                                          tipo: 'integrativo', peso_quiz: 1 },
  { numero: 20, nome: 'Fermata, sosta, arresto, partenza',                             tipo: 'integrativo', peso_quiz: 1 },
  { numero: 21, nome: 'Uso delle luci e dei dispositivi acustici, spie e simboli',     tipo: 'integrativo', peso_quiz: 1 },
  { numero: 22, nome: 'Patenti, documenti di circolazione, sistema sanzionatorio, obblighi verso agenti', tipo: 'integrativo', peso_quiz: 1,
    note: 'Aggiornato con art. 117 neopatentati 3 anni e art. 173 cellulare post-14/12/2024.' },
  { numero: 23, nome: 'Responsabilità civile, penale e amministrativa, assicurazione RCA', tipo: 'integrativo', peso_quiz: 1 },
  { numero: 24, nome: 'Limitazione dei consumi, rispetto dell\u2019ambiente, inquinamento', tipo: 'integrativo', peso_quiz: 1 },
  { numero: 25, nome: 'Elementi costitutivi del veicolo, manutenzione, stabilità, tenuta di strada', tipo: 'integrativo', peso_quiz: 1 },
] as const

export const ARGOMENTI_PRIMARI = ARGOMENTI.filter((a) => a.tipo === 'primario')
export const ARGOMENTI_INTEGRATIVI = ARGOMENTI.filter((a) => a.tipo === 'integrativo')

export function getArgomentoByNumero(n: number): Argomento | undefined {
  return ARGOMENTI.find((a) => a.numero === n)
}
