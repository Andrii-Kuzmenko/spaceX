import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../icons";

interface Props {
  className?: string,
}

export const LogoLink: React.FC<Props> = ({ className }) => (
  <Link to="/spaceX/" >
      <LogoIcon className={className} />
  </Link>
)
