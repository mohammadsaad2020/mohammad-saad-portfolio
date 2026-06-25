import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import CounterNumber from './CounterNumber';
import { metrics } from '../data/metrics';
import { staggerContainer, staggerItem, viewportOnce } from '../animations/variants';

export default function Metrics() {
  return (
    <section id="metrics" className="relative bg-bg-secondary py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 dot-pattern" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle
          overline="The Numbers"
          title="Impact by Numbers"
          subtitle="Real outcomes from real work. Every number below came from production systems at enterprise financial institutions across the GCC."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {metrics.map(({ id, icon: Icon, value, decimals, suffix, label }) => (
            <motion.div
              key={id}
              variants={staggerItem}
              className="flex flex-col items-center rounded-card border border-default border-t-2 border-t-[var(--border-default)] bg-bg-card p-8 text-center shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-t-[var(--accent-primary)] hover:shadow-card-hover"
            >
              <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
              <div className="mt-4 font-display text-[2.5rem] font-bold leading-none text-text-primary md:text-5xl">
                <CounterNumber value={value} decimals={decimals} suffix={suffix} />
              </div>
              <p className="mt-3 text-text-secondary">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
