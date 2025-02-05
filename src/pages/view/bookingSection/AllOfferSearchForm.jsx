import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DateRange } from "react-date-range";
import { Calendar, Search, Plane, BedDouble, Compass } from "lucide-react";

const searchStatus = [
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Plane className="h-5 w-5" />
        <span>Flight</span>
        <span>+</span>
        <Compass className="h-5 w-5" />
        <span>round trip</span>
      </div>
    ),
  },
  {
    component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Compass className="h-5 w-5" />
        <span>round trip</span>
      </div>
    ),
  },
];

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

const AllOfferSearchForm = ({ setSearchStatus }) => {
  const calendarRef = useRef(null);
  const [searchStatusVal, setSearchStatusVal] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    key: "selection",
  });

  const destinations = ["Colombo", "Bangkok", "Singapore", "Dubai", "Tokyo"];

  const formatDate = (date) => date.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-between mt-6">
      <div className="w-full rounded-3xl shadow-lg p-4 space-y-6">
        {/* Tabs for Flight/Hotel Options */}
        <div className="flex gap-4 justify-evenly overflow-x-auto scrollbar-hide py-2 px-2">
          {searchStatus.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSearchStatusVal(index);
                setSearchStatus(index);
              }}
              className={`cursor-pointer hover:text-primaryColor hover:scale-105 px-4 py-2 ${
                searchStatusVal === index ? "rounded-3xl bg-orange text-white" : ""
              }`}
            >
              {item.component}
            </div>
          ))}
        </div>

        {/* Form */}
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
          onSubmit={(values) => console.log(values)}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex flex-col justify-between lg:flex-row gap-4">
                {/* Travel Period */}
                <div className="flex flex-row items-center gap-2">
                  <Calendar className="h-6 w-6 text-gray-400" />
                  <div>
                    <label className="text-sm text-gray-600">Travel Period</label>
                    <div className="relative" ref={calendarRef}>
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="text-sm focus:outline-none"
                      >
                        {formatDate(values.dateRange.startDate)} - {formatDate(values.dateRange.endDate)}
                      </button>
                      {showDatePicker && (
                        <div className="absolute z-50 mt-2">
                          <DateRange
                            ranges={[dateRange]}
                            onChange={(ranges) => {
                              setDateRange(ranges.selection);
                              setFieldValue("dateRange", ranges.selection);
                            }}
                            className="border rounded-lg shadow-lg"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rooms & Travelers */}
                <div className="flex flex-row items-center gap-2">
                  <BedDouble className="h-6 w-6 text-gray-400" />
                  <div>
                    <label className="text-sm text-gray-600">Rooms & Travelers</label>
                    <div className="text-sm">{values.rooms} Rooms, {values.persons} Persons</div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-darkBlue text-white rounded-2xl px-4 py-2 text-sm hover:bg-blue-800"
                >
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};


export default AllOfferSearchForm;
