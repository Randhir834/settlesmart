import { AlertCircle, Receipt, MessageCircle, Wallet, FileText, Users } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: Receipt,
      title: 'Confusion in Splitting Bills',
      description: 'Who paid what? Who owes whom? Manual calculations lead to errors and disputes.',
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
    <section id="problem" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 mb-6">
            <AlertCircle className="w-4 h-4 text-brand-600" />
            <span className="text-sm font-medium text-brand-700">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Managing Shared Money in India is{' '}
            <span className="gradient-text">Hard</span>
          </h2>
          <p className="text-lg text-surface-600">
            From splitting dinner bills to managing flat expenses, Indians face unique challenges 
            that existing solutions fail to address properly.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 feature-card hover:bg-white/90"
            >
              <div className={`w-14 h-14 rounded-xl ${problem.color} flex items-center justify-center mb-4`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-surface-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-surface-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">78%</p>
              <p className="text-surface-600">Indians struggle with expense splitting</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">₹2.4L</p>
              <p className="text-surface-600">Average unclaimed money per person yearly</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">65%</p>
              <p className="text-surface-600">Feel awkward asking money back</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">3.5hrs</p>
              <p className="text-surface-600">Monthly time spent on manual tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
