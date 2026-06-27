import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  Database,
  Cloud,
  Code,
  GitBranch,
  Brain,
  Shield,
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../animations/variants';

const LEAD =
  'The short version: I build the cloud data infrastructure big GCC enterprises rely on every day, and I work hard to keep it boring. Boring means it just works, at 3am, at terabyte scale, without anyone noticing.';

const BIO = [
  'Four years across PwC and Protiviti. At PwC I moved multi-terabyte datasets into AWS, held them at 99.9% consistency, and cut processing time by 40%. At Protiviti I went broader, sizing up 30 applications for a leading GCC bank, defining 200+ KPIs, and trading legacy batch jobs for real-time, event-driven pipelines.',
  "These days I build where solid data engineering meets applied AI: LLM pipelines, AI agents, and automation that sit on top of infrastructure that doesn't fall over.",
];

const INFO_CARDS = [
  { icon: MapPin, text: 'Dubai, United Arab Emirates' },
  { icon: Briefcase, text: 'Open to Data Engineer and AI Engineer roles' },
  { icon: Award, text: 'Ex-PwC and Protiviti' },
  { icon: GraduationCap, text: 'NIT Allahabad Graduate' },
];

const COMPETENCIES = [
  { icon: Database, name: 'Data Engineering', tools: ['AWS Glue', 'Apache Spark', 'PySpark'] },
  { icon: Cloud, name: 'Cloud and AWS', tools: ['S3', 'EMR', 'Athena'] },
  { icon: Code, name: 'Programming', tools: ['Python', 'SQL', 'Pandas'] },
  { icon: GitBranch, name: 'DevOps and CI/CD', tools: ['GitLab', 'Argo CD', 'Dynatrace'] },
  { icon: Brain, name: 'AI and MLOps', tools: ['Agentic AI', 'LLMs', 'MLOps'] },
  { icon: Shield, name: 'Data Architecture', tools: ['CDC', 'Data Lakes', 'Data Warehousing'] },
];

export default function About() {
  return (
    <section id="about" className="bg-bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle overline="Who I Am" title="About Me" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left: bio + info cards */}
          <div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-5"
            >
              <motion.p
                variants={staggerItem}
                className="text-xl font-medium leading-relaxed text-text-primary md:text-2xl"
              >
                {LEAD}
              </motion.p>
              {BIO.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className="text-body-lg leading-relaxed text-text-secondary"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {INFO_CARDS.map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  variants={staggerItem}
                  className="flex items-center gap-3 rounded-card border border-default bg-bg-card p-4 shadow-card transition-colors duration-300 hover:border-accent"
                >
                  <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm text-text-primary">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: competency cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {COMPETENCIES.map(({ icon: Icon, name, tools }) => (
              <motion.div
                key={name}
                variants={staggerItem}
                className="group flex flex-col items-center rounded-card border border-default bg-bg-card p-5 text-center shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent hover:shadow-glow"
              >
                <Icon className="h-9 w-9 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-semibold text-text-primary">
                  {name}
                </h3>
                <ul className="mt-2 space-y-0.5">
                  {tools.map((tool) => (
                    <li key={tool} className="text-sm text-text-muted">
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
