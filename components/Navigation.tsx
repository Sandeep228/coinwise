'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Brain, Calculator, LayoutDashboard, Coins } from 'lucide-react'

const links = [
  { href: '/', label: 'Home', icon: Coins },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/quiz', label: 'Quiz', icon: Brain },
  { href: '/budget', label: 'Budget Sim', icon: Calculator },
]

export function Navigation() {
  const pathname = usePathname()
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(11,17,32,0.85)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '0 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '64px',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 36, height: 36, background: 'linear-gradient(135deg,#22c55e,#4ade80)',
          borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Coins size={20} color="#0b1120" strokeWidth={2.5} />
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#f1f5f9' }}>
          Coin<span style={{ color: '#4ade80' }}>Wise</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {links.slice(1).map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <Link key={href} href={href} style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
              borderRadius: 10, textDecoration: 'none', fontSize: 14, fontWeight: 500,
              color: active ? '#4ade80' : '#94a3b8',
              background: active ? 'rgba(74,222,128,0.1)' : 'transparent',
              transition: 'all 0.15s',
            }}>
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--gold-dim)', border: '1px solid rgba(251,191,36,0.25)',
        borderRadius: 99, padding: '6px 16px',
      }}>
        <span style={{ color: '#fbbf24', fontSize: 16 }}>⚡</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: '#fbbf24', fontSize: 13, fontWeight: 600 }}>1,240 XP</span>
      </div>
    </nav>
  )
}
