import {
  Split,
  Building2,
  Mic,
  Repeat,
  DoorOpen,
  IndianRupee,
  PieChart,
  ScanLine,
  type LucideIcon,
} from 'lucide-react'

/**
 * Marketing copy that is shared between pages lives here, so it can be edited without touching layout code.
 *
 * Voice: plain, specific, a little dry. Write the way you'd explain the app to a flatmate. Prefer a real
 * number or a real situation over an adjective, and don't promise anything the app can't do yet.
 *
 * `status: 'planned'` marks features that are not built and tested yet. They render with a "Planned" badge
 * so the site never presents them as available. Remove the flag once a feature ships.
 */

export type FeatureStatus = 'planned'

export const positioning = {
  subhead:
    'Settsmartly keeps one shared record of rent, bills, groceries and who owes whom, so nobody in the flat has to be the one with the spreadsheet.',
  launchNote: 'Closed beta starting with flatmates in Bengaluru',
}

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
    title: 'Voice assistant',
    status: 'planned',
    description:
      'Say “I paid 2,500 for groceries, split it between all of us” and the assistant fills in the expense for you to check. It’s being built for English, Hindi and Hinglish.',
    details: [
      'Add an expense by saying it, instead of filling in a form',
      'Understands English, Hindi and the mix most of us actually speak',
      'Knows who lives in your flat, including nicknames and who has moved out',
      'Answers questions like “How much did we spend on groceries last month?”',
      'Lets you fix an expense by voice and shows the change before saving it',
      'Never saves anything until you confirm',
    ],
  },
  {
    id: 'household',
    icon: Building2,
    title: 'A shared space for your flat',
    description:
      'Each flat gets its own space with its members, its bills and its full history. Rent, utilities, groceries, maintenance and subscriptions all sit in one place.',
    details: [
      'One space per flat, with its own members and history',
      'Categories for rent, utilities, groceries, maintenance and more',
      'Move-in and move-out dates kept for every member',
      'Separate groups for trips and dinners, so they don’t mix with the flat',
    ],
  },
  {
    id: 'splitting',
    icon: Split,
    title: 'Expense splitting',
    description:
      'Split a bill equally, by percentage, by exact amounts or by shares, and include only the people it was actually for.',
    details: [
      'Equal, percentage, exact-amount and shares-based splits',
      'Pick exactly which flatmates share each expense',
      'Rounding handled so every split adds up to the paisa',
      'Every edit and deletion kept in the history',
    ],
  },
  {
    id: 'recurring',
    icon: Repeat,
    title: 'Recurring bills and reminders',
    status: 'planned',
    description:
      'Add rent, electricity, Wi-Fi, maintenance and subscriptions once. Everyone gets a reminder before a bill is due, and overdue ones stand out.',
    details: [
      'Rent and bills that repeat every month without re-entering them',
      'Upcoming and overdue bills on one calendar',
      'A reminder to everyone a couple of days before each due date',
      'A record of who has paid their part of each bill',
    ],
  },
  {
    id: 'roommates',
    icon: DoorOpen,
    title: 'Flatmates moving in and out',
    status: 'planned',
    description:
      'When someone leaves mid-month or a new person joins, Settsmartly works out their share using the rule your flat agreed on and keeps the old records as they were.',
    details: [
      'Move-in and move-out dates for every member',
      'Pro-rata or full-month rent, whichever your flat agreed',
      'Former members left out of new expenses automatically',
      'Security deposits tracked separately from monthly costs',
      'The replacement starts from their actual move-in date',
    ],
  },
  {
    id: 'settlements',
    icon: IndianRupee,
    title: 'Settling up with UPI',
    status: 'planned',
    description:
      'See who owes whom, settle the month in as few payments as possible, and open your own UPI app with the amount already filled in. Settsmartly never touches the money.',
    details: [
      'Balances for every member and a suggested way to settle',
      'UPI links that open the payment app you already use',
      'Payment references and a manual “mark as received”',
      'Checks that stop the same payment being recorded twice',
    ],
  },
  {
    id: 'insights',
    icon: PieChart,
    title: 'Monthly statement',
    description:
      'At the end of each month, everyone sees the same statement: what the flat spent, what each person put in, where the money went and what’s still outstanding.',
    details: [
      'Total household spending, month by month',
      'What each member paid and what they owe',
      'Spending by category, with trends over time',
      'One summary everyone in the flat can see',
    ],
  },
  {
    id: 'receipts',
    icon: ScanLine,
    title: 'Receipt scanning',
    status: 'planned',
    description:
      'Take a photo of a bill and Settsmartly reads the amount, shop, date and category, then shows you a draft to check before saving.',
    details: [
      'Photograph a receipt to fill in an expense',
      'Reads the amount, shop, date and category',
      'Always shown to you as a draft first',
      'The photo stays attached to the expense',
    ],
  },
]

/** Example voice requests shown on the home page. */
export const voiceExamples = [
  { lang: 'English', said: 'I paid 2,500 for groceries today. Split it equally between all five of us.' },
  { lang: 'Hinglish', said: 'Aaj electricity ka 1800 ka bill pay kiya, sabke beech equally divide kar do.' },
  { lang: 'With an exception', said: 'Add 800 for cleaning supplies, but leave Aman out. He’s away this week.' },
  { lang: 'A question', said: 'How much did we spend on groceries last month?' },
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
  'Four different people paid four different bills',
  'The cook is shared by three of you, not all five',
  'Someone moved out on the 15th',
  'One person always pays late, and nobody wants to bring it up',
  'Half the payments are buried in a WhatsApp group',
  'Nobody is quite sure what the total was',
]

export interface Segment {
  id: string
  title: string
  description: string
}

/** Who the app is for. The first entry is the launch focus; the rest come later. */
export const segments: Segment[] = [
  {
    id: 'flatmates',
    title: 'Flatmates',
    description:
      'Two to five people sharing a rented flat, splitting rent, groceries, electricity, Wi-Fi and maintenance every month.',
  },
  { id: 'pg', title: 'PG residents and students', description: 'Mess bills, shared rooms and the things you buy together.' },
  { id: 'couples', title: 'Couples', description: 'Rent, groceries and subscriptions, without keeping score in your head.' },
  { id: 'families', title: 'Families', description: 'Monthly ration, utilities and the household costs everyone chips in for.' },
  { id: 'friends', title: 'Friends and trips', description: 'Dinners, weekend trips and cabs, kept apart from the flat’s accounts.' },
  { id: 'teams', title: 'Small teams', description: 'Office snacks, team lunches and other small shared costs.' },
]

export interface Step {
  title: string
  description: string
}

export const steps: Step[] = [
  {
    title: 'Sign up with your phone number',
    description: 'Enter your mobile number and the OTP we send you. That’s the whole sign-up.',
  },
  {
    title: 'Add your flat and invite everyone',
    description: 'Create your flat, share the invite link in your group chat, and note when each person moved in.',
  },
  {
    title: 'Add expenses as they happen',
    description: 'Type it in, or later just say it or snap the receipt. Choose who paid and who it was for.',
  },
  {
    title: 'Everyone’s balance updates',
    description: 'Shares are worked out to the paisa and every member sees the same numbers straight away.',
  },
  {
    title: 'Set up the bills that repeat',
    description: 'Add rent, utilities and subscriptions once, and everyone gets reminded before they’re due.',
  },
  {
    title: 'Settle up at the end of the month',
    description: 'Check the monthly statement, pay what you owe from your own UPI app, and start the next month clean.',
  },
]

export const clarityPoints = [
  'What the flat spent this month, and on what',
  'What you owe, and to whom',
  'What others owe you',
  'Who paid for each expense',
  'Which bills are due or overdue',
  'How this month compares with the last',
]

export interface Faq {
  q: string
  a: string
}

const faq = {
  what: {
    q: 'What is Settsmartly?',
    a: 'Settsmartly is an app for keeping track of the money in a shared home: rent, bills, groceries, who paid for what and who owes whom. Everyone in the flat sees the same record, and at the end of the month it shows the simplest way to settle up.',
  },
  different: {
    q: 'How is it different from a bill-splitting app?',
    a: 'Bill-splitting apps are good at dividing one expense. Settsmartly is built around the whole month in a shared flat: the rent and bills that come back every month, flatmates moving in and out, each person’s history and a monthly statement everyone can see.',
  },
  voice: {
    q: 'How will the voice assistant work?',
    a: 'You say something like “I paid 800 for cleaning supplies, leave Aman out”. The assistant fills in a draft with the amount, who paid, who it’s split between and how. The shares are calculated by the app itself, not guessed by the AI, and nothing is saved until you confirm. The assistant is still in development.',
  },
  hindi: {
    q: 'Will it understand Hindi or Hinglish?',
    a: 'That’s the plan. We’re designing the assistant for English, Hindi and mixed Hindi-English from the start, and testing it with how people in real flats actually talk.',
  },
  moveOut: {
    q: 'What happens when a flatmate moves out?',
    a: 'You’ll record their move-out date, and Settsmartly will work out their share using the rule your flat agreed on, settle what’s pending and leave them out of new expenses. Their past records stay exactly as they were. This feature is planned.',
  },
  money: {
    q: 'Does Settsmartly hold or move my money?',
    a: 'No. Settsmartly isn’t a bank or a wallet and it never takes money from your account. You pay each other in your own UPI or payment app, and the payment is then recorded in Settsmartly.',
  },
  recordings: {
    q: 'What happens to my voice recordings?',
    a: 'The microphone is only used when you choose to use it. Before the assistant launches, we’ll publish exactly what is stored, how long it’s kept and how to delete it.',
  },
  free: {
    q: 'Is Settsmartly free?',
    a: 'Yes, the core of it will be: your flat, splitting expenses, balances and your full history. Optional paid plans will add things like more voice usage and extra household tools.',
  },
  launch: {
    q: 'When and where are you launching?',
    a: 'We’re starting with a closed beta for a small number of flats in Bengaluru. Anyone in India can join the waitlist, and we’ll open up to more cities after the beta.',
  },
} satisfies Record<string, Faq>

export const faqs: Faq[] = [faq.what, faq.different, faq.voice, faq.hindi, faq.moveOut, faq.money, faq.recordings, faq.free, faq.launch]

/** FAQ shown on /flatmates: a subset of the home-page FAQ. */
export const flatmateFaqs: Faq[] = [faq.different, faq.moveOut, faq.money, faq.free, faq.launch]

/** FAQ shown on /contact. */
export const contactFaqs: Faq[] = [faq.what, faq.launch, faq.money, faq.free, faq.different]

export const voiceFaqs: Faq[] = [
  {
    q: 'Can I use the voice assistant now?',
    a: 'Not yet. It’s still being built. If you join the waitlist, you’ll be able to try it in the closed beta, which starts with flatmates in Bengaluru.',
  },
  {
    q: 'Which languages will it understand?',
    a: 'English, Hindi and Hinglish (mixed Hindi and English) from the start. We’re testing it with real flatmates to make sure it copes with the way people actually talk.',
  },
  {
    q: 'What if it gets something wrong?',
    a: 'You always see a draft before anything is saved, so you can fix it by voice or by hand. If something is missing or unclear, the assistant asks rather than guessing.',
  },
  {
    q: 'Does it store my voice recordings?',
    a: 'The microphone is only used when you choose to use it. Before the assistant launches, we’ll publish exactly what is stored, how long it’s kept and how to delete it.',
  },
  {
    q: 'Will it cost extra?',
    a: 'The core of Settsmartly will be free. We expect voice entry to be part of the paid plans, and we’ll publish the details and prices before launch.',
  },
]

export const pricingFaqs: Faq[] = [
  {
    q: 'Will the free plan stay free?',
    a: 'Yes. Splitting expenses, managing your flat and settling balances will always be free.',
  },
  {
    q: 'When will paid plans be available?',
    a: 'After launch. We’ll publish prices on this page before any plan can be bought.',
  },
  {
    q: 'Does everyone in the flat need a paid plan?',
    a: 'No. A paid plan only applies to the person who subscribes. The Household plan is the exception: it covers everyone in the flat.',
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Yes. Once subscriptions are live you’ll be able to cancel whenever you like. The full terms will be in our Refund Policy before anything goes on sale.',
  },
]

/**
 * Pages whose FAQ gets FAQPage structured data. Only pages with their own unique questions are listed:
 * /flatmates and /contact repeat home-page questions, and Google asks for repeated FAQs to be marked up once.
 */
export const faqSchemaByPath: Record<string, Faq[]> = {
  '/': faqs,
  '/voice-assistant': voiceFaqs,
  '/pricing': pricingFaqs,
}

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
 * The plan structure is a proposal. Prices are intentionally not shown until
 * subscriptions are working. Update `priceLabel` when they are.
 */
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    priceLabel: '₹0',
    priceNote: 'Free for good',
    description: 'Everything you need to run your flat’s shared expenses.',
    features: [
      'Your flat, plus separate groups for trips',
      'Equal, percentage, exact and shares splits',
      'Balances and a suggested way to settle',
      'Your complete expense history',
      'UPI payment links (planned)',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    priceLabel: 'Coming soon',
    priceNote: 'Price announced at launch',
    description: 'Add expenses by voice and stop re-entering the same bills.',
    features: [
      'Everything in Free',
      'Voice entry, with a monthly allowance',
      'Recurring bills and reminders',
      'Bill calendar',
      'More detailed reports',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    priceLabel: 'Coming soon',
    priceNote: 'Price announced at launch',
    description: 'More voice, and answers to questions about your spending.',
    highlight: true,
    features: [
      'Everything in Plus',
      'Higher voice assistant limits',
      'Ask questions about your flat’s spending',
      'Receipt scanning',
      'Export reports',
    ],
  },
  {
    id: 'household',
    name: 'Household',
    priceLabel: 'Coming soon',
    priceNote: 'Price announced at launch',
    description: 'One plan that covers everyone in the flat.',
    features: [
      'Premium for every member',
      'Move-in and move-out tools',
      'A monthly household budget',
      'Monthly household statements',
      'Security deposit tracking',
    ],
  },
]
