import React, { useState } from "react";
import { MapPin, Calendar, Search, BedDouble } from "lucide-react";

const SearchBar = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const destinations = ["New York", "Los Angeles", "San Francisco", "Chicago"]; // Example destinations
  const values = { rooms: 1, persons: 2 }; // Example values for rooms and persons

  const formatDate = (date) => (date ? date.toLocaleDateString() : "Select dates");

  return (
    <div
      className="relative bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 p-6"
      style={{
        width: "1140px",
        height: "94.47px",
        left: "calc(50% - 1140px / 2)",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
        {/* Destination */}
        <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] bg-backgroundColor rounded-[20px]">
          <MapPin className="text-smokyGray w-[24.24px] h-[28px]" />
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
              Destination
            </span>
            <select
              className="text-smokyGray font-inter font-normal text-base leading-[19px] focus:outline-none focus:ring-2 focus:ring-primaryColor bg-transparent"
              defaultValue=""
            >
              <option value="">Select destination</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px]">
          <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
            <Calendar className="text-smokyGray" />
          </div>
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
              Travel Period
            </span>
            <button
              type="button"
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="text-smokyGray font-inter font-normal text-base leading-[19px]"
            >
              {formatDate(dateRange.startDate)} - {formatDate(dateRange.endDate)}
            </button>
          </div>
          {showDatePicker && (
            <div className="absolute z-50 mt-2">
              {/* DatePicker component can be added here */}
            </div>
          )}
        </div>

        {/* Rooms & Travelers */}
        <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[262px] h-[57px] bg-backgroundColor rounded-[20px]">
          <BedDouble className="text-smokyGray w-[36px] h-[36px]" />
          <div className="flex flex-col items-start gap-[3px]">
            <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
              Rooms & Travellers
            </span>
            <span className="text-smokyGray font-inter font-normal text-base leading-[19px]">
              {values.rooms} Rooms, {values.persons} Person
            </span>
          </div>
        </div>

        {/* Search Button */}
        <div className="relative flex items-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-4 px-5 py-[14px] w-[174px] h-[57px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
          >
            <Search className="w-[28px] h-[28px]" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
