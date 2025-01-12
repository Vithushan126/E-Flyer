import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";

const FamilyAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <TrendingAdventures title="Trending Family Adventures" />
        <CardAndCity title="Family Packages" />
      </div>
    </>
  );
};

export default FamilyAdventure;
