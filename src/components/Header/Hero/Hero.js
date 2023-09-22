import Button from "../../UI/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={classes.background}></div>
      <div className={classes.hero}>
        <h1 className={classes.title}>Burnt Orange</h1>
        <p className={classes.paragraph}>
          Eat, drink, and be merry on a large wrap around balcony with stunning
          harbour views and lush bushland and greenery
        </p>
        <Button className={classes["btn-booking"]}>Book a Table</Button>
        <Button className={classes["btn-menu"]}>Menus</Button>
      </div>
    </section>
  );
};

export default Hero;
