import React, { useState } from "react";
import ClimateRegion from "./ClimateRegion";
import Review from "./Review";
import Description from "./Description";
import PriceOverview from "./PriceOverview";
import AllOffer from "./AllOffer";

const tabs = [
  { id: "allOffer", label: "All offer" },
  { id: "priceOverview", label: "Price Overview" },
  { id: "description", label: "Description" },
  { id: "review", label: "Review" },
  { id: "climateRegion", label: "Climate + Region" },
];

const Booking = () => {
  const [activeTab, setActiveTab] = useState("allOffer");

  const TabContent = ({ tabId }) => {
    switch (tabId) {
      case "allOffer":
        return <AllOffer />;
      case "priceOverview":
        return <PriceOverview />;
      case "description":
        return <Description />;
      case "review":
        return <Review />;
      case "climateRegion":
        return <ClimateRegion />;
      default:
        return <AllOffer />;
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

export default Booking;
