"use client";

import { useId, useRef, useState } from "react";

// Segmented control + detail card, following the WAI-ARIA tabs pattern:
// arrow keys move between layers, Home/End jump to the ends.
export default function LayerConsole({ layers, label }) {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const id = useId();
  const layer = layers[active];

  const select = (index) => {
    const next = (index + layers.length) % layers.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (event) => {
    const keys = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: layers.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key]);
    }
  };

  return (
    <div className="layers">
      <div className="segmented" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {layers.map((item, index) => (
          <button
            key={item.key}
            ref={(el) => (tabs.current[index] = el)}
            id={`${id}-tab-${index}`}
            role="tab"
            type="button"
            aria-selected={active === index}
            aria-controls={`${id}-panel`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="bezel layer-card">
        <div
          id={`${id}-panel`}
          className={`core layer-panel${layer.image ? " has-image" : ""}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${active}`}
          tabIndex={0}
        >
          <div key={layer.key} className="layer-body">
            <p className="layer-metric">
              <strong>{layer.metric}</strong>
              <span>{layer.unit}</span>
            </p>
            <h3>{layer.title}</h3>
            <p className="layer-context">{layer.context}</p>
            <ul className="layer-points">
              {layer.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="chips">
              {layer.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          {layer.image && (
            <figure key={`${layer.key}-img`} className="layer-image">
              <img src={layer.image.src} width={layer.image.width} height={layer.image.height} alt={layer.image.alt} loading="lazy" decoding="async" />
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}
