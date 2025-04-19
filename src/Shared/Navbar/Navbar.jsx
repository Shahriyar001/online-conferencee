import React from "react";
import logo from "../../assets/Vector.png";

const Navbar = () => {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1320px] h-[69.09px] px-4 md:px-8 rounded-xl shadow-md ">
      <div className="flex items-center justify-between h-full">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-[51px] h-9" alt="" />
          <p className="text-4xl">Daevent</p>
        </div>

        {/* Menu Links */}
        <ul className="menu menu-horizontal px-1 text-white">
          <li className="text-xl">
            <p>Home</p>
          </li>
          <li className="text-xl">
            <a>Page</a>
          </li>
          <li className="text-xl">
            <a>Blog</a>
          </li>
          <li className="text-xl">
            <a>Event</a>
          </li>
          <li className="text-xl">
            <a>Content</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
