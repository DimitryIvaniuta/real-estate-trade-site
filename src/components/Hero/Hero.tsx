import React from 'react';
import heroImg from '@/assets/hero.jpg';

export const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    {/* dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <p className="text-sm uppercase tracking-widest text-white mb-2">
        Domy
      </p>
      <h1 className="max-w-3xl text-4xl sm:text-5xl font-heading text-white mb-6">
        Miejsce, w którym poczujesz się komfortowo i bezpiecznie
      </h1>
      <a
        href="#contact"
        className="inline-block px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-medium rounded hover:bg-yellow-500 hover:text-white transition"
      >
        Umów się na spotkanie
      </a>
    </div>
  </section>
);
