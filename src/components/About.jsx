import React from 'react';

const About = () => {
  const details = [
    {
      label: 'Education',
      value: 'B.Tech Information Technology',
    },
    {
      label: 'CGPA',
      value: '8.02',
    },
    {
      label: 'Location',
      value: 'Chennai, India',
    },
  ];

  return (
    <section id="about" className="about" aria-label="About Giflin">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-simple">
          <p className="about-para">
            My business development and marketing exposure includes client communication and
            follow-ups, relationship building, market research and lead generation. I value
            organization and practical problem-solving, and I am interested in contributing to
            business operations and customer relations.
          </p>

          <div className="about-info-row">
            {details.map(({ label, value }) => (
              <div key={label} className="about-info-item">
                <div>
                  <span className="detail-label">{label}</span>
                  <span className="detail-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;