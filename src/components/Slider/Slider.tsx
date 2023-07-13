import React, { useState } from "react";
import classNames from 'classnames';
import { useQuery } from '@apollo/client'
import { GET_ROCKETS } from '../../apollo/rocets';
import { QueryResult } from "../../types/QueryResult";
import { ArrowIcon, EmptyCircleIcon, FilledCircleIcon, HeartIcon } from "../icons";
import { Button, CardList } from "..";
import styles from "./Slider.module.scss";

export const Slider: React.FC = () => {
  const {
    // loading,
    // error,
    data
  }: QueryResult = useQuery(GET_ROCKETS);

  const rockets = data?.rockets || [];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickRight = () => {
    setActiveIndex((prev) => (prev === 0 ? rockets.length - 1 : prev - 1));
  };

  const handleClickLeft = () => {
    setActiveIndex((prev) => (prev === rockets.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="section-cards">
      <div className={styles.titleGroup}>
        <h2 className={styles.title}>popular tours</h2>
        <div className={styles.controls}>
          <Button onClick={handleClickRight}>
            <ArrowIcon className={styles.arrow} />
          </Button>

          <Button onClick={handleClickLeft}>
            <ArrowIcon className={classNames(styles.arrowLeft, styles.arrow)} />
          </Button>
        </div>
      </div>

      <CardList activeIndex={activeIndex} >
        <HeartIcon />
      </CardList>

      <div className={styles.dots}>
        {rockets.map((rocket, i) => (
          <div key={rocket.id} onClick={() => setActiveIndex(i)}>
            {i === activeIndex
              ? <FilledCircleIcon className={styles.dot} />
              : <EmptyCircleIcon className={styles.dot} />
            }
          </div>
        ))}
      </div>
    </section>
  )
};
