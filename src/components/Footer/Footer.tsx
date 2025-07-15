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
    <div className={styles.section}>
      <a href="/" className={styles.logoLink} aria-label="Home">
        <img src={logo} alt="Domy" className={styles.siteLogo} />
      </a>
      <ul className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.section}>
      <p className={styles.title}>Our Social Media</p>
      <div className={styles.social}>
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">
          <FacebookIcon />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">
          <LinkedInIcon />
        </a>
        <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener">
          <YouTubeIcon />
        </a>
      </div>
    </div>

    <div className={styles.section}>
      <a
        href="https://youragency.com"
        className={styles.agencyLink}
        target="_blank"
        rel="noopener"
      >
        Agency
      </a>
      <p className={styles.byline}>Designed &amp; implemented by YourAgency</p>
    </div>
  </footer>
);