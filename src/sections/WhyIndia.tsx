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
    <section id="why-india" className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-100 mb-4 sm:mb-6">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
              <span className="text-xs sm:text-sm font-medium text-brand-700">Built for India</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 sm:mb-6">
              Why SettSmartly is{' '}
              <span className="text-brand-600">Made for India</span>
            </h2>
            <p className="text-base sm:text-lg text-surface-600 leading-relaxed">
              Foreign expense apps don't understand Indian spending habits. We're building 
              from the ground up for how Indians actually share money - in groups, across 
              UPI and cash, with relationships at the center.
            </p>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-br from-brand-200 to-brand-100 opacity-50 blur-2xl absolute -top-10 -right-10" />
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mx-auto mb-4">
                    <IndianRupee className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-surface-900 mb-1">Made in India</p>
                  <p className="text-sm sm:text-base text-surface-600">For Indians, By Indians</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 feature-card group hover:bg-white/90"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-bold text-brand-600">{reason.stat}</p>
                    <p className="text-xs text-surface-500">{reason.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-surface-900 mb-2 sm:mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-surface-600 leading-relaxed flex-1">
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
