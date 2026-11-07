import {
  Split,
  Building2,
  Mic,
  Repeat,
  DoorOpen,
  IndianRupee,
  PieChart,
  ScanLine,
  Home,
  Zap,
  ShoppingBasket,
  Wrench,
  Tv,
  Wallet,
  CalendarDays,
  FileText,
  Briefcase,
  BedDouble,
  Heart,
  Sofa,
  Plane,
  type LucideIcon,
} from 'lucide-react'

/**
 * All marketing copy lives here so it can be edited without touching layout code.
 *
 * Positioning: complete household financial management for flatmates and working
 * professionals, with an AI voice assistant as the signature feature.
 *
 * `status: 'planned'` marks features that are not built/tested yet. They render with a
 * "Planned" badge so the site never claims them as available. Remove the flag once a
 * feature ships.
 */

export type FeatureStatus = 'planned'

export const positioning = {
  headline: 'Your household. Your money. One smart platform.',
  subhead:
    'Settsmartly helps flatmates and working professionals manage rent, bills, groceries and settlements together, with an AI assistant you can simply talk to.',
  promise: 'Know where every rupee goes. Know who paid. Know what is pending. Manage everything together.',
  launchNote: 'Launching first with flatmates in Bengaluru',
}

/** The four pillars shown under the hero. */
export const pillars = [
  { icon: Building2, title: 'Household management', description: 'Rent, utilities and groceries' },
  { icon: Mic, title: 'AI voice assistant', description: 'Speak or snap your expenses', planned: true },
  { icon: Repeat, title: 'Bill automation', description: 'Recurring bills and reminders', planned: true },
  { icon: IndianRupee, title: 'Smart settlements', description: 'Balances and UPI workflows', planned: true },
]

export interface Feature {
  id: string
  icon: LucideIcon
  title: string
  description: string
  status?: FeatureStatus
  details: string[]
}

export const features: Feature[] = [
  {
    id: 'voice',
    icon: Mic,
    title: 'AI Voice Assistant',
    status: 'planned',
    description:
      'Say "I paid 2,500 for groceries, split between all of us" and Settsmartly prepares the expense for you to confirm. Works in English, Hindi and Hinglish.',
    details: [
      'Add expenses by speaking naturally, no forms',
      'Understands English, Hindi and Hinglish',
      'Knows your household: members, nicknames and who has moved out',
      'Ask questions like "How much did we spend on groceries last month?"',
      'Correct an expense by voice, with a before-and-after preview',
      'Nothing is saved until you confirm',
    ],
  },
  {
    id: 'household',
    icon: Building2,
    title: 'Household Workspace',
    description:
      'Every flat gets its own financial workspace for rent, utilities, groceries, maintenance and subscriptions, with each member’s contributions in one place.',
    details: [
      'One workspace per household, with its own members and history',
      'Organise spending by rent, utilities, groceries, maintenance and more',
      'Member joining and leaving dates are kept on record',
      'Separate groups for trips and outings when you need them',
    ],
  },
  {
    id: 'splitting',
    icon: Split,
    title: 'Smart Expense Splitting',
    description:
      'Split equally, by percentage, by exact amount or by shares. Include only the members who should share a cost, and get a clear breakdown every time.',
    details: [
      'Equal, percentage, exact-amount and shares-based splits',
      'Choose exactly which flatmates share each expense',
      'Rounding handled so totals always add up to the paisa',
      'Edits and deletions are kept in an audit trail',
    ],
  },
  {
    id: 'recurring',
    icon: Repeat,
    title: 'Recurring Bills & Bill Calendar',
    status: 'planned',
    description:
      'Set rent, electricity, water, internet, maintenance and subscriptions once. Settsmartly reminds everyone before they’re due and shows what’s overdue.',
    details: [
      'Rent and bill schedules that repeat every month',
      'Upcoming and overdue bills on one calendar',
      'Reminders before each due date',
      'Track each member’s contribution to every bill',
    ],
  },
  {
    id: 'roommates',
    icon: DoorOpen,
    title: 'Roommate Move-In & Move-Out',
    status: 'planned',
    description:
      'When a flatmate leaves mid-month or someone new joins, Settsmartly works out their share, settles what’s pending and keeps history accurate.',
    details: [
      'Record move-in and move-out dates',
      'Calculate a leaving member’s share using your flat’s agreed policy',
      'Exclude former members from new expenses automatically',
      'Track refundable security deposits separately',
      'Invite a replacement and start them on the right date',
    ],
  },
  {
    id: 'settlements',
    icon: IndianRupee,
    title: 'Settlements & UPI',
    status: 'planned',
    description:
      'See who owes whom, settle with fewer payments and open your preferred UPI app with the amount filled in. Settsmartly never holds your money.',
    details: [
      'Member-wise balances and suggested settlements',
      'UPI payment links that open your preferred UPI app',
      'Payment references and manual confirmation',
      'Protection against recording the same settlement twice',
    ],
  },
  {
    id: 'insights',
    icon: PieChart,
    title: 'Household Dashboard & Insights',
    description:
      'A monthly household statement: total spending, each member’s contribution, category breakdowns, outstanding balances and upcoming bills.',
    details: [
      'Monthly household expenditure and comparisons',
      'Individual contributions per member',
      'Category-wise spending and trends',
      'Monthly household summary for everyone',
    ],
  },
  {
    id: 'receipts',
    icon: ScanLine,
    title: 'Receipt Scanning',
    status: 'planned',
    description:
      'Snap a bill and Settsmartly reads the amount, merchant, date and category, then shows you a draft to review before saving.',
    details: [
      'Photograph a receipt to pre-fill an expense',
      'Amount, merchant, date and category extracted',
      'Always shown for your review before saving',
      'Receipt image kept with the expense',
    ],
  },
]

/** Example voice requests shown in the voice section. */
export const voiceExamples = [
  { lang: 'English', said: 'I paid 2,500 rupees for groceries today. Split equally between all five of us.' },
  { lang: 'Hinglish', said: 'Aaj electricity ka 1800 rupees bill pay kiya, sabke beech equally divide kar do.' },
  { lang: 'Household rules', said: 'Add 800 for cleaning supplies, but exclude Aman, he moved out.' },
  { lang: 'Questions', said: 'How much did we spend on groceries last month?' },
]

/** Home-management modules. */
export const homeModules = [
  { icon: Home, title: 'Rent', description: 'Monthly rent, due dates and contributions' },
  { icon: Zap, title: 'Utilities', description: 'Electricity, water, gas and internet' },
  { icon: ShoppingBasket, title: 'Groceries', description: 'Shared shopping and household supplies' },
  { icon: Wrench, title: 'Maintenance', description: 'Cleaning, repairs and apartment upkeep' },
  { icon: Tv, title: 'Subscriptions', description: 'Shared OTT and other subscriptions' },
  { icon: Wallet, title: 'Budget', description: 'Monthly household spending limits' },
  { icon: CalendarDays, title: 'Bill calendar', description: 'Upcoming and overdue bills' },
  { icon: FileText, title: 'Monthly statement', description: 'The complete household summary' },
]

/** A typical month for a five-person flat (illustrative). */
export const sampleMonth = {
  people: 5,
  rows: [
    { label: 'Rent', amount: 15000 },
    { label: 'Groceries', amount: 5000 },
    { label: 'Electricity', amount: 2000 },
    { label: 'Water & maintenance', amount: 1500 },
    { label: 'Household supplies', amount: 1000 },
    { label: 'Internet', amount: 999 },
  ],
}

export const householdProblems = [
  'Different people pay different bills',
  'Some costs are shared by everyone, others by only a few',
  'Someone moves out in the middle of the month',
  'Someone pays late, and nobody wants to chase',
  'The same bills come back every month',
  'Transactions get forgotten in group chats',
  'Nobody has the complete picture',
]

export interface Segment {
  id: string
  icon: LucideIcon
  title: string
  description: string
  examples: string[]
}

/** Primary segment first; the rest are later expansion markets. */
export const segments: Segment[] = [
  {
    id: 'flatmates',
    icon: Building2,
    title: 'Flatmates & working professionals',
    description:
      'Two to five people sharing a rented flat: rent, groceries, electricity, internet and maintenance, coordinated without WhatsApp threads or spreadsheets.',
    examples: ['Rent', 'Electricity', 'Wi-Fi', 'Groceries', 'Maid', 'Maintenance'],
  },
  {
    id: 'pg',
    icon: BedDouble,
    title: 'PG residents & students',
    description: 'Shared rooms, mess bills, hostel costs and the things you buy together.',
    examples: ['Mess', 'Hostel', 'Supplies'],
  },
  {
    id: 'couples',
    icon: Heart,
    title: 'Couples',
    description: 'Household spending, shared purchases and recurring bills, managed together.',
    examples: ['Rent', 'Groceries', 'Subscriptions'],
  },
  {
    id: 'families',
    icon: Sofa,
    title: 'Families',
    description: 'Monthly ration, utilities and shared household costs, clearly accounted for.',
    examples: ['Ration', 'Utilities', 'Festivals'],
  },
  {
    id: 'friends',
    icon: Plane,
    title: 'Friends & trips',
    description: 'Dinners, outings and trips, in a separate group from your flat.',
    examples: ['Trips', 'Dinners', 'Cabs'],
  },
  {
    id: 'teams',
    icon: Briefcase,
    title: 'Small teams',
    description: 'Shared office snacks, team lunches and small group costs.',
    examples: ['Lunches', 'Snacks'],
  },
]

export interface Step {
  title: string
  description: string
}

export const steps: Step[] = [
  {
    title: 'Create your account',
    description: 'Sign up with your mobile number and verify it with an OTP.',
  },
  {
    title: 'Set up your household',
    description: 'Create your flat, invite your flatmates and record when each person moved in.',
  },
  {
    title: 'Add expenses your way',
    description: 'Speak it, snap the receipt or type it in. Choose who paid and who shares the cost.',
  },
  {
    title: 'Let Settsmartly calculate',
    description: 'Shares and balances are calculated by our expense engine and updated for everyone.',
  },
  {
    title: 'Put bills on autopilot',
    description: 'Add rent, utilities and subscriptions once. Everyone gets reminded before they’re due.',
  },
  {
    title: 'Settle up every month',
    description: 'See suggested settlements, pay through your UPI app and review the monthly household statement.',
  },
]

export const clarityPoints = [
  'What the household spent this month',
  'How much you owe, and to whom',
  'How much others owe you',
  'Who paid for each expense',
  'Which bills are due or overdue',
  'Each member’s contribution',
  'How spending changes month to month',
]

export interface Faq {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: 'What is Settsmartly?',
    a: 'Settsmartly is a household financial management platform for people who live together. It brings shared expenses, recurring bills, member contributions and settlements into one place, with an AI assistant you can talk to.',
  },
  {
    q: 'How is it different from a bill-splitting app?',
    a: 'Splitting is only one part of it. Settsmartly is built around the whole month of a shared home: rent and recurring bills, flatmates moving in and out, member-wise histories and monthly statements, not just dividing a single bill.',
  },
  {
    q: 'How does the voice assistant work?',
    a: 'You say something like "I paid 800 for cleaning supplies, exclude Aman". The assistant prepares a draft expense with the amount, payer, members and split. Our expense engine calculates the shares, and nothing is saved until you confirm. The voice assistant is planned and in development.',
  },
  {
    q: 'Will it understand Hindi or Hinglish?',
    a: 'Yes, that is the plan. The assistant is being designed for English, Hindi and mixed Hindi-English from the start.',
  },
  {
    q: 'What happens when a flatmate moves out?',
    a: 'Settsmartly is designed to record their move-out date, work out their share based on your flat’s agreed arrangement, settle what’s pending and stop including them in new expenses, while keeping past records intact. This feature is planned.',
  },
  {
    q: 'Does Settsmartly move or hold my money?',
    a: 'No. Settsmartly is not a bank or wallet and never deducts money. Payments happen in your own UPI or payment app, and the settlement is then recorded in Settsmartly.',
  },
  {
    q: 'What happens to my voice recordings?',
    a: 'Voice will only be used with your consent. Before the assistant launches we will publish exactly what is stored, for how long, and how to delete it.',
  },
  {
    q: 'Is Settsmartly free?',
    a: 'The core experience will be free: households, expense splitting, balances and access to your own records. Optional paid plans will add things like more AI usage and advanced household features.',
  },
  {
    q: 'When and where are you launching?',
    a: 'We are starting with flatmates in Bengaluru and opening a closed beta for a small number of households. Anyone in India can join the waitlist.',
  },
]

export interface Plan {
  id: string
  name: string
  /** Shown instead of a price until subscriptions are live. */
  priceLabel: string
  priceNote: string
  description: string
  highlight?: boolean
  features: string[]
}

/**
 * Plan structure is a proposal. Prices are intentionally not shown until
 * subscriptions are operational. Update `priceLabel` when they are.
 */
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    priceLabel: '₹0',
    priceNote: 'Free forever',
    description: 'Everything you need to run your flat’s shared expenses.',
    features: [
      'Households and groups',
      'Equal, percentage, exact and shares splits',
      'Member-wise balances and suggested settlements',
      'Full access to your own expense history',
      'UPI payment links (planned)',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    priceLabel: 'Coming soon',
    priceNote: 'Pricing announced at launch',
    description: 'Speak your expenses and put bills on autopilot.',
    features: [
      'Everything in Free',
      'Voice expense entry allowance',
      'Recurring bills and reminders',
      'Bill calendar',
      'Advanced reports',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    priceLabel: 'Coming soon',
    priceNote: 'Pricing announced at launch',
    description: 'More AI, deeper insight into your household’s money.',
    highlight: true,
    features: [
      'Everything in Plus',
      'Higher AI assistant usage',
      'AI household insights and Q&A',
      'Receipt scanning',
      'Report exports',
    ],
  },
  {
    id: 'household',
    name: 'Household',
    priceLabel: 'Coming soon',
    priceNote: 'Pricing announced at launch',
    description: 'One plan that covers the whole flat.',
    features: [
      'Premium features for every member',
      'Roommate move-in and move-out tools',
      'Household budget',
      'Monthly household statements',
      'Security deposit tracking',
    ],
  },
]
