import React from 'react';
import './TerracesSection.css';

const TerracesSection = () => {
  return (
    <section className="terraces-section">
      <div className="terraces-left">
        <div className="img-placeholder terraces-img-placeholder">
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
      <div className="terraces-right">
        <div className="terraces-textContent fade-in">
          <p>
            Landscaped terraces with topiary trees, framed<br/>
            with glass, create the atmosphere<br/>
            of a miniature park floating above the City.
          </p>
          <div className="terraces-arrows">
            <button className="arrow-btn">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="11" />
                <path d="M12 8l-4 4 4 4M16 12H8" />
              </svg>
            </button>
            <button className="arrow-btn">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="11" />
                <path d="M12 8l4 4-4 4M8 12h8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerracesSection;
