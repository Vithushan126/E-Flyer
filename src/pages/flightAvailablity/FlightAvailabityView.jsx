import React, { useEffect, useState } from "react";
import SearchForm from "../home/searchform/SearchForm";
import HotelList from "../TopCityPackage/HotelList";
import FlightAvailableFilter from "./FlightAvailableFilter";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import FlightList from "./FlightList";
import BookingFlight from "./BookingFlight";

import * as API from "../../../src/services/api/Api";

const FlightAvailabityView = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  console.log(isFilterOpen);

  const [flightData, setFlightData] = useState([]);
  const [formattedDepartureDate, setFormattedDepartureDate] = useState("");
  const [formattedReturnDate, setFormattedReturnDate] = useState("");
  console.log(flightData);

  const fetchFlightData = async (dep_date, des_date, dep_apt, des_apt) => {
    try {
      const response = await API.GetFlightAvailablity(
        dep_date,
        des_date,
        dep_apt,
        des_apt
      );
      console.log("response", response.data);
      setFlightData(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      console.log("hello");
    }
  };

  const handleFlightSubmit = (values) => {
    console.log("Received flight form values in ParentComponent:", values);
    const { departureDate, returnDate, departure, destination } = values;

    const formattedDepartureDate = departureDate.split("T")[0];
    const formattedReturnDate = returnDate.split("T")[0];

    setFormattedDepartureDate(formattedDepartureDate);
    setFormattedReturnDate(formattedReturnDate);

    // Call fetchFlightData with form values
    fetchFlightData(
      formattedDepartureDate,
      formattedReturnDate,
      // "LHR",
      // "FRA"
      departure,
      destination
    );
  };

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full max-w-[1100px] px-4 lg:px-0 space-y-8">
        {/* Search Form */}
        <section id="search-form" className="pt-6 flex">
          <SearchForm handleFlightSubmit={handleFlightSubmit} />
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
              3 Offers Found
            </div>

            {/* {flightData?.length > 0 && ( */}
            <BookingFlight
              flightData={flightData}
              formattedDepartureDate={formattedDepartureDate}
              formattedReturnDate={formattedReturnDate}
            />
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightAvailabityView;
