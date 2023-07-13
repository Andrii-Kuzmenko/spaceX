import { Slider } from "../../components";
import { ArrowDownIcon } from "../../components/icons";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => (
  <div>
    <div className={styles.backgroundImage}></div>
    <h1 className={styles.title}>
      The space is waiting for
      <span className={styles.titleExtension}>
        YOU
      </span>
    </h1>
    <a href="#section-cards" className={styles.exlore}>
      Explore tours
      <ArrowDownIcon className={styles.exloreIcon} />
    </a>

    <Slider />
  </div >
);
