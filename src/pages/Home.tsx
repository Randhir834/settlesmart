import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatusBadge from '../components/StatusBadge'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, GroupScreen, VoiceScreen, MoveOutScreen } from '../components/PhoneMockup'
import { positioning, features, segments, clarityPoints, faqs, voiceExamples, sampleMonth, householdProblems } from '../data/content'

const inr = (n: number, paise = false) =>
  '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: paise ? 2 : 0, maximumFractionDigits: paise ? 2 : 0 })

const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

const Hero = () => (
  <section className="hero-motion relative overflow-hidden border-b border-ink-100 bg-gradient-to-b from-brand-50/70 to-white">
    <div className="container-site grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pb-20 lg:pt-20">
      <div className="text-center lg:text-left">
        {/* The label is part of the H1 so the page's main heading says what Settsmartly is.
            The headline itself is not faded in: it is the Largest Contentful Paint element. */}
        <h1 className="text-[2.5rem] font-bold leading-[1.06] sm:text-[3.5rem] lg:text-[4rem]">
          <span className="eyebrow animate-rise font-sans leading-normal tracking-normal">Household expense app for flatmates</span>
          <span className="sr-only"> – </span>
          <span className="mt-5 block">
            The money side of sharing a flat, <span className="text-brand-700">sorted</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-rise text-lg leading-relaxed text-ink-600 lg:mx-0" style={delay(150)}>
          {positioning.subhead}
        </p>
        <div className="mt-8 flex animate-rise flex-col justify-center gap-3 sm:flex-row lg:justify-start" style={delay(250)}>
          <Link to="/get-started" className="btn-primary px-6 py-3.5 text-base">
            Join the waitlist <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/how-it-works" className="btn-secondary px-6 py-3.5 text-base">
            How it works
          </Link>
        </div>
        <p className="mt-5 animate-rise text-sm text-ink-500" style={delay(350)}>
          {positioning.launchNote}. Free to use.
        </p>
      </div>

      <Reveal delay={100} className="mx-auto w-fit">
        <PhoneFrame>
          <GroupScreen />
        </PhoneFrame>
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
          eyebrow="Why we built it"
          title="Splitting the total is the easy part"
          description="Five people, one flat, the same bills every month. Anyone can divide a number by five. The trouble is everything that happens around it."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card sm:p-9">
            <p className="text-sm font-semibold text-ink-500">A typical month for five flatmates</p>
            <ul className="mt-5 divide-y divide-ink-100">
              {sampleMonth.rows.map((r) => (
                <li key={r.label} className="flex items-center justify-between py-3 text-[15px]">
                  <span className="text-ink-700">{r.label}</span>
                  <span className="amount font-semibold text-ink">{inr(r.amount)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between border-t-2 border-ink pt-3">
              <span className="font-display font-bold text-ink">Total</span>
              <span className="amount font-display text-xl font-bold text-ink">{inr(total)}</span>
            </div>
            <p className="mt-5 text-sm text-ink-500">
              {inr(total)} ÷ {sampleMonth.people} ={' '}
              <span className="amount font-semibold text-ink">{inr(total / sampleMonth.people, true)}</span> each. On paper,
              anyway.
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl bg-ink-50 p-7 sm:p-9">
            <p className="text-sm font-semibold text-ink-500">What actually happens</p>
            <ul className="mt-5 space-y-3.5">
              {householdProblems.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-700">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-400" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-ink-200 pt-5 font-display text-lg font-semibold leading-snug text-ink">
              Settsmartly is built for the whole month in a shared flat, not just the one bill.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const conversation = [
  { from: 'you', text: 'Add 500 for groceries.' },
  { from: 'ai', text: 'Add ₹500 to Bangalore Flat, split equally between all 5 of you?' },
  { from: 'you', text: 'No, leave Aman out.' },
  { from: 'ai', text: 'OK, ₹500 between the other 4, so ₹125 each. Save it?' },
  { from: 'you', text: 'Yes.' },
]

const Voice = () => (
  <section className="section bg-ink text-white" id="voice">
    <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
      <div>
        <Reveal>
          <p className="flex items-center gap-3 text-sm font-semibold text-brand-300">
            Voice assistant <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-ink-200">In development</span>
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-[2.75rem] sm:leading-[1.1]">Say what you paid. It fills in the rest.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
            Tell Settsmartly what happened, in English, Hindi or Hinglish, and it drafts the expense with the amount, the
            people and the split. You check it and tap confirm.
          </p>
        </Reveal>

        <Reveal className="mt-10 grid gap-3 sm:grid-cols-2">
          {voiceExamples.map((v) => (
            <figure key={v.said} className="rounded-xl border border-white/10 p-4">
              <figcaption className="text-xs font-medium text-ink-400">{v.lang}</figcaption>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-white">“{v.said}”</blockquote>
            </figure>
          ))}
        </Reveal>

        <Reveal className="mt-10 max-w-md">
          <p className="text-sm font-medium text-ink-400">When something’s unclear, it asks</p>
          <div className="mt-3 space-y-2">
            {conversation.map((m, i) => (
              <div
                key={i}
                className={`w-fit max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                  m.from === 'you' ? 'ml-auto rounded-br-md bg-brand-600 text-white' : 'rounded-bl-md bg-white/10 text-white'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link to="/voice-assistant" className="btn bg-white px-6 text-brand-800 hover:bg-brand-50">
            More about the voice assistant <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-sm text-ink-400">The AI reads what you say. The app does the maths.</p>
        </Reveal>
      </div>

      <Reveal delay={100} className="mx-auto hidden w-fit md:block">
        <PhoneFrame>
          <VoiceScreen live />
        </PhoneFrame>
      </Reveal>
    </div>
  </section>
)

const Roommates = () => (
  <section className="section" id="roommates">
    <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="eyebrow">Moving in and out</span>
            <StatusBadge status="planned" />
          </div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">When someone moves out, the maths is already done</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Aman is leaving on 15 December. Settsmartly works out what he owes for the month using the rule your flat agreed
            on, settles what’s pending and leaves him out of new expenses. Everything before that stays exactly as it was.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {[
            'Move-in and move-out dates on record',
            'Pro-rata or full month, your flat decides',
            'Pending balances settled before they go',
            'Security deposit tracked separately',
            'Left out of future expenses',
            'Replacement starts on the right date',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-[15px] text-ink-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" strokeWidth={2.5} />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-8 rounded-xl bg-ink-50 p-4 text-sm leading-relaxed text-ink-600">
          <span className="font-semibold text-ink">Example:</span> ₹15,000 rent between five people is ₹3,000 each. Leaving
          after 15 of 30 days on a daily pro-rata rule comes to ₹1,500.{' '}
          <Link to="/guides/flatmate-moving-out" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
            Read the move-out guide
          </Link>
        </p>
      </div>
      <Reveal delay={100} className="flex justify-center">
        <PhoneFrame>
          <MoveOutScreen />
        </PhoneFrame>
      </Reveal>
    </div>
  </section>
)

const FeatureGrid = () => (
  <section className="section border-t border-ink-100 bg-ink-50/60" id="features">
    <div className="container-site">
      <SectionHeading
        eyebrow="Features"
        title="What’s in the app"
        description="Some of this works today. Anything marked Planned is still being built, and we’ll say so until it ships."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.id} delay={(i % 4) * 50}>
            <Link
              to={`/features#${f.id}`}
              className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-colors duration-200 hover:border-brand-300"
            >
              <div className="flex items-center justify-between">
                <f.icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                <StatusBadge status={f.status} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{f.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

/* Illustrative month for Bangalore Flat (matches the sample month). Balance = paid − share; they sum to zero. */
const members = [
  { n: 'You', paid: 15000, note: 'rent' },
  { n: 'Neha', paid: 5000, note: 'groceries' },
  { n: 'Kabir', paid: 2999, note: 'electricity and internet' },
  { n: 'Riya', paid: 2500, note: 'water and supplies' },
  { n: 'Aman', paid: 0, note: 'nothing yet' },
]

const Statement = () => {
  const total = members.reduce((s, m) => s + m.paid, 0)
  const share = total / members.length
  return (
    <section className="section">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Monthly statement"
            title="Everyone looks at the same numbers"
            description="No more “I think I paid for that”. At the end of the month, everyone in the flat can see:"
          />
          <ul className="mt-8 grid gap-3">
            {clarityPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-ink-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand-700" strokeWidth={2.5} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={80}>
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
                { l: 'Flat spent', v: inr(total) },
                { l: 'Each share', v: inr(share, true) },
                { l: 'You paid', v: inr(15000) },
              ].map((k) => (
                <div key={k.l} className="min-w-0 rounded-xl bg-ink-50 p-3">
                  <p className="text-xs text-ink-500">{k.l}</p>
                  <p className="amount mt-1 truncate font-display text-sm font-bold sm:text-lg">{k.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-ink">Balances</p>
            <ul className="mt-2 divide-y divide-ink-100">
              {members.map((m) => {
                const bal = m.paid - share
                const pos = bal > 0
                return (
                  <li key={m.n} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">{m.n[0]}</span>
                      <span className="min-w-0">
                        <span className="block font-medium text-ink">{m.n}</span>
                        <span className="block truncate text-xs text-ink-500">Paid {m.note}</span>
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
            <p className="mt-4 text-xs text-ink-500">Sample data. The balances always add up to zero.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const ForWhom = () => {
  const [primary, ...rest] = segments
  return (
    <section className="section border-t border-ink-100" id="for-whom">
      <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Who it’s for</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for flatmates first</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            {primary.description} That’s who we’re building for, and we want it to be properly good for them before we
            take on anything else.
          </p>
          <div className="mt-8 rounded-2xl bg-brand-700 p-6 text-white sm:p-7">
            <p className="font-display text-lg font-semibold">Share a flat in Bengaluru?</p>
            <p className="mt-2 leading-relaxed text-brand-100">
              We’re opening the beta to a small number of flats. Join the waitlist and tick “Happy to chat” if you’re up for
              a short call about how your flat handles money today.
            </p>
            <Link to="/get-started" className="btn mt-5 bg-white px-5 text-brand-800 hover:bg-brand-50">
              Join the beta waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-sm font-semibold text-ink-500">It works just as well for</p>
          <dl className="mt-4 divide-y divide-ink-100 border-y border-ink-100">
            {rest.map((s) => (
              <div key={s.id} className="py-4">
                <dt className="font-display font-semibold text-ink">{s.title}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-ink-600">{s.description}</dd>
              </div>
            ))}
          </dl>
          <Link to="/flatmates" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700 underline-offset-4 hover:underline">
            How it works for flatmates <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

const principles = [
  { t: 'It never touches your money', d: 'Settsmartly isn’t a bank or a wallet. You pay each other in your own UPI app; we only keep the record.' },
  { t: 'The AI suggests, you decide', d: 'The assistant prepares drafts. Nothing is saved or changed until you confirm it.' },
  { t: 'The maths isn’t left to AI', d: 'Shares and balances are calculated by the app, to the paisa, never estimated by a language model.' },
  { t: 'History can’t quietly change', d: 'Every edit is logged, and old records stay intact even after someone moves out.' },
]

const Trust = () => (
  <section className="section bg-ink-50/60">
    <div className="container-site">
      <SectionHeading
        align="left"
        eyebrow="How we handle money"
        title="Shared money only works if everyone trusts the numbers"
      />
      <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((c, i) => (
          <Reveal key={c.t} delay={i * 50} className="border-t-2 border-brand-700 pt-5">
            <h3 className="text-base font-bold">{c.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{c.d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

const FaqSection = () => (
  <section className="section" id="faq">
    <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <div>
        <SectionHeading align="left" eyebrow="FAQ" title="Questions people ask us" />
        <Reveal>
          <p className="mt-4 leading-relaxed text-ink-600">
            Something we haven’t covered?{' '}
            <Link to="/contact" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              Send us a message
            </Link>
            , or read our{' '}
            <Link to="/guides" className="font-semibold text-brand-700 underline-offset-4 hover:underline">
              guides for flatmates
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
    <PageMeta path="/" />
    <Hero />
    <Problem />
    <Voice />
    <Roommates />
    <FeatureGrid />
    <Statement />
    <ForWhom />
    <Trust />
    <FaqSection />
    <CtaBand source="home" />
  </>
)

export default Home
