import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const FRAME_FILES = [
  'frame_008.jpg','frame_009.jpg','frame_010.jpg','frame_012.jpg','frame_013.jpg',
  'frame_014.jpg','frame_015.jpg','frame_016.jpg','frame_017.jpg','frame_018.jpg',
  'frame_019.jpg','frame_020.jpg','frame_021.jpg','frame_022.jpg','frame_024.jpg',
  'frame_025.jpg','frame_026.jpg','frame_028.jpg','frame_029.jpg','frame_030.jpg',
  'frame_031.jpg','frame_032.jpg','frame_033.jpg','frame_034.jpg','frame_035.jpg',
  'frame_036.jpg','frame_039.jpg','frame_040.jpg','frame_041.jpg','frame_049.jpg',
  'frame_052.jpg','frame_053.jpg','frame_056.jpg','frame_057.jpg','frame_058.jpg',
  'frame_060.jpg','frame_061.jpg','frame_064.jpg','frame_065.jpg','frame_066.jpg',
  'frame_068.jpg','frame_069.jpg','frame_070.jpg','frame_071.jpg','frame_073.jpg',
  'frame_074.jpg','frame_075.jpg','frame_078.jpg','frame_079.jpg','frame_080.jpg',
];

const AnimatedBackground = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let progress = 0;
      if (maxScroll > 0) {
        progress = window.scrollY / maxScroll;
      }
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Map progress to the nearest frame index
      const frameIndex = Math.min(
        FRAME_FILES.length - 1,
        Math.floor(progress * FRAME_FILES.length)
      );
      setCurrentFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="animated-bg-wrapper">
      <div className="frame-layer">
        {FRAME_FILES.map((file, idx) => (
          <img
            key={file}
            src={`/REAL_ESTATE_frames/${file}`}
            className="bg-frame"
            style={{ opacity: idx === currentFrame ? 1 : 0 }}
            alt=""
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="bg-overlay" />
    </div>
  );
};

export default AnimatedBackground;
