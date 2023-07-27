import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../icons";

interface Props {
  className?: string,
  onClick: () => void,
}

export const LogoLink: React.FC<Props> = ({ className, onClick }) => (
  <Link to="/spaceX/" onClick={onClick}>
    <LogoIcon className={className} />
  </Link>
)
