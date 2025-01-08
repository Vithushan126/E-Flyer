import React from "react";
import CityCard3 from "../../assets/adventure/HotelImage4.svg";
import HolidayLogo from "../../assets/cityAndTrip/HolidayLogo.svg";

const HolidayPlaneCard = () => {
  return (
    <div className="w-full flex justify-center  ">
      <div className="max-w-[1100px] w-full lg:max-w-3xl flex flex-col md:flex-row rounded-3xl bg-darkBlue min-h-[400px] md:h-[329px]">
        {/* left Content Section */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-0">
          <div className="absolute inset-0">
            <img
              src={CityCard3}
              alt="Venice Canal"
              className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
            />
          </div>

          {/* Circular Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#00264D]/60 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full flex flex-col items-center justify-center p-6 md:p-8 border border-white">
              {/* Logo */}
              <img src={HolidayLogo} alt="HolidayLogo" className="" />
              <div className="text-white font-italiana text-center">
                <div className="text-4xl md:text-5xl">Holiday</div>
                <div className="text-4xl md:text-5xl">Planner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col space-y-3 md:space-y-2">
            <h1 className="text-2xl md:text-3xl text-white text-center md:text-left">
              Still Not Decided Where To Go?
            </h1>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 text-center md:text-left">
              Find your perfect holiday match with ease. Let yourself be
              inspired.
            </p>
          </div>
          <button className="w-full md:w-auto bg-orange rounded-2xl text-white text-lg md:text-xl font-semibold py-3 md:py-4 px-4 md:mx-2 md:mb-8 hover:bg-[#FF9000] transition-colors">
            Find Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPlaneCard;
