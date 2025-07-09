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
          <p className={styles.subheading}>Our New Development</p>
          <h2 className={styles.heading}>
            Quality Homes Designed for You
          </h2>
          <p className={styles.body}>
            Discover a community of thoughtfully designed homes nestled in
            verdant surroundings…
          </p>
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
            <p className={styles.subheading} style={{margin: '20px 0 0 20px'}}>Comfort & Security</p>
            <h2 className={styles.heading} style={{marginLeft: '20px'}}>
              Safe, Comfortable Living Spaces
            </h2>
            <p className={styles.body} style={{marginLeft: '20px'}}>
              Our gated neighborhood offers 24/7 security, high-performance…
            </p>
        </div>
      </div>
    </div>
  </section>
);
