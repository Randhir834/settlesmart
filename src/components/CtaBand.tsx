import Reveal from './Reveal'
import { AppIcon } from './Logo'
import WaitlistForm from './WaitlistForm'

const CtaBand = ({ source }: { source: string }) => (
  <section className="section pt-0">
    <div className="container-site">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-900/50 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <AppIcon className="mx-auto mb-6 h-16 w-16 drop-shadow-xl" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Stop asking “Who paid for what?”</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">
              Your flat. Your people. Your expenses. One smart place. Join the waitlist for early access.
            </p>
            <p className="mt-3 font-display text-sm font-bold text-white">Just speak your expense. Settsmartly organises the rest.</p>
            <div className="mx-auto mt-8 max-w-md">
              <WaitlistForm source={source} tone="dark" />
            </div>
            <p className="mt-3 text-xs text-brand-200">Launching first with flatmates in Bengaluru. Anyone in India can join.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export default CtaBand
