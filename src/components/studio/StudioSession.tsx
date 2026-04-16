'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

// -----------------------------------------------------------------------------
// API shape — tenuta locale per non accoppiare il client alle tipizzazioni DB.
// -----------------------------------------------------------------------------

type FaseRotta =
  | 'riconosci'
  | 'origina'
  | 'trappola'
  | 'trasferisci'
  | 'automatizza'

interface QuizItemPayload {
  id: string
  concetto_id: string
  fase_rotta: FaseRotta
  testo_domanda: string
  pattern_trappola: string | null
  scenario_transfer: string | null
}

interface AnswerResponse {
  corretta: boolean
  risposta_corretta: boolean
  spiegazione: string | null
  pattern_trappola: string | null
  scenario_transfer: string | null
  fase_corrente: FaseRotta
  phase_advanced: boolean
  next_review: string
  interval_days: number
}

// -----------------------------------------------------------------------------
// Helpers UI
// -----------------------------------------------------------------------------

const FASE_LABEL: Record<FaseRotta, string> = {
  riconosci: 'Riconosci',
  origina: 'Origina',
  trappola: 'Trappola',
  trasferisci: 'Trasferisci',
  automatizza: 'Automatizza',
}

const FASE_DESC: Record<FaseRotta, string> = {
  riconosci: 'Riconosci la regola base.',
  origina: 'Prova a generare la risposta. Niente paura di sbagliare.',
  trappola: 'Attento al pattern-trappola.',
  trasferisci: 'Applica la regola a uno scenario diverso.',
  automatizza: 'Mantieni la padronanza nel tempo.',
}

// -----------------------------------------------------------------------------
// Studio session client component
// -----------------------------------------------------------------------------

type Stage =
  | { kind: 'loading' }
  | { kind: 'question'; item: QuizItemPayload }
  | { kind: 'feedback'; item: QuizItemPayload; answer: boolean; result: AnswerResponse }
  | { kind: 'done' }
  | { kind: 'error'; message: string }

export function StudioSession() {
  const router = useRouter()
  const [sessioneId, setSessioneId] = useState<string | null>(null)
  const [stage, setStage] = useState<Stage>({ kind: 'loading' })
  const [busy, setBusy] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  const questionStartRef = useRef<number>(0)

  // ---------------------------------------------------------------------------
  // 1) Bootstrap: crea sessione + carica primo item.
  // ---------------------------------------------------------------------------
  const loadNextItem = useCallback(async (sid: string) => {
    const res = await fetch(`/api/quiz?sessione_id=${encodeURIComponent(sid)}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      const msg = await readError(res)
      setStage({ kind: 'error', message: msg })
      return
    }
    const data = (await res.json()) as
      | { item: QuizItemPayload; sessione_id: string }
      | { item: null; done: true }
    if (!data.item) {
      setStage({ kind: 'done' })
      return
    }
    questionStartRef.current = performance.now()
    setStage({ kind: 'question', item: data.item })
  }, [])

  useEffect(() => {
    let cancelled = false
    async function bootstrap() {
      try {
        const res = await fetch('/api/session/start', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ modalita: 'studio' }),
        })
        if (!res.ok) {
          const msg = await readError(res)
          if (!cancelled) setStage({ kind: 'error', message: msg })
          return
        }
        const { id } = (await res.json()) as { id: string }
        if (cancelled) return
        setSessioneId(id)
        await loadNextItem(id)
      } catch (err) {
        if (!cancelled) {
          setStage({
            kind: 'error',
            message: err instanceof Error ? err.message : 'errore di rete',
          })
        }
      }
    }
    bootstrap()
    return () => {
      cancelled = true
    }
  }, [loadNextItem])

  // ---------------------------------------------------------------------------
  // 2) Answer handler
  // ---------------------------------------------------------------------------
  async function submitAnswer(answer: boolean) {
    if (stage.kind !== 'question' || !sessioneId || busy) return
    setBusy(true)
    const tempoMs = Math.max(0, Math.round(performance.now() - questionStartRef.current))
    try {
      const res = await fetch('/api/answer', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          sessione_id: sessioneId,
          quiz_item_id: stage.item.id,
          risposta_data: answer,
          tempo_risposta_ms: tempoMs,
        }),
      })
      if (!res.ok) {
        const msg = await readError(res)
        setStage({ kind: 'error', message: msg })
        return
      }
      const result = (await res.json()) as AnswerResponse
      setAnswered((n) => n + 1)
      if (result.corretta) setCorrect((n) => n + 1)
      setStage({ kind: 'feedback', item: stage.item, answer, result })
    } finally {
      setBusy(false)
    }
  }

  async function nextItem() {
    if (!sessioneId || busy) return
    setBusy(true)
    setStage({ kind: 'loading' })
    try {
      await loadNextItem(sessioneId)
    } finally {
      setBusy(false)
    }
  }

  async function endSession() {
    if (!sessioneId || busy) return
    setBusy(true)
    try {
      await fetch('/api/session/end', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sessione_id: sessioneId }),
      })
    } catch {
      // non-blocking
    }
    router.replace('/dashboard')
    router.refresh()
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--muted)]">
          Risposte: <span className="font-mono">{correct}/{answered}</span>
          {answered > 0 && (
            <span className="ml-1 text-[var(--muted)]">({pct}%)</span>
          )}
        </span>
        <Button variant="ghost" size="sm" onClick={endSession} disabled={busy}>
          Termina
        </Button>
      </div>

      {stage.kind === 'loading' && (
        <Card>
          <p className="text-[var(--muted)]">Caricamento…</p>
        </Card>
      )}

      {stage.kind === 'error' && (
        <Card>
          <h2 className="text-lg font-semibold text-[var(--danger)]">
            Errore
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{stage.message}</p>
          <div className="mt-4">
            <Button onClick={endSession} fullWidth>
              Torna alla dashboard
            </Button>
          </div>
        </Card>
      )}

      {stage.kind === 'done' && (
        <Card>
          <h2 className="text-xl font-semibold">Sessione completata</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Hai risposto a {answered} domande{answered > 0 ? `, ${correct} corrette (${pct}%)` : ''}.
          </p>
          <div className="mt-4">
            <Button onClick={endSession} fullWidth size="lg">
              Chiudi e torna alla dashboard
            </Button>
          </div>
        </Card>
      )}

      {stage.kind === 'question' && (
        <QuestionCard item={stage.item} onAnswer={submitAnswer} disabled={busy} />
      )}

      {stage.kind === 'feedback' && (
        <FeedbackCard
          item={stage.item}
          answer={stage.answer}
          result={stage.result}
          onNext={nextItem}
          disabled={busy}
        />
      )}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Sub-components
// -----------------------------------------------------------------------------

function QuestionCard({
  item,
  onAnswer,
  disabled,
}: {
  item: QuizItemPayload
  onAnswer: (answer: boolean) => void
  disabled: boolean
}) {
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)]">
          {FASE_LABEL[item.fase_rotta]}
        </span>
        <p className="text-xs text-[var(--muted)]">
          {FASE_DESC[item.fase_rotta]}
        </p>
      </div>
      <p className="mt-4 text-lg leading-relaxed">{item.testo_domanda}</p>
      {item.scenario_transfer && (
        <p className="mt-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3 text-sm">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
            Scenario
          </span>
          <br />
          {item.scenario_transfer}
        </p>
      )}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button
          size="lg"
          variant="ok"
          onClick={() => onAnswer(true)}
          disabled={disabled}
        >
          Vero
        </Button>
        <Button
          size="lg"
          variant="danger"
          onClick={() => onAnswer(false)}
          disabled={disabled}
        >
          Falso
        </Button>
      </div>
    </Card>
  )
}

function FeedbackCard({
  item,
  answer,
  result,
  onNext,
  disabled,
}: {
  item: QuizItemPayload
  answer: boolean
  result: AnswerResponse
  onNext: () => void
  disabled: boolean
}) {
  return (
    <Card
      className={
        result.corretta
          ? 'border-[var(--ok)]/40'
          : 'border-[var(--danger)]/40'
      }
    >
      <div className="flex items-center gap-2">
        <span
          className={`text-xs font-mono uppercase tracking-[0.18em] ${
            result.corretta ? 'text-[var(--ok)]' : 'text-[var(--danger)]'
          }`}
        >
          {result.corretta ? 'Corretta' : 'Sbagliata'}
        </span>
        {result.phase_advanced && (
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--accent)]">
            · Fase avanzata → {FASE_LABEL[result.fase_corrente]}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm">
        <span className="text-[var(--muted)]">Tua risposta: </span>
        <b>{answer ? 'Vero' : 'Falso'}</b>
        <span className="text-[var(--muted)]"> · Corretta: </span>
        <b>{result.risposta_corretta ? 'Vero' : 'Falso'}</b>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
        {item.testo_domanda}
      </p>
      {result.spiegazione && (
        <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
            Perché
          </span>
          <p className="mt-1 text-sm leading-relaxed">{result.spiegazione}</p>
        </div>
      )}
      {result.pattern_trappola && (
        <p className="mt-3 text-xs text-[var(--warn)]">
          <span className="font-mono">Pattern trappola {result.pattern_trappola}</span>
        </p>
      )}
      <p className="mt-3 text-xs text-[var(--muted)] font-mono">
        Prossimo ripasso in {result.interval_days} giorn{result.interval_days === 1 ? 'o' : 'i'}
      </p>
      <div className="mt-4">
        <Button onClick={onNext} fullWidth size="lg" disabled={disabled}>
          Prossima
        </Button>
      </div>
    </Card>
  )
}

async function readError(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as { error?: string }
    return body.error ?? `HTTP ${res.status}`
  } catch {
    return `HTTP ${res.status}`
  }
}
