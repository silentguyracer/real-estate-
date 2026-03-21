import React, { useState, useCallback } from 'react';
import './Gallery.css';

// All gallery images from REAL_ESTATE_frames — using frames not used in properties
const GALLERY_IMAGES = [
  { src: '/REAL_ESTATE_frames/frame_008.jpg',  caption: 'Exterior Architecture' },
  { src: '/REAL_ESTATE_frames/frame_009.jpg',  caption: 'Morning Light' },
  { src: '/REAL_ESTATE_frames/frame_010.jpg',  caption: 'Garden Pathway' },
  { src: '/REAL_ESTATE_frames/frame_012.jpg',  caption: 'Entrance Hall' },
  { src: '/REAL_ESTATE_frames/frame_013.jpg',  caption: 'Living Spaces' },
  { src: '/REAL_ESTATE_frames/frame_014.jpg',  caption: 'Rooftop Terrace' },
  { src: '/REAL_ESTATE_frames/frame_015.jpg',  caption: 'Forest Canopy Views' },
  { src: '/REAL_ESTATE_frames/frame_016.jpg',  caption: 'Private Pool' },
  { src: '/REAL_ESTATE_frames/frame_017.jpg',  caption: 'Master Suite' },
  { src: '/REAL_ESTATE_frames/frame_018.jpg',  caption: 'Kitchen & Dining' },
  { src: '/REAL_ESTATE_frames/frame_019.jpg',  caption: 'Study Room' },
  { src: '/REAL_ESTATE_frames/frame_020.jpg',  caption: 'Home Theater' },
  { src: '/REAL_ESTATE_frames/frame_024.jpg',  caption: 'Spa & Wellness' },
  { src: '/REAL_ESTATE_frames/frame_025.jpg',  caption: 'Outdoor Lounge' },
  { src: '/REAL_ESTATE_frames/frame_026.jpg',  caption: 'Sunset Facade' },
  { src: '/REAL_ESTATE_frames/frame_028.jpg',  caption: 'Night Ambiance' },
  { src: '/REAL_ESTATE_frames/frame_029.jpg',  caption: 'Courtyard Garden' },
  { src: '/REAL_ESTATE_frames/frame_030.jpg',  caption: 'Open Plan Living' },
  { src: '/REAL_ESTATE_frames/frame_031.jpg',  caption: 'Minimalist Interior' },
  { src: '/REAL_ESTATE_frames/frame_032.jpg',  caption: 'Balcony Panorama' },
  { src: '/REAL_ESTATE_frames/frame_033.jpg',  caption: 'Sculptural Staircase' },
  { src: '/REAL_ESTATE_frames/frame_034.jpg',  caption: 'Premium Materials' },
  { src: '/REAL_ESTATE_frames/frame_035.jpg',  caption: 'Bespoke Finishes' },
  { src: '/REAL_ESTATE_frames/frame_036.jpg',  caption: 'Landscape Design' },
  { src: '/REAL_ESTATE_frames/frame_039.jpg',  caption: 'Water Feature' },
  { src: '/REAL_ESTATE_frames/frame_041.jpg',  caption: 'Fireplace Lounge' },
  { src: '/REAL_ESTATE_frames/frame_052.jpg',  caption: 'Yoga Pavilion' },
  { src: '/REAL_ESTATE_frames/frame_053.jpg',  caption: 'Reading Nook' },
  { src: '/REAL_ESTATE_frames/frame_056.jpg',  caption: 'Children\'s Garden' },
  { src: '/REAL_ESTATE_frames/frame_057.jpg',  caption: 'Gym & Fitness' },
  { src: '/REAL_ESTATE_frames/frame_058.jpg',  caption: 'Wine Cellar' },
  { src: '/REAL_ESTATE_frames/frame_060.jpg',  caption: 'Chef\'s Kitchen' },
  { src: '/REAL_ESTATE_frames/frame_061.jpg',  caption: 'Rooftop Garden' },
  { src: '/REAL_ESTATE_frames/frame_064.jpg',  caption: 'Penthouse Views' },
  { src: '/REAL_ESTATE_frames/frame_065.jpg',  caption: 'Private Elevator' },
  { src: '/REAL_ESTATE_frames/frame_066.jpg',  caption: 'Concierge Lobby' },
  { src: '/REAL_ESTATE_frames/frame_068.jpg',  caption: 'Moonlit Terrace' },
  { src: '/REAL_ESTATE_frames/frame_069.jpg',  caption: 'Dawn Silhouette' },
  { src: '/REAL_ESTATE_frames/frame_071.jpg',  caption: 'Urban Skyline' },
  { src: '/REAL_ESTATE_frames/frame_073.jpg',  caption: 'Estate Grounds' },
  { src: '/REAL_ESTATE_frames/frame_074.jpg',  caption: 'Cascading Levels' },
  { src: '/REAL_ESTATE_frames/frame_078.jpg',  caption: 'Community Gardens' },
  { src: '/REAL_ESTATE_frames/frame_079.jpg',  caption: 'Evening Glow' },
  { src: '/REAL_ESTATE_frames/frame_080.jpg',  caption: 'Tropical Lush' },
  { src: '/REAL_ESTATE_frames/frame_081.jpg',  caption: 'Stone Walkways' },
  { src: '/REAL_ESTATE_frames/frame_082.jpg',  caption: 'Heritage Oak' },
  { src: '/REAL_ESTATE_frames/frame_084.jpg',  caption: 'Sunrise Views' },
  { src: '/REAL_ESTATE_frames/frame_086.jpg',  caption: 'Premium Lobby' },
  { src: '/REAL_ESTATE_frames/frame_088.jpg',  caption: 'Sculptural Forms' },
  { src: '/REAL_ESTATE_frames/frame_089.jpg',  caption: 'Infinity Edge Pool' },
  { src: '/REAL_ESTATE_frames/frame_090.jpg',  caption: 'Private Sanctuary' },
  { src: '/REAL_ESTATE_frames/frame_092.jpg',  caption: 'Nature Integration' },
  { src: '/REAL_ESTATE_frames/frame_094.jpg',  caption: 'Cascading Terraces' },
  { src: '/REAL_ESTATE_frames/frame_095.jpg',  caption: 'Golden Hour' },
  { src: '/REAL_ESTATE_frames/frame_099.jpg',  caption: 'Breathtaking Views' },
  { src: '/REAL_ESTATE_frames/frame_100.jpg',  caption: 'Grand Hall' },
  { src: '/REAL_ESTATE_frames/frame_101.jpg',  caption: 'Artisan Details' },
  { src: '/REAL_ESTATE_frames/frame_102.jpg',  caption: 'Spa Retreat' },
  { src: '/REAL_ESTATE_frames/frame_103.jpg',  caption: 'Meditation Garden' },
  { src: '/REAL_ESTATE_frames/frame_104.jpg',  caption: 'Library Hall' },
];

const PAGE_SIZE = 12;

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index or null
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(GALLERY_IMAGES.length / PAGE_SIZE);
  const visible = GALLERY_IMAGES.slice(0, page * PAGE_SIZE);

  const openLightbox = useCallback((idx) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImg = useCallback(() => setLightbox(i => (i > 0 ? i - 1 : GALLERY_IMAGES.length - 1)), []);
  const nextImg = useCallback(() => setLightbox(i => (i < GALLERY_IMAGES.length - 1 ? i + 1 : 0)), []);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'ArrowLeft') prevImg();
    if (e.key === 'ArrowRight') nextImg();
    if (e.key === 'Escape') closeLightbox();
  }, [lightbox, prevImg, nextImg, closeLightbox]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header fade-in">
        <span className="gallery-eyebrow">VISUAL STORIES</span>
        <h2 className="gallery-title">Photo Gallery</h2>
        <p className="gallery-subtitle">Immerse yourself in the beauty of Springs Estate.</p>
      </div>

      <div className="gallery-grid fade-in delay-2">
        {visible.map((img, idx) => (
          <button
            key={img.src}
            className="gallery-item"
            onClick={() => openLightbox(idx)}
            aria-label={`View ${img.caption}`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="gallery-img"
              loading="lazy"
            />
            <div className="gallery-item-overlay">
              <span className="gallery-item-caption">{img.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {page < totalPages && (
        <div className="gallery-load-more fade-in">
          <button className="gallery-load-btn" onClick={() => setPage(p => p + 1)}>
            LOAD MORE
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&#x2715;</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prevImg(); }} aria-label="Previous">&#8592;</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].caption}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{GALLERY_IMAGES[lightbox].caption}</p>
            <span className="lightbox-counter">{lightbox + 1} / {GALLERY_IMAGES.length}</span>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); nextImg(); }} aria-label="Next">&#8594;</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
