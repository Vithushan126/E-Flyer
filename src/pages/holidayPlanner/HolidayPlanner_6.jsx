import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HolidayHeader from "./HolidayHeader";

const HolidayPlanner_6 = () => {
    const [currentMonth, setCurrentMonth] = useState(0); // Offset for the current month
    const [selectedDate, setSelectedDate] = useState(null); // Track selected date
    const today = new Date();

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleFindHereClick = () => {
        navigate("/holidayPlanner_7")
    };

    // Generate the first day of the current month
    const getMonthDays = (monthOffset = 0) => {
        const firstDay = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
        const days = [];
        const dayCount = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate();

        // Pad days for the previous month
        const startPadding = firstDay.getDay();
        for (let i = 0; i < startPadding; i++) {
            days.push(null);
        }

        // Add the current month's days
        for (let i = 1; i <= dayCount; i++) {
            days.push(i);
        }

        return days;
    };

    const handleDateClick = (date, monthOffset) => {
        const selected = new Date(today.getFullYear(), today.getMonth() + monthOffset, date);
        setSelectedDate(selected);
    };

    const renderMonth = (monthOffset) => {
        const days = getMonthDays(monthOffset);
        const month = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1).toLocaleString(
            "default",
            { month: "long", year: "numeric" }
        );

        return (
            <div className="flex flex-col items-center">
                <h2 className="text-white font-semibold text-lg mb-4">{month}</h2>
                <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                        <div key={index} className="text-white text-sm font-medium text-center">
                            {day}
                        </div>
                    ))}
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg ${day
                                    ? selectedDate?.getDate() === day &&
                                        selectedDate?.getMonth() === today.getMonth() + monthOffset
                                        ? "bg-orange-500 text-white"
                                        : "bg-blue-600 text-white hover:bg-blue-800 cursor-pointer"
                                    : "bg-transparent"
                                }`}
                            onClick={() => day && handleDateClick(day, monthOffset)}
                        >
                            {day || ""}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-darkBlue text-white h-[718px] w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <HolidayHeader />
            <div className="flex space-x-8">
                {renderMonth(currentMonth)}
                {renderMonth(currentMonth + 1)}
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

export default HolidayPlanner_6;
