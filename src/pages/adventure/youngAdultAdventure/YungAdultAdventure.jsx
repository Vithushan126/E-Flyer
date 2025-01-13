import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";

const YungAdultAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <TrendingAdventures title="Trending young Adult Adventures" />
        <CardAndCity title="Young Adult Packages" />
      </div>
    </>
  );
};

export default YungAdultAdventure;
