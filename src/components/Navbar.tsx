import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { site } from '../config'

export const navLinks = [
  { name: 'Features', to: '/features' },
  { name: 'How It Works', to: '/how-it-works' },
  { name: 'For Whom', to: '/#for-whom' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'FAQ', to: '/#faq' },
  { name: 'Contact', to: '/contact' },
]

const loginHref = site.appLoginUrl || '/login'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const linkClass = (to: string) => {
    const active = !to.includes('#') && location.pathname === to
    return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active ? 'text-brand-700' : 'text-ink-600 hover:text-ink'
    }`
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? 'border-ink-100 bg-white/90 backdrop-blur-md' : 'border-transparent bg-white'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) =>
            l.to.includes('#') ? (
              <Link key={l.name} to={l.to} className={linkClass(l.to)}>
                {l.name}
              </Link>
            ) : (
              <NavLink key={l.name} to={l.to} className={linkClass(l.to)}>
                {l.name}
              </NavLink>
            ),
          )}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={loginHref} className="btn-ghost">
            Log In
          </a>
          <Link to="/get-started" className="btn-primary py-2.5">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-50 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Portalled to <body>: the header's backdrop-filter would otherwise become the
          containing block for this fixed panel and clip it to the header's height. */}
      {open &&
        createPortal(
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-white lg:hidden">
          <div className="container-site flex flex-col gap-1 py-6">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                to={l.to}
                className="rounded-xl px-3 py-3.5 font-display text-lg font-semibold text-ink hover:bg-brand-50"
              >
                {l.name}
              </Link>
            ))}
            <div className="mt-6 grid gap-3 border-t border-ink-100 pt-6">
              <Link to="/get-started" className="btn-primary w-full py-3.5 text-base">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={loginHref} className="btn-secondary w-full py-3.5 text-base">
                Log In
              </a>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </header>
  )
}

export default Navbar
