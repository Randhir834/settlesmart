import { GraduationCap, Home, Heart, Users, Building2, PartyPopper, ArrowRight } from 'lucide-react'

const TargetUsers = () => {
  const userTypes = [
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Hostel roommates managing monthly expenses, canteen bills, and project contributions.',
      color: 'from-brand-500 to-brand-700',
      bgColor: 'bg-brand-50'
    },
    {
      icon: Home,
      title: 'Flatmates',
      description: 'Rent, utilities, groceries, and shared subscriptions - all organized in one place.',
      color: 'from-brand-500 to-brand-600',
      bgColor: 'bg-brand-50'
    },
    {
      icon: Heart,
      title: 'Couples',
      description: 'Track shared expenses, plan budgets together, and maintain financial transparency.',
      color: 'from-brand-500 to-brand-700',
      bgColor: 'bg-brand-50'
    },
    {
      icon: Users,
      title: 'Friends',
      description: 'Split restaurant bills, movie tickets, cab rides, and trip expenses effortlessly.',
      color: 'from-brand-500 to-brand-700',
      bgColor: 'bg-brand-50'
    },
    {
      icon: Building2,
      title: 'Office Teams',
      description: 'Team lunches, gift collections, event expenses - professional expense management.',
      color: 'from-brand-500 to-brand-600',
      bgColor: 'bg-brand-50'
    },
    {
      icon: PartyPopper,
      title: 'Event Groups',
      description: 'Weddings, trips, parties - manage complex group finances with ease.',
      color: 'from-brand-500 to-brand-700',
      bgColor: 'bg-brand-50'
    }
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 mb-6">
            <Users className="w-4 h-4 text-brand-600" />
            <span className="text-sm font-medium text-brand-700">For Everyone</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Built for Every Indian{' '}
            <span className="gradient-text">Spending Scenario</span>
          </h2>
          <p className="text-lg text-surface-600">
            From college hostels to corporate offices, SettleSmart adapts to your 
            unique expense sharing needs.
          </p>
        </div>

        {/* User Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className={`${user.bgColor} rounded-2xl p-6 feature-card group cursor-pointer`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${user.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <user.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-surface-900 mb-2">
                {user.title}
              </h3>
              <p className="text-surface-600 mb-4">
                {user.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-surface-700 group-hover:text-brand-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial/Quote */}
        <div className="mt-16 glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-200 to-brand-100 rounded-full filter blur-3xl opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="text-6xl text-brand-300 font-serif mb-6">"</div>
            <p className="text-xl lg:text-2xl text-surface-700 leading-relaxed mb-8">
              We started with a simple problem - tracking who paid for dinner. 
              Now we're building the financial infrastructure for India's shared economy.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 flex items-center justify-center text-white font-bold">
                SS
              </div>
              <div className="text-left">
                <p className="font-bold text-surface-900">SettleSmart Team</p>
                <p className="text-sm text-surface-600">Building for Bharat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetUsers
