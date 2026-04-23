import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Problem', href: '#problem' },
    { name: 'Features', href: '#features' },
    { name: 'Why India', href: '#why-india' },
    { name: 'Future', href: '#future' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="SettleSmart Logo" 
              className="w-12 h-12 rounded-2xl object-contain group-hover:scale-110 transition-transform"
            />
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-surface-900' : 'text-surface-900'
            }`}>
              Settle<span className="text-brand-600">Smart</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  isScrolled ? 'text-surface-600' : 'text-surface-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary px-5 py-2.5 rounded-full text-white font-medium text-sm">
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-surface-700" />
            ) : (
              <Menu className="w-6 h-6 text-surface-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-surface-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-surface-700 font-medium py-2 hover:text-brand-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary px-5 py-3 rounded-full text-white font-medium text-sm mt-2">
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
