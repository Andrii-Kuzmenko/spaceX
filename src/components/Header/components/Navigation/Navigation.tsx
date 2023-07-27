import React from "react";
import styles from "./Navigation.module.scss";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import classNames from "classnames";

type Props = {
  className?: string,
  onClick?: () => void,
}

export const Navigation: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div className={classNames([styles.navList], className)}>
      <NavigationLink
        onClick={onClick}
        to="/spaceX/"
        className={styles.navItem}
      >
        <p className={styles.text}>home</p>
      </NavigationLink>

      <NavigationLink
        onClick={onClick}
        to="/spaceX/tours"
        className={styles.navItem}
      >
        <p className={styles.text}>tours</p>
      </NavigationLink>

      <NavigationLink
        onClick={onClick}
        to="/spaceX/about"
        className={styles.navItem}
      >
        <p className={styles.text}>about</p>
      </NavigationLink>

      <NavigationLink
        onClick={onClick}
        to="/spaceX/help"
        className={styles.navItem}
      >
        <p className={styles.text}>help</p>
      </NavigationLink>
    </div>
  )
}
