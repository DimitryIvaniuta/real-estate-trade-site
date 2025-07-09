import React from 'react';
import companyImg from '@/assets/company.jpg';

export const Company: React.FC = () => (
  <section id="company" className="w-full min-h-screen flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 p-8">
      <h2 className="text-4xl font-heading mb-4">O firmie</h2>
      <p className="text-dark/80 leading-relaxed">
        Inwestycje sp. z o.o. jest spółką powstałą na bazie…
      </p>
    </div>
    <img src={companyImg} alt="O firmie" className="md:w-1/2 h-80 md:h-full object-cover" loading="lazy" />
  </section>
);
