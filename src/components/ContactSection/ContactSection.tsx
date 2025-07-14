import React, { useState, useEffect } from 'react'
import styles from './ContactSection.module.scss'
import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';

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
  // validation errors
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  // email regex (simple)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // phone regex: +48 111 222 333 or digits/spaces/hyphens/parentheses
  const phoneRegex = /^[+()\d\s-]{9,20}$/

  // handle blur validations
  const validateEmail = () => {
    if (!emailRegex.test(email.trim())) {
      setEmailError('Proszę podać prawidłowy adres email.')
    } else {
      setEmailError('')
    }
  }
  const validatePhone = () => {
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError('Telefon w formacie +48 111 222 333')
    } else {
      setPhoneError('')
    }
  }

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
                <input id="name" name="name" type="text" value={name}
                       onChange={e => setName(e.target.value)}
                       required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={email}
                       onChange={e => setEmail(e.target.value)}
                       onBlur={validateEmail}
                       required />
                {emailError && <p className={styles.fieldError}>{emailError}</p>}
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" name="phone" type="tel" value={phone}
                       onChange={e => setPhone(e.target.value)}
                       onBlur={validatePhone}
                       required />
                {phoneError && <p className={styles.fieldError}>{phoneError}</p>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldFull}>
                <label htmlFor="message">Treść wiadomości</label>
                <textarea id="message" name="message" rows={14} value={message}
                          onChange={e => setMessage(e.target.value)}
                          required />
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
              disabled={!consent || status === 'submitting'}
            >
              {status === 'submitting'
                ? 'Wysyłanie...'
                : 'Wyślij zgłoszenie →'}
            </button>
          </form>
        )}

        <PrivacyPolicy isOpen={showPolicy} onClose={() => setShowPolicy(false)} />
      </div>
    </section>
  )
}

export default ContactSection
