import { useCursor } from "../../hooks/useCursor";
import { useMeasureHeight } from "../../hooks/useMeasureHeight";
import styles from "./styles.module.css";

interface ContactProps {
  name: string;
}

function Contact({ name }: ContactProps) {
  const { hovered, setHovered } = useCursor();
  const ref = useMeasureHeight(name);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <section
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.main} ${hovered ? "hovered" : ""}`}
    >
      <div className={styles.less}>
        <div className={styles.heading}>My Motto</div>
        <div className={styles.info}>
          Great things in business are never done by one person; they're done by
          a team of people.
        </div>
        <div className={styles.heading}>Steve Jobs</div>
      </div>
    </section>
  );
}

export default Contact;
