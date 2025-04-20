import React from "react";
import Banner from "../Banner/Banner";
import Marquee from "../Marque/Marquee";
import FutureEvent from "../FutureEvent/FutureEvent";
import About from "../About/About";
import Brand from "../Brand/Brand";
import Register from "../Register/Register";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Banner />
      <Marquee />
      <FutureEvent />
      <About />
      <Brand />
      <Register />
      <Pricing />
    </div>
  );
};

export default Home;
