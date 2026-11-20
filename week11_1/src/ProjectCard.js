function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const imagePath = `${process.env.PUBLIC_URL}/images/${project.image}`;

  return (
    <article className={`project-card ${project.className}`}>
      <a
        className="project-card__image-link"
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live demo in a new tab`}
      >
        <img
          className="project-card__image"
          src={imagePath}
          alt={project.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="project-card__image-arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </a>
      <div className="project-card__meta">
        <span>{project.category}</span>
        <span>{project.number} / 06</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__technologies" aria-label="Technology stack">
        {project.technologies.map((technology) => (
          <li className="project-card__technology" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
      <div className="project-card__links">
        <a
          className="project-card__link project-card__link--primary"
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo <ArrowIcon />
        </a>
        <a
          className="project-card__link"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
