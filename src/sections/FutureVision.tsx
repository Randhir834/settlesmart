import { Target, TrendingUp, Building2, Globe, Rocket, ArrowRight, GraduationCap, Users, Home } from 'lucide-react'

const FutureVision = () => {
  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Launch',
      description: 'Core expense splitting, UPI integration, and basic groups. Target: Students & flatmates in metro cities.',
      icon: Rocket,
      status: 'current',
      timeframe: 'Q1 2025'
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      description: 'Bill scanning, trust scores, premium features. Expand to tier-2 cities and office teams.',
      icon: TrendingUp,
      status: 'upcoming',
      timeframe: 'Q2-Q3 2025'
    },
    {
      phase: 'Phase 3',
      title: 'Scale',
      description: 'Advanced analytics, business features, lending insights. Become India\'s default group finance app.',
      icon: Building2,
      status: 'upcoming',
      timeframe: 'Q4 2025'
    },
    {
      phase: 'Phase 4',
      title: 'Expand',
      description: 'International expansion to UPI-like ecosystems. Budgeting and personal finance features.',
      icon: Globe,
      status: 'future',
      timeframe: '2026+'
    }
  ]

  return (
    <section id="future" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 mb-6">
            <Target className="w-4 h-4 text-brand-600" />
            <span className="text-sm font-medium text-brand-700">Our Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            The Future of{' '}
            <span className="gradient-text">Group Finance in India</span>
          </h2>
          <p className="text-lg text-surface-600">
            We're not just building an app. We're creating the financial infrastructure 
            for India's shared economy.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-brand-100 opacity-50" />
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-surface-900 mb-6">
                  Become India's Default Group Finance App
                </h3>
                <p className="text-surface-600 leading-relaxed mb-6">
                  Our vision extends beyond just splitting bills. We aim to be the platform 
                  where millions of Indians manage their shared financial lives - from 
                  college hostels to family households, from startup teams to wedding planning.
                </p>
                <div className="space-y-4">
                  {[
                    '50M+ users managing shared expenses',
                    '₹1000+ Crore monthly transaction volume',
                    'Available in 12 Indian languages',
                    'Full UPI ecosystem integration'
                  ].map((goal, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center">
                        <span className="text-brand-600 text-sm">✓</span>
                      </div>
                      <span className="text-surface-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-200 via-brand-100 to-brand-200 opacity-50 blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="glass-card rounded-3xl p-8 relative z-10 text-center">
                    <div className="text-5xl font-bold gradient-text mb-2">2027</div>
                    <p className="text-surface-600">Target Year</p>
                    <div className="mt-6 pt-6 border-t border-surface-200">
                      <p className="text-sm text-surface-500 mb-1">Growth Strategy</p>
                      <p className="font-semibold text-surface-900">Students → Professionals → Families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <h3 className="text-2xl font-bold text-surface-900 mb-8 text-center">Product Roadmap</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 relative ${
                item.status === 'current' ? 'border-2 border-brand-500' : ''
              }`}
            >
              {item.status === 'current' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold">
                    IN PROGRESS
                  </span>
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                item.status === 'current' 
                  ? 'bg-brand-500' 
                  : 'bg-surface-100'
              }`}>
                <item.icon className={`w-6 h-6 ${
                  item.status === 'current' ? 'text-white' : 'text-surface-500'
                }`} />
              </div>
              <p className="text-sm text-surface-500 mb-1">{item.phase}</p>
              <h4 className="text-lg font-bold text-surface-900 mb-2">{item.title}</h4>
              <p className="text-sm text-surface-600 mb-4">{item.description}</p>
              <p className="text-xs font-medium text-brand-600">{item.timeframe}</p>
            </div>
          ))}
        </div>

        {/* Growth Strategy */}
        <div className="mt-16 glass-card rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-surface-900 mb-4">
                Growth Strategy: Start with Students
              </h3>
              <p className="text-surface-600 leading-relaxed mb-6">
                Students are the perfect early adopters - tech-savvy, living in groups, 
                and constantly splitting expenses. They'll carry SettleSmart into their 
                professional lives and family households.
              </p>
              <div className="flex items-center gap-2 text-brand-600 font-medium">
                <span>Referral-powered growth</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-2">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-surface-700">Students</p>
                </div>
                <ArrowRight className="w-6 h-6 text-surface-400" />
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-surface-700">Young Pros</p>
                </div>
                <ArrowRight className="w-6 h-6 text-surface-400" />
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-2">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-surface-700">Families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureVision
