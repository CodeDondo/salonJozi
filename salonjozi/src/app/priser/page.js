import styles from '../page.module.css';

export default function Priser() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Priser</h1>
          <p>Her kan du se vores priser for forskellige behandlinger.</p>
        </div>
      </main>
    </div>
  );
}
