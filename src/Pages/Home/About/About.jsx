import React from "react";
import woman from "../../../assets/woman.png";
import man from "../../../assets/man.png";
import oldman from "../../../assets/oldman.png";

const About = () => {
  return (
    <div className="hero w-[1326px] bg-base-200 mx-auto min-h-[1000px]">
      <div className="hero-content flex-col lg:flex-row">
        {/* image section  */}
        <div className="w-1/2 left-0 max-w-[620px]">
          <img src={woman} alt="" className="w-[618px] mb-5" />
          <div className="flex w-full">
            <img src={man} alt="" className="mr-3 w-[60%]" />
            <img src={oldman} alt="" className="w-[40%]" />
          </div>
        </div>
        <div className="w-1/2 ml-10">
          <p>About The Conference</p>
          <h1 className="text-5xl font-bold mb-5">
            Where Innovation Meets Virtual Experiences
          </h1>
          <div className="max-w-[489px] my-5">
            <h1 className="text-xl my-2">Expert keynote speakers</h1>
            <p>
              Hear from thought leaders and industry pioneers as they share
              their expertise, trends, and strategies to keep you ahead of the
              curve.
            </p>
          </div>
          <div className="max-w-[489px] my-5">
            <h1 className="text-xl my-2">Education Programs</h1>
            <p>
              Engage in interactive sessions, workshops, and masterclasses
              designed to expand your skills and knowledge in your field.
            </p>
          </div>
          <div className="max-w-[489px] my-5">
            <h1 className="text-xl my-2">Notes & Highlights</h1>
            <p>
              Stay informed with key takeaways, session summaries, and exclusive
              insights to ensure you never miss a moment of valuable content.
            </p>
          </div>
          <p className="py-6 text-2xl font-bold">
            Join us as we redefine conference for the <br /> 21st century!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
