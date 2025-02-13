import React from "react";
import AdventureSearchForm from "../adventure/AdventureSearchForm";
import ArrowRight from "../../assets/view/ArrowRight.svg";
import ArrowLeft from "../../assets/view/ArrowLeft.svg";
import WellcomSection from "./WellcomSection";
import Booking from "./bookingSection/Booking";


const HotelAndFlightView = () => {
  return (
    <>
      {/* <div className="space-y-10 mx-2"> */}
      <div className="flex justify-center px-4 md:px-8">
        <div className="max-w-screen-lg w-full space-y-10">
          {/* form section */}
          {/* <div className="flex justify-center"> */}
          {/* <div className="max-w-[1100px] w-full "> */}
          <AdventureSearchForm />
          {/* </div> */}
          {/* </div> */}
          {/* <div className="flex justify-center"> */}
          <div className="flex items-center gap-2 text-xl text-smokyGray">
            <img src={ArrowLeft} alt="ArrowRight" className="w-6 md:w-8" />
            <span>All Offers : City name</span>
          </div>
          {/* </div> */}
          {/* welcome section */}
          {/* <div className="flex justify-center"> */}
          {/* <div className="max-w-[1100px] w-full "> */}
          <WellcomSection />
          {/* </div> */}
          {/* </div> */}
          {/* booking section */}
          <div className="flex justify-center">
            <div className="max-w-[1100px] w-full">
              <Booking />
            </div>
          </div>
          {/* <div className="flex justify-center"> */}
          <div className="flex items-center gap-2 text-xl text-smokyGray">
            <span>All Offers : City name</span>
            <img src={ArrowRight} alt="ArrowRight" className="w-6 md:w-8" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default HotelAndFlightView;
