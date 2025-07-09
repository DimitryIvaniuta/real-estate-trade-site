import { useState, useEffect } from 'react';

export interface ScrollSpyOptions extends IntersectionObserverInit {
  /**
   * If true, will pick the entry with the highest intersectionRatio
   * instead of the last-intersecting.
   */
  pickHighest?: boolean;
}

/**
 * Returns the id of the currently visible section.
 * @param ids Array of element IDs to observe
 * @param options IntersectionObserver options + pickHighest flag
 */
export function useScrollSpy(
  ids: string[],
  options: ScrollSpyOptions = { rootMargin: '-50% 0px -50% 0px' }
): string {
  const [activeId, setActiveId] = useState<string>(ids[0] || '');

  useEffect(() => {
    if (ids.length === 0) return;

    const { pickHighest, ...obsOptions } = options;
    let lastRatio = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (pickHighest) {
          // pick the entry with greatest intersectionRatio
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActiveId(visible.target.id);
        } else {
          // pick the last entry that became intersecting
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(entry.target.id);
          });
        }
      },
      obsOptions
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join(), options.rootMargin, options.threshold, options.root, options.pickHighest]);

  return activeId;
}
