import React from "react";
import logo2 from "../../../assets/logo shape (1).png";
import logo3 from "../../../assets/logo shape (2).png";
import logo4 from "../../../assets/logo shape (3).png";
import logo1 from "../../../assets/logo shape.png";
import BrCard from "./BrCard";

const Brand = () => {
  const brands = [
    {
      logo: logo1,
      name: "Micro Software",
    },
    {
      logo: logo2,
      name: "Globe Event Planner",
    },
    {
      logo: logo3,
      name: "Luxe Diamond",
    },
    {
      logo: logo4,
      name: "Prestige Platinum",
    },
  ];
  return (
    <div className=" max-w-[1320px] mx-auto my-10">
      <div className="flex flex-wrap justify-between">
        {brands?.map((brand, index) => (
          <BrCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brand;
