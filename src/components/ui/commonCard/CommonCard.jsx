import React from "react";
import { BedDouble, Heart, Star, ThumbsUp } from "lucide-react";
import { Tooltip } from "react-tooltip";
import CardIcon1 from "../../../assets/adventure/CardIcon1.svg";
import CardIcon2 from "../../../assets/adventure/CardIcon2.svg";
import CardIcon3 from "../../../assets/adventure/CardIcon3.svg";
import CardIcon4 from "../../../assets/adventure/CardIcon4.svg";
import CardIcon5 from "../../../assets/adventure/CardIcon5.svg";

const icons = [CardIcon1, CardIcon2, CardIcon3, CardIcon4, CardIcon5];

const CommonCard = ({ adventure, small }) => {
  console.log(small);

  return (
    <div
      key={adventure?.id}
      className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg group"
    >
      <div className="relative h-[329px]">
        {/* Background Image */}
        <img
          src={adventure?.image}
          alt={adventure?.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 group-hover:bg-black group-hover:bg-opacity-20">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-1 py-2 lg:px-4 lg:py-4">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-black/30 px-3 py-1 text-white text-sm font-medium flex flex-row gap-x-4">
                <BedDouble />
                Hotel
              </div>
              {adventure?.isTop && (
                <span className="rounded-full bg-orange px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2">
                  <ThumbsUp />
                  Top
                </span>
              )}
              {adventure?.discount && (
                <span className="rounded-full bg-red  px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2">
                  30% Off
                </span>
              )}
              <Heart
                className="h-6 w-6 text-white cursor-pointer"
                data-tooltip-id="watchlist-tooltip"
                data-tooltip-content="Add to Watch List"
              />
            </div>

            <div className="flex">
              {[...Array(adventure?.rating)].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-white text-white" />
              ))}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative -bottom-11 w-full px-6 pb-4 text-white bg-black bg-opacity-10 
                       transform translate-y-20 opacity-80 group-hover:translate-y-0 group-hover:opacity-100
                       transition-all duration-700 ease-in-out">
            <h2 className=" text-xl font-bold border-b-2 border-white border-opacity-20">
              {adventure?.title}
            </h2>
            <p className=" text-xl">{adventure?.location}</p>
            <div className="flex flex-wrap items-center justify-between ">
              {/* Left Section */}
              <div className="space-y-0 w-1/2">
                <p className="text-xs text-nowrap">
                  {adventure?.dates} <br /> {adventure?.duration}
                </p>
                <p className="text-xs">{adventure?.package}</p>
              </div>

              {/* Right Section */}
              <div className="w-1/2 text-right">
                {/* On Mobile, "Per person from" appears above prices */}
                <div className="block lg:hidden">
                  <p className="text-sm ">Per person from</p>
                </div>

                {/* Original Price */}
                <div>
                  <span className="text-lg text-right line-through">
                    {adventure?.originalPrice}
                  </span>
                </div>

                {/* On Desktop, "Per person from" stays inline with discounted price */}
                <div className="flex justify-end items-center space-x-4 ">
                  <p className="text-sm hidden lg:block ">
                    Per person from
                  </p>
                  <p className="text-xl font-semibold text-nowrap">
                    {adventure?.discountedPrice}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Shown on Hover */}
            <div className="my-2 space-y-2 hidden duration-500 group-hover:block">
              <div className="w-full flex justify-center">
                <button className="w-3/4 rounded-3xl bg-[#024577] py-3 text-center font-semibold text-white transition-colors bg-opacity-40 hover:scale-105">
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
      {/* tooltip */}
      <Tooltip
        id="watchlist-tooltip"
        place="top"
        variant="light"
        className="bg-black text-white rounded p-1 text-9xl"
      />
    </div>
  );
};

export default CommonCard;
