import styles from "./Specialist.module.css";
import { getImageUrl } from "../../../../utils/utils";

function Specialist({ person }) {
  return (
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
  );
}

export default Specialist;
