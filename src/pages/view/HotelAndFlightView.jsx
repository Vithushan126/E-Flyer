import React from "react";
import CardAndCity from "../home/CardAndCity";
import AdventureSearchForm from "../adventure/AdventureSearchForm";
import ArrowRight from "../../assets/view/ArrowRight.svg";
import ArrowLeft from "../../assets/view/ArrowLeft.svg";
import Booking from "./bookingSection/Booking";
import WellcomSection from "./WellcomSection";

const HotelAndFlightView = () => {
  return (
    <>
      {/* <div className="space-y-10 mx-2"> */}
      <div className="flex justify-center">
        <div className="max-w-[1100px] w-full space-y-10 mx-2 lg:mx-0 ">
          {/* form section */}
          {/* <div className="flex justify-center"> */}
          {/* <div className="max-w-[1100px] w-full "> */}
          <AdventureSearchForm />
          {/* </div> */}
          {/* </div> */}

          {/* <div className="flex justify-center"> */}
          <div className="flex justify-start items-center gap-2 text-xl text-smokyGray">
            <img src={ArrowLeft} alt="ArrowRight" className=" w-8 h-8" />
            All Offers : City name
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

          <CardAndCity title="Recommendation For you." />

          {/* <div className="flex justify-center"> */}
          <div className="flex justify-start items-center gap-2 text-xl text-smokyGray">
            All Offers : City name
            <img src={ArrowRight} alt="ArrowRight" className=" w-8 h-8" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default HotelAndFlightView;
