import React from 'react';

export const Contact: React.FC = () => (
  <section id="contact" className="w-full min-h-screen p-8 bg-dark text-white">
    <div className="max-w-lg mx-auto">
      <h2 className="text-4xl font-heading text-center mb-4">Umów się na spotkanie</h2>
      <p className="text-center text-light/70 mb-8">
        Współpraca z nami to przejrzyste zasady i pełne zaufanie.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Imię i nazwisko"
          className="w-full p-3 rounded bg-dark/80 placeholder-light/50"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-dark/80 placeholder-light/50"
        />
        <input
          type="tel"
          placeholder="Telefon"
          className="w-full p-3 rounded bg-dark/80 placeholder-light/50"
        />
        <textarea
          rows={4}
          placeholder="Treść wiadomości"
          className="w-full p-3 rounded bg-dark/80 placeholder-light/50"
        />
        <div className="flex items-center">
          <input type="checkbox" id="agree" className="mr-2" />
          <label htmlFor="agree" className="text-light/70 text-sm">
            Wyrażam zgodę na przetwarzanie danych osobowych…
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-brand text-white py-3 rounded hover:bg-brand-dark transition"
        >
          Wyślij
        </button>
      </form>
    </div>
  </section>
);
