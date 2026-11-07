import type { ReactNode } from 'react'
import { Check, Bell, Camera, Download, Search, Zap, Wifi, Home as HomeIcon, Tv } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatusBadge from '../components/StatusBadge'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, GroupScreen, AddExpenseScreen, SettleScreen, AnalyticsScreen } from '../components/PhoneMockup'
import { features, type Feature } from '../data/content'

const byId = (id: string) => features.find((f) => f.id === id) as Feature

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-6 space-y-3">
    {items.map((d) => (
      <li key={d} className="flex items-start gap-3 text-[15px] text-ink-700">
        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        {d}
      </li>
    ))}
  </ul>
)

const FeatureRow = ({ feature, visual, reverse }: { feature: Feature; visual: ReactNode; reverse?: boolean }) => (
  <section id={feature.id} className="scroll-mt-24 py-14 sm:py-20">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={reverse ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <feature.icon className="h-5 w-5" />
          </span>
          <StatusBadge status={feature.status} />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{feature.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-600">{feature.description}</p>
        <Bullets items={feature.details} />
      </Reveal>
      <Reveal delay={100} className={`relative flex justify-center ${reverse ? 'lg:order-1' : ''}`}>
        <div aria-hidden className="absolute inset-x-6 inset-y-10 -z-10 rounded-[3rem] bg-brand-50" />
        {visual}
      </Reveal>
    </div>
  </section>
)

/* Small visuals for the secondary features */

const RealtimeVisual = () => (
  <div className="space-y-2">
    {[
      { who: 'Riya', what: 'added "Cab to airport"', amt: '₹1,120', t: 'now' },
      { who: 'Dev', what: 'edited "Hotel – night 2"', amt: '₹6,400', t: '2m' },
      { who: 'Kabir', what: 'settled with you', amt: '₹620', t: '1h' },
    ].map((a) => (
      <div key={a.what} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-ink-100">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">{a.who[0]}</span>
        <p className="min-w-0 flex-1 text-sm text-ink-700">
          <span className="font-semibold text-ink">{a.who}</span> {a.what}
        </p>
        <span className="amount shrink-0 text-sm font-semibold text-ink">{a.amt}</span>
        <span className="w-6 shrink-0 text-right text-xs text-ink-400">{a.t}</span>
      </div>
    ))}
  </div>
)

const RecurringVisual = () => (
  <div className="space-y-2">
    {[
      { icon: HomeIcon, n: 'Rent', d: 'Every 1st', a: '₹42,000' },
      { icon: Zap, n: 'Electricity', d: 'Every 10th', a: '~₹1,900' },
      { icon: Wifi, n: 'Wi-Fi', d: 'Every 15th', a: '₹999' },
      { icon: Tv, n: 'OTT subscription', d: 'Every 22nd', a: '₹649' },
    ].map((r) => (
      <div key={r.n} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-ink-100">
        <r.icon className="h-4 w-4 shrink-0 text-brand-700" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{r.n}</p>
          <span className="flex items-center gap-1 text-xs text-ink-500 sm:hidden">
            <Bell className="h-3 w-3" /> {r.d}
          </span>
        </div>
        <span className="hidden shrink-0 items-center gap-1 text-xs text-ink-500 sm:flex">
          <Bell className="h-3 w-3" /> {r.d}
        </span>
        <span className="amount shrink-0 text-right text-sm font-semibold text-ink sm:w-20">{r.a}</span>
      </div>
    ))}
  </div>
)

const ReceiptVisual = () => (
  <div className="flex gap-3">
    <div className="flex w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-xl bg-white p-3 text-center ring-1 ring-ink-100">
      <Camera className="h-6 w-6 text-brand-700" />
      <span className="text-xs text-ink-500">Snap a bill</span>
    </div>
    <div className="min-w-0 flex-1 space-y-1.5 rounded-xl bg-white p-3 text-sm ring-1 ring-ink-100">
      {[
        ['Merchant', 'Spar Hypermarket'],
        ['Date', '04 Nov'],
        ['Category', 'Groceries'],
        ['Total', '₹2,486.50'],
      ].map(([k, v]) => (
        <div key={k} className="flex justify-between gap-2">
          <span className="text-ink-500">{k}</span>
          <span className="amount truncate text-right font-semibold text-ink">{v}</span>
        </div>
      ))}
      <p className="pt-1 text-xs text-brand-700">Review before saving</p>
    </div>
  </div>
)

const HistoryVisual = () => (
  <div className="rounded-xl bg-white p-3 ring-1 ring-ink-100">
    <div className="flex items-center gap-2 rounded-lg bg-ink-50 px-3 py-2 text-sm text-ink-400">
      <Search className="h-4 w-4" /> Search expenses
    </div>
    <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
      {['October', 'Groceries', 'Paid by me'].map((c) => (
        <span key={c} className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700">
          {c}
        </span>
      ))}
    </div>
    <div className="mt-3 flex items-center justify-between border-t border-ink-100 pt-3 text-sm">
      <span className="text-ink-600">
        14 expenses · <span className="amount font-semibold text-ink">₹9,214</span>
      </span>
      <span className="inline-flex items-center gap-1 font-semibold text-brand-700">
        <Download className="h-4 w-4" /> Export
      </span>
    </div>
  </div>
)

const secondary: { id: string; visual: ReactNode }[] = [
  { id: 'realtime', visual: <RealtimeVisual /> },
  { id: 'recurring', visual: <RecurringVisual /> },
  { id: 'receipts', visual: <ReceiptVisual /> },
  { id: 'history', visual: <HistoryVisual /> },
]

const Features = () => (
  <>
    <PageMeta
      title="Features – Settsmartly"
      description="Smart expense splitting, group management, UPI settlements, recurring bills, receipt scanning and spending analytics. Everything you need to manage shared money."
      path="/features"
    />
    <section className="bg-gradient-to-b from-brand-50 to-white pb-6 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="Features"
          title="Everything you need to manage shared money"
          description="From splitting a single dinner bill to running a whole household's monthly expenses, Settsmartly keeps every rupee accounted for."
        />
        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {features.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-200 hover:text-brand-700"
            >
              <f.icon className="h-4 w-4 text-brand-700" /> {f.title}
            </a>
          ))}
        </Reveal>
        <Reveal className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-500">
          Settsmartly is in development. Features marked <StatusBadge status="planned" /> are on our roadmap and not
          yet available.
        </Reveal>
      </div>
    </section>

    <FeatureRow feature={byId('splitting')} visual={<PhoneFrame><AddExpenseScreen /></PhoneFrame>} />
    <div className="bg-ink-50/60">
      <FeatureRow feature={byId('groups')} visual={<PhoneFrame><GroupScreen /></PhoneFrame>} reverse />
    </div>
    <FeatureRow feature={byId('upi')} visual={<PhoneFrame><SettleScreen /></PhoneFrame>} />
    <div className="bg-ink-50/60">
      <FeatureRow feature={byId('analytics')} visual={<PhoneFrame><AnalyticsScreen /></PhoneFrame>} reverse />
    </div>

    <section className="section">
      <div className="container-site">
        <SectionHeading eyebrow="And more" title="Built for the way shared money actually works" />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {secondary.map(({ id, visual }, i) => {
            const f = byId(id)
            return (
              <Reveal key={id} delay={(i % 2) * 80} className="min-w-0">
                <article id={id} className="scroll-mt-24 flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <StatusBadge status={f.status} />
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold">{f.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-600">{f.description}</p>
                  <Bullets items={f.details} />
                  <div className="mt-8 rounded-2xl bg-brand-50 p-4">{visual}</div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>

    <CtaBand source="features" />
  </>
)

export default Features
