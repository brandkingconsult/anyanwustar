import { useEffect } from "react";

/**
 * Adds `is-visible` to all `.reveal` elements when they enter the viewport.
 * Triggers slightly before the middle of the screen for a Webflow-like feel.
 * Re-runs whenever new `.reveal` elements are mounted (route or async content).
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // fire when ~30% from the top of the viewport (almost middle)
        threshold: 0.15,
        rootMargin: "0px 0px -20% 0px",
      },
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    // Watch DOM for newly added reveal elements (e.g., route transitions, accordion children)
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}
