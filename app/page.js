"use client";

import { useRef, useState } from "react";

const copy = {
  en: {
    nav: ["Selected work", "Silicon", "Berkeley", "About"],
    status: "Integrated circuits · web products · hardware systems",
    kicker: "From device physics to products people can use",
    heroA: "I design chips.",
    heroB: "I ship web products.",
    heroBody:
      "I’m Nate Xu, an IC designer and product-minded web developer. I work across devices, circuits, FPGA systems, and software—and I like owning the difficult path from first idea to a working result.",
    explore: "View selected work",
    resume: "Résumé",
    layerEyebrow: "01 / CROSS-LAYER PRACTICE",
    layerTitle: "One engineer, five layers.",
    layerBody:
      "My work moves in both directions: from device physics up to human-facing products, and from real-world failures back down to root causes.",
    workEyebrow: "02 / SELECTED WORK",
    workTitle: "Products I built, not just mocked up.",
    siliconEyebrow: "03 / SILICON",
    siliconTitle: "From schematic to something you can hold.",
    siliconBody:
      "A folded-cascode operational amplifier in UMC 110 nm CMOS, carried through the complete analog IC design flow.",
    berkeleyEyebrow: "04 / UC BERKELEY · SPRING 2025",
    berkeleyTitle: "A semester spent crossing boundaries.",
    berkeleyBody:
      "At Berkeley I moved between digital architecture, analog integration, and semiconductor devices — then learned that the boundaries between them are where the interesting failures live.",
    thesisEyebrow: "05 / CURRENT RESEARCH",
    thesisTitle: "Calibrating the ramp, not hoping for the corner.",
    aboutEyebrow: "06 / OFF THE BENCH",
    aboutTitle: "Curiosity travels.",
    aboutBody:
      "Before hardware and product work, I led a university media team and built a 10k-follower creator account. That background still shapes how I explain technical systems: find the signal, remove the noise, make the story legible.",
    footerTitle: "Have an ambitious system to build? Let’s talk.",
    footerBody:
      "Incoming M.S. in Electrical Engineering at Northwestern University · 2026",
    language: "中文",
  },
  zh: {
    nav: ["代表项目", "芯片", "伯克利", "关于"],
    status: "IC 设计 · Web 工程 · 硬件系统",
    kicker: "器件 → 电路 → 架构 → 系统 → 产品",
    heroA: "我设计芯片。",
    heroB: "也交付软件。",
    heroBody:
      "我是徐显策（Nate Xu）——集成电路设计者与 Web 产品构建者。从晶体管尺寸到交互状态，我最关心的，是如何让整个系统真正工作。",
    explore: "沿信号向下探索",
    resume: "查看简历",
    layerEyebrow: "01 / 跨层实践",
    layerTitle: "一条链路，五个尺度。",
    layerBody:
      "我的工作双向穿梭：从器件物理一路向上到真实产品，也从系统故障一路向下寻找根因。",
    workEyebrow: "02 / 代表项目",
    workTitle: "界面背后，是完整系统。",
    siliconEyebrow: "03 / 硅",
    siliconTitle: "从原理图，到真正握在手里。",
    siliconBody:
      "基于 UMC 110 nm CMOS 的折叠共源共栅运算放大器，并完成完整模拟 IC 设计流程。",
    berkeleyEyebrow: "04 / UC BERKELEY · 2025 春季",
    berkeleyTitle: "在边界之间学习。",
    berkeleyBody:
      "在伯克利，我同时深入数字架构、模拟系统集成与半导体器件，并逐渐发现：真正有价值的问题，往往发生在层与层之间。",
    thesisEyebrow: "05 / 当前研究",
    thesisTitle: "主动校准斜坡，而不是寄希望于工艺角。",
    aboutEyebrow: "06 / 实验台之外",
    aboutTitle: "好奇心没有边界。",
    aboutBody:
      "在硬件和产品之前，我曾带领校级视频团队，也独立运营过万粉内容账号。这段经历仍影响着我解释技术的方式：找到信号、去除噪声，让复杂系统变得清晰。",
    footerTitle: "一起把系统做完整——一直做到最底层。",
    footerBody: "Northwestern University 电子工程硕士 · 2026 入学",
    language: "EN",
  },
};

const layers = [
  {
    id: "01",
    name: "DEVICE",
    zh: "器件",
    metric: "25 nm",
    title: "NMOSFET device design",
    detail:
      "BSIM4 and TCAD exploration of channel doping, junction depth, spacer length, and EOT against ION / IOFF targets.",
    color: "blue",
  },
  {
    id: "02",
    name: "CIRCUIT",
    zh: "电路",
    metric: "75 dB",
    title: "Folded-cascode op-amp",
    detail:
      "Topology selection, sizing, biasing, stability, PVT corners, matching layout, PEX, and post-layout verification.",
    color: "acid",
  },
  {
    id: "03",
    name: "ARCHITECTURE",
    zh: "架构",
    metric: "95 MHz",
    title: "Five-stage RISC-V CPU",
    detail:
      "A no-forwarding pipeline with hazard detection, stalls, NOP insertion, CSR, interrupts, and FPGA validation.",
    color: "orange",
  },
  {
    id: "04",
    name: "SYSTEM",
    zh: "系统",
    metric: "16 bit",
    title: "ZYNQ data acquisition",
    detail:
      "Reliable PL–PS communication without DDR, AXI4-Lite + BRAM/FIFO, CDC debugging, and board-level verification.",
    color: "silver",
  },
  {
    id: "05",
    name: "PRODUCT",
    zh: "产品",
    metric: "0 → 1",
    title: "Web products, shipped",
    detail:
      "Shipping the whole web product: information architecture, interaction states, JavaScript, CloudBase services, tests, and deployment.",
    color: "red",
  },
];

const icFlow = [
  ["01", "SPEC", "Define gain, bandwidth, phase margin, and slew-rate targets."],
  ["02", "DESIGN", "Choose topology; size devices; build bias and feedback networks."],
  ["03", "SIMULATE", "Run DC, AC, transient, stability, and PVT corner analysis."],
  ["04", "LAYOUT", "Use common-centroid placement, dummies, guard rings, and symmetry."],
  ["05", "VERIFY", "Close DRC/LVS, extract parasitics, and repeat post-layout simulation."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const [activeLayer, setActiveLayer] = useState(2);
  const heroRef = useRef(null);
  const t = copy[lang];

  const moveGlow = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    heroRef.current.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <main id="main-content">
      <a className="skip-link" href="#work">Skip to selected work</a>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Nate Xu home">
          NX<span>Nate Xu</span>
        </a>
        <nav aria-label="Primary navigation">
          {["work", "silicon", "berkeley", "about"].map((id, index) => (
            <a key={id} href={`#${id}`}>
              {t.nav[index]}
            </a>
          ))}
        </nav>
        <button
          className="language"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          aria-label="Switch language"
        >
          {t.language}
        </button>
      </header>

      <section
        className="hero"
        id="top"
        ref={heroRef}
        onPointerMove={moveGlow}
      >
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-status">
          <span className="live-dot" />
          {t.status}
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{t.kicker}</p>
          <h1>
            <span>{t.heroA}</span>
            <span className="outline">{t.heroB}</span>
          </h1>
          <div className="hero-bottom">
            <p>{t.heroBody}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                {t.explore} <ArrowIcon />
              </a>
              <a className="button ghost" href="/Nate_CV2026.07.pdf" target="_blank">
                {t.resume}
              </a>
            </div>
          </div>
          <div className="hero-facts" aria-label="Selected outcomes">
            <article><strong>95 MHz</strong><span>Five-stage RISC-V CPU on FPGA</span></article>
            <article><strong>19 tests</strong><span>EasySublet automated product coverage</span></article>
            <article><strong>110 nm</strong><span>Analog IC schematic-to-layout flow</span></article>
          </div>
        </div>
        <figure className="hero-portrait">
          <img src="/nate-portrait.jpg" alt="Portrait of Nate Xu" />
          <figcaption>
            <span>NATE XU / 徐显策</span>
            <span>EE · IC · FPGA · AI</span>
          </figcaption>
        </figure>
        <div className="scope-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </section>

      <section className="layers section" id="layers">
        <div className="section-heading">
          <p className="eyebrow dark">{t.layerEyebrow}</p>
          <h2>{t.layerTitle}</h2>
          <p>{t.layerBody}</p>
        </div>
        <div className="layer-console">
          <div className="layer-tabs" role="tablist" aria-label="Engineering layers">
            {layers.map((layer, index) => (
              <button
                key={layer.id}
                className={activeLayer === index ? "active" : ""}
                onMouseEnter={() => setActiveLayer(index)}
                onFocus={() => setActiveLayer(index)}
                onClick={() => setActiveLayer(index)}
                role="tab"
                aria-selected={activeLayer === index}
              >
                <span>{layer.id}</span>
                <b>{lang === "en" ? layer.name : layer.zh}</b>
              </button>
            ))}
          </div>
          <div className={`layer-display ${layers[activeLayer].color}`}>
            <div className="layer-scope" aria-hidden="true">
              <svg viewBox="0 0 600 220" preserveAspectRatio="none">
                <path d="M0 140H65L84 140 96 40 111 190 126 96 145 140H215L230 140 244 88 258 162 274 118 292 140H360L382 140 396 54 411 186 426 105 445 140H600" />
              </svg>
            </div>
            <p className="layer-index">LAYER / {layers[activeLayer].id}</p>
            <strong>{layers[activeLayer].metric}</strong>
            <h3>{layers[activeLayer].title}</h3>
            <p>{layers[activeLayer].detail}</p>
          </div>
        </div>
      </section>

      <section className="work section black" id="work">
        <div className="section-heading light">
          <p className="eyebrow">{t.workEyebrow}</p>
          <h2>{t.workTitle}</h2>
        </div>

        <article className="project project-sublet">
          <div className="project-copy">
            <p className="project-number">PROJECT / 01</p>
            <h3>EasySublet</h3>
            <p className="project-lede">
              A campus housing product I took from problem framing to working
              frontend, CloudBase services, data model, testing, and deployment.
            </p>
            <div className="project-metrics">
              <span><b>4</b> campuses</span>
              <span><b>19</b> automated test files</span>
              <span><b>9</b> business subpackages</span>
            </div>
            <p className="project-detail">
              I initiated the product and owned its PRD, information architecture,
              interaction design, JavaScript implementation, cloud boundaries, and
              quality system. The result is a working product—not a portfolio mockup.
            </p>
            <div className="prototype-access">
              <a className="text-link" href="https://zhuanzuproj.netlify.app/" target="_blank" rel="noreferrer">
                Open browser demo <ArrowIcon />
              </a>
              <p><span>Demo password</span><code>wagoneer2026</code></p>
            </div>
          </div>
          <div className="phone-stack" aria-label="EasySublet interface screenshots">
            <figure className="phone phone-a">
              <img src="/easy-detail.png" alt="EasySublet listing detail interface" />
            </figure>
            <figure className="phone phone-b">
              <img src="/easy-chat.png" alt="EasySublet in-app conversation list" />
            </figure>
            <figure className="phone phone-c">
              <img src="/easy-publish.png" alt="EasySublet listing publishing flow" />
            </figure>
          </div>
          <div className="sublet-engineering">
            <div className="sublet-engineering-head">
              <div>
                <p className="project-number">WEB PRODUCT ENGINEERING</p>
                <h4>Every screen has<br />an engineering reason.</h4>
              </div>
              <p>
                The strongest part of EasySublet is not a single screen. It is the
                connection between user flow, reusable frontend logic, cloud functions,
                data structure, and trust rules.
              </p>
            </div>
            <div className="build-comparison" aria-label="EasySublet browser demo and native WeChat build comparison">
              <div className="comparison-lede">
                <div>
                  <p className="project-number">DEMO / NATIVE BUILD</p>
                  <h5>Same product story.<br />Different runtime.</h5>
                </div>
                <p>
                  The browser demo makes the product easy to review. The native WeChat
                  build carries the platform, backend, identity, and privacy boundaries.
                </p>
              </div>
              <div className="comparison-table" role="table">
                <div className="comparison-row comparison-head" role="row">
                  <span role="columnheader">Difference</span>
                  <strong role="columnheader">Browser demo</strong>
                  <strong role="columnheader">Native WeChat build</strong>
                </div>
                <div className="comparison-row" role="row">
                  <span role="rowheader">Runtime</span>
                  <p role="cell" data-label="Browser demo">Static mobile-first web app that opens on any device.</p>
                  <p role="cell" data-label="Native build">Native WXML, WXSS, and JavaScript Mini Program.</p>
                </div>
                <div className="comparison-row" role="row">
                  <span role="rowheader">Data & identity</span>
                  <p role="cell" data-label="Browser demo">Browser-local demo data and a local experience account.</p>
                  <p role="cell" data-label="Native build">WeChat identity plus service and CloudBase cloud-function boundaries.</p>
                </div>
                <div className="comparison-row" role="row">
                  <span role="rowheader">Platform depth</span>
                  <p role="cell" data-label="Browser demo">Best for reviewing search, detail, publish, favorites, profile, and chat flows.</p>
                  <p role="cell" data-label="Native build">Adds WeChat sharing, media, notifications, ownership checks, and server-controlled contact exchange.</p>
                </div>
                <div className="comparison-row" role="row">
                  <span role="rowheader">Current status</span>
                  <p role="cell" data-label="Browser demo">Shareable and password-gated on Netlify.</p>
                  <p role="cell" data-label="Native build">Core implementation is complete; CloudBase rollout and real-device acceptance are in progress.</p>
                </div>
              </div>
            </div>
            <div className="web-architecture">
              <div className="architecture-layer layer-ui">
                <span>01 / EXPERIENCE</span>
                <strong>WXML, WXSS and responsive UI</strong>
                <p>Search, filters, favorites, detail, publish, profile, campus life.</p>
              </div>
              <div className="architecture-connector" aria-hidden="true"><i /><i /><i /></div>
              <div className="architecture-layer layer-app">
                <span>02 / APPLICATION</span>
                <strong>JavaScript and service layer</strong>
                <p>Shared components, form state, validation, domain actions, environment isolation.</p>
              </div>
              <div className="architecture-connector" aria-hidden="true"><i /><i /><i /></div>
              <div className="architecture-layer layer-cloud">
                <span>03 / CLOUD</span>
                <strong>CloudBase, Node.js and functions</strong>
                <p>Field whitelists, serverless operations, migration preflight, media and identity direction.</p>
              </div>
              <div className="architecture-connector" aria-hidden="true"><i /><i /><i /></div>
              <div className="architecture-layer layer-data">
                <span>04 / DATA</span>
                <strong>Users, listings, wanted posts and chats</strong>
                <p>Campus-aware schemas, apartment aliases, shuttle links, conversations and messages.</p>
              </div>
            </div>
            <div className="product-design-strip">
              <article>
                <span>FLOW DESIGN</span>
                <strong>6-step listing</strong>
                <p>A complex housing post turned into a calm, progressive publishing flow.</p>
              </article>
              <article>
                <span>TRUST DESIGN</span>
                <strong>Contact release state</strong>
                <p>Users exchange contact details only after both sides have communicated effectively.</p>
              </article>
              <article>
                <span>QUALITY SYSTEM</span>
                <strong>19 test files</strong>
                <p>Core coverage across publishing, verification, apartments, wanted posts, favorites, and maps.</p>
              </article>
              <article>
                <span>INFORMATION DESIGN</span>
                <strong>Campus as context</strong>
                <p>School, neighborhood, apartment aliases, and shuttle routes become one discovery system.</p>
              </article>
            </div>
          </div>
        </article>

        <article className="project project-digest">
          <div className="pipeline-visual" aria-label="AI Builders digest pipeline">
            <div className="pipeline-noise">
              {["X / POSTS", "YOUTUBE", "RSS / FEEDS", "AI CODING", "AGENTS", "SAAS"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="pipeline-core">
              <span>PREPARE</span><i />
              <span>SUMMARIZE</span><i />
              <span>DELIVER</span>
            </div>
            <div className="pipeline-output">
              <span>10:00 CST</span>
              <strong>今日 AI Builders</strong>
              <p>Signal extracted. Context preserved. Delivered automatically.</p>
            </div>
          </div>
          <div className="project-copy">
            <p className="project-number">PROJECT / 02</p>
            <h3>AI Builders Digest</h3>
            <p className="project-lede">
              A Chinese daily briefing pipeline that collects builder signals,
              summarizes them with context, and delivers a useful digest every morning.
            </p>
            <p className="project-detail">
              A decoupled prepare → summarize → deliver workflow gathers feeds,
              generates LLM-assisted Chinese digests, and pushes them to Feishu every
              morning through GitHub Actions. I owned product framing, architecture,
              data collection, prompt pipeline, UI, testing, and deployment docs.
            </p>
            <a className="text-link" href="https://github.com/NateeeXu/follow-builders-feishu" target="_blank" rel="noreferrer">
              View source on GitHub <ArrowIcon />
            </a>
          </div>
        </article>
      </section>

      <section className="silicon section" id="silicon">
        <div className="silicon-sticky">
          <div className="silicon-image">
            <img src="/silicon-dies.jpg" alt="Silicon dies from Nate Xu's IC design work" />
            <div className="die-marker marker-a"><span>PEX</span></div>
            <div className="die-marker marker-b"><span>LVS</span></div>
            <div className="die-marker marker-c"><span>DRC</span></div>
          </div>
          <div className="silicon-copy">
            <p className="eyebrow dark">{t.siliconEyebrow}</p>
            <h2>{t.siliconTitle}</h2>
            <p>{t.siliconBody}</p>
            <dl>
              <div><dt>PROCESS</dt><dd>UMC 110 nm CMOS</dd></div>
              <div><dt>TOOLS</dt><dd>Cadence Virtuoso IC618 · Spectre APS</dd></div>
              <div><dt>RESULTS</dt><dd>~75 dB gain · MHz-level GBW · ~60° PM</dd></div>
              <div><dt>FLOW</dt><dd>Schematic → Layout → DRC/LVS → PEX</dd></div>
            </dl>
          </div>
        </div>
        <div className="ic-flow">
          {icFlow.map(([number, title, detail]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="berkeley section" id="berkeley">
        <div className="berkeley-photo">
          <img src="/berkeley.jpg" alt="Nate Xu at UC Berkeley with the Campanile behind him" />
          <div className="berkeley-stamp">
            <span>37.8715° N</span>
            <strong>CAL</strong>
            <span>122.2730° W</span>
          </div>
        </div>
        <div className="berkeley-copy">
          <p className="eyebrow dark">{t.berkeleyEyebrow}</p>
          <h2>{t.berkeleyTitle}</h2>
          <p className="berkeley-intro">{t.berkeleyBody}</p>
          <div className="course-list">
            <article>
              <span>EECS 151 / 251A</span>
              <h3>Digital Design & Integrated Circuits</h3>
              <p>Five-stage RISC-V CPU · 95 MHz · 1.24 CPI · 22% LUT reduction.</p>
            </article>
            <article>
              <span>EE 140</span>
              <h3>Analog Integrated Circuits</h3>
              <p>Golden Bear analog front-end: comparator, op-amp, loop stability, integration.</p>
            </article>
            <article>
              <span>EE 130 / 230A</span>
              <h3>Semiconductor Devices</h3>
              <p>25 nm NMOSFET design against ION, IOFF, DIBL, SS, and temperature targets.</p>
            </article>
          </div>
          <blockquote>
            “A module working alone does not mean the system will stay stable.”
          </blockquote>
        </div>
      </section>

      <section className="thesis section">
        <div className="thesis-top">
          <p className="eyebrow">{t.thesisEyebrow}</p>
          <p>CIS / MIXED SIGNAL / 2026</p>
        </div>
        <h2>{t.thesisTitle}</h2>
        <div className="ramp-visual" aria-hidden="true">
          <svg viewBox="0 0 1000 240" preserveAspectRatio="none">
            <path className="ramp-grid" d="M0 200H1000M0 150H1000M0 100H1000M0 50H1000M200 0V240M400 0V240M600 0V240M800 0V240" />
            <path className="ramp-ideal" d="M0 210L1000 25" />
            <path className="ramp-real" d="M0 214L75 204L150 190L235 181L310 157L395 150L480 126L565 118L650 90L735 84L820 55L910 46L1000 21" />
          </svg>
          <span className="ramp-label label-a">PVT ROBUSTNESS</span>
          <span className="ramp-label label-b">SELF CALIBRATION</span>
          <span className="ramp-label label-c">KICKBACK ↓</span>
        </div>
        <div className="thesis-details">
          <h3>Self-Calibrated Ramp Generator for Column-Parallel SS-ADC in CIS</h3>
          <p>
            Bachelor thesis focused on ramp linearity, device mismatch, column
            crosstalk, kickback suppression, low power, and robust operation across
            process, voltage, and temperature.
          </p>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <p className="eyebrow dark">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutBody}</p>
          <ul>
            <li><span>2025</span> UC Berkeley exchange</li>
            <li><span>2026</span> B.S. Electronic Science & Technology</li>
            <li><span>2026</span> Northwestern University · incoming&nbsp;M.S.</li>
          </ul>
        </div>
        <div className="field-notes">
          <figure className="field-main">
            <img src="/field-sky.jpg" alt="Nate Xu in a wide mountain landscape" />
            <figcaption>FIELD NOTE / STAY CURIOUS</figcaption>
          </figure>
          <figure className="field-small">
            <img src="/city.jpg" alt="Nate Xu exploring a city street" />
            <figcaption>SIGNAL EXISTS EVERYWHERE</figcaption>
          </figure>
        </div>
      </section>

      <footer>
        <div className="footer-title">
          <p className="eyebrow">{t.footerBody}</p>
          <h2>{t.footerTitle}</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:nate19991907829@gmail.com">EMAIL <ArrowIcon /></a>
          <a href="https://github.com/NateeeXu" target="_blank" rel="noreferrer">GITHUB <ArrowIcon /></a>
          <a href="https://www.linkedin.com/in/nate-xiance-xu-b28721351" target="_blank" rel="noreferrer">LINKEDIN <ArrowIcon /></a>
          <a href="/Nate_CV2026.07.pdf" target="_blank">RÉSUMÉ <ArrowIcon /></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NATE XU</span>
          <span>BUILT ACROSS SILICON AND SOFTWARE</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
