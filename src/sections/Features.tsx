import { 
  Split, 
  Lightbulb, 
  TrendingUp, 
  Calculator,
  Bell,
  HandIcon,
  Star,
  Sparkles,
  Camera,
  Wallet,
  BookOpen,
  PieChart,
  BarChart3,
  PiggyBank,
  FileDown,
  Tags,
  FileText,
  Users
} from 'lucide-react'

const Features = () => {
  const coreFeatures = [
    {
      icon: Split,
      title: 'Smart Expense Splitting',
      description: 'Split equally, by percentage, or exact amounts. Handle complex multi-person scenarios with ease.',
      highlight: 'Equal • % • Exact'
    },
    {
      icon: PiggyBank,
      title: 'Personal Expense Tracking',
      description: 'Log daily spends with categories and notes. See monthly summaries and stay in control of your money.',
      highlight: 'Personal'
    },
    {
      icon: Lightbulb,
      title: 'Smart Split Suggestions',
      description: 'AI-powered suggestions based on who paid last, spending patterns, and group dynamics.',
      highlight: 'AI-Powered'
    },
    {
      icon: Wallet,
      title: 'UPI-Friendly Experience',
      description: 'One-tap UPI integration. Generate payment links, scan QR codes, or use UPI IDs directly.',
      highlight: 'One-Tap Pay'
    },
    {
      icon: Camera,
      title: 'Bill Scanning',
      description: 'Snap a photo of any bill. OCR extracts items and suggests fair splits automatically.',
      highlight: 'OCR Powered'
    },
    {
      icon: Calculator,
      title: 'Smart Settlement',
      description: 'Minimize transactions with intelligent settlement paths. 5 people, 1 settlement.',
      highlight: 'Minimize Txns'
    },
    {
      icon: TrendingUp,
      title: 'Insights Dashboard',
      description: 'Visual spending analytics. Track who you spend most with, monthly trends, and category breakdowns.',
      highlight: 'Visual Analytics'
    }
  ]

  const additionalFeatures = [
    {
      icon: HandIcon,
      title: 'Loan Tracking',
      description: 'Track informal loans between friends with automatic interest calculation and due date reminders.'
    },
    {
      icon: Star,
      title: 'Trust Score System',
      description: 'Build financial credibility. On-time payments improve your score for better group trust.'
    },
    {
      icon: Bell,
      title: 'Friendly Reminders',
      description: 'Polite, culturally-aware nudges that dont strain relationships. WhatsApp integration included.'
    },
    {
      icon: Sparkles,
      title: 'Indian Use Cases',
      description: 'Pre-built templates for rent splitting, trip expenses, festival sharing, wedding contributions.'
    }
  ]

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-100 mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
            <span className="text-xs sm:text-sm font-medium text-brand-700">Core Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 sm:mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Settle Smart</span>
          </h2>
          <p className="text-base sm:text-lg text-surface-600">
            From tracking personal spends to managing a Goa trip with friends, we have features designed 
            for every Indian spending scenario.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 feature-card group hover:bg-white/90"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                </div>
                <span className="px-2 sm:px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-surface-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-surface-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-6 sm:mb-8 text-center">
            More Powerful Features
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-surface-100 to-surface-50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-surface-600" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-surface-900 mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-surface-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="students" className="mt-10 sm:mt-16 lg:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-100 mb-4 sm:mb-6">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
              <span className="text-xs sm:text-sm font-medium text-brand-700">For College Students</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-surface-900 mb-3 sm:mb-4">
              Built to Help You{' '}
              <span className="gradient-text">Settle Smart</span>{' '}
              On Campus
            </h3>
            <p className="text-sm sm:text-base text-surface-600">
              Go beyond splitting bills. Track spending by category, set budgets, and understand exactly where your money goes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Wallet,
                title: 'Financial Intelligence',
                items: [
                  'Student budget optimizer based on allowance/aid cycles',
                  'Scholarship & grant tracker with deadline reminders',
                  'Textbook price comparison for buy/rent/sell'
                ]
              },
              {
                icon: PiggyBank,
                title: 'Budgets & Alerts',
                items: [
                  'Set monthly budget and category limits (food, trips, shopping)',
                  'Get alerts at 50% / 80% / 100% of budget',
                  'Spot budget leaks with weekly trends'
                ]
              },
              {
                icon: Users,
                title: 'Trips & Group Spending',
                items: [
                  'Track trip costs separately (travel, stay, food, activities)',
                  'Know your share instantly for group plans',
                  'See who owes whom and settle without confusion'
                ]
              }
            ].map((category, index) => (
              <div key={index} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 feature-card">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-surface-900">{category.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-surface-600">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-surface-900 mb-2 sm:mb-3">
                Student Money Insights
              </h4>
              <p className="text-sm sm:text-base text-surface-600">
                Track expenses, understand your biggest spends, and stay on budget with clear category-wise analytics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: PieChart,
                  title: 'Category Breakdown',
                  description: 'See where money goes most: food, trips, shopping, subscriptions, and more.'
                },
                {
                  icon: BarChart3,
                  title: 'Spending Trends',
                  description: 'Weekly/monthly trends to spot overspending patterns and peak spend days.'
                },
                {
                  icon: Tags,
                  title: 'Trips & Events Mode',
                  description: 'Track trip costs separately and know your share for Goa trips, fests, and birthdays.'
                },
                {
                  icon: PiggyBank,
                  title: 'Budgets & Alerts',
                  description: 'Set monthly and category limits and get alerts before you cross your budget.'
                },
                {
                  icon: FileDown,
                  title: 'Monthly Reports',
                  description: 'Generate a clean monthly summary you can export as PDF/Excel for clarity.'
                },
                {
                  icon: Wallet,
                  title: 'Fast Expense Capture',
                  description: 'Quickly log UPI spends with notes and categories, or scan bills when needed.'
                },
                {
                  icon: FileText,
                  title: 'Notes & Context',
                  description: 'Add context like “canteen”, “cab”, “hostel fee” so insights stay accurate.'
                },
                {
                  icon: Users,
                  title: 'Group Insights',
                  description: 'See how group spends split across categories and which expenses create the most dues.'
                }
              ].map((item, index) => (
                <div key={index} className="rounded-xl sm:rounded-2xl bg-white/60 border border-surface-200 p-4 sm:p-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                  </div>
                  <h5 className="font-bold text-sm sm:text-base text-surface-900 mb-1">{item.title}</h5>
                  <p className="text-xs sm:text-sm text-surface-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
