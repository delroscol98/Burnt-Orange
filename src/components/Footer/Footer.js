import Section from "../UI/Section";
import FooterContact from "./FooterContact";
import FooterFunctions from "./FooterFunctions";
import FooterMain from "./FooterMain";
import FooterMenus from "./FooterMenus";

import classes from "./Footer.module.css";

const content = {
  main: [
    "1109 Middle Head Rd, Mosman NSW 2088",
    "info@burntorange.com.au",
    "events@burntorange.com.au",
    "02 9969 1120",
  ],
  menus: [
    "Breakfast",
    "Lunch",
    "Lunch Group Package",
    "Wine and Drinks",
    "High Tea",
  ],
  functions: ["Weddings", "Corporate Events"],
  contact: ["History", "Contact", "Gift Vouchers", "Blog", "Press"],
};

const Footer = () => {
  return (
    <Section className={classes.footer}>
      <FooterMain content={content.main} />
      <FooterMenus content={content.menus} />
      <FooterFunctions content={content.functions} />
      <FooterContact content={content.contact} />
    </Section>
  );
};

export default Footer;
