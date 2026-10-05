import { content, links, productShots } from "../app/content";
import LayerConsole from "./LayerConsole";
import MobileMenu from "./MobileMenu";
import RevealObserver from "./RevealObserver";

function Arrow({ external = false }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {external ? <path d="M7 17 17 7M9 7h8v8" /> : <path d="M5 12h13M13 6l6 6-6 6" />}
    </svg>
  );
}

// Pill button with its arrow nested in a separate circle.
function PillLink({ href, children, variant = "primary", external = false, icon = true }) {
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a className={`pill pill-${variant}`} href={href} {...props}>
      <span>{children}</span>
      {icon && (
        <span className="pill-icon">
          <Arrow external={external} />
        </span>
      )}
    </a>
  );
}

function SectionHead({ label, title, body, align = "center" }) {
  return (
    <header className={`section-head ${align}`} data-reveal>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {body && <p className="section-lede">{body}</p>}
    </header>
  );
}

function TextLink({ href, children }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children} <Arrow external />
    </a>
  );
}

export default function Portfolio({ lang }) {
  const t = content[lang];
  const cs = t.cloudsublet;
  const dg = t.digest;
  const resumeHref = links.resumeProduct;
  const otherLang = lang === "en" ? "zh-CN" : "en";

  return (
    <div lang={t.htmlLang} className="page">
      <a className="skip-link" href="#work">{t.skip}</a>

      <header className="nav-wrap">
        <nav className="island" aria-label={lang === "en" ? "Primary" : "主导航"}>
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">NX</span>
            <span className="brand-name">Nate Xu</span>
          </a>
          <ul className="nav-links">
            {t.nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="nav-lang" href={t.switchHref} hrefLang={otherLang} aria-label={t.switchAria}>
              {t.switchLabel}
            </a>
            <a className="nav-cta" href={resumeHref} target="_blank" rel="noreferrer">
              {t.resume}
            </a>
          </div>
          <MobileMenu
            items={t.nav}
            lang={{ href: t.switchHref, label: t.switchLabel, aria: t.switchAria, hrefLang: otherLang }}
            resume={{ href: resumeHref, label: t.resume }}
            labels={lang === "en" ? { open: "Open menu", close: "Close menu" } : { open: "打开菜单", close: "关闭菜单" }}
          />
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="aurora" aria-hidden="true">
            <span className="orb orb-a" />
            <span className="orb orb-b" />
            <span className="orb orb-c" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <i className="live-dot" aria-hidden="true" />
              {t.hero.status}
            </p>
            <h1>
              <span>{t.hero.titleA}</span>
              <span className="soft">{t.hero.titleB}</span>
            </h1>
            <p className="hero-body">{t.hero.body}</p>
            <div className="actions">
              <PillLink href="#work">{t.hero.primary}</PillLink>
              <PillLink href={resumeHref} variant="ghost" external icon={false}>
                {t.hero.secondary}
              </PillLink>
            </div>
          </div>

          <div className="stage">
            <figure className="bezel portrait-card">
              <div className="core">
                <img src="/images/portrait.webp" width="1000" height="1000" alt={lang === "en" ? "Portrait of Nate Xu" : "徐显策的肖像"} fetchPriority="high" />
              </div>
            </figure>
            <dl className="chips-float">
              {t.hero.readout.map(([value, label, note], i) => (
                <div key={label} className={`float-chip chip-${i + 1}`}>
                  <dd>{value}</dd>
                  <dt>
                    {label}
                    <span>{note}</span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="work">
          <SectionHead label={t.work.label} title={t.work.title} body={t.work.body} />

          <div className="bento">
            <article className="bezel tile tile-feature" data-reveal>
              <div className="core feature-core">
                <div className="feature-copy">
                  <p className="tag">{cs.tag}</p>
                  <h3>
                    {cs.name}
                    {cs.alias && <span className="alias">{cs.alias}</span>}
                  </h3>
                  <p className="feature-lede">{cs.lede}</p>
                  <p className="feature-body">{cs.body}</p>
                  <ul className="chips" aria-label="Stack">
                    {cs.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                  <PillLink href={links.cloudsublet} external>{cs.link}</PillLink>
                </div>
                {productShots.length > 0 && (
                  <div className="phones">
                    {productShots.map((shot) => (
                      <figure key={shot.src} className="phone">
                        <img src={shot.src} width="640" height="1304" alt={shot.alt[lang]} loading="lazy" decoding="async" />
                        <figcaption>{shot.label[lang]}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </article>

            <article className="bezel tile tile-metrics" data-reveal>
              <dl className="core metrics">
                {cs.metrics.map(([value, label]) => (
                  <div key={label}>
                    <dd>{value}</dd>
                    <dt>{label}</dt>
                  </div>
                ))}
              </dl>
            </article>

            <article className="bezel tile tile-flow" data-reveal>
              <div className="core flow">
                <p className="tag">{cs.flowTitle}</p>
                <ol>
                  {cs.flow.map(([state, label], i) => (
                    <li key={state} style={{ "--i": i }}>
                      <span className="step">{String(i + 1).padStart(2, "0")}</span>
                      <span className="step-label">{label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>

            {cs.decisions.map(([kicker, title, body], i) => (
              <article key={title} className={`bezel tile tile-decision d-${i + 1}`} data-reveal>
                <div className="core">
                  <p className="tag">{kicker}</p>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </article>
            ))}

            <article className="bezel tile tile-digest" data-reveal>
              <div className="core digest-core">
                <div className="pipeline" aria-hidden="true">
                  <div className="pipe-row">
                    {dg.sources.map((s) => <span key={s} className="src">{s}</span>)}
                  </div>
                  <div className="pipe-row">
                    {dg.stages.map((s) => <span key={s} className="stage-chip">{s}</span>)}
                  </div>
                  <div className="pipe-card">
                    <span>{dg.output[0]}</span>
                    <strong>{dg.output[1]}</strong>
                    <span>{dg.output[2]}</span>
                  </div>
                </div>
                <div className="digest-copy">
                  <p className="tag">{dg.tag}</p>
                  <h3>{dg.name}</h3>
                  <p className="feature-lede">{dg.lede}</p>
                  <p className="feature-body">{dg.body}</p>
                  <div className="link-row">
                    {dg.links.map(([label, key]) => (
                      <TextLink key={key} href={links[key]}>{label}</TextLink>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-tint" id="engineering">
          <SectionHead label={t.engineering.label} title={t.engineering.title} body={t.engineering.body} />
          <div data-reveal>
            <LayerConsole layers={t.engineering.layers} label={t.engineering.tablistLabel} />
          </div>
        </section>

        <section className="section" id="growth">
          <SectionHead label={t.growth.label} title={t.growth.title} body={t.growth.body} />
          <dl className="stat-grid">
            {t.growth.stats.map(([value, label, note], i) => (
              <div key={label + note} className={`bezel stat s-${i + 1}`} data-reveal>
                <div className="core">
                  <dd>{value}</dd>
                  <dt>
                    {label}
                    <span>{note}</span>
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </section>

        <section className="section section-tint" id="about">
          <div className="about">
            <div className="about-copy">
              <SectionHead label={t.about.label} title={t.about.title} body={t.about.body} align="left" />
              <div className="bezel" data-reveal>
                <ol className="core log" aria-label={t.about.logLabel}>
                  {t.about.log.map(([date, org, detail]) => (
                    <li key={date + org}>
                      <time>{date}</time>
                      <div>
                        <strong>{org}</strong>
                        <span>{detail}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="photos">
              {t.about.photos.map((p) => (
                <figure key={p.src} className="bezel photo" data-reveal>
                  <div className="core">
                    <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="contact-card" data-reveal>
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow eyebrow-dark">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <ul className="contact-links">
            {t.contact.links.map(([label, key]) => {
              const href = links[key];
              const external = !href.startsWith("mailto:");
              return (
                <li key={key}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    {label}
                    <span className="pill-icon">
                      <Arrow external={external} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-bottom">
          <span>{t.contact.footer[0]}</span>
          <a href="#top">{t.contact.footer[2]}</a>
        </div>
      </footer>

      <RevealObserver />
    </div>
  );
}
