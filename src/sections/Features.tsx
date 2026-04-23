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
  Wallet
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
            From splitting a chai to managing a Goa trip, we have features designed 
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
      </div>
    </section>
  )
}

export default Features
