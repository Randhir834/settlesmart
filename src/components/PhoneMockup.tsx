import { isValidElement, type ReactNode } from 'react'
import { AppIcon } from './Logo'
import { ArrowLeft, Check, ChevronRight, Plus, ShoppingCart, Zap, Wifi, Droplets, Home as HomeIcon, Mic, Pencil, DoorOpen } from 'lucide-react'

/**
 * Coded mockups of the Settsmartly app. Names and amounts are illustrative sample data.
 * To use real app screenshots instead, render <PhoneFrame><img src="/screens/x.png" … /></PhoneFrame>.
 */

/** Accessible descriptions of each mockup screen, so it reads as one image rather than scattered sample text. */
const screenLabels = new Map<unknown, string>()
const labelFor = (children: ReactNode) =>
  (isValidElement(children) && screenLabels.get(children.type)) || 'Illustrative Settsmartly app screen'

export const PhoneFrame = ({ children, className = '', label }: { children: ReactNode; className?: string; label?: string }) => (
  <div
    role="img"
    aria-label={label ?? labelFor(children)}
    className={`relative w-[272px] rounded-[2.6rem] bg-ink p-[9px] shadow-phone ring-1 ring-ink-800 sm:w-[300px] ${className}`}
  >
    <div className="relative h-[560px] overflow-hidden rounded-[2.1rem] bg-white sm:h-[610px]">
      <div className="absolute left-1/2 top-2 z-10 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-ink" />
      <div className="flex h-8 items-end justify-between px-6 pb-0.5 text-[10px] font-semibold text-ink">
        <span className="amount">9:41</span>
        <span className="flex items-center gap-1">
          <Wifi className="h-3 w-3" />
          <span className="inline-block h-2 w-4 rounded-[3px] border border-ink" />
        </span>
      </div>
      {children}
    </div>
  </div>
)

const Avatar = ({ name, tone = 'brand' }: { name: string; tone?: 'brand' | 'ink' | 'green' | 'amber' }) => {
  const tones = {
    brand: 'bg-brand-100 text-brand-700',
    ink: 'bg-ink-100 text-ink-700',
    green: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-800',
  }
  return (
    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${tones[tone]}`}>
      {name[0]}
    </span>
  )
}

/** Group overview: balance card + recent expenses. Used in the hero. */
export const GroupScreen = () => (
  <div className="flex h-full flex-col px-4 pt-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AppIcon className="h-8 w-8" />
        <div>
          <p className="text-[10px] font-medium text-ink-500">Household · 5 members</p>
          <p className="font-display text-[15px] font-bold text-ink">Bangalore Flat</p>
        </div>
      </div>
      <div className="flex -space-x-2">
        <Avatar name="Aman" />
        <Avatar name="Neha" tone="green" />
        <Avatar name="Kabir" tone="amber" />
      </div>
    </div>

    <div className="mt-4 rounded-2xl bg-brand-700 p-4 text-white">
      <p className="text-[11px] text-brand-100">November · you are owed</p>
      <p className="amount mt-1 font-display text-[28px] font-bold leading-none">₹9,900.20</p>
      <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-xl bg-white/10 px-2.5 py-2">
          <p className="text-brand-100">Household spent</p>
          <p className="amount mt-0.5 text-[13px] font-bold">₹25,499</p>
        </div>
        <div className="rounded-xl bg-white/10 px-2.5 py-2">
          <p className="text-brand-100">Your share</p>
          <p className="amount mt-0.5 text-[13px] font-bold">₹5,099.80</p>
        </div>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <p className="text-[12px] font-bold text-ink">Recent expenses</p>
      <p className="text-[10px] font-semibold text-brand-700">See all</p>
    </div>
    <div className="mt-2 space-y-2">
      {[
        { icon: HomeIcon, title: 'November rent', meta: 'You paid · split 5 ways', amt: '₹15,000', you: '+₹12,000', pos: true },
        { icon: ShoppingCart, title: 'Groceries, BigBasket', meta: 'Neha paid', amt: '₹5,000', you: '−₹1,000', pos: false },
        { icon: Zap, title: 'Electricity bill', meta: 'Kabir paid', amt: '₹2,000', you: '−₹400', pos: false },
        { icon: Wifi, title: 'Internet', meta: 'Kabir paid', amt: '₹999', you: '−₹199.80', pos: false },
      ].map((e) => (
        <div key={e.title} className="flex items-center gap-2.5 rounded-xl border border-ink-100 px-2.5 py-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <e.icon className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-semibold text-ink">{e.title}</p>
            <p className="text-[9.5px] text-ink-500">{e.meta}</p>
          </div>
          <div className="text-right">
            <p className="amount text-[11px] font-semibold text-ink">{e.amt}</p>
            <p className={`amount text-[9.5px] font-semibold ${e.pos ? 'text-positive' : 'text-negative'}`}>{e.you}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute inset-x-0 bottom-4 flex justify-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2.5 text-[11px] font-semibold text-white shadow-lift">
        <Plus className="h-3.5 w-3.5" /> Add expense
      </span>
    </div>
  </div>
)

/** Add-expense screen with split options. */
export const AddExpenseScreen = () => (
  <div className="flex h-full flex-col px-4 pt-3">
    <div className="flex items-center gap-2">
      <ArrowLeft className="h-4 w-4 text-ink" />
      <p className="font-display text-[14px] font-bold text-ink">Add expense</p>
    </div>
    <div className="mt-4 rounded-2xl bg-brand-50 p-4 text-center">
      <p className="text-[10px] font-medium text-ink-500">House party supplies · Bangalore Flat</p>
      <p className="amount mt-1 font-display text-[30px] font-bold text-ink">₹3,600</p>
      <p className="mt-1 text-[10px] text-ink-500">
        Paid by <span className="font-semibold text-ink">You</span>
      </p>
    </div>
    <p className="mt-4 text-[11px] font-bold text-ink">Split</p>
    <div className="mt-2 grid grid-cols-4 gap-1 rounded-xl bg-ink-50 p-1 text-center text-[10px] font-semibold">
      {['Equal', '%', 'Exact', 'Shares'].map((t, i) => (
        <span key={t} className={`rounded-lg py-1.5 ${i === 3 ? 'bg-white text-brand-700 shadow-sm' : 'text-ink-500'}`}>
          {t}
        </span>
      ))}
    </div>
    <div className="mt-3 space-y-2">
      {[
        { n: 'You', s: 2, a: '₹1,440', t: 'brand' as const },
        { n: 'Neha', s: 1, a: '₹720', t: 'green' as const },
        { n: 'Kabir', s: 1, a: '₹720', t: 'amber' as const },
        { n: 'Riya', s: 1, a: '₹720', t: 'ink' as const },
        { n: 'Aman', s: 0, a: '—', t: 'ink' as const },
      ].map((m) => (
        <div key={m.n} className={`flex items-center gap-2.5 rounded-xl border border-ink-100 px-2.5 py-1.5 ${m.s === 0 ? 'opacity-50' : ''}`}>
          <Avatar name={m.n} tone={m.t} />
          <p className="flex-1 text-[11px] font-semibold text-ink">
            {m.n}
            {m.s === 0 && <span className="ml-1 font-normal text-ink-500">· not included</span>}
          </p>
          <span className="amount rounded-md bg-ink-50 px-2 py-0.5 text-[10px] font-semibold text-ink-600">×{m.s}</span>
          <p className="amount w-14 text-right text-[11px] font-bold text-ink">{m.a}</p>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2 text-[10px] font-semibold text-emerald-800">
      <span className="flex items-center gap-1.5">
        <Check className="h-3.5 w-3.5" /> Adds up to total
      </span>
      <span className="amount">₹3,600 / ₹3,600</span>
    </div>
    <div className="mt-auto mb-4">
      <span className="block rounded-xl bg-brand-700 py-3 text-center text-[12px] font-semibold text-white">Save expense</span>
    </div>
  </div>
)

/** Settle-up screen with simplified debts and UPI handoff. */
export const SettleScreen = () => (
  <div className="flex h-full flex-col px-4 pt-3">
    <div className="flex items-center gap-2">
      <ArrowLeft className="h-4 w-4 text-ink" />
      <p className="font-display text-[14px] font-bold text-ink">Settle up</p>
    </div>
    <p className="mt-1 text-[10px] text-ink-500">Bangalore Flat · November</p>
    <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50 p-3 text-[10px] text-brand-800">
      <span className="font-bold">4 payments settle November.</span> Everyone pays the person who covered rent.
    </div>
    <div className="mt-3 space-y-2">
      {[
        { from: 'Aman', to: 'You', amt: '₹5,099.80', you: true },
        { from: 'Riya', to: 'You', amt: '₹2,599.80' },
        { from: 'Kabir', to: 'You', amt: '₹2,100.80' },
        { from: 'Neha', to: 'You', amt: '₹99.80' },
      ].map((s) => (
        <div key={s.from + s.to} className={`rounded-xl border px-3 py-2.5 ${s.you ? 'border-brand-300 bg-white shadow-card' : 'border-ink-100'}`}>
          <div className="flex items-center gap-2">
            <Avatar name={s.from} tone={s.you ? 'brand' : 'ink'} />
            <ChevronRight className="h-3.5 w-3.5 text-ink-500" />
            <Avatar name={s.to} tone="green" />
            <p className="ml-1 flex-1 text-[11px] font-semibold text-ink">
              {s.from} → {s.to}
            </p>
            <p className="amount text-[12px] font-bold text-ink">{s.amt}</p>
          </div>
          {s.you && (
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px] font-semibold">
              <span className="rounded-lg bg-brand-700 py-2 text-center text-white">Share UPI link</span>
              <span className="rounded-lg border border-ink-200 py-2 text-center text-ink-700">Mark received</span>
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="mt-3 rounded-xl bg-ink-50 p-3 text-[10px] leading-snug text-ink-600">
      Aman opens the link in his own UPI app with the amount filled in. You confirm once the money arrives.
    </div>
    <p className="mt-auto mb-4 text-center text-[9px] leading-snug text-ink-500">
      Payments happen in your UPI app. Settsmartly never moves your money.
    </p>
  </div>
)

/** Monthly analytics screen. */
export const AnalyticsScreen = () => {
  // Household totals (₹ thousands) for Jun–Nov; November = ₹25,499.
  const months = [26.8, 27.4, 26.1, 28.2, 27.1, 25.5]
  const bars = months.map((m) => Math.round((m / 30) * 100))
  const cats = [
    { icon: HomeIcon, name: 'Rent', amt: '₹15,000', pct: 59 },
    { icon: ShoppingCart, name: 'Groceries & supplies', amt: '₹6,000', pct: 24 },
    { icon: Zap, name: 'Electricity & internet', amt: '₹2,999', pct: 12 },
    { icon: Droplets, name: 'Water & maintenance', amt: '₹1,500', pct: 6 },
  ]
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <p className="font-display text-[14px] font-bold text-ink">Insights</p>
      <p className="text-[10px] text-ink-500">Bangalore Flat · November</p>
      <div className="mt-3 rounded-2xl border border-ink-100 p-3">
        <p className="text-[10px] text-ink-500">Household spent this month</p>
        <p className="amount font-display text-[22px] font-bold text-ink">₹25,499</p>
        <p className="text-[9.5px] font-semibold text-positive">6% lower than October</p>
        <div className="mt-3 flex h-20 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className={`w-full rounded-md ${i === bars.length - 1 ? 'bg-brand-700' : 'bg-brand-100'}`} style={{ height: `${h}%` }} />
              <span className="text-[8px] text-ink-500">{['J', 'J', 'A', 'S', 'O', 'N'][i]}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[11px] font-bold text-ink">By category</p>
      <div className="mt-2 space-y-2.5">
        {cats.map((c) => (
          <div key={c.name}>
            <div className="flex items-center gap-2 text-[10.5px]">
              <c.icon className="h-3.5 w-3.5 text-brand-700" />
              <span className="flex-1 font-medium text-ink">{c.name}</span>
              <span className="amount font-semibold text-ink">{c.amt}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-ink-100">
              <div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Voice assistant: transcript + AI expense draft awaiting confirmation. Used in the hero.
 * `live` plays a short sequence (message, then draft) and animates the mic and waveform.
 */
export const VoiceScreen = ({ live = false }: { live?: boolean }) => {
  const step = (delay: number) =>
    live ? { className: 'animate-rise', style: { animationDelay: `${delay}ms` } } : { className: '', style: undefined }
  const bubble = step(700)
  const caption = step(950)
  const draft = step(1350)
  const note = step(1750)
  return (
  <div className="flex h-full flex-col bg-gradient-to-b from-white to-brand-50/60 px-4 pt-3">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[10px] font-medium text-ink-500">Assistant</p>
        <p className="font-display text-[15px] font-bold text-ink">Bangalore Flat</p>
      </div>
      <span className="rounded-full bg-white px-2 py-1 text-[9px] font-semibold text-ink-600 ring-1 ring-ink-100">Listening</span>
    </div>

    <div
      className={`mt-4 ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-brand-700 px-3 py-2.5 text-[11px] leading-snug text-white ${bubble.className}`}
      style={bubble.style}
    >
      “I paid 2,500 for groceries today. Split equally between all five of us.”
    </div>
    <p className={`mt-1 text-right text-[9px] text-ink-500 ${caption.className}`} style={caption.style}>
      You · voice
    </p>

    <div className={`mt-3 rounded-2xl border border-ink-100 bg-white p-3.5 shadow-card ${draft.className}`} style={draft.style}>
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-700">Expense draft</p>
        <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-800 ring-1 ring-amber-200">Review</span>
      </div>
      <p className="amount mt-2 font-display text-[26px] font-bold leading-none text-ink">₹2,500</p>
      <p className="mt-1 text-[10px] text-ink-500">Groceries · Bangalore Flat</p>
      <div className="mt-3 space-y-1.5 border-t border-ink-100 pt-3 text-[10.5px]">
        {[
          ['Paid by', 'You'],
          ['Split', 'Equally · 5 members'],
          ['Each person', '₹500'],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <span className="text-ink-500">{k}</span>
            <span className="amount font-semibold text-ink">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex -space-x-1.5">
        {['Y', 'A', 'N', 'K', 'R'].map((n, i) => (
          <span key={i} className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-700 ring-2 ring-white">
            {n}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto] gap-2 text-[11px] font-semibold">
        <span className="flex items-center justify-center gap-1 rounded-lg bg-brand-700 py-2 text-white">
          <Check className="h-3.5 w-3.5" /> Confirm & save
        </span>
        <span className="flex items-center justify-center rounded-lg border border-ink-200 px-3 text-ink-700">
          <Pencil className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>

    <p className={`mt-2 text-center text-[9px] text-ink-500 ${note.className}`} style={note.style}>
      Nothing is saved until you confirm
    </p>

    <div className="mt-auto mb-5 flex flex-col items-center gap-2">
      <div className="flex h-5 items-center gap-[3px]" aria-hidden>
        {[6, 12, 18, 10, 20, 14, 8, 16, 11, 6].map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-brand-300"
            style={{
              height: h,
              animation: live ? `wave ${0.9 + (i % 3) * 0.25}s ease-in-out ${i * 0.07}s infinite` : undefined,
            }}
          />
        ))}
      </div>
      <span className="relative inline-flex h-12 w-12 items-center justify-center">
        {live && <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-400" />}
        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-lift ring-4 ring-brand-100">
          <Mic className="h-5 w-5" />
        </span>
      </span>
      <span className="text-[9px] font-medium text-ink-500">English · हिंदी · Hinglish</span>
    </div>
  </div>
  )
}

/** Roommate move-out: pro-rata rent share and final settlement. */
export const MoveOutScreen = () => (
  <div className="flex h-full flex-col px-4 pt-3">
    <div className="flex items-center gap-2">
      <ArrowLeft className="h-4 w-4 text-ink" />
      <p className="font-display text-[14px] font-bold text-ink">Member leaving</p>
    </div>
    <div className="mt-4 flex items-center gap-3 rounded-2xl bg-brand-50 p-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-700">A</span>
      <div className="flex-1">
        <p className="text-[12px] font-bold text-ink">Aman</p>
        <p className="text-[10px] text-ink-500">Moving out on 15 Dec</p>
      </div>
      <DoorOpen className="h-5 w-5 text-brand-700" />
    </div>

    <p className="mt-4 text-[11px] font-bold text-ink">December rent share</p>
    <p className="text-[9.5px] text-ink-500">Policy: daily pro-rata (set by your flat)</p>
    <div className="mt-2 space-y-1.5 rounded-xl border border-ink-100 p-3 text-[10.5px]">
      {[
        ['Flat rent (5 members)', '₹15,000'],
        ['Aman’s monthly share', '₹3,000'],
        ['Days occupied', '15 of 30'],
      ].map(([k, v]) => (
        <div key={k} className="flex justify-between">
          <span className="text-ink-500">{k}</span>
          <span className="amount font-semibold text-ink">{v}</span>
        </div>
      ))}
      <div className="flex justify-between border-t border-ink-100 pt-1.5 text-[11.5px]">
        <span className="font-semibold text-ink">Rent for December</span>
        <span className="amount font-bold text-brand-700">₹1,500</span>
      </div>
    </div>

    <p className="mt-4 text-[11px] font-bold text-ink">Before Aman leaves</p>
    <div className="mt-2 space-y-1.5 text-[10.5px]">
      {[
        { t: 'Pending balances settled', done: true },
        { t: 'Removed from future expenses', done: true },
        { t: 'Security deposit tracked separately', done: false },
        { t: 'Invite replacement flatmate', done: false },
      ].map((s) => (
        <div key={s.t} className="flex items-center gap-2 rounded-lg border border-ink-100 px-2.5 py-2">
          <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${s.done ? 'bg-positive text-white' : 'ring-1 ring-ink-300'}`}>
            {s.done && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
          </span>
          <span className={s.done ? 'text-ink' : 'text-ink-500'}>{s.t}</span>
        </div>
      ))}
    </div>
    <p className="mt-auto mb-4 text-center text-[9px] text-ink-500">History stays intact for everyone</p>
  </div>
)

screenLabels.set(GroupScreen, 'Settsmartly app: household overview for a five-member Bangalore flat, showing ₹25,499 spent this month and recent shared expenses')
screenLabels.set(AddExpenseScreen, 'Settsmartly app: adding a ₹3,600 expense and splitting it between flatmates by shares')
screenLabels.set(SettleScreen, 'Settsmartly app: settle-up screen suggesting four payments and a UPI payment link')
screenLabels.set(AnalyticsScreen, 'Settsmartly app: monthly household spending insights with a category breakdown for rent, groceries and utilities')
screenLabels.set(VoiceScreen, 'Settsmartly app: AI voice assistant turning a spoken request into a ₹2,500 grocery expense split equally between five flatmates, awaiting confirmation')
screenLabels.set(MoveOutScreen, 'Settsmartly app: a flatmate moving out mid-month, with a pro-rata rent share of ₹1,500 and a settlement checklist')
