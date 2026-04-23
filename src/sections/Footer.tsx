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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="glass-card bg-white/5 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-brand-500/20" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Settle Smart?
              </h2>
              <p className="text-surface-700 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of Indians who are already simplifying their shared expenses.
                Be the first to know when we launch.
              </p>
              
              {/* Email Signup */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-500"
                  />
                </div>
                <button className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 group">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-sm text-surface-600 mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="SettleSmart Logo" 
                className="w-14 h-14 rounded-2xl object-contain"
              />
              <span className="font-bold text-xl">
                Settle<span className="text-brand-400">Smart</span>
              </span>
            </a>
            <p className="text-surface-400 mb-6 leading-relaxed">
              The smartest way for Indians to manage shared money. 
              Less calculation, less awkwardness, more clarity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-surface-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-surface-400 text-sm">
            © 2025 SettleSmart. Made with <Heart className="w-4 h-4 inline text-brand-500" /> in India
          </p>
          <div className="flex items-center gap-6">
            <span className="text-surface-400 text-sm">Made for Bharat 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
