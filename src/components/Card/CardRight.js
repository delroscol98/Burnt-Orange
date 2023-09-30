import Button from "../UI/Button";

import classes from "./Card.module.css";

const CardRight = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-inner"]}>
        <div className={classes["card-front"]}>
          <div className={classes["background-three"]}>
            <h2 className={classes.title}>{props.content.front}</h2>
          </div>
        </div>
        <div className={classes["card-back"]}>
          <p className={classes["card-back-description"]}>BACK</p>
          <Button className={classes.button}>BUTTON</Button>
        </div>
      </div>
    </div>
  );
};

export default CardRight;
