"use client";

import { useEffect } from "react";

// Fades [data-reveal] elements up as they enter the viewport. Content stays
// visible without JavaScript: the hidden start state only applies once the
// `reveal-ready` class is on <html>.
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    // Elements already on screen reveal immediately; the rest wait.
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add("is-visible");
      else observer.observe(el);
    });
    document.documentElement.classList.add("reveal-ready");
    return () => observer.disconnect();
  }, []);

  return null;
}
