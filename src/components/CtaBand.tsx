import Reveal from './Reveal'
import WaitlistForm from './WaitlistForm'

const CtaBand = ({ source }: { source: string }) => (
  <section className="section pt-0">
    <div className="container-site">
      <Reveal>
        <div className="rounded-3xl bg-brand-700 px-6 py-14 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Stop asking “who paid for what?”</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">
              Join the waitlist and we’ll let you know when early access opens. We only ever email about the launch.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <WaitlistForm source={source} tone="dark" />
            </div>
            <p className="mt-4 text-sm text-brand-200">The beta starts with flatmates in Bengaluru. Anyone in India can sign up.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export default CtaBand
