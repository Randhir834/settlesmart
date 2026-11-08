import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** Visible breadcrumb trail. Matches the BreadcrumbList structured data built in src/seo/schema.ts. */
const Breadcrumbs = ({ items }: { items: { name: string; to?: string }[] }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-500">
      {items.map((it, i) => (
        <li key={it.name} className="flex items-center gap-1">
          {i > 0 && <ChevronRight aria-hidden className="h-3.5 w-3.5" />}
          {it.to ? (
            <Link to={it.to} className="hover:text-brand-700 hover:underline">
              {it.name}
            </Link>
          ) : (
            <span aria-current="page" className="font-medium text-ink-700">
              {it.name}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
)

export default Breadcrumbs
