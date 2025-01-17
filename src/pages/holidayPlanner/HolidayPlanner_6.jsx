import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HolidayHeader from "./HolidayHeader";

const HolidayPlanner_6 = () => {
    const [currentMonth, setCurrentMonth] = useState(0); // Offset for the current month
    const [selectedStartDate, setSelectedStartDate] = useState(null); // Start date
    const [selectedEndDate, setSelectedEndDate] = useState(null); // End date
    const today = new Date();

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleFindHereClick = () => {
        if (selectedStartDate && selectedEndDate) {
            navigate("/holidayPlanner_7", {
                state: { startDate: selectedStartDate, endDate: selectedEndDate }
            });
        } else {
            alert("Please select a start date and an end date.");
        }
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
        const clickedDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, date);

        // Handle selection logic
        if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
            setSelectedStartDate(clickedDate);
            setSelectedEndDate(null); // Reset end date
        } else if (clickedDate > selectedStartDate) {
            setSelectedEndDate(clickedDate);
        } else {
            setSelectedStartDate(clickedDate); // Reset if the date is before the start date
            setSelectedEndDate(null);
        }
    };

    const isDateInRange = (date, monthOffset) => {
        const currentDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, date);
        return selectedStartDate && selectedEndDate
            ? currentDate >= selectedStartDate && currentDate <= selectedEndDate
            : false;
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
                            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                                day
                                    ? isDateInRange(day, monthOffset)
                                        ? "bg-orange text-white"
                                        : selectedStartDate?.getDate() === day &&
                                          selectedStartDate?.getMonth() ===
                                              today.getMonth() + monthOffset
                                        ? "bg-orange-500 text-white"
                                        : selectedEndDate?.getDate() === day &&
                                          selectedEndDate?.getMonth() ===
                                              today.getMonth() + monthOffset
                                        ? "bg-orange-500 text-white"
                                        : "bg-[#2C668E] text-white hover:bg-blue-800 cursor-pointer"
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
                        className="text-white text-2xl font-semibold leading-[29px]"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HolidayPlanner_6;
