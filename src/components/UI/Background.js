import React from "react";

import classes from "./Background.module.css";

const Background = (props) => {
  return <div className={`${classes.background} ${props.className}`}></div>;
};

export default Background;
