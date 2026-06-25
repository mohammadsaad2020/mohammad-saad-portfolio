import { motion } from 'framer-motion';
import { Award, Building2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import StatusBadge from './StatusBadge';
import { certifications } from '../data/certifications';
import { staggerContainer, staggerItem, viewportOnce } from '../animations/variants';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle overline="Credentials" title="Certifications" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.id}
              variants={staggerItem}
              className="flex flex-col rounded-card border border-default bg-bg-card p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent hover:shadow-card-hover"
            >
              <Award className="h-8 w-8 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-h3 font-medium leading-snug text-text-primary">
                {cert.name}
              </h3>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-text-muted">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                {cert.issuer}
              </p>
              <div className="mt-auto pt-5">
                <StatusBadge variant={cert.status.variant} label={cert.status.label} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
