import React from "react";
import styles from "./Card.module.scss";
import { Button } from "..";
import { Rocket } from "../../types/Rocket";
import img_0 from "../../images/pexels-spacex-586056 1.jpg";
import img_1 from "../../images/pexels-mikhail-nilov-7672013 1.jpg";
import img_2 from "../../images/astronaut.jpg";

interface Props {
  rocket: Rocket;
  i: number;
  children: React.ReactNode | string;
}

export const Card: React.FC<Props> = ({ rocket, i, children }) => {
  const { description, name } = rocket;
  return (
    <div className={styles.card}>
      <img
        src={i % 3 === 0 ? img_0 : i % 3 === 1 ? img_1 : img_2}
        alt={name}
        className={styles.image}
      />
      <div className={styles.container}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <Button className={styles.button}><p className={styles.buttonText}>buy</p></Button>
          {children}
        </div>
      </div>
    </div>
  )
};
