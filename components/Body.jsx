import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DisscussionForum from "./DisscussionForum";
import MarketStories from "./MarketStories";
import { Link } from "react-scroll";

const Body = ({ disscussion, stories }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="lg:flex bg-gray-100">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="lg:hidden bg-sky-900  grid grid-cols-2  text-center text-lg">
        <Link
          smooth={true}
          offset={-100}
          to="discussion"
          className="decoration-inherit text-white"
        >
          <p className="hover:bg-blue-950 hover:border-b-2 border-red-500 cursor-pointer py-3">
            Discussion Forum
          </p>
        </Link>
        <Link
          smooth={true}
          offset={100}
          to="stories"
          className="decoration-inherit text-white"
        >
          <p className="hover:bg-blue-950 hover:border-b-2 border-red-500 cursor-pointer py-3">
            Market Stories
          </p>
        </Link>
      </div>
      <DisscussionForum
        disscussion={disscussion}
        setShowSideBar={setShowSideBar}
      />
      <MarketStories stories={stories} showSideBar={showSideBar} />
    </div>
  );
};

export default Body;
