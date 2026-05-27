import Link from 'next/link'
import { lessons, categories } from '@/lib/lessons'
import { Clock, Zap, ChevronRight } from 'lucide-react'

const difficultyColor: Record<string, string> = {
  Beginner: '#4ade80',
  Intermediate: '#fbbf24',
  Advanced: '#f87171',
}

export default function LearnPage() {
  return (
    <div style={{ paddingTop: 80, padding: '80px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: 56, paddingTop: 20 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)',
          borderRadius: 99, padding: '6px 16px', marginBottom: 20, fontSize: 13, color: '#4ade80',
        }}>
          📚 Financial Literacy Library
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 14 }}>
          Choose a lesson
        </h1>
        <p style={{ color: '#64748b', fontSize: 17, maxWidth: 500 }}>
          Each lesson takes under 10 minutes. Read, then reinforce with a quiz to earn XP.
        </p>
      </div>

      {categories.map(cat => (
        <div key={cat} style={{ marginBottom: 56 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#94a3b8',
            marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            {cat}
            <span style={{ height: 1, flex: 1, background: 'var(--border)', display: 'block' }} />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: 20 }}>
            {lessons.filter(l => l.category === cat).map(lesson => (
              <Link key={lesson.id} href={`/learn/${lesson.slug}`} style={{ textDecoration: 'none' }}>
                <div className="glow-card" style={{ padding: 28, cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 36 }}>{lesson.emoji}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 99,
                      color: difficultyColor[lesson.difficulty],
                      background: `${difficultyColor[lesson.difficulty]}18`,
                      border: `1px solid ${difficultyColor[lesson.difficulty]}30`,
                    }}>{lesson.difficulty}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{lesson.title}</h3>
                    <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>{lesson.summary}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#64748b' }}>
                        <Clock size={14} /> {lesson.duration} min
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#fbbf24' }}>
                        <Zap size={14} /> {lesson.xp} XP
                      </span>
                    </div>
                    <ChevronRight size={18} color="#4ade80" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
