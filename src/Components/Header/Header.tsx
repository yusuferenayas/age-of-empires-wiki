import "./Header.scss";
import React from "react";
import {Link} from "@material-ui/core";
import {routePath} from "Navigator/routes";

const Header = () => {
  return (
    <ul id="header">
      <li>
        <Link href={routePath.home}>Home</Link>
      </li>
      <li>
        <Link href={routePath.units}>Units</Link>
      </li>
    </ul>
  );
};

export default Header;
