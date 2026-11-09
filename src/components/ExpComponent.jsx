const companies = [
  {
    name: "Brankas Pte. Ltd.",
    description: "B2B Open Finance and Banking Solutions",
    period: "December 2025 – June 2026",
    details: ["7 months", "Contract", "Remote"],
    roles: [
      {
        accent: "official",
        type: "OFFICIAL POSITION",
        title: "Quality Assurance Engineer",
        bullets: [
          <>
            Designed, reviewed and executed{" "}
            <strong>900+ manual test cases</strong> in BDD (Given-When-Then)
            format, covering core banking and approval workflows.
          </>,
          <>
            Validated <strong>20+ REST API endpoints</strong> in Postman to
            verify user data flows and integration behaviour.
          </>,
          "Performed exploratory, functional, end-to-end, regression and sanity testing across Staging and UAT environments.",
          "Triaged client-reported issues in Jira, verified fixes in Staging and UAT, and shared test results with developers and project stakeholders.",
          <>
            Used <strong>Claude AI</strong> to explore edge cases and speed up
            test case drafting, reviewing all output before use.
          </>,
          "Created user manuals and testing reports to give clients visibility and support project handover.",
        ],
        achievements: [
          {
            title: "Project Continuity",
            text: "Maintained full QA coverage and on-time delivery as the sole quality assurance engineer for 5 months while the QA Manager was unavailable.",
          },
        ],
      },
    ],
  },
  {
    name: "PT. Accelbyte Teknologi Indonesia",
    description: "B2B Gaming Backend and Ecosystem Platform",
    period: "November 2021 – April 2025",
    details: ["3 years 6 months", "Full Time", "Remote"],
    roles: [
      {
        accent: "official",
        type: "OFFICIAL POSITION",
        title: "Quality Assurance Specialist",
        period: "November 2021 – April 2025 · 3 years 6 months",
        bullets: [
          <>
            Executed testing across{" "}
            <strong>20+ client and internal environments</strong> within an
            8-person QA team, supporting platform quality for global game
            studios.
          </>,
          <>
            Validated <strong>30+ REST API endpoints</strong> using Swagger
            and performed exploratory, functional, smoke, sanity, regression,
            UAT, and end-to-end testing across web and client applications.
          </>,
          "Supported releases by investigating failed test cases, verifying fixes, and collaborating with release teams and the QA Manager.",
          <>
            Created and maintained{" "}
            <strong>15+ QA documents, test reports, and internal guidelines</strong>{" "}
            to support consistent testing practices and knowledge sharing.
          </>,
          "Monitored CI/CD pipelines in GitLab and Jenkins, collaborating with SDETs to investigate failures and analyse test results.",
        ],
        achievements: [
          {
            title: "Client Collaboration",
            text: "Acted as the sole QA contact for clients on several occasions, coordinating directly on behalf of the QA team.",
          },
        ],
      },
      {
        accent: "lead",
        type: "ADDITIONAL RESPONSIBILITY",
        title: "Acting QA Lead - Internal Playtesting and War Room",
        period: "June 2023 – April 2025 · 1 year 10 months",
        bullets: [
          <>
            Coordinated an <strong>8-person QA team</strong> during internal
            playtesting and client launch periods in collaboration with the
            QA Manager.
          </>,
          "Acted as the primary QA contact for the QA Manager, Project Managers, and clients, coordinating testing activities and communicating QA findings.",
          "Evaluated testing scope for unreleased games and collaborated with the QA Manager on release-readiness decisions.",
          "Supported team members with game build troubleshooting and coordinated build readiness with Project Managers and clients.",
        ],
        achievements: [
          {
            title: "Mentorship",
            text: "Mentored QA team members in internal playtesting, client launch procedures, and game test case creation.",
          },
          {
            title: "Onboarding",
            text: (
              <>
                Onboarded <strong>2 team members</strong> (1 new hire and 1
                internal transfer) on game testing processes as part of team
                OKRs.
              </>
            ),
          },
          {
            title: "Reporting Improvement",
            text: "Replaced legacy manager reporting with structured internal playtesting and launch reports, improving stakeholder readability and setting a repeatable reporting standard for the team.",
          },
          {
            title: "Documentation & Knowledge Sharing",
            text: "Developed internal playtesting and War Room reports that became reference materials for other QA team members, supporting consistent reporting practices and knowledge sharing.",
          },
        ],
      },
    ],
  },
   {
    name: "PT. Vodjo Teknologi Indonesia",
    description: "Software Ecosystem Company",
    period: "May 2021 – November 2021",
    details: ["7 months", "Contract", "Remote"],
    roles: [
      {
        accent: "official",
        type: "OFFICIAL POSITION",
        title: "Software Tester & Technical Writer",
        bullets: [
          <>
            Contributed to around <strong>14 client projects</strong> across the full QA lifecycle in a fast-paced 
            software house environment.
          </>,
          <>
          Developed and executed test cases based on product requirements for websites and mobile apps, 
          to ensure alignment with client expectations.
          </>,
          <>
          Identified, reported and tracked defects, collaborating with developers to verify fixes and stabilise application builds.
          </>,
          <>
          Conducted software demos, prepared design approval documents and user manuals for clients.
          </>      
        ],
        achievements: [
          {
            title: "Project Delivery",
            text: 
            <>
            Owned end-to-end testing for <strong> 5 project deliveries </strong>while operating in lean teams of 2-3 people.
            </>
          },
        ],
      },
    ],
  },
];

function ExpComponent() {
  return (
    <>
      {companies.map((company) => (
        <article className="experience-company" key={company.period}>
          <div className="company-heading">
            <div>
              <h3>{company.name}</h3>
              <p className="company-description">{company.description}</p>
            </div>

            <div className="company-period">
              <span>{company.period}</span>
              {company.details.map((detail) => (
                <small key={detail}>{detail}</small>
              ))}
            </div>
          </div>

          <div className="experience-timeline">
            {company.roles.map((role, index) => (
              <div
                className={`timeline-item role-${role.accent}`}
                key={role.title}
              >
                <div className="timeline-marker">
                  <span
                    className={
                      index === 0
                        ? "timeline-dot timeline-dot-current"
                        : "timeline-dot"
                    }
                  />
                  {index < company.roles.length - 1 && (
                    <span className="timeline-line" />
                  )}
                </div>

                <div className="timeline-content">
                  <div className="role-heading">
                    <div>
                      <p className="role-type">{role.type}</p>
                      <h4>{role.title}</h4>
                      {role.period && (
                        <p className="role-period">{role.period}</p>
                      )}
                    </div>
                  </div>

                  <ul className="responsibility-list">
                    {role.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>

                  {role.achievements && (
                    <div className="achievements">
                      <p className="achievements-label">KEY ACHIEVEMENTS</p>

                      {role.achievements.map((achievement) => (
                        <div
                          className="achievement-item"
                          key={achievement.title}
                        >
                          <h5>{achievement.title}</h5>
                          <p>{achievement.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </>
  );
}

export default ExpComponent;
