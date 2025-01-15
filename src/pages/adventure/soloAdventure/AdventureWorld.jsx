import React, { useState } from "react";
import EuropeMap from "../../../assets/adventure/EuropeMap.svg";
const adventureWorld = {
  Europe: [
    { label: "Amalfi Coast", count: 45 },
    { label: "Eastern Europe", count: 45 },
    { label: "France", count: 45 },
    { label: "Greece", count: 45 },
    { label: "Ireland", count: 45 },
    { label: "England", count: 45 },
    { label: "Norway", count: 45 },
    { label: "Portugal", count: 45 },
    { label: "Spain", count: 45 },
    { label: "Sicily", count: 45 },
    { label: "Turkey", count: 45 },
    { label: "Austria", count: 45 },
    { label: "Italy", count: 45 },
    { label: "Germany", count: 45 },
    { label: "Greek Island", count: 45 },
    { label: "Poland", count: 45 },
    { label: "Scandinavia", count: 45 },
    { label: "Tuscany", count: 45 },
    { label: "Croatia", count: 45 },
    { label: "Finland", count: 45 },
    { label: "UK", count: 45 },
    { label: "Iceland", count: 45 },
    { label: "Netherlands", count: 45 },
    { label: "Scotland", count: 45 },
    { label: "Switzerland", count: 45 },
  ],
  Africa: [
    { label: "South Africa", count: 30 },
    { label: "Kenya", count: 25 },
    { label: "Egypt", count: 20 },
    { label: "Morocco", count: 18 },
  ],
  "Latin America": [
    { label: "Brazil", count: 50 },
    { label: "Argentina", count: 40 },
    { label: "Peru", count: 35 },
    { label: "Chile", count: 28 },
  ],
  Asia: [
    { label: "India", count: 60 },
    { label: "Japan", count: 55 },
    { label: "China", count: 50 },
    { label: "Thailand", count: 45 },
  ],
  Australia: [
    { label: "Australia", count: 30 },
    { label: "New Zealand", count: 25 },
  ],
  "North America": [
    { label: "USA", count: 100 },
    { label: "Canada", count: 50 },
    { label: "Mexico", count: 45 },
  ],
};
const regionsToMap = [
  "Europe",
  "Africa",
  "Asia",
  "Australia",
  "North America",
  "Latin America",
];

const AdventureWorld = ({ title }) => {
  const [select, setSelect] = useState("Europe");
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full space-y-8">
        <h2 className="text-4xl font-semibold text-gray">{title}</h2>

        <div className="border border-smokeGray rounded-2xl p-2 lg:p-8 flex flex-col space-y-8 lg:space-y-10">
          <div className="flex flex-row justify-between text-gray overflow-x-auto scrollbar-hide">
            {regionsToMap.map((region) => (
              <div
                key={region}
                className={`py-3 px-8 rounded-3xl w-fit font-medium flex items-center text-nowrap ${
                  region === "Europe" ? "bg-orange text-white" : ""
                }`}
              >
                {region}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 lg:space-x-10">
            <img
              src={EuropeMap}
              alt="map"
              className="w-full lg:w-[260px] h-[137px]  object-cover transition-transform rounded-lg"
            />
            <div className="flex flex-grow flex-wrap gap-2">
              {adventureWorld.Europe.map((country) => (
                <div
                  key={country.label}
                  className="px-4 py-1 rounded-lg text-sm transition-colors border border-borderGray"
                >
                  {country.label} ({country.count})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureWorld;
