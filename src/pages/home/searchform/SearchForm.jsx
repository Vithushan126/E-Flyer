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
    <div className="w-full flex  justify-center -mt-24 lg:-mt-44 z-50 relative  mb-20">
      <div className="max-w-[1100px] w-full bg-white rounded-3xl shadow-lg p-2 lg:p-8 space-y-4 lg:space-y-8">
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
            rooms: 1,
            persons: 2,
          }}
          validationSchema={ValidationSchema} // Use the correct variable name
          onSubmit={(values) => {
            console.log("Form Submitted:", values, dateRange);
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <div className="flex flex-col lg:flex-row  gap-4 w-full justify-between ">
                {/* Destination */}
                <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                  <MapPin className="text-smokyGray w-[24.24px] h-[28px]" />
                  <div className="flex flex-col items-start gap-[3px]">
                    <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                      Destination
                    </span>
                    <Field
                      as="select"
                      name="destination"
                      className="text-smokyGray font-inter font-normal text-base leading-[19px] focus:outline-none focus:ring-2 focus:ring-primaryColor bg-transparent"
                      value={values.destination} // Controlled component: bind value to Formik's field value
                      onChange={(e) => setFieldValue('destination', e.target.value)} // Update Formik's value on change
                    >
                      <option value="">Select destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </Field>
                    {errors.destination && touched.destination && (
                      <span className="text-red-500 text-xs">
                        {errors.destination}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date Range */}
                <div
                  className="relative flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[280px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full"
                  ref={calendarRef}
                >
                  <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
                    <Calendar className="text-smokyGray" />
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                      Travel Period
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowDatePicker(!showDatePicker)}
                      className="text-smokyGray font-inter font-normal text-base leading-[19px]"
                    >
                      {dateRange.startDate.toLocaleDateString()} -{" "}
                      {dateRange.endDate.toLocaleDateString()}
                    </button>
                  </div>
                  {showDatePicker && (
                    <div className="absolute z-50 mt-2">
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
                <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                  <BedDouble className="text-smokyGray w-[36px] h-[36px]" />
                  <div className="flex flex-col items-start gap-[3px]">
                    <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                      Rooms & Travellers
                    </span>
                    <span className="text-[#5A5A5A] font-inter font-normal text-base leading-[19px]">
                      {values.rooms} Rooms, {values.persons} Persons
                    </span>
                  </div>
                </div>

                {/* Search Button */}
                <div className="relative flex items-end">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-4 px-5 py-[14px] sm:w-[174px] w-full  h-[57px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                  >
                    <Search />
                    <span>Search</span>
                  </button>
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