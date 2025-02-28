import React, { useEffect, useState } from "react";
import SearchForm from "../home/searchform/SearchForm";
import HotelList from "../TopCityPackage/HotelList";
import FlightAvailableFilter from "./FlightAvailableFilter";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import FlightList from "./FlightList";
import BookingFlight from "./BookingFlight";
import { useSelector } from "react-redux";

const FlightAvailabityView = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { flights, dep_date, des_date, loading, error } = useSelector(
    (state) => state.flightDetails
  );

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full max-w-[1100px] px-4 lg:px-0 space-y-8">
        {/* Search Form */}
        <section id="search-form" className="pt-6 flex">
          <SearchForm />
        </section>

        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10">
          {/* Filter Section */}
          <div className="hidden lg:flex flex-col space-y-4">
            <div className="text-left">
              <div className="text-sm md:text-base text-darkBlue mt-2 cursor-pointer ml-4">
                Filter
              </div>
            </div>
            <FlightAvailableFilter />
          </div>

          {/* Mobile & Tablet Filter Button */}
          <div className="flex lg:hidden justify-between items-center">
            <div
              onClick={() => setIsFilterOpen(true)}
              className="text-sm md:text-base text-darkBlue font-medium cursor-pointer"
            >
              Show Filters
            </div>
          </div>

          {/* Filter Modal for Mobile/Tablet */}
          {isFilterOpen && (
            <div className="fixed inset-0 h-screen bg-black bg-opacity-85 z-50 flex items-center justify-center">
              <FlightAvailableFilter setIsFilterOpen={setIsFilterOpen} />
            </div>
          )}

          {/* Flight List Section */}
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-row justify-between items-center md:px-4">
              <div className="text-sm md:text-base mt-2 cursor-pointer text-smokyGray">
                Cheapest deals by the number of stops and airlines
              </div>
              <div className="flex flex-row text-smokyGray">
                <ChevronLeft />
                <ChevronRight />
              </div>
            </div>

            <FlightList />

            <div className="text-sm md:text-base px-4 text-smokyGray font-medium">
              {flights.length} Offers Found
            </div>

            {/* {flightData?.length > 0 && ( */}
            <BookingFlight />
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAvailabityView;
