import React from 'react';

const skillGroups = [
  {
    id: 'biz-dev',
    title: 'Business Development',
    skills: [
      'Lead Generation',
      'Market Research',
      'Client Outreach',
      'Follow-up Coordination',
      'Relationship Building',
    ],
  },
  {
    id: 'client-comms',
    title: 'Client Relations & Communication',
    skills: [
      'Client Communication',
      'Active Listening',
      'Professional Email Etiquette',
      'Query Resolution',
      'Team Collaboration',
    ],
  },
  {
    id: 'management-operations',
    title: 'Management & Operations',
    skills: [
      'Organization',
      'Task Coordination',
      'Problem-Solving',
      'Adaptability',
      'Documentation',
    ],
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis & Tools',
    skills: [
      'Excel',
      'Business Analysis Fundamentals',
      'Data Organization',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills" aria-label="Skills and competencies">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Competencies</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div
              key={group.id}
              className="skill-group"
              aria-label={group.title}
            >
              <div className="skill-group-header">
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <div className="skill-tags" role="list" aria-label={`${group.title} skills`}>
                {group.skills.map(s => (
                  <span key={s} className="skill-tag" role="listitem">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;