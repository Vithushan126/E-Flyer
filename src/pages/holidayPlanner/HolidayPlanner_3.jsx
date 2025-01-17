import React from 'react';
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/holidayplanner/Img1.svg";
import Img2 from "../../assets/holidayplanner/Img2.svg";
import Img3 from "../../assets/holidayplanner/Img3.svg";
import Img4 from "../../assets/holidayplanner/Img4.svg";
import HolidayHeader from './HolidayHeader';

const images = [
    Img1,
    Img2,
    Img3,
    Img4
];

const HolidayPlanner_3 = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleFindHereClick = () => {
        navigate("/holidayPlanner_4"); // Navigate to the desired route
    };
    return (
        <div className="bg-darkBlue text-white h-[718px] w-auto flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <HolidayHeader/>
      {/* Image Gallery Section */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Destination ${index + 1}`}
                className="w-auto h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
            {/* Next Button Section */}
            <div className="mt-8">
                <div className="flex items-center justify-center relative w-[312px] h-[72px] left-[420px] bg-buttoncolor hover:bg-orange transition rounded-[20px]">
                    <button 
                    onClick={handleFindHereClick}
                    className='text-white text-2xl font-semibold leading-[29px]'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HolidayPlanner_3;
