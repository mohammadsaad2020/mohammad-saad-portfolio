import PropTypes from 'prop-types';

const BASE =
  'inline-flex items-center rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-smooth';

const IDLE =
  'border-default bg-bg-card text-text-secondary hover:border-accent hover:text-text-primary hover:shadow-glow hover:-translate-y-0.5';

const ACTIVE = 'border-accent bg-accent text-bg-primary shadow-glow';

// A small rounded tag for tech / skill keywords.
// - Static (default): renders a non-interactive span.
// - Interactive: pass `onClick` to render a toggle button; `active` fills it.
export default function TechPill({ label, onClick, active = false, title }) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        title={title}
        className={`${BASE} ${active ? ACTIVE : IDLE}`}
      >
        {label}
      </button>
    );
  }

  return <span className={`${BASE} ${IDLE}`}>{label}</span>;
}

TechPill.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  title: PropTypes.string,
};
