
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="image-placeholder">
            <span>×</span>
          </div>
        )}
      </div>

      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
