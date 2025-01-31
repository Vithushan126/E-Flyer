import React from "react";
import { useNavigate } from "react-router-dom";
import HolidayHeader from "./HolidayHeader";

const HolidayPlanner_5 = () => {
  const navigate = useNavigate(); 

  const handleFindHereClick = () => {
    navigate("/holidayPlanner_6");
  };
  return (
    <div className="bg-darkBlue text-white min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
     <div className="w-full">
        <HolidayHeader />
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
      {/* Question */}
      <h2 className=" justify-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium max-w-3xl capitalize  ">
        I know when I want to go on vacation!
      </h2>

      {/* Buttons */}
      <div className=" mt-8 flex flex-wrap gap-4 justify-center">
        {/* No Button */}
        <button
          className="min-w-[120px] sm:min-w-[150px] h-[60px] sm:h-[72px] bg-buttoncolor rounded-2xl flex items-center justify-center text-white text-base sm:text-lg md:text-xl font-medium hover:bg-orange transition"
          onClick={() => alert("You clicked NO")}
        >
          NO
        </button>

        {/* Yes Button */}
        <button
          className="min-w-[120px] sm:min-w-[150px] h-[60px] sm:h-[72px] bg-buttoncolor rounded-2xl flex items-center justify-center text-white text-base sm:text-lg md:text-xl font-medium hover:bg-orange transition"
          onClick={handleFindHereClick}
        >
          Yes
        </button>
      </div>
      </div>
    </div>
  );
};
export default HolidayPlanner_5;
