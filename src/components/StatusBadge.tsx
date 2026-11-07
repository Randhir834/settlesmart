import type { FeatureStatus } from '../data/content'

const StatusBadge = ({ status }: { status?: FeatureStatus }) => {
  if (!status) return null
  return (
    <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-800">
      Planned
    </span>
  )
}

export default StatusBadge
