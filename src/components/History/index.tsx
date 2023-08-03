import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import history from "../../utils/history";
import styles from "./styles.module.css";

interface HistoryProps {
  name: string;
}

function History({ name }: HistoryProps) {
  const ref = useMeasureHeight(name);
  return (
    <section ref={ref} className={styles.main}>
      <div className={styles.less}>
        <div className={styles.heading}>History</div>
        <div className={styles.options}>
          {history.map((e, i) => (
            <div key={i}>
              <hr />
              <div className={`${styles.option} ${styles.text}`}>
                <div className={styles.year}>{e.year}</div>
                <div className={styles.col}>
                  <div className={styles.role}>{e.role}</div>
                  <div className={styles.company}>{e.company}</div>
                </div>
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

export default History;
