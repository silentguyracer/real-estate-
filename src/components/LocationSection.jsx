import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <section className="location-section" id="location">
      <div className="location-left">
        <div className="img-placeholder location-img-placeholder">
          <div className="img-placeholder-inner">
            <div className="img-placeholder-icon">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="9" width="40" height="30" rx="2"/>
                <circle cx="16" cy="19" r="4"/>
                <path d="M4 33l10-9 8 8 6-6 16 14"/>
              </svg>
            </div>
            <span>Place Image Here</span>
          </div>
        </div>
      </div>
      <div className="location-right">
        <div className="location-right-content fade-in">
          <div className="location-image-box img-placeholder">
            <div className="img-placeholder-inner">
              <div className="img-placeholder-icon">
                <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="9" width="40" height="30" rx="2"/>
                  <circle cx="16" cy="19" r="4"/>
                  <path d="M4 33l10-9 8 8 6-6 16 14"/>
                </svg>
              </div>
              <span>Place Image Here</span>
            </div>
          </div>
          <div className="location-text-box">
            <div className="location-number">16</div>
            <div className="location-desc">
              MINUTES BY CAR<br/>
              TO THE MIBC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
