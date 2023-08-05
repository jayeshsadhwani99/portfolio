import { Link } from "react-router-dom";
import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import projects from "../../utils/projects";
import styles from "./styles.module.css";

interface ProjectsProps {
  name: string;
}

function Projects({ name }: ProjectsProps) {
  const ref = useMeasureHeight(name);

  return (
    <section ref={ref} className={styles.main}>
      <div className={styles.less}>
        <div className={styles.heading}>Projects</div>
      </div>
      <div className={styles.projectList}>
        {projects.map((e, i) => (
          <Link className={styles.projectLink} to={`/${e.slug}`} key={i}>
            <div
              className={styles.projectElement}
              style={{
                backgroundImage: `url(${e.img})`,
              }}
            >
              <div className={styles.dark}></div>
              <div className={styles.name}>{e.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
