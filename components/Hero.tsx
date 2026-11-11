import { ArrowIcon } from "./ArrowIcon";
import { portfolio, whatsappLink } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability"><i /> Available for freelance projects</div>
          <p className="hero-kicker">Hi, I&apos;m {portfolio.name}.</p>
          <h1>Web developer<br />building <span>bold</span><br />digital products.</h1>
          <p className="hero-intro">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#work">View my work <ArrowIcon /></a>
            <a className="text-btn" href={whatsappLink()} target="_blank" rel="noreferrer">Let&apos;s talk ↗</a>
          </div>
        </div>
        <div className="developer-card" aria-label="Developer profile card">
          <div className="card-top"><span>IKOSOFT.DEV</span><i /></div>
          <div className="code-mark">&lt;/&gt;</div>
          <div className="card-name"><small>WEB DEVELOPER</small><strong>EL YASSINE<br />IKO</strong></div>
          <div className="card-bottom"><span>MARRAKECH, MA</span><span>2026</span></div>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <span>Next.js</span><b>✦</b><span>React</span><b>✦</b><span>TypeScript</span><b>✦</b><span>Tailwind CSS</span><b>✦</b><span>Node.js</span>
      </div>
    </section>
  );
}
