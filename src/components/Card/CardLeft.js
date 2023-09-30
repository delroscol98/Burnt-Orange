import Button from "../UI/Button";

import classes from "./Card.module.css";

const CardLeft = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-inner"]}>
        <div className={classes["card-front"]}>
          <div className={classes["front-background-one"]}>
            <h2 className={classes.title}>{props.content.front}</h2>
          </div>
        </div>
        <div className={classes["card-back"]}>
          <div className={classes["back-background-one"]}>
            <p className={classes["card-back-description"]}>
              {props.content.back.description}
            </p>
            <Button className={classes.button}>
              {props.content.back.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
