import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'framer-motion';
import useCounter from '../hooks/useCounter';

const SUFFIX_MAP = { plus: '+', percent: '%', '': '' };

// Renders a number that counts up from 0 the first time it scrolls into
// view, with an optional accent-coloured suffix sized relative to the number.
export default function CounterNumber({
  value,
  decimals = 0,
  suffix = '',
  duration = 2000,
  className = '',
  startImmediately = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const active = startImmediately || inView;
  const current = useCounter(value, active, duration);

  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString('en-US');
  const suffixChar = SUFFIX_MAP[suffix] ?? '';

  return (
    <span ref={ref} className={className}>
      {display}
      {suffixChar && <span className="text-accent text-[0.6em] align-top">{suffixChar}</span>}
    </span>
  );
}

CounterNumber.propTypes = {
  value: PropTypes.number.isRequired,
  decimals: PropTypes.number,
  suffix: PropTypes.oneOf(['plus', 'percent', '']),
  duration: PropTypes.number,
  className: PropTypes.string,
  startImmediately: PropTypes.bool,
};
