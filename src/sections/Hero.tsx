import { ArrowRight, Sparkles, Users, Shield, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Decorations - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 backdrop-blur-sm border border-brand-200 mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500" />
              <span className="text-xs sm:text-sm font-medium text-surface-700">Coming Soon to India</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Smart Expense Manager{' '}
              <span className="gradient-text">for India</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-surface-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The smartest and simplest way for Indians to manage shared money. 
              <span className="font-semibold text-surface-800"> Less calculation, less awkwardness, more clarity.</span>
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 group min-h-[48px]">
                Get Early Access
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-surface-300 text-surface-700 font-semibold text-base sm:text-lg hover:border-brand-500 hover:text-brand-600 transition-colors min-h-[48px]">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-10">
              <div className="flex items-center gap-1.5 sm:gap-2 text-surface-600">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500" />
                <span className="text-xs sm:text-sm font-medium">For Groups</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-surface-600">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600" />
                <span className="text-xs sm:text-sm font-medium">UPI Secure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-surface-600">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                <span className="text-xs sm:text-sm font-medium">Lightning Fast</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative scale-90 xs:scale-100 sm:scale-100">
              {/* Phone Frame */}
              <div className="w-64 xs:w-72 sm:w-80 h-[520px] xs:h-[580px] bg-surface-900 rounded-[2.5rem] xs:rounded-[3rem] p-2.5 xs:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.25)] ring-1 ring-white/10 transform rotate-1 xs:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-surface-50 via-brand-50 to-surface-50 rounded-[2rem] xs:rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="p-4 xs:p-6 h-full flex flex-col">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-4 xs:mb-6">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/app-logo.png" 
                          alt="SettSmartly" 
                          className="w-8 h-8 xs:w-10 xs:h-10 rounded-xl object-contain"
                        />
                        <span className="font-bold text-sm xs:text-base text-surface-800">SettSmartly</span>
                      </div>
                      <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-surface-200" />
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl xs:rounded-2xl p-4 xs:p-5 text-white mb-3 xs:mb-4">
                      <p className="text-white/80 text-xs xs:text-sm mb-1">Total Balance</p>
                      <h3 className="text-2xl xs:text-3xl font-bold">₹12,450</h3>
                      <div className="flex gap-3 xs:gap-4 mt-3 xs:mt-4">
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-xs">↑</span>
                          </div>
                          <span className="text-xs">You get ₹5,200</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-xs">↓</span>
                          </div>
                          <span className="text-xs">You owe ₹2,150</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-semibold text-surface-800 mb-2 xs:mb-3 text-sm xs:text-base">Recent Activity</h4>
                      <div className="space-y-2 xs:space-y-3">
                        {[
                          { name: 'Rahul', action: 'Paid dinner', amount: '+₹450', type: 'positive' },
                          { name: 'Priya', action: 'Movie tickets', amount: '-₹320', type: 'negative' },
                          { name: 'Amit', action: 'Cab share', amount: '+₹180', type: 'positive' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 xs:p-3 bg-white/90 backdrop-blur-sm rounded-lg xs:rounded-xl shadow-sm border border-surface-200">
                            <div className="flex items-center gap-2 xs:gap-3">
                              <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-gradient-to-br from-surface-200 to-surface-300 flex items-center justify-center text-xs xs:text-sm font-medium text-surface-600">
                                {item.name[0]}
                              </div>
                              <div>
                                <p className="font-medium text-surface-800 text-xs xs:text-sm">{item.name}</p>
                                <p className="text-xs text-surface-500">{item.action}</p>
                              </div>
                            </div>
                            <span className={`font-semibold text-xs xs:text-sm ${item.type === 'positive' ? 'text-brand-600' : 'text-brand-700'}`}>
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
