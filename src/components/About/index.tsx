/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useCursor } from "../../hooks/useCursor";
import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import styles from "./styles.module.css";
import { useTextAnimate } from "../../hooks/useTextAnimate";

interface AboutProps {
  name: string;
}

function About({ name }: AboutProps) {
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
    <section ref={ref} className={styles.main} id={name}>
      <div className={styles.less}>
        <div className={styles.heading}>About me</div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.info} ${hovered ? "hovered" : ""}`}
        >
          3x YC engineer. I build the product from the first screen: the UI,
          the auth, the billing, and the parts that still have to be fast
          when people show up.
        </div>
      </div>
    </section>
  );
}

export default About;
