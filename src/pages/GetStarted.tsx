import { Check } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import WaitlistForm from '../components/WaitlistForm'
import { PhoneFrame, GroupScreen } from '../components/PhoneMockup'

const GetStarted = () => (
  <>
    <PageMeta path="/get-started" />
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
      <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">
            <span className="eyebrow font-sans leading-normal">Join the Settsmartly waitlist</span>
            <span className="sr-only"> – </span>
            <span className="mt-3 block">Get early access for your flat</span>
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-600">
            We’re opening a closed beta for flatmates, starting in Bengaluru. Leave your email and we’ll let you know as
            soon as there’s a place for you.
          </p>
          <ul className="mt-6 space-y-2.5">
            {['Beta access for everyone in your flat', 'A say in how the voice assistant works', 'The core app is free, for good'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink-700">
                <Check className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-lg rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
            <WaitlistForm variant="full" source="get-started" />
          </div>
        </Reveal>
        <Reveal delay={100} className="hidden justify-center lg:flex">
          <PhoneFrame>
            <GroupScreen />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  </>
)

export default GetStarted
