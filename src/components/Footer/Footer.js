import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={`${styles.container} ${styles.footerContainer}`}>
        <div class={styles.footerText}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <ul class={styles.footerIcon}>
          <li class={styles.iconItem}>
            <a class={styles.iconLink} href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li class={styles.iconItem}>
            <a class={styles.iconLink} href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;