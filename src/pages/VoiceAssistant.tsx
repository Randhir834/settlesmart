import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { PhoneFrame, VoiceScreen } from '../components/PhoneMockup'
import { voiceFaqs } from '../data/content'

const sayings = [
  {
    title: 'Add an expense',
    examples: [
      'I paid 2,500 for groceries today. Split it equally between all five of us.',
      'Kabir paid the 999 internet bill.',
      'Add 800 for cleaning supplies, but leave Aman out.',
    ],
  },
  {
    title: 'Set up a bill that repeats',
    examples: [
      'Our rent is 15,000. Add it every month and split it equally between the five of us.',
      'Remind everyone about electricity on the 10th of every month.',
    ],
  },
  {
    title: 'Ask about your money',
    examples: [
      'How much did we spend on groceries last month?',
      'Who owes me the most?',
      'Which bills haven’t been paid yet?',
    ],
  },
  {
    title: 'Fix a mistake',
    examples: ['Change the electricity bill from 1,800 to 2,000.', 'Take Riya off the streaming subscription.'],
  },
]

const understands = [
  { t: 'Your flat', d: 'Which flat you mean, who lives there and which bills are shared.' },
  { t: 'Your flatmates', d: 'People by name or nickname, and who has already moved out.' },
  { t: 'How you talk', d: 'English, Hindi and the Hinglish most of us actually speak.' },
  { t: 'Money and dates', d: 'Amounts, percentages, shares, and phrases like “last month”.' },
  { t: 'What you just said', d: 'It keeps track of the conversation, so “No, leave Aman out” just works.' },
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
  { from: 'ai', text: 'Add ₹500 to Bangalore Flat, split equally between all 5 of you?' },
  { from: 'you', text: 'No, leave Aman out.' },
  { from: 'ai', text: 'OK, ₹500 between the other 4, so ₹125 each. Save it?' },
  { from: 'you', text: 'Yes.' },
]

const pipeline = [
  { t: 'You say it', d: 'In English, Hindi or Hinglish, the way you’d tell a flatmate.' },
  { t: 'It’s turned into text', d: 'Your words are transcribed so the request can be read.' },
  { t: 'The details are picked out', d: 'Amount, who paid, category, who it’s for and how to split it.' },
  { t: 'The app checks and calculates', d: 'Members and permissions are checked, and every share is calculated by the app itself.' },
  { t: 'You confirm', d: 'You see the draft and approve it. Only then is it saved and shared with your flat.' },
]

const safeguards = [
  { t: 'Nothing saves without you', d: 'Every expense, edit or bill the assistant prepares waits for you to confirm it.' },
  { t: 'The AI doesn’t do the maths', d: 'The assistant works out what you meant. Shares and balances are always calculated by the app.' },
  { t: 'It can’t move money', d: 'It can’t pay, transfer or deduct anything. Payments always happen in your own UPI app.' },
  { t: 'The mic is off unless you use it', d: 'Before launch, we’ll publish exactly what is stored, how long it’s kept and how to delete it.' },
  { t: 'Every change is on record', d: 'Expenses added or edited by voice show up in the flat’s history like any other change.' },
]

const VoiceAssistant = () => (
  <>
    <PageMeta path="/voice-assistant" />

    <section className="bg-ink text-white">
      <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-[1.06] text-white sm:text-[3.5rem]">
            <span className="block font-sans text-sm font-semibold leading-normal tracking-normal text-brand-300">
              AI voice expense tracker
            </span>
            <span className="sr-only"> – </span>
            <span className="mt-4 block">Add an expense by saying it</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300 lg:mx-0">
            No forms. Tell Settsmartly what happened and it drafts the expense with the amount, the people and the split,
            ready for you to check and confirm.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-400 lg:mx-0">
            English · हिंदी · Hinglish. In development, coming first to beta users in Bengaluru.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link to="/get-started" className="btn bg-white px-6 py-3.5 text-base text-brand-800 hover:bg-brand-50">
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#how" className="btn border border-white/20 px-6 py-3.5 text-base text-white hover:bg-white/10">
              How it works
            </a>
          </div>
        </div>
        <Reveal delay={100} className="mx-auto">
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
          title="Talk to it the way you’d talk to your flatmates"
          description="Add expenses, set up bills, ask questions and fix mistakes without opening a single form."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {sayings.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 60} className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold">{g.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {g.examples.map((e) => (
                  <li key={e} className="rounded-xl bg-ink-50 px-4 py-3 text-[15px] leading-relaxed text-ink-800">
                    “{e}”
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
            eyebrow="Hindi and Hinglish"
            title="Speak the way you actually speak"
            description="Most of us switch between Hindi and English mid-sentence. The assistant is being built for exactly that."
          />
          <Reveal className="mt-8 rounded-2xl rounded-br-md bg-brand-700 px-5 py-4 text-lg leading-relaxed text-white">
            “Aaj electricity ka 1800 ka bill pay kiya, sabke beech equally divide kar do.”
          </Reveal>
        </div>
        <Reveal delay={80} className="card p-6 sm:p-8">
          <p className="text-sm font-semibold text-ink-500">What the assistant picks out</p>
          <dl className="mt-3 divide-y divide-ink-100">
            {hinglishParse.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-3 text-[15px]">
                <dt className="text-ink-500">{k}</dt>
                <dd className="amount font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-ink-500">Shown to you as a draft. Saved only when you tap Confirm.</p>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20 [&>*]:min-w-0">
        <div>
          <SectionHeading
            align="left"
            eyebrow="More than speech-to-text"
            title="It knows your flat, not just your words"
          />
          <dl className="mt-10 divide-y divide-ink-100 border-y border-ink-100">
            {understands.map((c) => (
              <div key={c.t} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-display font-semibold text-ink">{c.t}</dt>
                <dd className="text-[15px] leading-relaxed text-ink-600">{c.d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Reveal delay={80} className="self-center">
          <h3 className="text-2xl font-bold">If something’s unclear, it asks</h3>
          <p className="mt-3 text-lg leading-relaxed text-ink-600">
            When a detail is missing or could mean two things, the assistant checks with you instead of guessing. It
            remembers what you just said, so corrections feel natural.
          </p>
          <div className="mt-6 space-y-2 rounded-2xl bg-ink p-5 sm:p-6">
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
      </div>
    </section>

    <section className="section scroll-mt-16 bg-ink-50/60" id="how">
      <div className="container-site">
        <SectionHeading eyebrow="How it works" title="From what you say to your flat’s balances" />
        <ol className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {pipeline.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 50} className="border-t-2 border-brand-700 pt-4">
              <span className="amount text-sm font-semibold text-brand-700">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-base font-bold">{p.t}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{p.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading
          align="left"
          eyebrow="Safeguards"
          title="Useful, but never in charge of your money"
          description="Shared money depends on trust, so these rules are built into how the assistant works."
        />
        <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {safeguards.map((s, i) => (
            <Reveal as="li" key={s.t} delay={(i % 3) * 50}>
              <h3 className="text-base font-bold">{s.t}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{s.d}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    <section className="section bg-ink-50/60">
      <div className="container-site max-w-3xl">
        <SectionHeading title="Questions about the voice assistant" />
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
