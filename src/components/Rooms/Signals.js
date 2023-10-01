import Section from "../UI/Section";

import classes from "./Signals.module.css";

const Signals = () => {
  return (
    <Section className={classes.container}>
      <div className={classes["img-container"]}></div>
      <div className={classes["text-container"]}>
        <h2 className={classes["title"]}>The Signals Room</h2>
        <p className={classes["text"]}>
          Your own private space, beautifully presented with an adjoining
          outdoor sandstone terrace and stunning Sydney harbour views.
        </p>
        <a href="#home" className={classes["btn-text"]}>
          Learn more &rarr;
        </a>
      </div>
    </Section>
  );
};

export default Signals;
