import { Check } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import { AppIcon } from '../components/Logo'
import Reveal from '../components/Reveal'
import WaitlistForm from '../components/WaitlistForm'
import { PhoneFrame, VoiceScreen } from '../components/PhoneMockup'

const GetStarted = () => (
  <>
    <PageMeta
      title="Join the Waitlist – Settsmartly"
      description="Join the Settsmartly waitlist for early access to household financial management for flatmates. Beta starting in Bengaluru."
      path="/get-started"
    />
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <AppIcon className="mb-6 h-16 w-16 drop-shadow-lg" />
          <span className="eyebrow">Early access</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">Be first to run your flat smarter.</h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-600">
            We’re opening a closed beta for flatmates, starting in Bengaluru. Join the waitlist and we’ll let you know
            the moment early access opens.
          </p>
          <ul className="mt-6 space-y-2.5">
            {['Early beta access for your whole flat', 'Help shape the voice assistant', 'Free plan, always'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="card mt-10 max-w-lg p-6 sm:p-8">
            <WaitlistForm variant="full" source="get-started" />
          </div>
        </Reveal>
        <Reveal delay={100} className="relative hidden justify-center lg:flex">
          <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/60 blur-3xl" />
          <PhoneFrame>
            <VoiceScreen />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  </>
)

export default GetStarted
