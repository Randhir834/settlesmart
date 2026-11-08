import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import PageMeta, { type PagePath } from '../components/PageMeta'
import Reveal from '../components/Reveal'
import { AppIcon } from '../components/Logo'
import { site } from '../config'

/**
 * Pre-launch pages for routes that exist in the navigation but have no live product behind them yet.
 */
type Kind = 'login' | 'careers'

const careersDetail = (
  <div className="mt-12 grid gap-5 text-left sm:grid-cols-2">
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
      <h2 className="text-lg font-bold">What we’re building</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
        An app that keeps track of shared money for people who live together, starting with flatmates in Bengaluru:
        expenses, recurring bills, people moving in and out, and a{' '}
        <Link to="/voice-assistant" className="font-semibold text-brand-700 hover:underline">
          voice assistant
        </Link>{' '}
        that understands English, Hindi and Hinglish.
      </p>
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
      <h2 className="text-lg font-bold">Who we’d like to hear from</h2>
      <ul className="mt-3 space-y-2 text-[15px] text-ink-600">
        {['Engineers who care about getting money exactly right', 'Designers who can make fiddly things feel simple', 'Anyone who has lived through a messy shared flat and has ideas'].map((t) => (
          <li key={t} className="flex items-start gap-2">
            <Check className="mt-1 h-4 w-4 shrink-0 text-brand-700" strokeWidth={2.5} />
            {t}
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:col-span-2">
      <h2 className="text-lg font-bold">How to reach us</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
        Email{' '}
        <a href={`mailto:${site.businessEmail}`} className="font-semibold text-brand-700 hover:underline">
          {site.businessEmail}
        </a>{' '}
        with a few lines about yourself, what you’d like to work on and a link to something you’ve built or written. You
        can read more{' '}
        <Link to="/about" className="font-semibold text-brand-700 hover:underline">
          about Settsmartly
        </Link>{' '}
        first.
      </p>
    </div>
  </div>
)

const pages: Record<Kind, { heading: string; body: string; path: PagePath; detail?: ReactNode }> = {
  login: {
    heading: 'The Settsmartly app isn’t open yet',
    body: 'We’re still building it. Join the waitlist and we’ll email you as soon as you can create an account.',
    path: '/login',
  },
  careers: {
    heading: 'Careers at Settsmartly',
    body: 'We’re not hiring for any specific roles right now, but we’re a small team and always happy to hear from good people.',
    path: '/careers',
    detail: careersDetail,
  },
}

const InfoPage = ({ kind }: { kind: Kind }) => {
  const p = pages[kind]
  return (
    <>
      <PageMeta path={p.path} />
      <section className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-site flex min-h-[60vh] max-w-2xl flex-col items-center justify-center py-20 text-center">
          <Reveal>
            <AppIcon className="mx-auto h-16 w-16" />
            <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{p.heading}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{p.body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/get-started" className="btn-primary">
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/" className="btn-secondary">
                Back to home
              </Link>
            </div>
            {p.detail}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default InfoPage
