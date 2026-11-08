import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ArrowRight, Clock, Check } from 'lucide-react'
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
      <h2 className="text-lg font-extrabold">What we’re building</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
        Settsmartly is a household financial management platform for people who live together, starting with flatmates
        in Bengaluru: shared expenses, recurring bills, roommate changes and an{' '}
        <Link to="/voice-assistant" className="font-semibold text-brand-700 hover:underline">
          AI voice assistant
        </Link>{' '}
        that understands English, Hindi and Hinglish.
      </p>
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
      <h2 className="text-lg font-extrabold">Who we’d like to hear from</h2>
      <ul className="mt-3 space-y-2 text-[15px] text-ink-600">
        {['Engineers who care about getting money right', 'Designers who make complex things feel simple', 'People who have lived the chaos of a shared flat'].map((t) => (
          <li key={t} className="flex items-start gap-2">
            <Check className="mt-1 h-4 w-4 shrink-0 text-brand-700" strokeWidth={3} />
            {t}
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:col-span-2">
      <h2 className="text-lg font-extrabold">How to reach us</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
        Email{' '}
        <a href={`mailto:${site.businessEmail}`} className="font-semibold text-brand-700 hover:underline">
          {site.businessEmail}
        </a>{' '}
        with a few lines about yourself, what you’d like to work on and a link to something you’ve built or written. Read{' '}
        <Link to="/about" className="font-semibold text-brand-700 hover:underline">
          about Settsmartly
        </Link>{' '}
        to learn more about our mission.
      </p>
    </div>
  </div>
)

const pages: Record<Kind, { heading: string; body: string; path: PagePath; detail?: ReactNode }> = {
  login: {
    heading: "The Settsmartly app isn't open yet",
    body: "We're building the app right now. Join the waitlist and we'll email you as soon as you can create your account.",
    path: '/login',
  },
  careers: {
    heading: 'Careers at Settsmartly',
    body: `We don't have open roles listed right now. If you'd like to help build the future of shared money in India, write to us at ${site.businessEmail}.`,
    path: '/careers',
    detail: careersDetail,
  },
}

const InfoPage = ({ kind }: { kind: Kind }) => {
  const p = pages[kind]
  return (
    <>
      <PageMeta path={p.path} />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-site flex min-h-[60vh] max-w-2xl flex-col items-center justify-center py-20 text-center">
          <Reveal>
            <span className="relative mx-auto inline-flex">
              <AppIcon className="h-20 w-20 drop-shadow-lg" />
              <span className="absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-700 shadow-card">
                <Clock className="h-4 w-4" />
              </span>
            </span>
            <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{p.heading}</h1>
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
