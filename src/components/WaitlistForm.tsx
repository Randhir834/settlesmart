import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Loader2, Mail } from 'lucide-react'
import { createDoc, sha256, mailto } from '../lib/firestore'
import { segments } from '../data/content'
import { site } from '../config'

type State = 'idle' | 'loading' | 'done' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Props {
  /** compact = single email row (CTA bands); full = name + use case too (Get Started page). */
  variant?: 'compact' | 'full'
  source: string
  tone?: 'light' | 'dark'
}

const WaitlistForm = ({ variant = 'compact', source, tone = 'light' }: Props) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [useCase, setUseCase] = useState('')
  const [city, setCity] = useState('')
  const [interview, setInterview] = useState(false)
  const [state, setState] = useState<State>('idle')
  const [message, setMessage] = useState('')
  const [fallback, setFallback] = useState('')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim().toLowerCase()
    if (!EMAIL_RE.test(trimmed)) {
      setState('error')
      setFallback('')
      setMessage('Please enter a valid email address.')
      return
    }
    setState('loading')
    setFallback('')
    try {
      const result = await createDoc(
        'waitlist',
        {
          email: trimmed,
          name: name.trim().slice(0, 120),
          useCase,
          city: city.trim().slice(0, 60),
          interview: interview || undefined,
          source: source.slice(0, 40),
          createdAt: new Date(),
        },
        await sha256(trimmed),
      )
      setState('done')
      setMessage(
        result === 'duplicate'
          ? "You're already on the list. We'll be in touch."
          : "You're on the list. We'll email you when early access opens.",
      )
    } catch {
      // Saving failed (offline, or rules not deployed). Let the visitor join by email instead.
      setState('error')
      setMessage("We couldn't add you automatically.")
      setFallback(
        mailto(
          site.businessEmail,
          'Add me to the Settsmartly waitlist',
          `Please add me to the Settsmartly waitlist.\n\nEmail: ${trimmed}${name.trim() ? `\nName: ${name.trim()}` : ''}${
            useCase ? `\nUse case: ${useCase}` : ''
          }${city.trim() ? `\nCity: ${city.trim()}` : ''}${interview ? '\nHappy to chat about how my flat manages money.' : ''}`,
        ),
      )
    }
  }

  const dark = tone === 'dark'

  if (state === 'done') {
    return (
      <div
        role="status"
        className={`flex items-start gap-3 rounded-2xl p-4 text-left text-sm ${
          dark ? 'bg-white/10 text-white' : 'border border-emerald-200 bg-emerald-50 text-emerald-900'
        }`}
      >
        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${dark ? 'text-emerald-300' : 'text-emerald-600'}`} />
        <span>{message}</span>
      </div>
    )
  }

  const feedback = state === 'error' && (
    <p role="alert" className={`mt-2 text-left text-sm ${dark ? 'text-rose-200' : 'text-negative'}`}>
      {message}{' '}
      {fallback && (
        <a
          href={fallback}
          className={`inline-flex items-center gap-1 font-semibold underline underline-offset-2 ${dark ? 'text-white' : 'text-brand-700'}`}
        >
          <Mail className="h-3.5 w-3.5" /> Join by email instead
        </a>
      )}
    </p>
  )

  if (variant === 'compact') {
    return (
      <form onSubmit={submit} noValidate className="w-full">
        <div className="flex flex-col gap-2 sm:flex-row">
          <label htmlFor={`wl-email-${source}`} className="sr-only">
            Email address
          </label>
          <input
            id={`wl-email-${source}`}
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input flex-1 ${
              dark ? 'border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20' : ''
            }`}
          />
          <button
            type="submit"
            disabled={state === 'loading'}
            className={dark ? 'btn bg-white px-6 text-brand-800 hover:bg-brand-50' : 'btn-primary px-6'}
          >
            {state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
            Join the waitlist
          </button>
        </div>
        {feedback}
      </form>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <div>
        <label htmlFor="wl-name" className="label">
          Name <span className="font-normal text-ink-400">(optional)</span>
        </label>
        <input id="wl-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className="input" maxLength={120} />
      </div>
      <div>
        <label htmlFor="wl-email-full" className="label">
          Email address
        </label>
        <input
          id="wl-email-full"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="wl-usecase" className="label">
          I'll mostly use Settsmartly with… <span className="font-normal text-ink-400">(optional)</span>
        </label>
        <select id="wl-usecase" value={useCase} onChange={(e) => setUseCase(e.target.value)} className="input">
          <option value="">Choose one</option>
          {segments.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title.replace('For ', '')}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="wl-city" className="label">
          City <span className="font-normal text-ink-400">(optional)</span>
        </label>
        <input
          id="wl-city"
          autoComplete="address-level2"
          list="wl-cities"
          placeholder="e.g. Bengaluru"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
          maxLength={60}
        />
        <datalist id="wl-cities">
          {['Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai', 'Delhi NCR', 'Kolkata'].map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </div>
      <label htmlFor="wl-interview" className="flex cursor-pointer items-start gap-3 rounded-xl border border-brand-100 bg-brand-50 p-3.5">
        <input
          id="wl-interview"
          type="checkbox"
          checked={interview}
          onChange={(e) => setInterview(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-700"
        />
        <span className="text-sm text-ink-700">
          <span className="font-semibold text-ink">Happy to chat.</span> I’m open to a short call about how my flat manages
          money, and to joining the early beta.
        </span>
      </label>
      <button type="submit" disabled={state === 'loading'} className="btn-primary mt-1 w-full py-3.5 text-base">
        {state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
        Join the waitlist <ArrowRight className="h-4 w-4" />
      </button>
      {feedback}
      <p className="text-xs leading-relaxed text-ink-500">
        We'll only use your email to tell you about Settsmartly's launch. No spam, unsubscribe anytime. See our{' '}
        <Link to="/privacy" className="font-medium text-brand-700 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}

export default WaitlistForm
