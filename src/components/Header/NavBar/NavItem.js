import React from "react";

import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div>
      <li className={classes.dropdownItem}>
        <a href="#top">{props.text}</a>
      </li>
    </div>
  );
};

export default NavItem;
