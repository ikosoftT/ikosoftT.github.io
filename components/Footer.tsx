import { portfolio, whatsappLink } from "@/data/portfolio";

export function Footer() {
  return (
    <footer>
      <div className="footer-main shell">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s make<br /><em>something great.</em></h2>
        <a className="footer-cta" href={whatsappLink()} target="_blank" rel="noreferrer">Tell me about it <span>↗</span></a>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <div><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ikosoftT" target="_blank" rel="noreferrer">GitHub</a></div>
        <span>{portfolio.location}</span>
      </div>
    </footer>
  );
}
