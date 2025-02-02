import React, { useState } from "react";
import AllOffer from "../view/bookingSection/AllOffer";
import PriceOverview from "../view/bookingSection/PriceOverview";
import Description from "../view/bookingSection/Description";
import ClimateRegion from "../view/bookingSection/ClimateRegion";
import TourAllOffers from "./TourAllOffers";
import Review from "../view/bookingSection/Review";

const tabs = [
  { id: "allOffer", label: "All offer" },
  { id: "priceOverview", label: "Price Overview" },
  { id: "description", label: "Description" },
  { id: "review", label: "Review" },
  { id: "climateRegion", label: "Climate + Region" },
];

const TourBooking = () => {
  const [activeTab, setActiveTab] = useState("allOffer");

  const TabContent = ({ tabId }) => {
    switch (tabId) {
      case "allOffer":
        return <TourAllOffers />;
      case "priceOverview":
        return <PriceOverview />;
      case "description":
        return <Description />;
      case "review":
        return <Review />;
      case "climateRegion":
        return <ClimateRegion />;
      default:
        return <TourAllOffers />;
    }
  };
  return (
    <div className=" flex flex-col space-y-10">
      {/* Tab Navigation */}
      <div className=" border border-smokeGray rounded-2xl p-2 lg:p-4 w-full">
        <div className="  flex flex-row justify-between text-gray overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-8 text-nowrap rounded-3xl w-fit font-medium flex items-center cursor-pointer text-smokyGray hover:text-darkBlue ${
                activeTab === tab.id ? "text-white bg-orange" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="">
        <TabContent tabId={activeTab} />
      </div>
    </div>
  );
};

export default TourBooking;
