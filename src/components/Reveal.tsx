import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

/** Fades content up once it scrolls into view. Disabled under prefers-reduced-motion (see index.css). */
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  )
}

export default Reveal
