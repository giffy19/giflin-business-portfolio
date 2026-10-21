import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 780) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setMenuOpen(false);

  const navLinks = [
    { href: '#home',       label: 'Home' },
    { href: '#about',      label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills',     label: 'Skills' },
    { href: '#education',  label: 'Education' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact',    label: 'Contact' },
  ];

  return (
    <>
      <a href="#home" className="skip-link">Skip to main content</a>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-brand" onClick={close}>
            Giflin <span>D.S</span>
          </a>

          <ul className="nav-links" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>

          <button
            className="nav-hamburger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </nav>

      <nav
        id="mobile-menu"
        className={`nav-mobile${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;