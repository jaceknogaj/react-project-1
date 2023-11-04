import { offers } from "../../data/offers";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <section
      id="offer"
      class={`${styles.offer} ${styles.sectionPadding} ${styles.bg}`}
    >
      <div class={styles.container}>
        <h2 class={`${styles.sectionTitle} ${styles.colorWhite}`}>
          Czym zajmuje się nasza firma?
        </h2>
        <ul class={styles.listServices}>
          {offers.map((offer) => (
            <li class={styles.service}>
              <h3 class={styles.serviceTitle}>{offer.name}</h3>
              {offer.isNew ? (
                <>
                  <p className={styles.serviceNew}>(nowość)</p>
                  <div className={styles.serviceDot}></div>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
