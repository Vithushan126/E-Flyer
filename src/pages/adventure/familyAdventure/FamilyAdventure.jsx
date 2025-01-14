import React from "react";
import TrendingAdventures from "../../home/TrendingAdventures";
import CardAndCity from "../../home/CardAndCity";
import AdventureIntro from "../AdventureIntro";
import AdventureWorld from "../soloAdventure/AdventureWorld";
import Expect from "../Expect";
import Feedback from "../../../components/common/feedback/Feedback";

import FamilyImage from "../../../assets/adventure/Family.svg";
import FamilyImage1 from "../../../assets/adventure/FamilyImage1.svg";
import FamilyImage2 from "../../../assets/adventure/FamilyImage2.svg";
import FamilyImage3 from "../../../assets/adventure/FamilyImage3.svg";
import FamilyImage4 from "../../../assets/adventure/FamilyImage4.svg";

const data = [FamilyImage1, FamilyImage2, FamilyImage3, FamilyImage4];

const paragraph =
  "Longing for a peaceful, stress-free getaway? Let us craft unforgettable moments just for you. Imagine breathing in the fresh sea air of the Maldives, or immersing yourself in the breathtaking beauty of Yellowstone—its vast caldera, mesmerizing rock formations, and the wild 'circle of life.' Whether you're seeking pure relaxation or thrilling adventures, we have something for every traveler. From family-friendly resorts to teen-approved activities and soothing spas, we take the stress out of planning, leaving you free to create memories that last a lifetime";

const FamilyAdventure = () => {
  return (
    <>
      <div className="space-y-20 mx-2">
        <AdventureIntro
          image={FamilyImage}
          title="Family Adventures"
          paragraph={paragraph}
        />
        <TrendingAdventures title="Trending Family Adventures" />
        <CardAndCity title="Family Packages" />
        <AdventureWorld title="Family tour around the world" />
        <Expect title="What to Expect on a Family vacation " data={data} />
        <Feedback title="Feedback and Review About Family Adventure" />
      </div>
    </>
  );
};

export default FamilyAdventure;
