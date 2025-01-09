import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DateRange } from "react-date-range";
import {
  Plane,
  Ship,
  MapPin,
  Calendar,
  Users,
  Search,
  Navigation,
  BedDouble,
  House,
} from "lucide-react";

const ValidationSchema = Yup.object().shape({
  destination: Yup.string().required("Destination is required"),
  dateRange: Yup.object().shape({
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date().required("End date is required"),
  }),
  rooms: Yup.number().min(1, "At least 1 room required").required("Required"),
  persons: Yup.number()
    .min(1, "At least 1 person required")
    .required("Required"),
});

const searchStatus = [
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Plane className="h-5 w-5" />
        <span>Flight</span>
        <span>+</span>
        <BedDouble className="h-5 w-5" />
        <span>Hotel</span>
      </div>
    ),
  },
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Plane className="h-5 w-5" />
        <span>Flight</span>
      </div>
    ),
  },
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <BedDouble className="h-5 w-5" />
        <span>Hotel</span>
      </div>
    ),
  },
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Ship className="h-5 w-5" />
        <span>Cruise</span>
      </div>
    ),
  },
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Navigation className="h-5 w-5" />
        <span>Tour</span>
      </div>
    ),
  },
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <House className="h-5 w-5" />
        <span className="text-nowrap">Vacation Apartment</span>
      </div>
    ),
  },
];

const SearchForm = () => {
  const calendarRef = useRef(null);
  const [searchStatusVal, setSearchStatusVal] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    key: "selection",
  });

  const destinations = ["Colombo", "Bangkok", "Singapore", "Dubai", "Tokyo"];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex  justify-center">
      <div className="max-w-[1140px] w-full bg-white rounded-3xl shadow-lg p-2 lg:p-8 space-y-4 lg:space-y-8">
        <div className="flex flex-row w-full justify-between items-center gap-4 overflow-x-auto scrollbar-hide  pt-4">
          {searchStatus.map((item, index) => (
            <div
              key={index}
              onClick={() => setSearchStatusVal(index)}
              className={`cursor-pointer hover:text-primaryColor hover:scale-105 ${searchStatusVal === index
                ? "p-2 lg:p-4 rounded-3xl bg-orange text-white"
                : ""
                }`}
            >
              {item.component}
            </div>
          ))}
        </div>
        <Formik
          initialValues={{
            destination: "",
            dateRange: {
              startDate: new Date(),
              endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
            rooms: 2,
            persons: 3,
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:flex w-full justify-between items-center gap-4">

                  {/* Destination */}
                  <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] w-full bg-backgroundColor rounded-[20px]">
                    {/* Location Marker Icon */}
                    <div className="flex-none w-[24.24px] h-[28px] relative">
                      <MapPin className="text-smokyGray" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-start gap-[3px]">
                      {/* Label */}
                      <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                        Destination
                      </span>

                      {/* Destination Dropdown */}
                      <Field name="destination">
                        {({ field }) => (
                          <select
                            {...field}
                            className=" text-smokyGray font-inter font-normal text-base leading-[19px] focus:outline-none focus:ring-2 focus:ring-primaryColor bg-transparent"
                          >
                            <option value="">Select destination</option>
                            {destinations.map((dest) => (
                              <option key={dest} value={dest}>
                                {dest}
                              </option>
                            ))}
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px]">
                    {/* Calendar Icon */}
                    <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
                      <Calendar className="text-smokyGray" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-start gap-[3px]">
                      {/* Label */}
                      <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                        Travel Period
                      </span>
                      {/* Selected Date Range */}
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="text-smokyGray font-inter font-normal text-base leading-[19px]"
                      >
                        {formatDate(values.dateRange.startDate)} - {formatDate(values.dateRange.endDate)}
                      </button>
                    </div>

                    {/* Date Picker */}
                    {showDatePicker && (
                      <div className="absolute z-50 mt-2">
                        <DateRange
                          ranges={[dateRange]}
                          onChange={(ranges) => {
                            setDateRange(ranges.selection);
                            setFieldValue("dateRange", ranges.selection);
                          }}
                          months={2}
                          direction="horizontal"
                          className="border rounded-lg shadow-lg"
                        />
                      </div>
                    )}
                  </div>

                  {/* Rooms & Travelers */}
                  <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[262px] h-[57px] bg-backgroundColor rounded-[20px]">
                    {/* Icon */}
                    <div className="flex-none w-[36px] h-[36px] flex items-center justify-center">
                      <BedDouble className="text-smokyGray" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-start gap-[3px]">
                      {/* Label */}
                      <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                        Rooms & Travellers
                      </span>
                      {/* Data */}
                      <span className="text-smokyGray font-inter font-normal text-base leading-[19px]">
                        {values.rooms} Rooms, {values.persons} Person
                      </span>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="relative flex items-end">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-4 px-5 py-[14px] w-[174px] h-[57px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    >
                      {/* Search Icon */}
                      <Search className="w-[28px] h-[28px] rounded-full p-[3px]" />

                      {/* Text */}
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchForm;
