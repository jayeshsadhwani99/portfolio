import { Link } from "react-router-dom";
import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import styles from "./styles.module.css";
import { gsap } from "gsap";

interface NavbarProps {
  name: string;
}

function NavBar({ name }: NavbarProps) {
  const ref = useMeasureHeight(name);

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
    <nav ref={ref}>
      <div className={styles.brand}>
        <Link to={"/"}>Jayesh Sadhwani</Link>
      </div>
      <ul className={styles["nav-items"]}>
        <a href={"#about"}>
          <li
            className={styles["nav-item"]}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#about-item");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#about-item");
            }}
          >
            <span id="about-item">About</span>
            <span id="about-item">About</span>
          </li>
        </a>

        <a href={"#work"}>
          <li
            className={styles["nav-item"]}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#work-item");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#work-item");
            }}
          >
            <span id="work-item">Work</span>
            <span id="work-item">Work</span>
          </li>
        </a>

        <a href={"#contact"}>
          <li
            className={styles["nav-item"]}
            onMouseEnter={() => {
              onMenuItemMouseEnter("#contact-item");
            }}
            onMouseLeave={() => {
              onMenuItemMouseLeave("#contact-item");
            }}
          >
            <span id="contact-item">Contact</span>
            <span id="contact-item">Contact</span>
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;
