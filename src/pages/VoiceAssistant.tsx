import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Mic,
  Languages,
  Users,
  IndianRupee,
  MessageCircle,
  Building2,
  Plus,
  Repeat,
  HelpCircle,
  Pencil,
  ShieldCheck,
  Calculator,
  Lock,
  History,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { AppIcon } from '../components/Logo'
import { PhoneFrame, VoiceScreen } from '../components/PhoneMockup'

const sayings = [
  {
    icon: Plus,
    title: 'Add expenses',
    examples: [
      'I paid 2,500 for groceries today. Split equally between all five of us.',
      'Kabir paid the 999 internet bill.',
      'Add 800 for cleaning supplies, but exclude Aman.',
    ],
  },
  {
    icon: Repeat,
    title: 'Set up recurring bills',
    examples: [
      'Our rent is 15,000. Add it as a monthly recurring expense, split equally between the five of us.',
      'Remind everyone about electricity on the 10th of every month.',
    ],
  },
  {
    icon: HelpCircle,
    title: 'Ask about your money',
    examples: [
      'How much did we spend on groceries last month?',
      'Who owes me the most?',
      'Which bills are still unpaid?',
      'How much did I personally spend this month?',
    ],
  },
  {
    icon: Pencil,
    title: 'Fix mistakes',
    examples: ['Change the electricity bill from 1,800 to 2,000.', 'Remove Riya from the OTT subscription split.'],
  },
]

const capabilities = [
  { icon: Building2, t: 'Household context', d: 'Knows which flat you mean, who lives there and which bills are shared.' },
  { icon: Users, t: 'Member recognition', d: 'Understands your flatmates by name and nickname, and who has moved out.' },
  { icon: Languages, t: 'Mixed language', d: 'Built for English, Hindi and the Hinglish most of us actually speak.' },
  { icon: IndianRupee, t: 'Money literacy', d: 'Understands amounts, percentages, shares and dates like "last month".' },
  { icon: MessageCircle, t: 'Conversation memory', d: 'Remembers what you just said, so "No, exclude Aman" just works.' },
]

const hinglishParse = [
  ['Description', 'Electricity bill'],
  ['Amount', '₹1,800'],
  ['Paid by', 'You'],
  ['Split', 'Equally · 5 members'],
  ['Each person', '₹360'],
]

const conversation = [
  { from: 'you', text: 'Add 500 for groceries.' },
  { from: 'ai', text: 'Should I add ₹500 to Bangalore Flat and split it equally among the 5 active members?' },
  { from: 'you', text: 'No, exclude Aman.' },
  { from: 'ai', text: 'Got it. ₹500 split among the other 4 members, ₹125 each. Shall I save it?' },
  { from: 'you', text: 'Confirm.' },
]

const pipeline = [
  { t: 'You speak', d: 'In English, Hindi or Hinglish, as you naturally would.' },
  { t: 'Speech becomes text', d: 'Your words are transcribed so the request can be understood.' },
  { t: 'AI extracts the details', d: 'Amount, payer, category, members and split method.' },
  { t: 'We validate and calculate', d: 'Membership, permissions and every share are checked and computed by our expense engine.' },
  { t: 'You confirm', d: 'You see a draft and approve it. Only then is it saved and shared with your flat.' },
]

const safeguards = [
  { icon: CheckCircle2, t: 'Nothing saves without you', d: 'Every expense, edit or bill the assistant prepares waits for your explicit confirmation.' },
  { icon: Calculator, t: 'AI never does the maths', d: 'The assistant interprets what you say. Shares and balances are always calculated by our expense engine.' },
  { icon: ShieldCheck, t: 'It never moves money', d: 'The assistant can’t pay, transfer or deduct anything. Payments always happen in your own UPI app.' },
  { icon: Lock, t: 'Voice with consent', d: 'The microphone is only used when you choose to. We’ll publish exactly what is stored, for how long, and how to delete it before launch.' },
  { icon: History, t: 'Every change is logged', d: 'Expenses created or edited by voice appear in the household’s history like any other change.' },
]

const voiceFaqs = [
  {
    q: 'Is the voice assistant available now?',
    a: 'Not yet. It is our signature feature and is in development. Join the waitlist to try it in our closed beta, starting with flatmates in Bengaluru.',
  },
  {
    q: 'Which languages will it understand?',
    a: 'English, Hindi and Hinglish (mixed Hindi-English) from the start. We are testing with real flatmates to make sure it understands how people actually speak.',
  },
  {
    q: 'What if it gets something wrong?',
    a: 'You always see a draft before anything is saved, so you can correct it by voice or by hand. If something is missing or unclear, the assistant asks you instead of guessing.',
  },
  {
    q: 'Does it store my voice recordings?',
    a: 'Voice will only be used with your consent. Before the assistant launches, we will publish exactly what is stored, how long it is kept and how you can delete it.',
  },
  {
    q: 'Will it cost extra?',
    a: 'The core of Settsmartly will be free. We plan to include voice entry in our paid plans, and will announce details and pricing before launch.',
  },
]

const VoiceAssistant = () => (
  <>
    <PageMeta path="/voice-assistant" />

    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full bg-brand-700/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="container-site relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <AppIcon className="h-12 w-12 drop-shadow-xl" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Sparkles className="h-3.5 w-3.5" /> Signature feature · Planned
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl">
            Just speak. Your household gets organized.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300 lg:mx-0">
            Stop filling in forms. Tell Settsmartly what happened and it prepares the expense with the right amount,
            members and split, ready for you to confirm.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link to="/get-started" className="btn bg-white px-6 py-3.5 text-base text-brand-800 hover:bg-brand-50">
              Try it in the beta <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#how" className="btn border border-white/20 px-6 py-3.5 text-base text-white hover:bg-white/10">
              How it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {['English', 'हिंदी', 'Hinglish'].map((l) => (
              <span key={l} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/15">
                <Mic className="h-3.5 w-3.5 text-brand-300" /> {l}
              </span>
            ))}
          </div>
        </div>
        <Reveal delay={100} className="relative mx-auto">
          <PhoneFrame>
            <VoiceScreen />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading
          eyebrow="What you can say"
          title="Talk to it like you’d talk to your flatmates"
          description="Add expenses, set up bills, ask questions and fix mistakes, all without opening a form."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {sayings.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 80} className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <g.icon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-extrabold">{g.title}</h2>
              </div>
              <ul className="mt-5 space-y-2.5">
                {g.examples.map((e) => (
                  <li key={e} className="flex items-start gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-[15px] leading-relaxed text-ink-800">
                    <Mic className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-500" />“{e}”
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section bg-ink-50/60">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Hinglish, too"
            title="Speak the way you actually speak."
            description="Most of us switch between Hindi and English mid-sentence. The assistant is being built for exactly that."
          />
          <Reveal className="mt-8 rounded-2xl bg-brand-700 px-5 py-4 text-lg leading-relaxed text-white">
            “Aaj electricity ka 1800 rupees bill pay kiya, sabke beech equally divide kar do.”
          </Reveal>
        </div>
        <Reveal delay={100} className="card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">What the assistant understands</p>
          <dl className="mt-4 divide-y divide-ink-100">
            {hinglishParse.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-3 text-[15px]">
                <dt className="text-ink-500">{k}</dt>
                <dd className="amount font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200">
            Shown as a draft. Saved only after you tap Confirm.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Smarter than speech-to-text"
          title="It understands your household, not just your words"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.t} delay={i * 50} className="card-lavender p-5">
              <c.icon className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 text-base font-bold">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{c.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 [&>*]:min-w-0">
          <Reveal>
            <h3 className="text-2xl font-extrabold sm:text-3xl">It asks instead of guessing.</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink-600">
              When something is missing or ambiguous, the assistant checks with you, and it remembers the conversation so
              corrections feel natural.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl bg-ink p-5 sm:p-6">
            <div className="space-y-2.5">
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
              <p className="flex items-center gap-2 pt-1 text-sm font-semibold text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Expense saved after confirmation
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="section scroll-mt-16 bg-ink-50/60" id="how">
      <div className="container-site">
        <SectionHeading eyebrow="How it works" title="From your voice to your flat’s balances" />
        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {pipeline.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 60} className="relative rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
              <span className="amount inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-700 font-display text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{p.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Safety"
          title="Powerful, but never in charge of your money"
          description="Shared money depends on trust. These rules are built into how the assistant works."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {safeguards.map((s, i) => (
            <Reveal key={s.t} delay={i * 50} className="rounded-2xl bg-white p-5 ring-1 ring-ink-100">
              <s.icon className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 text-base font-bold">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section bg-ink-50/60">
      <div className="container-site max-w-3xl">
        <SectionHeading title="Voice assistant questions" />
        <Reveal className="mt-10">
          <FaqList items={voiceFaqs} />
        </Reveal>
      </div>
    </section>

    <div className="pt-20 sm:pt-24 lg:pt-28">
      <CtaBand source="voice-assistant" />
    </div>
  </>
)

export default VoiceAssistant
