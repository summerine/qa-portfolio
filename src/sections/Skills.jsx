
const skillCategories = [
  {
    number: "01",
    title: "Testing Types",
    accent: "red",
    skills: [
      "Exploratory Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "End-to-End Testing",
      "Retesting",
      "User Acceptance Testing (UAT)",
      "API Testing",
    ],
  },
  {
    number: "02",
    title: "Tools and Platforms",
    accent: "blue",
    skills: [
      "Postman",
      "Swagger",
      "JIRA",
      "Confluence",
      "GitHub Actions",
      "Slack",
      "Google Sheets",
      "Google Docs",
      "Chrome DevTools",
    ],
  },
  {
    number: "03",
    title: "Methodologies",
    accent: "green",
    skills: [
      "Behavior-Driven Development (BDD)",
      "Software Development Life Cycle (SDLC)",
      "Software Testing Life Cycle (STLC)",
      "Agile",
      "Scrum"
    ],
  },
  {
    number: "04",
    title: "Documentation",
    accent: "amber",
    skills: [
      "Test Plans",
      "Test Cases",
      "Test Reports",
      "User Manuals",
      "Test Reporting Guidelines",
    ],
  },
  {
    number: "05",
    title: "AI Tools",
    accent: "purple",
    skills: [
      "Claude AI",
      "Test Case Drafting",
      "Edge Case Analysis",
    ],
  },
  {
    number: "06",
    title: "Domain Knowledge",
    accent: "plum",
    skills: [
      "Fintech/Open Banking",
      "Gaming Backend Services",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-header">
          <p className="section-label">
            SKILLS
          </p>

          <h2>Skills & Expertise</h2>

          <p className="skills-intro">
            A record of technical capabilities, testing practices,
            tools and domain experience.
          </p>
        </div>

        <div className="skills-dossier">
          {skillCategories.map((category) => (
            <article
              className={`dossier-entry dossier-${category.accent}`}
              key={category.number}
            >
              <div className="dossier-heading">
                <span className="dossier-number">
                  {category.number}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="learning-dossier">
          <p className="learning-label">
            CURRENTLY DEVELOPING / 07
          </p>

          <h3>Test Automation</h3>

          <div className="skill-list">
            {["Playwright", "Python", "Pytest"].map((skill) => (
              <span className="skill-item" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <p className="learning-description">
            Currently expanding my skills by learning test automation
            using Playwright with Python and Pytest.
          </p>
        </article>

      </div>
    </section>
  );
}

export default Skills;
