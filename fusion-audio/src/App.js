import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;