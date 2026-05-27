'use client'
import { useState } from 'react'
import { questions } from '@/lib/quiz'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Zap } from 'lucide-react'
import Link from 'next/link'

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)
  const [done, setDone] = useState(false)
  const [results, setResults] = useState<boolean[]>([])

  const q = questions[current]
  const progress = ((current) / questions.length) * 100

  function handleSelect(i: number) {
    if (answered) return
    setSelected(i)
    setAnswered(true)
    const correct = i === q.correct
    if (correct) {
      setScore(s => s + 1)
      setXpEarned(x => x + q.xp)
    }
    setResults(r => [...r, correct])
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setXpEarned(0)
    setDone(false)
    setResults([])
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const grade = pct >= 90 ? '🏆 Expert' : pct >= 70 ? '🎯 Solid' : pct >= 50 ? '📚 Keep Learning' : '💪 Keep Going'
    return (
      <div style={{ paddingTop: 64, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
          <div style={{ fontSize: 72, marginBottom: 24 }}>
            {pct >= 70 ? '🎉' : '📖'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: '#f1f5f9', marginBottom: 8 }}>
            Quiz Complete!
          </h1>
          <p style={{ color: '#64748b', marginBottom: 40, fontSize: 16 }}>{grade}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 40 }}>
            {[
              { label: 'Score', value: `${score}/${questions.length}`, color: '#f1f5f9' },
              { label: 'Accuracy', value: `${pct}%`, color: pct >= 70 ? '#4ade80' : '#f87171' },
              { label: 'XP Earned', value: `+${xpEarned}`, color: '#fbbf24' },
            ].map(({ label, value, color }) => (
              <div key={label} className="glow-card" style={{ padding: '20px 16px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 700, color, marginBottom: 4 }}>{value}</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Per-question summary */}
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            {results.map((correct, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: correct ? 'rgba(74,222,128,0.15)' : 'rgba(248,113,113,0.15)',
                border: `1px solid ${correct ? 'rgba(74,222,128,0.3)' : 'rgba(248,113,113,0.3)'}`,
                fontSize: 12, fontFamily: 'var(--font-mono)', color: correct ? '#4ade80' : '#f87171',
              }}>
                {i + 1}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={handleRestart} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <RotateCcw size={16} /> Retake quiz
            </button>
            <Link href="/learn" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Back to lessons
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ fontSize: 13, color: '#64748b', fontFamily: 'var(--font-mono)' }}>
            Question {current + 1} / {questions.length}
          </span>
          <span className="xp-badge"><Zap size={12} style={{ display: 'inline', marginRight: 4 }} />{xpEarned} XP</span>
        </div>

        {/* Progress */}
        <div className="progress-bar" style={{ marginBottom: 40 }}>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Category chip */}
        <div style={{
          display: 'inline-block', fontSize: 12, fontWeight: 600, padding: '4px 12px',
          background: 'var(--blue-dim)', border: '1px solid rgba(96,165,250,0.25)',
          borderRadius: 99, color: '#60a5fa', marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          {q.category}
        </div>

        {/* Question */}
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.3, marginBottom: 32 }}>
          {q.question}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          {q.options.map((opt, i) => {
            let cls = 'answer-option'
            if (answered) {
              if (i === q.correct) cls += ' correct'
              else if (i === selected) cls += ' incorrect'
            } else if (i === selected) {
              cls += ' selected'
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-mono)', flexShrink: 0,
                  color: answered && i === q.correct ? '#4ade80' : answered && i === selected ? '#f87171' : '#64748b',
                }}>
                  {answered && i === q.correct ? <CheckCircle2 size={16} /> : answered && i === selected ? <XCircle size={16} /> : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {answered && (
          <div style={{
            background: selected === q.correct ? 'rgba(74,222,128,0.07)' : 'rgba(248,113,113,0.07)',
            border: `1px solid ${selected === q.correct ? 'rgba(74,222,128,0.25)' : 'rgba(248,113,113,0.25)'}`,
            borderRadius: 14, padding: '20px 24px', marginBottom: 28,
            animation: 'fadeInUp 0.3s ease',
          }}>
            <p style={{
              fontSize: 13, fontWeight: 700, marginBottom: 8,
              color: selected === q.correct ? '#4ade80' : '#f87171',
            }}>
              {selected === q.correct ? '✓ Correct! +' + q.xp + ' XP' : '✗ Not quite'}
            </p>
            <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.65 }}>{q.explanation}</p>
          </div>
        )}

        {answered && (
          <button className="btn-primary" onClick={handleNext} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15 }}>
            {current + 1 >= questions.length ? 'See results' : 'Next question'} <ArrowRight size={16} />
          </button>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
