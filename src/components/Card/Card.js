import classes from "./Card.module.css";

import Section from "../UI/Section";
import CardLeft from "./CardLeft";
import CardMiddle from "./CardMiddle";
import CardRight from "./CardRight";

const cardContent = {
  left: {
    front: "Go for the food",
    back: {
      description:
        "We are proud to source the freshest local ingredients to craft our seasonal Modern Australian menus. Group Bookings are available for up to 24 people. Bookings essential!",
      button: "Book a Table",
    },
  },
  middle: {
    front: "Functions",
    back: {
      description:
        "Choose from The Signals Room, The Balcony or the whole venue as an exclusive booking for your very own private celebration. Our event team are always happy to hear what you have in mind to create a day to remember.",
      button: "Contact Us",
    },
  },
  right: {
    front: "High Tea",
    back: {
      description:
        "From baby showers, bridal showers, birthdays or simply getting the girls together, high tea is always a popular choice for a celebration. Traditional High Tea is served with tea or coffee at $70pp. Sparkling High Tea is served with a glass of bubbles at $80pp. Children's High Tea is $45pp.",
      button: "Learn More",
    },
  },
};

const Card = () => {
  return (
    <Section className={classes.container}>
      <CardLeft content={cardContent.left} />
      <CardMiddle content={cardContent.middle} />
      <CardRight content={cardContent.right} />
    </Section>
  );
};

export default Card;
