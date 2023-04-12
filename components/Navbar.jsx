import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-9 sticky top-0 bg-white z-10">
      <div>
        <img
          src="https://img1.wsimg.com/isteam/ip/50965c21-edad-4aaa-855c-00ec04b283a9/logo/c5d6a994-17d5-4fd6-a398-a0e180e2d846.jpg/:/rs=w:246,h:160,cg:true,m/cr=w:246,h:160/qt=q:100/ll"
          alt="logo"
          className="h-20 hover:cursor-pointer xl:mr-16 py-3"
        />
      </div>
      <div className="w-[50vw] md:max-lg:w-[30vw] lg:w-[53vw] relative">
        <input
          type="text"
          className="bg-gray-200 rounded w-[100%] h-12 border-gray-400 border-2 outline-none pl-3 pr-10 text-lg"
        />
        <FiSearch size={30} className="absolute right-2 top-2 text-gray-500" />
      </div>
      <div className="flex items-center space-x-5">
        <div className="cursor-pointer font-semibold md:block hidden">Contact Us</div>
        <button className="sign-in md:block hidden">Sign up</button>
        <button className="sign-in md:block hidden">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
