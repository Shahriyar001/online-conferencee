import React from "react";

const Card = ({ event }) => {
  const { name, location, date, time, state } = event;
  return (
    <div className="flex justify-between items-center w-full h-[154px]">
      <div className="w-[338px]  ">
        <h1 className="text-3xl">{name}</h1>
        <p>{location}</p>
      </div>
      <div className="w-[338px] ">
        <h3 className="uppercase text-center text-6xl font-bold ">{date}</h3>
        <p className="text-center">March, 2025</p>
      </div>
      <div className="text-xl w-[338px] ">
        <p>{time}</p>
      </div>
      <div className=" ">
        {state === "BUY TICKET" ? (
          <button className="btn btn-primary">{state}</button>
        ) : (
          <button className="btn btn-ghost">{state}</button>
        )}
      </div>
    </div>
  );
};

export default Card;
