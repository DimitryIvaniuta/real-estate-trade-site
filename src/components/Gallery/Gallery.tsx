import React from 'react';
import g1 from '@/assets/gallery1.jpg';
import g2 from '@/assets/gallery2.jpg';
import g3 from '@/assets/gallery3.jpg';
import g4 from '@/assets/gallery4.jpg';

const IMAGES = [g1, g2, g3, g4];

export const Gallery: React.FC = () => (
  <section id="gallery" className="w-full min-h-screen p-8">
    <h2 className="text-4xl font-heading text-center mb-4">Galeria zdjęć Domów</h2>
    <p className="text-center text-dark/70 mb-8">
      W naszym projekcie postawiliśmy na proste linie...
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {IMAGES.map((src, i) => (
        <img key={i} src={src} alt={`Galeria ${i+1}`} className="w-full h-64 object-cover rounded" loading="lazy" />
      ))}
    </div>
  </section>
);
