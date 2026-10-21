import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <p className="hero-eyebrow">
            Business Development | Management &amp; Operations | Client Relations
          </p>

          <h1 className="hero-name">Giflin Godshia D.S</h1>

          <p className="hero-headline">
            Building Relationships. Driving Business Growth.
          </p>

          <p className="hero-intro">
            I am an IT graduate with experience in business development and marketing,
            including prospective client outreach, lead follow-ups, market research and
            relationship building. I am interested in opportunities where I can contribute
            to business growth, customer relationships, team coordination and efficient
            operations through communication, organization and problem-solving.
          </p>

          <div className="hero-actions">
            <a
              href="/GIFLIN_GODSHIA_DS.pdf"
              download="Giflin_Godshia_Resume.pdf"
              className="btn btn-primary"
              id="hero-resume-btn"
              aria-label="Download Giflin's resume"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/giflin-godshia-889428258"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="hero-linkedin-btn"
              aria-label="Connect with Giflin on LinkedIn (opens in new tab)"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              id="hero-contact-btn"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="hero-image-wrap">
          <div className="hero-img-frame">
            <img
              src="/pro.jpg"
              alt="Giflin Godshia"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
