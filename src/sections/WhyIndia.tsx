import { IndianRupee, Users, Smartphone, Building2, HeartHandshake } from 'lucide-react'

const WhyIndia = () => {
  const reasons = [
    {
      icon: Smartphone,
      title: 'UPI-Heavy Ecosystem',
      description: 'With 12B+ monthly UPI transactions, India needs expense tools built for instant digital payments, not cash-based foreign apps.',
      stat: '12B+',
      statLabel: 'Monthly UPI Txns'
    },
    {
      icon: Users,
      title: 'Group Spending Culture',
      description: 'From hostel rooms to office teams, Indians spend in groups constantly. Weddings, festivals, trips - shared expenses are part of life.',
      stat: '85%',
      statLabel: 'Group Transactions'
    },
    {
      icon: IndianRupee,
      title: 'Cash + Digital Mix',
      description: 'Unique Indian reality: some pay cash, others UPI. Our app handles hybrid payments seamlessly with smart reconciliation.',
      stat: 'Mixed',
      statLabel: 'Payment Modes'
    },
    {
      icon: HeartHandshake,
      title: 'Relationship-Focused',
      description: 'Indians prioritize relationships over money. Direct "pay me back" requests feel rude - we enable polite, culturally-aware reminders.',
      stat: 'Respectful',
      statLabel: 'Communication'
    }
  ]

  return (
    <section id="why-india" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 mb-6">
              <Building2 className="w-4 h-4 text-brand-600" />
              <span className="text-sm font-medium text-brand-700">Built for India</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
              Why SettleSmart is{' '}
              <span className="text-brand-600">Made for India</span>
            </h2>
            <p className="text-lg text-surface-600 leading-relaxed">
              Foreign expense apps don't understand Indian spending habits. We're building 
              from the ground up for how Indians actually share money - in groups, across 
              UPI and cash, with relationships at the center.
            </p>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand-200 to-brand-100 opacity-50 blur-2xl absolute -top-10 -right-10" />
              <div className="glass-card rounded-3xl p-8 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mx-auto mb-4">
                    <IndianRupee className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-surface-900 mb-1">Made in India</p>
                  <p className="text-surface-600">For Indians, By Indians</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 feature-card group hover:bg-white/90"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-600">{reason.stat}</p>
                    <p className="text-xs text-surface-500">{reason.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-surface-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-surface-600 leading-relaxed flex-1">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyIndia
