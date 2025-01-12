import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";

const SeaniorAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <TrendingAdventures title="Trending Seniors Adventures" />
        <CardAndCity title="Seniors Packages" />
      </div>
    </>
  );
};

export default SeaniorAdventure;
