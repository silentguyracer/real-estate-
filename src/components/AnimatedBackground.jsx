import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

// Build frame paths from all three video frame folders in order:
// 1. "first video frames"  → 300 frames (ezgif-frame-001..300)
// 2. "second video frames" → ~100 frames (every 3rd)
// 3. "thired video frame"  → ~47 frames (every 3rd)
const buildFramePaths = () => {
  const frames = [];

  // First video frames (300 images) - use every 3rd frame
  for (let i = 1; i <= 300; i += 3) {
    const num = String(i).padStart(3, '0');
    frames.push(`/REAL_ESTATE_frames/first video frames/ezgif-frame-${num}.jpg`);
  }

  // Second video frames (300 images) - use every 3rd frame
  for (let i = 1; i <= 300; i += 3) {
    const num = String(i).padStart(3, '0');
    frames.push(`/REAL_ESTATE_frames/second video frames/ezgif-frame-${num}.jpg`);
  }

  // Third video frame (141 images) - use every 3rd frame
  for (let i = 1; i <= 141; i += 3) {
    const num = String(i).padStart(3, '0');
    frames.push(`/REAL_ESTATE_frames/thired video frame/ezgif-frame-${num}.jpg`);
  }

  return frames;
};

const ALL_FRAMES = buildFramePaths();
const TOTAL = ALL_FRAMES.length; // ~247 total frames (3x reduction)

/**
 * Optimized AnimatedBackground using a two-slot swap technique.
 * Plays through all 741 frames (3 video sequences) as the user scrolls.
 * Uses preloading for smooth playback.
 */
const AnimatedBackground = () => {
  const slotARef = useRef(null);
  const slotBRef = useRef(null);
  const activeSlotRef = useRef('A');
  const lastFrameRef = useRef(-1);
  const rafRef = useRef(null);
  const preloadCacheRef = useRef(new Set());

  useEffect(() => {
    const slotA = slotARef.current;
    const slotB = slotBRef.current;
    if (!slotA || !slotB) return;

    // Set initial frame immediately
    slotA.src = ALL_FRAMES[0];
    slotA.style.opacity = '1';
    slotB.style.opacity = '0';
    preloadCacheRef.current.add(0);

    // Preload the first ~30 frames eagerly for fast initial scroll
    for (let i = 1; i < Math.min(30, TOTAL); i++) {
      const img = new Image();
      img.src = ALL_FRAMES[i];
      preloadCacheRef.current.add(i);
    }

    const showFrame = (frameIndex) => {
      if (frameIndex === lastFrameRef.current) return;
      lastFrameRef.current = frameIndex;

      const src = ALL_FRAMES[frameIndex];

      // Preload next few frames ahead of current position
      for (let ahead = 1; ahead <= 8; ahead++) {
        const nextIdx = Math.min(TOTAL - 1, frameIndex + ahead);
        if (!preloadCacheRef.current.has(nextIdx)) {
          preloadCacheRef.current.add(nextIdx);
          const preloadImg = new Image();
          preloadImg.src = ALL_FRAMES[nextIdx];
        }
      }

      if (activeSlotRef.current === 'A') {
        slotB.src = src;
        slotB.style.opacity = '1';
        slotA.style.opacity = '0';
        activeSlotRef.current = 'B';
      } else {
        slotA.src = src;
        slotA.style.opacity = '1';
        slotB.style.opacity = '0';
        activeSlotRef.current = 'A';
      }
    };

    const computeFrame = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0
        ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
        : 0;
      const frameIndex = Math.min(TOTAL - 1, Math.floor(progress * TOTAL));
      showFrame(frameIndex);
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(computeFrame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    computeFrame();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="animated-bg-wrapper">
      <div className="frame-layer">
        <img
          ref={slotARef}
          className="bg-frame"
          src=""
          alt=""
          aria-hidden="true"
          style={{ opacity: 1 }}
        />
        <img
          ref={slotBRef}
          className="bg-frame"
          src=""
          alt=""
          aria-hidden="true"
          style={{ opacity: 0 }}
        />
      </div>
      <div className="bg-overlay" />
    </div>
  );
};

export default AnimatedBackground;
