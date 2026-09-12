"use client";

import ScrollReveal from "./ScrollReveal";

export function Education() {
  return (
    <section
      id="education"
      className="education-section editorial-section"
    >
      {/* TOP EDITORIAL HEADER */}
      <div className="education-header">
        <ScrollReveal variant="slide-up">
          <span className="education-index">
            07 / EDUCATION
          </span>
        </ScrollReveal>

        <ScrollReveal variant="slide-left">
          <span className="education-header-label">
            ACADEMIC BACKGROUND
          </span>
        </ScrollReveal>
      </div>

      {/* LARGE YEAR */}
      <div className="education-hero">

        <ScrollReveal variant="text">
          <div className="education-year-large">
            2017
            <span>—</span>
            2020
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={150}>
          <div className="education-period">
            THREE YEARS OF
            <br />
            COMPUTER SCIENCE
          </div>
        </ScrollReveal>

      </div>

      {/* MAIN EDUCATION CONTENT */}
      <div className="education-content">

        {/* LEFT */}
        <div className="education-side">

          <ScrollReveal variant="slide-right">
            <span className="education-small-label">
              DEGREE
            </span>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" delay={100}>
            <div className="education-degree-small">
              B.SC.
            </div>
          </ScrollReveal>

        </div>

        {/* CENTER — DOMINANT TYPOGRAPHY */}
        <div className="education-main">

          <ScrollReveal variant="slide-up" delay={150}>
            <h2 className="education-degree">
              COMPUTER
              <br />
              SCIENCE
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={300}>
            <div className="education-university">
              <span>BHARATHIDASAN UNIVERSITY</span>
              <span>TRICHY</span>
            </div>
          </ScrollReveal>

        </div>

        {/* RIGHT */}
        <div className="education-result">

          <ScrollReveal variant="scale" delay={400}>
            <div className="education-result-number">
              01
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-left" delay={450}>
            <div className="education-result-text">
              FIRST
              <br />
              CLASS
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* BOTTOM EDITORIAL LINE */}
      <ScrollReveal variant="scale" delay={500}>
        <div className="education-bottom">

          <span>
            COMPUTER SCIENCE
          </span>

          <span>
            2017 — 2020
          </span>

          <span>
            BHARATHIDASAN UNIVERSITY
          </span>

        </div>
      </ScrollReveal>

    </section>
  );
}