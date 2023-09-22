import React from "react";
import Button from "../../UI/Button";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={classes.nav}>
      <ul>
        <li>Home</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>High Tea</li>
        <li>Functions</li>
        <li>Contact Us</li>
        <Button className={classes["btn-booking"]} onClick={props.clickBooking}>
          Book a Table
        </Button>
      </ul>
    </div>
  );
};

export default NavBar;
