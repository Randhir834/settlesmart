import { Heart, Users, TrendingUp, Sparkles, Crown, Zap } from 'lucide-react'

const UniqueValue = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-100 mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
            <span className="text-xs sm:text-sm font-medium text-brand-700">Our Edge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 sm:mb-6">
            Not Just Expense Tracking,{' '}
            <span className="gradient-text">A Complete Money Solution</span>
          </h2>
          <p className="text-base sm:text-lg text-surface-600">
            SettSmartly goes beyond simple calculations. We help you maintain healthy 
            financial relationships while keeping your money organized.
          </p>
        </div>

        {/* Unique Value Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 feature-card text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-brand-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-3 sm:mb-4">
              Preserve Relationships
            </h3>
            <p className="text-sm sm:text-base text-surface-600 leading-relaxed mb-4 sm:mb-6">
              Money disputes destroy friendships. Our polite reminder system and transparent 
              tracking keep relationships intact while ensuring everyone pays their share.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-600 font-medium">
              <Zap className="w-4 h-4" />
              <span>Culturally-aware nudges</span>
            </div>
          </div>

          {/* Card 2 - Featured */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 feature-card text-center relative bg-gradient-to-br from-brand-500 to-brand-600 text-white sm:col-span-2 lg:col-span-1">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
              <span className="px-3 sm:px-4 py-1 rounded-full bg-brand-100 text-brand-900 text-xs sm:text-sm font-bold">
                MOST LOVED
              </span>
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Group Harmony
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6">
              Special features for Indian group dynamics - from college friends to office 
              teams. Split rent, plan trips, manage events without the usual drama.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80 font-medium">
              <Crown className="w-4 h-4" />
              <span>Built for Indian groups</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 feature-card text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-brand-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-3 sm:mb-4">
              Financial Growth
            </h3>
            <p className="text-sm sm:text-base text-surface-600 leading-relaxed mb-4 sm:mb-6">
              Track lending patterns, build your trust score, and develop better financial 
              habits. Turn expense management into a path toward financial wellness.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-600 font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>Credit score for friends</span>
            </div>
          </div>
        </div>

        {/* Monetization Info */}
        <div className="mt-10 sm:mt-16 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-surface-900 mb-3 sm:mb-4">
                Freemium Model That Makes Sense
              </h3>
              <p className="text-sm sm:text-base text-surface-600 mb-4 sm:mb-6">
                Core expense splitting is always free. Premium features for power users 
                who want deeper insights and advanced tools.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-600 text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-surface-900">Free Forever</p>
                    <p className="text-xs sm:text-sm text-surface-600">Basic splitting, groups, UPI payments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-surface-900">Premium (₹99/month)</p>
                    <p className="text-xs sm:text-sm text-surface-600">Advanced analytics, unlimited groups, priority support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 w-full max-w-sm">
                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-surface-500 text-xs sm:text-sm mb-1">Premium Plan</p>
                  <p className="text-3xl sm:text-4xl font-bold text-surface-900">₹99<span className="text-base sm:text-lg text-surface-500">/mo</span></p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {[
                    'Unlimited expense groups',
                    'Advanced spending insights',
                    'Bill scan & OCR',
                    'Export to Excel/PDF',
                    'Priority customer support',
                    'Custom categories'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-surface-700 text-sm">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <span className="text-brand-600 text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full py-2.5 sm:py-3 rounded-xl text-white font-semibold text-sm sm:text-base">
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniqueValue
