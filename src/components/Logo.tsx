import { Link } from 'react-router-dom'

export const LOGO_SRC = '/logo-160.png'

/** The Settsmartly app icon on its own. Size it with className (h-* w-*). */
export const AppIcon = ({ className = 'h-9 w-9', alt = '' }: { className?: string; alt?: string }) => (
  <img src={LOGO_SRC} alt={alt} width={160} height={160} className={`object-contain ${className}`} />
)

const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5" aria-label="Settsmartly home">
    <AppIcon className="h-9 w-9" />
    <span className={`font-display text-lg font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
      Sett<span className={inverted ? 'text-brand-300' : 'text-brand-700'}>smartly</span>
    </span>
  </Link>
)

export default Logo
