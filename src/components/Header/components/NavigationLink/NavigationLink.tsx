import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.scss"

interface Props {
  to: string;
  children: React.ReactNode | string;
  className?: string;
}

export const NavigationLink: React.FC<Props> = ({ to, children, className }) => (
  <NavLink
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    className={({ isActive }) => classNames(
      [className],
      { [styles.active]: isActive },
    )}
    to={to}
  >
    {children}
  </NavLink>
);
