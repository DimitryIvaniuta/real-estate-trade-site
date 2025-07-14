import React, { useEffect } from 'react';
import styles from './PrivacyPolicy.module.scss';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  // close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
      >
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Zamknij Politykę Prywatności"
        >
          ×
        </button>
        <h3 id="privacy-title" className={styles.title}>
          Polityka Prywatności
        </h3>
        <div className={styles.content}>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony
            danych osobowych przekazanych przez Użytkowników w związku z korzystaniem
            ze strony internetowej Domy.
          </p>
          <h4>1. Administrator danych</h4>
          <p>
            Administratorem danych jest Bysewo Inwestycje Sp. z o.o. z siedzibą w
            Warszawie, ul. Przykładowa 1, 00-000 Warszawa.
          </p>
          <h4>2. Cel i zakres zbierania danych</h4>
          <p>
            Dane zbierane są wyłącznie w celu obsługi zgłoszeń przesyłanych przez
            formularz kontaktowy (imię i nazwisko, email, telefon, treść wiadomości).
          </p>
          <h4>3. Okres przechowywania danych</h4>
          <p>
            Dane będą przetwarzane przez okres niezbędny do realizacji usługi,
            nie dłużej jednak niż 3 miesiące od daty otrzymania zgłoszenia.
          </p>
          <h4>4. Prawa Użytkownika</h4>
          <p>
            Użytkownik ma prawo dostępu do treści swoich danych, ich poprawiania,
            usunięcia oraz wniesienia sprzeciwu wobec przetwarzania.
          </p>
          <p>
            W sprawach związanych z ochroną danych osobowych należy kontaktować
            się mailowo: <a href="mailto:kontakt@domy.pl">kontakt@domy.pl</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
