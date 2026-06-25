import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';
import TechPill from './TechPill';
import { fadeUp, viewportOnce } from '../animations/variants';

const ACHIEVEMENTS = ['Top Ranked NIT', 'Information Technology', 'Graduated 2021'];

export default function Education() {
  return (
    <section id="education" className="bg-bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle overline="Academic Background" title="Education" align="center" />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 max-w-[720px] rounded-[1.5rem] border border-default bg-bg-card p-6 shadow-card transition-colors duration-300 hover:border-accent md:p-10"
        >
          <GraduationCap className="h-10 w-10 text-accent" aria-hidden="true" />

          <h3 className="mt-5 text-h2-mobile font-bold text-text-primary md:text-h2">
            Bachelor of Technology in Information Technology
          </h3>
          <p className="mt-2 text-h3 font-medium text-accent">
            Motilal Nehru National Institute of Technology Allahabad
          </p>

          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-text-muted">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            2017 to 2021
          </p>

          <hr className="my-6 border-default" />

          <p className="text-text-secondary">
            Premier National Institute of Technology, India — consistently ranked among the top
            engineering institutions in the country. Specialised in data structures, distributed
            systems, algorithms, database systems, and software engineering.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {ACHIEVEMENTS.map((item) => (
              <TechPill key={item} label={item} />
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
