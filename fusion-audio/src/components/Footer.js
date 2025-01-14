import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>© 2025 Fusion Audio. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#gallery">Art</a>
      </div>
    </footer>
  );
}

export default Footer;
