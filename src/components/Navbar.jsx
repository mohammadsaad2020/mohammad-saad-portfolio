import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import useActiveSection from '../hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
const NAV_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_IDS);
  const { scrollYProgress } = useScroll();
  // Prevents the popstate listener from double-closing when we call history.back() ourselves.
  const handlingClose = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Push a fake history entry when the menu opens so the phone's back button
  // dismisses the overlay instead of leaving the page.
  useEffect(() => {
    if (menuOpen) {
      window.history.pushState({ menuOpen: true }, '');
    }
  }, [menuOpen]);

  // When the user presses the phone back button, close the menu.
  useEffect(() => {
    const onPopState = () => {
      if (handlingClose.current) return;
      setMenuOpen(false);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const closeMenu = () => {
    if (handlingClose.current) return;
    handlingClose.current = true;
    setMenuOpen(false);
    // Pop the fake history entry we pushed when the menu opened.
    if (window.history.state?.menuOpen) {
      window.history.back();
    }
    // Reset after a short delay to allow popstate to fire and be ignored.
    setTimeout(() => { handlingClose.current = false; }, 100);
  };

  const goToSection = (id) => {
    closeMenu();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        className="h-0.5 origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <nav
        aria-label="Primary"
        className={`relative z-50 transition-all duration-300 ease-smooth ${
          scrolled
            ? 'bg-[rgba(10,15,30,0.85)] backdrop-blur-xl border-b border-default'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          {/* Connect button */}
          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-btn border border-accent bg-transparent px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 ease-smooth hover:bg-[var(--accent-glow)] hover:shadow-glow"
            aria-label="Go to contact section"
          >
            Get In Touch
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => goToSection(link.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative py-1 text-base transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-text-secondary hover:text-accent'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ease-smooth ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger / X toggle */}
          <button
            type="button"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="relative mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <div className="relative h-4 w-6">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-6 rounded bg-text-primary"
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute left-0 top-[7px] h-0.5 w-6 rounded bg-text-primary"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-[14px] h-0.5 w-6 rounded bg-text-primary"
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8
              bg-[rgba(10,15,30,0.97)] backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.id}
                type="button"
                onClick={() => goToSection(link.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                className={`font-display text-3xl font-medium ${
                  activeSection === link.id ? 'text-accent' : 'text-text-primary'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
