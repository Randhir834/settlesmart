import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  X,
  MessageCircle,
  Calculator,
  BellRing,
  Split,
  LineChart,
  BadgeCheck,
  Landmark,
  ShieldCheck,
  FolderLock,
  Eye,
  CheckCircle2,
} from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatusBadge from '../components/StatusBadge'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, GroupScreen } from '../components/PhoneMockup'
import { features, segments, steps, clarityPoints, faqs } from '../data/content'

const Hero = () => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-brand-50 to-white" />
    <div
      aria-hidden
      className="pointer-events-none absolute -z-10 opacity-60 [background-image:radial-gradient(#D8BFFE_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] inset-0"
    />
    <div className="container-site grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-20">
      <div className="text-center lg:text-left">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> A smarter way to share expenses
        </span>
        <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
          Sharing expenses, made <span className="text-brand-700">beautifully simple.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600 lg:mx-0">
          Split bills, track group expenses and settle payments with clarity. Whether it's rent with flatmates, a
          trip with friends or a dinner bill, everything shared is organized in one place.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <Link to="/get-started" className="btn-primary px-6 py-3.5 text-base">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/features" className="btn-secondary px-6 py-3.5 text-base">
            Explore Features
          </Link>
        </div>
        <p className="mt-5 text-sm text-ink-500">
          Launching soon in India · <span className="font-medium text-ink-700">Join the waitlist for early access</span>
        </p>
      </div>

      <Reveal delay={120} className="relative mx-auto">
        <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/60 blur-3xl" />
        <PhoneFrame className="mx-auto">
          <GroupScreen />
        </PhoneFrame>
        <div className="absolute -left-6 top-[500px] hidden w-52 animate-float rounded-2xl border border-ink-100 bg-white p-3 shadow-lift sm:block lg:-left-20">
          <p className="text-[11px] font-medium text-ink-500">Neha added an expense</p>
          <p className="mt-0.5 text-sm font-bold text-ink">Groceries – BigBasket</p>
          <p className="amount mt-1 text-xs text-ink-600">
            Your share <span className="font-semibold text-negative">₹880</span>
          </p>
        </div>
        <div
          className="absolute -right-4 top-20 hidden items-center gap-2.5 rounded-2xl border border-ink-100 bg-white p-3 pr-4 shadow-lift sm:flex lg:-right-28"
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
        <div className="grid divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: Split, t: 'Split', d: 'Expenses fairly' },
            { icon: LineChart, t: 'Track', d: 'Every transaction' },
            { icon: BadgeCheck, t: 'Settle', d: 'With confidence' },
          ].map((p) => (
            <div key={p.t} className="flex items-center gap-4 px-6 py-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-extrabold text-ink">{p.t}</p>
                <p className="text-sm text-ink-500">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

const ProblemSolution = () => (
  <section className="section" id="why">
    <div className="container-site">
      <SectionHeading
        eyebrow="The problem"
        title="Your shared expenses, finally under control."
        description="Managing money with friends, family or flatmates shouldn't involve endless WhatsApp messages, confusing calculations or awkward payment reminders."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-ink-100 bg-ink-50 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-500">Without Settsmartly</p>
          <ul className="mt-6 space-y-5">
            {[
              { icon: MessageCircle, t: 'Endless chat threads', d: '"Who paid for the cylinder last month?" scrolls away in a busy group chat.' },
              { icon: Calculator, t: 'Spreadsheets and calculators', d: 'Someone stays up working out who owes what, and someone always disputes it.' },
              { icon: BellRing, t: 'Awkward reminders', d: 'Chasing a friend for ₹450 feels worse than just letting it go.' },
            ].map((i) => (
              <li key={i.t} className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ink-500 ring-1 ring-ink-100">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="flex items-center gap-2 font-semibold text-ink">
                    <X className="h-4 w-4 text-negative" /> {i.t}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-600">{i.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="rounded-3xl border border-brand-100 bg-brand-50 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">With Settsmartly</p>
          <p className="mt-6 font-display text-2xl font-bold leading-snug text-ink">
            Everyone knows what was spent, who paid and what remains to be settled.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'One shared record per group',
              'Shares calculated automatically',
              'Live balances for every member',
              'Fewer payments to settle up',
              'Polite, automatic reminders',
              'No money held by us, ever',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
)

const FeatureGrid = () => (
  <section className="section bg-ink-50/60" id="features">
    <div className="container-site">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to manage shared money"
        description="One platform. Every shared expense. Complete clarity."
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
  <section className="section" id="how-it-works">
    <div className="container-site">
      <SectionHeading
        eyebrow="How it works"
        title="From first expense to settled, in six steps"
        description="No spreadsheets, no mental maths. Settsmartly does the calculating so you don't have to."
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

const ForWhom = () => (
  <section className="section bg-ink-50/60" id="for-whom">
    <div className="container-site">
      <SectionHeading
        eyebrow="For whom"
        title="One app. Multiple ways to share expenses."
        description="Every group keeps its own members, expenses and balances, so your flat never mixes with your Goa trip."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 60} className="card-lavender flex flex-col p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{s.description}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {s.examples.map((e) => (
                <span key={e} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-brand-100">
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const Clarity = () => (
  <section className="section">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionHeading
          align="left"
          eyebrow="Clarity"
          title="Complete clarity. No more confusion."
          description="With Settsmartly, you can always understand:"
        />
        <ul className="mt-8 grid gap-3">
          {clarityPoints.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 40} className="flex items-center gap-3 text-base text-ink-700">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              {p}
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={100}>
        <div className="card p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-ink-500">Goa trip · 5 members</p>
              <p className="font-display text-xl font-bold">Group summary</p>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">2 pending</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { l: 'Total spent', v: '₹38,400' },
              { l: 'Your share', v: '₹7,680' },
              { l: 'You paid', v: '₹5,530' },
            ].map((k) => (
              <div key={k.l} className="rounded-xl bg-ink-50 p-3">
                <p className="text-xs text-ink-500">{k.l}</p>
                <p className="amount mt-1 font-display text-base font-extrabold sm:text-lg">{k.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-ink">Balances</p>
          <ul className="mt-3 divide-y divide-ink-100">
            {[
              { n: 'Aditi', v: '+₹3,630', pos: true, s: 'gets back' },
              { n: 'You', v: '−₹2,150', pos: false, s: 'owes' },
              { n: 'Rohan', v: '−₹1,480', pos: false, s: 'owes' },
              { n: 'Sam', v: '+₹960', pos: true, s: 'gets back' },
              { n: 'Meera', v: '−₹960', pos: false, s: 'owes' },
            ].map((b) => (
              <li key={b.n} className="flex items-center justify-between py-2.5 text-sm">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">{b.n[0]}</span>
                  <span className="font-medium text-ink">{b.n}</span>
                  <span className="text-ink-400">{b.s}</span>
                </span>
                <span className={`amount font-semibold ${b.pos ? 'text-positive' : 'text-negative'}`}>{b.v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-400">Illustrative example. Balances always sum to zero.</p>
        </div>
      </Reveal>
    </div>
  </section>
)

const Control = () => (
  <section className="section pt-0">
    <div className="container-site">
      <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-brand-50 p-8 sm:p-12">
        <SectionHeading
          align="left"
          eyebrow="Trust"
          title="Your money. Your groups. Your control."
          description="Every group has its own expense history, members and balances. Your personal account keeps your overall financial picture organized. We believe shared financial management should be transparent, simple and accessible."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Landmark, t: 'Not a bank or wallet', d: 'We never hold your money. Payments happen through supported external payment services.' },
            { icon: ShieldCheck, t: 'No automatic deductions', d: 'Recording an expense never moves money. You decide when and how to pay.' },
            { icon: FolderLock, t: 'Groups stay separate', d: "Members only see the groups they belong to. Your flat can't see your trip." },
            { icon: Eye, t: 'Transparent by design', d: 'Every edit and settlement is visible to the group, so nothing changes quietly.' },
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
            Can't find what you're looking for?{' '}
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

const Home = () => (
  <>
    <PageMeta
      title="Settsmartly – Split. Track. Settle. Smartly. | Shared Expense App for India"
      description="Settsmartly helps friends, flatmates, families, couples and travel groups in India split bills, track shared expenses and settle up with UPI. Join the waitlist."
      path="/"
    />
    <Hero />
    <ProblemSolution />
    <FeatureGrid />
    <HowItWorks />
    <ForWhom />
    <Clarity />
    <Control />
    <FaqSection />
    <div className="pt-20 sm:pt-24 lg:pt-28">
      <CtaBand source="home" />
    </div>
  </>
)

export default Home
