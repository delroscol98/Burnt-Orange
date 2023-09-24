import React, { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import Button from "../../UI/Button";

import classes from "./NavBar.module.css";

const navItems = [
  "Home",
  "Breakfast",
  "Lunch",
  "High Tea",
  "Functions",
  "Gift Cards",
  "Contact Us",
];

const NavBar = (props) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.container} ref={menuRef}>
        <div className={classes["menu-trigger"]} onClick={clickHandler}>
          <span
            className="material-symbols-outlined"
            style={{
              fontVariationSettings:
                '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24',
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              fontSize: "40px",
            }}
          >
            menu
          </span>
        </div>

        {open && (
          <div className={classes[`dropdown-menu`]}>
            <h3>Burnt Orange</h3>
            <ul>
              {navItems.map((item, index) => {
                return <NavItem text={item} key={index} />;
              })}
            </ul>
            <Button
              className={classes["btn-booking"]}
              onClick={props.clickBooking}
            >
              Book a Table
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
