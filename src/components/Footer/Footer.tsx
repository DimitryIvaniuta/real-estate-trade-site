import React from 'react';
import styles from './Footer.module.scss';

import logo from '@/assets/logo.svg';
import {
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon
} from '@/components/Icon';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Investment', href: '#investment' },
  { label: 'Properties', href: '#properties' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    {/* Left column */}
    <div className={styles.column}>
      <a href="/" className={styles.logoLink} aria-label="Home">
        <img src={logo} alt="Domy" className={styles.siteLogo} />
      </a>
      <nav>
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className={styles.separator} />

    {/* Center column */}
    <div className={styles.column}>
      <p className={styles.overline}>Our Social Media</p>
      <div className={styles.social}>
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">
          <FacebookIcon className={styles.icon} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">
          <LinkedInIcon className={styles.icon} />
        </a>
        <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener">
          <YouTubeIcon className={styles.icon} />
        </a>
      </div>
    </div>

    <div className={styles.separator} />

    {/* Right column */}
    <div className={styles.column}>
      <a href="https://youragency.com" target="_blank" rel="noopener" className={styles.agencyLink}>
        Agency
      </a>
      <p className={styles.byline}>Designed &amp; implemented by YourAgency</p>
    </div>
  </footer>
);
