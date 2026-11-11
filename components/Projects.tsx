import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section className="section shell" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects built with purpose.</h2>
      </div>
      <div className="projects">
        {portfolio.projects.map((project, index) => (
          <article className={`project ${project.tone}`} key={project.title}>
            <div className="project-index">0{index + 1}</div>
            <div className="mock-window">
              <div className="mock-bar"><i /><i /><i /></div>
              <div className="mock-content">
                <div className="fake-nav"><b>{project.title.split(" ")[0]}</b><span>Home &nbsp; About &nbsp; Contact</span></div>
                <span>{project.title.slice(0, 1)}</span>
                <strong>{project.title}</strong>
                <small>Responsive web experience ↗</small>
              </div>
            </div>
            <div className="project-caption">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">GitHub ↗</a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
