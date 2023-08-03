import { useContext } from "react";
import { HeightContext } from "../../context/HeightContext";
import styles from "./styles.module.css";
import history from "../../utils/history";

function Hidden() {
  const { heights } = useContext(HeightContext)!;
  return (
    <div className={styles.hidden}>
      <nav className={styles.nav} style={{ height: `${heights?.nav}px` }}></nav>
      <section
        className={styles.animating}
        style={{ height: `${heights?.animating}px` }}
      ></section>

      <section
        className={styles.about}
        style={{ height: `${heights?.about}px` }}
      >
        <div className={styles.heading}>The truth about it</div>
        <div className={styles.content}>
          I can google and copy + paste most of my code. Also I use ChatGPT a
          lot.
        </div>
      </section>

      <section
        className={styles.whatIDo}
        style={{ height: `${heights["what-i-do"]}px` }}
      >
        <div className={styles.heading}>What I do</div>
        <div className={styles.options}>
          <hr />
          <div className={styles.option}>Front-end</div>
          <hr />
          <div className={styles.option}>Back-end</div>
          <hr />
          <div className={styles.option}>Instruct</div>
          <hr />
          <div className={styles.option}>Design</div>
        </div>
      </section>

      <section
        className={styles.experience}
        style={{ height: `${heights?.experience}px` }}
      >
        <div className={styles.heading}>Honestly?</div>
        <div className={styles.content}>
          I'm essentially the tech equivalent of a roomba; bumping into things,
          learning from it, and occasionally picking up crumbs of wisdom.
        </div>
      </section>

      <section
        className={styles.history}
        style={{ height: `${heights.history}px` }}
      >
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
      </section>
    </div>
  );
}

export default Hidden;
