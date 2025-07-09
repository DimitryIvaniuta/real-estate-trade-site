import React from 'react';

export const Location: React.FC = () => (
  <section id="location" className="w-full min-h-screen p-8 bg-light">
    <h2 className="text-4xl font-heading text-center mb-4">Lokalizacja</h2>
    <p className="text-center text-dark/70 mb-8">
      Inwestycję zlokalizowaliśmy w strategicznie położonym w…
    </p>
    <div className="w-full h-96 md:h-[600px]">
      <iframe
        className="w-full h-full rounded shadow"
        src="https://www.google.com/maps/embed?pb=Germany"
        loading="lazy"
      />
    </div>
  </section>
);
