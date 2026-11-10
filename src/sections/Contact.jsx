import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Contact</h2>
          <p>
            I am open to QA opportunities and professional conversations with recruiters, 
            teams, and fellow practitioners who value collaboration, and software quality.
          </p>
        </div>

        <div className="contact-links">

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/indri-p-bb6a96152/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-link-icon">
                <FaLinkedin size={32} color="#0A66C2" />
            </div>

            <div className="contact-link-content">
              <h3>LinkedIn</h3>
              <p>Professional profile and experience</p>
            </div>

            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="contact-link"
            href="https://github.com/summerine"
            target="_blank"
            rel="noopener noreferrer"
          >
          
        <div className="contact-link-icon">
           <FaGithub size={32} color="#181717" />
        </div>


            <div className="contact-link-content">
              <h3>GitHub</h3>
              <p>Personal projects and QA work</p>
            </div>

            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;