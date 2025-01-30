import React, { useRef, useState } from "react";
import { Field, Form } from "formik";
import { DateRange } from "react-date-range";
import { MapPin, Calendar, BedDouble, Search } from "lucide-react";

const HotelForm = ({
  dateRange,
  setDateRange,
  values,
  errors,
  touched,
  setFieldValue,
}) => {
  const calendarRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <Form>
      <div className="flex flex-wrap gap-2 justify-start md:justify-between">
        {/* Destination */}
        <div className="flex items-center p-4 gap-4 w-full sm:w-[280px] lg:w-[25%] h-[57px] md:w-[350px] bg-backgroundColor rounded-2xl">
          <MapPin className="text-smokyGray w-6 h-6"/>
          <div className="flex flex-col">
            <label
              className="text-xs font-light text-smokyGray font-inter leading-tight"
              htmlFor="destination"
            >
              Destination
            </label>
            <Field
              name="destination"
              placeholder="Enter destination"
              className="text-base font-normal bg-transparent focus:outline-none focus:ring-2 focus:ring-darkBlue text-smokyGray "
              value={values.destination}
              onChange={(e) => setFieldValue("destination", e.target.value)}
            />
            {errors.destination && touched.destination && (
              <span className="text-red-500 text-xs mt-1">{errors.destination}</span>
            )}
          </div>
        </div>

        {/* Date Range */}
        <div
          className="relative flex items-center p-4 gap-4 w-full sm:w-[280px] lg:w-[25%] h-[57px] md:w-[350px] bg-backgroundColor rounded-2xl"
          ref={calendarRef}
        >
          <Calendar className="text-smokyGray w-6 h-6" />
          <div className="flex flex-col">
            <label
              className="text-xs font-light text-smokyGray font-inter leading-tight"
              htmlFor="dateRange"
            >
              Travel Period
            </label>
            <button
              type="button"
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="text-sm font-normal text-smokyGray  focus:outline-none"
            >
              {dateRange.startDate.toLocaleDateString()} -{" "}
              {dateRange.endDate.toLocaleDateString()}
            </button>
          </div>
          {showDatePicker && (
            <div className="absolute z-50 mt-2 shadow-lg">
              <DateRange
                ranges={[dateRange]}
                onChange={(item) => setDateRange(item.selection)}
                moveRangeOnFirstSelection={false}
                rangeColors={["#3b82f6"]}
              />
            </div>
          )}
        </div>

        {/* Rooms & Travelers */}
        <div className="flex items-center p-4 gap-4 w-full sm:w-[280px] lg:w-[25%] h-[57px] md:w-[350px] bg-backgroundColor rounded-2xl">
          <BedDouble className="text-smokyGray w-6 h-6" />
          <div className="flex flex-col">
            <label
              className="text-xs font-light text-smokyGray font-inter leading-tight"
              htmlFor="rooms"
            >
              Rooms & Travellers
            </label>
            <span className="text-base font-normal text-smokyGray ">
              {values.rooms} Rooms, {values.persons} Persons
            </span>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex p-4 gap-4 w-full sm:w-[280px] lg:w-[22%] h-[57px] md:w-[350px] bg-darkBlue rounded-2xl ">
          <button
            type="submit"
            className="flex items-center px-3 py-3 gap-4  text-white font-medium text-xl focus:outline-none  transition-all"
          >
            <Search />
            <span>Search</span>
          </button>
        </div>
      </div>
    </Form>
  );
};

export default HotelForm;
