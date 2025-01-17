import React from 'react';
import { useNavigate } from "react-router-dom";
import BeachHoliday1 from "../../assets/beachHoliday/BeachHoliday1.svg";
import BeachHoliday2 from "../../assets/beachHoliday/BeachHoliday2.svg";
import BeachHoliday3 from "../../assets/beachHoliday/BeachHoliday3.svg";
import BeachHoliday4 from "../../assets/beachHoliday/BeachHoliday4.svg";
import HolidayHeader from './HolidayHeader';

const images = [
    BeachHoliday1,
    BeachHoliday2,
    BeachHoliday3,
    BeachHoliday4
];


const HolidayPlanner_7 = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleFindHereClick = () => {
        navigate("/holidayPlanner_8"); // Navigate to the desired route
    };
    return (
        <div className="bg-darkBlue text-white h-[718px] w-auto flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <HolidayHeader />
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
export default HolidayPlanner_7;
