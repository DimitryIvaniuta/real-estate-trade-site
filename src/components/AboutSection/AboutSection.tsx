import React from 'react';
import defaultSection1 from '@/assets/default-section1.jpg';

export default function AboutSection() {
  return (
    <section
      id="section1"
      className="w-full h-screen flex items-center justify-center bg-cover bg-center scroll-snap-align-start"
      style={{ backgroundImage: `url(${defaultSection1})` }}
    >
      <div className="bg-white/90 p-8 rounded-lg max-w-prose">
        <h2 className="text-4xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vehicula justo eget diam posuere sollicitudin eu tincidunt nulla.
        </p>
      </div>
    </section>
  );
}
