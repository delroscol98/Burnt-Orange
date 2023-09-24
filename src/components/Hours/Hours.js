import React from "react";
import Section from "../UI/Section";

import classes from "./Hours.module.css";

const Hours = () => {
  const openingHours = [
    { days: "Monday - Tuesday", hours: "Closed" },
    { days: "Wednesday - Friday", hours: "8:30am - 4:00pm" },
    { days: "Saturday - Sunday", hours: "8:30am - 5:30pm" },
    { days: "Public Holidays", hours: "10:00am - 4:00pm" },
  ];

  return (
    <Section>
      <h2>Opening Hours</h2>
      <div className={classes.container}>
        {openingHours.map((day, index) => {
          return (
            <div key={index}>
              <p>
                <strong>{day.days}</strong>
              </p>
              <p>{day.hours}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Hours;
