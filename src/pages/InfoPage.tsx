import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import { AppIcon } from '../components/Logo'
import { site } from '../config'

/**
 * Pre-launch pages for routes that exist in the navigation but have no live product behind them yet.
 */
type Kind = 'login' | 'careers'

const pages: Record<Kind, { title: string; heading: string; body: string; path: string }> = {
  login: {
    title: 'Log In – Settsmartly',
    heading: "The Settsmartly app isn't open yet",
    body: "We're building the app right now. Join the waitlist and we'll email you as soon as you can create your account.",
    path: '/login',
  },
  careers: {
    title: 'Careers – Settsmartly',
    heading: 'Careers at Settsmartly',
    body: `We don't have open roles listed right now. If you'd like to help build the future of shared money in India, write to us at ${site.businessEmail}.`,
    path: '/careers',
  },
}

const InfoPage = ({ kind }: { kind: Kind }) => {
  const p = pages[kind]
  return (
    <>
      <PageMeta title={p.title} description={p.body.slice(0, 155)} path={p.path} />
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
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default InfoPage
