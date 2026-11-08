import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Home as HomeIcon,
  ShoppingBasket,
  Zap,
  DoorOpen,
  FileText,
  Check,
} from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatusBadge from '../components/StatusBadge'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, GroupScreen, AnalyticsScreen, SettleScreen } from '../components/PhoneMockup'
import { flatmateFaqs, sampleMonth } from '../data/content'

const monthTimeline = [
  {
    icon: HomeIcon,
    when: '1st of the month',
    t: 'Rent is due',
    d: 'Whoever pays the landlord adds it once, and everyone sees their share straight away.',
    planned: false,
  },
  {
    icon: ShoppingBasket,
    when: 'Every week',
    t: 'Groceries and supplies',
    d: 'Add a BigBasket order or a run to the shop in a few seconds, split between just the people it was for.',
    planned: false,
  },
  {
    icon: Zap,
    when: '10th–15th',
    t: 'The utility bills arrive',
    d: 'Electricity, water and Wi-Fi sit on a bill calendar with reminders, so nothing is paid late.',
    planned: true,
  },
  {
    icon: DoorOpen,
    when: 'Whenever it happens',
    t: 'Someone moves in or out',
    d: 'Their share is worked out using the rule your flat agreed on, and they’re added or removed from the right date.',
    planned: true,
  },
  {
    icon: FileText,
    when: 'End of the month',
    t: 'Statement and settling up',
    d: 'One statement for the whole flat, and the fewest payments needed to square everything up.',
    planned: false,
  },
]

const fixes = [
  { pain: '“Who paid for the gas cylinder?”', fix: 'Every expense goes into one shared record, not 400 messages up a WhatsApp group.' },
  { pain: 'The same spreadsheet maths every month', fix: 'Shares and balances are worked out for you, to the paisa.' },
  { pain: 'Four people paying four different bills', fix: 'Each person’s balance takes into account everything they’ve paid.' },
  { pain: 'Chasing someone for money', fix: 'Reminders come from the app, so you don’t have to be the one asking.' },
  { pain: 'Someone leaving halfway through the month', fix: 'Their share is settled using your flat’s rule, and the history stays intact.' },
  { pain: 'Nobody has the full picture', fix: 'One monthly statement that everyone in the flat can see.' },
]


const inr = (n: number) => '₹' + n.toLocaleString('en-IN')

const Flatmates = () => {
  const total = sampleMonth.rows.reduce((s, r) => s + r.amount, 0)
  return (
    <>
      <PageMeta path="/flatmates" />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-[1.06] sm:text-[3.5rem]">
              <span className="eyebrow font-sans leading-normal">Flatmate &amp; roommate expense tracker</span>
              <span className="sr-only"> – </span>
              <span className="mt-4 block">Five people, one flat, one set of bills</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
              Rent on the 1st, groceries every week, electricity whenever it turns up, and somebody always moving in or
              out. Settsmartly keeps track of all of it so nobody has to be the flat’s accountant.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/get-started" className="btn-primary px-6 py-3.5 text-base">
                Join the beta for your flat <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary px-6 py-3.5 text-base">
                How it works
              </Link>
            </div>
            <p className="mt-5 text-sm text-ink-500">Closed beta starting in Bengaluru. Free to use.</p>
          </div>
          <Reveal delay={100} className="relative mx-auto">
            <PhoneFrame>
              <GroupScreen />
            </PhoneFrame>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading
            eyebrow="A month in a shared flat"
            title="From rent day to settling up"
            description="Every part of your flat’s month has a place in Settsmartly, in the order it actually happens."
          />
          <ol className="relative mx-auto mt-14 max-w-3xl">
            <span aria-hidden className="absolute bottom-6 left-[22px] top-6 w-px bg-brand-100" />
            {monthTimeline.map((m, i) => (
              <Reveal as="li" key={m.t} delay={i * 60} className="relative flex gap-5 pb-8 last:pb-0">
                <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700">
                  <m.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 rounded-2xl border border-ink-100 bg-white p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-brand-700">{m.when}</span>
                    {m.planned && <StatusBadge status="planned" />}
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold">{m.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ink-50/60">
        <div className="container-site">
          <SectionHeading eyebrow="Sound familiar?" title="The arguments we’d like to retire" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fixes.map((f, i) => (
              <Reveal key={f.pain} delay={(i % 3) * 60} className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6">
                <p className="font-display text-lg font-bold text-ink">{f.pain}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{f.fix}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 [&>*]:min-w-0">
          <div>
            <SectionHeading
              align="left"
              eyebrow="One month, accounted for"
              title={`Where ${inr(total)} went last month`}
              description="A typical month for five flatmates. Settsmartly shows where the money went, who paid for what, and the four payments that settle it."
            />
            <ul className="mt-8 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white px-5">
              {sampleMonth.rows.map((r) => (
                <li key={r.label} className="flex justify-between py-3 text-[15px]">
                  <span className="text-ink-700">{r.label}</span>
                  <span className="amount font-semibold text-ink">{inr(r.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={100} className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <PhoneFrame className="sm:scale-95">
              <AnalyticsScreen />
            </PhoneFrame>
            <PhoneFrame className="hidden sm:block sm:scale-95">
              <SettleScreen />
            </PhoneFrame>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site">
          <Reveal className="grid gap-8 rounded-3xl bg-brand-700 p-8 text-white sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-brand-200">Starting in Bengaluru</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Help us build it with your flat</h2>
              <p className="mt-3 text-lg leading-relaxed text-brand-100">
                We’re opening a closed beta for a small number of flats in Bengaluru first, then Hyderabad, Pune, Chennai and
                Mumbai. Tell us how your flat handles money today and we’ll build around that.
              </p>
            </div>
            <ul className="space-y-3">
              {['Early access for everyone in your flat', 'A direct line to the people building it', 'A real say in how the voice assistant works'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white">
                  <Check className="h-4 w-4 shrink-0 text-brand-200" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
              <li className="pt-3">
                <Link to="/get-started" className="btn bg-white px-6 text-brand-800 hover:bg-brand-50">
                  Join the beta waitlist <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink-50/60">
        <div className="container-site max-w-3xl">
          <SectionHeading title="Questions flatmates ask" />
          <p className="mt-4 text-center text-ink-600">
            Sorting it out by hand for now? Our guides cover{' '}
            <Link to="/guides/split-rent-with-flatmates" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              splitting rent fairly
            </Link>
            ,{' '}
            <Link to="/guides/split-electricity-bill" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              splitting the electricity bill
            </Link>{' '}
            and{' '}
            <Link to="/guides/flatmate-moving-out" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              settling up when a flatmate moves out
            </Link>
            .
          </p>
          <Reveal className="mt-10">
            <FaqList items={flatmateFaqs} />
          </Reveal>
        </div>
      </section>

      <div className="pt-20 sm:pt-24 lg:pt-28">
        <CtaBand source="flatmates" />
      </div>
    </>
  )
}

export default Flatmates
