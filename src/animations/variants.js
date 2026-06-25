// Reusable Framer Motion variant objects shared across the site.
// Centralising them keeps motion consistent and components declarative.

const EASE = [0.4, 0, 0.2, 1];

// Fade up — the default scroll-triggered entrance for most blocks.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Fade in with no movement.
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// Container that staggers its children by 100ms.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// A single staggered child (used inside staggerContainer).
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// Hero load sequence — the only on-load (not scroll-triggered) animation.
export const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Card that lifts up on enter; accepts a custom `x` offset for
// directional (left/right) timeline entrances.
export const slideInCard = {
  hidden: (x = 0) => ({ opacity: 0, x, y: 24 }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// Scale-fade used for tab content swaps.
export const tabFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } },
};

// Shared viewport config so every scroll trigger fires once.
export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' };
