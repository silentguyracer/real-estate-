import React from 'react';
import './Amenities.css';

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-content">
        <div className="amenities-header fade-in">
          <h2 className="amenities-title">Wellness & Leisure</h2>
          <p className="amenities-subtitle">A curated collection of amenities designed for restoration and vitality.</p>
        </div>

        <div className="amenities-grid fade-in delay-2">
          {/* Amenity 1 */}
          <div className="amenity-item">
            <div className="amenity-img-wrapper img-placeholder">
              <div className="img-placeholder-inner">
                <div className="img-placeholder-icon">
                  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="9" width="40" height="30" rx="2"/>
                    <circle cx="16" cy="19" r="4"/>
                    <path d="M4 33l10-9 8 8 6-6 16 14"/>
                  </svg>
                </div>
                <span>Thermal Spa</span>
              </div>
            </div>
            <div className="amenity-info">
              <h3>Thermal Spa & Sauna</h3>
              <p>State-of-the-art hydrotherapy pools and traditional wooden saunas.</p>
            </div>
          </div>

          {/* Amenity 2 */}
          <div className="amenity-item offset-item">
            <div className="amenity-img-wrapper img-placeholder">
              <div className="img-placeholder-inner">
                <div className="img-placeholder-icon">
                  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="9" width="40" height="30" rx="2"/>
                    <circle cx="16" cy="19" r="4"/>
                    <path d="M4 33l10-9 8 8 6-6 16 14"/>
                  </svg>
                </div>
                <span>Infinity Pool</span>
              </div>
            </div>
            <div className="amenity-info">
              <h3>25m Infinity Pool</h3>
              <p>Ozone-filtered lap pool seemingly dropping off into the city skyline.</p>
            </div>
          </div>

          {/* Amenity 3 */}
          <div className="amenity-item">
            <div className="amenity-img-wrapper img-placeholder">
              <div className="img-placeholder-inner">
                <div className="img-placeholder-icon">
                  <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="9" width="40" height="30" rx="2"/>
                    <circle cx="16" cy="19" r="4"/>
                    <path d="M4 33l10-9 8 8 6-6 16 14"/>
                  </svg>
                </div>
                <span>Fitness Studio</span>
              </div>
            </div>
            <div className="amenity-info">
              <h3>Private Fitness Studio</h3>
              <p>Equipped with the latest machinery and dedicated spaces for yoga.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
