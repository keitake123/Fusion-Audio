import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Interested in working together? Fill out the form below, and we'll get back to you!</p>
      <form>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="btn-secondary">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;
