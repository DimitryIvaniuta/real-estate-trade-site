import React from 'react';
import { fileInfoById, properties, PROPERTIES_FILES_LIST } from '@/data/properties';
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
            Każdy z naszych domów w Domach to nie tylko funkcjonalne wnętrze, ale też prywatny ogródek, który wydłuża lato
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
        {properties.map((p) => {
          const imageSrc = `/assets/plans/${p.id}.jpg`;
          const pdfSrc   = `/assets/pdfs/${p.id}.pdf`;
          const fileInfo = fileInfoById(p.id);
          return (
            <article key={p.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={fileInfo?.imageSrc}
                  alt={`Plan domu ${p.id}`}
                  className={styles.image}
                  width={300}
                  height={250}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.topRow}>
                  <h3 className={styles.id}>Dom {p.id}</h3>
                  <span
                    className={[
                      styles.status,
                      p.status === PropertyStatus.SOLD
                        ? styles.sold
                        : styles.available,
                    ].join(' ')}
                  >
                    {p.status === PropertyStatus.SOLD
                      ? 'Sprzedane'
                      : 'Dostępne'}
                  </span>
                </div>
                <p className={styles.area}>
                  Powierzchnia: <strong>{p.usableArea} m²</strong>
                </p>
                <a
                  href={fileInfo?.pdfSrc}
                  download={`Plan-${p.id}.pdf`}
                  className={styles.downloadBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zobacz kartę lokalu
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
