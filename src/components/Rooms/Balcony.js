import Section from "../UI/Section";

import classes from "./Balcony.module.css";

const Balcony = () => {
  return (
    <Section className={classes.container}>
      <div className={classes["text-container"]}>
        <h2 className={classes["title"]}>The Balcony</h2>
        <p className={classes["text"]}>
          Embrace the openness of the Balcony that takes in the lush greenery
          and glistening waters of Middle Head, as well as stunning harbour
          views.
        </p>
        <a href="#home" className={classes["btn-text"]}>
          Learn more &rarr;
        </a>
      </div>
      <div className={classes["img-container"]}></div>
    </Section>
  );
};

export default Balcony;
