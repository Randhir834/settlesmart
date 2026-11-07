import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Home as HomeIcon,
  ShoppingBasket,
  Zap,
  DoorOpen,
  FileText,
  MessageCircle,
  Calculator,
  BellRing,
  Users,
  Eye,
  MapPin,
  Check,
} from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatusBadge from '../components/StatusBadge'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { AppIcon } from '../components/Logo'
import { PhoneFrame, GroupScreen, AnalyticsScreen, SettleScreen } from '../components/PhoneMockup'
import { faqs, sampleMonth } from '../data/content'

const monthTimeline = [
  {
    icon: HomeIcon,
    when: '1st of the month',
    t: 'Rent is due',
    d: 'Whoever pays the landlord records it once, and everyone sees their share straight away.',
    planned: false,
  },
  {
    icon: ShoppingBasket,
    when: 'Every week',
    t: 'Groceries and supplies',
    d: 'Add a BigBasket order or a cleaning run in seconds, shared with just the people it’s for.',
    planned: false,
  },
  {
    icon: Zap,
    when: '10th–15th',
    t: 'Utilities arrive',
    d: 'Electricity, water and internet sit on the bill calendar with reminders, so nobody pays late.',
    planned: true,
  },
  {
    icon: DoorOpen,
    when: 'Whenever it happens',
    t: 'Someone moves in or out',
    d: 'Their share is worked out using your flat’s policy, and they’re added or removed from the right date.',
    planned: true,
  },
  {
    icon: FileText,
    when: 'End of the month',
    t: 'Statement and settle-up',
    d: 'One monthly statement for the flat and suggested settlements to close the month.',
    planned: false,
  },
]

const fixes = [
  { icon: MessageCircle, pain: '“Who paid for the gas cylinder?”', fix: 'Every expense in one shared household record, not buried in WhatsApp.' },
  { icon: Calculator, pain: 'Spreadsheet maths every month', fix: 'Shares and balances calculated exactly, to the paisa.' },
  { icon: Users, pain: 'Different people pay different bills', fix: 'Member-wise balances that account for who paid what.' },
  { icon: BellRing, pain: 'Awkward payment reminders', fix: 'Bill reminders and settlement nudges that come from the app, not from you.' },
  { icon: DoorOpen, pain: 'A flatmate leaves mid-month', fix: 'Move-out tools that settle their share and keep history intact.' },
  { icon: Eye, pain: 'Nobody sees the full picture', fix: 'A monthly household statement everyone can see.' },
]

const flatmateFaqs = faqs.filter((f) =>
  ['How is it different from a bill-splitting app?', 'What happens when a flatmate moves out?', 'Does Settsmartly move or hold my money?', 'Is Settsmartly free?', 'When and where are you launching?'].includes(f.q),
)

const inr = (n: number) => '₹' + n.toLocaleString('en-IN')

const Flatmates = () => {
  const total = sampleMonth.rows.reduce((s, r) => s + r.amount, 0)
  return (
    <>
      <PageMeta
        title="For Flatmates – Settsmartly | Rent, Bills & Expenses for Shared Flats"
        description="Settsmartly is built for flatmates and working professionals sharing a rented flat: rent, utilities, groceries, move-ins and move-outs, and monthly settlements in one place."
        path="/flatmates"
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <AppIcon className="h-12 w-12 drop-shadow-lg" />
              <span className="eyebrow">For flatmates &amp; working professionals</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              Built for flats like <span className="text-brand-700">yours.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
              Two to five people, one rented flat and the same bills every month. Settsmartly runs your flat’s money so
              nobody has to be the household accountant.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/get-started" className="btn-primary px-6 py-3.5 text-base">
                Join the beta for your flat <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/voice-assistant" className="btn-secondary px-6 py-3.5 text-base">
                See the voice assistant
              </Link>
            </div>
            <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-500">
              <MapPin className="h-4 w-4 text-brand-500" /> Closed beta starting in Bengaluru
            </p>
          </div>
          <Reveal delay={100} className="relative mx-auto">
            <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/60 blur-3xl" />
            <PhoneFrame>
              <GroupScreen />
            </PhoneFrame>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading
            eyebrow="Your flat’s month"
            title="Settsmartly follows the rhythm of a shared home"
            description="From rent on the 1st to settling up at month-end, every part of your flat’s money cycle has a place."
          />
          <ol className="relative mx-auto mt-14 max-w-3xl">
            <span aria-hidden className="absolute bottom-6 left-[22px] top-6 w-px bg-brand-100" />
            {monthTimeline.map((m, i) => (
              <Reveal as="li" key={m.t} delay={i * 60} className="relative flex gap-5 pb-8 last:pb-0">
                <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white shadow-lift">
                  <m.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">{m.when}</span>
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
          <SectionHeading eyebrow="Sound familiar?" title="The flatmate problems we’re fixing" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fixes.map((f, i) => (
              <Reveal key={f.pain} delay={(i % 3) * 60} className="card flex flex-col p-6">
                <f.icon className="h-6 w-6 text-brand-700" />
                <p className="mt-4 font-display text-lg font-bold text-ink">{f.pain}</p>
                <p className="mt-3 flex items-start gap-2 text-[15px] leading-relaxed text-ink-600">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-positive" strokeWidth={3} />
                  {f.fix}
                </p>
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
              eyebrow="One month, fully accounted for"
              title={`${inr(total)} spent. Every rupee explained.`}
              description="Here’s a typical month for five flatmates. Settsmartly shows where it went, who paid what, and the four payments that settle it."
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
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
                <MapPin className="h-3.5 w-3.5" /> Starting in Bengaluru
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Help us build it with your flat.</h2>
              <p className="mt-3 text-lg leading-relaxed text-brand-100">
                We’re talking to flatmates and opening a closed beta for a small number of households in Bengaluru first,
                then Hyderabad, Pune, Chennai and Mumbai. Tell us how your flat handles money today.
              </p>
            </div>
            <ul className="space-y-3">
              {['Early access for your whole flat', 'A direct line to the team building it', 'Your feedback shapes the voice assistant'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
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
          <SectionHeading title="Questions from flatmates" />
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
