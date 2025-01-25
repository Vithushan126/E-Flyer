import React, { useState } from "react";

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    importantToYou: "",
    roomType: "",
    food: "",
    review: "",
    priceRange: 0,
    departureAirport: "",
    departureTime: "",
    stopover: "",
    flightDuration: "",
    familyVacation: "",
    beach: "",
    position: "",
    sports: "",
    beauty: "",
    hotelFacilities: "",
    theRegion: "",
    experienceInTheRegion: "",
  });

  const [submenus, setSubmenus] = useState({
    importantToYou: false,
    roomType: false,
    food: false,
    review: false,
    priceRange: false,
    departureAirport: false,
    departureTime: false,
    stopover: false,
    flightDuration: false,
    familyVacation: false,
    beach: false,
    position: false,
    sports: false,
    beauty: false,
    hotelFacilities: false,
    theRegion: false,
    experienceInTheRegion: false,
  });

  const toggleSubmenu = (key) => {
    setSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filterSections = [
    { key: "importantToYou", label: "What is important to you?" },
    { key: "roomType", label: "Room Type" },
    { key: "food", label: "Food" },
    { key: "review", label: "Review" },
    { key: "priceRange", label: "Price Range Per Person" },
    { key: "departureAirport", label: "Departure Airport" },
    { key: "departureTime", label: "Departure Time" },
    { key: "stopover", label: "Stopover" },
    { key: "flightDuration", label: "Flight Duration" },
    { key: "familyVacation", label: "Family Vacation" },
    { key: "beach", label: "Beach" },
    { key: "position", label: "Position" },
    { key: "sports", label: "Sports" },
    { key: "beauty", label: "Beauty" },
    { key: "hotelFacilities", label: "Hotel Facilities" },
    { key: "theRegion", label: "The Region" },
    { key: "experienceInTheRegion", label: "Experience In The Region" },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      {/* Main Title */}
      <div className="relative text-2xl font-medium font-inter left-[150px] mb-6 text-gray">
        Top city trips with Flight & Hotel
      </div>
      {/* Filter Subtitle */}
      <div className="relative text-base font-normal font-inter left-[171px] mb-6 text-darkBlue">
        Filter
      </div>

      {/* Filter Box */}
      <div className="relative bg-white border border-[#004679] rounded-[20px] p-4 h-auto shadow-md" style={{ width: "389px", boxSizing: "border-box", left: "150px" }}>
        {/* Filter Sections */}
        <div className="p-4">
          {filterSections.map((section, index) => (
            <React.Fragment key={section.key}>
              <div className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSubmenu(section.key)}
                >
                  <span className="font-inter font-medium text-sm text-[#5A5A5A]">
                    {section.label}
                  </span>
                  <span>{submenus[section.key] ? "^" : "⌄"}</span>
                </div>

                {submenus[section.key] && section.key === "departureAirport" && (
                  <div className="flex flex-col mt-4 gap-3">
                    <div className="flex items-center gap-4 bg-[#F5F5F6] p-3 rounded-2xl">
                      <span className="text-sm text-[#5A5A5A]">Colombo</span>
                    </div>
                    {/* Dynamic Filter Tags */}
                    <div className="flex gap-3 flex-wrap mt-4">
                      {["Top (45)", "Beach Holiday (34)", "Luxury (34)", "Sustainable Accommodation (45)"].map((departure, i) => (
                        <div
                          key={i}
                          className="p-2 gap-2 bg-white border border-[#DDDDDD] rounded-[5px] text-xs text-[#5A5A5A]"
                        >
                          {departure}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 flex-wrap mt-4">
                      <div className="bg-[#004679] text-white text-xs p-2 rounded-lg">
                        Family Vacation
                      </div>
                      <div className="bg-white border border-[#DDDDDD] text-[#5A5A5A] text-xs p-2 rounded-lg">
                        Winter Sports
                      </div>
                    </div>
                  </div>
                )}

                {submenus[section.key] && section.key === "departureTime" && (
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="text-sm text-[#5A5A5A]">Departure Time</div>
                    {/* Departure Time Range Filter Buttons */}
                    <div className="flex gap-3 flex-wrap mt-4">
                      {["Any", "18:00 - 00:00", "00:00 - 11:00", "11:00 - 18:00"].map((timeRange, i) => (
                        <div
                          key={i}
                          className="p-2 gap-2 bg-white border border-[#DDDDDD] rounded-[5px] text-xs text-[#5A5A5A]"
                        >
                          {timeRange}
                        </div>
                      ))}
                    </div>

                    <div className="text-sm text-[#5A5A5A] mt-4">Return Time</div>
                    {/* Return Time Range Filter Buttons */}
                    <div className="flex gap-3 flex-wrap mt-4">
                      {["Any", "18:00 - 00:00", "00:00 - 11:00", "11:00 - 18:00"].map((timeRange, i) => (
                        <div
                          key={i}
                          className="p-2 gap-2 bg-white border border-[#DDDDDD] rounded-[5px] text-xs text-[#5A5A5A]">
                          {timeRange}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {submenus[section.key] && section.key === "stopover" && (
                  <div className="flex flex-col gap-4 mt-2">
                    {/* Departure Time Range Filter Buttons */}
                    <div className="flex gap-3 flex-wrap mt-4">
                      {["Any (45)", "Direct Flight (34) ", "Max . 1 Stop (45) ", "Max . 2 Stop (34)  "].map((stopover, i) => (
                        <div
                          key={i}
                          className="p-2 gap-2 bg-white border border-[#DDDDDD] rounded-[5px] text-xs text-[#5A5A5A]">
                          {stopover}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Add border except for the last filter */}
              {index < filterSections.length - 1 && (
                <hr className="border-[#C5C5C5] mt-6" style={{ borderWidth: "0.5px" }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
