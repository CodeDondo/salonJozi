import styles from '../page.module.css';

export default function Handelsbetingelser() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article style={{ maxWidth: '900px', padding: '2rem', textAlign: 'left', color: '#2c2416' }}>
          <h1 style={{ marginBottom: '1rem', fontSize: '36px', color: '#2c2416' }}>Handelsbetingelser</h1>
          <p style={{ marginBottom: '2rem', color: '#5a4a35' }}>Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>1. Generelt</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Disse handelsbetingelser gælder for alle ydelser leveret af Salon Jozi, CVR-nr. [indsæt CVR-nummer], 
              beliggende på [indsæt adresse] ("Salonen", "vi", "os").
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ved booking af en tid hos os accepterer du disse handelsbetingelser.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>2. Booking og Reservation</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Booking kan ske via telefon, email, vores hjemmeside eller personligt i salonen.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ved booking modtager du en bekræftelse via SMS eller email. Først når du har modtaget bekræftelsen, 
              er din booking gyldig.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi forbeholder os retten til at afvise bookinger uden nærmere begrundelse.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>3. Priser</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Alle priser er angivet i danske kroner (DKK) inklusiv moms.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi forbeholder os retten til at ændre priser uden varsel. Den pris, der gælder på bookingstidspunktet, 
              er den pris du betaler.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis behandlingen tager længere tid end estimeret, eller du ønsker ekstra services, 
              kan prisen blive højere end oprindeligt oplyst.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>4. Betaling</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Betaling skal ske umiddelbart efter behandlingen er afsluttet.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi accepterer følgende betalingsmidler:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Kontanter</li>
              <li>Dankort</li>
              <li>Kreditkort (Visa, Mastercard)</li>
              <li>MobilePay</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>5. Afbestilling og Ændring</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>Afbestilling skal ske senest 24 timer før den aftalte tid.</strong>
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Afbestilling kan ske via telefon eller email.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ved afbestilling senere end 24 timer før aftalt tid, eller ved udeblivelse uden afbud, 
              forbeholder vi os retten til at opkræve 50% af behandlingens pris som afbestillingsgebyr.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ved gentagne udeblivelser kan vi nægte fremtidige bookinger.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>6. Forsinkelse</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis du kommer for sent til din aftale, kan vi muligvis ikke levere den fulde behandling, 
              da vi har andre kunder efter dig.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du vil stadig blive opkrævet den fulde pris for behandlingen, også selvom behandlingen forkortes 
              på grund af forsinkelse.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ved mere end 15 minutters forsinkelse kan din booking blive annulleret.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>7. Gavekort</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Gavekort udstedt af Salon Jozi er gyldige i 3 år fra udstedelsesdatoen.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Gavekort kan ikke ombyttes til kontanter.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis behandlingens pris overstiger gavekortet, betales differencen af kunden.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ved tab af gavekort kan vi ikke udstede erstatning.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>8. Klipkort og Abonnementer</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Klipkort er personlige og kan ikke overdrages til andre.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Klipkort er gyldige i 12 måneder fra købsdato.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Ubrugte klip kan ikke refunderes efter udløbsdatoen.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>9. Produkter</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Produkter købt i salonen kan returneres inden 14 dage i uåbnet stand med kvittering.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Åbnede produkter kan ikke returneres af hygiejniske årsager.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>10. Ansvar</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi udfører alle behandlinger efter bedste evne og med professionel omhu.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Salon Jozi kan ikke holdes ansvarlig for allergiske reaktioner eller andre bivirkninger, 
              medmindre disse skyldes grov uagtsomhed fra vores side.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Det er kundens ansvar at informere om allergier, sygdomme eller medicin, 
              der kan påvirke behandlingen.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi anbefaler altid patch-test ved farvning og kemisk behandling.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>11. Reklamation</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis du ikke er tilfreds med en behandling, skal du kontakte os hurtigst muligt 
              og senest inden 7 dage efter behandlingen.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi vil altid forsøge at finde en løsning, herunder evt. genbehandling.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>12. Persondata</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi behandler dine personoplysninger i henhold til vores privatlivspolitik og GDPR.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Læs mere i vores <a href="/privatlivspolitik" style={{ color: '#d4a574' }}>privatlivspolitik</a>.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>13. Forbehold</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi forbeholder os retten til at ændre disse handelsbetingelser uden varsel.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Den version af handelsbetingelserne, der gælder på bookingstidspunktet, er gældende.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>14. Tvister</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Eventuelle tvister afgøres efter dansk ret og ved danske domstole.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>15. Kontakt</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Salon Jozi</strong></p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Email: info@salonjozi.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Telefon: +45 12 34 56 78</p>
          </section>
        </article>
      </main>
    </div>
  );
}
