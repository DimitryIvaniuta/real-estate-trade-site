import React, { useState } from 'react'
import styles from './ContactSection.module.scss'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget as HTMLFormElement
    const data = {
      // name: form.name.value,
      // email: form.email.value,
      // phone: form.phone.value,
      // message: form.message.value,
      name: form.get('name')?.toString() ?? '',
      email: form.get('email')?.toString() ?? '',
      phone: form.get('phone')?.toString() ?? '',
      message: form.get('message')?.toString() ?? '',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        throw new Error('Failed')
      }
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
              <input id="consent" name="consent" type="checkbox" required />
              <label htmlFor="consent">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z&nbsp;
                <a href="/polityka-prywatnosci" target="_blank" rel="noopener">
                  Polityką Prywatności
                </a>.
              </label>
            </div>

            {status === 'error' && (
              <p className={styles.error}>Coś poszło nie tak — spróbuj ponownie.</p>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Wysyłanie...' : 'Wyślij zgłoszenie →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
