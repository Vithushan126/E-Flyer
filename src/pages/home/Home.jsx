import React from "react";
import SearchForm from "./SearchForm";
import TrendingAdventures from "./TrendingAdventures";
import CardAndCity from "./CardAndCity";
import HolidayPlaneCard from "./HolidayPlaneCard";
import TravelCategory from "../../components/common/travelcategory/TravelCategory";
import Explore from "../../components/common/explore/Explore";
import Feedback from "../../components/common/feedback/Feedback";
import BeachHoliday from "./BeachHoliday";
import SunnyHoliday from "./SunnyHoliday";
import HillCamping from "./HillCamping";
import HeroSection from "../../components/common/heroSection/HeroSection";

const Home = () => {
  return (
    <>
      <div className=" ">
        <HeroSection />
        <div className="px-2 w-full">
          <SearchForm />
        </div>
        <div className="space-y-20 mx-2">
          <TrendingAdventures />
          <CardAndCity />
          <HolidayPlaneCard />
          <BeachHoliday />
          <SunnyHoliday />
          <HillCamping />
          <TravelCategory />
          <Explore />
          <Feedback />
        </div>
      </div>
    </>
  );
};

export default Home;
