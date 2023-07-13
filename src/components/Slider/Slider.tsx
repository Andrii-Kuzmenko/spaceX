import React, { useState } from "react";
import { useQuery } from '@apollo/client'
import { GET_ROCKETS } from '../../apollo/rocets';
import { QueryResult } from "../../types/QueryResult";
import { EmptyCircleIcon, FilledCircleIcon } from "../icons";
import { CardList, Controls } from "..";
import styles from "./Slider.module.scss";

export const Slider = React.memo(() => {
  const { data }: QueryResult = useQuery(GET_ROCKETS);
  const rockets = data?.rockets || [];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="section-cards">
      <div className={styles.titleGroup}>
        <h2 className={styles.title}>popular tours</h2>

        <Controls
          rockets={rockets}
          setActiveIndex={setActiveIndex}
          className={styles.controls}
        />
      </div>

      <CardList activeIndex={activeIndex} rockets={rockets} />

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
});
