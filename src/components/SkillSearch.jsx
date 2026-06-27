import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Check, X } from 'lucide-react';
import { skillTabs } from '../data/skills';
import { experience } from '../data/experience';

// Build a flat, de-duplicated index of every skill / tech term, each tagged
// with the human-readable place(s) it appears (skill group or employer). Built
// once on mount — the source data is static.
function buildIndex() {
  const map = new Map(); // lowercased term -> { label, sources:Set }

  const add = (term, source) => {
    if (!term) return;
    const key = term.toLowerCase();
    if (!map.has(key)) map.set(key, { label: term, sources: new Set() });
    map.get(key).sources.add(source);
  };

  skillTabs.forEach((tab) => tab.skills.forEach((skill) => add(skill, tab.label)));
  experience.forEach((role) => role.stack.forEach((tech) => add(tech, role.company)));

  return Array.from(map.values(), (entry) => ({
    label: entry.label,
    sources: Array.from(entry.sources),
  }));
}

export default function SkillSearch() {
  const index = useMemo(buildIndex, []);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const showResults = q.length >= 2;

  const matches = useMemo(() => {
    if (q.length < 2) return [];
    return index.filter(({ label }) => {
      const term = label.toLowerCase();
      return term.includes(q) || q.includes(term);
    });
  }, [index, q]);

  const hasMatch = matches.length > 0;
  const sources = hasMatch
    ? Array.from(new Set(matches.flatMap((match) => match.sources)))
    : [];

  return (
    <div className="max-w-xl">
      <label htmlFor="skill-search" className="sr-only">
        Search my skills and experience
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted"
          aria-hidden="true"
        />
        <input
          id="skill-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a skill, try “PySpark”, “Glue” or “SRE”"
          autoComplete="off"
          className="w-full rounded-btn border border-default bg-white py-3 pl-12 pr-4 text-base text-gray-800 placeholder:text-gray-500 shadow-card transition-colors duration-300 ease-smooth focus:border-accent focus:outline-none focus:shadow-glow"
        />
      </div>

      <AnimatePresence mode="wait">
        {showResults && (
          <motion.div
            key={hasMatch ? 'hit' : 'miss'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
            className={`mt-3 rounded-card border p-4 ${
              hasMatch
                ? 'border-[var(--success-border)] bg-[var(--success-bg)]'
                : 'border-[var(--warning-border)] bg-[var(--warning-bg)]'
            }`}
          >
            {hasMatch ? (
              <>
                <p className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <Check className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  Yes, hands-on experience with this
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {matches.map((match) => (
                    <span
                      key={match.label}
                      className="inline-flex items-center rounded-full border border-[var(--success-border)] bg-bg-card/60 px-3 py-1 text-xs text-text-primary"
                    >
                      {match.label}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-text-secondary">
                  Found in: <span className="text-text-primary">{sources.join(', ')}</span>
                </p>
              </>
            ) : (
              <p className="flex items-start gap-2 text-sm text-text-secondary">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
                <span>
                  No exact match for{' '}
                  <span className="font-medium text-text-primary">“{query.trim()}”</span>, scroll
                  down to the Skills section to browse everything I work with.
                </span>
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
