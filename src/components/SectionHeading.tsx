import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  as?: 'h1' | 'h2'
}

const SectionHeading = ({ eyebrow, title, description, align = 'center', as: H = 'h2' }: Props) => (
  <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
    <H className={`${H === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-extrabold leading-tight`}>{title}</H>
    {description && <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">{description}</p>}
  </Reveal>
)

export default SectionHeading
