import React from "react";
import SearchForm from "../home/searchform/SearchForm";
import HotelList from "../TopCityPackage/HotelList";
import FlightAvailableFilter from "./FlightAvailableFilter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FlightList from "./FlightList";
import BookingFlight from "./BookingFlight";

const FlightAvailabityView = () => {
  return (
    <div className="w-full flex justify-center  py-8">
      <div className="w-full max-w-[1100px] px-4 lg:px-0 space-y-8">
        {/* Search Form */}
        <section id="search-form" className="pt-6 flex">
          <SearchForm />
        </section>

        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10">
          <div className="flex flex-col space-y-4">
            <div className="text-left ">
              <div className="text-sm md:text-base text-darkBlue mt-2 cursor-pointer ml-4 ">
                Filter
              </div>
            </div>

            <FlightAvailableFilter />
          </div>

          <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-row justify-between items-center  md:px-4 ">
              <div className="text-sm md:text-base  mt-2 cursor-pointer text-smokyGray ">
                Cheapest deals by the number of stops and airlines
              </div>
              <div className="flex flex-row text-smokyGray">
                <ChevronLeft />
                <ChevronRight />
              </div>
            </div>

            <FlightList />

            <div className="text-sm md:text-base px-4 text-smokyGray font-medium ">
              3 Offers Found
            </div>

            <BookingFlight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAvailabityView;
