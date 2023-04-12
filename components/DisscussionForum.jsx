import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShareAlt,
  AiFillCaretRight,
} from "react-icons/ai";

const DisscussionForum = ({ disscussion, setShowSideBar }) => {
  return (
    <div className="lg:relative" id="discussion">
      <button
        className="hidden lg:block lg:absolute left-0 top-[50%] bg-sky-900 py-7 rounded-e"
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        <AiFillCaretRight size={20} color="white" />
      </button>
      <div className="header ml-6 mt-6">Discussion Forum</div>
      <div className="mt-3 xl:mx-[7vw] mx-[3vw]">
        <div className="text-xl font-medium">Filters</div>
        <div className="flex items-center shadow-md shadow-gray-500 p-5 bg-white space-x-4 rounded-lg my-3">
          <button className="md:px-3 xl:px-6 py-1 text-white bg-red-700 rounded-2xl hover:bg-red-500 lg:max-xl:text-sm">
            Sector 1
          </button>
          <button className=" md:px-3 xl:px-6 py-1 text-white bg-blue-600 rounded-2xl hover:bg-blue-500 lg:max-xl:text-sm">
            Sector 2
          </button>
          <button className="md:px-3 xl:px-6 py-1 text-white bg-yellow-500 rounded-2xl hover:bg-yellow-400 lg:max-xl:text-sm">
            Sector 3
          </button>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-100 w-24 md:w-48 h-10 rounded-3xl text-center shadow-sm shadow-gray-400 pl-8 pr-3 outline-none font-medium"
              placeholder="Search here"
            />
            <FiSearch size={25} className="absolute left-2 top-2" />
          </div>
        </div>
        <div className="h-[60vh] overflow-scroll">
          {disscussion &&
            disscussion.map((forum, index) => (
              <div
                className="bg-white shadow-md shadow-gray-500 rounded pb-2 pl-7 pr-3 pt-4 my-5"
                key={index}
              >
                <div className="flex justify-end text-blue-950 font-semibold ">
                  2 min ago
                </div>
                <img
                  src={forum.image}
                  alt="company"
                  className="w-[40%] lg:w-[70%] mx-auto"
                />
                <div className="flex items-center space-x-3">
                  <BsFillPersonFill size={40} color="#4c1c2f" />
                  <p className="capitalize font-medium text-lg">{forum.name}</p>
                  <button
                    className={`px-6 py-1 text-white ${
                      forum.sector === "Sector 1"
                        ? "bg-red-700"
                        : forum.sector === "Sector 2"
                        ? "bg-blue-600"
                        : "bg-yellow-500"
                    } rounded-2xl`}
                  >
                    {forum.sector}
                  </button>
                </div>
                <div className="w-2/3 ml-0 md:ml-14">
                  <p className="my-5">{forum.text}</p>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <AiOutlineHeart size={20} />{" "}
                      <p className="font-medium">2k</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AiOutlineEye size={20} />{" "}
                      <p className="font-medium">2k</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BiComment size={20} />{" "}
                      <p className="font-medium">2k Comments</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AiOutlineShareAlt size={20} />{" "}
                      <p className="font-medium">Share</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DisscussionForum;
