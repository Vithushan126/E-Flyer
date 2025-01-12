import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";

const CupleAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <TrendingAdventures title="Trending Couple Adventures" />
        <CardAndCity title="Couple Packages" />
      </div>
    </>
  );
};

export default CupleAdventure;
