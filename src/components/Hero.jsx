import { Suspense, lazy, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown, Mail, Phone, Linkedin } from 'lucide-react';
import { heroContainer, heroItem } from '../animations/variants';
import { heroMetrics } from '../data/metrics';
import CounterNumber from './CounterNumber';
import TechPill from './TechPill';
import SkillSearch from './SkillSearch';

// Canvas is heavy and desktop-only, so load it lazily.
const ParticleCanvas = lazy(() => import('./ParticleCanvas'));

const HERO_BADGES = ['AWS', 'Apache Spark', 'PySpark', 'Python', 'SQL'];

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Mount the canvas only on >= 768px viewports.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-hero"
    >
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[55fr_45fr] lg:pt-24">
        {/* Left: content */}
        <motion.div variants={heroContainer} initial="hidden" animate="visible">
          {/* Availability pill */}
          <motion.div variants={heroItem} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-[var(--accent-glow)] px-4 py-2 text-sm text-text-primary shadow-glow">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" aria-hidden="true" />
              Available for Data Engineer and AI Engineer roles in UAE
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroItem}
            className="text-h1-mobile font-bold text-text-primary sm:text-h1-tablet lg:text-h1"
          >
            Mohammad Saad
          </motion.h1>

          {/* Title lines */}
          <motion.div variants={heroItem} className="mt-4">
            <p className="font-display text-2xl font-medium leading-tight text-accent sm:text-3xl">
              Senior Data Engineer
            </p>
            <p className="font-display text-2xl font-medium leading-tight text-accent sm:text-3xl">
              and AI Engineer
            </p>
          </motion.div>

          {/* Statement */}
          <motion.p
            variants={heroItem}
            className="mt-6 max-w-xl text-body-lg text-text-secondary"
          >
            Building cloud data infrastructure that enterprises in the GCC depend on.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={goToAbout}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-accent px-6 py-3 text-base font-semibold text-bg-primary transition-all duration-300 ease-smooth hover:shadow-glow-strong hover:brightness-110"
            >
              View My Work
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a
              href="/Mohammad-Saad-CV.pdf"
              download="Mohammad-Saad-CV.pdf"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn border border-accent bg-transparent px-6 py-3 text-base font-semibold text-accent transition-all duration-300 ease-smooth hover:bg-[var(--accent-glow)] hover:shadow-glow"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          {/* Keyword skill search — check my experience in one keystroke */}
          <motion.div variants={heroItem} className="mt-8">
            <SkillSearch />
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={heroItem} className="mt-6 flex flex-wrap gap-2">
            {HERO_BADGES.map((badge) => (
              <TechPill key={badge} label={badge} />
            ))}
          </motion.div>

          {/* Metric cards */}
          <motion.div variants={heroItem} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.id}
                className="rounded-card border-t-2 border-accent bg-bg-card/60 p-4 shadow-card backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-bold text-accent">
                  {metric.displayText ?? (
                    <CounterNumber
                      value={metric.value}
                      decimals={metric.decimals}
                      suffix={metric.suffix}
                      startImmediately
                    />
                  )}
                </div>
                <p className="mt-1 text-sm text-text-secondary">{metric.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact boxes */}
          <motion.div variants={heroItem} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href="tel:+971552160874"
              className="flex items-center gap-3 rounded-card border-t-2 border-accent bg-bg-card/60 p-4 shadow-card backdrop-blur-sm transition-colors duration-300 hover:bg-bg-card"
            >
              <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text-primary">+971 55 216 0874</p>
                <p className="text-xs text-text-secondary">Phone</p>
              </div>
            </a>
            <a
              href="mailto:mohammadsaadwork@gmail.com"
              className="flex items-center gap-3 rounded-card border-t-2 border-accent bg-bg-card/60 p-4 shadow-card backdrop-blur-sm transition-colors duration-300 hover:bg-bg-card"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text-primary">mohammadsaadwork@gmail.com</p>
                <p className="text-xs text-text-secondary">Email</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadsaad-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-card border-t-2 border-accent bg-bg-card/60 p-4 shadow-card backdrop-blur-sm transition-colors duration-300 hover:bg-bg-card"
            >
              <Linkedin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text-primary">LinkedIn Profile</p>
                <p className="text-xs text-text-secondary">Connect with me</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: animated network (desktop) or static diagram (mobile) */}
        <div className="relative hidden h-full min-h-[420px] lg:block" aria-hidden="true">
          {isDesktop ? (
            <Suspense fallback={null}>
              <ParticleCanvas />
            </Suspense>
          ) : (
            <StaticDataFlow />
          )}
        </div>
      </div>

      {/* Mobile static diagram below content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 flex justify-center opacity-40 lg:hidden" aria-hidden="true">
        <StaticDataFlow compact />
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={goToAbout}
        aria-label="Scroll to content"
        initial={{ opacity: 1 }}
        animate={{ opacity: showScrollHint ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-7 w-7 text-text-secondary animate-bounce-soft" aria-hidden="true" />
      </motion.button>
    </section>
  );
}

// Minimal three-node data-flow diagram shown instead of the canvas on mobile.
function StaticDataFlow({ compact = false }) {
  const size = compact ? 200 : 340;
  return (
    <svg
      viewBox="0 0 340 340"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-accent"
    >
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5">
        <line x1="70" y1="90" x2="250" y2="60" />
        <line x1="250" y1="60" x2="190" y2="250" />
        <line x1="70" y1="90" x2="190" y2="250" />
      </g>
      <g fill="currentColor">
        <circle cx="70" cy="90" r="8" fillOpacity="0.7" />
        <circle cx="250" cy="60" r="8" fillOpacity="0.7" />
        <circle cx="190" cy="250" r="8" fillOpacity="0.7" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.15" strokeWidth="1">
        <circle cx="70" cy="90" r="20" />
        <circle cx="250" cy="60" r="20" />
        <circle cx="190" cy="250" r="20" />
      </g>
    </svg>
  );
}

StaticDataFlow.propTypes = {
  compact: PropTypes.bool,
};
