export interface BoardSpace {
  id: number;
  title: string;
  category: 'income' | 'decision' | 'emergency' | 'milestone' | 'investment' | 'tax' | 'liability';
  color: string;
  icon: string;
  phase: 'Phase 1: Early Career (Age 22-26)' | 'Phase 2: Foundation & Family (Age 27-35)' | 'Phase 3: Wealth Building & EMIs (Age 36-48)' | 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)';
  shortDesc: string;
  financialConcept: string;
  monetaryImpact: {
    inr: string;
    usd: string;
  };
  academicRationale: string;
}

export interface GameCard {
  id: string;
  type: 'event' | 'decision' | 'tax_goal';
  title: string;
  categoryLabel: string;
  badgeColor: string;
  scenario: string;
  financialImpact: {
    inr: string;
    usd: string;
    details: string;
  };
  options?: {
    label: string;
    action: string;
    impactInr: string;
    impactUsd: string;
    pedagogicalLesson: string;
  }[];
  academicPrinciple: string;
  curriculumReference: string;
}

export interface PlayMoneyItem {
  denominationInr: number;
  denominationUsd: number;
  colorName: string;
  hexBg: string;
  historicalPortrait: string;
  recommendedCount: number;
  intendedUsage: string;
}

export const BOARD_SPACES: BoardSpace[] = [
  {
    id: 1,
    title: 'First Salary (Start Line)',
    category: 'income',
    color: '#10b981', // emerald
    icon: 'Briefcase',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Campus placement offer credited. Receive monthly salary & establish initial bank account.',
    financialConcept: '50/30/20 Budgeting Rule & Baseline Cash Flow',
    monetaryImpact: { inr: '+₹50,000 / cycle', usd: '+$3,500 / cycle' },
    academicRationale: 'Establishes the foundational principle of active income and the imperative to allocate at least 20% toward savings before discretionary spending.'
  },
  {
    id: 2,
    title: 'Emergency Fund Kickstart',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'ShieldAlert',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Decide whether to park 3 months expenses in a liquid FD or spend on gadgets.',
    financialConcept: 'Liquidity vs. Yield Trade-off (Emergency Preparedness)',
    monetaryImpact: { inr: '-₹30,000 into Liquid Fund', usd: '-$2,000 into Liquid Fund' },
    academicRationale: 'Demonstrates financial resilience: having 3-6 months living expenses in low-risk, high-liquidity assets shields against debt traps.'
  },
  {
    id: 3,
    title: 'Credit Card Induction',
    category: 'liability',
    color: '#f97316', // orange
    icon: 'CreditCard',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Bank offers an unsecured credit card with ₹1,00,000 limit. Risk of revolving debt.',
    financialConcept: 'Credit Utilization Ratio & CIBIL Score Impact',
    monetaryImpact: { inr: 'Optional spend; 36% APR if unpaid', usd: 'Optional spend; 24% APR if unpaid' },
    academicRationale: 'Teaches students that credit cards are payment mechanisms, not extended income. High utilization (>30%) harms credit scores.'
  },
  {
    id: 4,
    title: 'First SIP in Index Funds',
    category: 'investment',
    color: '#2563eb', // blue
    icon: 'TrendingUp',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Set up an automated Systematic Investment Plan (SIP) in an Equity Index Mutual Fund.',
    financialConcept: 'Rupee Cost Averaging & Power of Compounding',
    monetaryImpact: { inr: '-₹5,000/mo into Equity', usd: '-$300/mo into Equity' },
    academicRationale: 'Early initiation into equity markets leverages long investment horizons (CAGR 12-14%), reducing volatility risk via DCA (Dollar/Rupee Cost Averaging).'
  },
  {
    id: 5,
    title: 'Draw an Event Card',
    category: 'emergency',
    color: '#ef4444', // red
    icon: 'Shuffle',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Unforeseen life circumstance happens. Draw the top card from the Event Card deck.',
    financialConcept: 'Systemic vs. Idiosyncratic Risk Exposures',
    monetaryImpact: { inr: 'Varies per drawn card', usd: 'Varies per drawn card' },
    academicRationale: 'Simulates real-world financial volatility where stochastic negative or positive shocks test the player’s liquid buffer.'
  },
  {
    id: 6,
    title: 'Term Life Insurance Purchase',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'FileCheck',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Pure protection term policy vs. high-commission Endowment/ULIP policy.',
    financialConcept: 'Separation of Protection from Investment',
    monetaryImpact: { inr: '-₹12,000 annual premium', usd: '-$600 annual premium' },
    academicRationale: 'Vital financial planning lesson: Buying pure term insurance gives 10-15x income cover at low cost; avoiding ULIPs frees capital for index funds.'
  },
  {
    id: 7,
    title: 'Annual Appraisal & Bonus',
    category: 'income',
    color: '#10b981', // emerald
    icon: 'Coins',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Positive annual performance review. Base salary increments by 15% plus one-time bonus.',
    financialConcept: 'Lifestyle Inflation (Hedonic Treadmill)',
    monetaryImpact: { inr: '+₹40,000 Bonus Cash', usd: '+$2,500 Bonus Cash' },
    academicRationale: 'Challenges players to resist lifestyle creep by routing increments directly to investments rather than higher luxury overheads.'
  },
  {
    id: 8,
    title: 'Lifestyle Creep Warning',
    category: 'liability',
    color: '#f97316', // orange
    icon: 'ShoppingBag',
    phase: 'Phase 1: Early Career (Age 22-26)',
    shortDesc: 'Peer pressure prompts purchase of luxury smartphone or high-end leisure subscription.',
    financialConcept: 'Opportunity Cost of Conspicuous Consumption',
    monetaryImpact: { inr: '-₹25,000 discretionary', usd: '-$1,200 discretionary' },
    academicRationale: 'Calculates the future value of lost compounding: spending ₹25k today forfeits ~₹2.4 Lakhs in 20 years at 12% annual return.'
  },
  {
    id: 9,
    title: 'Marriage & Wedding Milestone',
    category: 'milestone',
    color: '#eab308', // yellow
    icon: 'HeartHandshake',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Grand milestone space! Joint finances begin. Choose budget wedding vs lavish funded ceremony.',
    financialConcept: 'Dual-Income Cashflows vs. Capital Outlay & Joint Goals',
    monetaryImpact: { inr: '-₹2,50,000 to -₹7,00,000', usd: '-$15,000 to -$40,000' },
    academicRationale: 'Major personal milestone requiring strategic trade-offs between emotional societal expectations and initial household debt burden.'
  },
  {
    id: 10,
    title: 'Family Health Insurance Float',
    category: 'tax',
    color: '#8b5cf6', // purple
    icon: 'Stethoscope',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Buy comprehensive ₹10 Lakh family floater health cover. Claim Section 80D tax rebate.',
    financialConcept: 'Health Risk Hedging & Section 80D Deductions',
    monetaryImpact: { inr: '-₹20,000 premium (Save ₹6,000 Tax)', usd: '-$1,200 premium (Save $350 Tax)' },
    academicRationale: 'Demonstrates how health insurance prevents capital erosion during medical crises while simultaneously serving as a tax-saving instrument.'
  },
  {
    id: 11,
    title: 'Car Purchase: Loan vs. Public Transit',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'Car',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Commuting needs rise. Decide between a depreciating auto loan EMI or carpooling.',
    financialConcept: 'Depreciating Assets vs. Debt-to-Income (DTI) Strain',
    monetaryImpact: { inr: '-₹15,000/mo EMI for 5 years', usd: '-$450/mo EMI for 5 years' },
    academicRationale: 'Highlights the double impact of auto ownership: rapid initial asset depreciation combined with recurring fuel, insurance, and interest charges.'
  },
  {
    id: 12,
    title: 'Draw a Decision Card',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'HelpCircle',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Pick a card from the Decision Deck. Weigh risk-adjusted returns and make an active financial choice.',
    financialConcept: 'Strategic Capital Allocation & Risk Tolerance',
    monetaryImpact: { inr: 'Depends on choice selected', usd: 'Depends on choice selected' },
    academicRationale: 'Forces active analytical reasoning under uncertainty, requiring calculation of expected payoffs.'
  },
  {
    id: 13,
    title: 'Parental Medical Emergency',
    category: 'emergency',
    color: '#ef4444', // red
    icon: 'AlertTriangle',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Sudden hospitalization of elderly dependent. Pay from cash reserve or liquidate investments.',
    financialConcept: 'Sandwich Generation Risk & Insurance Adequacy',
    monetaryImpact: { inr: '-₹1,20,000 without insurance (₹10,000 with)', usd: '-$7,000 without insurance ($500 with)' },
    academicRationale: 'Illustrates catastrophic health expenditure risks for mid-career professionals supporting both children and aging parents.'
  },
  {
    id: 14,
    title: 'Section 80C Tax Planning',
    category: 'tax',
    color: '#8b5cf6', // purple
    icon: 'FileSpreadsheet',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Financial year-end deadline! Invest ₹1,50,000 across PPF, ELSS, and EPF to maximize rebate.',
    financialConcept: 'Tax Alpha (Net Effective Yield Enhancement)',
    monetaryImpact: { inr: '-₹1,50,000 Outflow; +₹46,800 Tax Saved', usd: '-$5,000 Outflow; +$1,500 Tax Saved' },
    academicRationale: 'Underlines legal tax planning (tax avoidance through statutory exemptions) versus costly tax negligence.'
  },
  {
    id: 15,
    title: 'Salary Revision & Career Promotion',
    category: 'income',
    color: '#10b981', // emerald
    icon: 'Award',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Promoted to Senior Manager. Base salary increments to ₹1,20,000 per month.',
    financialConcept: 'Human Capital Valuation & Career Leverage',
    monetaryImpact: { inr: '+₹40,000/mo salary increase', usd: '+$2,200/mo salary increase' },
    academicRationale: 'Human capital is an individual’s largest asset in early-to-mid career; upskilling yields exponential internal rates of return (IRR).'
  },
  {
    id: 16,
    title: 'Mid-Game Financial Health Check',
    category: 'milestone',
    color: '#eab308', // yellow
    icon: 'Scale',
    phase: 'Phase 2: Foundation & Family (Age 27-35)',
    shortDesc: 'Audit player ledger: If Net Worth is positive and Emergency Fund >= 3x salary, gain +1 Bonus Die.',
    financialConcept: 'Financial Solvency & Capital Adequacy Ratio',
    monetaryImpact: { inr: 'Audit Milestone', usd: 'Audit Milestone' },
    academicRationale: 'Periodic balance sheet audits reinforce the habit of monitoring net worth rather than merely tracking monthly income.'
  },
  {
    id: 17,
    title: 'Home Purchase: 20-Year Home Loan',
    category: 'liability',
    color: '#f97316', // orange
    icon: 'Home',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Major capital commitment! Down payment of 20% + commit to 240 monthly EMIs at 8.5% interest.',
    financialConcept: 'Debt Amortization, Leverage, and Illiquid Assets',
    monetaryImpact: { inr: '-₹10,00,000 Down; -₹43,000/mo EMI', usd: '-$60,000 Down; -$2,500/mo EMI' },
    academicRationale: 'Examines the classic real estate dilemma: long-term asset building vs fixed liability burden and interest component front-loading in amortizing loans.'
  },
  {
    id: 18,
    title: 'Children Higher Education Goal',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'GraduationCap',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Start dedicated education mutual fund portfolio or rely on future student education loans.',
    financialConcept: 'Goal-Based Financial Planning & Education Inflation (10% p.a.)',
    monetaryImpact: { inr: '-₹15,000/mo targeted allocation', usd: '-$800/mo targeted allocation' },
    academicRationale: 'Demonstrates goal-based investing tailored to specific liability time horizons and higher inflation rates in educational sectors.'
  },
  {
    id: 19,
    title: 'Draw a Goal / Tax Card',
    category: 'tax',
    color: '#8b5cf6', // purple
    icon: 'BookmarkCheck',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Draw from the Goal & Tax Card deck. Optimize national pension schemes or child benefits.',
    financialConcept: 'Long-term Statutory Instruments (NPS, Sukanya Samriddhi)',
    monetaryImpact: { inr: 'Depends on card drawn', usd: 'Depends on card drawn' },
    academicRationale: 'Exposes students to government-backed savings vehicles that offer dual benefits of capital safety and additional tax deductions.'
  },
  {
    id: 20,
    title: 'Stock Market Bull Run',
    category: 'investment',
    color: '#2563eb', // blue
    icon: 'Zap',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Economic expansion leads to a 25% surge in domestic equity indices. Portfolio appreciation!',
    financialConcept: 'Equity Risk Premium & Asset Class Divergence',
    monetaryImpact: { inr: '+25% gain on all equity assets', usd: '+25% gain on all equity assets' },
    academicRationale: 'Highlights the reward component of equity risk premiums and the compounding power of staying invested through cycle expansions.'
  },
  {
    id: 21,
    title: 'Stock Market Correction (-20%)',
    category: 'emergency',
    color: '#ef4444', // red
    icon: 'TrendingDown',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Global recession fears trigger market correction. Players without asset allocation panic.',
    financialConcept: 'Volatility, Behavioral Biases (Loss Aversion), & Rebalancing',
    monetaryImpact: { inr: '-20% paper loss on equity assets', usd: '-20% paper loss on equity assets' },
    academicRationale: 'Teaches students not to exit equities at market bottoms (loss aversion bias) and demonstrates how multi-asset allocation softens drawdowns.'
  },
  {
    id: 22,
    title: 'Home Loan Prepayment Decision',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'Building2',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Receive annual windfall. Prepay home loan principal or invest in high-yield mutual funds?',
    financialConcept: 'Cost of Debt vs. Expected Return on Equity (Spread Analysis)',
    monetaryImpact: { inr: 'Allocate ₹3,00,000 lump sum', usd: 'Allocate $20,000 lump sum' },
    academicRationale: 'Teaches spread analysis: if mortgage borrowing rate is 8.5% and equity expectation is 12%, mathematically equity wins, yet debt freedom carries psychological value.'
  },
  {
    id: 23,
    title: 'Draw an Event Card',
    category: 'emergency',
    color: '#ef4444', // red
    icon: 'Shuffle',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Draw from Event deck. Unplanned home renovation, job transition, or unexpected windfall.',
    financialConcept: 'Contingency Planning for Mature Households',
    monetaryImpact: { inr: 'Varies per drawn card', usd: 'Varies per drawn card' },
    academicRationale: 'Tests the resilience of mature portfolios encumbered by ongoing monthly loan obligations.'
  },
  {
    id: 24,
    title: 'Sovereign Gold & Debt Allocation',
    category: 'investment',
    color: '#2563eb', // blue
    icon: 'ShieldCheck',
    phase: 'Phase 3: Wealth Building & EMIs (Age 36-48)',
    shortDesc: 'Diversify into Sovereign Gold Bonds (2.5% p.a. interest + gold price link) and Corporate Bonds.',
    financialConcept: 'Asset Allocation, Negative Correlation & Inflation Hedging',
    monetaryImpact: { inr: '-₹50,000 into Gold/Debt', usd: '-$3,000 into Gold/Debt' },
    academicRationale: 'Shows how non-correlated assets (gold, debt instruments) protect wealth when equity markets stagnate.'
  },
  {
    id: 25,
    title: 'Side Hustle / Consultancy Income',
    category: 'income',
    color: '#10b981', // emerald
    icon: 'Laptop',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Professional expertise allows monetizing advisory roles or digital products.',
    financialConcept: 'Income Diversification & Passive/Semi-Active Cashflow',
    monetaryImpact: { inr: '+₹30,000 monthly cashflow', usd: '+$1,800 monthly cashflow' },
    academicRationale: 'Emphasizes that human capital can be extended into specialized consulting, reducing reliance on single-employer salary risk.'
  },
  {
    id: 26,
    title: 'Critical Illness / Disability Shock',
    category: 'emergency',
    color: '#ef4444', // red
    icon: 'Activity',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Severe health event impairs active earning capacity for 6 months. Critical illness cover test.',
    financialConcept: 'Riders & Income Replacement Insurance',
    monetaryImpact: { inr: '-₹3,00,000 if uninsured (Covered if purchased)', usd: '-$18,000 if uninsured (Covered if purchased)' },
    academicRationale: 'Distinguishes hospital indemnity (mediclaim) from critical illness lump-sum payout needed to replace lost wages during convalescence.'
  },
  {
    id: 27,
    title: 'Pre-Retirement Asset Rebalancing (Glide Path)',
    category: 'decision',
    color: '#0284c7', // sky
    icon: 'SlidersHorizontal',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Move 40% of equity into Senior Citizen Savings Scheme (SCSS), RBI Bonds, and debt funds.',
    financialConcept: 'Sequence of Returns Risk & Portfolio Glide Paths',
    monetaryImpact: { inr: 'Shift ₹15,00,000 into low-volatility debt', usd: 'Shift $100,000 into low-volatility debt' },
    academicRationale: 'Crucial academic concept: A major market crash right before retirement can decimate an equity-heavy retirement corpus; shifting to debt locks in capital.'
  },
  {
    id: 28,
    title: 'Estate Planning & Will Drafting',
    category: 'tax',
    color: '#8b5cf6', // purple
    icon: 'FileText',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Register legal will, update nominations across all bank accounts and mutual fund folios.',
    financialConcept: 'Transmission of Wealth, Nomination vs. Succession Laws',
    monetaryImpact: { inr: '-₹10,000 legal fee; protects 100% estate', usd: '-$600 legal fee; protects 100% estate' },
    academicRationale: 'Clarifies common legal misconception: a nominee is merely a custodial trustee, whereas a registered will legally dictates ownership distribution.'
  },
  {
    id: 29,
    title: 'Home Loan Debt-Free Clearance!',
    category: 'milestone',
    color: '#eab308', // yellow
    icon: 'PartyPopper',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Final EMI cleared! Retrieve original property title deeds. Monthly cash flow freed by 100%.',
    financialConcept: 'Liability Extinguishment & Cash Flow Recovery',
    monetaryImpact: { inr: 'Zero liabilities remaining!', usd: 'Zero liabilities remaining!' },
    academicRationale: 'Marks the transition from debtor to pure equity asset-holder, unlocking substantial monthly disposable income for retirement reserves.'
  },
  {
    id: 30,
    title: 'Draw an Event Card',
    category: 'emergency',
    color: '#ef4444', // red
    icon: 'Shuffle',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Late-stage life occurrence: inflation shock, medical breakthrough, or family wedding expense.',
    financialConcept: 'Post-Retirement Longevity Risk & Inflation Exposure',
    monetaryImpact: { inr: 'Varies per drawn card', usd: 'Varies per drawn card' },
    academicRationale: 'Simulates the reality that unexpected expenditures continue to occur even as active income ceases.'
  },
  {
    id: 31,
    title: 'SWP Strategy Formulation',
    category: 'investment',
    color: '#2563eb', // blue
    icon: 'PiggyBank',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'Structure Systematic Withdrawal Plan (SWP) for tax-efficient monthly pension generation.',
    financialConcept: '4% Safe Withdrawal Rule & Tax-Advantaged Cash Flow',
    monetaryImpact: { inr: '+₹75,000/mo sustainable withdrawal', usd: '+$4,500/mo sustainable withdrawal' },
    academicRationale: 'Contrasts highly-taxed annuity pensions with equity/hybrid SWPs, where only the capital gain portion is taxed, preserving purchasing power.'
  },
  {
    id: 32,
    title: 'Retirement & Financial Freedom (Victory Space)',
    category: 'milestone',
    color: '#eab308', // yellow
    icon: 'Trophy',
    phase: 'Phase 4: Pre-Retirement & Golden Years (Age 49-60+)',
    shortDesc: 'You reach the finish line! Calculate Total Net Worth, Solvency Score, and Retirement Longevity.',
    financialConcept: 'Financial Independence, Retire Early (FIRE) & Corpus Multiplier',
    monetaryImpact: { inr: 'Final Net Worth Audit: Target > ₹1.5 Cr', usd: 'Final Net Worth Audit: Target > $1M' },
    academicRationale: 'The ultimate synthesis of life-cycle finance theory (Franco Modigliani’s Life-Cycle Hypothesis): did the student successfully smooth lifetime consumption?'
  }
];

export const EVENT_CARDS: GameCard[] = [
  {
    id: 'EVT-01',
    type: 'event',
    title: 'Sudden Medical Emergency & Hospitalization',
    categoryLabel: 'Unplanned Life Shock',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    scenario: 'Acute appendicitis and surgery requiring 4 days in an inpatient hospital. You must settle the hospital bill immediately.',
    financialImpact: {
      inr: '-₹75,000 without Health Insurance (-₹5,000 copay if insured)',
      usd: '-$4,500 without Health Insurance (-$300 copay if insured)',
      details: 'If you purchased Health Insurance on Space 10 or have an active policy, pay only the deductible. If uninsured, deduct the full sum from your Cash or liquidate investments at 10% penalty.'
    },
    academicPrinciple: 'Risk Transfer vs. Out-of-Pocket Expenditure (Moral Hazard & Adverse Selection in Health Finance)',
    curriculumReference: 'Unit 3: Personal Risk Management and Insurance Underwriting'
  },
  {
    id: 'EVT-02',
    type: 'event',
    title: 'Corporate Performance Bonus & ESOP Liquidity',
    categoryLabel: 'Income Windfall',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    scenario: 'Your employer experiences record annual profitability and distributes a performance bonus plus initial vesting of stock units.',
    financialImpact: {
      inr: '+₹1,00,000 Gross Cash Bonus',
      usd: '+$6,000 Gross Cash Bonus',
      details: 'Pay 30% advance income tax (₹30,000 / $1,800) to the Tax Pool unless you have unexhausted 80C exemptions. Credit net sum to Cash Ledger.'
    },
    academicPrinciple: 'Marginal Tax Brackets & Windfall Allocation Heuristics',
    curriculumReference: 'Unit 1: Income Tax Slabs and Net Disposable Income Computation'
  },
  {
    id: 'EVT-03',
    type: 'event',
    title: 'Severe Stock Market Correction (Black Swan Event)',
    categoryLabel: 'Systemic Macro Shock',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
    scenario: 'Global geopolitical tensions trigger foreign institutional investor (FII) sell-offs. Equity markets plunge 25% across the board.',
    financialImpact: {
      inr: '-25% on Equity Investment Portfolio',
      usd: '-25% on Equity Investment Portfolio',
      details: 'Mark down your Equity portfolio balance by 25%. If you hold Gold or Fixed Deposits, they appreciate by +5% as a flight-to-safety buffer!'
    },
    academicPrinciple: 'Systematic Macroeconomic Risk & Mark-to-Market Valuation',
    curriculumReference: 'Unit 4: Capital Market Theory, CAPM & Beta Exposure'
  },
  {
    id: 'EVT-04',
    type: 'event',
    title: 'Major Home Appliance Breakdown & Renovation',
    categoryLabel: 'Depreciation & Maintenance',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    scenario: 'Plumbing failure combined with inverter burnout damages home flooring. Immediate repairs required to prevent structural decay.',
    financialImpact: {
      inr: '-₹35,000 Cash Outflow',
      usd: '-$2,200 Cash Outflow',
      details: 'Deduct ₹35,000 directly from your Emergency Reserve. If Emergency Reserve balance is zero, take an instant Personal Loan at 15% annual interest.'
    },
    academicPrinciple: 'Sinking Fund Allocation vs. Predatory Consumer Borrowing',
    curriculumReference: 'Unit 2: Cash Flow Budgeting and Emergency Liquidity Ratios'
  },
  {
    id: 'EVT-05',
    type: 'event',
    title: 'Unexpected Statutory Tax Notice & Penalty',
    categoryLabel: 'Compliance Audit',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    scenario: 'The Tax Department identifies an unverified mismatch in your Annual Information Statement (AIS) regarding interest earned on savings accounts.',
    financialImpact: {
      inr: '-₹20,000 Tax Arrears + ₹5,000 Penalty',
      usd: '-$1,200 Tax Arrears + $300 Penalty',
      details: 'Immediate payment required within 30 days. Deduct ₹25,000 from Cash. Learnings: Always report Section 80TTA interest accurately.'
    },
    academicPrinciple: 'Tax Compliance, Scrutiny Provisions & Statutory Reconciliation',
    curriculumReference: 'Unit 5: Direct Tax Code, Form 26AS/AIS Reconciliation'
  }
];

export const DECISION_CARDS: GameCard[] = [
  {
    id: 'DEC-01',
    type: 'decision',
    title: 'Asset Allocation Dilemma: High-Risk Equity vs. Safe Fixed Deposit',
    categoryLabel: 'Investment Strategy',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    scenario: 'You have accumulated ₹1,00,000 ($6,000) surplus cash. Where do you deploy it for the next 5-year cycle?',
    financialImpact: {
      inr: 'Strategic Choice',
      usd: 'Strategic Choice',
      details: 'Player must analyze personal risk appetite and current life cycle stage before selecting Option A or Option B.'
    },
    options: [
      {
        label: 'Option A: 100% Equity Index Fund',
        action: 'Allocate ₹1,00,000 to Stocks/Equities',
        impactInr: 'Roll 1d6: On 1-2, gain 0% (stagnant). On 3-5, gain +14% p.a. On 6, gain +25% bull run!',
        impactUsd: 'Roll 1d6: On 1-2, 0%. On 3-5, +14%. On 6, +25% boom.',
        pedagogicalLesson: 'Higher expected real returns over long horizons, but exposes short-term capital to market volatility.'
      },
      {
        label: 'Option B: 100% Bank Fixed Deposit (FD)',
        action: 'Allocate ₹1,00,000 to Fixed Income / Debt',
        impactInr: 'Guaranteed +7.0% p.a. return; taxable at slab rate. Post-tax real return ~4.5%.',
        impactUsd: 'Guaranteed +4.5% p.a. post-tax interest.',
        pedagogicalLesson: 'Zero nominal capital loss risk, but vulnerable to inflation risk (purchasing power erosion).'
      }
    ],
    academicPrinciple: 'Modern Portfolio Theory (Markowitz Efficient Frontier & Equity Risk Premium)',
    curriculumReference: 'Unit 4: Portfolio Management & Risk-Return Tradeoff'
  },
  {
    id: 'DEC-02',
    type: 'decision',
    title: 'The Great Housing Conundrum: Buy Home on Loan vs. Rent & Invest Difference',
    categoryLabel: 'Real Estate & Leverage',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    scenario: 'You are living in a prime metro city. Your lease is up. Do you commit to a 20-year mortgage or stay as a disciplined tenant-investor?',
    financialImpact: {
      inr: 'Strategic Choice',
      usd: 'Strategic Choice',
      details: 'Evaluates capitalization rates (rental yield of 2.5-3%) against mortgage borrowing rates (8.5%).'
    },
    options: [
      {
        label: 'Option A: Buy Home via Bank Home Loan',
        action: 'Pay ₹6,00,000 down payment + ₹45,000/mo EMI',
        impactInr: 'Add ₹30 Lakh Asset to Ledger; Add ₹24 Lakh Loan Liability. Claim Sec 24(b) interest deduction.',
        impactUsd: 'Add $200k Asset; Add $160k Liability. Deduct monthly mortgage payments.',
        pedagogicalLesson: 'Forced asset savings and emotional stability, but high illiquidity and severe interest front-loading.'
      },
      {
        label: 'Option B: Rent Home (₹18,000/mo) & Invest Balance in Equity SIP',
        action: 'Pay ₹18,000/mo rent; invest ₹27,000/mo in Index Funds',
        impactInr: 'Keep ₹6 Lakh liquid capital invested. No debt liability on ledger.',
        impactUsd: 'Maintain liquid capital invested in market. Zero loan liability.',
        pedagogicalLesson: 'Capital efficiency and geographical mobility; requires strict behavioral discipline not to spend the surplus.'
      }
    ],
    academicPrinciple: 'Price-to-Rent Ratio & Cost of Capital (Opportunity Cost of Down Payment)',
    curriculumReference: 'Unit 2: Personal Debt Structuring & Real Estate Economics'
  },
  {
    id: 'DEC-03',
    type: 'decision',
    title: 'Insurance Policy Selection: Pure Term Insurance vs. Endowment/Money-Back Policy',
    categoryLabel: 'Insurance Economics',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    scenario: 'An insurance agent relative pitches a "Guaranteed Returns with Life Cover" Endowment plan. What do you do?',
    financialImpact: {
      inr: 'Strategic Choice',
      usd: 'Strategic Choice',
      details: 'Exposes the difference between pure mortality risk hedging and low-yield bundled financial products.'
    },
    options: [
      {
        label: 'Option A: Pure Term Insurance + Direct Index Fund (BTID)',
        action: 'Buy ₹1 Crore cover for ₹12,000/yr; invest remaining ₹48,000 in Mutual Funds',
        impactInr: 'Gain ₹1 Crore life safety net; mutual fund generates ~12% expected CAGR.',
        impactUsd: 'Gain $500k cover for $600/yr; invest $2,400 in Index Funds.',
        pedagogicalLesson: 'BTID (Buy Term, Invest the Difference) maximizes protection while avoiding high agent commissions.'
      },
      {
        label: 'Option B: Traditional Endowment / Money-Back Plan',
        action: 'Pay ₹60,000/yr premium for ₹10 Lakh sum assured',
        impactInr: 'Guaranteed payout at maturity, but internal rate of return (IRR) is only 4.8% (below inflation).',
        impactUsd: 'Guaranteed nominal sum, but sub-inflation yields result in real capital loss.',
        pedagogicalLesson: 'Demonstrates the hidden trap of combining insurance with investments: poor insurance cover and suboptimal returns.'
      }
    ],
    academicPrinciple: 'Separation of Mortality Cover from Capital Accumulation (IRR Computation)',
    curriculumReference: 'Unit 3: Principles of Insurance & Underwriting'
  },
  {
    id: 'DEC-04',
    type: 'decision',
    title: 'Debt Repayment Strategy: Avalanche Method vs. Snowball Method',
    categoryLabel: 'Debt Management',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    scenario: 'You hold two outstanding loans: a Credit Card balance of ₹50,000 at 36% APR, and an Education Loan of ₹2,00,000 at 8.5% APR. You have ₹50,000 windfall cash.',
    financialImpact: {
      inr: 'Strategic Choice',
      usd: 'Strategic Choice',
      details: 'Compares mathematical interest minimization (Avalanche) with psychological behavioral momentum (Snowball).'
    },
    options: [
      {
        label: 'Option A: Debt Avalanche (Pay Highest Interest First)',
        action: 'Wipe out entire Credit Card balance of ₹50,000 immediately',
        impactInr: 'Saves ₹18,000/year in compounding toxic finance charges. Eliminates default risk.',
        impactUsd: 'Saves $1,200/year in compounding 36% interest charges.',
        pedagogicalLesson: 'Mathematically optimal route that minimizes absolute interest paid over time.'
      },
      {
        label: 'Option B: Partial Prepayment of Education Loan',
        action: 'Reduce education loan principal from ₹2,00,000 to ₹1,50,000',
        impactInr: 'Credit card continues to compound at 36% APR (₹1,500/month in interest alone!).',
        impactUsd: 'Credit card interest continues to erode net worth rapidly.',
        pedagogicalLesson: 'Shows the severe mistake of paying low-interest deductible debt while ignoring toxic high-interest revolving credit.'
      }
    ],
    academicPrinciple: 'Compounded APR Amortization & Debt Snowball vs. Avalanche Heuristics',
    curriculumReference: 'Unit 2: Debt Traps, Credit Scoring and Amortization Schedules'
  },
  {
    id: 'DEC-05',
    type: 'decision',
    title: 'Career Advancement: Executive MBA / Certifications vs. Passive Retention',
    categoryLabel: 'Human Capital Valuation',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    scenario: 'Opportunity to enroll in an accredited executive credential program (CFA/Executive MBA) costing ₹2,00,000 ($12,000) with 10 months study commitment.',
    financialImpact: {
      inr: 'Strategic Choice',
      usd: 'Strategic Choice',
      details: 'Tests student evaluation of Human Capital as an earning asset with NPV (Net Present Value).'
    },
    options: [
      {
        label: 'Option A: Invest ₹2,00,000 in Education Credential',
        action: 'Pay course fee; sacrifice 1 leisure turn',
        impactInr: 'Starting next cycle, permanently boost monthly Salary Income by +₹25,000/month (+50% raise).',
        impactUsd: 'Boost monthly Salary Income by +$1,500/month permanently.',
        pedagogicalLesson: 'High internal rate of return (IRR) on human capital early in career surpasses stock market returns.'
      },
      {
        label: 'Option B: Retain Cash in Bank & Continue Current Role',
        action: 'Keep ₹2,00,000 in Bank FD',
        impactInr: 'Salary increments remain pegged at standard 6% inflation rate.',
        impactUsd: 'Salary increments remain pegged at baseline rate.',
        pedagogicalLesson: 'Safer short term liquidity, but caps lifetime earning trajectory and human capital compounding.'
      }
    ],
    academicPrinciple: 'Human Capital Net Present Value (Gary Becker’s Human Capital Theory)',
    curriculumReference: 'Unit 1: Income Generation, Human Capital and Earning Curves'
  }
];

export const GOAL_TAX_CARDS: GameCard[] = [
  {
    id: 'TAX-01',
    type: 'tax_goal',
    title: 'Section 80C Maximum Tax Deduction: ELSS vs. PPF',
    categoryLabel: 'Statutory Tax Exemption',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    scenario: 'Maximize your statutory ₹1,50,000 ($5,000) deduction under Section 80C of the Income Tax Act before March 31.',
    financialImpact: {
      inr: 'Save up to ₹46,800 in Income Tax (at 30% slab + 4% cess)',
      usd: 'Save up to $1,500 in Income Tax',
      details: 'Invest ₹1,50,000 into Equity Linked Savings Scheme (ELSS) with 3-year lock-in (shortest among all 80C instruments) or Public Provident Fund (PPF) with 15-year sovereign guarantee.'
    },
    academicPrinciple: 'Tax Alpha, Lock-in Trade-offs (3 yrs vs 15 yrs) & Section 80C Optimization',
    curriculumReference: 'Unit 5: Tax Planning, Deductions and Tax-Free Instruments (EEE vs EET)'
  },
  {
    id: 'TAX-02',
    type: 'tax_goal',
    title: 'Section 80CCD(1B): National Pension System (NPS) Additional ₹50,000 Benefit',
    categoryLabel: 'Retirement Tax Shield',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    scenario: 'Exhausted Section 80C? Utilize the exclusive additional deduction of ₹50,000 under Section 80CCD(1B) through Tier-1 NPS.',
    financialImpact: {
      inr: 'Save ₹15,600 extra tax + Build targeted Pension Corpus',
      usd: 'Save $500 extra tax + Build targeted Pension Corpus',
      details: 'Deduct ₹50,000 from current cash flow and place into your locked Retirement Corpus. Receive immediate ₹15,600 tax rebate in Cash.'
    },
    academicPrinciple: 'Annuity Mandates, EEE Tax Classification & Long-term Retirement Locks',
    curriculumReference: 'Unit 5: Pension Architecture, PFRDA Regulations & Retirement Tax Shields'
  },
  {
    id: 'TAX-03',
    type: 'tax_goal',
    title: 'Section 80D: Health Insurance Premium Deductions for Self & Senior Parents',
    categoryLabel: 'Healthcare Tax Shield',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
    scenario: 'Pay health insurance premiums for your family (up to ₹25,000) and senior citizen parents aged 60+ (up to ₹50,000).',
    financialImpact: {
      inr: 'Total Eligible Deduction up to ₹75,000 (Tax saving: ~₹23,400)',
      usd: 'Total Eligible Deduction up to $2,500 (Tax saving: ~$750)',
      details: 'Dual benefit: hedges household against sudden ₹5 Lakh hospital bills while reclaiming 30% of premium outlays as tax savings.'
    },
    academicPrinciple: 'Health Insurance Tax Inclusivity & Preventive Health Checkup Allowance (₹5,000)',
    curriculumReference: 'Unit 3 & 5: Health Economics & Medical Expense Deductions'
  },
  {
    id: 'TAX-04',
    type: 'tax_goal',
    title: 'Section 24(b): Tax Deduction on Home Loan Interest',
    categoryLabel: 'Housing Finance Tax Shield',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    scenario: 'You are servicing an active home loan on a self-occupied residential property. Claim deduction for annual interest paid.',
    financialImpact: {
      inr: 'Deduct up to ₹2,00,000 interest from Gross Total Income (Saves ₹62,400 tax)',
      usd: 'Deduct up to $6,500 interest from Gross Total Income (Saves $2,000 tax)',
      details: 'Combined with 80C principal repayment benefit (₹1.5 Lakh), home loans provide substantial tax shields that reduce the net effective interest rate from 8.5% down to ~5.95%.'
    },
    academicPrinciple: 'Effective After-Tax Cost of Debt: Kd(1 - t) in Personal Finance',
    curriculumReference: 'Unit 2 & 5: Housing Loan Tax Deductions & Cost of Debt Analysis'
  },
  {
    id: 'TAX-05',
    type: 'tax_goal',
    title: 'Capital Gains Harvesting: Section 112A ₹1.25 Lakh Tax-Free LTCG Exemption',
    categoryLabel: 'Tax-Loss / Gain Harvesting',
    badgeColor: 'bg-purple-600/20 text-purple-300 border-purple-500/40',
    scenario: 'End of financial year approaches. Your equity mutual fund portfolio has generated unrealized long-term capital gains.',
    financialImpact: {
      inr: 'Realize up to ₹1,25,000 Long Term Capital Gains at 0% Tax',
      usd: 'Realize up to $4,000 Capital Gains at 0% Tax',
      details: 'Sell and immediately reinvest equity units to reset cost basis (tax gain harvesting). Gains beyond ₹1.25 Lakh taxed at 12.5%. Saves ₹15,625 in future tax liabilities!'
    },
    academicPrinciple: 'Capital Gains Tax Arbitrage & Step-up Cost Basis Harvesting',
    curriculumReference: 'Unit 4: Taxation of Capital Assets, Indexation and Section 112A'
  }
];

export const PLAY_MONEY_DENOMINATIONS: PlayMoneyItem[] = [
  {
    denominationInr: 500,
    denominationUsd: 20,
    colorName: 'Stone Grey / Pale Silver',
    hexBg: '#64748b',
    historicalPortrait: 'Adam Smith (Wealth of Nations)',
    recommendedCount: 50,
    intendedUsage: 'Everyday living expenses, grocery bills, transit fare, copayments'
  },
  {
    denominationInr: 2000,
    denominationUsd: 100,
    colorName: 'Magenta / Royal Plum',
    hexBg: '#a855f7',
    historicalPortrait: 'John Maynard Keynes (Macroeconomics)',
    recommendedCount: 40,
    intendedUsage: 'Monthly discretionary entertainment, utility bills, small repair charges'
  },
  {
    denominationInr: 10000,
    denominationUsd: 500,
    colorName: 'Sky Cyan / Deep Aqua',
    hexBg: '#0284c7',
    historicalPortrait: 'Franco Modigliani (Life-Cycle Hypothesis)',
    recommendedCount: 40,
    intendedUsage: 'Monthly SIP investments, health insurance premiums, auto loan EMIs'
  },
  {
    denominationInr: 50000,
    denominationUsd: 2500,
    colorName: 'Emerald Green',
    hexBg: '#059669',
    historicalPortrait: 'Benjamin Graham (Father of Value Investing)',
    recommendedCount: 30,
    intendedUsage: 'Monthly salary packages, emergency medical hospital deposits, bonus payouts'
  },
  {
    denominationInr: 100000,
    denominationUsd: 5000,
    colorName: 'Amber Gold',
    hexBg: '#d97706',
    historicalPortrait: 'Amartya Sen (Welfare & Development Economics)',
    recommendedCount: 25,
    intendedUsage: '80C tax deductions, wedding outlays, home appliance replacements'
  },
  {
    denominationInr: 500000,
    denominationUsd: 25000,
    colorName: 'Rich Obsidian / Platinum Foil',
    hexBg: '#334155',
    historicalPortrait: 'Harry Markowitz (Modern Portfolio Theory)',
    recommendedCount: 20,
    intendedUsage: 'Real estate down payments, retirement corpus milestones, home loan principal payoffs'
  }
];

export const PHYSICAL_COMPONENTS = [
  {
    item: 'Game Board Track',
    specs: '20" x 30" Quad-fold 2.5mm Greyboard with matte laminated linen finish; 32 sequential path spaces in looping infinity track',
    qty: '1 Unit'
  },
  {
    item: 'Player Financial Ledger Sheets',
    specs: 'A4 / US-Letter 100 GSM uncoated wood-free paper pads; pre-printed with 5-column financial statement and turn-by-turn net worth audit table',
    qty: '40 Sheets (Padded)'
  },
  {
    item: 'Card Decks (Poker Sized)',
    specs: '2.5" x 3.5" (63.5 x 88.9 mm) 350 GSM black core art cardstock with rounded corners (3mm radius) & scratch-proof matte coating',
    qty: '30 Cards Total (10 Events, 10 Decisions, 10 Tax/Goal Cards)'
  },
  {
    item: 'Player Tokens (Avatars)',
    specs: '30mm painted wooden meeples with distinct life avatar silhouettes (Corporate Professional, Entrepreneur, Academician, Creative Freelancer)',
    qty: '4 Tokens (Red, Blue, Green, Yellow)'
  },
  {
    item: 'Dice System',
    specs: '1x 16mm Standard 6-sided D6 Movement Die (White with black pips) + 1x 16mm Market Volatility Die (Custom faces: +15%, Bull Run, Normal, Correction, -20%, Crash)',
    qty: '2 Dice Total'
  },
  {
    item: 'Asset & Liability Badges',
    specs: '25mm punchboard circular tokens representing "Home Title Deed", "Health Cover Active", "Term Life Active", "CIBIL 800+ Badge", and "Debt Warning Marker"',
    qty: '24 Punchboard Badges'
  },
  {
    item: 'Play Currency Bank Vault',
    specs: 'Pre-cut 2.5" x 5" miniature banknotes in 6 color-coded denominations with security micro-text and economic theorist portraits',
    qty: '205 Banknotes Total'
  },
  {
    item: 'Rules Booklet & Grading Rubric',
    specs: '16-page full color A5 booklet (170 GSM gloss cover, 120 GSM inner) including academic curriculum mapping and viva exam questions',
    qty: '1 Booklet'
  }
];

export const ACADEMIC_RUBRIC_15_MARKS = [
  {
    criteria: '1. Financial Conceptual Rigor & Real-World Accuracy',
    maxMarks: 4,
    description: 'Accurate representation of compounding, tax laws (80C, 80D, 24b, NPS), insurance mechanics (Term vs Endowment), inflation, and debt amortization formulas.',
    indicators: [
      'Incorporates statutory tax sections with realistic exemption caps (e.g. ₹1.5L for 80C)',
      'Distinguishes between liquid emergency reserves and illiquid capital assets',
      'Accurate APR vs. real inflation-adjusted return calculations on decision cards'
    ]
  },
  {
    criteria: '2. Game Mechanics, Probability & Pedagogical Balance',
    maxMarks: 4,
    description: 'Game engine design: meaningful trade-offs (risk vs return), avoidance of pure luck dominance, clear victory condition tied to Net Worth & Solvency.',
    indicators: [
      'Dual dice mechanics combining movement with macro market volatility',
      'Behavioral nudges punishing neglect of insurance during crisis events',
      'Replayability and balanced pacing across 4 distinct life-cycle stages'
    ]
  },
  {
    criteria: '3. Asset Kit & UI/UX Component Ergonomics',
    maxMarks: 4,
    description: 'Visual layout quality, color-coding psychology, typography readability, print-ready specs, and practical ledger sheet functionality.',
    indicators: [
      'High-contrast color coding (Green=Income, Blue=Decisions, Red=Shocks, Yellow=Milestones)',
      'Standard cardstock specifications (350 GSM, 2.5" x 3.5") with cut guides and bleed margins',
      'Dual currency adaptability (₹ INR / $ USD) for universal academic presentation'
    ]
  },
  {
    criteria: '4. Pedagogical Value, Viva Defense & Curriculum Mapping',
    maxMarks: 3,
    description: 'Student learning outcomes, clear alignment with undergraduate/postgraduate Personal Finance syllabus, and clarity in oral defense.',
    indicators: [
      'Demonstrates mastery during viva defense on why ULIPs/Endowments underperform BTID',
      'Clear debriefing questions for classroom reflection after game completion',
      'Comprehensive rules booklet with formal academic citations'
    ]
  }
];

export const VIVA_QUESTIONS = [
  {
    q: 'Q1: Why does the game penalize players who purchase Endowment plans instead of pure Term Insurance?',
    a: 'Answer: Endowment policies typically generate sub-inflation internal rates of return (IRR 4-5%) while providing inadequate life cover (often only 10x annual premium). By buying pure term insurance (which is 80% cheaper) and investing the difference in equity mutual funds, a player achieves 15-20x higher coverage and significantly greater terminal wealth due to 12% equity CAGR.'
  },
  {
    q: 'Q2: How does the game demonstrate the concept of "Tax Alpha" through Section 80C and ELSS?',
    a: 'Answer: An investment in ELSS under Section 80C provides an immediate 31.2% tax deduction on invested capital (for those in the highest tax bracket) plus a 3-year lock-in period (shortest among 80C options). This creates an immediate risk-free upfront return ("tax alpha") before compounding even starts.'
  },
  {
    q: 'Q3: What mathematical principle governs the Debt Avalanche method on Decision Card 04?',
    a: 'Answer: The Debt Avalanche targets the debt with the highest annual percentage rate (APR) first—in this case, 36% credit card debt. Eliminating 36% debt produces a guaranteed, risk-free 36% after-tax return, far superior to prepaying an 8.5% education loan with tax-deductible interest under Section 80E.'
  },
  {
    q: 'Q4: Why is the Pre-Retirement Asset Rebalancing space (Space 27) critical in Life-Cycle Finance?',
    a: 'Answer: It addresses "Sequence of Returns Risk." A severe market downturn right before retirement (when portfolio size is at its maximum) can permanently destroy capital if a retiree is forced to withdraw living expenses from depressed assets. Moving 40% into debt locks in capital safety.'
  }
];

export const IMAGE_PROMPTS = [
  {
    id: 'prompt-1',
    title: 'A) Central Colorful 2D Board Game Track',
    target: 'Main Game Board Blueprint (Top-Down Track)',
    toolsOptimized: 'Imagen 3 / Midjourney v6 / DALL-E 3',
    aspectRatio: '16:9 or 4:3 Landscape',
    promptText: `Top-down 2D flat vector board game track design titled 'WealthPath: The Financial Odyssey', winding looping pathway traversing chronological life stages from 'First Salary (Start)' to 'Retirement (Finish)', numbered circular spaces with clear crisp iconography: briefcase, wedding rings, house loan keys, stock bull market, red medical cross emergency, tax shield, piggy bank. Color-coded track system: emerald green for income spaces, sapphire blue for investment decisions, crimson red for emergency shocks, and warm gold for major life milestones. Clean high-contrast modern graphic design, white space borders, board game prototype layout, educational finance theme, CMYK print ready aesthetic, high-resolution vector illustration, 8k, sharp lines, zero clutter --ar 16:9 --style raw`,
    keyFeatures: ['Chronological loop from Start to Retirement', 'High-contrast color psychology', 'Crisp life milestone iconography', 'Educational board game blueprint format']
  },
  {
    id: 'prompt-2',
    title: 'B) Game Box Cover & Rules Booklet Layout',
    target: 'Commercial Box Packaging & Rulebook Mockup',
    toolsOptimized: 'Imagen 3 / Midjourney v6',
    aspectRatio: '4:3 or 1:1 Perspective',
    promptText: `Commercial board game box packaging and rulebook mockup for 'WealthPath: The Financial Odyssey', 3D perspective display sitting on premium conference desk, elegant matte-finish board game box featuring sleek emerald green and gold typography, city skyline and life journey visual motif, open 16-page rulebook lying beside the box displaying clean typography, colored diagrams of card decks and player financial ledger sheet, paired with miniature golden dice, wooden meeple tokens and neat stacks of colorful play banknotes, studio product photography, soft diffused lighting, ultra-realistic commercial asset showcase, 8k resolution --ar 4:3`,
    keyFeatures: ['Realistic 3D packaging perspective', 'Open rules booklet with financial diagrams', 'Component staging: dice, meeples, banknotes', 'Premium commercial game showcase']
  },
  {
    id: 'prompt-3',
    title: 'C) Financial Decision & Event Cards Layout',
    target: 'Printed Game Cards Display & Template',
    toolsOptimized: 'Imagen 3 / Midjourney v6',
    aspectRatio: '4:3 or 1:1 Composition',
    promptText: `Collection of printed financial board game cards fanned out on dark wooden table with green felt, showing 'Decision Card: Buy vs Rent', 'Event Card: Medical Emergency', and 'Tax Goal Card: 80C ELSS Deduction', crisp cards with clear color-coded borders (sky blue, bright crimson red, royal purple), high-contrast sans-serif typography, icon badges at top, dual cost-impact comparison boxes, educational flavor text at footer, standard 2.5x3.5 inch playing card dimensions, authentic cardstock texture, clean graphic design layout for university business presentation, studio macro photography, sharp focus --ar 4:3`,
    keyFeatures: ['Standard 2.5" x 3.5" poker card proportions', 'Clear decision trade-off comparison columns', 'Statutory tax section badges', 'Authentic cardstock texture with cut bleed']
  }
];
