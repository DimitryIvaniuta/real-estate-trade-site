import React from 'react';
import styles from './CompanyContact.module.scss';

const LOCATION_QUERY = encodeURIComponent('1600 Amphitheatre Parkway, Mountain View, CA');

export const CompanyContact: React.FC = () => (
  <section className={styles.wrapper} id="company-contact">
    <div className={styles.info}>
      <p className={styles.overline}>Kontakt</p>
      <h2 className={styles.title}>
        Zapraszamy do kontaktu! <br />
        Chętnie odpowiemy na wszystkie pytania.
      </h2>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Spotkajmy się</h3>
        <address className={styles.address}>
          ul. Przykładowa 123<br />
          00‑001 Warszawa
        </address>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Zadzwoń do nas</h3>
        <a href="tel:+48111222333" className={styles.link}>
          +48 111 222 333
        </a>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Napisz do nas</h3>
        <a href="mailto:kontakt@przyklad.pl" className={styles.link}>
          kontakt@przyklad.pl
        </a>
      </div>
    </div>

    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps?q=Martin-Luther-Straße+11,+20459+Hamburg,+Germany&z=15&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
        title="Mapa lokalizacji Domy"
      />
    </div>
  </section>
);
