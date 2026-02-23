import styles from '../page.module.css';

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Portfolio</h1>
          <p>Se vores arbejde og tidligere projekter.</p>
        </div>
      </main>
    </div>
  );
}
