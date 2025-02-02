import React, { useState } from "react";

import EmiratesLogo from "../../assets/view/Emirates-Logo.svg";
import QatarAirwaysLogo from "../../assets/view/Qatar_Airways_Logo.svg";
import FlydubaiLogo from "../../assets/view/Flydubai-Logo.svg";
import EdelweissLogo from "../../assets/view/Edelweiss-Logo.svg";
import OfferFilter from "../view/bookingSection/OfferFilter";
import AllOfferSearchForm from "../view/bookingSection/AllOfferSearchForm";
import FlightAndHotelOffer from "../view/bookingSection/FlightAndHotelOffer";
import HotelFilter from "../view/bookingSection/HotelFilter";
import CardAndCity from "../home/CardAndCity";

const flightDetails = [
  {
    id: 1,
    nights: 3,
    adults: 2,
    startDate: "16 Oct 2025",
    endDate: "21 Nov 2025",
    price: 160000,
    totalPrice: 320000,
    alternativeFlightAvailable: true,
    flights: [
      {
        name: "QatarAirways",
        logo: QatarAirwaysLogo,
        startTime: "20 : 00 ZRH",
        endTime: "20 : 00 ZRH",
        flightStartDate: "16 Oct 2025",
        flightEndDate: "16 Oct 2025",
        day: "Sat",
        duration: "9h 30m",
        stops: "1 stop at IST",
      },
      {
        name: "Emirates",
        logo: EmiratesLogo,
        startTime: "20 : 00 ZRH",
        endTime: "20 : 00 ZRH",
        flightStartDate: "16 Oct 2025",
        flightEndDate: "16 Oct 2025",
        day: "Sat",
        duration: "9h 30m",
        stops: "Direct",
      },
    ],
  },
  {
    id: 1,
    nights: 3,
    adults: 2,
    startDate: "16 Oct 2025",
    endDate: "21 Nov 2025",
    price: 160000,
    totalPrice: 320000,
    alternativeFlightAvailable: true,
    flights: [
      {
        name: "Flydubai",
        logo: FlydubaiLogo,
        startTime: "20 : 00 ZRH",
        endTime: "20 : 00 ZRH",
        flightStartDate: "16 Oct 2025",
        flightEndDate: "16 Oct 2025",
        day: "Sat",
        duration: "9h 30m",
        stops: "1 stop at IST",
      },
      {
        name: "Edelweiss",
        logo: EdelweissLogo,
        startTime: "20 : 00 ZRH",
        endTime: "20 : 00 ZRH",
        flightStartDate: "16 Oct 2025",
        flightEndDate: "16 Oct 2025",
        day: "Sat",
        duration: "9h 30m",
        stops: "Direct",
      },
    ],
  },
];

const hotelDetails = [
  {
    id: 1,
    nights: 3,
    adults: 2,
    startDate: "16 Oct 2025",
    endDate: "21 Nov 2025",
    price: 160000,
    totalPrice: 320000,
  },
  {
    id: 1,
    nights: 3,
    adults: 2,
    startDate: "16 Oct 2025",
    endDate: "21 Nov 2025",
    price: 160000,
    totalPrice: 320000,
  },
];

const TourAllOffers = () => {
  const [offerTab, setOfferTab] = useState(0);

  const OfferTabContent = ({ tabId }) => {
    switch (tabId) {
      case 0:
        return <FlightAndHotelOffer flightDetails={flightDetails} />;
      case 1:
        return <FlightAndHotelOffer flightDetails={hotelDetails} />;
      default:
        return <FlightAndHotelOffer flightDetails={flightDetails} />;
    }
  };
  return (
    <div className="">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col lg:flex-row w-full  lg:space-x-10 ">
          {/* filter section */}
          <div className="flex flex-col w-full lg:w-96">
            {offerTab === 0 && <OfferFilter />}
            {offerTab === 1 && <HotelFilter />}
          </div>

          {/* card section */}
          <div className="flex flex-col space-y-4  flex-grow">
            {/* sorting section */}
            <div className="flex justify-end items-center z-50">
              <div className="flex flex-col space-y-2">
                <label className="pl-4 text-darkBlue">Short By</label>
                <select className="border border-darkBlue text-darkBlue rounded-full px-4 py-1">
                  <option>Departure Airport</option>
                </select>
              </div>
            </div>
            <div className="w-full space-y-10">
              <AllOfferSearchForm setSearchStatus={setOfferTab} />
              <div className="">
                <OfferTabContent tabId={offerTab} />
              </div>
            </div>
          </div>
        </div>
        <CardAndCity title="Recommendation For you." />
      </div>
    </div>
  );
};

export default TourAllOffers;
