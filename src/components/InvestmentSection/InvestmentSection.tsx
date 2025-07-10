import React from 'react';
import styles from './InvestmentSection.module.scss';

import sectionImg1 from '@/assets/section1.jpg';
import sectionImg2 from '@/assets/section2.jpg';
import bgPattern from '@/assets/bg-pattern.jpg';

export const InvestmentSection: React.FC = () => (
  <section id="invest" className={styles.wrapper}
  >
    <div className={styles.container}>
      {/* Section 1: Text → Image */}
      <div className={styles.row}>
        <div className={styles.text}>
          <p className={styles.subheading}>Nasz nowy rozwój</p>
          <h2 className={styles.heading}>
            Domy wysokiej jakości zaprojektowane dla Ciebie
          </h2>
          <div className={styles.content}>
            <p className={styles.lead} style={{paddingRight: '1rem'}}>
              Witamy Cię serdecznie na stronie Domy - wyjątkowego osiedla, gdzie nowoczesność spotyka się z komfortem.
              Naszą misją było stworzenie przestrzeni, w której każdy dom stanowi harmonijną całość funkcjonalności i estetyki.
              Zależało nam na tym, aby wnętrza były jasne i przestronne, a jednocześnie przytulne, pozwalające na codzienne
              relaksowanie się z rodziną.
            </p>
            <p className={styles.extra} style={{paddingRight: '1rem'}}>
              W procesie projektowania priorytetem były dla nas detale: energooszczędne rozwiązania grzewcze, ekologiczne materiały
              izolacyjne, duże przeszklenia gwarantujące doskonałe doświetlenie pomieszczeń oraz starannie dobrane wykończenia.
              Na zewnątrz każdy dom ma własne miejsce parkingowe, a ogródki zostały przygotowane pod indywidualne aranżacje.
              Taka troska o każdy etap realizacji sprawia, że Domy Kopernika to miejsce, które można od razu nazwać domem.
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper} >
          <img src={sectionImg1} alt="Exterior view of modern homes" />
        </div>
      </div>

      {/* Section 2: Image → Text */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.imageWrapper}>
          <img src={sectionImg2} alt="Interior living space" />
        </div>
        <div className={styles.text} >
            <p className={styles.subheading} style={{margin: '20px 0 0 20px'}}>
              Komfort i bezpieczeństwo</p>
            <h2 className={styles.heading} style={{marginLeft: '20px'}}>
              Bezpieczne i komfortowe przestrzenie mieszkalne
            </h2>
          <div className={styles.content}>
            <p className={styles.lead} style={{marginLeft: '20px'}}>
              W samym sercu osiedla znajdziesz przestrzenie rekreacyjne: plac zabaw dla dzieci, strefy relaksu wśród zieleni
              oraz komfortowe ścieżki spacerowe i rowerowe. Wszystko tak zaprojektowaliśmy, aby mieszkańcy mieli łatwy dostęp
              do natury, niezależnie od wieku i stylu życia.
            </p>
            <p className={styles.extra} style={{marginLeft: '20px'}}>
              Za bezpieczeństwo odpowiada nowoczesny system monitoringu oraz ogrodzenie całej inwestycji.
              Zapewniamy również pełen serwis deweloperski – od wsparcia w procesie finansowania, przez nadzór budowlany,
              aż po pomoc w wykończeniu wnętrz „pod klucz”. Dzięki temu wprowadzenie się do nowego domu odbywa się szybko
              i bez zbędnego stresu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
