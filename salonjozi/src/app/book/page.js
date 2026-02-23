import styles from '../page.module.css';

export default function Book() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Book en Tid</h1>
          <p>Book din næste behandling hos os.</p>
        </div>
      </main>
    </div>
  );
}
