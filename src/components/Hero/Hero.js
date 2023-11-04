import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgOverlay}></div>
      <div className={`${styles.container} ${styles.heroContainer}`}>
        <div className={styles.heroText}>
          <h3 className={styles.heroTitle}>
            Nasza firma oferuje najwyższej jakości produkty.
          </h3>
          <p className={styles.heroParagraph}>
            Nie wierz nam na słowo - sprawdź
          </p>
          <a className={styles.heroBtn} href="#offer">
            oferta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
