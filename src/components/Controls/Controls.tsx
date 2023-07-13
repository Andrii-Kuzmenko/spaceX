import React from "react";
import styles from "./Controls.module.scss";
import { Rocket } from "../../types/Rocket";
import { Button } from "..";
import { ArrowIcon } from "../icons";
import classNames from "classnames";

interface Props {
  rockets: Rocket[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

export const Controls = React.memo<Props>(({ rockets, setActiveIndex, className }) => {
  const handleClickRight = () => {
    setActiveIndex((prev) => (prev === 0 ? rockets.length - 1 : prev - 1));
  };

  const handleClickLeft = () => {
    setActiveIndex((prev) => (prev === rockets.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={className}>
      <Button onClick={handleClickRight}>
        <ArrowIcon className={styles.arrow} />
      </Button>

      <Button onClick={handleClickLeft}>
        <ArrowIcon className={classNames(styles.arrowLeft, styles.arrow)} />
      </Button>
    </div>
  )
});
