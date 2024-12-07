import React from "react";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* Left: Brand Name */}
      <div className="flex justify-between items-center w-[40%]">
        <div className="text-xl font-bold text-gray-800">SimplTrain</div>

        {/* Middle: Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="What would you like to learn?"
            className="w-[270px] px-4 mx-10 py-2 text-sm rounded-full border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {/* Right: Navigation Icons */}
      <div className="flex items-center space-x-[50px] text-xl text-gray-600">
        <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-black">
          <AiOutlineHome />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-black">
          <AiOutlineAppstore />
          <span className="text-xs">Categories</span>
        </div>
        <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-black">
          <AiOutlineMessage />
          <span className="text-xs">Chat</span>
        </div>
        <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-black">
          <AiOutlineBell />
          <span className="text-xs">Notifications</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
