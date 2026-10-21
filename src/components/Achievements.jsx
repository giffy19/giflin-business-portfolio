import React from 'react';

const achievementPhotos = [
  { src: '/pr1.jpg', alt: 'Giflin receiving a prize at a college competition' },
  { src: '/pp4.jpg', alt: 'Giflin receiving first place recognition at Sairam Institute' },
  { src: '/pr7.jpg', alt: 'Giflin receiving a prize at a national-level hackathon' },
  { src: '/pr4.jpg', alt: 'Giflin on stage at St Joseph’s Institute of Technology' },
];

const Achievements = () => (
  <section id="achievements" aria-labelledby="achievements-title">
    <div className="container">
      <div className="section-header">
        <p className="section-eyebrow">Recognition</p>
        <h2 className="section-title" id="achievements-title">Achievements</h2>
        <p className="section-subtitle">A few moments from competitions and college events.</p>
      </div>

      <div className="achievement-viewport" aria-label="Achievement photographs">
        <div className="achievement-track">
          {[false, true].map(duplicate => (
            <div
              className="achievement-sequence"
              key={duplicate ? 'duplicate' : 'original'}
              aria-hidden={duplicate}
            >
              {achievementPhotos.map(photo => (
                <img
                  className="achievement-photo"
                  key={photo.src}
                  src={photo.src}
                  alt={duplicate ? '' : photo.alt}
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
