import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'

const principles = [
  {
    t: 'We never touch your money',
    d: 'Settsmartly records who paid and who owes. The money itself always moves through your own UPI or bank app.',
  },
  {
    t: 'We say what’s ready and what isn’t',
    d: 'Anything still being built is marked as planned on this site, and it stays that way until it actually works.',
  },
  {
    t: 'Everyone sees the same numbers',
    d: 'Every member of a flat sees the same expenses, edits and settlements. Nobody keeps a private version.',
  },
  {
    t: 'Adding an expense should take seconds',
    d: 'If it takes longer than sending a message to your flat’s WhatsApp group, people won’t bother. So it can’t.',
  },
]

const About = () => (
  <>
    <PageMeta path="/about" />
    <section className="bg-gradient-to-b from-brand-50/60 to-white pb-12 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="About Settsmartly"
          title="Making the money side of shared living less awkward"
          description="Settsmartly helps people who live together keep track of shared money, starting with flatmates in India’s cities."
        />
      </div>
    </section>

    <section className="section pt-8">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">Why it exists</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Living together is easy. The money part isn’t.</h2>
        </Reveal>
        <Reveal delay={80} className="space-y-5 text-lg leading-relaxed text-ink-600">
          <p>
            In Bengaluru, Pune, Hyderabad and every other city people move to for work, a lot of young professionals share
            rented flats. Every month there’s rent, groceries, electricity, Wi-Fi, maintenance and the cook to pay for. Each
            bill is paid by someone different and shared a little differently, and the record of it lives in a WhatsApp
            group, a spreadsheet nobody updates, and memory.
          </p>
          <p>
            Then someone pays late. Someone moves out on the 15th. Someone asks what the electricity came to in August,
            and nobody knows. Bill-splitting apps are good at dividing one expense, but the real work is keeping the
            flat’s money straight month after month.
          </p>
          <p>
            Settsmartly gives each flat one shared record of its expenses, recurring bills, who has paid what and who owes
            whom. We’re also building{' '}
            <Link to="/voice-assistant" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
              a voice assistant
            </Link>{' '}
            so you can add an expense in English, Hindi or Hinglish just by saying it. You can read more about{' '}
            <Link to="/flatmates" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
              how it works for flatmates
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>

    <section className="section bg-ink-50/60">
      <div className="container-site">
        <SectionHeading align="left" eyebrow="How we work" title="A few things we won’t compromise on" />
        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {principles.map((v, i) => (
            <Reveal key={v.t} delay={(i % 2) * 60} className="border-t border-ink-200 pt-5">
              <h3 className="text-lg font-bold">{v.t}</h3>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-600">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-site max-w-3xl">
        <Reveal>
          <span className="eyebrow">Where we are</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Still early, and building it with flatmates</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Settsmartly is in development. We’re talking to flatmates in Bengaluru, building the core of the app, and
            getting ready for a closed beta with a small group of flats. If you share a flat and want a say in how it
            turns out,{' '}
            <Link to="/get-started" className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800">
              join the waitlist
            </Link>{' '}
            and tick “Happy to chat”. We read every reply.
          </p>
        </Reveal>
      </div>
    </section>

    <CtaBand source="about" />
  </>
)

export default About
