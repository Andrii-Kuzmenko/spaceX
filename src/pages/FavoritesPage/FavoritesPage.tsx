import { Button, CardList, Controls } from '../../components';
import { favoritesState } from '../../state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './FavoritesPage.module.scss';
import { useState } from 'react';
import React from 'react';

export const FavoritesPage = React.memo(() => {
  const flights = useRecoilValue(favoritesState);
  const setFavorites = useSetRecoilState(favoritesState);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setFavorites([]);
  }

  return (
    <div>
      <div className={styles.backgroundImage}></div>
      <h1 className={styles.title}>favourites</h1>
      <div className={styles.buttonContainer}>
        {flights.length === 0 &&
          <p className={styles.text}>You don't have any favorites yet</p>
        }
        {flights.length > 3 &&
          <Controls
            rockets={flights}
            setActiveIndex={setActiveIndex}
            className={styles.controls}
          />}
        <div></div>
        <Button className={styles.button} onClick={handleClick}>Clear all</Button>
      </div>

      <CardList activeIndex={activeIndex} rockets={flights} />
    </div>
  )
})
