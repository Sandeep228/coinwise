import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, Calculator, TrendingUp, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.1)',
    title: 'Bite-sized Lessons',
    desc: 'Master budgeting, investing, credit, and taxes through short, interactive modules designed for real life.',
    href: '/learn',
    cta: 'Start learning',
  },
  {
    icon: Brain,
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.1)',
    title: 'Adaptive Quizzes',
    desc: 'Test your knowledge with scenario-based questions. Earn XP and track your mastery over time.',
    href: '/quiz',
    cta: 'Take a quiz',
  },
  {
    icon: Calculator,
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
    title: 'Budget Simulator',
    desc: `Manage a virtual month's budget. Make real trade-offs, see the consequences, and learn from mistakes — for free.`,
    href: '/budget',
    cta: 'Try simulator',
  },
]

const stats = [
  { label: 'Lessons', value: '24', icon: BookOpen },
  { label: 'Topics covered', value: '6', icon: Shield },
  { label: 'Avg session', value: '8 min', icon: Zap },
  { label: 'Skills unlocked', value: '∞', icon: TrendingUp },
]

export default function Home() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section style={{
        minHeight: '90vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* bg blobs */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '10%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--accent-dim)', border: '1px solid rgba(74,222,128,0.25)',
          borderRadius: 99, padding: '8px 18px', marginBottom: 32,
        }}>
          <span style={{ fontSize: 14, color: '#4ade80', fontWeight: 500 }}>
            🎓 WestHacks 2026 · Fintech × Education
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 7vw, 84px)',
          fontWeight: 800, lineHeight: 1.05, maxWidth: 800, marginBottom: 24,
          color: '#f1f5f9',
        }}>
          Money skills that<br />
          <em style={{ color: '#4ade80', fontStyle: 'italic' }}>actually stick.</em>
        </h1>

        <p style={{
          fontSize: 18, color: '#94a3b8', maxWidth: 540, lineHeight: 1.7, marginBottom: 48,
        }}>
          CoinWise turns financial literacy into an interactive experience — lessons, quizzes, and a real budget simulator built for high school students.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/learn" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            Get started free <ArrowRight size={18} />
          </Link>
          <Link href="/dashboard" className="btn-ghost" style={{ fontSize: 16, padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            View dashboard
          </Link>
        </div>

        {/* floating coins decoration */}
        <div style={{ marginTop: 80, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Budgeting', 'Investing', 'Credit Scores', 'Taxes', 'Compound Interest', 'Emergency Funds'].map(tag => (
            <span key={tag} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 99, padding: '6px 16px', fontSize: 13, color: '#64748b',
            }}>{tag}</span>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        display: 'flex', justifyContent: 'center', gap: 0,
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        background: 'var(--bg-card)', padding: '0',
      }}>
        {stats.map(({ label, value, icon: Icon }, i) => (
          <div key={label} style={{
            flex: 1, maxWidth: 200, padding: '32px 24px', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <Icon size={20} color="#4ade80" style={{ marginBottom: 8 }} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, color: '#f1f5f9', lineHeight: 1 }}>
              {value}
            </div>
            <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#f1f5f9', marginBottom: 16 }}>
            Three ways to learn
          </h2>
          <p style={{ color: '#64748b', fontSize: 17, maxWidth: 460, margin: '0 auto' }}>
            Different learning styles, one goal: financial confidence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {features.map(({ icon: Icon, color, bg, title, desc, href, cta }) => (
            <div key={title} className="glow-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ width: 52, height: 52, background: bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={26} color={color} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#f1f5f9', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65 }}>{desc}</p>
              </div>
              <Link href={href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color, fontWeight: 600, fontSize: 14, textDecoration: 'none', marginTop: 'auto',
              }}>
                {cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section style={{
        margin: '0 24px 100px', maxWidth: 1052, marginLeft: 'auto', marginRight: 'auto',
        background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(96,165,250,0.08))',
        border: '1px solid rgba(74,222,128,0.2)', borderRadius: 24,
        padding: '64px 48px', textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 700, color: '#f1f5f9', marginBottom: 16 }}>
          Ready to become financially savvy?
        </h2>
        <p style={{ color: '#94a3b8', fontSize: 16, marginBottom: 36 }}>
          Free. No sign-up. Start your first lesson in under 30 seconds.
        </p>
        <Link href="/learn" className="btn-primary" style={{ fontSize: 16, padding: '14px 36px', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          Begin your journey <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}
