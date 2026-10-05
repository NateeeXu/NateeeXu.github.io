"use client";

import { useEffect, useRef, useState } from "react";

// Hamburger that morphs into an X and opens a full-screen glass menu.
// Only rendered visibly below the mobile breakpoint (see .menu-toggle in CSS).
export default function MobileMenu({ items, lang, resume, labels }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={toggle}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
      <div id="mobile-menu" className={`menu-sheet${open ? " is-open" : ""}`} hidden={!open}>
        <ul>
          {items.map(([id, label], i) => (
            <li key={id} style={{ "--i": i }}>
              <a href={`#${id}`} onClick={close}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-actions" style={{ "--i": items.length }}>
          <a className="pill pill-ghost" href={lang.href} hrefLang={lang.hrefLang} aria-label={lang.aria}>
            <span>{lang.label}</span>
          </a>
          <a className="pill pill-primary" href={resume.href} target="_blank" rel="noreferrer">
            <span>{resume.label}</span>
          </a>
        </div>
      </div>
    </>
  );
}
