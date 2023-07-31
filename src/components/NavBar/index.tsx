import styles from "./styles.module.css";

function NavBar() {
  return (
    <nav>
      <div className={styles.brand}>Jayesh Sadhwani</div>
      <ul className={styles["nav-items"]}>
        <li className={styles["nav-item"]}>About</li>
        <li className={styles["nav-item"]}>Work</li>
        <li className={styles["nav-item"]}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
