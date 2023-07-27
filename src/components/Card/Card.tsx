import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "..";
import { Rocket } from "../../types/Rocket";
import { HeartIcon, DeleteIcon } from "../icons";
import { favoritesState } from "../../state";

import styles from "./Card.module.scss";
import img_0 from "../../images/pexels-spacex-586056 1.jpg";
import img_1 from "../../images/pexels-mikhail-nilov-7672013 1.jpg";
import img_2 from "../../images/astronaut.jpg";

interface Props {
  rocket: Rocket;
  i: number;
}

export const Card = React.memo<Props>(({ rocket, i }) => {
  const favorites = useRecoilValue(favoritesState);
  const favoritesId = favorites.map(favorite => favorite.id)
  const setFavorites = useSetRecoilState(favoritesState);
  const { description, name, id } = rocket;

  const handleClick = () => {
    if (favoritesId.includes(id)) {
      setFavorites(current => current.filter(favorite => favorite.id !== id));

      return;
    }

    setFavorites(current => [...current, rocket]);
  }

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
          <Button className={styles.button}>
            <p className={styles.buttonText}>buy</p>
          </Button>

          <Button className={styles.favoritesButton} onClick={handleClick}>
            {favoritesId.includes(id) ? <DeleteIcon /> : <HeartIcon />}
          </Button>
        </div>
      </div>
    </div>
  )
});
