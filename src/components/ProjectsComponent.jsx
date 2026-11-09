const projects = [
  {
    id: 1,
    title: "Playwright with Pytest",
    summary:
          "A personal QA project exploring test design and browser automation. Includes BDD test scenarios, manual test case documentation, and automated browser testing using Playwright, Python, and Pytest.",
    status: "In Progress",
    type: "Personal Project",
    tags: [
      "Behavior-Driven Development (BDD)",
      "Gherkin",
      "GitHub Actions",
      "Manual QA",
      "Test Automation",
      "Pytest",
      "Playwright",
      "Python"
    ],
    github: "https://github.com/summerine/playwright-with-pytest",
  }
];

function ProjectsComponent() {
  return (

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>

              <div className="project-card-header">
                <span className="project-type">
                  {project.type}
                </span>

                <span
                  className={`project-status status-${project.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p className="project-summary">
                  {project.summary}
                </p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Readme on GitHub
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    Documentation in progress
                  </span>
                )}
              </div>

            </article>
          ))}
        </div>
  );
}

export default ProjectsComponent;