import React, { useState } from 'react';
import './PropertiesPanel.css';

// Use a curated selection of frames as property images
const propertyData = [
  {
    id: 1,
    title: 'The Sky Penthouse',
    specs: '4 Beds • 5 Baths • 4,200 sqft',
    price: 'Starting from $8.5M',
    image: '/REAL_ESTATE_frames/frame_096.jpg',
    tag: 'FEATURED',
  },
  {
    id: 2,
    title: 'Garden Duplex',
    specs: '3 Beds • 3.5 Baths • 2,800 sqft',
    price: 'Starting from $4.2M',
    image: '/REAL_ESTATE_frames/frame_136.jpg',
    tag: 'NEW',
  },
  {
    id: 3,
    title: 'Terrace Suite',
    specs: '2 Beds • 2.5 Baths • 1,900 sqft',
    price: 'Starting from $2.8M',
    image: '/REAL_ESTATE_frames/frame_049.jpg',
    tag: null,
  },
  {
    id: 4,
    title: 'Courtyard Villa',
    specs: '5 Beds • 6 Baths • 6,500 sqft',
    price: 'Price upon request',
    image: '/REAL_ESTATE_frames/frame_021.jpg',
    tag: 'EXCLUSIVE',
  },
  {
    id: 5,
    title: 'Forest Edge Residency',
    specs: '3 Beds • 4 Baths • 3,100 sqft',
    price: 'Starting from $5.1M',
    image: '/REAL_ESTATE_frames/frame_085.jpg',
    tag: null,
  },
  {
    id: 6,
    title: 'The Grand Loft',
    specs: '2 Beds • 2 Baths • 2,400 sqft',
    price: 'Starting from $3.4M',
    image: '/REAL_ESTATE_frames/frame_070.jpg',
    tag: 'NEW',
  },
  {
    id: 7,
    title: 'Horizon Manor',
    specs: '6 Beds • 7 Baths • 8,200 sqft',
    price: 'Price upon request',
    image: '/REAL_ESTATE_frames/frame_097.jpg',
    tag: 'ULTRA LUXURY',
  },
  {
    id: 8,
    title: 'Verdant Retreat',
    specs: '4 Beds • 4.5 Baths • 4,800 sqft',
    price: 'Starting from $6.7M',
    image: '/REAL_ESTATE_frames/frame_040.jpg',
    tag: null,
  },
  {
    id: 9,
    title: 'Canopy Corner Suite',
    specs: '1 Bed • 2 Baths • 1,200 sqft',
    price: 'Starting from $1.9M',
    image: '/REAL_ESTATE_frames/frame_147.jpg',
    tag: null,
  },
  {
    id: 10,
    title: 'Pavilion Residence',
    specs: '3 Beds • 3 Baths • 3,500 sqft',
    price: 'Starting from $4.9M',
    image: '/REAL_ESTATE_frames/frame_164.jpg',
    tag: 'FEATURED',
  },
  {
    id: 11,
    title: 'Skyline Panorama',
    specs: '5 Beds • 5.5 Baths • 5,600 sqft',
    price: 'Starting from $7.8M',
    image: '/REAL_ESTATE_frames/frame_098.jpg',
    tag: 'EXCLUSIVE',
  },
  {
    id: 12,
    title: 'Meadow Crest',
    specs: '4 Beds • 4 Baths • 4,100 sqft',
    price: 'Starting from $5.5M',
    image: '/REAL_ESTATE_frames/frame_139.jpg',
    tag: null,
  },
  {
    id: 13,
    title: 'The Botanica',
    specs: '2 Beds • 3 Baths • 2,100 sqft',
    price: 'Starting from $3.1M',
    image: '/REAL_ESTATE_frames/frame_075.jpg',
    tag: 'NEW',
  },
  {
    id: 14,
    title: 'Summit Estate',
    specs: '7 Beds • 8 Baths • 10,000 sqft',
    price: 'Price upon request',
    image: '/REAL_ESTATE_frames/frame_022.jpg',
    tag: 'ULTRA LUXURY',
  },
];

const PropertiesPanel = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filters = ['ALL', 'FEATURED', 'NEW', 'EXCLUSIVE', 'ULTRA LUXURY'];

  const filtered = activeFilter === 'ALL'
    ? propertyData
    : propertyData.filter(p => p.tag === activeFilter);

  return (
    <section className="properties-section" id="residences">
      <div className="properties-header fade-in">
        <span className="properties-eyebrow">OUR COLLECTION</span>
        <h2 className="properties-title">Available Residences</h2>
        <p className="properties-subtitle">Explore our collection of meticulously designed homes.</p>
      </div>

      {/* Filter bar */}
      <div className="properties-filters fade-in delay-1">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="properties-grid fade-in delay-2">
        {filtered.map(prop => (
          <div key={prop.id} className="property-card">
            <div className="property-img-wrapper">
              {prop.tag && <span className="property-tag">{prop.tag}</span>}
              <img
                src={prop.image}
                alt={prop.title}
                className="property-img"
                loading="lazy"
              />
              <div className="property-img-overlay" />
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
