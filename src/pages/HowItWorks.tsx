import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Smartphone, Link2, Check, Bell, Home as HomeIcon, Zap, Wifi, Tv, Droplets } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, VoiceScreen, AddExpenseScreen, SettleScreen } from '../components/PhoneMockup'
import { steps } from '../data/content'

const OtpVisual = () => (
  <div className="w-full max-w-xs rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink-100">
    <Smartphone className="h-7 w-7 text-brand-700" />
    <p className="mt-4 font-display text-lg font-bold">Verify your number</p>
    <p className="amount mt-1 text-sm text-ink-500">Code sent to +91 98XXX XXX21</p>
    <div className="mt-5 grid grid-cols-6 gap-2">
      {['4', '8', '2', '9', '', ''].map((d, i) => (
        <span
          key={i}
          className={`amount flex h-11 items-center justify-center rounded-lg text-lg font-bold ${
            d ? 'bg-brand-50 text-ink ring-1 ring-brand-200' : i === 4 ? 'ring-2 ring-brand-500' : 'ring-1 ring-ink-200'
          }`}
        >
          {d}
        </span>
      ))}
    </div>
    <span className="mt-6 block rounded-xl bg-brand-700 py-3 text-center text-sm font-semibold text-white">Verify</span>
  </div>
)

const InviteVisual = () => (
  <div className="w-full max-w-xs rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink-100">
    <p className="font-display text-lg font-bold">Bangalore Flat</p>
    <p className="mt-1 text-sm text-ink-500">Invite flatmates</p>
    <div className="mt-4 flex items-center gap-2 rounded-xl bg-ink-50 px-3 py-2.5 text-sm text-ink-600">
      <Link2 className="h-4 w-4 text-brand-700" /> settsmartly.com/join/k7q2m
    </div>
    <ul className="mt-4 space-y-2.5">
      {['Aman', 'Neha', 'Kabir', 'Riya'].map((n, i) => (
        <li key={n} className="flex items-center gap-3 text-sm">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">{n[0]}</span>
          <span className="flex-1">
            <span className="block font-medium text-ink">{n}</span>
            <span className="block text-xs text-ink-500">Moved in {['1 Jun', '1 Jun', '15 Aug', '1 Sep'][i]}</span>
          </span>
          {i < 3 ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-positive">
              <Check className="h-3.5 w-3.5" /> Joined
            </span>
          ) : (
            <span className="text-xs font-medium text-ink-500">Invited</span>
          )}
        </li>
      ))}
    </ul>
  </div>
)

const BillsVisual = () => (
  <div className="w-full max-w-xs rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink-100">
    <p className="font-display text-lg font-bold">November bills</p>
    <p className="mt-1 text-sm text-ink-500">Bangalore Flat · 5 members</p>
    <ul className="mt-4 space-y-2.5">
      {[
        { icon: HomeIcon, n: 'Rent', d: 'Due 1st', a: '₹15,000', s: 'Paid' },
        { icon: Zap, n: 'Electricity', d: 'Due 10th', a: '₹2,000', s: 'Due in 3d' },
        { icon: Droplets, n: 'Water & maintenance', d: 'Due 12th', a: '₹1,500', s: 'Upcoming' },
        { icon: Wifi, n: 'Internet', d: 'Due 15th', a: '₹999', s: 'Upcoming' },
        { icon: Tv, n: 'Streaming', d: 'Due 22nd', a: '₹649', s: 'Upcoming' },
      ].map((b) => (
        <li key={b.n} className="flex items-center gap-3 text-sm">
          <b.icon className="h-4 w-4 shrink-0 text-brand-700" />
          <span className="min-w-0 flex-1">
            <span className="block truncate font-medium text-ink">{b.n}</span>
            <span className="block text-xs text-ink-500">{b.d}</span>
          </span>
          <span className="text-right">
            <span className="amount block font-semibold text-ink">{b.a}</span>
            <span className={`block text-[11px] font-semibold ${b.s === 'Paid' ? 'text-positive' : b.s.startsWith('Due') ? 'text-amber-700' : 'text-ink-500'}`}>{b.s}</span>
          </span>
        </li>
      ))}
    </ul>
    <p className="mt-4 flex items-center gap-1.5 rounded-xl bg-brand-50 px-3 py-2 text-xs font-medium text-brand-800">
      <Bell className="h-3.5 w-3.5" /> Everyone is reminded 2 days before
    </p>
  </div>
)

/** Shown under steps that rely on features that aren't live yet. */
const notes: Record<number, string> = {
  2: 'Voice and receipt entry are still being built. Typing an expense in works from day one.',
  4: 'Recurring bills and reminders are still being built.',
  5: 'UPI payment links are still being built and will switch on once they’re fully tested. Settsmartly never moves money itself.',
}

const visuals: ReactNode[] = [
  <OtpVisual key="otp" />,
  <InviteVisual key="invite" />,
  <PhoneFrame key="voice">
    <VoiceScreen />
  </PhoneFrame>,
  <PhoneFrame key="add">
    <AddExpenseScreen />
  </PhoneFrame>,
  <BillsVisual key="bills" />,
  <PhoneFrame key="settle">
    <SettleScreen />
  </PhoneFrame>,
]

const HowItWorks = () => (
  <>
    <PageMeta path="/how-it-works" />
    <section className="bg-gradient-to-b from-brand-50/60 to-white pb-4 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="Split flat expenses in six steps"
          title="How Settsmartly works"
          description="It takes a few minutes to set up your flat. After that, this is what a month looks like."
        />
      </div>
    </section>

    <div className="container-site">
      <ol className="relative">
        {steps.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <li key={s.title} className="grid items-center gap-10 border-b border-ink-100 py-16 last:border-0 lg:grid-cols-2 lg:gap-20 lg:py-20">
              <Reveal className={reverse ? 'lg:order-2' : ''}>
                <p className="amount font-display text-5xl font-bold text-brand-200" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-600">{s.description}</p>
                {notes[i] && (
                  <p className="mt-5 max-w-md border-l-2 border-amber-300 pl-4 text-sm leading-relaxed text-ink-600">{notes[i]}</p>
                )}
              </Reveal>
              <Reveal delay={100} className={`relative flex justify-center ${reverse ? 'lg:order-1' : ''}`}>
                {visuals[i]}
              </Reveal>
            </li>
          )
        })}
      </ol>
      <Reveal className="pb-20 text-center">
        <Link to="/features" className="btn-secondary">
          See every feature <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>

    <CtaBand source="how-it-works" />
  </>
)

export default HowItWorks
