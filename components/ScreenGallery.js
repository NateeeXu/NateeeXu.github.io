"use client";

import { useEffect, useRef, useState } from "react";

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d={dir === "prev" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"} />
    </svg>
  );
}

// Horizontal, swipeable row of app screens. Buttons page through it; the
// track itself is a focusable scroll region, so arrow keys and trackpads work too.
export default function ScreenGallery({ screens, lang, labels }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      setEdge({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const page = (dir) => {
    const el = track.current;
    const card = el.querySelector(".screen");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const count = Math.max(1, Math.floor(el.clientWidth / step));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step * count, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="screens">
      <div className="screens-head">
        <h4>{labels.title}</h4>
        <div className="screens-nav">
          <button type="button" aria-label={labels.prev} disabled={edge.start} onClick={() => page(-1)}>
            <Arrow dir="prev" />
          </button>
          <button type="button" aria-label={labels.next} disabled={edge.end} onClick={() => page(1)}>
            <Arrow dir="next" />
          </button>
        </div>
      </div>
      <div ref={track} className="screens-track" role="region" aria-label={labels.title} tabIndex={0}>
        <ul>
          {screens.map((s) => (
            <li key={s.src} className="screen">
              <img src={s.src} width="536" height="1100" alt={s.title[lang]} loading="lazy" decoding="async" />
              <h5>{s.title[lang]}</h5>
              <p>{s.body[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
