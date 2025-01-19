import React from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({ //Initializes formData as object
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { //Prevents page from reloading upon form submission
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Check console for details.');
    }
  };

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
