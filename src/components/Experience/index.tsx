import { useCursor } from "../../hooks/useCursor";
import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import { useTextAnimate } from "../../hooks/useTextAnimate";
import styles from "./styles.module.css";

interface ExperienceProps {
  name: string;
}

function Experience({ name }: ExperienceProps) {
  const { hovered, setHovered } = useCursor();
  const ref = useMeasureHeight(name);
  useTextAnimate(`.${styles.info}`);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section className={styles.main} ref={ref}>
      <div className={styles.less}>
        <div className={styles.heading}>Experience</div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.info} ${hovered ? "hovered" : ""}`}
        >
          In the vast realm of tech, I've donned diverse hats, ceaselessly
          learning, evolving, and delivering exceptional work, all fueled by an
          enduring dedication to enhancing user experiences.
        </div>
      </div>
    </section>
  );
}

export default Experience;
