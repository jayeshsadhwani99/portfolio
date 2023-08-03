import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import styles from "./styles.module.css";

interface WhatIdoProps {
  name: string;
}

function WhatIDo({ name }: WhatIdoProps) {
  const ref = useMeasureHeight(name);
  return (
    <section ref={ref} className={styles.main}>
      <div className={styles.less}>
        <div className={styles.heading}>What I do</div>
        <div className={styles.options}>
          <div className={styles.option}>Front-end</div>
          <div className={styles.option}>Back-end</div>
          <div className={styles.option}>Instruct</div>
          <div className={styles.option}>Design</div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
