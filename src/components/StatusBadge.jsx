import PropTypes from 'prop-types';
import { Check, Loader2 } from 'lucide-react';

// A pill badge communicating a status. Three variants:
//  - current:     green tint, pulsing dot (e.g. "Current Role")
//  - completed:   green tint, check icon
//  - in-progress: amber tint, spinning loader
export default function StatusBadge({ variant, label }) {
  const isWarning = variant === 'in-progress';

  const tint = isWarning
    ? 'bg-[var(--warning-bg)] border-[var(--warning-border)] text-warning'
    : 'bg-[var(--success-bg)] border-[var(--success-border)] text-success';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${tint}`}
    >
      {variant === 'current' && (
        <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" aria-hidden="true" />
      )}
      {variant === 'completed' && <Check className="h-4 w-4" aria-hidden="true" />}
      {variant === 'in-progress' && (
        <Loader2 className="h-4 w-4 animate-spin-slow" aria-hidden="true" />
      )}
      {label}
    </span>
  );
}

StatusBadge.propTypes = {
  variant: PropTypes.oneOf(['current', 'completed', 'in-progress']).isRequired,
  label: PropTypes.string.isRequired,
};
