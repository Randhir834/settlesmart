import { Link } from 'react-router-dom'
import { Linkedin, Mail } from 'lucide-react'
import Logo from './Logo'
import { site } from '../config'

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Features', to: '/features' },
      { name: 'Voice Assistant', to: '/voice-assistant' },
      { name: 'For Flatmates', to: '/flatmates' },
      { name: 'How It Works', to: '/how-it-works' },
      { name: 'Pricing', to: '/pricing' },
      { name: 'FAQ', to: '/#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', to: '/about' },
      { name: 'Contact', to: '/contact' },
      { name: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', to: '/privacy' },
      { name: 'Terms and Conditions', to: '/terms' },
      { name: 'Refund Policy', to: '/refunds' },
    ],
  },
]

const Footer = () => (
  <footer className="border-t border-ink-100 bg-ink-50">
    <div className="container-site py-14 sm:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 font-display text-sm font-semibold text-ink-800">{site.tagline}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500">
            Complete household financial management for flatmates and working professionals in India.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Settsmartly on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition hover:border-brand-300 hover:text-brand-700"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.businessEmail}`}
              aria-label="Email Settsmartly"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition hover:border-brand-300 hover:text-brand-700"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-bold text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-1">
              {col.links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="inline-block py-1.5 text-sm text-ink-500 transition hover:text-brand-700">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 text-xs leading-relaxed text-ink-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Settsmartly. All rights reserved.</p>
        <p className="max-w-xl md:text-right">
          Settsmartly is an expense-management platform, not a bank or wallet. Payments are made through supported
          external payment services.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
