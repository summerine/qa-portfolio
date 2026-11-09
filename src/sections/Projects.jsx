import ProjectsComponent from '../components/ProjectsComponent.jsx'


function Projects() {
return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-header">
          <p className="section-label">SELECTED WORK</p>
          <h2>Projects</h2>
          <p>
            A collection of personal projects and QA case studies
            showcasing my approach to continuous learning on software quality.
          </p>
        </div>

        <ProjectsComponent />

        </div>    
    </section>    
    );   
}  


export default Projects;