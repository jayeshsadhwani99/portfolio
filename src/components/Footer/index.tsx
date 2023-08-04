import styles from "./styles.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerItem}>Instagram</div>
      <div className={styles.footerItem}>Linkedin</div>
      <div className={styles.footerItem}>Github</div>
    </footer>
  );
}

export default Footer;
