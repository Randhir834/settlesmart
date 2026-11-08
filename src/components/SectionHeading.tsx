import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  as?: 'h1' | 'h2'
}

/**
 * On an h1 the eyebrow is part of the heading (as on the home page), so each page's main heading
 * carries the keyword phrase that names the page ("Shared expense app features", "Settsmartly pricing").
 * On h2s the eyebrow stays a separate label.
 */
const SectionHeading = ({ eyebrow, title, description, align = 'center', as: H = 'h2' }: Props) => {
  const size = `${H === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-extrabold leading-tight`
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {H === 'h1' && eyebrow ? (
        <h1 className={size}>
          <span className="eyebrow font-sans leading-normal">{eyebrow}</span>
          <span className="sr-only"> – </span>
          <span className="mt-4 block">{title}</span>
        </h1>
      ) : (
        <>
          {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
          <H className={size}>{title}</H>
        </>
      )}
      {description && <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">{description}</p>}
    </Reveal>
  )
}

export default SectionHeading
