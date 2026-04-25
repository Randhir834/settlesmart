import { AlertCircle, Receipt, MessageCircle, Wallet, FileText, Users, PieChart, Bell } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: Receipt,
      title: 'Confusion in Splitting Bills',
      description: 'Who paid what? Who owes whom? Manual calculations lead to errors and disputes.',
      color: 'bg-brand-100 text-brand-600'
    },
    {
      icon: PieChart,
      title: 'No Clarity Where Money Goes',
      description: 'Students don’t realize they’re overspending on food, trips, and subscriptions until the month ends.',
      color: 'bg-brand-100 text-brand-600'
    },
    {
      icon: Bell,
      title: 'No Budget Alerts',
      description: 'Without limits and reminders, expenses cross budget silently and create end-of-month stress.',
      color: 'bg-brand-100 text-brand-600'
    },
    {
      icon: MessageCircle,
      title: 'Awkward Money Conversations',
      description: 'The hesitation to ask friends for money back creates tension in relationships.',
      color: 'bg-brand-100 text-brand-600'
    },
    {
      icon: Wallet,
      title: 'Too Many UPI Transactions',
      description: 'Multiple small payments clutter your bank statement and become hard to track.',
      color: 'bg-brand-100 text-brand-600'
    },
    {
      icon: FileText,
      title: 'Messy Tracking Methods',
      description: 'Notes apps, Excel sheets, and WhatsApp groups are unreliable and chaotic.',
      color: 'bg-brand-100 text-brand-600'
    },
    {
      icon: Users,
      title: 'Group Expense Nightmares',
      description: 'Trips, parties, and shared flats create complex webs of who-owes-what.',
      color: 'bg-brand-100 text-brand-700'
    },
    {
      icon: AlertCircle,
      title: 'Forgetting Payments',
      description: 'Without reminders, small debts are forgotten until they strain friendships.',
      color: 'bg-brand-100 text-brand-600'
    }
  ]

  return (
    <section id="problem" className="py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-100 mb-4 sm:mb-6">
            <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
            <span className="text-xs sm:text-sm font-medium text-brand-700">The Problem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 sm:mb-6">
            Managing Money in India is{' '}
            <span className="gradient-text">Hard</span>
          </h2>
          <p className="text-base sm:text-lg text-surface-600">
            From tracking daily personal spends to splitting dinner bills and managing flat expenses, 
            Indians face unique challenges that existing solutions fail to address properly.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 feature-card hover:bg-white/90"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${problem.color} flex items-center justify-center mb-3 sm:mb-4`}>
                <problem.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-surface-900 mb-2 sm:mb-3">
                {problem.title}
              </h3>
              <p className="text-sm sm:text-base text-surface-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-10 sm:mt-16 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">78%</p>
              <p className="text-sm sm:text-base text-surface-600">Indians struggle with expense splitting</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">₹2.4L</p>
              <p className="text-sm sm:text-base text-surface-600">Average unclaimed money per person yearly</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">65%</p>
              <p className="text-sm sm:text-base text-surface-600">Feel awkward asking money back</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">3.5hrs</p>
              <p className="text-sm sm:text-base text-surface-600">Monthly time spent on manual tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
