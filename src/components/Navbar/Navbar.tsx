import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import logo from '@/assets/logo.svg';
import styles from './Navbar.module.scss';
import { PhoneIcon } from '../Icon/PhoneIcon';

const SECTIONS = [
  { id: 'hero',       label: 'Home' },
  { id: 'invest',     label: 'O inwestycji' },
  { id: 'properties', label: 'Domy' },
  { id: 'gallery',    label: 'Galeria' },
  { id: 'location',   label: 'Lokalizacja' },
  { id: 'company',    label: 'O firmie' },
  { id: 'contact',    label: 'Umów się na spotkanie' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(SECTIONS.map(s => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logoLink}>
          <img src={logo} alt="Domy" className={styles.logo} />
        </a>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id === 'meeting' ? '#contact' : `#${id}`}
                  className={`${styles.link} ${active === id ? styles.active : ''}`}
                >
                  {label}
                  <span className={styles.underline} />
                </a>
              </li>
            ))}
          </ul>

          <a href="tel:+12432433543" className={styles.callBtn}>
            <PhoneIcon />
            +1 24 32 433 543
          </a>
        </nav>
      </div>
    </header>
  );
};
