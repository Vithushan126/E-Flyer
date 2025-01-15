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
  const hotels = Array.from({ length: 15 }, (_, index) => {
    const imageSet = [HotelImage1, HotelImage2, HotelImage3];
    const icons = iconsList[index % 2]; // Alternate between two sets of icons
    const rating = (index % 5) + 1; // Cycles ratings from 1 to 5
    const discount = index % 3 === 0 ? 30 : null; // Every 3rd hotel gets a discount

    return {
      id: index + 1,
      title: `Catalonia Riviera Maya ${index + 1}`,
      location: ["France", "Italy", "Spain"][index % 3],
      dates: "13 Feb 2025 - 15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: discount ? `LKR 334567` : "",
      discountedPrice: `LKR ${234567 - index * 1000}`, // Decreasing price for variation
      discount: discount,
      image: imageSet[index % 3],
      rating: rating,
      isTop: index % 2 === 0,
      icon: icons,
    };
  });

  return (
    <div className="w-full space-y-6">
      {/* Header Section */}
      <Header totalHotels={hotels.length} startingPrice="LKR 45678" />

      {/* Hotel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {hotels.map((hotel) => (
          <CommonCard adventure={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

const Header = ({ totalHotels, startingPrice }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
    <p className="text-gray-700 font-medium text-lg">
      {totalHotels} Hotels From <span className="font-bold text-gray-900">{startingPrice}</span>
    </p>
    <SortDropdown />
  </div>
);

const SortDropdown = () => (
  <div className="flex flex-col items-start space-x-2 space-y-2 ">
    <label htmlFor="sort" className="text-darkBlue text-sm">
      Sort By
    </label>
    <select
      id="sort"
      className="border border-darkBlue rounded-full px-4 py-1 text-sm text-gray-700 focus:outline-none focus:ring"
    >
      <option>Most Popular</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Top Rated</option>
    </select>
  </div>
);

export default HotelList;
