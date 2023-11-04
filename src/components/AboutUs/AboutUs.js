import { people } from "../../data/people";
import { getImageUrl } from "../../utils/utils";
import styles from "./AboutUs.module.css";

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
            <li className={styles.expert} key={person.id}>
              <div
                className={styles.expertImg}
                style={{ backgroundImage: getImageUrl(person) }}
              ></div>

              <div className={styles.expertText}>
                <p className={styles.expertName}>
                  {person.fullname} [{person.position}]
                </p>
                <p className={styles.expertDesc}>{person.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
