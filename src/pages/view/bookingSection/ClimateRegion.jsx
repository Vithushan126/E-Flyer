import React from "react";
import SliderSection from "../SliderSection";
import DropDownSection from "./DropDownSection";
import ClimateDropdown from "./ClimateDropdown";

const ClimateRegion = () => {
  return (
    <div className="w-full border border-border p-10 flex flex-col rounded-xl space-y-16">
      <div className="w-full h-96">
        <SliderSection />
      </div>
      <div className="flex flex-row  lg:space-x-10 text-smokyGray">
        {/* pharagraph section */}
        <div className="flex flex-col space-y-6  lg:w-4/6 text-left">
          {/* <div className="flex flex-col space-y-4">
            <p className="font-medium">
              Kuredu Island is one of the largest islands and offers a generous
              infrastructure with a great range of sports. Both those seeking
              peace and quiet and active guests feel at home here.
            </p>
          </div> */}
          <div className="flex flex-col space-y-4">
            <h6 className="font-medium">Lhaviyani Atoll</h6>
            <p className="">
              The Lhaviyani Atoll is a paradise for diving fans, underwater
              photographers and water sports enthusiasts as well as for those
              seeking active relaxation. The islands in the atoll all have
              wonderful white sandy beaches, which are picturesquely framed by
              palm trees. And the resorts offer their guests enough variety and
              entertainment, so that apart from doing nothing, boredom is
              guaranteed. What could be nicer than losing yourself on a deserted
              beach during the day? The Lhaviyani Atoll is about 130 kilometers
              north of Male and, with a length of 18 kilometers and a width of
              35 kilometers, is one of the smallest atolls in the Maldives.
              Around 2,500 people live on the main island of Hinnavaru, around
              3,000 people on the island of Naifaru, the seat of the atoll
              chief, and the remaining 2,500 inhabitants are spread across the
              other larger islands. There is a large tuna canning factory on
              Felivaru, which makes a significant contribution to the Maldives'
              economy. Around 100,000 tons of tuna are processed here every
              year. The fish is still caught in the traditional way with fishing
              rods and large-scale net fishing is deliberately avoided in order
              not to endanger dolphins and turtles. Five of the 44 islands of
              the Lhaviyani Atoll were opened to tourism a few years ago and 3
              of them are in operation as holiday resorts. There are numerous
              impressive dive sites in the Lhaviyani Atoll, ranging from
              pristine coral reefs to exciting channels. Here you can dive,
              snorkel and explore the magnificent underwater world in all its
              facets to your heart's content. At the Shipyard, you can dive on
              two shipwrecks covered in coral during one dive. In the southeast
              of the atoll, the water flows less freely, which is why there is
              hardly any destructive wave activity there and the coral banks
              shine untouched in a unique splendor of colors. The channels in
              Lhaviyani are deeper than in other atolls and are therefore ideal
              for drift diving.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h6 className="font-medium">Maldives</h6>
            <p className="">
              The island is divided into 3 areas: the center, the O' area for
              guests aged 12 and over, and the Sangu area for guests aged 18 and
              over. All areas have their own reception and WiFi (maximum 500 MB
              per person per day free of charge). Culinary delights are provided
              by the 4 main buffet restaurants with international cuisine and
              show cooking and 3 à la carte restaurants with Mediterranean,
              vegetarian and Asian specialties as well as fish and seafood,
              adapted to the different areas of the hotel. 7 bars await you for
              a cool drink or a refreshing cocktail, and a wine cellar for wine
              lovers. The boutiques and shops welcome you for a little shopping.
              Each of the 3 areas also has a freshwater pool.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h6 className="font-medium">Accommodation</h6>
            <p className="">
              The Maldives are small, paradisiacal islands with snow-white sandy
              beaches and deep blue lagoons. The atolls are rightly considered
              the ultimate dream destination for ambitious divers, as the reefs
              are among the most beautiful in the world. The picturesque islands
              are widely popular because wishes come true here: whether relaxing
              in the shade of a palm tree on the beach or being active in and
              under the water - the Maldives will make your dream of an island
              come true! The Maldives are unique in every respect and cannot be
              compared to any other destination. This applies to both the
              holiday resorts and the underwater world with its indescribable
              abundance of fish. The archipelago looks like a necklace of pearls
              on the blue velvet of the sea when approaching Male. There are
              countless islands and islets scattered in the sea, some of them
              inhabited, but most of them still completely untouched by
              civilisation. The incomparably fascinating Indian Ocean offers
              everything a diver could wish for, from large fish to exciting
              drift dives. Many return again and again to this underwater
              paradise. The countless channels and passages between the atolls
              attract large fish in abundance, which feast on the feast swimming
              past in the current. In the lagoons of the atolls there are many
              rocky peaks that reach below the water surface and where
              snorkelers can also admire wonderful coral formations. And in the
              open sea, eagle rays, sharks and occasionally even a mighty whale
              shark can be found. The Maldives offer the best conditions for
              learning the fascinating sport of diving, because nowhere else is
              the sea clearer, the water temperature more pleasant and the fish
              world more colorful. The Maldives are also known worldwide for
              their wonderful beaches, which are typical of this tropical idyll.
              Windsurfers, surfers, sailors, fishermen and other water sports
              fans are also among the enthusiastic guests and increasingly
              people seeking relaxation are coming here who want to spend quiet
              holidays away from the hustle and bustle of everyday life.
            </p>
          </div>
          <div className="flex flex-row space-x-10">
            <h6 className="font-medium">
              destinationInfo.travelPeriods.heading
            </h6>
            <p className="">November - April</p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-10">
              <h6 className="font-medium">
                destinationInfo.flightTime.heading
              </h6>
              <p className="">9.5 Hours</p>
            </div>
            <p className="">2430 hours of sunshine per year</p>
          </div>
        </div>
        {/* dropdown section */}
        <div className="flex flex-col w-full lg:w-2/6 ">
          <ClimateDropdown />
        </div>
      </div>
    </div>
  );
};

export default ClimateRegion;
