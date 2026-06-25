import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import StatusBadge from './StatusBadge';
import TechPill from './TechPill';
import { experience } from '../data/experience';
import { slideInCard, viewportOnce } from '../animations/variants';

function ExperienceCard({ role, isLeft, isDesktop }) {
  const [selected, setSelected] = useState(null);
  const direction = isDesktop ? (isLeft ? -60 : 60) : 60;

  const visibleBullets = selected
    ? role.bullets.filter((bullet) => bullet.tags.includes(selected))
    : role.bullets;

  return (
    <div className="relative mb-12 pl-12 last:mb-0 md:grid md:grid-cols-2 md:gap-x-12 md:pl-0">
      <span
        className="absolute left-4 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-accent shadow-glow md:left-1/2"
        aria-hidden="true"
      />

      <motion.article
        custom={direction}
        variants={slideInCard}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={`rounded-card border border-default bg-bg-card p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent hover:shadow-card-hover ${
          isLeft ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <p className="font-display text-xl font-bold text-accent">{role.company}</p>
        <h3 className="mt-1 text-h3 font-bold text-text-primary">{role.role}</h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {role.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {role.location}
          </span>
        </div>

        {role.status && (
          <div className="mt-4">
            <StatusBadge variant={role.status.variant} label={role.status.label} />
          </div>
        )}

        {/* Highlights — tap a pill to filter the bullets below */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">
            Tech &amp; highlights — tap to see exactly where I used it
          </p>
          <div className="flex flex-wrap gap-2">
            {role.stack.map((tech) => (
              <TechPill
                key={tech}
                label={tech}
                active={selected === tech}
                onClick={() => setSelected((current) => (current === tech ? null : tech))}
                title={`Show where I used ${tech}`}
              />
            ))}
          </div>
        </div>

        {/* Active-filter status line */}
        {selected && (
          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
            Showing where I used <span className="font-medium text-accent">{selected}</span>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-accent underline underline-offset-2 transition-colors hover:brightness-110"
            >
              Show all
            </button>
          </p>
        )}

        {/* Bullets (filtered) */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={selected || 'all'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-4 space-y-3"
          >
            {visibleBullets.map((bullet) => (
              <li key={bullet.text} className="flex gap-2 text-text-secondary">
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{bullet.text}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </motion.article>
    </div>
  );
}

ExperienceCard.propTypes = {
  role: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.shape({
      variant: PropTypes.string,
      label: PropTypes.string,
    }),
    bullets: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isLeft: PropTypes.bool.isRequired,
  isDesktop: PropTypes.bool.isRequired,
};

export default function Experience() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <section id="experience" className="bg-bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle overline="Where I Have Worked" title="Experience" />

        <div className="relative mt-12">
          <span
            className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 bg-[var(--border-accent)] md:left-1/2"
            aria-hidden="true"
          />

          {experience.map((role, index) => (
            <ExperienceCard
              key={role.id}
              role={role}
              isLeft={index % 2 === 0}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
