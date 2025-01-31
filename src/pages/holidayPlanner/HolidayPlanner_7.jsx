import React from 'react';
import { useNavigate } from "react-router-dom";
import CityCard from "../../components/ui/cityCard/CityCard";
import BeachHoliday1 from "../../assets/beachHoliday/BeachHoliday1.svg";
import BeachHoliday2 from "../../assets/beachHoliday/BeachHoliday2.svg";
import BeachHoliday3 from "../../assets/beachHoliday/BeachHoliday3.svg";
import BeachHoliday4 from "../../assets/beachHoliday/BeachHoliday4.svg";
import HolidayHeader from './HolidayHeader';

const cardCitys = [
    {
        id: 1,
        title: "108765",
        location: "Bali",
        temparature: 22,
        duration: "3 nights - 2 Adults",
        country: "Indonesia",
        offers: 109,
        image: BeachHoliday1,
    },
    {
        id: 2,
        title: "108766",
        location: "Bali",
        temparature: 22,
        duration: "3 nights - 2 Adults",
        country: "Indonesia",
        offers: 109,
        image: BeachHoliday2,
    },
    {
        id: 3,
        title: "108767",
        location: "Bali",
        temparature: 22,
        duration: "3 nights - 2 Adults",
        country: "Indonesia",
        offers: 109,
        image: BeachHoliday3,
    },
    {
        id: 4,
        title: "108768",
        location: "Bali",
        temparature: 22,
        duration: "3 nights - 2 Adults",
        country: "Indonesia",
        offers: 109,
        image: BeachHoliday4,
    },
];


const HolidayPlanner_7 = () => {
    const navigate = useNavigate(); 

    const handleFindHereClick = () => {
        navigate("/holidayPlanner_8"); 
    };
    return (
        <div className="bg-darkBlue text-white min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <HolidayHeader />
            {/* Image Gallery Section */}
            <div className="w-full max-w-6xl pt-8 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardCitys?.map((cardCity) => {
                        return <CityCard cardCity={cardCity} key={cardCity.id} />;
                    })}
                </div>
            </div>
            {/* Next Button Section */}
            <div className="mt-8 mb-4 flex justify-center relative lg:justify-end w-full max-w-6xl h-[72px] ">
                <button
                    onClick={handleFindHereClick}
                    className="bg-buttoncolor hover:bg-orange text-white text-lg md:text-2xl font-semibold px-6 py-3 rounded-2xl transition w-[90%] sm:w-[312px]"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
export default HolidayPlanner_7;
