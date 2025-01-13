import React from "react";
import SearchBar from "../../pages/searchbar/SearchBar";
import FilterSidebar from "../../pages/packages/FilterSidebar";
import HotelList from "../../pages/packages/HotelList";
import { useState } from "react";

const App = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilterSidebar = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
        <SearchBar />
      {/* Title Section */}
      <div className="text-center sm:text-right mt-6 lg:text-left">
        <div className="text-xl md:text-2xl font-medium font-inter text-gray">
          Top city trips with Flight & Hotel
        </div>
        <div
          className="text-sm md:text-base font-normal font-inter text-darkBlue mt-4 cursor-pointer"
          onClick={toggleFilterSidebar}
        >
          Filter
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-8 md:gap-12">
        {/* Sidebar for Desktop and Full-Screen for Mobile */}
        <div
          className={`fixed md:static top-0 left-0 bg-white h-full w-full md:w-auto md:h-auto p-4 md:p-0 z-50 shadow-lg md:shadow-none transform ${
            isFilterVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0`}
        >
          <button
            className="md:hidden absolute top-4 right-4 text-gray-600 text-lg"
            onClick={toggleFilterSidebar}
          >
            ✕
          </button>
          <FilterSidebar />
        </div>

        {/* Hotel List */}
        <div className="flex-1 flex justify-center">
          <HotelList />
        </div>
      </div>
    </div>
  );
};

export default App;
