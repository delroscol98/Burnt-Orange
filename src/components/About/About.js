import React from "react";
import Section from "../UI/Section";

import classes from "./About.module.css";

const About = () => {
  return (
    <Section>
      <p className={classes.paragraph}>
        We invite you to visit us at Middle Head in Mosman.
        <br />
        <br />
        Originally built in the 1920's to be the Clubhouse for Mosman Golf Club.
        Burnt Orange is a historic & beautiful space, located just 20 minutes
        from Sydney CBD. Dine on the large wrap around balcony, with stunning
        harbour views & enjoy our bushland surrounds. Our restaurant is open
        Wednesday to Sunday from 8:30am, serving delicious breakfast, lunch &
        our famous high tea.
        <br />
        <br />
        Celebrate your next special event in our stand alone historic venue.
        With two unique spaces available, we pride ourselves on creating bespoke
        celebrations like no other.
      </p>
    </Section>
  );
};

export default About;
