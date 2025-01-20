import React from 'react';
import BeachHoliday5 from "../../assets/beachHoliday/BeachHoliday5.jpg";
import BeachHoliday6 from "../../assets/beachHoliday/BeachHoliday6.jpg";
import BeachHoliday7 from "../../assets/beachHoliday/BeachHoliday7.jpg";
import BeachHoliday8 from "../../assets/beachHoliday/BeachHoliday8.jpg";
import HolidayHeader from './HolidayHeader';

const images = [
    BeachHoliday5,
    BeachHoliday6,
    BeachHoliday7,
    BeachHoliday8
];


const HolidayPlanner_8 = () => {
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
                className="w-[280px] h-[280px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
            {/* Next Button Section */}
            <div className="mt-8">
                <div className="flex items-center justify-center relative w-[312px] h-[72px] left-[420px] bg-buttoncolor hover:bg-orange transition rounded-[20px]">
                    <button 
                    onClick={() => alert("Completed")}
                    className='text-white text-2xl font-semibold leading-[29px]'>
                        Complete
                    </button>
                </div>
            </div>
        </div>
    );
};
export default HolidayPlanner_8;
