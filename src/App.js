import React from "react";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hours from "./components/Hours/Hours";
import Rooms from "./components/Rooms/Rooms";

const App = () => {
  return (
    <>
      <Header />;
      <About />
      <Hours />
      <Card />
      <Rooms />
      <Footer />
    </>
  );
};

export default App;
