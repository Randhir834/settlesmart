import { useState } from 'react'
import { Plus } from 'lucide-react'
import type { Faq } from '../data/content'

const FaqList = ({ items }: { items: Faq[] }) => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-bold text-ink transition hover:text-brand-700 sm:px-6"
              >
                {f.q}
                <Plus
                  className={`h-5 w-5 shrink-0 text-brand-700 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-600 sm:px-6">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqList
