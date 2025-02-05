import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Img5 from "../../assets/holidayplanner/Img5.svg";
import Img6 from "../../assets/holidayplanner/Img6.svg";
import Img7 from "../../assets/holidayplanner/Img7.svg";
import Img8 from "../../assets/holidayplanner/Img8.svg";
import HolidayHeader from './HolidayHeader';

const images = [Img5,Img6,Img7,Img8];


const HolidayPlanner_4 = () => {
  const navigate = useNavigate(); 
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFindHereClick = () => {
    if (selectedImages.length > 0) {
    navigate("/holidayPlanner_5");
    } 
  };

  const handleImageClick = (index) => {
    setSelectedImages((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-darkBlue text-white min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
      <HolidayHeader />
      {/* Image Gallery Section */}
      <div className="w-full max-w-6xl pt-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div 
              key={index}
              className={`relative transition-transform transform hover:scale-105 cursor-pointer ${
                selectedImages.includes(index) ? "ring-4 ring-orange" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={src}
                alt={`Destination ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
      {/* Next Button Section */}
      <div className="mt-8 mb-4 flex justify-center relative lg:justify-end w-full max-w-6xl h-[72px] ">
        <button
          onClick={handleFindHereClick}
          className={`${
            selectedImages.length > 0 ? "bg-orange" : "bg-buttoncolor"
          } hover:bg-orange text-white text-lg md:text-2xl font-semibold px-6 py-3 rounded-2xl transition w-[90%] sm:w-[312px]`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default HolidayPlanner_4;
