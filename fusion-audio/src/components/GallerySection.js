import React from 'react';
import './GallerySection.css';

function GallerySection() {
  const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'
  ]; // Replace with your image paths

  return (
    <section id="gallery" className="gallery">
      <h2>Follow Us on Social</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      <button className="btn-primary">Social</button>
    </section>
  );
}

export default GallerySection;
