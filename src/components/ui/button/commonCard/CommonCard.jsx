import React from "react";
import { BedDouble, Heart, Star, ThumbsUp } from "lucide-react";
import HotelImage1 from "../../../../assets/adventure/HotelImage1.svg";
import CardIcon1 from "../../../../assets/adventure/CardIcon1.svg";
import CardIcon2 from "../../../../assets/adventure/CardIcon2.svg";
import CardIcon3 from "../../../../assets/adventure/CardIcon3.svg";
import CardIcon4 from "../../../../assets/adventure/CardIcon4.svg";
import CardIcon5 from "../../../../assets/adventure/CardIcon5.svg";

const icons = [CardIcon1, CardIcon2, CardIcon3, CardIcon4, CardIcon5];

const CommonCard = () => {
  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg group">
      <div className="relative h-96">
        {/* Background Image */}
        <img
          src={HotelImage1}
          alt="Hotel View"
          className="h-full w-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-black/30 px-3 py-1 text-white text-sm font-medium flex flex-row gap-x-4">
                <BedDouble />
                Hotel
              </div>
              <span className="rounded-full bg-orange px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2">
                <ThumbsUp />
                Top
              </span>
              <span className="rounded-full bg-red  px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2">
                30% Off
              </span>
              <Heart className="h-6 w-6 text-white" />
            </div>

            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-white text-white" />
              ))}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 w-full px-6 pb-4 text-white bg-black bg-opacity-50">
            <h2 className=" text-4xl font-bold border-b-2 border-white border-opacity-20">
              Catalonia Riviera Maya
            </h2>
            <p className=" text-2xl">France</p>
            <div className="flex flex-wrap items-center justify-between ">
              <div className="space-y-0">
                <p className="text-lg">
                  13 Feb 2025-15 Feb 2025 | 3 nights - 2 Adults
                </p>
                <p className="text-lg">All Inclusive | Including Transfer</p>
                <div className="flex gap-4 pt-1">
                  {/* Icons */}
                  {icons.map((icon) => (
                    <img
                      key={icon}
                      src={icon}
                      alt="icon"
                      className="h-10 w-10 rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="right-0 bottom-0">
                <div className="flex justify-end">
                  <span className="text-xl  text-right line-through">
                    LKR 334567
                  </span>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <p className="text-sm">Per person from</p>
                  <p className="text-2xl font-bold">LKR 234567</p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Shown on Hover */}
            <div className="my-2 space-y-2 hidden transition-opacity duration-300 group-hover:block">
              <div className="w-full flex justify-center">
                <button className="w-1/2 rounded-3xl bg-[#024577] py-3 text-center font-semibold text-white transition-colors bg-opacity-40 hover:scale-105">
                  Book Now
                </button>
              </div>
              <button className="w-full  text-center font-semibold text-white underline hover:scale-105">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
