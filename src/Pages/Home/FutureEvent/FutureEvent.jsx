import React from "react";
import Card from "./Card";

const FutureEvent = () => {
  const events = [
    {
      name: "The Future of AI Trends & Innovations",
      location: "Location: Main Auditorium, TechHub Conference Center",
      date: "25",
      time: "10:00 AM – 12:00 PM",
      state: "BUY TICKET",
    },
    {
      name: "Cybersecurity Protecting Data & Privacy",
      location: "Location: Room A2, TechHub Conference Center",
      date: "25",
      time: "10:00 AM – 12:00 PM",
      state: "*** FREE ***",
    },
    {
      name: "Blockchain & Web3 Beyond Cryptocurrency",
      location: "Location: Innovation Stage, TechHub Conference Center",
      date: "25",
      time: "10:00 AM – 12:00 PM",
      state: "SOLD OUT",
    },
  ];
  return (
    <div className="max-w-[]">
      <div className="max-w-[1320px] my-32 mx-auto">
        <h1 className="text-5xl my-10">Future Event</h1>
        <div>
          {events?.map((event, index) => (
            <Card key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureEvent;
