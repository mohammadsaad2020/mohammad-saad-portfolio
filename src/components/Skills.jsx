import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import TechPill from './TechPill';
import { skillTabs } from '../data/skills';
import { tabFade, fadeUp, viewportOnce } from '../animations/variants';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillTabs[0].id);
  const active = skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0];

  return (
    <section id="skills" className="bg-bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          overline="What I Work With"
          title="Technical Skills"
          subtitle="Four years of hands-on experience across the full data engineering stack, from raw ingestion and ETL pipeline design through to cloud infrastructure, observability, and applied AI."
        />

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="no-scrollbar mt-10 flex gap-2 overflow-x-auto border-b border-default"
        >
          {skillTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-text-muted hover:text-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="mt-8 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              variants={tabFade}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap gap-3"
            >
              {active.skills.map((skill) => (
                <TechPill key={skill} label={skill} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Banner strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 rounded-card bg-bg-secondary px-6 py-6 text-center"
        >
          <p className="italic text-text-muted">
            Currently expanding into Agentic AI and LLM pipeline engineering through the Ready
            Tensor Agentic AI Developer Certification.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
