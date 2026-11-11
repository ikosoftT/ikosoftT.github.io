import { portfolio, whatsappLink } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="Homepage">
        IKO<span>SOFT</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
      </nav>
      <a className="nav-cta" href={whatsappLink()} target="_blank" rel="noreferrer">
        Let&apos;s talk <span>↗</span>
      </a>
    </header>
  );
}
