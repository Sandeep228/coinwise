'use client'
import Link from 'next/link'
import { lessons } from '@/lib/lessons'
import { questions } from '@/lib/quiz'
import { BookOpen, Brain, Calculator, Zap, TrendingUp, Award, ArrowRight, Star } from 'lucide-react'

const progressData = [
  { category: 'Budgeting', lessons: 1, total: 1, color: '#4ade80' },
  { category: 'Investing', lessons: 1, total: 2, color: '#60a5fa' },
  { category: 'Credit', lessons: 0, total: 1, color: '#f472b6' },
  { category: 'Savings', lessons: 0, total: 1, color: '#fbbf24' },
  { category: 'Taxes', lessons: 0, total: 1, color: '#fb923c' },
]

const achievements = [
  { icon: '🎯', label: 'First Lesson', desc: 'Complete any lesson', earned: true },
  { icon: '⚡', label: 'Quick Learner', desc: 'Complete 3 lessons', earned: false },
  { icon: '🧠', label: 'Quiz Master', desc: 'Score 90% on a quiz', earned: false },
  { icon: '💰', label: 'Budget Boss', desc: 'Balance a budget sim', earned: true },
  { icon: '🚀', label: 'All In', desc: 'Complete all lessons', earned: false },
  { icon: '🏆', label: 'XP Legend', desc: 'Earn 1000 XP', earned: true },
]

const weeklyXP = [
  { day: 'Mon', xp: 80 },
  { day: 'Tue', xp: 120 },
  { day: 'Wed', xp: 50 },
  { day: 'Thu', xp: 200 },
  { day: 'Fri', xp: 160 },
  { day: 'Sat', xp: 90 },
  { day: 'Sun', xp: 40 },
]

const maxXP = Math.max(...weeklyXP.map(d => d.xp))

export default function DashboardPage() {
  const totalLessons = lessons.length
  const totalQuestions = questions.length

  return (
    <div style={{ paddingTop: 64, padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 8 }}>
            Your Dashboard
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>Keep going — you&apos;re building real money skills.</p>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))',
          border: '1px solid rgba(251,191,36,0.25)', borderRadius: 16, padding: '20px 28px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 36, fontWeight: 800, color: '#fbbf24', lineHeight: 1 }}>1,240</div>
          <div style={{ fontSize: 13, color: '#92400e', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
            <Zap size={13} color="#fbbf24" /> Total XP earned
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16, marginBottom: 40 }}>
        {[
          { icon: BookOpen, label: 'Lessons Available', value: totalLessons, sub: '1 completed', color: '#4ade80', bg: 'rgba(74,222,128,0.1)', href: '/learn' },
          { icon: Brain, label: 'Quiz Questions', value: totalQuestions, sub: '3 answered', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', href: '/quiz' },
          { icon: Calculator, label: 'Budget Sims', value: '∞', sub: 'Try scenarios', color: '#f472b6', bg: 'rgba(244,114,182,0.1)', href: '/budget' },
          { icon: TrendingUp, label: 'Day Streak', value: 4, sub: '🔥 Keep it up!', color: '#fb923c', bg: 'rgba(251,146,60,0.1)', href: '/dashboard' },
        ].map(({ icon: Icon, label, value, sub, color, bg, href }) => (
          <Link key={label} href={href} style={{ textDecoration: 'none' }}>
            <div className="glow-card" style={{ padding: 24, cursor: 'pointer' }}>
              <div style={{ width: 44, height: 44, background: bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={22} color={color} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 800, color: '#f1f5f9', lineHeight: 1, marginBottom: 4 }}>{value}</div>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 12, color }}>{sub}</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        {/* Weekly XP chart */}
        <div className="glow-card" style={{ padding: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 24 }}>
            Weekly XP Activity
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 120 }}>
            {weeklyXP.map(({ day, xp }) => (
              <div key={day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: '100%', borderRadius: 6,
                  height: `${(xp / maxXP) * 100}px`,
                  background: day === 'Thu' ? 'linear-gradient(180deg,#4ade80,#22c55e)' : 'var(--bg-card-2)',
                  border: day === 'Thu' ? '1px solid rgba(74,222,128,0.4)' : '1px solid var(--border)',
                  transition: 'height 0.5s ease',
                }} />
                <span style={{ fontSize: 11, color: day === 'Thu' ? '#4ade80' : '#475569', fontFamily: 'var(--font-mono)' }}>{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category progress */}
        <div className="glow-card" style={{ padding: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 24 }}>
            Topic Mastery
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {progressData.map(({ category, lessons: done, total, color }) => (
              <div key={category}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                  <span style={{ color: '#94a3b8' }}>{category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color }}>{done}/{total}</span>
                </div>
                <div style={{ height: 6, background: 'var(--bg-card-2)', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(done / total) * 100}%`, background: color, borderRadius: 99, transition: 'width 0.6s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="glow-card" style={{ padding: 28, marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <Award size={20} color="#fbbf24" />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Achievements</h3>
          <span style={{ fontSize: 12, color: '#64748b', marginLeft: 'auto' }}>3 / {achievements.length} unlocked</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px,1fr))', gap: 14 }}>
          {achievements.map(({ icon, label, desc, earned }) => (
            <div key={label} style={{
              background: earned ? 'rgba(251,191,36,0.08)' : 'var(--bg-card-2)',
              border: `1px solid ${earned ? 'rgba(251,191,36,0.25)' : 'var(--border)'}`,
              borderRadius: 14, padding: '18px 16px', textAlign: 'center',
              opacity: earned ? 1 : 0.5,
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{earned ? icon : '🔒'}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: earned ? '#f1f5f9' : '#64748b', marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.4 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Next steps */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(74,222,128,0.1), rgba(96,165,250,0.06))',
        border: '1px solid rgba(74,222,128,0.2)', borderRadius: 20, padding: '36px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
      }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>
            Next up: Compound Interest
          </h3>
          <p style={{ color: '#64748b', fontSize: 15 }}>The 8th wonder of the world — don&apos;t miss this one.</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/learn/compound-interest" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Continue <ArrowRight size={16} />
          </Link>
          <Link href="/quiz" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Take a quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
