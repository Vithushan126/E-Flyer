import React from "react";
import { useNavigate } from "react-router-dom";
import HolidayHeader from "./HolidayHeader";

const HolidayPlanner_5 = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    
        const handleFindHereClick = () => {
            navigate("/holidayPlanner_6");
        };
  return (
    <div className="bg-darkBlue text-white h-[718px] w-auto flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <HolidayHeader/>

        {/* Question */}
        <h2 className="absolute w-[671px] text-white text-[30px] font-medium text-center capitalize left-1/2 transform -translate-x-1/2 top-[350px]">
          I know when I want to go on vacation!
        </h2>

        {/* Buttons */}
        <div className="absolute flex space-x-8 left-1/2 transform -translate-x-1/2 top-[450px]">
          {/* No Button */}
          <button
            className="w-[150px] h-[72px] bg-buttoncolor rounded-[20px] flex items-center justify-center text-white text-[24px] font-medium hover:bg-orange transition"
            onClick={() => alert("You clicked NO")}
          >
            NO
          </button>

          {/* Yes Button */}
          <button
            className="w-[150px] h-[72px] bg-buttoncolor rounded-[20px] flex items-center justify-center text-white text-[24px] font-medium hover:bg-orange transition"
            onClick={handleFindHereClick}
          >
            Yes
          </button>
        </div>
      </div>
  );
};
export default HolidayPlanner_5;
