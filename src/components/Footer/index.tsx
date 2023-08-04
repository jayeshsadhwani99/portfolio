import { gsap } from "gsap";
import styles from "./styles.module.css";

function Footer() {
  function onMenuItemMouseEnter(item: string) {
    document.documentElement.style.setProperty("--cursor-size", "0px");
    gsap.to(item, {
      duration: 0.5,
      transitionTimingFunction: "ease-in-out",
      transform: "translateY(-140%)",
    });
  }

  function onMenuItemMouseLeave(item: string) {
    document.documentElement.style.setProperty("--cursor-size", "32px");
    gsap.to(item, {
      transitionTimingFunction: "ease-in-out",
      transform: "translateY(0%)",
      duration: 0.5,
    });
  }

  return (
    <footer>
      <div className={styles.socials}>
        <a
          href="https://instagram.com/jayeshsadhwani99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.footerItem}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#menu_item_insta");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#menu_item_insta");
            }}
          >
            <span id="menu_item_insta">Instagram</span>
            <span id="menu_item_insta">Instagram</span>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/jayeshsadhwani99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.footerItem}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#menu_item_linkedin");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#menu_item_linkedin");
            }}
          >
            <span id="menu_item_linkedin">Linkedin</span>
            <span id="menu_item_linkedin">Linkedin</span>
          </div>
        </a>

        <a
          href="https://github.com/jayeshsadhwani99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.footerItem}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#menu_item_gh");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#menu_item_gh");
            }}
          >
            <span id="menu_item_gh">Github</span>
            <span id="menu_item_gh">Github</span>
          </div>
        </a>

        <a
          href="https://twitter.com/jayeshsadhwani9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.footerItem}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#menu_item_twitter");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#menu_item_twitter");
            }}
          >
            <span id="menu_item_twitter">Twitter</span>
            <span id="menu_item_twitter">Twitter</span>
          </div>
        </a>
      </div>
      <div className={styles.other}>
        <a href="mailto:jayeshsadhwani99@gmail.com">
          Email me: jayeshsadhwani99@gmail.com
        </a>
        <div className={styles.info}>Made with &hearts; by Jayesh Sadhwani</div>
      </div>
    </footer>
  );
}

export default Footer;
