import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";
import AdventureIntro from "../AdventureIntro";
import Expect from "../Expect";
import Feedback from "../../../components/common/feedback/Feedback";
import AdventureWorld from "../soloAdventure/AdventureWorld";


import SoloImage from "../../../assets/adventure/Solo.svg";
import SeaniorImage1 from "../../../assets/adventure/SeaniorImage1.svg";
import SeaniorImage2 from "../../../assets/adventure/SeaniorImage2.svg";
import SeaniorImage3 from "../../../assets/adventure/SeaniorImage3.svg";
import SeaniorImage4 from "../../../assets/adventure/SeaniorImage4.svg";

const data = [SeaniorImage1, SeaniorImage2, SeaniorImage3, SeaniorImage4];

const paragraph =
  "Who needs a playground when there’s a whole world to play in? Embark on a fun, family adventure in the Canadian Rockies, see colorful Colombia through the eyes of Mirabelle, or head on a family safari for a Lion King-inspired adventure. With activities that even the fussiest teenager will love, and child-friendly resorts (and spas!), family tours take the stress away so you spend less time planning and more time discovering.";

const CupleAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <AdventureIntro
          image={SoloImage}
          title="Couple Adventures"
          paragraph={paragraph}
        />
        <TrendingAdventures title="Trending Couple Adventures" />
        <CardAndCity title="Couple Packages" />
        <AdventureWorld title="Couple tour around the world" />
        <Expect title="What to Expect on a Couple vacation " data={data} />
        <Feedback title="Feedback and Review About Couple Adventure" />
      </div>
    </>
  );
};

export default CupleAdventure;
