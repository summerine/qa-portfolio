function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
          <p className="hero-label">QUALITY ASSURANCE PROFESSIONAL</p>

      <div className="hero-name-group">
        <h1 className="hero-name">Hello, I am Indri Puspita Rini</h1>

        <span className="open-to-work">
          <span className="open-to-work-dot"></span>
            OPEN TO WORK
          </span>
      </div>

        <h2>
          Making Product Behaviour <span className="hero-highlight">Clear</span> Through
          Testing and Documentation.
        </h2>

        <p className="hero-description">
          I help teams understand product behaviour, communicate testing
          findings effectively, and make informed decisions, not just find bugs.
        </p>

        <p className="hero-secondary">
          <strong>
            MANUAL TESTING · API TESTING · FINTECH (OPEN FINANCE) ·
            GAMING BACKEND SERVICES
          </strong>
        </p>

        <div className="hero-actions">
          <a href="#experience" className="button-primary">
            View Experience
          </a>
          <a href={`${import.meta.env.BASE_URL}QA-Engineer-Indri-Puspita-Rini.pdf`} className="button-secondary" download="QA-Engineer-Indri-Puspita-Rini.pdf">
            Download My CV
          </a>
          <a href="#contact" className="button-tertiary">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;