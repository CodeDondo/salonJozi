import styles from '../page.module.css';

export default function Privatlivspolitik() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article style={{ maxWidth: '900px', padding: '2rem', textAlign: 'left' }}>
          <h1 style={{ marginBottom: '1rem', fontSize: '36px' }}>Privatlivspolitik</h1>
          <p style={{ marginBottom: '2rem', color: '#5a4a35' }}>Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>1. Indledning</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Salon Jozi ("vi", "os", "vores") respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. 
              Denne privatlivspolitik informerer dig om, hvordan vi behandler dine personoplysninger, når du besøger vores hjemmeside 
              eller bruger vores tjenester, samt dine rettigheder i henhold til persondataforordningen (GDPR).
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>2. Dataansvarlig</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Salon Jozi</strong></p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>CVR-nr.: [Indsæt CVR-nummer]</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Adresse: [Indsæt adresse]</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Email: info@salonjozi.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Telefon: +45 12 34 56 78</p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>3. Hvilke personoplysninger indsamler vi?</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Vi kan indsamle følgende typer af personoplysninger:</p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Identifikationsoplysninger:</strong> Navn, adresse, telefonnummer, email</li>
              <li><strong>Bookingoplysninger:</strong> Valgte behandlinger, tidspunkter, præferencer</li>
              <li><strong>Betalingsoplysninger:</strong> Fakturaoplysninger (betalingskort behandles af vores betalingsudbyder)</li>
              <li><strong>Tekniske data:</strong> IP-adresse, browsertype, enhed, cookies</li>
              <li><strong>Helbredsoplysninger:</strong> Allergier eller andre relevante helbredsoplysninger nødvendige for behandling</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>4. Formål med behandling af personoplysninger</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Vi behandler dine personoplysninger til følgende formål:</p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Administration af bookinger og aftaler</li>
              <li>Levering af vores tjenester og behandlinger</li>
              <li>Kommunikation om dine bookinger og ændringer</li>
              <li>Opfyldelse af juridiske forpligtelser (bogføring, regnskab)</li>
              <li>Påmindelser om kommende aftaler (hvis du har givet samtykke)</li>
              <li>Markedsføring (kun hvis du har givet samtykke)</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>5. Retsgrundlag for behandling</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Vi behandler dine personoplysninger baseret på følgende retsgrundlag:</p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Kontraktopfyldelse:</strong> For at udføre vores aftale med dig</li>
              <li><strong>Juridisk forpligtelse:</strong> For at overholde bogføringslov og skattelovgivning</li>
              <li><strong>Samtykke:</strong> For markedsføring og nyhedsbreve</li>
              <li><strong>Legitim interesse:</strong> For at forbedre vores tjenester</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>6. Opbevaring af personoplysninger</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi opbevarer dine personoplysninger kun så længe det er nødvendigt:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Kundeoplysninger: I 5 år efter sidste transaktion (jf. bogføringsloven)</li>
              <li>Markedsføringssamtykke: Indtil du trækker dit samtykke tilbage</li>
              <li>Tekniske data: Op til 2 år</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>7. Videregivelse af personoplysninger</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi sælger ikke dine personoplysninger. Vi kan dele oplysninger med:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Betalingsudbydere (for behandling af betalinger)</li>
              <li>IT-leverandører (hosting, emailsystemer)</li>
              <li>Offentlige myndigheder (når loven kræver det)</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>8. Dine rettigheder</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Du har følgende rettigheder i henhold til GDPR:</p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Indsigtsret:</strong> Du kan anmode om en kopi af dine personoplysninger</li>
              <li><strong>Ret til berigtigelse:</strong> Du kan få rettet forkerte oplysninger</li>
              <li><strong>Ret til sletning:</strong> Du kan anmode om sletning af dine data</li>
              <li><strong>Ret til begrænsning:</strong> Du kan anmode om begrænsning af behandling</li>
              <li><strong>Ret til dataportabilitet:</strong> Du kan få dine data i et struktureret format</li>
              <li><strong>Indsigelsesret:</strong> Du kan gøre indsigelse mod behandling</li>
              <li><strong>Ret til at trække samtykke tilbage:</strong> Når behandling er baseret på samtykke</li>
            </ul>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              For at udøve dine rettigheder, kontakt os på info@salonjozi.dk
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>9. Sikkerhed</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi har implementeret passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte 
              dine personoplysninger mod uautoriseret adgang, tab eller ødelæggelse.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>10. Klage til Datatilsynet</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis du mener, at vi ikke behandler dine personoplysninger korrekt, har du ret til at klage til Datatilsynet:
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Datatilsynet</strong></p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Borgergade 28, 5.</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>1300 København K</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Email: dt@datatilsynet.dk</p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>11. Ændringer til denne politik</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi kan opdatere denne privatlivspolitik fra tid til anden. Ændringer vil blive offentliggjort på denne side 
              med en opdateret dato.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
