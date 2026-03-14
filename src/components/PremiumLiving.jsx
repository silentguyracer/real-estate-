import React from 'react';
import './PremiumLiving.css';

const PremiumLiving = () => {
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
          <div className="premium-image-container img-placeholder">
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
      </div>
    </section>
  );
};

export default PremiumLiving;
