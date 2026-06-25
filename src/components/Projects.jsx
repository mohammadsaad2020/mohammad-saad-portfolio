import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// Icons are imported statically and mapped by name — never dynamically
// imported, which avoids render glitches. To support a new icon in the data
// file, import it here and add it to ICONS.
import { Shield, AlertTriangle, Database, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import projects from '../data/projects';
import { viewportOnce } from '../animations/variants';

const EASE = [0.4, 0, 0.2, 1];

// Maps the `icon` string in each project object to its Lucide component.
const ICONS = { Shield, AlertTriangle, Database };

// Stagger the cards in by 150ms each as the grid scrolls into view.
const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

function ProjectCard({ project }) {
  const Icon = ICONS[project.icon] ?? Shield;

  // Track the cursor relative to the card and expose it as CSS variables.
  // The spotlight glow and gradient-border overlays read --mx / --my so both
  // effects follow the pointer — no re-render, just style mutation.
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <motion.article
      variants={cardVariant}
      onPointerMove={handlePointerMove}
      style={{ '--mx': '50%', '--my': '0px' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-default bg-bg-card p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-smooth will-change-transform hover:-translate-y-1.5 hover:border-accent hover:shadow-glow md:p-6"
    >
      {/* Cursor-following spotlight fill (sits behind the content) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(480px circle at var(--mx) var(--my), rgba(0,212,255,0.10), transparent 60%)',
        }}
      />

      {/* Cursor-following gradient border ring (masked to a 1px edge) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          padding: '1px',
          background:
            'radial-gradient(300px circle at var(--mx) var(--my), rgba(0,212,255,0.55), transparent 65%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* 3px gradient top strip — the only colour accent on the card top */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent to-accent-secondary"
      />

      {/* Content sits above the decorative layers */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Icon tile + category pill */}
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-accent)] bg-[var(--accent-glow)] text-accent transition-all duration-300 ease-smooth group-hover:scale-110 group-hover:shadow-glow">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="shrink-0 rounded-full border border-[var(--border-accent)] bg-bg-primary px-3 py-1 text-xs tracking-wide text-text-secondary">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 flex items-start gap-1.5 font-display text-h3 font-medium text-text-primary">
          <span>{project.title}</span>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 -translate-y-0.5 text-text-muted opacity-0 transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100"
            aria-hidden="true"
          />
        </h3>

        <p className="mt-3 text-base leading-[1.7] text-text-secondary">{project.description}</p>

        <div className="my-4 h-px w-full bg-[var(--border-default)]" aria-hidden="true" />

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-[rgba(0,212,255,0.2)] bg-bg-primary px-3 py-1 text-sm text-text-secondary transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent hover:text-text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-bg-secondary py-16 md:py-24">
      {/* Faint ambient glow for depth — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(60% 50% at 50% 0%, rgba(0,212,255,0.05), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          overline="What I Have Built"
          title="Projects"
          subtitle="A selection of technical projects spanning distributed systems, machine learning, and big data engineering. Each project represents a real engineering problem solved with production-grade thinking."
        />

        {/* Responsive grid: capped at 400px per card and left-aligned, so any
            number of projects (1, 3, 10) lays out gracefully without stretching. */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid justify-start gap-6 grid-cols-[minmax(0,400px)] sm:grid-cols-[repeat(2,minmax(0,400px))] lg:grid-cols-[repeat(3,minmax(0,400px))]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
