import React from 'react';
import './Architecture.css';

const Architecture = () => {
  return (
    <section className="architecture-section" id="design">
      <div className="arch-content">
        <h2 className="arch-title fade-in">Design Vision</h2>
        <div className="arch-columns fade-in delay-2">
          <div className="arch-col1">
            <p className="arch-lead">
              Conceived by world-renowned architects, Springs Estate is a masterpiece of modern luxury integrated seamlessly into the natural landscape.
            </p>
          </div>
          <div className="arch-col2">
            <p>
              Every line, curve, and material has been chosen to evoke a sense of calm and permanence. The façade features sustainable, locally-sourced stone that reflects the changing light of the day, while expansive floor-to-ceiling glass erases the boundary between indoor warmth and outdoor majesty.
            </p>
            <p>
              This is not just a residence; it is a sculptural landmark designed to stand the test of time, offering an unparalleled living experience for those who demand the extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
