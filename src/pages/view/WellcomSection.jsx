import { BedDouble, Heart, MapPin, Plane, Star, ThumbsUp } from "lucide-react";
import React from "react";
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
    <div className="w-full flex flex-col text-smokyGray space-y-4 p-2 md:p-4">
      <div className="w-full flex flex-col space-y-4">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap md:flex-nowrap md:items-center gap-2 md:gap-4">
            <h2 className="text-xl md:text-3xl font-medium">Catalonia Riviera Maya</h2>
            <div className="flex gap-2">
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt="icon" className="w-5 h-5 md:w-8 md:h-8" />
              ))}
            </div>
            <span className="rounded-full bg-orange px-3 py-1 text-sm font-medium text-white flex gap-2">
              <ThumbsUp className="w-5 h-5" /> Top
            </span>
          </div>
          <div className="flex space-x-2">
            <MapPin className="h-6 w-6 text-darkBlue cursor-pointer stroke-[1px]" />
            <Heart
              className="h-6 w-6 text-darkBlue cursor-pointer stroke-[1px]"
              data-tooltip-id="watchlist-tooltip"
              data-tooltip-content="Add to Watch List"
            />
          </div>
        </div>

        <div className="flex space-x-1">
          {[...Array(7)].map((_, index) => (
            <Star key={index} className="h-5 md:h-8 w-5 md:w-8 fill-darkBlue text-darkBlue" />
          ))}
        </div>
        <div className="text-lg font-medium">France | City name</div>
        <div className="flex justify-end">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-5 md:h-8 w-5 md:w-8 fill-orange text-orange" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        {/* Slider Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <div className="flex-grow">
            <SliderSection />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            <div className="p-4 border border-borderCol rounded-3xl flex flex-col gap-4">
              {/* Top Section */}
              <div className="border-b border-borderCol pb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5" fill="black" />
                    <span>Flight</span>
                    <span>+</span>
                    <BedDouble className="h-5 w-5" />
                    <span>Hotel</span>
                  </div>
                  <span className="text-lg">For 2 Adults</span>
                </div>
                <span className="text-lg">3 Nights | 23 Jan 2025 - 28 Jan 2025</span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center pt-4">
                <span className="text-sm">Per person from</span>
                <div className="font-bold text-2xl">LKR 234567</div>
              </div>
            </div>

            <div className="p-4 border border-borderCol rounded-3xl">
              <div className="border-b border-borderCol pb-2">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5" />
                  <span>Hotel</span>
                </div>
                <span className="text-lg">3 Nights | 23 Jan 2025 - 28 Jan 2025</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between">
                  <span className="rounded-full bg-red px-3 py-1 text-sm font-medium text-white">
                    30% Off
                  </span>
                  <span className="text-xl">LKR 334567</span>
                </div>
                <div className="flex justify-end items-end gap-2">
                  <span className="text-sm">Per person from</span>
                  <div className="font-bold text-2xl">LKR 234567</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vacation Details Section */}
        <div className="flex flex-wrap gap-2 lg:w-3/5">
          {vacationDetails.map((detail, index) => (
            <div key={index} className="px-4 py-1 rounded-lg text-sm border border-borderGray">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellcomSection;
