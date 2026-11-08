import { Link } from 'react-router-dom'
import { Linkedin, Mail } from 'lucide-react'
import Logo from './Logo'
import { site } from '../config'

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Features', to: '/features' },
      { name: 'Voice assistant', to: '/voice-assistant' },
      { name: 'For flatmates', to: '/flatmates' },
      { name: 'How it works', to: '/how-it-works' },
      { name: 'Pricing', to: '/pricing' },
      { name: 'FAQ', to: '/#faq' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { name: 'All guides', to: '/guides' },
      { name: 'Splitting rent', to: '/guides/split-rent-with-flatmates' },
      { name: 'Splitting electricity', to: '/guides/split-electricity-bill' },
      { name: 'When a flatmate moves out', to: '/guides/flatmate-moving-out' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
      { name: 'Careers', to: '/careers' },
      { name: 'Join the waitlist', to: '/get-started' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy policy', to: '/privacy' },
      { name: 'Terms and conditions', to: '/terms' },
      { name: 'Refund policy', to: '/refunds' },
    ],
  },
]

const Footer = () => (
  <footer className="border-t border-ink-100 bg-ink-50">
    <div className="container-site py-14 sm:py-16">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
            Rent, bills and shared expenses for people who live together, starting with flatmates in Bengaluru.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.supportEmail}`} className="inline-flex items-center gap-2 text-ink-600 transition hover:text-brand-700">
                <Mail className="h-4 w-4" aria-hidden />
                {site.supportEmail}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-600 transition hover:text-brand-700"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-labelledby={`footer-${col.title}`}>
            <p id={`footer-${col.title}`} className="text-sm font-semibold text-ink">
              {col.title}
            </p>
            <ul className="mt-3 space-y-0.5">
              {col.links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="inline-block py-1.5 text-sm text-ink-500 transition hover:text-brand-700">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 text-xs leading-relaxed text-ink-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Settsmartly. All rights reserved.</p>
        <p className="max-w-xl md:text-right">
          Settsmartly keeps track of shared expenses. It is not a bank or a wallet and never holds money; payments are
          made in your own UPI or payment app.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
