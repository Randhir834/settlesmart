import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  X,
  Mic,
  Languages,
  Users,
  ShieldCheck,
  CheckCircle2,
  CalendarClock,
  Landmark,
  Calculator,
  History,
  MapPin,
  Sparkles,
} from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatusBadge from '../components/StatusBadge'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, VoiceScreen, MoveOutScreen } from '../components/PhoneMockup'
import {
  positioning,
  pillars,
  features,
  segments,
  steps,
  clarityPoints,
  faqs,
  voiceExamples,
  homeModules,
  sampleMonth,
  householdProblems,
} from '../data/content'

const inr = (n: number, paise = false) =>
  '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: paise ? 2 : 0, maximumFractionDigits: paise ? 2 : 0 })

const Hero = () => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-brand-50 to-white" />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(#D8BFFE_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
    />
    <div className="container-site grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-20">
      <div className="text-center lg:text-left">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Household finances for flatmates
        </span>
        <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-[4rem]">
          Your household. Your money. <span className="text-brand-700">One smart platform.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">{positioning.subhead}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <Link to="/get-started" className="btn-primary px-6 py-3.5 text-base">
            Join the waitlist <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#voice" className="btn-secondary px-6 py-3.5 text-base">
            <Mic className="h-4 w-4" /> See the voice assistant
          </a>
        </div>
        <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-500">
          <MapPin className="h-4 w-4 text-brand-500" />
          {positioning.launchNote}
        </p>
      </div>

      <Reveal delay={120} className="relative mx-auto">
        <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/60 blur-3xl" />
        <PhoneFrame className="mx-auto">
          <VoiceScreen />
        </PhoneFrame>
        <div className="absolute -left-6 top-[500px] hidden w-56 animate-float items-center gap-3 rounded-2xl border border-ink-100 bg-white p-3 shadow-lift sm:flex lg:-left-24">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <CalendarClock className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[11px] font-medium text-ink-500">Rent due in 3 days</p>
            <p className="amount text-sm font-bold text-ink">₹15,000 · 5 members</p>
          </div>
        </div>
        <div
          className="absolute -right-4 top-[590px] hidden items-center gap-2.5 rounded-2xl border border-ink-100 bg-white p-3 pr-4 shadow-lift sm:flex lg:-right-24"
          style={{ animation: 'float 6s ease-in-out 1.5s infinite' }}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-ink">Settled up</p>
            <p className="amount text-[11px] text-ink-500">Kabir paid you ₹620</p>
          </div>
        </div>
      </Reveal>
    </div>

    <div className="container-site pb-6">
      <Reveal>
        <div className="grid overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="-ml-px -mt-px flex items-center gap-4 border-l border-t border-ink-100 px-5 py-5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <p.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-extrabold text-ink">{p.title}</p>
                <p className="text-sm text-ink-500">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

const Problem = () => {
  const total = sampleMonth.rows.reduce((s, r) => s + r.amount, 0)
  return (
    <section className="section" id="why">
      <div className="container-site">
        <SectionHeading
          eyebrow="The problem"
          title="Running a shared home is more than splitting a bill."
          description="Five people, one flat, the same bills every month. Dividing the total is the easy part. Everything around it is where it falls apart."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-ink-100 bg-white p-7 shadow-card sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-500">A typical month · 5 flatmates</p>
            <ul className="mt-6 divide-y divide-ink-100">
              {sampleMonth.rows.map((r) => (
                <li key={r.label} className="flex items-center justify-between py-3 text-[15px]">
                  <span className="text-ink-700">{r.label}</span>
                  <span className="amount font-semibold text-ink">{inr(r.amount)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3">
              <span className="font-display font-bold text-ink">Household total</span>
              <span className="amount font-display text-xl font-extrabold text-brand-700">{inr(total)}</span>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              {inr(total)} ÷ {sampleMonth.people} ={' '}
              <span className="amount font-semibold text-ink">{inr(total / sampleMonth.people, true)}</span> each. If only it
              were that simple.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-ink-100 bg-ink-50 p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-500">What actually happens</p>
            <ul className="mt-6 space-y-3.5">
              {householdProblems.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-ink-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-negative ring-1 ring-ink-100">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-7 rounded-2xl bg-white p-4 font-display text-lg font-bold leading-snug text-ink ring-1 ring-ink-100">
              Settsmartly manages the whole month of a shared home, not just one bill.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const conversation = [
  { from: 'you', text: 'Add 500 for groceries.' },
  { from: 'ai', text: 'Should I add ₹500 to Bangalore Flat and split it equally among the 5 active members?' },
  { from: 'you', text: 'No, exclude Aman.' },
  { from: 'ai', text: 'Got it. ₹500 split among the other 4 members, ₹125 each. Shall I save it?' },
  { from: 'you', text: 'Confirm.' },
]

const Voice = () => (
  <section className="section relative overflow-hidden bg-ink text-white" id="voice">
    <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-brand-700/40 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl" />
    <div className="container-site relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
          <Sparkles className="h-3.5 w-3.5" /> Signature feature · Planned
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">Just speak. Your household gets organized.</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-300">
          No forms. Tell Settsmartly what happened, in English, Hindi or Hinglish, and it prepares the expense with the
          right amount, members and split, ready for you to confirm.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="grid gap-3 sm:grid-cols-2">
          {voiceExamples.map((v) => (
            <div key={v.said} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-300">
                {v.lang === 'Hinglish' ? <Languages className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />} {v.lang}
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-white">“{v.said}”</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={100} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">It asks when something’s unclear</p>
          <div className="mt-4 space-y-2.5">
            {conversation.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                  m.from === 'you' ? 'ml-auto rounded-br-md bg-brand-700 text-white' : 'rounded-bl-md bg-white text-ink'
                }`}
              >
                {m.text}
              </div>
            ))}
            <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-emerald-300">
              <CheckCircle2 className="h-4 w-4" /> Expense saved after confirmation
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-5">
          {[
            ['You speak', 'English, Hindi or Hinglish'],
            ['AI understands', 'Amount, payer, members, split'],
            ['Engine calculates', 'Shares computed exactly'],
            ['You confirm', 'Review the draft first'],
            ['Saved & shared', 'Balances update for all'],
          ].map(([t, d], i) => (
            <li key={t} className="bg-ink p-4">
              <span className="amount text-xs font-bold text-brand-300">0{i + 1}</span>
              <p className="mt-1 font-display text-sm font-bold text-white">{t}</p>
              <p className="mt-0.5 text-xs text-ink-400">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 flex items-start justify-center gap-2 text-center text-sm text-ink-300">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
          AI interprets what you say. Money is always calculated by our expense engine, and nothing is saved without your
          confirmation.
        </p>
      </Reveal>
    </div>
  </section>
)

const HomeModules = () => (
  <section className="section" id="household">
    <div className="container-site">
      <SectionHeading
        eyebrow="Household workspace"
        title="Every flat gets its own financial workspace."
        description="Rent, bills, groceries and everything else your home runs on, organized in one place with each member’s contribution."
      />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {homeModules.map((m, i) => (
          <Reveal key={m.title} delay={(i % 4) * 50} className="card-lavender p-5">
            <m.icon className="h-6 w-6 text-brand-700" />
            <h3 className="mt-4 text-base font-bold">{m.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{m.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const Roommates = () => (
  <section className="section bg-ink-50/60" id="roommates">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="eyebrow">Roommate changes</span>
            <StatusBadge status="planned" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Flatmates come and go. Your accounts stay right.</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            When Aman moves out on the 15th, Settsmartly works out his share using your flat’s agreed policy, settles
            what’s pending and stops including him in new expenses, without rewriting history.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            'Record move-in and move-out dates',
            'Pro-rata or full-month, your choice',
            'Pending balances settled before leaving',
            'Security deposits tracked separately',
            'Excluded from future expenses',
            'Replacement joins on the right date',
          ].map((t, i) => (
            <Reveal as="li" key={t} delay={i * 40} className="flex items-start gap-2.5 text-[15px] text-ink-700">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {t}
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-6 text-sm text-ink-500">
            Example: ₹15,000 rent shared by 5 is ₹3,000 each. Leaving after 15 of 30 days on a daily pro-rata policy
            means ₹1,500. Your flat decides the policy.
          </p>
        </Reveal>
      </div>
      <Reveal delay={100} className="relative flex justify-center">
        <div aria-hidden className="absolute inset-x-8 inset-y-6 -z-10 rounded-[3rem] bg-brand-100/60" />
        <PhoneFrame>
          <MoveOutScreen />
        </PhoneFrame>
      </Reveal>
    </div>
  </section>
)

const FeatureGrid = () => (
  <section className="section" id="features">
    <div className="container-site">
      <SectionHeading
        eyebrow="Features"
        title="Everything a shared home needs to manage money"
        description="Built around the complete monthly cycle of living together."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.id} delay={(i % 4) * 60}>
            <Link
              to={`/features#${f.id}`}
              className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <StatusBadge status={f.status} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{f.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const HowItWorks = () => (
  <section className="section bg-ink-50/60" id="how-it-works">
    <div className="container-site">
      <SectionHeading
        eyebrow="How it works"
        title="Your flat’s month, handled in six steps"
        description="Set it up once. Settsmartly keeps the household running."
      />
      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <span className="amount font-display text-sm font-extrabold text-brand-500">Step {String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.description}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-10 text-center">
        <Link to="/how-it-works" className="btn-secondary">
          See the full walkthrough <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  </section>
)

const ForWhom = () => {
  const [primary, ...rest] = segments
  return (
    <section className="section" id="for-whom">
      <div className="container-site">
        <SectionHeading
          eyebrow="Who it’s for"
          title="Built first for people who live together"
          description="We’re focusing on shared flats first, so the core experience is excellent before we expand."
        />
        <Reveal className="mt-14">
          <div className="grid gap-8 rounded-3xl bg-brand-700 p-8 text-white sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
                <Users className="h-3.5 w-3.5" /> Our focus
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">{primary.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-brand-100">{primary.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {primary.examples.map((e) => (
                <span key={e} className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/15">
                  {e}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="mt-10 text-center text-sm font-semibold uppercase tracking-wider text-ink-500">Also works for</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rest.map((s, i) => (
            <Reveal key={s.id} delay={i * 50} className="card-lavender p-5">
              <s.icon className="h-5 w-5 text-brand-700" />
              <h3 className="mt-3 text-base font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Illustrative month for Bangalore Flat (matches the sample month). Balance = paid − share; they sum to zero. */
const members = [
  { n: 'You', paid: 15000, note: 'rent' },
  { n: 'Neha', paid: 5000, note: 'groceries' },
  { n: 'Kabir', paid: 2999, note: 'electricity, internet' },
  { n: 'Riya', paid: 2500, note: 'water, supplies' },
  { n: 'Dev', paid: 0, note: 'nothing yet' },
]

const Clarity = () => {
  const total = members.reduce((s, m) => s + m.paid, 0)
  const share = total / members.length
  return (
    <section className="section bg-ink-50/60">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Clarity"
            title="Know where every rupee goes."
            description="Know who paid. Know what is pending. Manage everything together. Everyone in the flat can see:"
          />
          <ul className="mt-8 grid gap-3">
            {clarityPoints.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 40} className="flex items-center gap-3 text-base text-ink-700">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-brand-100">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {p}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={100}>
          <div className="card p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-ink-500">Bangalore Flat · November</p>
                <p className="font-display text-xl font-bold">Monthly statement</p>
              </div>
              <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">4 to settle</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { l: 'Household spent', v: inr(total) },
                { l: 'Each share', v: inr(share, true) },
                { l: 'You paid', v: inr(15000) },
              ].map((k) => (
                <div key={k.l} className="min-w-0 rounded-xl bg-ink-50 p-3">
                  <p className="text-xs text-ink-500">{k.l}</p>
                  <p className="amount mt-1 truncate font-display text-sm font-extrabold sm:text-lg">{k.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-ink">Balances</p>
            <ul className="mt-3 divide-y divide-ink-100">
              {members.map((m) => {
                const bal = m.paid - share
                const pos = bal > 0
                return (
                  <li key={m.n} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">{m.n[0]}</span>
                      <span className="min-w-0">
                        <span className="block font-medium text-ink">{m.n}</span>
                        <span className="block truncate text-xs text-ink-400">Paid {m.note}</span>
                      </span>
                    </span>
                    <span className={`amount shrink-0 font-semibold ${pos ? 'text-positive' : 'text-negative'}`}>
                      {pos ? '+' : '−'}
                      {inr(Math.abs(bal), true)}
                    </span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-4 text-xs text-ink-400">Illustrative example. Balances always add up to zero.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const Trust = () => (
  <section className="section">
    <div className="container-site">
      <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-brand-50 p-8 sm:p-12">
        <SectionHeading
          align="left"
          eyebrow="Trust"
          title="Your money. Your household. Your control."
          description="Shared money only works when everyone trusts the numbers. These principles are built into Settsmartly."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Landmark, t: 'Not a bank or wallet', d: 'We never hold or deduct your money. You pay through your own UPI or payment app.' },
            { icon: ShieldCheck, t: 'You approve every AI action', d: 'The assistant prepares drafts. Nothing is saved or changed until you confirm.' },
            { icon: Calculator, t: 'Exact calculations', d: 'Shares and balances are calculated by our expense engine, never estimated by AI.' },
            { icon: History, t: 'History you can trust', d: 'Edits are logged and past records are preserved, even when flatmates move out.' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60} className="rounded-2xl bg-white p-5 ring-1 ring-ink-100">
              <c.icon className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 text-base font-bold">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{c.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const FaqSection = () => (
  <section className="section bg-ink-50/60" id="faq">
    <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <div>
        <SectionHeading align="left" eyebrow="FAQ" title="Frequently asked questions" />
        <Reveal>
          <p className="mt-4 text-ink-600">
            Can’t find what you’re looking for?{' '}
            <Link to="/contact" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </Reveal>
      </div>
      <Reveal>
        <FaqList items={faqs} />
      </Reveal>
    </div>
  </section>
)

const Beta = () => (
  <section className="section pb-0">
    <div className="container-site">
      <Reveal className="grid items-center gap-6 rounded-3xl border border-brand-100 bg-brand-50 p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto]">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-card">
          <MapPin className="h-7 w-7" />
        </span>
        <div>
          <h2 className="text-2xl font-extrabold">Share a flat in Bengaluru?</h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            We’re building Settsmartly with real flatmates. Join the waitlist and tick “Happy to chat” to get early beta
            access and help shape how your household manages money.
          </p>
        </div>
        <Link to="/get-started" className="btn-primary justify-self-start lg:justify-self-end">
          Join the beta waitlist <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  </section>
)

const Home = () => (
  <>
    <PageMeta
      title="Settsmartly – Household Finance App for Flatmates | Rent, Bills & Shared Expenses"
      description="Settsmartly helps flatmates and working professionals in India manage rent, bills, groceries and settlements in one place, with an AI voice assistant. Join the waitlist."
      path="/"
    />
    <Hero />
    <Problem />
    <Voice />
    <HomeModules />
    <Roommates />
    <FeatureGrid />
    <HowItWorks />
    <ForWhom />
    <Clarity />
    <Trust />
    <FaqSection />
    <Beta />
    <div className="pt-20 sm:pt-24 lg:pt-28">
      <CtaBand source="home" />
    </div>
  </>
)

export default Home
