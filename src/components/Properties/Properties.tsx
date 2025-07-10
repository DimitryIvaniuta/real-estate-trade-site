import React from 'react';
import { properties } from '@/data/properties';
import { PropertyStatus } from '@/types/property';
import styles from './Properties.module.scss';

export const Properties: React.FC = () => (
  <section id="properties" className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.subtitle}>Wybierz swój dom</p>
        <h2 className={styles.title}>Wybierz dom Twoich inspiracji</h2>

        <div className={styles.content}>
          <p className={styles.lead}>
            Każdy z naszych domów w Domach Kopernika to nie tylko funkcjonalne wnętrze, ale też prywatny ogródek, który wydłuża lato
            i pozwala na relaks na świeżym powietrzu. W ofercie znajdziesz działki o zróżnicowanych wielkościach – od kameralnych ogródków
            po większe tereny gotowe do własnej aranżacji zieleni czy placu zabaw dla dzieci.
          </p>

          <p className={styles.extra}>
            Ogródki zostały przygotowane pod klucz: wytyczone ścieżki, podstawowe nasadzenia, instalacja nawadniająca
            oraz taras wykończony drewnianymi deskami. Dzięki temu od pierwszego dnia możesz cieszyć się filiżanką kawy
            na świeżym powietrzu albo zorganizować rodzinne spotkanie przy grillu. Już dziś sprawdź dostępne domy
            i wybierz ten z ogródkiem idealnym dla Ciebie!
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {properties.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.thumbWrap}>
              <img src={p.planThumb} alt={`Plan domu ${p.id}`} className={styles.thumb} />
              <span
                className={`${styles.badge} ${
                  p.status === PropertyStatus.SOLD
                    ? styles.sold
                    : p.status === PropertyStatus.RESERVED
                      ? styles.reserved
                      : styles.available
                }`}
              >
                {p.status === PropertyStatus.SOLD
                  ? 'Sprzedane'
                  : p.status === PropertyStatus.RESERVED
                    ? 'Rezerwacja'
                    : 'Dostępne'}
              </span>
            </div>

            <div className={styles.info}>
              <h3 className={styles.id}>Dom {p.id}</h3>
              <p className={styles.area}>Pow. użytkowa: {p.usableArea} m²</p>
              <a
                href={p.detailPdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfBtn}
              >
                Zobacz kartę lokalu
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
