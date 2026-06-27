import { useEffect, useRef, useState } from 'react';

// Counts from 0 to `target` over `duration` ms with an ease-out curve.
// Starts once `active` becomes true and never repeats.
export default function useCounter(target, active, duration = 2000) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return undefined;
    startedRef.current = true;

    // Respect reduced-motion: jump straight to the final value.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(target);
      return undefined;
    }

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      startedRef.current = false;
    };
  }, [active, target, duration]);

  return value;
}
