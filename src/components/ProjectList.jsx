
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))
      ) : (
        <p className="no-projects">
          No projects found.
        </p>
      )}
    </section>
  );
}

export default ProjectList;
