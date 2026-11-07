import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { site } from '../config'

/**
 * Policies for the pre-launch marketing website. They describe what this site
 * actually does today. Have them reviewed by a lawyer, and extend them to cover
 * the app itself, before the app launches or paid plans go on sale.
 */

type Kind = 'privacy' | 'terms' | 'refunds'

const Mail = ({ to }: { to: string }) => (
  <a href={`mailto:${to}`} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
    {to}
  </a>
)

const H = ({ children }: { children: ReactNode }) => <h2 className="mt-10 text-xl font-extrabold sm:text-2xl">{children}</h2>

const privacy = (
  <>
    <p>
      This Privacy Policy explains what information Settsmartly ("we", "us") collects through settsmartly.com (the
      "Website"), why we collect it and the choices you have. Settsmartly is currently in development; this policy
      covers the Website only. A separate policy will apply to the Settsmartly app when it launches.
    </p>

    <H>1. Information we collect</H>
    <ul>
      <li>
        <strong>Waitlist:</strong> your email address and, if you choose to give them, your name, city, how you plan to
        use Settsmartly and whether you are happy to be contacted for a short research conversation. We also record
        which page you joined from and when.
      </li>
      <li>
        <strong>Contact form:</strong> your name, email address, the topic you select and your message.
      </li>
      <li>
        <strong>Emails you send us:</strong> the contents of your email and your email address.
      </li>
      <li>
        <strong>Usage data:</strong> if analytics is enabled, Google Analytics collects information such as pages
        visited, approximate location, device and browser type, using cookies or similar technologies.
      </li>
    </ul>
    <p>We do not ask for, and the Website does not collect, bank details, UPI IDs, card numbers or payment information.</p>

    <H>2. How we use it</H>
    <ul>
      <li>To tell you when early access opens and to send launch updates you signed up for.</li>
      <li>If you ticked “Happy to chat”, to invite you to a short conversation about how your household manages money, or to our beta.</li>
      <li>To reply to your messages and enquiries.</li>
      <li>To understand how the Website is used and improve it.</li>
      <li>To protect the Website against spam and abuse.</li>
    </ul>
    <p>We do not sell your personal data, and we do not use it for advertising by third parties.</p>

    <H>3. Where it is stored</H>
    <p>
      Waitlist entries and contact messages are stored in Google Cloud Firestore (part of Google Firebase), which we
      use as our data processor. Data may be processed on Google's servers in or outside India, protected by Google's
      security measures. Access to submissions is limited to the Settsmartly team.
    </p>

    <H>4. How long we keep it</H>
    <p>
      We keep waitlist details until you ask us to remove them, or until they are no longer needed for launch
      communications. Contact messages are kept for as long as needed to handle your enquiry and any follow-up, after
      which they are deleted.
    </p>

    <H>5. Your rights</H>
    <p>
      Under India's Digital Personal Data Protection Act, 2023 and other applicable law, you can ask us to tell you
      what personal data we hold about you, correct or update it, or erase it. You can also withdraw your consent at
      any time. Every launch email will include a way to unsubscribe. To make a request, email <Mail to={site.supportEmail} />.
      We aim to respond within 30 days.
    </p>

    <H>6. Cookies</H>
    <p>
      The Website itself does not need cookies to work. If Google Analytics is enabled, it sets analytics cookies. You
      can block or delete cookies in your browser settings without affecting your use of the Website.
    </p>

    <H>7. Children</H>
    <p>
      The Website is not directed at children under 18, and we do not knowingly collect their personal data. If you
      believe a child has given us their details, contact us and we will delete them.
    </p>

    <H>8. Changes</H>
    <p>
      We may update this policy as Settsmartly develops. The "last updated" date above will change when we do, and
      material changes will be highlighted on the Website.
    </p>

    <H>9. Contact and grievances</H>
    <p>
      For privacy questions, requests or complaints, email <Mail to={site.supportEmail} />.
    </p>
  </>
)

const terms = (
  <>
    <p>
      These Terms govern your use of settsmartly.com (the "Website"). By using the Website you agree to them. Separate
      terms will apply to the Settsmartly app when it launches.
    </p>

    <H>1. About Settsmartly</H>
    <p>
      Settsmartly is a shared expense management product that is currently in development. The Website describes the
      product we are building. Features, plans and timelines shown on the Website, including those marked "Planned",
      are subject to change and are not a promise that any feature will be available.
    </p>

    <H>2. Not a bank or payment service</H>
    <p>
      Settsmartly is an expense-management platform, not a bank, wallet or payment service. We do not hold, transfer or
      process money. Any payments between users are made through supported external payment services (such as UPI
      apps) under those services' own terms.
    </p>

    <H>3. Waitlist</H>
    <p>
      Joining the waitlist is free and does not guarantee access by any particular date. You can leave the waitlist at
      any time by emailing <Mail to={site.supportEmail} />.
    </p>

    <H>4. Acceptable use</H>
    <p>You agree not to:</p>
    <ul>
      <li>submit false information, or someone else's details without their permission;</li>
      <li>send spam, malicious code or automated submissions through our forms;</li>
      <li>try to disrupt, overload or gain unauthorised access to the Website or its systems;</li>
      <li>use the Website for anything unlawful.</li>
    </ul>

    <H>5. Intellectual property</H>
    <p>
      The Settsmartly name, logo, design and content on the Website belong to Settsmartly. You may not copy or reuse
      them without our written permission, except as allowed by law.
    </p>

    <H>6. No warranty</H>
    <p>
      The Website is provided "as is". The examples, names and amounts shown in product images are illustrative. While
      we try to keep the Website accurate and available, we do not guarantee that it will be error-free or
      uninterrupted.
    </p>

    <H>7. Limitation of liability</H>
    <p>
      To the extent permitted by law, Settsmartly is not liable for any indirect or consequential loss arising from
      your use of the Website.
    </p>

    <H>8. Governing law</H>
    <p>These Terms are governed by the laws of India.</p>

    <H>9. Changes and contact</H>
    <p>
      We may update these Terms from time to time; the date above shows the latest version. Questions? Email{' '}
      <Mail to={site.businessEmail} />.
    </p>
  </>
)

const refunds = (
  <>
    <p>
      Settsmartly does not currently sell any products, subscriptions or paid plans, and we never ask for payment on
      the Website. Joining the waitlist is free.
    </p>

    <H>When paid plans launch</H>
    <p>
      Before any paid plan becomes available, we will publish the full refund and cancellation terms on this page,
      including how to cancel and when refunds apply. You will be able to read them before you buy.
    </p>

    <H>Payments between users</H>
    <p>
      Money you send to friends, flatmates or family to settle shared expenses is paid through external payment
      services such as UPI apps, not through Settsmartly. Settsmartly cannot reverse or refund those payments.
      Contact your payment provider or bank about any issue with them.
    </p>

    <H>Been asked to pay?</H>
    <p>
      If anyone asks you to pay to join the Settsmartly waitlist or early access, it is not us. Please report it to{' '}
      <Mail to={site.supportEmail} />.
    </p>
  </>
)

const pages: Record<Kind, { title: string; heading: string; description: string; body: ReactNode }> = {
  privacy: {
    title: 'Privacy Policy – Settsmartly',
    heading: 'Privacy Policy',
    description: 'How Settsmartly collects, uses and protects the information you share through settsmartly.com.',
    body: privacy,
  },
  terms: {
    title: 'Terms and Conditions – Settsmartly',
    heading: 'Terms and Conditions',
    description: 'The terms that govern your use of the Settsmartly website.',
    body: terms,
  },
  refunds: {
    title: 'Refund Policy – Settsmartly',
    heading: 'Refund Policy',
    description: 'Settsmartly does not sell paid plans yet. Refund terms will be published before any plan goes on sale.',
    body: refunds,
  },
}

const Legal = ({ kind }: { kind: Kind }) => {
  const p = pages[kind]
  return (
    <>
      <PageMeta title={p.title} description={p.description} path={`/${kind}`} />
      <section className="border-b border-ink-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-site max-w-3xl py-14 sm:py-16">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{p.heading}</h1>
          <p className="mt-3 text-sm text-ink-500">Last updated: {site.legalUpdated}</p>
        </div>
      </section>
      <article className="container-site max-w-3xl py-12 text-[16px] leading-relaxed text-ink-700 sm:py-16 [&_li]:mt-2 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
        {p.body}
        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-100 pt-6 text-sm" aria-label="Legal">
          <Link to="/privacy" className="font-medium text-ink-600 hover:text-brand-700">Privacy Policy</Link>
          <Link to="/terms" className="font-medium text-ink-600 hover:text-brand-700">Terms and Conditions</Link>
          <Link to="/refunds" className="font-medium text-ink-600 hover:text-brand-700">Refund Policy</Link>
          <Link to="/contact" className="font-medium text-ink-600 hover:text-brand-700">Contact</Link>
        </nav>
      </article>
    </>
  )
}

export default Legal
