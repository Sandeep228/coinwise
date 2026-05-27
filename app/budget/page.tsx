'use client'
import { useState } from 'react'
import { PlusCircle, Trash2, TrendingDown, TrendingUp, AlertTriangle, CheckCircle, DollarSign } from 'lucide-react'

type Category = { name: string; emoji: string; color: string; type: 'need' | 'want' | 'savings' }
type Expense = { id: string; category: string; label: string; amount: number }

const CATEGORIES: Category[] = [
  { name: 'Housing', emoji: '🏠', color: '#60a5fa', type: 'need' },
  { name: 'Food', emoji: '🥗', color: '#4ade80', type: 'need' },
  { name: 'Transport', emoji: '🚌', color: '#34d399', type: 'need' },
  { name: 'Utilities', emoji: '💡', color: '#a78bfa', type: 'need' },
  { name: 'Entertainment', emoji: '🎮', color: '#f472b6', type: 'want' },
  { name: 'Dining Out', emoji: '🍕', color: '#fb923c', type: 'want' },
  { name: 'Shopping', emoji: '🛍️', color: '#f87171', type: 'want' },
  { name: 'Subscriptions', emoji: '📱', color: '#c084fc', type: 'want' },
  { name: 'Savings', emoji: '🏦', color: '#fbbf24', type: 'savings' },
  { name: 'Investments', emoji: '📈', color: '#22d3ee', type: 'savings' },
]

const SCENARIOS = [
  { label: 'First Job ($2,000/mo)', income: 2000 },
  { label: 'Part-time ($800/mo)', income: 800 },
  { label: 'College stipend ($1,200/mo)', income: 1200 },
  { label: 'Custom', income: 0 },
]

const PRESETS: Expense[] = [
  { id: '1', category: 'Housing', label: 'Rent', amount: 800 },
  { id: '2', category: 'Food', label: 'Groceries', amount: 200 },
  { id: '3', category: 'Transport', label: 'Bus pass', amount: 60 },
  { id: '4', category: 'Utilities', label: 'Phone bill', amount: 50 },
  { id: '5', category: 'Entertainment', label: 'Netflix + Spotify', amount: 25 },
  { id: '6', category: 'Savings', label: 'Emergency fund', amount: 100 },
]

export default function BudgetPage() {
  const [income, setIncome] = useState(2000)
  const [customIncome, setCustomIncome] = useState('')
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [expenses, setExpenses] = useState<Expense[]>(PRESETS)
  const [newLabel, setNewLabel] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [newCat, setNewCat] = useState('Food')
  const [showAdd, setShowAdd] = useState(false)

  const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0)
  const remaining = income - totalExpenses
  const pctSpent = Math.min((totalExpenses / income) * 100, 100)

  const needsTotal = expenses.filter(e => CATEGORIES.find(c => c.name === e.category)?.type === 'need').reduce((s, e) => s + e.amount, 0)
  const wantsTotal = expenses.filter(e => CATEGORIES.find(c => c.name === e.category)?.type === 'want').reduce((s, e) => s + e.amount, 0)
  const savingsTotal = expenses.filter(e => CATEGORIES.find(c => c.name === e.category)?.type === 'savings').reduce((s, e) => s + e.amount, 0)

  const needsPct = income > 0 ? Math.round((needsTotal / income) * 100) : 0
  const wantsPct = income > 0 ? Math.round((wantsTotal / income) * 100) : 0
  const savingsPct = income > 0 ? Math.round((savingsTotal / income) * 100) : 0

  function addExpense() {
    if (!newLabel || !newAmount || isNaN(Number(newAmount))) return
    setExpenses(ex => [...ex, { id: Date.now().toString(), category: newCat, label: newLabel, amount: Number(newAmount) }])
    setNewLabel('')
    setNewAmount('')
    setShowAdd(false)
  }

  function removeExpense(id: string) {
    setExpenses(ex => ex.filter(e => e.id !== id))
  }

  function handleScenario(idx: number) {
    setScenarioIdx(idx)
    if (idx < 3) setIncome(SCENARIOS[idx].income)
  }

  const status = remaining < 0 ? 'danger' : remaining < income * 0.1 ? 'warning' : 'good'

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.2)',
            borderRadius: 99, padding: '6px 16px', marginBottom: 20, fontSize: 13, color: '#f472b6',
          }}>
            💰 Budget Simulator
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 12 }}>
            Manage your month
          </h1>
          <p style={{ color: '#64748b', fontSize: 16 }}>
            Add income and expenses. See your 50/30/20 breakdown in real time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 28, alignItems: 'start' }}>
          {/* LEFT: income + expenses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Income selector */}
            <div className="glow-card" style={{ padding: 28 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <DollarSign size={18} color="#4ade80" /> Monthly Income
              </h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                {SCENARIOS.map((s, i) => (
                  <button key={i} onClick={() => handleScenario(i)} style={{
                    padding: '8px 14px', borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                    background: scenarioIdx === i ? 'var(--accent-dim)' : 'var(--bg-card-2)',
                    border: `1px solid ${scenarioIdx === i ? 'rgba(74,222,128,0.4)' : 'var(--border)'}`,
                    color: scenarioIdx === i ? '#4ade80' : '#94a3b8', transition: 'all 0.15s',
                  }}>{s.label}</button>
                ))}
              </div>
              {scenarioIdx === 3 ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#4ade80', fontSize: 20, fontFamily: 'var(--font-mono)' }}>$</span>
                  <input
                    type="number" placeholder="Enter your income"
                    value={customIncome}
                    onChange={e => { setCustomIncome(e.target.value); setIncome(Number(e.target.value) || 0) }}
                    style={{
                      background: 'var(--bg-card-2)', border: '1px solid var(--border)',
                      borderRadius: 10, padding: '10px 14px', color: '#f1f5f9', fontSize: 15,
                      outline: 'none', width: 200, fontFamily: 'var(--font-mono)',
                    }}
                  />
                </div>
              ) : (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 700, color: '#4ade80' }}>
                  ${income.toLocaleString()}<span style={{ fontSize: 16, color: '#64748b', fontWeight: 400 }}>/month</span>
                </div>
              )}
            </div>

            {/* Expenses list */}
            <div className="glow-card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>
                  Expenses
                </h3>
                <button onClick={() => setShowAdd(s => !s)} className="btn-primary" style={{ padding: '8px 16px', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <PlusCircle size={15} /> Add
                </button>
              </div>

              {showAdd && (
                <div style={{
                  background: 'var(--bg-card-2)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: 20, marginBottom: 20, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'flex-end',
                }}>
                  <div style={{ flex: 1, minWidth: 120 }}>
                    <label style={{ fontSize: 11, color: '#64748b', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Label</label>
                    <input value={newLabel} onChange={e => setNewLabel(e.target.value)} placeholder="e.g. Gym membership"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: '#f1f5f9', fontSize: 14, width: '100%', outline: 'none' }} />
                  </div>
                  <div style={{ width: 100 }}>
                    <label style={{ fontSize: 11, color: '#64748b', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amount $</label>
                    <input value={newAmount} onChange={e => setNewAmount(e.target.value)} placeholder="0" type="number"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: '#f1f5f9', fontSize: 14, width: '100%', outline: 'none', fontFamily: 'var(--font-mono)' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 120 }}>
                    <label style={{ fontSize: 11, color: '#64748b', marginBottom: 6, display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</label>
                    <select value={newCat} onChange={e => setNewCat(e.target.value)}
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', color: '#f1f5f9', fontSize: 14, width: '100%', outline: 'none' }}>
                      {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.emoji} {c.name}</option>)}
                    </select>
                  </div>
                  <button onClick={addExpense} className="btn-primary" style={{ padding: '9px 18px', fontSize: 14 }}>Add</button>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {expenses.map(exp => {
                  const cat = CATEGORIES.find(c => c.name === exp.category)
                  return (
                    <div key={exp.id} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '12px 16px', background: 'var(--bg-card-2)', borderRadius: 10,
                      border: '1px solid var(--border)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 20 }}>{cat?.emoji}</span>
                        <div>
                          <div style={{ fontSize: 15, color: '#f1f5f9', fontWeight: 500 }}>{exp.label}</div>
                          <div style={{ fontSize: 12, color: '#64748b' }}>{exp.category}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: cat?.color || '#f1f5f9', fontWeight: 600 }}>
                          ${exp.amount.toLocaleString()}
                        </span>
                        <button onClick={() => removeExpense(exp.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', padding: 4 }}>
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: summary panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 80 }}>
            {/* Remaining */}
            <div className="glow-card" style={{
              padding: 28, textAlign: 'center',
              background: status === 'danger' ? 'rgba(248,113,113,0.06)' : status === 'warning' ? 'rgba(251,191,36,0.06)' : 'rgba(74,222,128,0.06)',
              borderColor: status === 'danger' ? 'rgba(248,113,113,0.25)' : status === 'warning' ? 'rgba(251,191,36,0.2)' : 'rgba(74,222,128,0.2)',
            }}>
              {status === 'danger' ? <TrendingDown size={28} color="#f87171" style={{ marginBottom: 8 }} /> :
                status === 'warning' ? <AlertTriangle size={28} color="#fbbf24" style={{ marginBottom: 8 }} /> :
                  <CheckCircle size={28} color="#4ade80" style={{ marginBottom: 8 }} />}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, lineHeight: 1, marginBottom: 4,
                color: status === 'danger' ? '#f87171' : status === 'warning' ? '#fbbf24' : '#4ade80' }}>
                {remaining < 0 ? '-' : '+'}${Math.abs(remaining).toLocaleString()}
              </div>
              <div style={{ color: '#64748b', fontSize: 14 }}>
                {remaining < 0 ? '⚠️ Over budget!' : remaining === 0 ? 'Perfectly balanced' : 'Left this month'}
              </div>
            </div>

            {/* Spending bar */}
            <div className="glow-card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 13 }}>
                <span style={{ color: '#64748b' }}>Spent</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#f1f5f9' }}>${totalExpenses.toLocaleString()} / ${income.toLocaleString()}</span>
              </div>
              <div className="progress-bar" style={{ height: 10, marginBottom: 0 }}>
                <div className="progress-fill" style={{
                  width: `${pctSpent}%`,
                  background: status === 'danger' ? '#f87171' : status === 'warning' ? '#fbbf24' : 'linear-gradient(90deg,#22c55e,#4ade80)',
                }} />
              </div>
            </div>

            {/* 50/30/20 breakdown */}
            <div className="glow-card" style={{ padding: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 18 }}>
                50 / 30 / 20 Analysis
              </h4>
              {[
                { label: 'Needs', target: 50, actual: needsPct, amount: needsTotal, color: '#60a5fa' },
                { label: 'Wants', target: 30, actual: wantsPct, amount: wantsTotal, color: '#f472b6' },
                { label: 'Savings', target: 20, actual: savingsPct, amount: savingsTotal, color: '#fbbf24' },
              ].map(({ label, target, actual, amount, color }) => (
                <div key={label} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                    <span style={{ color: '#94a3b8' }}>{label} <span style={{ color: '#475569' }}>(target {target}%)</span></span>
                    <span style={{ fontFamily: 'var(--font-mono)', color, fontWeight: 600 }}>{actual}% · ${amount}</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--bg-card-2)', borderRadius: 99, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(actual / target * 100, 100)}%`, background: color, borderRadius: 99, transition: 'width 0.4s ease' }} />
                  </div>
                  {actual > target && (
                    <div style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>
                      {actual - target}% over target
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Insight */}
            <div style={{
              background: 'rgba(96,165,250,0.07)', border: '1px solid rgba(96,165,250,0.2)',
              borderRadius: 14, padding: '18px 20px',
            }}>
              <p style={{ fontSize: 13, color: '#93c5fd', lineHeight: 1.65 }}>
                {remaining < 0
                  ? `💡 You're $${Math.abs(remaining)} over budget. Try reducing wants like subscriptions or dining out first.`
                  : savingsPct < 10
                    ? `💡 You're saving less than 10% of income. Try to automate $${Math.round(income * 0.2)} to savings first.`
                    : `✅ Looking good! You're saving ${savingsPct}% of income. Consider putting the remaining $${remaining} toward investments.`
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
