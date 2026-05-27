export type Lesson = {
  id: string
  title: string
  slug: string
  emoji: string
  category: string
  duration: number
  xp: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  summary: string
  sections: Section[]
}

export type Section = {
  heading: string
  body: string
  tip?: string
  example?: string
}

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'What Is a Budget?',
    slug: 'what-is-a-budget',
    emoji: '📊',
    category: 'Budgeting',
    duration: 5,
    xp: 50,
    difficulty: 'Beginner',
    summary: 'Learn the 50/30/20 rule and how to build your first budget from scratch.',
    sections: [
      {
        heading: 'Why budgets matter',
        body: 'A budget is simply a plan for your money. Without one, spending tends to creep up and savings stay at zero — no matter how much you earn. The good news: you don\'t need a spreadsheet wizard to get started.',
        tip: '61% of Americans don\'t track their spending. Just knowing where your money goes puts you ahead.',
      },
      {
        heading: 'The 50/30/20 Rule',
        body: 'This simple framework splits your after-tax income into three buckets:\n\n• **50% Needs** — rent, food, utilities, transport\n• **30% Wants** — streaming, eating out, entertainment\n• **20% Savings & Debt** — emergency fund, investments, loan payoff',
        example: 'If you earn $2,000/month: $1,000 for needs, $600 for wants, $400 saved. That\'s it!',
      },
      {
        heading: 'Zero-based budgeting',
        body: 'Another approach: give every single dollar a job so Income − Expenses = $0. This doesn\'t mean spending everything — your "savings" category gets assigned too. It just means nothing is unaccounted for.',
        tip: 'Apps like YNAB (You Need A Budget) use this method.',
      },
      {
        heading: 'How to start',
        body: '1. Track last month\'s spending (bank statement works fine)\n2. Group expenses into categories\n3. Compare to your income\n4. Identify where to cut or shift\n5. Set targets for next month and review weekly',
      },
    ],
  },
  {
    id: '2',
    title: 'Compound Interest — The 8th Wonder',
    slug: 'compound-interest',
    emoji: '📈',
    category: 'Investing',
    duration: 7,
    xp: 80,
    difficulty: 'Beginner',
    summary: 'Discover how money grows exponentially over time and why starting early is everything.',
    sections: [
      {
        heading: 'Simple vs Compound Interest',
        body: 'Simple interest earns on your principal only. Compound interest earns on your principal *plus* your previously earned interest — growth that feeds on itself.',
      },
      {
        heading: 'The math made simple',
        body: 'Formula: A = P(1 + r/n)^(nt)\n\nWhere P = principal, r = annual rate, n = times compounded per year, t = years.\n\nAt 7% annual return, money roughly doubles every 10 years (the Rule of 72: 72 ÷ 7 ≈ 10).',
        example: '$1,000 invested at 10% for 30 years = $17,449. The same $1,000 at simple interest = $4,000. Compounding made 4× more money.',
      },
      {
        heading: 'Why age is your superpower',
        body: 'A 16-year-old investing $100/month at 8% until age 65 ends up with ~$520,000.\nA 30-year-old doing the same ends up with ~$170,000.\n\nSame monthly investment. 14 fewer years. $350,000 difference.',
        tip: 'You don\'t need to be rich. You need to be early.',
      },
      {
        heading: 'Where to find it',
        body: 'Compound growth appears in: savings accounts, index funds, retirement accounts (Roth IRA, 401k), dividend reinvestment. It also works against you in credit card debt — which is why high-interest debt is the first thing to pay off.',
      },
    ],
  },
  {
    id: '3',
    title: 'Credit Scores Explained',
    slug: 'credit-scores',
    emoji: '💳',
    category: 'Credit',
    duration: 6,
    xp: 70,
    difficulty: 'Beginner',
    summary: 'Decode your credit score — what it is, how it\'s calculated, and how to build great credit as a teen.',
    sections: [
      {
        heading: 'What is a credit score?',
        body: 'A credit score (300–850) is a number that tells lenders how likely you are to repay debt. Higher = better terms on loans, credit cards, even apartment rentals. It affects your financial life more than most people realize.',
      },
      {
        heading: 'The 5 factors (FICO)',
        body: '• **35% Payment history** — do you pay on time?\n• **30% Credit utilization** — how much of your limit do you use?\n• **15% Length of credit history** — older = better\n• **10% New credit** — recent applications\n• **10% Credit mix** — variety of accounts',
        tip: 'Never miss a payment. It\'s the single biggest factor.',
      },
      {
        heading: 'Building credit as a teen',
        body: 'You can start at 18 with a secured card (deposit = limit). Or ask a parent to add you as an authorized user on their card — you inherit their history. Either way, keep utilization below 30% and always pay the full balance.',
        example: 'Use the card for a $20 Spotify subscription. Pay it in full every month. After a year, you\'ll have a real credit history.',
      },
      {
        heading: 'Myths debunked',
        body: '❌ "Checking your own score hurts it" — False. Soft inquiries don\'t count.\n❌ "Carrying a balance helps" — False. Pay in full. Always.\n❌ "You need a lot of credit cards" — False. One well-managed card is perfect.',
      },
    ],
  },
  {
    id: '4',
    title: 'Emergency Funds 101',
    slug: 'emergency-funds',
    emoji: '🛟',
    category: 'Savings',
    duration: 4,
    xp: 50,
    difficulty: 'Beginner',
    summary: 'Build your financial safety net before investing anything else.',
    sections: [
      {
        heading: 'What it is and why you need it',
        body: 'An emergency fund is 3–6 months of essential expenses kept in cash (or a high-yield savings account). It\'s not for vacations or sales — it\'s for job loss, medical bills, car breakdowns, and real emergencies.',
        tip: 'Without one, any surprise forces you into debt or liquidating investments at bad times.',
      },
      {
        heading: 'How much to save',
        body: 'Start with a $1,000 "starter" fund. Then build to 3 months of expenses. Eventually aim for 6 months if your income is variable or you\'re self-employed.\n\nAs a student: even $500 provides meaningful buffer against most common emergencies.',
      },
      {
        heading: 'Where to keep it',
        body: 'High-yield savings account (HYSA). Look for 4–5% APY online banks vs. 0.01% at traditional banks. Keep it separate from your checking account so it\'s not tempting to spend — but accessible within 1–2 days.',
        example: 'Marcus by Goldman Sachs, Ally, or SoFi offer competitive rates with no minimums.',
      },
      {
        heading: 'How to build it fast',
        body: 'Automate $20–50 from each paycheck before you spend anything else. Sell things you don\'t use. Put tax refunds, birthday money, or side-hustle income straight in. Small contributions compound into a real cushion.',
      },
    ],
  },
  {
    id: '5',
    title: 'Investing Basics: Stocks & ETFs',
    slug: 'investing-basics',
    emoji: '🏦',
    category: 'Investing',
    duration: 8,
    xp: 100,
    difficulty: 'Intermediate',
    summary: 'Demystify the stock market and learn how index funds make investing accessible for beginners.',
    sections: [
      {
        heading: 'What is a stock?',
        body: 'A stock is a fractional ownership stake in a company. When the company grows, your stake grows. When it struggles, so does your investment. Companies issue stock to raise capital; investors buy hoping to share in future profits.',
      },
      {
        heading: 'ETFs: the smarter starting point',
        body: 'Exchange-Traded Funds (ETFs) bundle hundreds of stocks into a single investment. An S&P 500 ETF (like VTI or SPY) owns tiny pieces of 500 major US companies. Instant diversification, low fees (~0.03%), and historically 10% average annual returns.',
        tip: 'Warren Buffett recommends index funds for most people — including professional investors.',
      },
      {
        heading: 'How to start',
        body: '1. Open a custodial account (under 18) or Roth IRA if you have earned income\n2. Pick a low-cost broker: Fidelity, Schwab, or Vanguard\n3. Buy a total market ETF (e.g. VTI)\n4. Set up automatic monthly purchases\n5. Don\'t touch it for decades',
        example: '$50/month into VTI since age 16 at historical 10% returns = ~$670,000 at 65.',
      },
      {
        heading: 'Risk and time horizon',
        body: 'The stock market drops regularly — 10–20% corrections are normal. The key: time in market beats timing the market. Over any 20-year period, the S&P 500 has never lost money. Young investors have the luxury of riding out volatility.',
      },
    ],
  },
  {
    id: '6',
    title: 'Taxes: What Every Teen Must Know',
    slug: 'taxes-basics',
    emoji: '🧾',
    category: 'Taxes',
    duration: 6,
    xp: 75,
    difficulty: 'Intermediate',
    summary: 'Understand W-2s, tax brackets, deductions, and how to file your first tax return.',
    sections: [
      {
        heading: 'Why taxes exist',
        body: 'Taxes fund public goods: schools, roads, healthcare, defense. In the US, you pay federal income tax, state income tax (most states), Social Security (6.2%), and Medicare (1.45%). Employers withhold these from your paycheck automatically.',
      },
      {
        heading: 'Tax brackets explained',
        body: 'The US uses progressive taxation — you pay higher rates only on income above each threshold, not on all income. In 2024:\n\n• 10% on first $11,600\n• 12% on $11,601–$47,150\n• 22% on $47,151–$100,525\n\nEarning $50,000 doesn\'t mean 22% on all of it.',
        tip: 'Your effective tax rate is almost always lower than your marginal rate.',
      },
      {
        heading: 'Your W-2 and 1099',
        body: 'W-2: from employers, shows wages and withholdings. 1099: from freelance work, gig economy, investments. If you earned over $400 from freelance work or $12,950+ total, you must file. Many teens get a refund because employers withhold more than needed.',
      },
      {
        heading: 'Filing your first return',
        body: 'Use IRS Free File if income < $79,000. Takes about 30 minutes:\n1. Gather W-2s and 1099s\n2. Enter info at IRS.gov or FreeTaxUSA\n3. Claim standard deduction ($14,600 for single filers)\n4. Submit and wait for refund (2–3 weeks via direct deposit)',
      },
    ],
  },
]

export const categories = Array.from(new Set(lessons.map(l => l.category)))
