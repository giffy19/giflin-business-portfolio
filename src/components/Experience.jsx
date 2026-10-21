import React from 'react';

const experiences = [
  {
    id: 'movidu',
    company: 'Movidu Technologies',
    role: 'Business Development & Marketing Intern',
    period: 'Internship',
    bullets: [
      'Conducted prospective client outreach and follow-ups.',
      'Supported market research and lead generation.',
      'Contributed to relationship building and strategic partnership efforts.',
    ],
  },
  {
    id: 'alpha-ori',
    company: 'Alpha Ori Technologies / ZeroNorth',
    role: 'Intern',
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      'Worked collaboratively with colleagues across teams.',
      'Contributed to discussions about user needs and product requirements.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience" aria-label="Professional experience">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Career Path</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map(exp => (
            <article key={exp.id} className="exp-card" aria-label={`${exp.company} — ${exp.role}`}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-role">{exp.role}</span>
                </div>
                <span className="exp-period">
                  {exp.period}
                </span>
              </div>

              <ul className="exp-bullets" aria-label="Responsibilities">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;