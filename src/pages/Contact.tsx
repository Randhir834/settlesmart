import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Briefcase, LifeBuoy, Linkedin, CheckCircle2, Loader2 } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FaqList from '../components/FaqList'
import { createDoc, mailto } from '../lib/firestore'
import { faqs } from '../data/content'
import { site } from '../config'

const topics = ['General question', 'Beta / research interview', 'Product feedback', 'Business enquiry', 'Press', 'Other']

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', topic: topics[0], message: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.message.trim().length < 10) {
      setState('error')
      setError('Please add your name, a valid email and a message of at least 10 characters.')
      return
    }
    setState('loading')
    try {
      await createDoc('contact_messages', {
        name: form.name.trim().slice(0, 120),
        email: form.email.trim().toLowerCase(),
        topic: form.topic,
        message: form.message.trim().slice(0, 4000),
        createdAt: new Date(),
      })
      setState('done')
    } catch {
      setState('error')
      setError("We couldn't send your message from the form.")
    }
  }

  // Pre-filled email used when the form can't save (offline, or backend unavailable).
  const emailFallback = mailto(
    form.topic === 'Business enquiry' || form.topic === 'Press' ? site.businessEmail : site.supportEmail,
    `[${form.topic}] Message from ${form.name.trim() || 'website visitor'}`,
    `${form.message.trim()}\n\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}`,
  )

  if (state === 'done') {
    return (
      <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-positive" />
        <h2 className="mt-4 text-2xl font-extrabold">Message sent</h2>
        <p className="mt-2 max-w-sm text-ink-600">Thanks for reaching out. We'll reply to {form.email} as soon as we can.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="label">Name</label>
          <input id="c-name" autoComplete="name" required maxLength={120} value={form.name} onChange={update('name')} className="input" />
        </div>
        <div>
          <label htmlFor="c-email" className="label">Email</label>
          <input id="c-email" type="email" autoComplete="email" required value={form.email} onChange={update('email')} className="input" />
        </div>
      </div>
      <div>
        <label htmlFor="c-topic" className="label">Topic</label>
        <select id="c-topic" value={form.topic} onChange={update('topic')} className="input">
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="c-message" className="label">Message</label>
        <textarea
          id="c-message"
          rows={6}
          required
          maxLength={4000}
          value={form.message}
          onChange={update('message')}
          className="input resize-y"
          placeholder="How can we help?"
        />
      </div>
      {state === 'error' && (
        <p role="alert" className="text-sm text-negative">
          {error}{' '}
          {error.startsWith("We couldn't") && (
            <a href={emailFallback} className="inline-flex items-center gap-1 font-semibold text-brand-700 underline underline-offset-2">
              <Mail className="h-3.5 w-3.5" /> Send it by email instead
            </a>
          )}
        </p>
      )}
      <button type="submit" disabled={state === 'loading'} className="btn-primary w-full py-3.5 text-base sm:w-auto sm:justify-self-start sm:px-8">
        {state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
        Send message
      </button>
      <p className="text-xs text-ink-500">
        We use your details only to reply to you. See our{' '}
        <Link to="/privacy" className="font-medium text-brand-700 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}

const Contact = () => (
  <>
    <PageMeta
      title="Contact Us – Settsmartly"
      description="Get in touch with the Settsmartly team for support, feedback, partnerships and business enquiries."
      path="/contact"
    />
    <section className="bg-gradient-to-b from-brand-50 to-white pb-16 pt-16 sm:pt-20">
      <div className="container-site">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="We'd love to hear from you"
          description="Questions, feedback, partnership ideas or press. Send us a message and a real person will reply."
        />
      </div>
    </section>

    <section className="pb-20 sm:pb-24">
      <div className="container-site grid gap-6 lg:grid-cols-[1fr_1.5fr]">
        <Reveal className="grid content-start gap-4">
          {[
            { icon: LifeBuoy, t: 'Support', d: 'Help with the app or your account.', href: `mailto:${site.supportEmail}`, l: site.supportEmail },
            { icon: Briefcase, t: 'Business enquiries', d: 'Partnerships, integrations and press.', href: `mailto:${site.businessEmail}`, l: site.businessEmail },
            { icon: Linkedin, t: 'LinkedIn', d: 'Follow our progress towards launch.', href: site.linkedin, l: 'linkedin.com/company/settsmartly' },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition hover:border-brand-200"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display font-bold text-ink">{c.t}</p>
                <p className="mt-0.5 text-sm text-ink-500">{c.d}</p>
                <p className="mt-2 break-all text-sm font-semibold text-brand-700 group-hover:underline">{c.l}</p>
              </div>
            </a>
          ))}
          <div className="flex gap-3 rounded-2xl bg-ink-50 p-5 text-sm text-ink-600">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
            <p>
              Want early access instead?{' '}
              <Link to="/get-started" className="font-semibold text-brand-700 hover:underline">
                Join the waitlist
              </Link>
              .
            </p>
          </div>
        </Reveal>
        <Reveal delay={80} className="card p-6 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>

    <section className="section bg-ink-50/60">
      <div className="container-site max-w-3xl">
        <SectionHeading title="Common questions" />
        <Reveal className="mt-10">
          <FaqList items={faqs.slice(0, 5)} />
        </Reveal>
      </div>
    </section>
  </>
)

export default Contact
