import { useEffect, useState } from 'react';

// Tracks which section is currently dominant in the viewport using an
// IntersectionObserver, so the navbar can highlight the active link.
// `ids` must be a stable array (declared at module scope).
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const ratios = new Map(ids.map((id) => [id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let best = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActive(best);
      },
      { threshold: [0.15, 0.35, 0.55, 0.75], rootMargin: '-80px 0px -35% 0px' }
    );

    const observed = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
