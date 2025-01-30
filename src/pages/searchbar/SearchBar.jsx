import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DateRange } from "react-date-range";
import { MapPin, Calendar, BedDouble, Search } from "lucide-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; 

const SearchBar = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const destinations = ["New York", "Los Angeles", "San Francisco", "Chicago"];
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validationSchema = Yup.object().shape({
    destination: Yup.string().required("Destination is required"),
  });

  return (
    <Formik
      initialValues={{
        destination: "",
        rooms: 1,
        persons: 2,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values, dateRange);
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="w-full flex justify-center mt-10">
          <div className="w-full max-w-6xl rounded-3xl shadow-lg p-4 space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {/* Destination */}
              <div className="flex flex-row items-center p-[10px_20px] gap-[20px] bg-backgroundColor rounded-[20px]">
                <MapPin className="text-smokyGray w-[24.24px] h-[28px]" />
                <div className="flex flex-col items-start gap-[3px]">
                  <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                    Destination
                  </span>
                  <Field
                    as="select"
                    name="destination"
                    className="text-smokyGray font-inter font-normal text-base leading-[19px] focus:outline-none focus:ring-2 focus:ring-primaryColor bg-transparent"
                    value={values.destination}
                    onChange={(e) => setFieldValue("destination", e.target.value)}
                  >
                    <option value="">Select destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </Field>
                  {errors.destination && touched.destination && (
                    <span className="text-red text-xs">{errors.destination}</span>
                  )}
                </div>
              </div>

              {/* Date Range */}
              <div className="relative flex flex-row items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]" ref={dropdownRef}>
                <Calendar className="text-smokyGray" />
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
              <div className="flex flex-row items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]">
                <BedDouble className="text-smokyGray w-[36px] h-[36px]" />
                <div className="flex flex-col items-start gap-[3px]">
                  <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                    Rooms & Travellers
                  </span>
                  <span className="text-smokyGray font-inter font-normal text-sm leading-[19px]">
                    Rooms & Travelers
                  </span>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-4 px-5 py-[14px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <Search />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
