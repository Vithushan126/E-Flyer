import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const PriceOverview = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className=" rounded-lg border border-darkBlue w-full h-screen">
      <Calendar
        className="w-full"
        onChange={onChange}
        value={date}
        tileClassName={({ date, view }) =>
          view === "month" && date.getDay() === 0 ? "sunday" : null
        }
        navigationLabel={({ date, label, locale, view }) => (
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">{label}</span>
            <div className="flex items-center">
              <button
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-2"
                onClick={() =>
                  onChange(new Date(date.getFullYear(), date.getMonth() - 1))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                onClick={() =>
                  onChange(new Date(date.getFullYear(), date.getMonth() + 1))
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default PriceOverview;
