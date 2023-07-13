import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ROCKETS } from '../../apollo/rocets';
import { Button, Card } from "..";
import { QueryResult } from "../../types/QueryResult";
import { Rocket } from "../../types/Rocket";
import styles from "./CardList.module.scss";

interface Props {
  activeIndex: number;
  children: React.ReactNode | string;
}

export const CardList: React.FC<Props> = ({ activeIndex, children }) => {
  const { data }: QueryResult = useQuery(GET_ROCKETS);
  const rockets = data?.rockets || [];

  return (
    <div className={styles.cardList}>
      {data &&
        rockets.map((rocket: Rocket, i) => {
          const slideIndex = (activeIndex + i) % rockets.length;
          return (
            <Card rocket={rockets[slideIndex]} i={slideIndex} key={rocket.id}>
              <Button className={styles.button}>
                {children}
              </Button>
            </Card>
          )
        })
      }
    </div>
  )
};
