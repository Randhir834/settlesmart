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
      description="Settsmartly is building an Indian-first shared expense platform so friends, flatmates and families can split, track and settle money without confusion."
      path="/about"
    />
    <section className="bg-gradient-to-b from-brand-50 to-white pb-16 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="About us"
          title="Sharing expenses should be simple. Settling them should be smarter."
          description="Settsmartly is an Indian-first shared expense management platform, built for the way India actually lives, travels and shares."
        />
      </div>
    </section>

    <section className="section pt-4">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Why we exist</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Shared money is everywhere in India. Good tools for it aren't.</h2>
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-lg leading-relaxed text-ink-600">
          <p>
            Flatmates split rent, electricity and the maid's salary. Friends split dinners, cabs and weekend trips.
            Families pool money for ration, festivals and school fees. Almost all of it is tracked in group chats,
            notebooks and memory.
          </p>
          <p>
            The result is familiar: forgotten payments, disputed totals and the awkwardness of asking someone you care
            about for money. We think that's an unnecessary cost on relationships.
          </p>
          <p>
            Settsmartly gives every group one clear, shared record of what was spent, who paid and what's left to
            settle, designed around Indian households, Indian payment habits and the rupee.
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
            To make managing shared money transparent, simple and accessible for everyone in India, so people can
            focus on the time they spend together, not the maths.
          </p>
        </Reveal>
        <Reveal delay={80} className="rounded-3xl bg-brand-700 p-8 text-white sm:p-10">
          <Compass className="h-7 w-7 text-brand-200" />
          <h2 className="mt-5 text-2xl font-extrabold text-white">Our vision</h2>
          <p className="mt-3 text-lg leading-relaxed text-brand-100">
            A future where every shared expense, from a ₹50 chai to a month's rent, is recorded, fair and settled
            without a single awkward reminder.
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
              Settsmartly is currently in development. We're building the mobile app and opening early access through
              our waitlist. If you'd like to help shape the product, join the waitlist or write to us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <CtaBand source="about" />
  </>
)

export default About
