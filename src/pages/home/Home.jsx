import React from "react";
import SearchForm from "./searchform/SearchForm";
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
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="">
        <HeroSection />
        <div className="space-y-20 pt-16 mx-2">
          <TrendingAdventures
            title={t("trandingAdventure.trendingAdventuresTitle")}
            subtitle={t("trandingAdventure.trendingAdventuresSubtitle")}
          />
          <CardAndCity title={t("cardAndCity.title")} />
          <HolidayPlaneCard />
          <BeachHoliday />
          <SunnyHoliday />
          <HillCamping title={t("hillCamping.title")} />
          <TravelCategory />
          <Explore />
          <Feedback title={t("feedback.title")} />
        </div>
      </div>
    </>
  );
};

export default Home;
