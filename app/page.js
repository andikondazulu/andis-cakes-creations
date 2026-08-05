import Image from "next/image";
import styles from "./page.module.css";


export default function AndisCakesHomepage() {
  return (
    <div>
      <main className={styles.container}>

        <header className={styles.header}>
          <div className={styles.mainContent}>
            <h2 className={styles.title}>Celebrations, Made Simple.</h2>
            <p className={styles.p}>Custom cakes, delicious pastries, elite catering, and breathtaking event decor.</p>
            <p className={styles.p2}>Let us design your unforgettable moments.</p>
           
            {/* <a href="#book-now" className={styles.btn}>Book Now</a> */}
            
          </div>
        </header>
      </main>
    </div>
  );
}
