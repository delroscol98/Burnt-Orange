import classes from "./Header.module.css";
import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  const clickBookingHandler = (e) => {
    e.preventDefault();
    return (window.location.href = `https://bookings.nowbookit.com/?accountid=40366d42-8348-4929-b25f-956f36f2d70e&venueid=1843&theme=dark&colors=hex,f57c00&font=Open%20Sans`);
  };

  return (
    <div className={classes.header}>
      <NavBar clickBooking={clickBookingHandler} />
      <Hero clickBooking={clickBookingHandler} />;
    </div>
  );
};

export default Header;
