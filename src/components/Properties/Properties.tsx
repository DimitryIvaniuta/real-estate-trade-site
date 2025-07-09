import React from 'react';
import { properties } from '@/data/properties';

export const Properties: React.FC = () => (
  <section id="properties" className="w-full min-h-screen p-8 bg-light">
    <h2 className="text-4xl font-heading text-center mb-8">Wybierz dom Twoich marzeń</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((p) => (
        <article key={p.id} className="bg-white rounded overflow-hidden shadow">
          <img src={p.planThumb} alt={`Plan ${p.id}`} className="w-full h-40 object-cover" />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-heading text-xl">{p.id}</h3>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  p.status === 'sold' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                }`}
              >
                {p.status === 'sold' ? 'Sprzedane' : 'Dostępne'}
              </span>
            </div>
            <p className="mb-4">Powierzchnia użytkowa: <strong>{p.usableArea} m²</strong></p>
            <a
              href={p.detailPdf}
              target="_blank"
              rel="noopener"
              className="block text-center bg-dark text-white py-2 rounded hover:bg-black transition"
            >
              Zobacz kartę lokalu
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);
