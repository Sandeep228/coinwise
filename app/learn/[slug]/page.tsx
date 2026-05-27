import { lessons } from '@/lib/lessons'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Zap, ArrowLeft, ArrowRight, Lightbulb, BookOpen } from 'lucide-react'

export function generateStaticParams() {
  return lessons.map(l => ({ slug: l.slug }))
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find(l => l.slug === params.slug)
  if (!lesson) notFound()

  const nextLesson = lessons[lessons.indexOf(lesson) + 1]

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh' }}>
      {/* Hero banner */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(34,197,94,0.08) 0%, transparent 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '48px 24px 40px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/learn" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 14, textDecoration: 'none', marginBottom: 24,
          }}>
            <ArrowLeft size={16} /> Back to lessons
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <span style={{ fontSize: 52 }}>{lesson.emoji}</span>
            <div>
              <div style={{ fontSize: 12, color: '#4ade80', fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{lesson.category}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, color: '#f1f5f9', lineHeight: 1.1 }}>{lesson.title}</h1>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: 17, marginBottom: 24, maxWidth: 540 }}>{lesson.summary}</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#64748b' }}>
              <Clock size={15} /> {lesson.duration} min read
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#fbbf24' }}>
              <Zap size={15} /> Earn {lesson.xp} XP
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#64748b' }}>
              <BookOpen size={15} /> {lesson.sections.length} sections
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>
        {lesson.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 28, height: 28, background: 'var(--accent-dim)', border: '1px solid rgba(74,222,128,0.3)',
                borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 12, color: '#4ade80', fontWeight: 600, flexShrink: 0,
              }}>{i + 1}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: '#f1f5f9' }}>{section.heading}</h2>
            </div>

            <div style={{
              color: '#cbd5e1', fontSize: 16, lineHeight: 1.8, whiteSpace: 'pre-wrap',
              paddingLeft: 40,
            }}
              dangerouslySetInnerHTML={{
                __html: section.body
                  .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#f1f5f9">$1</strong>')
                  .replace(/\n/g, '<br/>')
              }}
            />

            {section.tip && (
              <div style={{
                marginTop: 20, marginLeft: 40, background: 'rgba(74,222,128,0.07)',
                border: '1px solid rgba(74,222,128,0.2)', borderRadius: 12,
                padding: '16px 20px', display: 'flex', gap: 12,
              }}>
                <Lightbulb size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ color: '#86efac', fontSize: 14, lineHeight: 1.65 }}>{section.tip}</p>
              </div>
            )}

            {section.example && (
              <div style={{
                marginTop: 16, marginLeft: 40, background: 'rgba(96,165,250,0.07)',
                border: '1px solid rgba(96,165,250,0.2)', borderLeft: '3px solid #60a5fa',
                borderRadius: '0 12px 12px 0', padding: '16px 20px',
              }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#60a5fa', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Example</p>
                <p style={{ color: '#bae6fd', fontSize: 14, lineHeight: 1.65 }}>{section.example}</p>
              </div>
            )}
          </div>
        ))}

        {/* XP completion card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(74,222,128,0.06))',
          border: '1px solid rgba(74,222,128,0.25)', borderRadius: 20,
          padding: '40px', textAlign: 'center', marginTop: 24,
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>
            Lesson complete!
          </h3>
          <p style={{ color: '#94a3b8', marginBottom: 24 }}>You've earned <strong style={{ color: '#fbbf24' }}>{lesson.xp} XP</strong>. Test what you learned with the quiz.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quiz" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Take the quiz <ArrowRight size={16} />
            </Link>
            {nextLesson && (
              <Link href={`/learn/${nextLesson.slug}`} className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Next: {nextLesson.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
