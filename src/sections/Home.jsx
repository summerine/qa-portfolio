
function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="hero-label">
          QUALITY ASSURANCE ENGINEER
        </p>

        <div className="hero-name-group">
          <p className="hero-greeting">Hello, I am</p>
          <h1 className="hero-name">
            Indri Puspita Rini
          </h1>

          <span className="open-to-work">
            <span className="open-to-work-dot"></span>
            OPEN TO WORK
          </span>
        </div>

        <h2 className="hero-headline">
          Making Product Behaviour
          <span className="hero-highlight"> Clear</span>
          <br />
          Through Testing and Documentation.
        </h2>

        <p className="hero-description">
          I turn testing findings into clear insights that help
          teams understand product quality, identify risks, and
          make informed decisions throughout development.
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

          <a
            href={`${import.meta.env.BASE_URL}QA-Engineer-Indri-Puspita-Rini.pdf`}
            className="button-secondary"
            download="QA-Engineer-Indri-Puspita-Rini.pdf"
          >
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

