import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Calendar as LucideCalendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./CustomCalendar.css";

const toLocalISOString = (date) => {
  // Create a new date object with local time (without timezone shift)
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString();
};

const CalendarComponent = ({ calClose, setFieldValue, values, tripType }) => {
  const calendarRef = useRef(null);
  const [activeDate, setActiveDate] = useState("departure");
  const [departureDate, setDepartureDate] = useState(
    values.departureDate || new Date()
  );
  const [returnDate, setReturnDate] = useState(
    values.returnDate
      ? new Date(values.returnDate)
      : new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const [currentDate, setCurrentDate] = useState(departureDate);
  const [flexibleDays, setFlexibleDays] = useState(values.flexibleDays || 0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Format date to display
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Handle date selection
  const handleDateSelect = (value) => {
    const selectedDate = new Date(value);

    if (activeDate === "departure") {
      setDepartureDate(selectedDate);
      setFieldValue("departureDate", selectedDate);

      // Automatically switch to return date selection after selecting departure date
      // Only switch if this is a return trip
      if (tripType === "Return") {
        setActiveDate("return");
      }
    } else {
      // For return date selection
      if (selectedDate >= departureDate) {
        setReturnDate(selectedDate);
        setFieldValue("returnDate", selectedDate);
      }
    }
  };

  // Handle date navigation
  const adjustDate = (dateType, increment) => {
    const currentValue = dateType === "departure" ? departureDate : returnDate;
    const newDate = new Date(currentValue);
    newDate.setDate(newDate.getDate() + (increment ? 1 : -1));

    if (dateType === "departure") {
      if (newDate <= returnDate) {
        setDepartureDate(newDate);
        setFieldValue("departureDate", newDate);
      }
    } else {
      if (newDate >= departureDate) {
        setReturnDate(newDate);
        setFieldValue("returnDate", newDate);
      }
    }
  };

  // Handle month navigation
  const handleMonthChange = (date) => {
    setCurrentDate(date);
  };

  const handleConfirm = () => {
    // For tripType !== "Return", set only departure date
    if (tripType !== "Return") {
      setFieldValue(
        `flights[0].departureDate`,
        toLocalISOString(departureDate)
      );
    } else {
      // For tripType === "Return", set both departure and return dates
      setFieldValue(
        `flights[0].departureDate`,
        toLocalISOString(departureDate)
      );
      setFieldValue(`flights[0].returnDate`, toLocalISOString(returnDate));
    }
    setFieldValue("flexibleDays", flexibleDays);
    calClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        calClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [calClose]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="absolute w-full md:w-fit z-20 bg-white border border-border rounded-xl flex flex-col p-4 space-y-4 mt-14"
      ref={calendarRef}
    >
      <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Departure */}
        <div
          className={`w-full flex justify-between items-center p-3 py-2 space-x-6 ${
            activeDate === "departure"
              ? "bg-blue-50 border border-border"
              : "bg-backgroundColor"
          } rounded-[20px] cursor-pointer`}
          onClick={() => setActiveDate("departure")}
        >
          <div className="flex flex-row items-start space-x-2">
            <LucideCalendar className="text-smokyGray w-8 h-8" />
            <div className="flex flex-col items-start">
              <span className="text-smokyGray text-xs">Departure</span>
              <span className="text-smokyGray text-sm text-nowrap">
                {formatDate(departureDate)}
              </span>
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-end h-full">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                adjustDate("departure", false);
              }}
              className="flex justify-center items-center h-6 w-6 bg-white rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                adjustDate("departure", true);
              }}
              className="flex justify-center items-center h-6 w-6 bg-white rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Return Date */}
        {tripType === "Return" && (
          <div
            className={`w-full flex justify-between items-center p-3 py-2 space-x-6 ${
              activeDate === "return"
                ? "bg-blue-50  border border-border"
                : "bg-backgroundColor"
            } rounded-[20px] cursor-pointer`}
            onClick={() => setActiveDate("return")}
          >
            <div className="flex flex-row items-start space-x-2">
              <LucideCalendar className="text-smokyGray w-8 h-8" />
              <div className="flex flex-col items-start">
                <span className="text-smokyGray text-xs">Return</span>
                <span className="text-smokyGray text-sm text-nowrap">
                  {formatDate(returnDate)}
                </span>
              </div>
            </div>

            <div className="flex flex-row space-x-2 items-end h-full">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  adjustDate("return", false);
                }}
                className="flex justify-center items-center h-6 w-6 bg-white rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  adjustDate("return", true);
                }}
                className="flex justify-center items-center h-6 w-6 bg-white rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>

      <Calendar
        onChange={handleDateSelect}
        value={activeDate === "departure" ? departureDate : returnDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          handleMonthChange(activeStartDate)
        }
        activeStartDate={currentDate}
        showDoubleView={tripType === "Return" && !isSmallScreen}
        // showDoubleView={tripType === "Return" ? true : false}
        className="custom-calendar"
      />

      <div
        className={`${
          tripType === "Return"
            ? "flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-8"
            : "flex flex-col space-y-4 "
        }`}
      >
        <div className="flex flex-col">
          <div className="flex space-x-4">
            {[0, 1, 2, 3].map((days) => (
              <label key={days} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="flexibleDays"
                  value={days}
                  onChange={() => setFlexibleDays(days)}
                  checked={flexibleDays === days}
                  className=""
                />
                <span
                  className={`text-sm text-nowrap ${
                    flexibleDays === days ? "text-darkBlue" : "text-smokyGray"
                  }`}
                >
                  {days === 0
                    ? "0 day"
                    : `±${days} ${days === 1 ? "day" : "days"}`}
                </span>
              </label>
            ))}
          </div>
          <span className="text-xs text-center text-smokyGray">
            Flexible Dates
          </span>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full bg-darkBlue text-white py-2 rounded-3xl"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CalendarComponent;
