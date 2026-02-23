import styles from '../page.module.css';

export default function Cookiepolitik() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article style={{ maxWidth: '900px', padding: '2rem', textAlign: 'left', color: '#2c2416' }}>
          <h1 style={{ marginBottom: '1rem', fontSize: '36px', color: '#2c2416' }}>Cookiepolitik</h1>
          <p style={{ marginBottom: '2rem', color: '#5a4a35' }}>Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>1. Hvad er cookies?</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Cookies er små tekstfiler, som gemmes på din computer, tablet eller smartphone, når du besøger vores hjemmeside. 
              Cookies hjælper os med at gøre hjemmesiden mere brugervenlig og til at analysere, hvordan siden bruges.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>2. Hvorfor bruger vi cookies?</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi bruger cookies til følgende formål:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>At huske dine præferencer og indstillinger</li>
              <li>At forbedre brugeroplevelsen på vores hjemmeside</li>
              <li>At analysere trafikken på hjemmesiden</li>
              <li>At sikre at hjemmesiden fungerer korrekt</li>
              <li>At vise relevant indhold og annoncer (hvis du har givet samtykke)</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>3. Hvilke typer cookies bruger vi?</h2>
            
            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1rem' }}>3.1 Nødvendige cookies</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt. 
              De kan ikke slås fra i vores systemer.
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Session cookies:</strong> Husker dine handlinger under dit besøg</li>
              <li><strong>Sikkerhedscookies:</strong> Beskytter mod svindel og misbrug</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1rem' }}>3.2 Funktionelle cookies</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Disse cookies gør det muligt for hjemmesiden at huske dine valg (som dit brugernavn eller sprogpræference).
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1rem' }}>3.3 Statistik cookies</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden, 
              ved at indsamle og rapportere information anonymt.
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Google Analytics:</strong> Analyserer trafikken på hjemmesiden</li>
            </ul>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1rem' }}>3.4 Marketing cookies</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Disse cookies bruges til at vise relevante annoncer baseret på dine interesser. 
              De kræver dit samtykke.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>4. Oversigt over cookies vi bruger</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #d4a574' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Cookie navn</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Type</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Varighed</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Formål</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e8dcc4' }}>
                  <td style={{ padding: '10px' }}>PHPSESSID</td>
                  <td style={{ padding: '10px' }}>Nødvendig</td>
                  <td style={{ padding: '10px' }}>Session</td>
                  <td style={{ padding: '10px' }}>Opretholder din session</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e8dcc4' }}>
                  <td style={{ padding: '10px' }}>cookie_consent</td>
                  <td style={{ padding: '10px' }}>Nødvendig</td>
                  <td style={{ padding: '10px' }}>1 år</td>
                  <td style={{ padding: '10px' }}>Husker dit cookie-samtykke</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e8dcc4' }}>
                  <td style={{ padding: '10px' }}>_ga</td>
                  <td style={{ padding: '10px' }}>Statistik</td>
                  <td style={{ padding: '10px' }}>2 år</td>
                  <td style={{ padding: '10px' }}>Google Analytics - skelner brugere</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e8dcc4' }}>
                  <td style={{ padding: '10px' }}>_gid</td>
                  <td style={{ padding: '10px' }}>Statistik</td>
                  <td style={{ padding: '10px' }}>24 timer</td>
                  <td style={{ padding: '10px' }}>Google Analytics - skelner brugere</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>5. Tredjeparts cookies</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi bruger følgende tredjeparts tjenester, som kan sætte cookies:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Google Analytics:</strong> Til analyse af hjemmesidens trafik</li>
              <li><strong>Google Maps:</strong> Til visning af vores lokation</li>
              <li><strong>Facebook Pixel:</strong> Til markedsføring (hvis du har givet samtykke)</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>6. Sådan styrer du cookies</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du kan til enhver tid ændre eller trække dit samtykke tilbage i vores cookie-indstillinger.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              De fleste browsere accepterer automatisk cookies, men du kan ændre indstillingerne i din browser 
              til at blokere cookies eller til at advare dig, når en cookie sendes til din enhed.
            </p>
            
            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1rem', color: '#2c2416' }}>Sådan blokerer du cookies i din browser:</h3>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Google Chrome:</strong> Indstillinger → Privatlivs- og sikkerhed → Cookies og andre webstedsdata</li>
              <li><strong>Firefox:</strong> Indstillinger → Privatlivs- og sikkerhed → Cookies og webstedsdata</li>
              <li><strong>Safari:</strong> Indstillinger → Privatlivs- og sikkerhed → Bloker alle cookies</li>
              <li><strong>Microsoft Edge:</strong> Indstillinger → Cookies og webstedstilladelser</li>
            </ul>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Bemærk: Hvis du blokerer alle cookies, kan nogle funktioner på hjemmesiden muligvis ikke fungere korrekt.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>7. Opdateringer af cookiepolitikken</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi kan opdatere denne cookiepolitik fra tid til anden. Eventuelle ændringer vil blive offentliggjort på denne side.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>8. Kontakt</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis du har spørgsmål til vores brug af cookies, er du velkommen til at kontakte os:
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Salon Jozi</strong></p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Email: info@salonjozi.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Telefon: +45 12 34 56 78</p>
          </section>
        </article>
      </main>
    </div>
  );
}
