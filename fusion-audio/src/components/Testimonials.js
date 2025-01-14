import React from 'react';
import './Testimonial.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Nick Peck",
      company: "Disney Publishing",
      quote: "Fusion Audio brought it home, project after project.",
    },
    {
      name: "Carlotta Brentan",
      company: "Fabler Audio",
      quote: "Fusion Audio was a pleasure to work with on our first audiobook series.",
    },
    {
      name: "Nathan Rosborough",
      company: "Harper Collins",
      quote: "The pinnacle of professionalism, always on time.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.quote}"</p>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
