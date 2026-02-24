import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <video autoPlay muted loop className={styles.heroVideo}>
            <source src="/haircut.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Velkommen til Salon Jozi</h1>
            <p>Din professionelle skønhedssalon</p>
            <Link href="/book" className={styles.bookButton}>Book en Tid</Link>
          </div>
        </section>
        
        <section className={styles.servicesSection}>
          <div className={styles.servicesContent}>
            <figure className={styles.imageWrapper}>
              <img src="/statistOne.jpg" alt="Salon" className={styles.salonImage} />
            </figure>
            <div className={styles.servicesText}>
              <h2>Vores Tjenester</h2>
              <p>Vi tilbyder et bredt udvalg af skønhedsbehandlinger, herunder hårklip, farvning, styling og meget mere.</p>
              <p>Vores erfarne stylister er dedikerede til at give dig den bedste oplevelse og sikre, at du forlader vores salon med et smil.</p>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <h2>Kontakt Os</h2>
              <p>Har du spørgsmål eller ønsker at booke en tid? Kontakt os i dag!</p>
              <p>Email: info@salonjozi.dk</p>
              <p>Telefon: +45 25 62 20 30</p>
              <Link href="/book" className={styles.bookButton}>Book en Tid</Link>
            </div>
            <figure className={styles.imageWrapper}>
              <img src="/salonJoziKontakt.png" alt="Kontakt" className={styles.salonImage} />
            </figure>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
