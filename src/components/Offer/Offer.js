import { offers } from "../../data/offers";
import styles from "./Offer.module.css";
import Services from "./components/Services/Services";

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
            <Services offer={offer} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
