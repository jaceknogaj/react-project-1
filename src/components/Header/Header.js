import styles from "./Header.module.css";
import Menu from "./components/Menu/Menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.headerLogo}>
          <a href="#">moja firma</a>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
