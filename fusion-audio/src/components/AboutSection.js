import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>About Our Company</h2>
        <p>
          Fusion Audio produces promotional clips for audiobooks. Our team collaborates with authors to produce audiobook trailers with visuals, music, and sound effects.
        </p>
        <button className="btn-secondary">Learn More</button>
      </div>
    </section>
  );
}

export default AboutSection;
