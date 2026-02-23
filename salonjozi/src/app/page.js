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
            <button className={styles.bookButton}>Book en Tid</button>
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
      </main>
    </div>
    </>
  );
}
