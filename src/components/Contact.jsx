import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from '../animations/variants';

const EMAIL = 'mohammadsaadwork@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mohammadsaad-';
const PHONE = '+971 55 216 0874';

const cardClasses =
  'flex min-h-[80px] flex-col items-center justify-center gap-2 rounded-card border border-default bg-bg-card p-8 text-center shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent hover:shadow-glow';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-contact py-20"
    >
      {/* Watermark */}
      <span
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-[28vw] font-bold leading-none text-text-primary opacity-[0.05]"
        aria-hidden="true"
      >
        CONNECT
      </span>

      <div className="relative mx-auto w-full max-w-5xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionTitle overline="Get In Touch" title="Let Us Connect" align="center" />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 max-w-[600px] text-body-lg text-text-secondary"
          >
            If you are hiring for Data Engineering, AI Engineering, MLOps, or Cloud Data
            Architecture roles in the UAE or GCC, or if you want to talk about building reliable
            data infrastructure at enterprise scale, reach out directly.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          <motion.a
            variants={staggerItem}
            href={`mailto:${EMAIL}`}
            className={cardClasses}
            aria-label={`Send an email to ${EMAIL}`}
          >
            <Mail className="h-10 w-10 text-accent" aria-hidden="true" />
            <span className="font-display text-lg font-medium text-text-primary">Send an Email</span>
            <span className="text-sm text-text-muted">{EMAIL}</span>
          </motion.a>

          <motion.a
            variants={staggerItem}
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className={cardClasses}
            aria-label={`Call ${PHONE}`}
          >
            <Phone className="h-10 w-10 text-accent" aria-hidden="true" />
            <span className="font-display text-lg font-medium text-text-primary">Call Me</span>
            <span className="text-sm text-text-muted">{PHONE}</span>
          </motion.a>

          <motion.a
            variants={staggerItem}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
            aria-label="Connect with Mohammad Saad on LinkedIn (opens in a new tab)"
          >
            <Linkedin className="h-10 w-10 text-accent" aria-hidden="true" />
            <span className="font-display text-lg font-medium text-text-primary">
              Connect on LinkedIn
            </span>
            <span className="text-sm text-text-muted">View Profile</span>
          </motion.a>

          <motion.div variants={staggerItem} className={cardClasses}>
            <MapPin className="h-10 w-10 text-accent" aria-hidden="true" />
            <span className="font-display text-lg font-medium text-text-primary">
              Dubai, United Arab Emirates
            </span>
            <span className="text-sm text-text-muted">Open to GCC Opportunities</span>
          </motion.div>
        </motion.div>

        {/* Availability status */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 flex items-center justify-center gap-2 text-center text-text-secondary"
        >
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-success animate-pulse-dot" aria-hidden="true" />
          Currently open to Data Engineer and AI Engineer opportunities in Dubai, United Arab
          Emirates and across the GCC.
        </motion.p>

        {/* OR divider */}
        <div className="mx-auto mt-10 flex max-w-md items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-[var(--border-default)]" />
          <span className="text-sm text-text-muted">OR</span>
          <span className="h-px flex-1 bg-[var(--border-default)]" />
        </div>

        {/* Prominent email link */}
        <div className="mt-6 text-center">
          <a
            href={`mailto:${EMAIL}`}
            className="text-h3 font-medium text-accent transition-colors duration-300 hover:brightness-110"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
