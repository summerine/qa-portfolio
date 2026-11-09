
import ExpComponent from '../components/ExpComponent.jsx'

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <header className="experience-header">
          <p className="section-label">
            CAREER HISTORY
          </p>
          <h2>Experience</h2>
          <p>
            My professional experience in software quality
            assurance and team collaboration.
          </p>
        </header>

        <ExpComponent />

      </div>
    </section>
  );
}

export default Experience;
