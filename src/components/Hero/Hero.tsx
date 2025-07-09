import React from 'react';
import heroImg from '@/assets/hero.jpg';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => (
  <section
    id="hero"
    className={styles.hero}
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <div className={styles.overlay} />
    <div className={styles.content}>
      <p className={styles.tagline}>Domy Kopernika</p>
      <h1 className={styles.title}>
        Miejsce, w którym poczujesz się komfortowo i bezpiecznie
      </h1>
      <a href="#contact" className={styles.cta}>
        Umów się na spotkanie
      </a>
    </div>
  </section>
);
