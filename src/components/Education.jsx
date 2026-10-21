import React from 'react';

const certifications = [
  'Cambridge Business English (BEC Vantage B2)',
  'Business Analysis Foundations',
  'Digital Marketing Foundations',
];

const Education = () => (
  <section id="education" aria-labelledby="education-title">
    <div className="container">
      <div className="section-header">
        <p className="section-eyebrow">Qualifications</p>
        <h2 className="section-title" id="education-title">
          Education &amp; Certifications
        </h2>
      </div>

      <div className="credentials-grid">
        <article className="edu-card">
          <h3 className="subsection-title">Education</h3>
          <h4 className="edu-degree">B.Tech Information Technology</h4>
          <p className="edu-school">St Joseph’s Institute of Technology</p>
          <div className="edu-meta">
            <span>2022–2026</span>
            <span>CGPA: 8.02</span>
            <span>Chennai, India</span>
          </div>
        </article>

        <article className="cert-card">
          <h3 className="subsection-title">Certifications</h3>
          <ul className="cert-list">
            {certifications.map(certification => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </article>
      </div>

    </div>
  </section>
);

export default Education;
