import { people } from "../../data/people";
import styles from "./AboutUs.module.css";
import Specialist from "./components/Specialist/Specialist";

function AboutUs() {
  return (
    <section
      id="about-us"
      className={`${styles.aboutUs} ${styles.sectionPadding} ${styles.bg1}`}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nasi specjaliści</h2>
        <ul className={styles.listExpert}>
          {people.map((person) => (
            <Specialist person={person} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
