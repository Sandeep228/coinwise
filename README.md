# CoinWise — Financial Literacy for Teens 💰

> A WestHacks 2026 submission · Fintech × Education Theme

CoinWise teaches high school students how to manage money through **interactive lessons**, **adaptive quizzes**, and a **real budget simulator** — all in under 10 minutes per session.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/coinwise
cd coinwise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 📱 Features

| Feature | Description |
|---------|-------------|
| **Lesson Library** | 6 bite-sized lessons on budgeting, investing, credit, savings, and taxes |
| **Interactive Quiz** | 10 scenario-based questions with explanations and XP rewards |
| **Budget Simulator** | Live 50/30/20 budget tracker with income presets and real-time feedback |
| **Dashboard** | XP tracking, achievement badges, topic mastery progress, activity charts |

---

## 🗂️ Project Structure

```
coinwise/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with navigation
│   ├── globals.css           # Global styles & design tokens
│   ├── dashboard/page.tsx    # Progress dashboard
│   ├── learn/
│   │   ├── page.tsx          # Lesson catalog
│   │   └── [slug]/page.tsx   # Individual lesson view
│   ├── quiz/page.tsx         # Interactive quiz engine
│   └── budget/page.tsx       # Budget simulator
├── components/
│   └── Navigation.tsx        # Persistent top nav
├── lib/
│   ├── lessons.ts            # Lesson content data
│   └── quiz.ts               # Quiz questions & answers
└── README.md
```

---

## 🎯 What issue are we solving?

**Financial illiteracy is a crisis that starts in high school.** Less than 25% of US teens can answer basic financial literacy questions. Most schools don't teach budgeting, investing, or how credit actually works — leaving students to learn from mistakes that can follow them for decades.

---

## 💡 How does CoinWise address it?

1. **Lessons** — 6 core financial topics broken into scannable, jargon-free sections with real-life examples. Each takes under 10 minutes.
2. **Quizzes** — Scenario-based questions (not just definitions) that show you *why* each answer is right, reinforcing real decision-making.
3. **Budget Simulator** — Use income presets (first job, part-time, etc.) and add real expenses. The app shows your 50/30/20 split live and gives actionable feedback when you're overspending.
4. **XP & Achievements** — Light gamification keeps engagement up without being distracting.

---

## 🔨 Hardest part of the build

The **budget simulator** required careful real-time state management — ensuring the 50/30/20 breakdown, progress bars, and insight text all update instantly as users add/remove expenses or switch income scenarios, while keeping the UI readable at all budget states (including over-budget situations). Designing color and feedback semantics (green/yellow/red) that feel informative rather than punishing took several iterations.

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for utility styling
- **Lucide React** for icons
- Pure CSS animations (no heavy animation library needed)
- Zero external APIs — fully offline-capable

---

## 📄 License

MIT — free to use, remix, and build on.
