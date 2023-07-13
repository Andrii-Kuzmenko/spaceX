import React from "react";
import { Card } from "..";
import { Rocket } from "../../types/Rocket";
import styles from "./CardList.module.scss";

interface Props {
  activeIndex: number;
  rockets: Rocket[];
}

export const CardList = React.memo<Props>(({ activeIndex, rockets }) => (
  <div className={styles.cardList}>
    {rockets &&
      rockets.map((rocket: Rocket, i) => {
        const slideIndex = (activeIndex + i) % rockets.length;
        return (
          <Card rocket={rockets[slideIndex]} i={slideIndex} key={rocket.id} />
        )
      })
    }
    <div className={styles.emptyCard}></div>
    <div className={styles.emptyCard}></div>
    <div className={styles.emptyCard}></div>
  </div>
))
