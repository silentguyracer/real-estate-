import React from 'react';
import './NatureSection.css';

const NatureSection = () => {
  return (
    <section className="nature-section" id="gallery">
      <div className="nature-bg nature-bg-placeholder">
        <div className="nature-bg-img-placeholder">
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
        <div className="nature-overlay"></div>
      </div>

      <div className="nature-content">
        <div className="nature-text-left">
          <h2 className="nature-title fade-in">Nature</h2>
          <div className="nature-subtitle fade-in delay-2">LIGHTNESS OF BREATHING</div>
        </div>

        <div className="nature-text-right fade-in delay-3">
          <p>
            Here, nature merges with architecture and<br/>
            becomes an integral part of your home. Nature<br/>
            takes the spotlight, embodied in the painterly<br/>
            curves of our gardens and the green silhouettes<br/>
            of the façade terraces. Nature becomes your<br/>
            companion on meditative walks and at family<br/>
            gatherings, providing a soothing backdrop.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;
