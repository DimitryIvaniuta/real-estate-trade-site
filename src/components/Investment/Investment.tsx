import React from 'react';
import investImg from '@/assets/invest.jpg';

export const Investment: React.FC = () => (
  <section id="invest" className="w-full h-screen flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 p-8">
      <h2 className="text-4xl font-heading text-brand mb-4">O inwestycji Domy</h2>
      <p className="text-dark/80 leading-relaxed">
        Osiedle Domy to zespół nowoczesnych i wygodnych domów...
      </p>
    </div>
    <div className="md:w-1/2 h-80 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${investImg})` }} />
  </section>
);
