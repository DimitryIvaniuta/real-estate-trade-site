import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import logo from '@/assets/logo.svg';

const SECTIONS = [
  { id: 'hero',       label: 'Home' },
  { id: 'invest',     label: 'O inwestycji' },
  { id: 'properties', label: 'Domy' },
  { id: 'gallery',    label: 'Galeria' },
  { id: 'location',   label: 'Lokalizacja' },
  { id: 'company',    label: 'O firmie' },
  { id: 'contact',    label: 'Kontakt' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={classNames(
        'fixed top-0 w-full z-50 transition-colors duration-300',
        scrolled ? 'bg-dark text-white shadow-lg' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero">
          <img src={logo} alt="Domy" className="h-8 w-auto" />
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={classNames(
                'relative font-medium transition-colors after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300',
                active === id
                  ? 'text-yellow-500 after:w-full'
                  : 'text-white hover:text-yellow-500 hover:after:w-full after:w-0'
              )}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+148430764343"
            className="flex items-center space-x-2 bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            <span>+148430764343</span>
          </a>
        </nav>

        {/* Mobile toggle & menu */}
        <MobileMenu scrolled={scrolled} active={active} />
      </div>
    </header>
  );
};

const MobileMenu: React.FC<{ scrolled: boolean; active: string }> = ({
                                                                       scrolled,
                                                                       active,
                                                                     }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-6 h-0.5 bg-current mb-1 transition-transform"
          style={{ transform: open ? 'rotate(45deg) translate(4px,4px)' : undefined }}
        />
        <span
          className="block w-6 h-0.5 bg-current mb-1 transition-opacity"
          style={{ opacity: open ? 0 : 0.5 }}
        />
        <span
          className="block w-6 h-0.5 bg-current transition-transform"
          style={{ transform: open ? 'rotate(-45deg) translate(4px,-4px)' : undefined }}
        />
      </button>
      {open && (
        <div
          className={classNames(
            'fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center pt-24 space-y-6',
            scrolled ? '' : ''
          )}
        >
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={classNames(
                'text-2xl font-medium transition-colors',
                active === id ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
              )}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+148430764343"
            className="mt-4 px-6 py-3 bg-yellow-500 rounded text-white font-medium"
            onClick={() => setOpen(false)}
          >
            +148430764343
          </a>
        </div>
      )}
    </>
  );
};
