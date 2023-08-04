import { useContext } from "react";
import { HeightContext } from "../../context/HeightContext";
import styles from "./styles.module.css";
import history from "../../utils/history";
import options from "../../utils/options";
import projects from "../../utils/projects";

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
          {options.map((e, i) => (
            <div key={i}>
              <hr />
              <div className={styles.option}>{e.thing}</div>
              <hr />
            </div>
          ))}
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

      <section
        className={styles.projects}
        style={{ height: `${heights?.projects}px` }}
      >
        <div className={styles.heading}>Projects</div>
        <div className={styles.projectList}>
          {projects.map((e, i) => (
            <div
              className={styles.projectElement}
              key={i}
              style={{
                backgroundImage: `url(${e.img})`,
              }}
            >
              <div className={styles.dark}></div>
              <div className={styles.name}>{e.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={styles.contact}
        style={{ height: `${heights?.contact}px` }}
      >
        <div className={styles.heading}>My Motto</div>
        <div className={styles.content}>
          The only way to be truly satisfied is to do great work
        </div>
        <div className={styles.heading}>Jayesh Sadhwani(or steve jobs)</div>
      </section>
    </div>
  );
}

export default Hidden;
