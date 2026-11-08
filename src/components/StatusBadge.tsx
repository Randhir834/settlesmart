import type { FeatureStatus } from '../data/content'

const StatusBadge = ({ status }: { status?: FeatureStatus }) => {
  if (!status) return null
  return (
    <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
      Planned
    </span>
  )
}

export default StatusBadge
