import styles from './book.module.css';

export default function Book() {
  return (
    <div className={styles.bookingPage}>
      <div className={styles.bookingHeader}>
        <h1>Book en Tid</h1>
        <p>Vælg din ønskede behandling og tid nedenfor. Vi glæder os til at se dig!</p>
      </div>
      
      <div className={styles.bookingContainer}>
        <iframe 
          src="https://salon-jozi.planway.com" 
          width="100%" 
          height="1100px" 
          frameBorder="0"
          title="Book en tid hos Salon Jozi"
          className={styles.bookingIframe}
        />
      </div>
    </div>
  );
}
