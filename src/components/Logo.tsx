import { Link } from 'react-router-dom'

const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5" aria-label="Settsmartly home">
    <img src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-xl object-contain" />
    <span className={`font-display text-lg font-extrabold tracking-tight ${inverted ? 'text-white' : 'text-ink'}`}>
      Sett<span className={inverted ? 'text-brand-300' : 'text-brand-700'}>smartly</span>
    </span>
  </Link>
)

export default Logo
