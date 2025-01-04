import React from "react";
import ButtonCom from "../../components/ui/button/ButtonCom";
import SearchForm from "./SearchForm";
import TrendingAdventures from "./TrendingAdventures";

const Home = () => {
  return (
    <>
      <div className="-mt-6 lg:-mt-24 relative z-50 space-y-20 px-2 ">
        <SearchForm />
        <TrendingAdventures />
      </div>
    </>
  );
};

export default Home;
