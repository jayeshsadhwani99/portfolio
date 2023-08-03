import { ScrambledAnimation } from "react-scrambled-text";
import styles from "./styles.module.css";
import { useMeasureHeight } from "../../hooks/useMeasureHeight";

interface AnimatingProps {
  name: string;
}

function Animating({ name }: AnimatingProps) {
  const ref = useMeasureHeight(name);
  const texts = [
    "Full-stack builder",
    "Prompt artisian",
    "General Biker",
    "Front-end coder",
    "Decent Guitarist",
    "MERN Fanatic",
    "Figma developer",
    "Wix whiz",
    "Bug Slayer",
  ];

  return (
    <section ref={ref} className={styles.main}>
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
