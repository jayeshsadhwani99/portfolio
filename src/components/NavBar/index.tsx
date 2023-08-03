import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import styles from "./styles.module.css";

interface NavbarProps {
  name: string;
}

function NavBar({ name }: NavbarProps) {
  const ref = useMeasureHeight(name);
  return (
    <nav ref={ref}>
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
