import styles from '../page.module.css';

export default function GDPR() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article style={{ maxWidth: '900px', padding: '2rem', textAlign: 'left', color: '#2c2416' }}>
          <h1 style={{ marginBottom: '1rem', fontSize: '36px', color: '#2c2416' }}>GDPR - Databeskyttelse</h1>
          <p style={{ marginBottom: '2rem', color: '#5a4a35' }}>Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>1. Introduktion til GDPR</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              GDPR (General Data Protection Regulation) eller på dansk "Databeskyttelsesforordningen"
              er en EU-forordning, der beskytter borgernes persondata.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Salon Jozi er forpligtet til at overholde GDPR's krav og sikre, at dine personoplysninger
              behandles sikkert og lovligt.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>2. Dataansvarlig</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Salon Jozi er dataansvarlig for behandlingen af dine personoplysninger:
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Navn:</strong> Salon Jozi</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>CVR-nr.:</strong> 45650715</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Adresse:</strong> Lindholmsvej 67,
              9400 Nørresundby
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Email:</strong> info@salonjozi.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}><strong>Telefon:</strong> +45 25 62 20 30</p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>3. Dine rettigheder under GDPR</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Som registreret person har du følgende rettigheder i henhold til GDPR:
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.1 Retten til indsigt (Artikel 15)</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har ret til at få bekræftet, om vi behandler personoplysninger om dig, og i givet fald
              modtage en kopi af disse oplysninger samt information om behandlingen.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.2 Retten til berigtigelse (Artikel 16)</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har ret til at få urigtige eller ufuldstændige personoplysninger rettet uden unødig forsinkelse.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.3 Retten til sletning - "Retten til at blive glemt" (Artikel 17)</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har ret til at få dine personoplysninger slettet, hvis:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Oplysningerne ikke længere er nødvendige til formålet</li>
              <li>Du trækker dit samtykke tilbage, og der ikke er andet retsgrundlag</li>
              <li>Du gør indsigelse mod behandlingen, og der ikke er legitime grunde</li>
              <li>Oplysningerne er behandlet ulovligt</li>
              <li>Sletning er påkrævet i henhold til lovgivning</li>
            </ul>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>Bemærk:</strong> Vi kan være forpligtet til at opbevare visse oplysninger efter bogføringsloven
              (5 år), selvom du anmoder om sletning.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.4 Retten til begrænsning af behandling (Artikel 18)</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har ret til at få behandlingen af dine personoplysninger begrænset i visse situationer,
              f.eks. hvis du bestrider rigtigheden af oplysningerne.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.5 Retten til dataportabilitet (Artikel 20)</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har ret til at modtage dine personoplysninger i et struktureret, almindeligt anvendt
              og maskinlæsbart format og få dem overført til en anden dataansvarlig.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.6 Retten til indsigelse (Artikel 21)</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har til enhver tid ret til at gøre indsigelse mod behandling af dine personoplysninger,
              der sker på grundlag af en legitim interesse.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.7 Ret til ikke at være genstand for automatiske individuelle afgørelser</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Du har ret til ikke at være genstand for afgørelser, der udelukkende er baseret på automatisk behandling,
              herunder profilering.
            </p>

            <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', marginTop: '1.5rem' }}>3.8 Ret til at trække samtykke tilbage</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis behandling er baseret på dit samtykke, har du ret til at trække dette samtykke tilbage når som helst.
              Dette påvirker ikke lovligheden af behandling foretaget inden tilbagetrækningen.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>4. Sådan udøver du dine rettigheder</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              For at udøve dine rettigheder skal du kontakte os skriftligt via:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><strong>Email:</strong> info@salonjozi.dk</li>
              <li><strong>Post:</strong> Salon Jozi, Lindholmsvej 67,
                9400 Nørresundby</li>
            </ul>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi vil besvare din henvendelse inden for 1 måned. I særligt komplicerede tilfælde kan fristen
              forlænges med op til 2 måneder, hvilket vi vil informere dig om.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi kan bede om yderligere information for at bekræfte din identitet, før vi imødekommer din anmodning.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>5. Databrud</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Skulle vi opleve et databrud, der indebærer høj risiko for dine rettigheder og frihedsrettigheder,
              vil vi underrette dig uden unødig forsinkelse.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi har procedurer for at håndtere databrud og vil underrette Datatilsynet inden 72 timer, hvis det er relevant.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>6. Datasikkerhed</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi har implementeret passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte
              dine personoplysninger:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>Kryptering af følsomme data</li>
              <li>Adgangskontrol og autorisationsstyring</li>
              <li>Regelmæssige sikkerhedsopdateringer</li>
              <li>Medarbejderuddannelse i databeskyttelse</li>
              <li>Sikker opbevaring og destruktion af data</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>7. Databehandlere</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi bruger følgende databehandlere, som alle er forpligtet til at overholde GDPR:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li>IT-hosting leverandør (servere)</li>
              <li>Betalingsløsninger</li>
              <li>Email-udbyder</li>
              <li>Bookingsystem leverandør</li>
            </ul>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi har databehandleraftaler med alle vores databehandlere for at sikre, at de behandler dine data sikkert.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>8. Klage til Datatilsynet</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis du mener, at vi ikke overholder GDPR eller databeskyttelseslovgivningen, har du ret til at
              indgive en klage til Datatilsynet:
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Datatilsynet</strong></p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Borgergade 28, 5.</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>1300 København K</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Telefon: +45 33 19 32 00</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Email: dt@datatilsynet.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>Website: www.datatilsynet.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Vi opfordrer dig dog til først at kontakte os, så vi kan forsøge at løse problemet.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>9. Yderligere information</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              For mere detaljeret information om, hvordan vi behandler dine personoplysninger, se vores:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '1rem', paddingLeft: '2rem' }}>
              <li><a href="/privatlivspolitik" style={{ color: '#d4a574' }}>Privatlivspolitik</a></li>
              <li><a href="/cookiepolitik" style={{ color: '#d4a574' }}>Cookiepolitik</a></li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>10. Kontakt</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              Hvis du har spørgsmål til GDPR eller databeskyttelse, er du velkommen til at kontakte os:
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}><strong>Salon Jozi</strong></p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Email: info@salonjozi.dk</p>
            <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>Telefon: +45 25 62 20 30</p>
          </section>
        </article>
      </main>
    </div>
  );
}
