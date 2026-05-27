export type Question = {
  id: string
  category: string
  question: string
  options: string[]
  correct: number
  explanation: string
  xp: number
}

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'Budgeting',
    question: 'In the 50/30/20 rule, what percentage is recommended for "wants"?',
    options: ['20%', '30%', '50%', '10%'],
    correct: 1,
    explanation: 'The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings and debt repayment.',
    xp: 10,
  },
  {
    id: 'q2',
    category: 'Credit',
    question: 'Which factor has the BIGGEST impact on your FICO credit score?',
    options: ['Credit utilization', 'Length of credit history', 'Payment history', 'Number of accounts'],
    correct: 2,
    explanation: 'Payment history accounts for 35% of your FICO score — the single largest factor. Always pay on time!',
    xp: 10,
  },
  {
    id: 'q3',
    category: 'Investing',
    question: 'You invest $1,000 at 10% annual return. After 30 years with compound interest, approximately how much do you have?',
    options: ['$4,000', '$10,000', '$17,449', '$30,000'],
    correct: 2,
    explanation: 'Compound interest grows exponentially. Using A = P(1+r)^t: $1,000 × (1.10)^30 ≈ $17,449. Simple interest would only give $4,000.',
    xp: 15,
  },
  {
    id: 'q4',
    category: 'Savings',
    question: 'What is the recommended size of an emergency fund for most people?',
    options: ['$500 flat', '1 month of expenses', '3–6 months of expenses', '1 year of expenses'],
    correct: 2,
    explanation: 'Financial experts recommend 3–6 months of essential expenses. This covers most emergencies like job loss or medical bills without going into debt.',
    xp: 10,
  },
  {
    id: 'q5',
    category: 'Investing',
    question: 'What does "ETF" stand for?',
    options: ['Equity Transfer Fund', 'Exchange-Traded Fund', 'Efficient Tax Formula', 'Electronic Trading Feature'],
    correct: 1,
    explanation: 'ETF stands for Exchange-Traded Fund. It\'s a basket of securities (like stocks or bonds) that trades on an exchange, offering diversification at low cost.',
    xp: 10,
  },
  {
    id: 'q6',
    category: 'Taxes',
    question: 'If your income is $50,000 and you\'re in the 22% tax bracket, what is your tax rate on ALL your income?',
    options: ['22%', 'Less than 22%', 'More than 22%', 'Exactly $11,000'],
    correct: 1,
    explanation: 'The US uses progressive brackets. You only pay 22% on income ABOVE the previous bracket. Your effective rate on all $50,000 is closer to 13–14%.',
    xp: 15,
  },
  {
    id: 'q7',
    category: 'Credit',
    question: 'What is a "good" credit score range?',
    options: ['300–579', '580–669', '670–739', '740–850'],
    correct: 3,
    explanation: '740–850 is considered "Very Good" to "Exceptional." Scores above 740 typically get the best interest rates on loans and credit cards.',
    xp: 10,
  },
  {
    id: 'q8',
    category: 'Budgeting',
    question: 'You earn $2,000/month. Using 50/30/20, how much goes to savings?',
    options: ['$200', '$400', '$600', '$1,000'],
    correct: 1,
    explanation: '20% of $2,000 = $400. This goes to savings, investments, and extra debt payments. Automating this transfer makes it effortless.',
    xp: 10,
  },
  {
    id: 'q9',
    category: 'Investing',
    question: 'Using the Rule of 72, how long does it take to double money at 8% annual return?',
    options: ['5 years', '8 years', '9 years', '12 years'],
    correct: 2,
    explanation: 'Rule of 72: divide 72 by the interest rate. 72 ÷ 8 = 9 years. This is a quick mental math shortcut for estimating doubling time.',
    xp: 15,
  },
  {
    id: 'q10',
    category: 'Savings',
    question: 'Where is the BEST place to keep an emergency fund?',
    options: ['Under your mattress', 'Stock market', 'High-yield savings account', 'Cryptocurrency'],
    correct: 2,
    explanation: 'A high-yield savings account (HYSA) offers 4–5% APY, FDIC insurance, and easy access. Stocks are too volatile; crypto even more so. Cash under a mattress loses to inflation.',
    xp: 10,
  },
]
