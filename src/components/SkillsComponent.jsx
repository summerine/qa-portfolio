const skillCategories = [
  {
    number: "01",
    title: "Testing Types",
    accent: "red",
    skills: [
      "API Testing",
      "End-to-End Testing",
      "Exploratory Testing",
      "Manual QA",
      "Regression Testing",
      "Re-testing",
      "Sanity Testing",
      "Smoke Testing",
      "User Acceptance Testing (UAT)",
    ],
  },
  {
    number: "02",
    title: "Tools and Platforms",
    accent: "muted-rose",
    skills: [
      "Confluence",
      "Chrome DevTools",
      "Google Sheets",
      "Google Docs",
      "Fiddler",
      "JIRA",
      "Postman",
      "QMetry",
      "Swagger"
    ],
  },
  {
    number: "03",
    title: "Methodologies",
    accent: "green",
    skills: [
      "Agile",
      "Scrum",
      "Behavior-Driven Development (BDD)",
      "Software Testing Life Cycle (STLC)",
      "Software Development Life Cycle (SDLC)",
    ],
  },
  {
    number: "04",
    title: "Documentation",
    accent: "amber",
    skills: [
      "Test Cases",
      "Test Plans",
      "Test Reports",
      "User Manuals",
      "QA Guidelines"
    ],
  },
  {
    number: "05",
    title: "AI Tools",
    accent: "purple",
    skills: [
      "Claude AI (Test Case Drafting and Edge Case Analysis)",
    ],
  },
  {
    number: "06",
    title: "Domain Knowledge",
    accent: "plum",
    skills: [
      "Fintech (Open Finance)",
      "Gaming Backend Services",
    ],
  },
  {
    number: "07",
    title: "Platform Experience",
    accent: "antique-gold",
    skills: [
      "Mobile Applications",
      "Web Applications",
    ],
  },
  {
    number: "08",
    title: "Soft SKills",
    accent: "soft-lavender",
    skills: [
      "Adaptability",
      "Cross-team Collaboration",
      "Client Communication",
      "Knowledge Sharing",
      "Mentorship",
      "Remote Collaboration",
      "Teamwork",
      "Problem-Solving"
    ]
  },
  {
    number: "09",
    title: "Languages",
    accent: "burnt-copper",
    skills:[
      "Bahasa Indonesia (Native Proficiency)",
      "English (Professional Working Proficiency)",
    ]

  }
];

const learningSkills = ["Playwright", "Python", "Pytest", "GitHub Actions"];

function SkillsComponent() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-header">
          <p className="section-label">
            SKILLS
          </p>

          <h2>Skills &amp; Expertise</h2>

          <p className="skills-intro">
            A record of both soft and technical capabilities, tools,
            and domain experiences.
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
            CURRENTLY DEVELOPING
          </p>

          <h3>Test Automation</h3>

          <div className="skill-list">
            {learningSkills.map((skill) => (
              <span className="skill-item" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <p className="learning-description">
            Currently expanding my skills by learning test automation
            using Playwright with Python, Pytest and GitHub Actions.
          </p>
        </article>

      </div>
    </section>
  );
}

export default SkillsComponent;