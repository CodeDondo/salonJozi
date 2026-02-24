'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be unchecked
    analytics: false,
    marketing: false,
    customTag: false,
  });

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      try {
        setPreferences(JSON.parse(saved));
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Load custom tag script if consented
  useEffect(() => {
    if (preferences.customTag) {
      loadCustomTag();
    }
  }, [preferences.customTag]);

  const loadCustomTag = () => {
    // Placeholder for Google Tag Manager or similar
    // This will be populated with the actual GTM script later
    console.log('Custom tag script should be loaded here');
    
    // Example of how to load GTM when ready:
    // if (typeof window !== 'undefined') {
    //   const script = document.createElement('script');
    //   script.async = true;
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    //   document.head.appendChild(script);
    //
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag() {
    //     dataLayer.push(arguments);
    //   }
    //   gtag('js', new Date());
    //   gtag('config', 'G-XXXXXXXXXX');
    // }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      customTag: true,
    };
    savePreferences(newPreferences);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      customTag: false,
    };
    savePreferences(newPreferences);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs) => {
    setPreferences(prefs);
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleToggle = (key) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleWithdraw = () => {
    setShowBanner(true);
    setShowSettings(false);
  };

  if (!showBanner && !showSettings) {
    return (
      <button
        className={styles.settingsButton}
        onClick={() => setShowSettings(true)}
        title="Indstillinger for cookies"
      >
        🍪
      </button>
    );
  }

  return (
    <>
      {showBanner && (
        <div className={styles.cookieBanner}>
          <div className={styles.cookieContent}>
            <div className={styles.cookieHeader}>
              <h2>Cookies & Privatlivspolitik</h2>
              <button
                className={styles.closeButton}
                onClick={() => setShowBanner(false)}
                aria-label="Luk cookie banner"
              >
                ✕
              </button>
            </div>

            {!showSettings ? (
              <div className={styles.cookieMessage}>
                <p>
                  Vi bruger cookies for at give dig den bedst mulige oplevelse. Nogle er nødvendige for funktionalitet,
                  mens andre hjælper os med at forbedre sittet og vise relevant indhold.
                </p>
                <p>
                  <a href="/privatlivspolitik" target="_blank">
                    Læs mere om vores cookiepolitik
                  </a>
                </p>

                <div className={styles.cookieButtons}>
                  <button className={styles.buttonReject} onClick={handleRejectAll}>
                    Afvis Alt
                  </button>
                  <button className={styles.buttonSettings} onClick={() => setShowSettings(true)}>
                    Indstillinger
                  </button>
                  <button className={styles.buttonAcceptAll} onClick={handleAcceptAll}>
                    Accepter Alt
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.cookieSettings}>
                <p className={styles.settingsIntro}>Vælg hvilke cookies du giver samtykke til:</p>

                <div className={styles.cookieCategories}>
                  {/* Necessary Cookies */}
                  <div className={styles.cookieCategory}>
                    <div className={styles.categoryHeader}>
                      <label className={styles.categoryLabel}>
                        <input type="checkbox" checked={true} disabled />
                        <span className={styles.categoryTitle}>Nødvendige Cookies</span>
                      </label>
                      <span className={styles.required}>(Påkrævet)</span>
                    </div>
                    <p className={styles.categoryDescription}>
                      Nødvendige cookies er obligatoriske for at selve websitet kan fungere korrekt. De bruges til at
                      huske dine indstillinger og sikre sikkerhed.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className={styles.cookieCategory}>
                    <div className={styles.categoryHeader}>
                      <label className={styles.categoryLabel}>
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => handleToggle('analytics')}
                        />
                        <span className={styles.categoryTitle}>Statistik & Analyse</span>
                      </label>
                    </div>
                    <p className={styles.categoryDescription}>
                      Disse cookies hjælper os med at forstå, hvordan du bruger vores website, så vi kan forbedre
                      brugeroplevelsen. Dataerne bruges kun til statistik.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className={styles.cookieCategory}>
                    <div className={styles.categoryHeader}>
                      <label className={styles.categoryLabel}>
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => handleToggle('marketing')}
                        />
                        <span className={styles.categoryTitle}>Marketing & Publicering</span>
                      </label>
                    </div>
                    <p className={styles.categoryDescription}>
                      Marketing cookies bruges til at vise dig relevante annoncer og præsentationer baseret på dine
                      interesser.
                    </p>
                  </div>

                  {/* Custom Tag (GTM placeholder) */}
                  <div className={styles.cookieCategory}>
                    <div className={styles.categoryHeader}>
                      <label className={styles.categoryLabel}>
                        <input
                          type="checkbox"
                          checked={preferences.customTag}
                          onChange={() => handleToggle('customTag')}
                        />
                        <span className={styles.categoryTitle}>Google Tag Manager & Tracking</span>
                      </label>
                    </div>
                    <p className={styles.categoryDescription}>
                      Giver tilladelse til at indlæse Google Tag Manager og custom tracking scripts. Du kan tilføje din
                      GTM-ID senere under indstillinger.
                    </p>
                  </div>
                </div>

                <div className={styles.settingsButtons}>
                  <button className={styles.buttonCancel} onClick={() => setShowSettings(false)}>
                    Tilbage
                  </button>
                  <button className={styles.buttonSave} onClick={handleSavePreferences}>
                    Gem Indstillinger
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showSettings && !showBanner && (
        <div className={styles.settingsModal}>
          <div className={styles.settingsModalContent}>
            <div className={styles.cookieHeader}>
              <h2>Cookie Indstillinger</h2>
              <button
                className={styles.closeButton}
                onClick={() => setShowSettings(false)}
                aria-label="Luk indstillinger"
              >
                ✕
              </button>
            </div>

            <div className={styles.cookieSettings}>
              <p className={styles.settingsIntro}>Vælg hvilke cookies du giver samtykke til:</p>

              <div className={styles.cookieCategories}>
                {/* Necessary Cookies */}
                <div className={styles.cookieCategory}>
                  <div className={styles.categoryHeader}>
                    <label className={styles.categoryLabel}>
                      <input type="checkbox" checked={true} disabled />
                      <span className={styles.categoryTitle}>Nødvendige Cookies</span>
                    </label>
                    <span className={styles.required}>(Påkrævet)</span>
                  </div>
                  <p className={styles.categoryDescription}>
                    Nødvendige cookies er obligatoriske for at selve websitet kan fungere korrekt.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className={styles.cookieCategory}>
                  <div className={styles.categoryHeader}>
                    <label className={styles.categoryLabel}>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleToggle('analytics')}
                      />
                      <span className={styles.categoryTitle}>Statistik & Analyse</span>
                    </label>
                  </div>
                  <p className={styles.categoryDescription}>Hjælper os med at forbedre brugeroplevelsen.</p>
                </div>

                {/* Marketing Cookies */}
                <div className={styles.cookieCategory}>
                  <div className={styles.categoryHeader}>
                    <label className={styles.categoryLabel}>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleToggle('marketing')}
                      />
                      <span className={styles.categoryTitle}>Marketing & Publicering</span>
                    </label>
                  </div>
                  <p className={styles.categoryDescription}>Viser dig relevante annoncer baseret på dine interesser.</p>
                </div>

                {/* Custom Tag */}
                <div className={styles.cookieCategory}>
                  <div className={styles.categoryHeader}>
                    <label className={styles.categoryLabel}>
                      <input
                        type="checkbox"
                        checked={preferences.customTag}
                        onChange={() => handleToggle('customTag')}
                      />
                      <span className={styles.categoryTitle}>Google Tag Manager & Tracking</span>
                    </label>
                  </div>
                  <p className={styles.categoryDescription}>Ermøjliggør custom tracking scripts og GTM.</p>
                </div>
              </div>

              <div className={styles.settingsButtons}>
                <button className={styles.buttonWithdraw} onClick={handleWithdraw}>
                  Tilbagekald Samtykke
                </button>
                <button className={styles.buttonClose} onClick={() => setShowSettings(false)}>
                  Luk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
