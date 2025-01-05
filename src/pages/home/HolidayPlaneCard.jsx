import React from "react";
import CityCard3 from "../../assets/adventure/HotelImage4.svg";
import HolidayLogo from "../../assets/cityAndTrip/HolidayLogo.svg";

const HolidayPlaneCard = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full lg:max-w-3xl flex flex-row rounded-3xl   h-[329px] bg-darkBlue">
        {/* left Content Section */}
        <div className="relative w-1/2">
          <div className="absolute inset-0">
            <img
              src={CityCard3}
              alt="Venice Canal"
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>

          {/* Circular Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#00264D]/60 w-[300px] h-[300px] rounded-full flex flex-col items-center justify-center p-8 border border-white">
              {/* Logo */}
              <img src={HolidayLogo} alt="HolidayLogo" className="" />
              <div className="text-white font-italiana text-center">
                <div className="text-5xl">Holiday</div>
                <div className="text-5xl">Planner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-1/2 p-8 flex flex-col justify-between ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl  text-white ">
              Still Not Decided Where To Go?
            </h1>
            <p className="text-base text-white/90 mb-8">
              Find your perfect holiday match with ease. Let yourself be
              inspired.
            </p>
          </div>
          <button className="bg-orange rounded-2xl text-white text-xl font-semibold py-4  mx-2  hover:bg-[#FF9000] transition-colors bottom-0">
            Find Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPlaneCard;
