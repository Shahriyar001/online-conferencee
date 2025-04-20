import React from "react";
import Banner from "../Banner/Banner";
import Marquee from "../Marque/Marquee";
import FutureEvent from "../FutureEvent/FutureEvent";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <FutureEvent />
      <About />
    </div>
  );
};

export default Home;
