import React from 'react';
import styles from './About.module.scss';
import companyImg1 from '@/assets/about1.jpg';
import companyImg2 from '@/assets/about2.jpg';

export const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <div className={styles.inner}>

      {/* Row 1: Image left, text right */}
      <div className={styles.row}>
        <div className={`${styles.imageWrapper} ${styles.firstImage}`}>
          <img
            src={companyImg1}
            alt="Zespół projektowy"
            className={styles.image}
          />
        </div>

        <div className={styles.textWrapper}>
          <p className={styles.subtitle}>Poznaj naszą markę</p>
          <h2 className={styles.title}>Domy Inwestycje to jakość i doświadczenie</h2>
          <div className={styles.textBox}>
            <p className={styles.text}>
              Jesteśmy firmą z wieloletnią tradycją w budownictwie mieszkaniowym.
              Nasz zespół łączy pasję architektów, inżynierów i designerów, by tworzyć
              inwestycje łączące elegancję z funkcjonalnością. Każdy etap – od koncepcji
              po oddanie kluczy – jest dla nas ważny, bo dbamy o Twoje zadowolenie.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2: Text left, image right */}
      <div className={styles.row}>
        <div className={styles.textWrapper}>
          <p className={styles.subtitle}>Nasze wartości</p>
          <h2 className={styles.title}>Budujemy z myślą o Tobie</h2>
          <div className={styles.textBox}>
            <p className={styles.text}>
              Stawiamy na transparentność i profesjonalizm: od jakości materiałów, przez
              terminowość realizacji, aż po obsługę klienta. Każdy dom projektujemy tak, aby
              był wygodny w użytkowaniu dziś i elastyczny na przyszłość – to nasza obietnica.
            </p>
          </div>
        </div>

        <div className={`${styles.imageWrapper} ${styles.secondImage}`}>
          <img
            src={companyImg2}
            alt="Plany architektoniczne"
            className={styles.image}
          />
        </div>
      </div>

    </div>
  </section>
);

export default About;
