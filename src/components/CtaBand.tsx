import Reveal from './Reveal'
import WaitlistForm from './WaitlistForm'

const CtaBand = ({ source }: { source: string }) => (
  <section className="section pt-0">
    <div className="container-site">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-900/50 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to make shared expenses simpler?</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">
              Stop calculating everything manually. Bring your friends, flatmates and family together with Settsmartly.
            </p>
            <p className="mt-3 font-display text-sm font-bold text-white">Split smarter. Stay organized. Settle easier.</p>
            <div className="mx-auto mt-8 max-w-md">
              <WaitlistForm source={source} tone="dark" />
            </div>
            <p className="mt-3 text-xs text-brand-200">Launching soon in India. Be first in line for early access.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export default CtaBand
