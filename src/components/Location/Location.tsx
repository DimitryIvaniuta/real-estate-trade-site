import React from 'react';
import styles from './Location.module.scss';

export const Location: React.FC = () => (
  <section id="location" className={styles.location}>
    <div className={styles.inner}>
      <div className={styles.innerheader}>
        <p className={styles.subtitle}>Lokalizacja</p>
        <h2 className={styles.title}>Twoje wymarzone osiedle w sercu Warszawy</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            Nasza inwestycja położona jest w spokojnej części Mokotowa, zaledwie 10 minut metrem od centrum miasta.
            W okolicy znajdziesz liczne parki i ścieżki rowerowe, a pobliskie ul. Puławska i ul. Sobieskiego
            gwarantują szybki dojazd samochodem i komunikacją miejską do kluczowych dzielnic, uczelni i biznesowych
            centrów stolicy. W promieniu 2 km działają szkoły, przedszkola oraz bogata infrastruktura u
          </p>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps?q=Martin-Luther-Straße+11,+20459+Hamburg,+Germany&z=15&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
          title="Mapa lokalizacji Domy"
        />
      </div>
    </div>
  </section>
);

export default Location;
