import React from "react";

const Marquee = () => {
  return (
    <div className="relative overflow-hidden h-24 whitespace-nowrap bg-[#7546FF] flex items-center">
      <div
        className="inline-block text-white text-xl font-semibold"
        style={{
          animation: "marquee 20s linear infinite",
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
      >
        <span className="mx-8 text-4xl">
          • Register now for the ultimate online conference experience!
        </span>
        <span className="mx-8 text-4xl">• Online Conference</span>
        <span className="mx-8 text-4xl">• Nextgen Conference Experience</span>
      </div>

      <style>
        {`
      @keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}
      </style>
    </div>
  );
};

export default Marquee;
