import React from "react";
import styles from "./Navigation.module.scss";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Navigation: React.FC = () => {
  return (
    <div className={styles.navList}>
      <NavigationLink
        to="/spaceX/"
        className={styles.navItem}
      >
        <p className={styles.text}>home</p>
      </NavigationLink>

      <NavigationLink
        to="/spaceX/tours"
        className={styles.navItem}
      >
        <p className={styles.text}>tours</p>
      </NavigationLink>

      <NavigationLink
        to="/spaceX/about"
        className={styles.navItem}
      >
        <p className={styles.text}>about</p>
      </NavigationLink>

      <NavigationLink
        to="/spaceX/help"
        className={styles.navItem}
      >
        <p className={styles.text}>help</p>
      </NavigationLink>
    </div>
  )
}
