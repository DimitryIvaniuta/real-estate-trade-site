import React from 'react';
import defaultSection2 from '@/assets/default-section2.jpg';

export default function ContactSection() {
  return (
    <section
      id="section2"
      className="w-full h-screen flex items-center justify-center bg-cover bg-center scroll-snap-align-start"
      style={{ backgroundImage: `url(${defaultSection2})` }}
    >
      <div className="bg-white/90 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-4xl font-semibold mb-4 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-white py-3 rounded hover:bg-brand-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
