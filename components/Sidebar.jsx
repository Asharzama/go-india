import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { AiFillCaretRight } from "react-icons/ai";

const Sidebar = ({ showSideBar,setShowSideBar }) => {
  return showSideBar ? (
    <div className="fixed lg:static top-0 z-10 bg-sky-900 text-white h-[100vh] lg:h-[90vh] w-72 font-medium">
      <div className="flex justify-between px-6 py-5 border-b-2 border-slate-400">
        <div className="flex items-center">
          <BsFillPersonFill size={30} />
          <p className="capitalize xl:mx-3 lg:max-xl:text-sm">Hello, user</p>
        </div>
        <FaBell size={30} />
      </div>
      <div className="pt-2">
        <ul className="capitalize lg:max-xl:text-sm">
          <li className="sidebar-list relative">
            <BiMessageDetail size={25} className="absolute left-8" />
            Discussion Forum
          </li>
          <li className="sidebar-list relative">
            <TbMoneybag size={25} className="absolute left-8" />
            Market Stories
          </li>
          <li className="sidebar-list">Sentiment</li>
          <li className="sidebar-list">Market</li>
          <li className="sidebar-list">Sector</li>
          <li className="sidebar-list">Watchlist</li>
          <li className="sidebar-list">Event</li>
          <li className="sidebar-list">News/Interview</li>
        </ul>
        <button
      className="block lg:hidden absolute left-72 top-[50%] bg-sky-900 py-7 rounded-e"
      onClick={() => setShowSideBar((prev) => !prev)}
    >
      <AiFillCaretRight size={20} color="white" />
    </button>
      </div>
    </div>
  ) : (
    <button
      className="lg:hidden absolute left-0 top-[50vh] bg-sky-900 py-7 rounded-e"
      onClick={() => setShowSideBar((prev) => !prev)}
    >
      <AiFillCaretRight size={20} color="white" />
    </button>
  );
};

export default Sidebar;
