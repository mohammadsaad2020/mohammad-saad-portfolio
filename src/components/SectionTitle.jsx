import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../animations/variants';

// Shared section header: an accent overline above a Space Grotesk heading,
// with an optional supporting paragraph. Animates in on scroll.
export default function SectionTitle({ overline, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col ${alignment} ${align === 'center' ? 'max-w-3xl' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <span className="text-accent font-body text-sm font-semibold uppercase tracking-[0.1em]">
        {overline}
      </span>
      <h2 className="mt-3 text-h2-mobile md:text-h2 text-text-primary font-display font-bold">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-text-secondary text-body-lg leading-relaxed ${
            align === 'center' ? 'max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

SectionTitle.propTypes = {
  overline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
};
