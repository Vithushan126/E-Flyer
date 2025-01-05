import React from "react";
import SearchForm from "./SearchForm";
import TrendingAdventures from "./TrendingAdventures";
import CardAndCity from "./CardAndCity";
import HolidayPlaneCard from "./HolidayPlaneCard";
import TravelCategory from "../../components/common/travelcategory/TravelCategory";
import Explore from "../../components/common/explore/Explore";
import Feedback from "../../components/common/feedback/Feedback";

const Home = () => {
  return (
    <>
      <div className="-mt-6 lg:-mt-24 relative z-50 space-y-20 px-2 ">
        <SearchForm />
        <TrendingAdventures />
        <CardAndCity />
        <HolidayPlaneCard />
        <TravelCategory />
        <Explore />
        <Feedback />
      </div>
    </>
  );
};

export default Home;
