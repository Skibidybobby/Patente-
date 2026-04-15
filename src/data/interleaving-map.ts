import type { InterleavingGruppo, PatternId } from './_types'
import { ARGOMENTI, getArgomentoByNumero } from './argomenti'

// Fonte: docs/research/03-pattern-trappole.md § 5 (mappa pattern → argomento)
//        docs/research/04-evidenze-scientifiche.md § 3 (Brunmair & Richter 2019)
//
// Criterio Brunmair: il guadagno di interleaving è MASSIMO quando le categorie
// mescolate sono SIMILI e confondibili (stessi pattern trappola). Perciò qui
// raggruppiamo per pattern dominanti condivisi, non per vicinanza topografica
// degli argomenti.
//
// Requisito calibration.min_interleaving_areas = 3 (cfr. src/data/calibration.ts):
// ogni gruppo deve contenere almeno 3 argomenti.

export const GRUPPI_INTERLEAVING: readonly InterleavingGruppo[] = [
  {
    id: 'G01-segnali-e-precedenze',
    nome: 'Segnali, semafori, precedenze',
    argomenti: [1, 2, 3, 4, 6, 10, 17, 18],
    pattern_dominanti: ['P03', 'P05', 'P06', 'P13'],
    razionale:
      'Forme grafiche simili + terminologia quasi-sinonima (attraversamento/passaggio, ' +
      'ha/deve dare precedenza). Brunmair: guadagno massimo su categorie visivamente simili.',
  },
  {
    id: 'G02-velocita-distanza-sorpasso',
    nome: 'Velocità, distanza, sorpasso',
    argomenti: [7, 8, 11, 25],
    pattern_dominanti: ['P07', 'P08', 'P09', 'P17', 'P05'],
    razionale:
      'Numeri, unità e relazioni causali costantemente confuse. Mescolare distanza ' +
      'di sicurezza con limiti di velocità e sorpasso forza a discriminare le cifre ' +
      'quasi-giuste invece di memorizzarle per posizione.',
  },
  {
    id: 'G03-sosta-fermata-segnaletica-oriz',
    nome: 'Sosta, fermata, segnaletica orizzontale',
    argomenti: [5, 20, 14, 21],
    pattern_dominanti: ['P10', 'P11', 'P13', 'P14'],
    razionale:
      '"In corrispondenza / in prossimità", "fermata / sosta", "striscia continua / ' +
      'discontinua" sono coppie ad altissima confusione che condividono gli stessi ' +
      'contesti (incroci, passaggi, luci).',
  },
  {
    id: 'G04-comportamento-alcol-sanzioni',
    nome: 'Guida, alcol/droga, sanzioni, documenti',
    argomenti: [9, 15, 22, 23, 16],
    pattern_dominanti: ['P01', 'P02', 'P04', 'P07', 'P15', 'P16'],
    razionale:
      'Area "norme e numeri" (limiti tasso alcol, sospensioni, punti): quantificatori ' +
      'universali, doppie negazioni, numeri quasi-giusti e "ovvero" giuridico sono ' +
      'concentrati qui dopo la L. 177/2024.',
  },
  {
    id: 'G05-veicolo-equipaggiamento-ambiente',
    nome: 'Veicolo, equipaggiamento, ambiente',
    argomenti: [12, 13, 24, 25, 19],
    pattern_dominanti: ['P03', 'P12', 'P17', 'P18'],
    razionale:
      'Obblighi di equipaggiamento spesso riformulati come facoltà (P12), termini ' +
      'tecnici usati come distrattori (F04), causa-effetto invertite su stabilità e ' +
      'tenuta di strada.',
  },
  {
    id: 'G06-incidenti-soccorso-responsabilita',
    nome: 'Incidenti, primo soccorso, responsabilità',
    argomenti: [14, 15, 23, 22],
    pattern_dominanti: ['P04', 'P16', 'P18', 'P01'],
    razionale:
      'Confusione classica fra obbligo di "prestare soccorso" e obbligo di "fermarsi", ' +
      'fra responsabilità civile/penale/amministrativa, fra RCA e risarcimento diretto. ' +
      'Passivo ingannevole (P16) molto frequente.',
  },
] as const

// Matrice di compatibilità simmetrica [argomento_i][argomento_j] = peso 0-3.
//   3 = stesso gruppo ad alta coesione (stessi pattern dominanti)
//   2 = compatibilità moderata (gruppi adiacenti, qualche pattern in comune)
//   1 = compatibilità debole (usabili insieme per varietà)
//   0 = argomento stesso (non mescolabile con sé)
// Valore derivato dai gruppi sopra: se i e j sono nello stesso gruppo e condividono
// ≥2 pattern dominanti → 3; se sono in gruppi diversi ma condividono ≥1 pattern → 2;
// altrimenti 1.
type Matrix = Record<number, Record<number, 0 | 1 | 2 | 3>>

function buildCompatibilityMatrix(): Matrix {
  const matrix: Matrix = {}
  const numeri = ARGOMENTI.map((a) => a.numero)
  const gruppoOf = new Map<number, Set<PatternId>>()
  const groupIdOf = new Map<number, string>()

  for (const g of GRUPPI_INTERLEAVING) {
    for (const n of g.argomenti) {
      if (!gruppoOf.has(n)) gruppoOf.set(n, new Set())
      for (const p of g.pattern_dominanti) gruppoOf.get(n)!.add(p)
      groupIdOf.set(n, g.id)
    }
  }

  for (const i of numeri) {
    matrix[i] = {} as Record<number, 0 | 1 | 2 | 3>
    for (const j of numeri) {
      if (i === j) {
        matrix[i][j] = 0
        continue
      }
      const pi = gruppoOf.get(i) ?? new Set<PatternId>()
      const pj = gruppoOf.get(j) ?? new Set<PatternId>()
      const shared = [...pi].filter((p) => pj.has(p)).length
      const sameGroup = groupIdOf.get(i) === groupIdOf.get(j) && groupIdOf.get(i) != null
      if (sameGroup && shared >= 2) matrix[i][j] = 3
      else if (shared >= 1) matrix[i][j] = 2
      else matrix[i][j] = 1
    }
  }
  return matrix
}

export const COMPATIBILITY_MATRIX: Matrix = buildCompatibilityMatrix()

export function getGruppoPerArgomento(numero: number): InterleavingGruppo[] {
  return GRUPPI_INTERLEAVING.filter((g) => g.argomenti.includes(numero))
}

export function getArgomentiCompatibili(numero: number, minScore: 1 | 2 | 3 = 2): number[] {
  const row = COMPATIBILITY_MATRIX[numero]
  if (!row) return []
  return Object.entries(row)
    .filter(([, score]) => (score as number) >= minScore)
    .map(([k]) => Number(k))
    .filter((n) => getArgomentoByNumero(n) != null)
}
