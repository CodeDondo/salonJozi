'use client';

import { useState } from 'react';
import styles from './kontakt.module.css';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    navn: '',
    email: '',
    telefon: '',
    emne: '',
    besked: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', or ''
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Tak for din besked! Vi vil kontakte dig snart.');
        setFormData({
          navn: '',
          email: '',
          telefon: '',
          emne: '',
          besked: '',
        });
      } else {
        setStatus('error');
        setMessage(data.message || 'Der opstod en fejl. Prøv igen senere.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Der opstod en fejl ved afsendelse. Prøv igen senere.');
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Kontakt Os</h1>
          <p>Vi elsker at høre fra vores kunder. Udfyld formularen nedenfor, og vi vender tilbage til dig så snart som muligt.</p>
        </div>

        <div className={styles.kontaktContainer}>
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>Send os en besked</h2>

            {status === 'success' && <div className={styles.successMessage}>{message}</div>}
            {status === 'error' && <div className={styles.errorMessage}>{message}</div>}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="navn" className={styles.formLabel}>
                  Navn *
                </label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  className={styles.formInput}
                  placeholder="Dit fulde navn"
                  value={formData.navn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="din.email@eksempel.dk"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefon" className={styles.formLabel}>
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  className={styles.formInput}
                  placeholder="+45 12 34 56 78"
                  value={formData.telefon}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="emne" className={styles.formLabel}>
                  Emne *
                </label>
                <input
                  type="text"
                  id="emne"
                  name="emne"
                  className={styles.formInput}
                  placeholder="Hvad handler det om?"
                  value={formData.emne}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="besked" className={styles.formLabel}>
                  Besked *
                </label>
                <textarea
                  id="besked"
                  name="besked"
                  className={styles.formTextarea}
                  placeholder="Skriv din besked her..."
                  value={formData.besked}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton} disabled={isLoading}>
                {isLoading ? 'Sender...' : 'Send Besked'}
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Kontakt Info</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div className={styles.infoContent}>
                <h3>Adresse</h3>
                <p>Lindholmsvej 67,
                  9400 Nørresundby</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@salonjozi.dk">info@salonjozi.dk</a>
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📱</div>
              <div className={styles.infoContent}>
                <h3>Telefon</h3>
                <p>
                  <a href="tel:+4525622030">+45 25 62 20 30</a>
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🕐</div>
              <div className={styles.infoContent}>
                <h3>Åbningstider</h3>
                <p>Mandag - Fredag: 10:00 - 17:00</p>
                <p>Lørdag: 10:00 - 15:00</p>
                <p>Søndag: Lukket</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
