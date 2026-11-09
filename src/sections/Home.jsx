function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
          <p className="hero-label">QUALITY ASSURANCE PROFESSIONAL</p>

      <div className="hero-name-group">
        <h1 className="hero-name">Hello, I am Indri</h1>

        <span className="open-to-work">
          <span className="open-to-work-dot"></span>
            OPEN TO WORK
          </span>
      </div>

        <h2>
          Delivering <span className="hero-highlight">Clarity</span> Through
          Software Testing and Documentation.
        </h2>

        <p className="hero-description">
          I help teams understand product behaviour, communicate testing
          findings effectively, and make informed decisions, going beyond
          identifying defects.
        </p>

        <p className="hero-secondary">
          <strong>
            MANUAL TESTING · API TESTING · BDD · FINTECH (OPEN FINANCE) ·
            GAMING BACKEND SERVICES
          </strong>
        </p>

        <div className="hero-actions">
          <a href="#experience" className="button-primary">
            View Experience
          </a>
          <a href="#" className="button-secondary">
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