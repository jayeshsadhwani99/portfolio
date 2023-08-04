import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import options from "../../utils/options";
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
          {options.map((e, i) => (
            <div key={i}>
              <hr />
              <div className={styles.option}>
                <div className={styles.text}>{e.thing}</div>
                <div className={styles.optionDescription}>{e.descripion}</div>
                <div className={styles.hidden}></div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
