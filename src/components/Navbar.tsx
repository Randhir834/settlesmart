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
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="SettleSmart Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-contain group-hover:scale-110 transition-transform"
            />
            <span className={`font-bold text-lg sm:text-xl transition-colors ${
              isScrolled ? 'text-surface-900' : 'text-surface-900'
            }`}>
              Settle<span className="text-brand-600">Smart</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs lg:text-sm font-medium transition-colors hover:text-brand-600 ${
                  isScrolled ? 'text-surface-600' : 'text-surface-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-white font-medium text-xs lg:text-sm">
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
          <div className="md:hidden mt-4 py-4 border-t border-surface-200 safe-area-inset">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-surface-700 font-medium py-3 px-2 hover:text-brand-600 transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary px-5 py-3.5 rounded-full text-white font-medium text-sm mt-2 min-h-[48px]">
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
