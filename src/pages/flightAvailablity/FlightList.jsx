import React from "react";
import QatarAirwaysLogo from "../../assets/view/Qatar_Airways_Logo.svg";
import EmiratesLogo from "../../assets/view/Emirates-Logo.svg";
import FlydubaiLogo from "../../assets/view/Flydubai-Logo.svg";
import EdelweissLogo from "../../assets/view/Edelweiss-Logo.svg";

const airlines = [
  { name: "Qatar Airways", logo: QatarAirwaysLogo, key: "qatar" },
  { name: "Emirates", logo: EmiratesLogo, key: "emirates" },
  { name: "FlyDubai", logo: FlydubaiLogo, key: "flydubai" },
  { name: "Edelweiss", logo: EdelweissLogo, key: "edelweiss" },
];

const priceData = {
  direct: { qatar: "", emirates: "", flydubai: "", edelweiss: "" },
  oneStop: {
    qatar: "LKR 124568",
    emirates: "LKR 124568",
    flydubai: "",
    edelweiss: "",
  },
  allOptions: {
    qatar: "",
    emirates: "",
    flydubai: "LKR 124568",
    edelweiss: "LKR 124568",
  },
};

const FlightList = () => {
  const stops = [
    { label: "Direct / Nonstop", key: "direct" },
    { label: "Max 1 Stop", key: "oneStop" },
    { label: "All Option", key: "allOptions" },
  ];

  return (
    <div className="w-full rounded-lg md:rounded-3xl border border-darkBlue overflow-x-scroll scrollbar-hide  p-2 md:p-4 lg:p-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center text-smokyGray md:text-2xl font-normal p-2 md:p-4 border-r border-b border-border">
              Stops
            </th>
            {airlines.map((airline, index) => (
              <th
                key={airline.key}
                className={`p-2 md:p-4 border-b border-border ${
                  index !== airlines.length - 1 ? "border-r" : ""
                }`}
              >
                <div className="flex justify-center">
                  <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] border border-border rounded-full p-1 md:p-2 flex items-center justify-center">
                    <img
                      src={airline.logo}
                      alt={airline.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stops.map((stop, stopIndex) => (
            <tr key={stop.key}>
              <td
                className={`text-center text-smokyGray text-sm text-nowrap md:font-normal p-2 md:p-4 border-r border-border ${
                  stopIndex !== stops.length - 1 ? "border-b" : ""
                }`}
              >
                {stop.label}
              </td>
              {airlines.map((airline, airlineIndex) => (
                <td
                  key={airline.key}
                  className={`p-2 md:p-4 text-center text-smokyGray font-medium text-nowrap ${
                    airlineIndex !== airlines.length - 1 ? "border-r" : ""
                  } ${
                    stopIndex !== stops.length - 1 ? "border-b" : ""
                  } border-border`}
                >
                  {priceData[stop.key][airline.key] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
