import { BedDouble, Heart, MapPin, Plane, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { Tooltip } from "react-tooltip";
import SliderSection from "./SliderSection";

import Drings from "../../assets/view/Drings.svg";
import Hotel from "../../assets/view/Hotel.svg";
import Ring from "../../assets/view/Ring.svg";
import SwimingPool from "../../assets/view/SwimingPool.svg";
import Wifi from "../../assets/view/Wifi.svg";

const icons = [Wifi, Drings, SwimingPool, Hotel, Ring];

const vacationDetails = [
  "13.5 Km from the airport",
  "Rated very good by other guests",
  "Beach vacation",
  "Adults only",
  "Water sports",
];

const WellcomSection = () => {
  return (
    <div className=" w-full flex flex-col  text-smokyGray">
      <div className="w-full flex flex-col space-y-1">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-10">
            <div className=" text-3xl font-normal">Catalonia Riviera Maya</div>
            <div className="flex flex-row items-center space-x-4">
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt="icon" />
              ))}
            </div>
            <div className="">
              <span className="rounded-full bg-orange px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2">
                <ThumbsUp className="w-5 h-5" />
                Top
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-1">
            <MapPin className="h-6 w-6 text-darkBlue  cursor-pointer stroke-[1px]" />
            <Heart
              className="h-6 w-6 text-darkBlue  cursor-pointer stroke-[1px]"
              data-tooltip-id="watchlist-tooltip"
              data-tooltip-content="Add to Watch List"
            />
          </div>
        </div>
        <div className="">
          <div className="flex">
            {[...Array(7)].map((_, index) => (
              <Star key={index} className="h-8 w-8 fill-darkBlue text-white" />
            ))}
          </div>
        </div>
        <div className="text-lg font-medium">France | City name</div>
        <div className="flex justify-end">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-8 w-8 fill-orange text-white" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 w-full">
        {/* slider and search */}
        <div className="flex flex-row space-x-10 w-full h-[329px]">
          <div className="flex-grow ">
            <SliderSection />
          </div>
          <div className="lg:w-2/5 h-full flex flex-col justify-between space-y-2">
            <div className="p-4 border border-borderCol rounded-3xl flex flex-col justify-between ">
              {/* Top section */}
              <div className="flex flex-col space-y-1 border-b border-borderCol pb-4">
                <div className="flex flex-row ">
                  {/* Added justify-between */}
                  <div className="flex items-center space-x-1 lg:space-x-4">
                    <Plane className="h-5 w-5" fill="black" />
                    <span>Flight</span>
                    <span>+</span>
                    <BedDouble className="h-5 w-5" />
                    <span>Hotel</span>
                  </div>
                  <div className="text-lg">For 2 Adults</div>
                </div>
                <div className="text-lg">
                  3 Nights | 23 Jan 2025 - 28 Jan 2025
                </div>
              </div>

              {/* Price section */}
              <div className="flex justify-end items-center space-x-2 pt-4">
                {/* Added pt-4 for spacing */}
                <span className="text-sm">Per person from</span>
                <div className="font-bold text-2xl">LKR 234567</div>
              </div>
            </div>

            <div className="p-4 border border-borderCol rounded-3xl h-1/2">
              <div className="flex flex-col space-y-1  border-b border-borderCol pb-2">
                <div className="flex items-center space-x-1 lg:space-x-4">
                  <BedDouble className="h-5 w-5" />
                  <span>Hotel</span>
                </div>
                <div className="text-lg">
                  3 Nights | 23 Jan 2025 - 28 Jan 2025
                </div>
              </div>
              <div className="flex flex-col pt-2">
                <div className="flex flex-row justify-between items-center">
                  <span className="rounded-full bg-red  px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2 w-fit">
                    30% Off
                  </span>
                  <span className="text-xl">LKR 334567</span>
                </div>
                <div className="flex flex-row justify-end items-end space-x-2">
                  <span className="text-sm">Per person from </span>
                  <div className="font-bold text-2xl">LKR 234567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 lg:w-3/5">
          {vacationDetails.map((vacationDetail, index) => (
            <div
              key={index}
              className="px-4 py-1 rounded-lg text-sm transition-colors border border-borderGray h-fit"
            >
              {vacationDetail}
            </div>
          ))}
        </div>
      </div>

      {/* tooltip */}
      {/* <Tooltip
        id="watchlist-tooltip"
        place="top"
        variant="light"
        className="bg-black text-white rounded p-1 text-9xl"
      /> */}
    </div>
  );
};

export default WellcomSection;
