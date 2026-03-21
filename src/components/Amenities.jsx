import React from 'react';
import './Amenities.css';

// Shared placeholder used by each amenity card
const PlaceholderImg = ({ label }) => (
  <div className="amenity-img-wrapper img-placeholder">
    <div className="img-placeholder-inner">
      <div className="img-placeholder-icon">
        <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="9" width="40" height="30" rx="2"/>
          <circle cx="16" cy="19" r="4"/>
          <path d="M4 33l10-9 8 8 6-6 16 14"/>
        </svg>
      </div>
      <span>{label}</span>
    </div>
  </div>
);

const AMENITY_DATA = [
  {
    label: 'Thermal Spa',
    title: 'Thermal Spa & Sauna',
    description: 'State-of-the-art hydrotherapy pools and traditional wooden saunas.',
    offset: false,
  },
  {
    label: 'Infinity Pool',
    title: '25m Infinity Pool',
    description: 'Ozone-filtered lap pool seemingly dropping off into the city skyline.',
    offset: true,
  },
  {
    label: 'Fitness Studio',
    title: 'Private Fitness Studio',
    description: 'Equipped with the latest machinery and dedicated spaces for yoga.',
    offset: false,
  },
];

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-content">
        <div className="amenities-header fade-in">
          <h2 className="amenities-title">Wellness &amp; Leisure</h2>
          <p className="amenities-subtitle">A curated collection of amenities designed for restoration and vitality.</p>
        </div>

        <div className="amenities-grid fade-in delay-2">
          {AMENITY_DATA.map(({ label, title, description, offset }) => (
            <div key={label} className={`amenity-item${offset ? ' offset-item' : ''}`}>
              <PlaceholderImg label={label} />
              <div className="amenity-info">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
