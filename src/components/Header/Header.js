import classes from "./Header.module.css";
import Hero from "./Hero/Hero";

const Header = () => {
  return (
    <div className={classes.header}>
      <Hero />;
    </div>
  );
};

export default Header;
