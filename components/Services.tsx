import { portfolio, whatsappLink } from "@/data/portfolio";
import { ArrowIcon } from "./ArrowIcon";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="shell">
        <div className="section-heading light">
          <p className="eyebrow">What I do</p>
          <h2>Everything your website needs.</h2>
        </div>
        <div className="services">
          {portfolio.services.map((service) => (
            <article className="service" key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={whatsappLink(`Hi El Yassine, I'm interested in ${service.title}.`)} target="_blank" rel="noreferrer" aria-label={`Ask about ${service.title}`}>
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
