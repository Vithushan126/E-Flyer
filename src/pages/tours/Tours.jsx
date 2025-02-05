import React from "react";
import HeroSection from "../../components/common/heroSection/HeroSection";
/* import SearchForm from "../home/SearchForm"; */
import HillCamping from "../home/HillCamping";
import TrendingAdventures from "../home/TrendingAdventures";
import TourPharagraph from "../tours/TourPharagraph";
import Tips from "./Tips";
import SearchForm from "../home/searchform/SearchForm";

const Tours = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <div className="px-2 w-full">
          <SearchForm />
        </div>
        <div className="space-y-20 mx-2">
          <Tips />
          <TrendingAdventures
            title="offers for round trips"
            subtitle="Discover fascinating tours through Albania, Greece, Spain, Portugal, Turkey and Egypt with Hotelplan! Immerse yourself in rich history, breathtaking nature and fascinating cultures. Be it a rental car tour, a group tour or an individual tour."
          />
          <TourPharagraph />
          <HillCamping title="more package for you" />
        </div>
      </div>
    </>
  );
};

export default Tours;
