function Home() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
            {/* <p className="hero-label">
                <b>Hello, I am Indri. A Quality Assurance Engineer.</b>
            </p> */}

            <h2> Delivering Clarity Through Software Testing and Documentation. </h2>

            <p className="hero-description">
                Hello, I am Indri. A quality assurance engineer who collaborates with stakeholders and development teams to communicate testing insights, supports informed decisions, and produces clear, comprehensive testing reports and documentation.
            </p>

           <p className="hero-secondary">
            <b>Manual QA | API Testing | Behavior-Driven Development (BDD) | Fintech & Gaming Backend
           </b></p>

           <p className="hero-actions">
            <a href="#projects" className="button-primary">
                View My Projects
            </a>

            <a href="#contact" className="button-secondary">
                Contact Me
            </a>

           </p>
            </div>
        </section>
    )
}

export default Home