import {
  Split,
  Users,
  IndianRupee,
  Activity,
  Repeat,
  ScanLine,
  PieChart,
  FileText,
  Home,
  PartyPopper,
  Plane,
  Heart,
  Sofa,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

/**
 * All marketing copy lives here so it can be edited without touching layout code.
 *
 * `status: 'planned'` marks features that are not built/tested yet. They render with a
 * "Planned" badge so the site never claims them as available. Remove the flag once a
 * feature ships.
 */

export type FeatureStatus = 'planned'

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
    id: 'splitting',
    icon: Split,
    title: 'Smart Expense Splitting',
    description:
      'Split expenses equally, by percentage, by exact amount or by custom shares. Everyone gets a clear breakdown of their contribution.',
    details: [
      'Equal, percentage, exact-amount and shares-based splits',
      'Choose exactly which members share each expense',
      'Rounding handled so totals always add up to the paisa',
      'Per-person breakdown on every expense',
    ],
  },
  {
    id: 'groups',
    icon: Users,
    title: 'Group Expense Management',
    description:
      "Create separate groups for your apartment, family, friends, office or travel plans. Keep every group's expenses organized independently.",
    details: [
      'Unlimited groups for flats, trips, families and friends',
      'Each group keeps its own members, history and balances',
      'Invite members with a link or mobile number',
      'One personal view of what you owe across all groups',
    ],
  },
  {
    id: 'upi',
    icon: IndianRupee,
    title: 'Easy UPI Settlements',
    status: 'planned',
    description:
      'See who owes whom and generate convenient UPI payment links to settle outstanding balances using your preferred payment app.',
    details: [
      'Suggested settlements that minimise the number of payments',
      'UPI payment links that open your preferred UPI app',
      'Mark payments as settled once they are complete',
      'Settlements are recorded separately — Settsmartly never moves your money',
    ],
  },
  {
    id: 'realtime',
    icon: Activity,
    title: 'Real-Time Expense Tracking',
    description:
      'Stay updated whenever a group member adds an expense, edits a transaction or records a settlement.',
    details: [
      'Balances update the moment an expense is added',
      'Activity feed showing who changed what, and when',
      'Notifications for new expenses and settlements',
      'Edits are visible to everyone in the group',
    ],
  },
  {
    id: 'recurring',
    icon: Repeat,
    title: 'Recurring Expense Management',
    description:
      'Manage monthly rent, electricity, internet, subscriptions and other regular household expenses with reminders.',
    details: [
      'Set rent, utilities and subscriptions to repeat automatically',
      'Reminders before each due date',
      'Different split rules per recurring bill',
      'See your fixed monthly costs at a glance',
    ],
  },
  {
    id: 'receipts',
    icon: ScanLine,
    title: 'AI-Powered Receipt Scanning',
    status: 'planned',
    description:
      'Capture a receipt and let intelligent document processing extract expense details, amounts and categories for your review.',
    details: [
      'Photograph a bill to pre-fill the expense',
      'Amount, merchant, date and category extracted for you',
      'Always shown for your review before saving',
      'Receipt image attached to the expense for reference',
    ],
  },
  {
    id: 'analytics',
    icon: PieChart,
    title: 'Spending Analytics',
    description:
      'Understand your spending through category-wise breakdowns, monthly reports, individual contributions and group analytics.',
    details: [
      'Category-wise breakdowns for every group',
      'Month-on-month spending trends',
      'Who contributed what, per member',
      'Personal totals across all your groups',
    ],
  },
  {
    id: 'history',
    icon: FileText,
    title: 'Expense History and Reports',
    description:
      'Keep a clear record of shared transactions and export reports for better financial organization.',
    details: [
      'Complete, searchable history for every group',
      'Filter by member, category or date range',
      'Export reports for your records',
      'Settled and pending items clearly separated',
    ],
  },
]

export interface Segment {
  id: string
  icon: LucideIcon
  title: string
  description: string
  examples: string[]
}

export const segments: Segment[] = [
  {
    id: 'flatmates',
    icon: Home,
    title: 'For Flatmates',
    description:
      "Rent, groceries, electricity, maintenance and internet bills. Manage your entire household's shared expenses without confusion.",
    examples: ['Rent', 'Electricity', 'Wi-Fi', 'Maid'],
  },
  {
    id: 'friends',
    icon: PartyPopper,
    title: 'For Friends',
    description: 'Split restaurant bills, shopping expenses, outings and everyday purchases.',
    examples: ['Dinner', 'Movies', 'Cabs', 'Shopping'],
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'For Travel Groups',
    description:
      'Track hotel bookings, transportation, food, activities and other trip expenses in one shared group.',
    examples: ['Hotels', 'Flights', 'Fuel', 'Activities'],
  },
  {
    id: 'couples',
    icon: Heart,
    title: 'For Couples',
    description: 'Organize household spending, shared purchases and recurring expenses together.',
    examples: ['Groceries', 'Subscriptions', 'Dates', 'Home'],
  },
  {
    id: 'families',
    icon: Sofa,
    title: 'For Families',
    description: 'Keep track of shared household spending and understand how money is being used.',
    examples: ['Ration', 'School fees', 'Utilities', 'Festivals'],
  },
  {
    id: 'students',
    icon: GraduationCap,
    title: 'For Students',
    description: 'Manage hostel expenses, food, travel and shared purchases with friends.',
    examples: ['Hostel', 'Mess', 'Trips', 'Books'],
  },
]

export interface Step {
  title: string
  description: string
}

export const steps: Step[] = [
  {
    title: 'Create your account',
    description: 'Register using your mobile number and verify your identity with an OTP.',
  },
  {
    title: 'Create a group',
    description: 'Create a group and invite your friends, flatmates or family members.',
  },
  {
    title: 'Add expenses',
    description: 'Record an expense, choose who paid and select the members who should share the cost.',
  },
  {
    title: 'Let Settsmartly calculate',
    description: "The application calculates everyone's share and updates group balances.",
  },
  {
    title: 'Settle up',
    description:
      'View suggested settlements and use UPI payment links to make payments through your preferred UPI app.',
  },
  {
    title: 'Track everything',
    description:
      'View your transaction history, spending insights and outstanding balances whenever you need them.',
  },
]

export const clarityPoints = [
  'How much you have spent',
  'How much you owe',
  'How much others owe you',
  'Who paid for each expense',
  'How much each member should contribute',
  'Which payments are still pending',
  'How your spending changes every month',
]

export interface Faq {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: 'What is Settsmartly?',
    a: 'Settsmartly is a shared expense management application that helps people record expenses, split bills, track outstanding balances and organize settlements.',
  },
  {
    q: 'Is Settsmartly free?',
    a: 'Settsmartly will offer a free plan with essential expense management features, alongside optional paid plans for advanced capabilities.',
  },
  {
    q: 'Can I create multiple groups?',
    a: 'Yes. You will be able to organize different groups for apartments, trips, families, friends and other shared expenses.',
  },
  {
    q: 'Can I split expenses unequally?',
    a: 'Yes. The platform is designed to support equal, percentage-based, exact-amount and shares-based splitting.',
  },
  {
    q: 'Does Settsmartly support UPI?',
    a: 'The product is designed to support UPI payment handoffs so members can settle their balances through compatible UPI applications.',
  },
  {
    q: 'Does Settsmartly automatically deduct money?',
    a: 'No. Recording an expense does not automatically transfer money. Payments are made through the selected payment method, with settlement status recorded separately.',
  },
  {
    q: 'Can I see my monthly spending?',
    a: 'Yes. The planned analytics features will provide monthly summaries, category-wise expenses and group reports.',
  },
  {
    q: 'Can I use Settsmartly for travel?',
    a: 'Yes. You can create a travel group, record shared expenses and track what each participant owes.',
  },
  {
    q: 'When will Settsmartly launch?',
    a: 'Settsmartly is currently in development. Join the waitlist and we will let you know as soon as early access opens.',
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
 * subscriptions are operational — update `priceLabel` when they are.
 */
export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    priceLabel: '₹0',
    priceNote: 'Free forever',
    description: 'Everything you need to split and settle with your people.',
    features: [
      'Unlimited groups and members',
      'Equal, percentage, exact and shares splits',
      'Group balances and suggested settlements',
      'UPI payment links (planned)',
      'Expense history',
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    priceLabel: 'Coming soon',
    priceNote: 'Pricing announced at launch',
    description: 'For people who want deeper insight into their spending.',
    features: [
      'Everything in Free',
      'Recurring expenses and reminders',
      'Monthly spending analytics',
      'Category budgets',
      'Report exports',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    priceLabel: 'Coming soon',
    priceNote: 'Pricing announced at launch',
    description: 'Smart automation for frequent splitters and travellers.',
    highlight: true,
    features: [
      'Everything in Plus',
      'AI receipt scanning',
      'Advanced group analytics',
      'Multi-currency trips',
      'Priority support',
    ],
  },
  {
    id: 'household',
    name: 'Household',
    priceLabel: 'Coming soon',
    priceNote: 'Pricing announced at launch',
    description: 'One plan for the whole family or flat.',
    features: [
      'Premium for up to 5 members',
      'Shared household dashboard',
      'Monthly ration and bills tracking',
      'Household reports',
      'Family-level insights',
    ],
  },
]
