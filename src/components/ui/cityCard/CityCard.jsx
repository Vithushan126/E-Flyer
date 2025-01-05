import React from "react";
import { ChevronRight, Sun } from "lucide-react";

const CityCard = ({ cardCity }) => {
  return (
    <div
      key={cardCity?.id}
      className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg group"
    >
      <div className="relative h-[278px]">
        {/* Background Image */}
        <img
          src={cardCity?.image}
          alt={cardCity?.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 group-hover:bg-black group-hover:bg-opacity-20">
          {/* Top Bar */}
          <div className="flex items-center justify-end px-1 py-2 lg:px-4 lg:py-4">
            <div className="flex flex-row gap-1 items-center text-white">
              <div className="text-xs">Pp from </div>
              <div className="">{cardCity?.title} </div>
              <ChevronRight className="h-5 w-5  text-white" />
            </div>
          </div>

          {/* bottom section */}
          <div className="absolute bottom-0 w-full px-6 pb-4 text-white bg-black bg-opacity-10 space-y-2">
            <h2 className=" text-xl font-bold border-b-2 border-white border-opacity-20">
              {cardCity?.location}
            </h2>
            <p className="text-xs flex flex-row items-center gap-x-1">
              <span>{cardCity?.country}</span>
              <span>({cardCity?.offers} offers)</span>
            </p>
            <p className=" text-xs flex flex-row items-center space-x-2">
              <Sun className="w-6 h-4" />
              <span>{cardCity?.temparature} °C</span>
            </p>
            <p className="text-xs text-nowrap">{cardCity?.duration}</p>

            {/* Action Buttons - Shown on Hover */}
            {/* <div className="my-2 space-y-2 hidden duration-500 group-hover:block">
              <div className="w-full flex justify-center">
                <button className="w-3/4 rounded-3xl bg-[#024577] py-3 text-center font-semibold text-white transition-colors bg-opacity-40 hover:scale-105">
                  Book Now
                </button>
              </div>
              <button className="w-full  text-center font-semibold text-white underline hover:scale-105">
                Discover
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
