import { ArrowRight, Sparkles, Users, Shield, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-brand-200 mb-6">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span className="text-sm font-medium text-surface-700">Coming Soon to India</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Expense Manager{' '}
              <span className="gradient-text">for India</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-surface-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The smartest and simplest way for Indians to manage shared money. 
              <span className="font-semibold text-surface-800"> Less calculation, less awkwardness, more clarity.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 group">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-surface-300 text-surface-700 font-semibold text-lg hover:border-brand-500 hover:text-brand-600 transition-colors">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10">
              <div className="flex items-center gap-2 text-surface-600">
                <Users className="w-5 h-5 text-brand-500" />
                <span className="text-sm font-medium">For Groups</span>
              </div>
              <div className="flex items-center gap-2 text-surface-600">
                <Shield className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-medium">UPI Secure</span>
              </div>
              <div className="flex items-center gap-2 text-surface-600">
                <Zap className="w-5 h-5 text-brand-400" />
                <span className="text-sm font-medium">Lightning Fast</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 sm:w-80 h-[580px] bg-surface-900 rounded-[3rem] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-1 ring-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-surface-50 via-brand-50 to-surface-50 rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/logo.png" 
                          alt="SettleSmart" 
                          className="w-10 h-10 rounded-xl object-contain"
                        />
                        <span className="font-bold text-surface-800">SettleSmart</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-200" />
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-white mb-4">
                      <p className="text-white/80 text-sm mb-1">Total Balance</p>
                      <h3 className="text-3xl font-bold">₹12,450</h3>
                      <div className="flex gap-4 mt-4">
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-xs">↑</span>
                          </div>
                          <span className="text-xs">You get ₹5,200</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-xs">↓</span>
                          </div>
                          <span className="text-xs">You owe ₹2,150</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-surface-800 mb-3">Recent Activity</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Rahul', action: 'Paid dinner', amount: '+₹450', type: 'positive' },
                          { name: 'Priya', action: 'Movie tickets', amount: '-₹320', type: 'negative' },
                          { name: 'Amit', action: 'Cab share', amount: '+₹180', type: 'positive' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-surface-200">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-surface-200 to-surface-300 flex items-center justify-center text-sm font-medium text-surface-600">
                                {item.name[0]}
                              </div>
                              <div>
                                <p className="font-medium text-surface-800 text-sm">{item.name}</p>
                                <p className="text-xs text-surface-500">{item.action}</p>
                              </div>
                            </div>
                            <span className={`font-semibold text-sm ${item.type === 'positive' ? 'text-brand-600' : 'text-brand-700'}`}>
                              {item.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
