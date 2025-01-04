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
      <div className="max-w-[1100px] w-full bg-white rounded-3xl shadow-lg p-2 lg:p-8 space-y-4 lg:space-y-8">
        <div className="flex flex-row w-full justify-between items-center gap-4 overflow-x-auto scrollbar-hide  pt-4">
          {searchStatus.map((item, index) => (
            <div
              key={index}
              onClick={() => setSearchStatusVal(index)}
              className={`cursor-pointer hover:text-primaryColor hover:scale-105 ${
                searchStatusVal === index
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
              <div className="flex flex-col lg:flex-row gap-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
                  {/* Destination */}
                  <div className="relative">
                    <label className="text-sm text-gray-600 mb-1 block opacity-50">
                      Destination
                    </label>
                    <Field name="destination">
                      {({ field }) => (
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <select
                            {...field}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg "
                          >
                            <option value="">Select destination</option>
                            {destinations.map((dest) => (
                              <option key={dest} value={dest}>
                                {dest}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </Field>
                  </div>

                  {/* Date Range */}
                  <div className="relative" ref={calendarRef}>
                    <label className="text-sm text-gray-600 mb-1 block opacity-50">
                      Travel Period
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="w-full pl-10 py-2 border rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {formatDate(values.dateRange.startDate)} -{" "}
                        {formatDate(values.dateRange.endDate)}
                      </button>
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
                  </div>

                  {/* Rooms & Travelers */}
                  <div className="relative">
                    <label className="text-sm text-gray-600 mb-1 block opacity-50">
                      Rooms & Travellers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <div className="w-full pl-10 pr-4 py-2 border rounded-lg">
                        {values.rooms} Rooms, {values.persons} Persons
                      </div>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="relative flex items-end">
                    <button
                      type="submit"
                      className="w-full bg-darkBlue text-white text-2xl rounded-3xl py-3 flex items-center justify-center gap-4 hover:bg-blue-800"
                    >
                      <Search className="w-10 h-10" />
                      Search
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
