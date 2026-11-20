import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.number} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
