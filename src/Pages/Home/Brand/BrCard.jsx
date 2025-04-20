import React from "react";

const BrCard = ({ brand }) => {
  const { logo, name } = brand;
  return (
    <div className="card card-side flex items-center justify-center border-2 rounded-none border-[rgba(37,99,235,0.3)] w-[308px] h-[250px]">
      <div className="flex items-center">
        <figure>
          <img src={logo} alt="Movie" className="w-15 h-15" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrCard;
