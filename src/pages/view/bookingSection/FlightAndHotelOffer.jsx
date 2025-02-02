import { ChevronRight, Heart } from "lucide-react";
import React from "react";
import { Tooltip } from "react-tooltip";
import Line from "../../../assets/view/Line.svg";
import { useNavigate } from "react-router-dom";

const FlightAndHotelOffer = ({ flightDetails }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/bookingStepper");
  };

  return (
    <div div className="flex flex-col space-y-10">
      {flightDetails?.map((flightDetail, index) => (
        <div
          key={index}
          className=" rounded-2xl shadow-md border border-darkBlue p-6 text-smokyGray space-y-4"
        >
          <div className="flex items-center justify-between font-medium border-b border-border pb-2">
            <span>16 Oct 2025 - 21 Nov 2025 | 3 nights | 2 Adults</span>
            <Heart
              className="h-6 w-6 text-darkBlue  cursor-pointer stroke-[1px]"
              data-tooltip-id="watchlist-tooltip"
              data-tooltip-content="Add to Watch List"
            />
          </div>

          <div className="flex flex-col space-y-4 mr-4">
            {flightDetail?.flights?.map((detail, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center  w-full "
              >
                <img
                  src={detail?.logo}
                  alt={detail?.name}
                  className="w-[70px] h-[70px] border border-border rounded-full p-2"
                />
                <div className="flex flex-col items-center">
                  <span className=" ">
                    {detail?.dat} | {detail?.flightStartDate}
                  </span>
                  <span className=" font-medium">{detail?.startTime}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs ">{detail?.duration}</span>
                  <img src={Line} alt="Line" className="" />
                  <span className="text-xs">{detail?.stops}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className=" ">
                    {detail?.day} | {detail?.flightEndDate}
                  </span>
                  <span className=" font-medium">{detail?.endTime}</span>
                </div>
              </div>
            ))}
          </div>

          {flightDetail?.alternativeFlightAvailable && (
            <div className="flex justify-end items-center">
              <a
                href="#"
                className="text-darkBlue hover:text-blue-600  text-lg"
              >
                Alternative Flight
              </a>
              <ChevronRight className="h-8 w-8  text-darkBlue" />
            </div>
          )}

          <div className="">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-start gap-4">
                <div className="px-2 py-1 rounded-md text-sm transition-colors border border-borderGray h-fit">
                  Including Transfer
                </div>
                <div className="px-2 py-1 rounded-md text-sm transition-colors border border-borderGray h-fit">
                  Half board
                </div>
              </div>
              <p className="text-sm">
                other rooms and meal plans are available in the next step
              </p>
            </div>

            <div className="flex flex-row justify-end space-x-4">
              <div className="flex flex-col justify-between text-right">
                <span className="text-smokyGray text-xl font-medium ">
                  {flightDetail?.totalPrice}
                </span>
                <span className="">Per person {flightDetail?.price}</span>
              </div>
              <button
                className="bg-darkBlue text-2xl hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-2xl"
                onClick={handleBooking}
              >
                Book
              </button>
            </div>
          </div>
          {/* tooltip */}
          <Tooltip
            id="watchlist-tooltip"
            place="top"
            variant="dark"
            className="bg-black text-white rounded p-1 text-9xl"
          />
        </div>
      ))}
    </div>
  );
};

export default FlightAndHotelOffer;
