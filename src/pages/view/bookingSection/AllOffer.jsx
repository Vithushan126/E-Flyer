import React, { useState } from "react";
import OfferFilter from "./OfferFilter";
import CommonCard from "../../../components/ui/commonCard/CommonCard";

import HotelImage1 from "../../../assets/adventure/HotelImage1.svg";
import HotelImage2 from "../../../assets/adventure/HotelImage2.svg";
import HotelImage3 from "../../../assets/adventure/HotelImage3.svg";
import HotelImage4 from "../../../assets/adventure/HotelImage4.svg";
import HotelImage5 from "../../../assets/adventure/HotelImage5.svg";
import AllOfferSearchForm from "./AllOfferSearchForm";
import FlightAndHotelOffer from "./FlightAndHotelOffer";
import HotelOffer from "./HotelOffer";

const adventures = [
  {
    id: 1,
    title: "Catalonia Riviera Maya",
    location: "France",
    dates: "13 Feb 2025-15 Feb 2025",
    duration: "3 nights - 2 Adults",
    package: "All Inclusive | Including Transfer",
    originalPrice: "LKR 334567",
    discountedPrice: "LKR 234567",
    discount: "30% Off",
    image: HotelImage1,
    rating: 4,
    isTop: true,
  },
  {
    id: 2,
    title: "Catalonia Riviera Maya",
    location: "France",
    dates: "13 Feb 2025-15 Feb 2025",
    duration: "3 nights - 2 Adults",
    package: "All Inclusive | Including Transfer",
    originalPrice: "",
    discountedPrice: "LKR 234567",
    discount: "",
    image: HotelImage2,
    rating: 4,
    isTop: true,
  },
  {
    id: 3,
    title: "Catalonia Riviera Maya",
    location: "France",
    dates: "13 Feb 2025-15 Feb 2025",
    duration: "3 nights - 2 Adults",
    package: "All Inclusive | Including Transfer",
    originalPrice: "",
    discountedPrice: "LKR 234567",
    discount: "",
    image: HotelImage3,
    rating: 0,
    isTop: false,
  },
  {
    id: 4,
    title: "",
    location: "Rome",
    dates: "13 Feb 2025-15 Feb 2025",
    duration: "",
    package: "Economy from",
    originalPrice: "",
    discountedPrice: "LKR 234567",
    discount: "",
    image: HotelImage4,
    rating: 0,
    isTop: false,
  },
  {
    id: 5,
    title: "",
    location: "Spain",
    dates: "13 Feb 2025-15 Feb 2025",
    duration: "",
    package: "Economy from",
    originalPrice: "",
    discountedPrice: "LKR 234567",
    discount: "",
    image: HotelImage5,
    rating: 0,
    isTop: false,
  },
];

const AllOffer = () => {
  const [offerTab, setOfferTab] = useState(0);

  const OfferTabContent = ({ tabId }) => {
    switch (tabId) {
      case 0:
        return <FlightAndHotelOffer />;
      case 1:
        return <HotelOffer />;
      default:
        return <FlightAndHotelOffer />;
    }
  };
  return (
    <div className="">
      <div className="flex flex-col">
        {/* sorting section */}
        <div className="flex justify-end items-center z-50">
          <div className="flex flex-col space-y-2">
            <label className="pl-4 text-darkBlue">Short By</label>
            <select className="border border-darkBlue text-darkBlue rounded-full px-4 py-1">
              <option>Departure Airport</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full  lg:space-x-10 ">
          {/* filter section */}
          <div className="flex flex-col w-full lg:w-96 -mt-8 ">
            <OfferFilter />
          </div>

          {/* card section */}
          <div className="flex flex-col space-y-4 lg:space-y-10 flex-grow">
            <div className="w-full space-y-10">
              <AllOfferSearchForm setSearchStatus={setOfferTab} />
              <div className="">
                <OfferTabContent tabId={offerTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOffer;
