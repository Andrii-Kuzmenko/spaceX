import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";

interface Props {
  className?: string,
}

export const LogoLink: React.FC<Props> = ({ className }) => (
  <Link to="/spaceX/" >
    <div className={className} >
      <img
        src={logo}
        alt="logo"
      />
    </div>
  </Link>
)
