import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background" ref={heroRef}>
        {/* AnimatedBackground now lives at App level so removed from here */}
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-subtitle">
            Exclusive residence with a rich<br/>
            wellness infrastructure next to Nature<br/>
            Park
          </div>

          <h1 className="hero-title">
            <span className="title-word fade-in">Splendor</span>
            <br />
            <span className="title-word offset fade-in">of Renewal</span>
          </h1>
        </div>

        <div className="hero-bottom-left">
          <button className="scroll-down-btn">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="11" />
              <path d="M12 7v10M8 13l4 4 4-4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
