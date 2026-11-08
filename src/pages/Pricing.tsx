import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { plans, pricingFaqs } from '../data/content'


const Pricing = () => (
  <>
    <PageMeta path="/pricing" />
    <section className="bg-gradient-to-b from-brand-50/60 to-white pb-20 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="Settsmartly pricing"
          title="The basics are free, and they’ll stay free"
          description="Splitting expenses, balances and your full history cost nothing. Paid plans will add the voice assistant, recurring bills and a few extra tools for the whole flat."
        />
        <Reveal className="mx-auto mt-8 max-w-xl rounded-xl bg-white px-5 py-4 text-center text-sm leading-relaxed text-ink-600 ring-1 ring-ink-100">
          Settsmartly isn’t live yet, so nothing is for sale. These plans are our current thinking and may change before
          launch.
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  p.highlight ? 'bg-brand-700 text-white shadow-lift' : 'border border-ink-200 bg-white'
                }`}
              >
                {p.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white">
                    Most features
                  </span>
                )}
                <h2 className={`text-xl font-bold ${p.highlight ? 'text-white' : ''}`}>{p.name}</h2>
                <p className={`mt-2 min-h-[48px] text-sm leading-relaxed ${p.highlight ? 'text-brand-100' : 'text-ink-600'}`}>
                  {p.description}
                </p>
                <p className={`amount mt-6 font-display text-3xl font-bold ${p.highlight ? 'text-white' : 'text-ink'}`}>
                  {p.priceLabel}
                </p>
                <p className={`mt-1 text-xs ${p.highlight ? 'text-brand-200' : 'text-ink-500'}`}>{p.priceNote}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${p.highlight ? 'text-white' : 'text-ink-700'}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? 'text-brand-200' : 'text-brand-700'}`} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/get-started"
                  className={`mt-8 w-full ${p.highlight ? 'btn bg-white text-brand-800 hover:bg-brand-50' : p.id === 'free' ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {p.id === 'free' ? 'Join the waitlist' : 'Get notified'}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-600">
          Want the details first? Read about{' '}
          <Link to="/features" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
            each feature
          </Link>
          , see{' '}
          <Link to="/how-it-works" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
            how splitting works
          </Link>{' '}
          or find out more about the{' '}
          <Link to="/voice-assistant" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
            voice assistant
          </Link>
          .
        </p>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container-site max-w-3xl">
        <SectionHeading title="Pricing questions" />
        <Reveal className="mt-10">
          <FaqList items={pricingFaqs} />
        </Reveal>
      </div>
    </section>

    <CtaBand source="pricing" />
  </>
)

export default Pricing
