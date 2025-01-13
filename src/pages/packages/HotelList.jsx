import React from "react";
import CommonCard from "../../components/ui/commonCard/CommonCard";
import HotelImage1 from "../../assets/adventure/HotelImage1.svg";
import HotelImage2 from "../../assets/adventure/HotelImage2.svg";
import HotelImage3 from "../../assets/adventure/HotelImage3.svg";
import Icon1 from "../../assets/packages/icon_1.svg";
import Icon2 from "../../assets/packages/icon_2.svg";
import Icon3 from "../../assets/packages/icon_3.svg";
import Icon4 from "../../assets/packages/icon_4.svg";
import Icon5 from "../../assets/packages/icon_5.svg";
import Icon6 from "../../assets/packages/icon_6.svg";
import Icon7 from "../../assets/packages/icon_7.svg";
import Icon8 from "../../assets/packages/icon_8.svg";
import Icon9 from "../../assets/packages/icon_9.svg";
import Icon10 from "../../assets/packages/icon_10.svg";

// Icon sets for hotel cards
const iconsList = [
  [Icon1, Icon2, Icon3, Icon4, Icon5],
  [Icon6, Icon7, Icon8, Icon9, Icon10],
];

const HotelList = () => {
  // Generate 15 hotel data objects
  const hotels = Array.from({ length: 15 }, (_, index) => {
    const imageSet = [HotelImage1, HotelImage2, HotelImage3];
    const icons = iconsList[index % 2]; // Alternate between two sets of icons
    const rating = (index % 5) + 1; // Cycles ratings from 1 to 5
    const discount = index % 3 === 0 ? 30 : null; // Every 3rd hotel gets a discount

    return {
      id: index + 1,
      title: `Catalonia Riviera Maya ${index + 1}`,
      location: ["France", "Italy", "Spain"][index % 3], // Rotate between locations
      dates: "13 Feb 2025 - 15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: discount ? `LKR 334567` : "",
      discountedPrice: `LKR ${234567 - index * 1000}`, // Decreasing price for variation
      discount: discount,
      image: imageSet[index % 3], // Rotate between 3 images
      rating: rating,
      isTop: index % 2 === 0, // Mark every alternate hotel as "Top"
      icon: icons,
    };
  });

  return (
    <div className="w-[701px]">
      {/* Header Section */}
      <Header totalHotels={hotels.length} startingPrice="LKR 45678" />

      {/* Hotel Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 ">
        {hotels.map((hotel) => (
          <CommonCard adventure={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

// Header Component
const Header = ({ totalHotels, startingPrice }) => (
  <div className="flex justify-between items-center mb-8">
    <p className="text-gray font-medium text-lg">
      {totalHotels} Hotels From <span className="font-bold text-gray-800">{startingPrice}</span>
    </p>
    <SortDropdown />
  </div>
);

// Sort Dropdown Component
const SortDropdown = () => (
  <div className="flex flex-col items-start gap-4 ">
    {/* Sort By Label */}
    <div className="text-sm text-darkBlue font-inter font-normal leading-[19px]">
      Sort By
    </div>

    {/* Dropdown Container */}
    <div className="relative flex items-center border border-darkBlue rounded-full w-[194px] h-[40px] px-6">
      <span className="text-sm text-gray font-inter font-normal leading-[22px] flex-grow">
        Most Popular
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
);

export default HotelList;
