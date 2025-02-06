import React, { useState } from "react";
import HotelList from "../TopCityPackage/HotelList";
import TrendingFilter from "../trendingadventure/TrendingFilter";
import SearchForm from "../home/searchform/SearchForm";
import AdventureWorld from "../adventure/soloAdventure/AdventureWorld";

const Destinations = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterSidebar = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <AdventureWorld />

        {/* Search Form */}
        <section id="search-form" className="pt-6">
          <SearchForm />
        </section>

        {/* Filter and Hotel List Section */}
        <div className="flex flex-col space-y-6 mt-6">
          {/* Filter Button for Mobile */}
          <div className="text-left">
            <button
              className="text-sm md:text-base text-darkBlue underline"
              onClick={toggleFilterSidebar}
            >
              Filter
            </button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* Sidebar */}
            <div
              className={`fixed inset-0 bg-white p-6 z-50 shadow-md transform ${
                isFilterVisible ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out lg:static lg:shadow-none lg:translate-x-0 lg:w-1/3`}
            >
              <button
                className="md:hidden absolute top-4 right-5 text-gray-600 text-xl"
                onClick={toggleFilterSidebar}
              >
                ✕
              </button>
              <TrendingFilter />
            </div>

            {/* Hotel List */}
            <div className="flex-1">
              <HotelList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
