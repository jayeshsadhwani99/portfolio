import { useContext } from "react";
import { HeightContext } from "../../context/HeightContext";
import styles from "./styles.module.css";

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
    </div>
  );
}

export default Hidden;
