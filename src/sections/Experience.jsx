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
            assurance, testing, and team collaboration.
          </p>
        </header>

        <article className="experience-company">
          <div className="company-heading">
            <div>
              <h3>[Company Name]</h3>
              <p className="company-description">
                B2B Gaming Backend and Ecosystem Platform
              </p>
            </div>

            <div className="company-period">
              <span>November 2021 – April 2025</span>
              <small>3 years 6 months</small>
              <small>Remote</small>
            </div>
          </div>

          <div className="experience-timeline">

            {/* Official role */}
            <div className="timeline-item role-official">
              <div className="timeline-marker">
                <span className="timeline-dot timeline-dot-current" />
                <span className="timeline-line" />
              </div>

              <div className="timeline-content">
                <div className="role-heading">
                  <div>
                    <p className="role-type">
                      OFFICIAL POSITION
                    </p>
                    <h4>Quality Assurance Specialist</h4>
                    <p className="role-period">
                      November 2021 – April 2025 · 3 years 6 months
                    </p>
                  </div>
                </div>

                <ul className="responsibility-list">
                  <li>
                    Executed testing across <strong>20+ client and
                    internal environments</strong> within an 8-person QA
                    team, supporting platform quality for global game
                    studios.
                  </li>
                  <li>
                    Validated <strong>30+ REST API endpoints</strong> using
                    Swagger and performed exploratory, functional, smoke,
                    sanity, regression, UAT, and end-to-end testing across
                    web and client applications.
                  </li>
                  <li>
                    Supported releases by investigating failed
                    test cases, verifying fixes, and collaborating
                    with release teams and the QA Manager.
                  </li>
                  <li>
                    Created and maintained <strong>15+ QA documents, test
                    reports, and internal guidelines</strong> to support
                    consistent testing practices and knowledge sharing.
                  </li>
                  <li>
                    Monitored CI/CD pipelines in GitLab and Jenkins,
                    collaborating with SDETs to investigate failures
                    and analyse test results.
                  </li>
                </ul>

                <div className="achievements">
                  <p className="achievements-label">
                    KEY ACHIEVEMENTS
                  </p>

                  <div className="achievement-item">
                    <h5>Documentation &amp; Knowledge Sharing</h5>
                    <p>
                      Developed internal playtesting and War Room
                      reports that became reference materials for
                      other QA team members, supporting consistent
                      reporting practices and knowledge sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional responsibility */}
            <div className="timeline-item role-lead">
              <div className="timeline-marker">
                <span className="timeline-dot" />
              </div>

              <div className="timeline-content">
                <div className="role-heading">
                  <div>
                    <p className="role-type">
                      ADDITIONAL RESPONSIBILITY
                    </p>
                    <h4>Acting QA Lead - Internal Playtesting and War Room</h4>
                    <p className="role-period">
                      June 2023 – April 2025 · 1 year 10 months
                    </p>
                  </div>
                </div>

                <ul className="responsibility-list">
                  <li>
                    Coordinated an <strong>8-person QA team</strong> during
                    internal playtesting and client launch periods in
                    collaboration with the QA Manager.
                  </li>
                  <li>
                    Acted as the primary QA contact for the QA
                    Manager, Project Managers, and clients,
                    coordinating testing activities and
                    communicating QA findings.
                  </li>
                  <li>
                    Evaluated testing scope for unreleased games
                    and collaborated with the QA Manager on
                    release-readiness decisions.
                  </li>
                  <li>
                    Supported team members with game build
                    troubleshooting and coordinated build readiness
                    with Project Managers and clients.
                  </li>
                </ul>

                <div className="achievements">
                  <p className="achievements-label">
                    KEY ACHIEVEMENTS
                  </p>

                  <div className="achievement-item">
                    <h5>Mentorship</h5>
                    <p>
                      Mentored QA team members in internal
                      playtesting, client launch procedures,
                      and game test case creation.
                    </p>
                  </div>

                  <div className="achievement-item">
                    <h5>Onboarding</h5>
                    <p>
                      Onboarded <strong>2 team members</strong> (1 new hire
                      and 1 internal transfer) on game testing processes
                      as part of team OKRs.
                    </p>
                  </div>

                  <div className="achievement-item">
                    <h5>Reporting Improvement</h5>
                    <p>
                      Replaced legacy manager reporting with structured
                      internal playtesting and launch reports, improving
                      stakeholder readability and setting a repeatable
                      reporting standard for the team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
