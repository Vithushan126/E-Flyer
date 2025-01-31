import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HolidayHeader from "./HolidayHeader";

const HolidayPlanner_6 = () => {
    const navigate = useNavigate();

    const handleFindHereClick = () => {
        if (startDate && endDate) {
            navigate("/holidayPlanner_7"); 
        } else {
            alert("Please select a vacation period before proceeding.");
        }
    };

    // Separate state for both calendars
    const [calendar1, setCalendar1] = useState({
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
    });

    const [calendar2, setCalendar2] = useState({
        currentMonth: new Date().getMonth() + 1,
        currentYear: new Date().getFullYear(),
    });

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const handlePrevMonth = (calendar, setCalendar) => {
        setCalendar((prev) => {
            const newMonth = prev.currentMonth === 0 ? 11 : prev.currentMonth - 1;
            const newYear = prev.currentMonth === 0 ? prev.currentYear - 1 : prev.currentYear;
            return { currentMonth: newMonth, currentYear: newYear };
        });
    };

    const handleNextMonth = (calendar, setCalendar) => {
        setCalendar((prev) => {
            const newMonth = prev.currentMonth === 11 ? 0 : prev.currentMonth + 1;
            const newYear = prev.currentMonth === 11 ? prev.currentYear + 1 : prev.currentYear;
            return { currentMonth: newMonth, currentYear: newYear };
        });
    };

    const generateCalendarDays = (month, year) => {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const totalDays = daysInMonth(month, year);

        const calendarDays = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(null);
        }

        for (let day = 1; day <= totalDays; day++) {
            calendarDays.push(day);
        }

        return calendarDays;
    };

    const isDateInRange = (day, month, year) => {
        if (!startDate || !endDate) return false;

        const date = new Date(year, month, day).getTime();
        const start = startDate.getTime();
        const end = endDate.getTime();
        return date >= start && date <= end;
    };

    const handleDateClick = (day, month, year) => {
        const clickedDate = new Date(year, month, day);

        if (!startDate || (startDate && endDate)) {
            setStartDate(clickedDate);
            setEndDate(null);
        } else if (clickedDate.getTime() >= startDate.getTime()) {
            setEndDate(clickedDate);
        } else {
            setStartDate(clickedDate);
            setEndDate(null);
        }
    };

    const renderCalendar = (calendar, setCalendar) => {
        const { currentMonth, currentYear } = calendar;
        const calendarDays = generateCalendarDays(currentMonth, currentYear);

        return (
            <div className="p-4 sm:p-6 rounded-3xl shadow-md text-white">
                <div className="flex justify-end gap-5 mb-4">
                    <button
                        className="text-xs font-normal"
                        onClick={() => handlePrevMonth(calendar, setCalendar)}
                    >
                        &lt;
                    </button>
                    <h2 className="text-xs font-normal">
                        {months[currentMonth]} {currentYear}
                    </h2>
                    <button
                        className="text-xs font-normal"
                        onClick={() => handleNextMonth(calendar, setCalendar)}
                    >
                        &gt;
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="text-xs font-normal text-center text-smokeGray ">
                            {day}
                        </div>
                    ))}
                    {calendarDays.map((day, index) => (
                        <div
                            key={index}
                            onClick={() => day && handleDateClick(day, currentMonth, currentYear)}
                            className={`text-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-2 sm:p-3 text-base font-medium rounded-xl cursor-pointer ${day
                                    ? isDateInRange(day, currentMonth, currentYear)
                                        ? "bg-orange"
                                        : startDate &&
                                            day === startDate.getDate() &&
                                            currentMonth === startDate.getMonth() &&
                                            currentYear === startDate.getFullYear()
                                            ? "bg-darkBlue"
                                            : endDate &&
                                                day === endDate.getDate() &&
                                                currentMonth === endDate.getMonth() &&
                                                currentYear === endDate.getFullYear()
                                                ? "bg-blue-500"
                                                : "bg-[#2C668E]"
                                    : ""
                                }`}
                        >
                            {day || ""}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-darkBlue text-white  min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
            <HolidayHeader />
            <div className="grid grid-cols-1 gap-10 pt-20 md:grid-cols-2 sm:gap-10">
                {renderCalendar(calendar1, setCalendar1)}
                {renderCalendar(calendar2, setCalendar2)}
            </div>
            {/* Display Selected Range */}
            <div className="mt-4 text-white text-lg text-center">
                {startDate && endDate
                    ? `Selected Vacation: ${startDate.toDateString()} - ${endDate.toDateString()}`
                    : startDate
                        ? `Start Date: ${startDate.toDateString()}`
                        : "Select your vacation period"}
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

export default HolidayPlanner_6;
