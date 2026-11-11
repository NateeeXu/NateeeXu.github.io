import { appScreens, content, links } from "../app/content";
import Icon from "./Icon";
import LayerConsole from "./LayerConsole";
import MobileMenu from "./MobileMenu";
import ScreenGallery from "./ScreenGallery";

const decisionIcons = ["pin", "shield", "check", "layers"];

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

// Apple-style text link that ends in a chevron.
function MoreLink({ href, children }) {
  const external = !href.startsWith("#") && !href.startsWith("mailto:");
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a className="more" href={href} {...props}>
      {children}
      <Chevron />
    </a>
  );
}

function SectionHead({ title, body }) {
  return (
    <header className="section-head">
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </header>
  );
}

// Laurel branch built from leaves placed along a curve, as on award badges.
function Laurel({ flip = false }) {
  const p0 = [30, 76];
  const c = [3, 44];
  const p2 = [24, 6];
  const leaves = [];
  for (let i = 0; i < 6; i++) {
    const t = 0.1 + i * 0.15;
    const x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * c[0] + t * t * p2[0];
    const y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * c[1] + t * t * p2[1];
    const dx = 2 * (1 - t) * (c[0] - p0[0]) + 2 * t * (p2[0] - c[0]);
    const dy = 2 * (1 - t) * (c[1] - p0[1]) + 2 * t * (p2[1] - c[1]);
    const len = Math.hypot(dx, dy);
    const nx = dy / len;
    const ny = -dx / len;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    const ox = x + nx * 4.2;
    const oy = y + ny * 4.2;
    const ix = x - nx * 3.6;
    const iy = y - ny * 3.6;
    leaves.push(
      <ellipse key={`o${i}`} cx={ox.toFixed(2)} cy={oy.toFixed(2)} rx="2.5" ry="6" transform={`rotate(${(angle - 32).toFixed(1)} ${ox.toFixed(2)} ${oy.toFixed(2)})`} />,
      <ellipse key={`i${i}`} cx={ix.toFixed(2)} cy={iy.toFixed(2)} rx="2.1" ry="5" transform={`rotate(${(angle + 32).toFixed(1)} ${ix.toFixed(2)} ${iy.toFixed(2)})`} />,
    );
  }
  return (
    <svg className="laurel" viewBox="0 0 40 80" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d={`M${p0[0]} ${p0[1]} Q${c[0]} ${c[1]} ${p2[0]} ${p2[1]}`} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="25" cy="4.5" rx="2.2" ry="5" transform="rotate(20 25 4.5)" />
      {leaves}
    </svg>
  );
}

export default function Portfolio({ lang }) {
  const t = content[lang];
  const card = t.hero.card;
  const cs = t.cloudsublet;
  const sv = t.saviu;
  const dg = t.digest;
  const resumeHref = links.resumeProduct;
  const otherLang = lang === "en" ? "zh-CN" : "en";

  return (
    <div lang={t.htmlLang} className="page">
      <a className="skip-link" href="#work">{t.skip}</a>

      <header className="globalnav">
        <nav className="globalnav-inner" aria-label={lang === "en" ? "Primary" : "主导航"}>
          <a className="brand" href="#top">Nate Xu</a>
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
          <div className="hero-copy">
            <h1>
              <span>{t.hero.titleA}</span> <span className="h1-serif">{t.hero.titleB}</span>
            </h1>
            <p className="hero-body">{t.hero.body}</p>
            <div className="actions">
              <a className="btn btn-brand" href="#work">{t.hero.primary}</a>
              <MoreLink href={resumeHref}>{t.hero.secondary}</MoreLink>
            </div>
          </div>

          <aside className="host" aria-label={card.name}>
            <p className="note note-host">
              <span>{card.note}</span>
              <svg viewBox="0 0 44 34" aria-hidden="true"><path d="M3 6c14-2 26 6 30 22M27 22l6 7 5-8" /></svg>
            </p>
            <div className="host-card">
              <div className="host-id">
                <img className="avatar" src="/images/portrait.webp" width="1000" height="1000" alt={card.photoAlt} fetchPriority="high" />
                <p className="host-name">{card.name}</p>
                <p className="host-role">{card.role}</p>
              </div>
              <dl className="host-stats">
                {card.stats.map(([value, label]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="host-facts">
              {card.facts.map(([icon, text]) => (
                <li key={text}>
                  <Icon name={icon} size={24} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="section section-mist" id="work">
          <SectionHead title={t.work.title} body={t.work.body} />

          <article className="tile tile-cs" id="cloudsublet">
            <header className="tile-head">
              <p className="tile-kicker">{cs.tag}</p>
              <h3 className="tile-logo">
                <img src="/images/cloudsublet-logo.png" width="1589" height="399" alt={cs.logoAlt} />
              </h3>
              <p className="tile-lede">{cs.lede}</p>
              <p className="badge-live">
                <span className="live-dot" aria-hidden="true" />
                {cs.live}
              </p>
              <div className="tile-links">
                <a className="btn btn-brand" href={links.cloudsublet} target="_blank" rel="noreferrer">
                  {cs.link}
                </a>
                <figure className="mp-code">
                  <img src="/images/miniprogram-code.png" width="360" height="360" alt={cs.qr.alt} loading="lazy" decoding="async" />
                  <figcaption>
                    {cs.qr.lines[0]}
                    <br />
                    {cs.qr.lines[1]}
                  </figcaption>
                </figure>
              </div>
            </header>
            <ScreenGallery screens={appScreens} lang={lang} labels={cs.gallery} />
            <dl className="specs">
              {cs.metrics.map(([value, label]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <div className="cs-detail">
            <article className="card card-story">
              <h4>{cs.storyTitle}</h4>
              <p>{cs.body}</p>
              <ul className="chips" aria-label="Stack">
                {cs.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
            <article className="card card-flow">
              <h4>{cs.flowTitle}</h4>
              <ol className="steps">
                {cs.flow.map(([state, label], i) => (
                  <li key={state}>
                    <span className="step-num">{i + 1}</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="decisions">
            {cs.decisions.map(([kicker, title, body], i) => (
              <article key={title} className="card decision">
                <Icon name={decisionIcons[i]} size={30} />
                <p className="decision-kicker">{kicker}</p>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <article className="tile tile-dark tile-saviu" id="saviu">
            <div className="saviu-top">
              <div className="saviu-copy">
                <p className="tile-kicker">{sv.tag}</p>
                <h3 className="tile-title">{sv.name}</h3>
                <p className="tile-lede">{sv.lede}</p>
                <MoreLink href={links.saviu}>{sv.link}</MoreLink>
              </div>
              <div className="award">
                <div className="award-row">
                  <Laurel />
                  <p className="award-num">
                    {sv.award[0]}
                    <span>{sv.award[1]}</span>
                  </p>
                  <Laurel flip />
                </div>
                <p className="award-label">{sv.award[2]}</p>
                <p className="note note-award">
                  <svg viewBox="0 0 34 26" aria-hidden="true"><path d="M30 22C20 22 10 16 6 5M2 11l4-7 6 5" /></svg>
                  <span>{sv.hackNote}</span>
                </p>
              </div>
            </div>
            <div className="saviu-points">
              {sv.points.map(([title, body]) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="tile tile-digest">
            <div className="digest-copy">
              <p className="tile-kicker">{dg.tag}</p>
              <h3 className="tile-title">{dg.name}</h3>
              <p className="tile-lede">{dg.lede}</p>
              <p className="tile-body">{dg.body}</p>
              <div className="tile-links">
                {dg.links.map(([label, key]) => (
                  <MoreLink key={key} href={links[key]}>{label}</MoreLink>
                ))}
              </div>
            </div>
            <div className="pipeline" aria-hidden="true">
              <div className="pipe-group">
                {dg.sources.map((s) => (
                  <span key={s} className="pipe-src">{s}</span>
                ))}
              </div>
              <span className="pipe-arrow" />
              <div className="pipe-group">
                {dg.stages.map((s) => (
                  <span key={s} className="pipe-stage">{s}</span>
                ))}
              </div>
              <span className="pipe-arrow" />
              <div className="pipe-out">
                <span>{dg.output[0]}</span>
                <strong>{dg.output[1]}</strong>
                <span>{dg.output[2]}</span>
              </div>
            </div>
          </article>
        </section>

        <section className="section" id="engineering">
          <SectionHead title={t.engineering.title} body={t.engineering.body} />
          <LayerConsole layers={t.engineering.layers} label={t.engineering.tablistLabel} />
        </section>

        <section className="section section-mist" id="growth">
          <SectionHead title={t.growth.title} body={t.growth.body} />
          <dl className="stat-grid">
            {t.growth.stats.map(([value, label, note]) => (
              <div key={label + note} className="stat">
                <dt>
                  {label}
                  <span>{note}</span>
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" id="about">
          <div className="about">
            <div className="about-copy">
              <h2>{t.about.title}</h2>
              <p className="about-body">{t.about.body}</p>
              <ol className="timeline" aria-label={t.about.logLabel}>
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
            <div className={`gallery count-${t.about.photos.length}`}>
              {t.about.photos.map((p) => (
                <figure key={p.src}>
                  <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <section className="contact">
          <p className="contact-kicker">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <a className="btn btn-brand btn-lg" href={links.email}>{t.contact.emailCta}</a>
          <ul className="contact-links">
            {t.contact.links
              .filter(([, key]) => key !== "email")
              .map(([label, key]) => (
                <li key={key}>
                  <MoreLink href={links[key]}>{label}</MoreLink>
                </li>
              ))}
          </ul>
        </section>
        <div className="footer-bar">
          <span>{t.contact.footer[0]}</span>
          <div className="footer-links">
            <a href={t.switchHref} hrefLang={otherLang}>{t.switchLabel}</a>
            <a href="#top">{t.contact.footer[2]}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
