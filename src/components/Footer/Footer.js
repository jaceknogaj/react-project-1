import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContainer}`}>
        <div className={styles.footerText}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <ul className={styles.footerIcon}>
          <li className={styles.iconItem}>
            <div className={styles.iconLink}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </li>
          <li className={styles.iconItem}>
            <div className={styles.iconLink}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
