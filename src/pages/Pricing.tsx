import { Link } from 'react-router-dom'
import { Check, Info } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { plans, pricingFaqs } from '../data/content'


const Pricing = () => (
  <>
    <PageMeta path="/pricing" />
    <section className="bg-gradient-to-b from-brand-50 to-white pb-20 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="Free for every flat. Upgrade for more AI."
          description="Splitting, balances and your own records will always be free. Optional plans add the voice assistant, bill automation and advanced household tools."
        />
        <Reveal className="mx-auto mt-8 flex max-w-xl items-start gap-3 rounded-2xl bg-white p-4 text-sm text-ink-600 ring-1 ring-ink-100">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
          <p>
            Settsmartly is not live yet, so plans are not available to purchase. The plan structure below is our
            current proposal and may change before launch.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 ${
                  p.highlight ? 'bg-brand-700 text-white shadow-lift' : 'border border-ink-100 bg-white shadow-card'
                }`}
              >
                {p.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most complete
                  </span>
                )}
                <h2 className={`text-xl font-extrabold ${p.highlight ? 'text-white' : ''}`}>{p.name}</h2>
                <p className={`mt-2 min-h-[48px] text-sm leading-relaxed ${p.highlight ? 'text-brand-100' : 'text-ink-600'}`}>
                  {p.description}
                </p>
                <p className={`amount mt-6 font-display text-3xl font-extrabold ${p.highlight ? 'text-white' : 'text-ink'}`}>
                  {p.priceLabel}
                </p>
                <p className={`mt-1 text-xs ${p.highlight ? 'text-brand-200' : 'text-ink-500'}`}>{p.priceNote}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${p.highlight ? 'text-white' : 'text-ink-700'}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? 'text-brand-200' : 'text-brand-700'}`} strokeWidth={3} />
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
