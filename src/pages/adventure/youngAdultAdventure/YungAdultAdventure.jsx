import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";
import AdventureIntro from "../AdventureIntro";
import Expect from "../Expect";
import Feedback from "../../../components/common/feedback/Feedback";
import AdventureWorld from "../soloAdventure/AdventureWorld";

import Couple from "../../../assets/adventure/Couple.svg";
import Couple1 from "../../../assets/adventure/Couple1.svg";
import Couple2 from "../../../assets/adventure/Couple2.svg";
import Couple3 from "../../../assets/adventure/Couple3.svg";
import Couple4 from "../../../assets/adventure/Couple4.svg";

const data = [Couple1, Couple2, Couple3, Couple4];

const paragraph =
  "Who needs a playground when there’s a whole world to play in? Embark on a fun, family adventure in the Canadian Rockies, see colorful Colombia through the eyes of Mirabelle, or head on a family safari for a Lion King-inspired adventure. With activities that even the fussiest teenager will love, and child-friendly resorts (and spas!), family tours take the stress away so you spend less time planning and more time discovering.";

const YungAdultAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <AdventureIntro
          image={Couple}
          title="Young Adult Adventures"
          paragraph={paragraph}
        />
        <TrendingAdventures title="Trending Young Adult Adventures" />
        <CardAndCity title="Young Adult Packages" />
        <AdventureWorld title="Young Adult tour around the world" />
        <Expect title="What to Expect on a Young Adult vacation " data={data} />
        <Feedback title="Feedback and Review About Young Adult Adventure" />
      </div>
    </>
  );
};

export default YungAdultAdventure;
