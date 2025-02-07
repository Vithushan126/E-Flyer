import React, { useState } from 'react';
import CityCard from "../../components/ui/cityCard/CityCard";
import BeachHoliday5 from "../../assets/beachHoliday/BeachHoliday5.jpg";
import BeachHoliday6 from "../../assets/beachHoliday/BeachHoliday6.jpg";
import BeachHoliday7 from "../../assets/beachHoliday/BeachHoliday7.jpg";
import BeachHoliday8 from "../../assets/beachHoliday/BeachHoliday8.jpg";
import HolidayHeader from './HolidayHeader';

const cardCitys = [
  { id: 1,
     title: "108765", 
     location: "Bali", 
     temparature: 22,
     duration: "3 nights - 2 Adults",
     country: "Indonesia",
     offers: 109,
     image: BeachHoliday5 },
  { id: 2, 
    title: "108766", 
    location: "Bali",
    temparature: 22,
    duration: "3 nights - 2 Adults",
    country: "Indonesia",
    offers: 109, 
    image: BeachHoliday6 },
  { id: 3, 
    title: "108767", 
    location: "Bali",
    temparature: 22,
    duration: "3 nights - 2 Adults",
    country: "Indonesia",
    offers: 109, 
    image: BeachHoliday7 },
  { id: 4, 
    title: "108768", 
    location: "Bali",
    temparature: 22,
    duration: "3 nights - 2 Adults",
    country: "Indonesia",
    offers: 109,
    image: BeachHoliday8 },
];

const HolidayPlanner_8 = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (id) => {
    setSelectedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const handleCompleteClick = () => {
    if (selectedCards.length > 0) {
      alert("Completed");
    } else {
      alert("Please select at least one card.");
    }
  };

  return (
    <div className="bg-darkBlue text-white min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <HolidayHeader />
      {/* Image Gallery Section */}
      <div className="w-full max-w-6xl pt-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardCitys.map((cardCity) => (
            <div
              key={cardCity.id}
              onClick={() => handleCardClick(cardCity.id)}
              className={`cursor-pointer transition-transform transform hover:scale-105 ${
                selectedCards.includes(cardCity.id) ? "ring-4 ring-orange" : ""
              }`}
            >
              <CityCard cardCity={cardCity} />
            </div>
          ))}
        </div>
      </div>

      {/* Complete Button Section */}
      <div className="mt-8 mb-4 flex justify-center relative lg:justify-end w-full max-w-6xl h-[72px]">
        <button
          onClick={handleCompleteClick}
          className={`${
            selectedCards.length > 0 ? "bg-orange" : "bg-buttoncolor"
          } text-white text-lg md:text-2xl font-semibold px-6 py-3 rounded-2xl transition w-[90%] sm:w-[312px]`}
        >
          Complete
        </button>
      </div>
    </div>
  );
};
export default HolidayPlanner_8;
