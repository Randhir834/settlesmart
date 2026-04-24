import { Mail, Twitter, Linkedin, Instagram, ArrowRight, Heart } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
    Resources: ['Help Center', 'Community', 'Guides', 'API Docs', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  }

  return (
    <footer className="bg-surface-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-surface-800">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-24">
          <div className="glass-card bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-brand-500/20" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Settle Smart?
              </h2>
              <p className="text-surface-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of Indians who are already simplifying their shared expenses.
                Be the first to know when we launch.
              </p>
              
              {/* Email Signup */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-surface-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 text-sm sm:text-base min-h-[48px]"
                  />
                </div>
                <button className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group text-sm sm:text-base min-h-[48px]">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-xs sm:text-sm text-surface-600 mt-3 sm:mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 sm:mb-6">
              <img 
                src="/app-logo.png" 
                alt="SettSmartly Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-contain"
              />
              <span className="font-bold text-lg sm:text-xl">
                Sett<span className="text-brand-400">Smartly</span>
              </span>
            </a>
            <p className="text-surface-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              The smartest way for Indians to manage shared money. 
              Less calculation, less awkwardness, more clarity.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/company/settsmartly/about/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-surface-400 hover:text-white transition-colors text-xs sm:text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-surface-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 SettSmartly. Made with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline text-brand-500" /> in India
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-surface-400 text-xs sm:text-sm">Made for Bharat 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
