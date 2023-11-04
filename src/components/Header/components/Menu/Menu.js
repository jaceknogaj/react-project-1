import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.mainNav}>
        <li className={styles.navItem}>
          <a href="#about-us">o nas</a>
        </li>
        <li className={styles.navItem}>
          <a href="#offer">oferta</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.disabled} href="#">
            kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
