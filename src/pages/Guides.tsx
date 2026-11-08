import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { guides } from '../data/guides'

const Guides = () => (
  <>
    <PageMeta path="/guides" />
    <section className="bg-gradient-to-b from-brand-50 to-white pb-6 pt-12 sm:pt-16">
      <div className="container-site">
        <div className="mx-auto mb-8 flex max-w-2xl justify-center">
          <Breadcrumbs items={[{ name: 'Home', to: '/' }, { name: 'Guides' }]} />
        </div>
        <SectionHeading
          as="h1"
          eyebrow="Guides for flatmates"
          title="Money guides for shared living"
          description="Practical, worked-through answers to the money questions every shared flat runs into: splitting rent, electricity and bills, and settling up when someone moves out."
        />
      </div>
    </section>

    <section className="section pt-10">
      <div className="container-site grid gap-5 md:grid-cols-3">
        {guides.map((g, i) => (
          <Reveal key={g.slug} delay={i * 60}>
            <article className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-7">
              <span className="eyebrow self-start">{g.eyebrow}</span>
              <h2 className="mt-4 text-xl font-extrabold">
                <Link to={`/guides/${g.slug}`} className="hover:text-brand-700">
                  {g.headline}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{g.intro}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1.5 text-ink-500">
                  <Clock className="h-4 w-4" /> {g.minutes} min read
                </span>
                <Link to={`/guides/${g.slug}`} className="inline-flex items-center gap-1 font-semibold text-brand-700" aria-label={`Read: ${g.headline}`}>
                  Read guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <CtaBand source="guides" />
  </>
)

export default Guides
