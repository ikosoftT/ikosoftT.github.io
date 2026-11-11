import { portfolio, whatsappLink } from "@/data/portfolio";

export function About() {
  return (
    <section className="about shell" id="about">
      <div>
        <p className="eyebrow">A little about me</p>
        <h2>I turn ideas into websites people remember.</h2>
      </div>
      <div className="about-copy">
        <p>
          I&apos;m {portfolio.name}, the developer behind {portfolio.brand}. I build modern web experiences from {portfolio.location}, combining clean code with strong visual design. My focus is simple: websites that look sharp, work smoothly, and help businesses grow.
        </p>
        <a href={whatsappLink()} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
      </div>
    </section>
  );
}
