"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section editorial-section"
    >
      {/* TOP LABEL */}
      <div className="contact-header">
        <ScrollReveal variant="slide-up">
          <div className="contact-index">
            08 / CONTACT
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-left">
          <div className="contact-status">
            OPEN TO OPPORTUNITIES
          </div>
        </ScrollReveal>
      </div>

      {/* MAIN MESSAGE */}
      <div className="contact-main">

        <ScrollReveal variant="text">
          <div className="contact-kicker">
            DATA × AI × TECHNOLOGY
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={100}>
          <h2 className="contact-title">
            <span>LET'S</span>
            <span>BUILD</span>
            <span>WHAT'S</span>
            <span>NEXT.</span>
          </h2>
        </ScrollReveal>

      </div>

      {/* IDENTITY */}
      <ScrollReveal variant="fade" delay={250}>
        <div className="contact-identity">

          <div className="contact-person">
            <div className="contact-name">
              GAUTAM THIRUVALLUVAN
            </div>

            <div className="contact-role">
              DATA ANALYST — GENAI ARCHITECT
            </div>
          </div>

          <div className="contact-availability">
            AVAILABLE FOR SELECTED OPPORTUNITIES
          </div>

        </div>
      </ScrollReveal>

      {/* CONTACT LINKS */}
      <div className="contact-links-wrapper">

        <ScrollReveal variant="slide-up" delay={300}>
          <a
            href="mailto:gowthamv21999@gmail.com"
            className="contact-link-row"
          >
            <span className="contact-link-number">
              01
            </span>

            <span className="contact-link-name">
              EMAIL
            </span>

            <span className="contact-link-value">
              gowthamv21999@gmail.com
            </span>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>
        </ScrollReveal>


        <ScrollReveal variant="slide-up" delay={380}>
          <a
            href="https://www.linkedin.com/in/gautam-thiruvalluvan-a2a2941b7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-row"
          >
            <span className="contact-link-number">
              02
            </span>

            <span className="contact-link-name">
              LINKEDIN
            </span>

            <span className="contact-link-value">
              /gautam-thiruvalluvan
            </span>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>
        </ScrollReveal>


        <ScrollReveal variant="slide-up" delay={460}>
          <a
            href="https://github.com/Gautamgt1999"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-row"
          >
            <span className="contact-link-number">
              03
            </span>

            <span className="contact-link-name">
              GITHUB
            </span>

            <span className="contact-link-value">
              /Gautamgt1999
            </span>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>
        </ScrollReveal>


        <ScrollReveal variant="slide-up" delay={540}>
          <a
            href="https://medium.com/@gowthamv21999"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-row"
          >
            <span className="contact-link-number">
              04
            </span>

            <span className="contact-link-name">
              MEDIUM
            </span>

            <span className="contact-link-value">
              @gowthamv21999
            </span>

            <span className="contact-link-arrow">
              ↗
            </span>
          </a>
        </ScrollReveal>

      </div>

      {/* RESUME BUTTON */}
      <ScrollReveal variant="scale" delay={650}>
        <div className="contact-resume-wrapper">

          <a
            href="https://drive.google.com/file/d/11zxhKEQSKtRaNMpgNrGuDoByte6IJF_6/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-resume"
          >
            <span>DOWNLOAD CV</span>
            <span>↓</span>
          </a>

        </div>
      </ScrollReveal>

      {/* FOOTER */}
      <ScrollReveal variant="fade" delay={750}>
        <div className="contact-footer">

          <span>
            GAUTAM THIRUVALLUVAN
          </span>

          <a href="#hero">
            BACK TO TOP ↑
          </a>

          <span>
            © 2026
          </span>

        </div>
      </ScrollReveal>

    </section>
  );
}