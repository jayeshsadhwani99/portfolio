import styles from "./styles.module.css";
import finger from "../../assets/finger.svg";
import textRing from "../../assets/text-ring.svg";

function PressButton() {
  return (
    <div className={styles.btn}>
      <img src={finger} alt="Finger" />
      <img src={textRing} alt="Text Ring" className={styles.textRing} />
    </div>
  );
}

export default PressButton;
