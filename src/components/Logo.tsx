import { Link } from 'react-router-dom'


/** Rendered width from the Tailwind height class (h-9 → 36px), so the browser picks the smallest file. */
const sizesFor = (className: string) => {
  const m = className.match(/(?:^|\s)h-(\d+)(?:\s|$)/)
  return m ? `${Number(m[1]) * 4}px` : '64px'
}

/** The Settsmartly app icon on its own. Size it with className (h-* w-*). */
export const AppIcon = ({
  className = 'h-9 w-9',
  alt = '',
  eager = false,
}: {
  className?: string
  /** Empty by default: the icon is decorative wherever the name "Settsmartly" is already written next to it. */
  alt?: string
  /** Load immediately (header logo); everything else loads lazily. */
  eager?: boolean
}) => (
  <img
    src="/logo-160.webp"
    srcSet="/logo-80.webp 80w, /logo-160.webp 160w"
    sizes={sizesFor(className)}
    alt={alt}
    width={160}
    height={160}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    className={`object-contain ${className}`}
  />
)

const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5" title="Settsmartly home">
    <AppIcon className="h-9 w-9" eager />
    <span className={`font-display text-lg font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
      Sett<span className={inverted ? 'text-brand-300' : 'text-brand-700'}>smartly</span>
    </span>
  </Link>
)

export default Logo
