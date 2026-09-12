"use client";

import ScrollReveal from "./ScrollReveal";

const certifications = [
  {
    number: "01",
    title: "Google Cloud Gen AI Academy",
    meta: "SCALABLE AI SOLUTIONS",
    detail: "ID: 2026H2S04GCGENAIAPACC1-P00705",
  },
  {
    number: "02",
    title: "DPDPA 2023",
    meta: "DATA GOVERNANCE EXPERT",
    detail: "99% SCORE",
  },
  {
    number: "03",
    title: "IBM — Data Analysis with Python & Big Data",
    meta: "PYTHON · BIG DATA",
    detail: "HADOOP / HIVE",
  },
  {
    number: "04",
    title: "TATA — GenAI Powered Data Analytics",
    meta: "GENAI · DATA ANALYTICS",
    detail: "DATA ANALYTICS",
  },
  {
    number: "05",
    title: "MathWorks — MATLAB & Simulink Onramp",
    meta: "TECHNICAL COMPUTING",
    detail: "MODEL-BASED DESIGN",
  },
  {
    number: "06",
    title: "Google Data Analytics / GA4",
    meta: "DATA ANALYTICS",
    detail: "92% SCORE",
  },
  {
    number: "07",
    title: "Deloitte & BCGX Simulations",
    meta: "DATA SCIENCE",
    detail: "FORENSIC TECH",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section editorial-section"
    >
      {/* SECTION HEADER */}
      <div className="certifications-header">
        <ScrollReveal variant="slide-up">
          <div className="certifications-index">
            06 / CERTIFICATIONS
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-left">
          <div className="certifications-label">
            SELECTED CREDENTIALS
          </div>
        </ScrollReveal>
      </div>

      {/* MAIN HEADING */}
      <div className="certifications-title-wrap">
        <ScrollReveal variant="text">
          <h2 className="certifications-title">
            CERTIFICATIONS
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={150}>
          <p className="certifications-intro">
            A curated archive of credentials across data analytics,
            artificial intelligence, governance and technical computing.
          </p>
        </ScrollReveal>
      </div>

      {/* CERTIFICATION ARCHIVE */}
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <ScrollReveal
            key={cert.number}
            variant={index % 2 === 0 ? "slide-up" : "slide-left"}
            delay={index * 60}
          >
            <article className="certification-row">
              
              <div className="certification-number">
                {cert.number}
              </div>

              <div className="certification-main">
                <h3 className="certification-name">
                  {cert.title}
                </h3>

                <div className="certification-meta">
                  {cert.meta}
                </div>
              </div>

              <div className="certification-detail">
                {cert.detail}
                <span className="certification-arrow">
                  ↗
                </span>
              </div>

            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* RESUME */}
      <ScrollReveal variant="scale" delay={200}>
        <div className="certifications-resume">
          <a
            href="https://drive.google.com/file/d/11zxhKEQSKtRaNMpgNrGuDoByte6IJF_6/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-resume-link"
          >
            <span>DOWNLOAD RESUME</span>
            <span>↓</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}