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
          VectorShift, two months in. Tables went from first design to
          production, 10k rows still at 60fps, and 500 open tickets down to
          zero. Before that, founding frontend at Doctor Droid, where a 6
          second build was talked down to under 20 milliseconds.
        </div>
      </div>
    </section>
  );
}

export default Experience;
