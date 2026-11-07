import type { ReactNode } from 'react'
import { ArrowLeft, Check, ChevronRight, Plus, ScanLine, ShoppingCart, Zap, Wifi, Utensils, Home as HomeIcon } from 'lucide-react'

/**
 * Coded mockups of the Settsmartly app. Names and amounts are illustrative sample data.
 * To use real app screenshots instead, render <PhoneFrame><img src="/screens/x.png" … /></PhoneFrame>.
 */

export const PhoneFrame = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div
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
      <div>
        <p className="text-[10px] font-medium text-ink-500">Group</p>
        <p className="font-display text-[15px] font-bold text-ink">Flat 302 · Koramangala</p>
      </div>
      <div className="flex -space-x-2">
        <Avatar name="Aarav" />
        <Avatar name="Neha" tone="green" />
        <Avatar name="Kabir" tone="amber" />
      </div>
    </div>

    <div className="mt-4 rounded-2xl bg-brand-700 p-4 text-white">
      <p className="text-[11px] text-brand-100">You are owed overall</p>
      <p className="amount mt-1 font-display text-[28px] font-extrabold leading-none">₹28,027.00</p>
      <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-xl bg-white/10 px-2.5 py-2">
          <p className="text-brand-100">You get</p>
          <p className="amount mt-0.5 text-[13px] font-bold">₹29,240</p>
        </div>
        <div className="rounded-xl bg-white/10 px-2.5 py-2">
          <p className="text-brand-100">You owe</p>
          <p className="amount mt-0.5 text-[13px] font-bold">₹1,213</p>
        </div>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <p className="text-[12px] font-bold text-ink">Recent expenses</p>
      <p className="text-[10px] font-semibold text-brand-700">See all</p>
    </div>
    <div className="mt-2 space-y-2">
      {[
        { icon: HomeIcon, title: 'November rent', meta: 'You paid · split 3 ways', amt: '₹42,000', you: '+₹28,000', pos: true },
        { icon: ShoppingCart, title: 'Groceries – BigBasket', meta: 'Neha paid', amt: '₹2,640', you: '−₹880', pos: false },
        { icon: Zap, title: 'Electricity bill', meta: 'You paid · recurring', amt: '₹1,860', you: '+₹1,240', pos: true },
        { icon: Wifi, title: 'Wi-Fi', meta: 'Kabir paid', amt: '₹999', you: '−₹333', pos: false },
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
      <p className="text-[10px] font-medium text-ink-500">Dinner at Toit</p>
      <p className="amount mt-1 font-display text-[30px] font-extrabold text-ink">₹3,600</p>
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
        { n: 'Riya', s: 1, a: '₹720', t: 'green' as const },
        { n: 'Kabir', s: 1, a: '₹720', t: 'amber' as const },
        { n: 'Dev', s: 1, a: '₹720', t: 'ink' as const },
      ].map((m) => (
        <div key={m.n} className="flex items-center gap-2.5 rounded-xl border border-ink-100 px-2.5 py-2">
          <Avatar name={m.n} tone={m.t} />
          <p className="flex-1 text-[11px] font-semibold text-ink">{m.n}</p>
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
    <p className="mt-1 text-[10px] text-ink-500">Goa trip · 5 members</p>
    <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50 p-3 text-[10px] text-brand-800">
      <span className="font-bold">9 payments → 3.</span> We simplified who pays whom.
    </div>
    <div className="mt-3 space-y-2">
      {[
        { from: 'You', to: 'Aditi', amt: '₹2,150', you: true },
        { from: 'Rohan', to: 'Aditi', amt: '₹1,480' },
        { from: 'Meera', to: 'Sam', amt: '₹960' },
      ].map((s) => (
        <div key={s.from + s.to} className={`rounded-xl border px-3 py-2.5 ${s.you ? 'border-brand-300 bg-white shadow-card' : 'border-ink-100'}`}>
          <div className="flex items-center gap-2">
            <Avatar name={s.from} tone={s.you ? 'brand' : 'ink'} />
            <ChevronRight className="h-3.5 w-3.5 text-ink-400" />
            <Avatar name={s.to} tone="green" />
            <p className="ml-1 flex-1 text-[11px] font-semibold text-ink">
              {s.from} → {s.to}
            </p>
            <p className="amount text-[12px] font-bold text-ink">{s.amt}</p>
          </div>
          {s.you && (
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px] font-semibold">
              <span className="rounded-lg bg-brand-700 py-2 text-center text-white">Pay via UPI</span>
              <span className="rounded-lg border border-ink-200 py-2 text-center text-ink-700">Mark as paid</span>
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="mt-4 rounded-xl bg-ink-50 p-3">
      <p className="text-[10px] font-bold text-ink">Open with</p>
      <div className="mt-2 flex gap-2">
        {['UPI app 1', 'UPI app 2', 'UPI app 3'].map((a) => (
          <span key={a} className="flex-1 rounded-lg bg-white py-2 text-center text-[9px] font-medium text-ink-500 ring-1 ring-ink-100">
            {a}
          </span>
        ))}
      </div>
    </div>
    <p className="mt-auto mb-4 text-center text-[9px] leading-snug text-ink-400">
      Payments happen in your UPI app. Settsmartly never moves your money.
    </p>
  </div>
)

/** Monthly analytics screen. */
export const AnalyticsScreen = () => {
  const bars = [42, 58, 47, 66, 52, 74]
  const cats = [
    { icon: HomeIcon, name: 'Rent & bills', amt: '₹30,240', pct: 62 },
    { icon: ShoppingCart, name: 'Groceries', amt: '₹8,420', pct: 18 },
    { icon: Utensils, name: 'Food & dining', amt: '₹6,110', pct: 13 },
    { icon: ScanLine, name: 'Other', amt: '₹3,380', pct: 7 },
  ]
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <p className="font-display text-[14px] font-bold text-ink">Insights</p>
      <p className="text-[10px] text-ink-500">November · all groups</p>
      <div className="mt-3 rounded-2xl border border-ink-100 p-3">
        <p className="text-[10px] text-ink-500">Your share this month</p>
        <p className="amount font-display text-[22px] font-extrabold text-ink">₹48,150</p>
        <p className="text-[9.5px] font-semibold text-positive">6% lower than October</p>
        <div className="mt-3 flex h-20 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className={`w-full rounded-md ${i === bars.length - 1 ? 'bg-brand-700' : 'bg-brand-100'}`} style={{ height: `${h}%` }} />
              <span className="text-[8px] text-ink-400">{['J', 'J', 'A', 'S', 'O', 'N'][i]}</span>
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
