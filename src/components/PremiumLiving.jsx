import React, { useState } from 'react';
import './PremiumLiving.css';

const PREMIUM_IMAGES = [
  { src: '/premium-living.png', alt: 'Premium luxury apartment with unrivaled views' },
  { src: '/premium-living-2.png', alt: 'Luxurious modern apartment interior' },
  { src: '/premium-living-3.png', alt: 'Stunning rooftop terrace with pool' },
  { src: '/premium-living-4.png', alt: 'Elegant lobby entrance' },
  { src: '/premium-living-5.png', alt: 'Aerial view of residential complex' },
];

const PremiumLiving = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PREMIUM_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === PREMIUM_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="premium-living-section" id="about">
      <div className="premium-content">
        <div className="premium-text-left">
          <h2 className="premium-title fade-in">
            Premium Living<br/>
            with Unrivaled<br/>
            Views
          </h2>
          <div className="premium-subtitle fade-in">
            APARTMENTS, TERRACED TOWNHOUSES,<br/>
            AND DUPLEX PENTHOUSES IN A QUIET,<br/>
            GREEN NEIGHBORHOOD.
          </div>
        </div>

        <div className="premium-image-right fade-in">
          <div className="premium-image-container">
            {/* Image Carousel */}
            <div className="premium-carousel">
              {PREMIUM_IMAGES.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`premium-image ${index === activeIndex ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>

          {/* Dot Buttons */}
          <div className="carousel-dots">
            {PREMIUM_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumLiving;
