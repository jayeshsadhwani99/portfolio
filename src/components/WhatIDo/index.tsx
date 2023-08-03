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
          <hr />
          <div className={styles.option}>
            <div className={styles.text}>Front-end</div>
            <div className={styles.optionDescription}>
              basically making figma designs come to life
            </div>
            <div className={styles.hidden}></div>
          </div>
          <hr />
          <div className={styles.option}>
            <div className={styles.text}>Back-end</div>
            <div className={styles.optionDescription}>
              scalability, databases and APIs
            </div>
            <div className={styles.hidden}></div>
          </div>
          <hr />
          <div className={styles.option}>
            <div className={styles.text}>Instruct</div>
            <div className={styles.optionDescription}>
              repeat a tuitorial I saw on youtube
            </div>
            <div className={styles.hidden}></div>
          </div>
          <hr />
          <div className={styles.option}>
            <div className={styles.text}>Design</div>
            <div className={styles.optionDescription}>
              take "inspiration" from design sites
            </div>
            <div className={styles.hidden}></div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
