import React, { useState, useEffect } from 'react'
import styles from './ContactSection.module.scss'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [showPolicy, setShowPolicy] = useState(false)

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPolicy) setShowPolicy(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showPolicy])

  // controlled form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName(''); setEmail(''); setPhone(''); setMessage(''); setConsent(false)
      } else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <p className={styles.subtitle}>
          Współpraca z nami to jasne zasady i pełne zaufanie.
        </p>
        <h2 className={styles.title}>
          Umów się z nami na spotkanie<br/>
          Budujemy relacje oparte na zaufaniu!
        </h2>

        {status === 'success' ? (
          <p className={styles.thanks}>
            Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input id="name" name="name" type="text" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" name="phone" type="tel" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldFull}>
                <label htmlFor="message">Treść wiadomości</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
            </div>

            <div className={styles.checkboxRow}>
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                required
              />
              <label htmlFor="consent">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z&nbsp;
                <button
                  type="button"
                  className={styles.policyLink}
                  onClick={() => setShowPolicy(true)}
                >
                  Polityką Prywatności
                </button>.
              </label>
            </div>

            {status === 'error' && (
              <p className={styles.error}>
                Coś poszło nie tak — spróbuj ponownie.
              </p>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'submitting'}
            >
              {status === 'submitting'
                ? 'Wysyłanie...'
                : 'Wyślij zgłoszenie →'}
            </button>
          </form>
        )}

        {showPolicy && (
          <div
            className={styles.modalOverlay}
            onClick={() => setShowPolicy(false)}
          >
            <div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="policy-title"
            >
              <button
                className={styles.modalClose}
                onClick={() => setShowPolicy(false)}
                aria-label="Zamknij"
              >
                ×
              </button>
              <h3 id="policy-title" className={styles.modalTitle}>
                Polityka Prywatności
              </h3>
              <div className={styles.modalBody}>
                <p>
                  Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych ...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactSection
