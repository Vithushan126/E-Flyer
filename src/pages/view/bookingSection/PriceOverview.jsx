import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./PriceOverview.css";

const PriceOverview = () => {
  const [dateRange, setDateRange] = useState([]);
  console.log(dateRange);

  const onChange = (range) => {
    setDateRange(range);
  };

  const prices = {
    "2025-02-01": 2345676,
    "2025-02-05": 1500000,
    "2025-02-10": 1800000,
    "2025-02-11": 180000,
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="rounded-3xl border border-darkBlue w-full p-8">
      <Calendar
        className="w-full"
        onChange={onChange}
        value={dateRange}
        selectRange={true}
        next2Label={null}
        prev2Label={null}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const formattedDate = formatDate(date);
            const price = prices[formattedDate];
            return (
              <div className="h-full w-full relative ">
                <div className="date-circle">{date.getDate()}</div>
                {price && (
                  <div className="price-container">
                    <div className="price-text text-nowrap">
                      LHR {price.toLocaleString()}
                    </div>
                    <div className="per-person">Per Person</div>
                  </div>
                )}
              </div>
            );
          }
        }}
        navigationLabel={({ date }) => (
          <span className="text-gray-800">
            {date.toLocaleString("default", { month: "long", year: "numeric" })}
          </span>
        )}
      />
    </div>
  );
};

export default PriceOverview;
