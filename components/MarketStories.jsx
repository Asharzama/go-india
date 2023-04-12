import React from "react";

const MarketStories = ({stories, showSideBar}) => {
  return (
    <div>
      <div className="header ml-6 mt-6" id="stories">Market Stories</div>
      <div className={`h-[80vh] overflow-y-scroll ${!showSideBar && "md:grid grid-cols-2"}`}>
        {stories?.map((story, index)=>
        <div className="mx-6 mt-4" key={index}>
        <div className="w-72 xl:w-60 relative h-48 my-5">
          <img
            src={story.image}
            alt=""
            className="w-72 xl:w-60 h-[100%] rounded-2xl"
          />
          <p className="absolute bottom-0 pt-2 px-5 pb-1 text-white bg-black bg-opacity-40 rounded-2xl lg:max-xl:text-sm">
           {story.story}
          </p>
        </div>
      </div>
        )}
      
      </div>
    </div>
  );
};

export default MarketStories;
