import { ScrambledAnimation } from "react-scrambled-text";
import styles from "./styles.module.css";

function Animating() {
  const texts = [
    "Full-stack builder",
    "Prompt artisian",
    "Decent Guitarist",
    "Front-end coder",
    "MERN Fanatic",
    "Figma developer",
    "Bug Slayer",
    "Tech Adventurer",
  ];

  return (
    <section className={styles.main}>
      <h2>Jayesh is a...</h2>
      <ScrambledAnimation
        pauseDuration={3000}
        speed={75}
        start={true}
        texts={texts}
        style={{ color: "white" }}
        className={styles["scrambled-text"]}
      />
    </section>
  );
}

export default Animating;
