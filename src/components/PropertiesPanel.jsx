import React from 'react';
import './PropertiesPanel.css';

const propertyData = [
  {
    id: 1,
    title: 'The Sky Penthouse',
    specs: '4 Beds • 5 Baths • 4,200 sqft',
    price: 'Starting from $8.5M',
  },
  {
    id: 2,
    title: 'Garden Duplex',
    specs: '3 Beds • 3.5 Baths • 2,800 sqft',
    price: 'Starting from $4.2M',
  },
  {
    id: 3,
    title: 'Terrace Suite',
    specs: '2 Beds • 2.5 Baths • 1,900 sqft',
    price: 'Starting from $2.8M',
  },
  {
    id: 4,
    title: 'Courtyard Villa',
    specs: '5 Beds • 6 Baths • 6,500 sqft',
    price: 'Price upon request',
  }
];

const PropertiesPanel = () => {
  return (
    <section className="properties-section" id="residences">
      <div className="properties-header fade-in">
        <h2 className="properties-title">Available Residences</h2>
        <p className="properties-subtitle">Explore our collection of meticulously designed homes.</p>
      </div>
      
      <div className="properties-grid fade-in delay-2">
        {propertyData.map(prop => (
          <div key={prop.id} className="property-card">
            <div className="property-img-wrapper img-placeholder">
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
            <div className="property-info">
              <h3 className="property-name">{prop.title}</h3>
              <div className="property-specs">{prop.specs}</div>
              <div className="property-price">{prop.price}</div>
              <button className="property-btn">VIEW DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertiesPanel;
