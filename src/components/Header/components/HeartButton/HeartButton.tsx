import React from "react";
import styles from "./HeartButton.module.scss"
import { Button } from "../../../Button";
import { HeartIcon } from "../../../icons";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

type Props = {
  onClick: () => void,
}

export const HeartButton = React.memo<Props>(({ onClick }) => {
  const { pathname } = useLocation();

  return (
    <Button
      onClick={onClick}
      className={classNames(
        [styles.heartButton],
        { [styles.active]: pathname === '/spaceX/favorites' },
      )}
    >
      <HeartIcon />
    </Button>
  )
});
