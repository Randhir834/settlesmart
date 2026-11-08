import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react'
import PageMeta, { type PagePath } from '../components/PageMeta'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqList from '../components/FaqList'
import CtaBand from '../components/CtaBand'
import { guides, type Guide as GuideData } from '../data/guides'
import data from '../data/pages.json'

const pages = data.pages as Record<string, { published?: string }>

/** Formats an ISO date (2026-11-07) as "7 November 2026" without depending on the runtime's locale data. */
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${months[m - 1]} ${y}`
}

const Guide = ({ guide }: { guide: GuideData }) => {
  const path = `/guides/${guide.slug}` as PagePath
  const published = pages[path]?.published
  const related = guides.filter((g) => g.slug !== guide.slug)
  return (
    <>
      <PageMeta path={path} />
      <section className="border-b border-ink-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-site max-w-3xl py-12 sm:py-16">
          <Breadcrumbs items={[{ name: 'Home', to: '/' }, { name: 'Guides', to: '/guides' }, { name: guide.eyebrow }]} />
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="eyebrow font-sans leading-normal">{guide.eyebrow}</span>
            <span className="sr-only"> – </span>
            <span className="mt-4 block">{guide.headline}</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">{guide.intro}</p>
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {guide.minutes} min read
            </span>
            {published && <span>Published {formatDate(published)} by the Settsmartly team</span>}
          </p>
        </div>
      </section>

      <article className="container-site max-w-3xl py-12 text-[17px] leading-relaxed text-ink-700 sm:py-16 [&_li]:mt-2 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
        <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:p-6">
          <p className="!mt-0 font-display text-lg font-bold text-ink">Key takeaways</p>
          <ul className="!list-none !pl-0">
            {guide.takeaways.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {guide.body}

        <h2 id="faq" className="mt-14 scroll-mt-24 text-2xl font-extrabold text-ink sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 text-base">
          <FaqList items={guide.faqs} />
        </div>

        <aside className="mt-14 border-t border-ink-100 pt-8" aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-xl font-extrabold text-ink">
            More guides for flatmates
          </h2>
          <ul className="!list-none !pl-0">
            {related.map((g) => (
              <li key={g.slug}>
                <Link
                  to={`/guides/${g.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-ink-100 bg-white p-4 text-[15px] font-semibold text-ink transition hover:border-brand-200 hover:text-brand-700"
                >
                  {g.headline}
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      <CtaBand source={`guide-${guide.slug}`} />
    </>
  )
}

export default Guide
