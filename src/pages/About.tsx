import { Target, Compass, Eye, Sparkles, ShieldCheck, Heart, Users } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'

const values = [
  { icon: ShieldCheck, t: 'Trustworthy', d: 'We never hold your money, and we are clear about what the product can and cannot do.' },
  { icon: Sparkles, t: 'Simple', d: 'Adding an expense should take seconds, not a spreadsheet.' },
  { icon: Eye, t: 'Transparent', d: 'Every member sees the same numbers, edits and settlements.' },
  { icon: Heart, t: 'Friendly', d: 'Money between friends should never cost the friendship.' },
]

const About = () => (
  <>
    <PageMeta
      title="About Us – Settsmartly"
      description="Settsmartly is building India's household financial management platform for people who live together, starting with flatmates in Bengaluru."
      path="/about"
    />
    <section className="bg-gradient-to-b from-brand-50 to-white pb-16 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="About us"
          title="Making shared money as easy as having a conversation."
          description="Settsmartly is building an India-first household financial management platform for flatmates and working professionals."
        />
      </div>
    </section>

    <section className="section pt-4">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Why we exist</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Living together is simple. Managing its money isn’t.</h2>
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-lg leading-relaxed text-ink-600">
          <p>
            Across India’s cities, young professionals share rented flats. Every month they juggle rent, groceries,
            electricity, internet and maintenance, paid by different people, shared in different ways, tracked in
            WhatsApp threads, spreadsheets and memory.
          </p>
          <p>
            Then someone pays late, someone moves out mid-month, and nobody has the full picture. Bill-splitting apps
            help divide a single expense, but the real work is running the household’s money month after month.
          </p>
          <p>
            Settsmartly gives every flat one financial workspace for expenses, recurring bills, member contributions
            and settlements, with an assistant you can talk to in English, Hindi or Hinglish.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="section bg-ink-50/60">
      <div className="container-site grid gap-5 md:grid-cols-2">
        <Reveal className="rounded-3xl bg-white p-8 ring-1 ring-ink-100 sm:p-10">
          <Target className="h-7 w-7 text-brand-700" />
          <h2 className="mt-5 text-2xl font-extrabold">Our mission</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-600">
            To make managing a shared household’s money effortless and transparent, so everyone knows where every
            rupee goes, who paid and what is pending.
          </p>
        </Reveal>
        <Reveal delay={80} className="rounded-3xl bg-brand-700 p-8 text-white sm:p-10">
          <Compass className="h-7 w-7 text-brand-200" />
          <h2 className="mt-5 text-2xl font-extrabold text-white">Our vision</h2>
          <p className="mt-3 text-lg leading-relaxed text-brand-100">
            To become the financial operating system for shared living in India, where managing shared money is as
            easy as having a conversation.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHeading eyebrow="What we value" title="The principles behind the product" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 60} className="card-lavender p-6">
              <v.icon className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 text-lg font-bold">{v.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section pt-0">
      <div className="container-site">
        <Reveal className="flex flex-col items-start gap-6 rounded-3xl border border-ink-100 p-8 sm:flex-row sm:items-center sm:p-10">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
            <Users className="h-7 w-7" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold">Where we are today</h2>
            <p className="mt-2 max-w-2xl text-ink-600">
              Settsmartly is in development. We’re talking to flatmates in Bengaluru, building the core household
              experience, and preparing a closed beta for a small group of households. If you share a flat and want to
              help shape it, join the waitlist and tick “Happy to chat”.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <CtaBand source="about" />
  </>
)

export default About
