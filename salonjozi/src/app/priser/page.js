import styles from './priser.module.css';

export default function Priser() {
  const prisKategorier = [
    {
      titel: 'KLIPNING',
      uuid: 'klipning',
      items: [
        { navn: 'Dameklip', pris: '270,-' },
        { navn: 'Herreklip', pris: '180,-' },
        { navn: 'Studerende (dame)', pris: '250,-' },
        { navn: 'Studerende (herre)', pris: '170,-' },
        { navn: 'Børn (pige)', pris: '200,-' },
        { navn: 'Børn (dreng)', pris: '150,-' },
        { navn: 'Pansionister (dame)', pris: '200,-' },
        { navn: 'Pansionister (herre)', pris: '150,-' },
      ],
    },
    {
      titel: 'BEHANDLINGER',
      uuid: 'behandlinger',
      items: [
        { navn: 'Permanent krøller', pris: 'fra 400,-' },
        { navn: 'Farvning af hår', pris: 'fra 400,-' },
        { navn: 'Striber af hår', pris: 'fra 400,-' },
        { navn: 'Balayage', pris: 'fra 600,-' },
      ],
    },
    {
      titel: 'BRYN & VIPPER',
      uuid: 'bryn-vipper',
      items: [
        { navn: 'Farvning af bryn', pris: '55,-' },
        { navn: 'Retning af bryn', pris: '80,-' },
        { navn: 'Farvning af vipper', pris: '55,-' },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Priser</h1>
          <p>Velkommen til Salon Jozi. Her kan du se vores konkurrencedygtige priser for forskellige behandlinger og tjenester.</p>
        </div>

        <div className={styles.prisContainer}>
          {prisKategorier.map((kategori) => (
            <div key={kategori.uuid} className={styles.kategori}>
              <div className={styles.kategoriHeader}>
                <h2 className={styles.kategoriTitel}>{kategori.titel}</h2>
              </div>
              <ul className={styles.prisList}>
                {kategori.items.map((item, index) => (
                  <li key={index} className={styles.prisItem}>
                    <div className={styles.prisItemNavn}>{item.navn}</div>
                    <div className={styles.prisItemPris}>
                      <span>{item.pris}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaTekst}>Interesseret? Booking en tid hos os i dag!</p>
          <a href="/book" className={styles.bookButton}>
            Book Tid
          </a>
        </div>
      </main>
    </div>
  );
}
