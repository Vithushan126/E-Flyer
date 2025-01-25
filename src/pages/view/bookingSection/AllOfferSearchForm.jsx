import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DateRange } from "react-date-range";
import { Calendar, Users, Search, Plane, BedDouble } from "lucide-react";

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
        <BedDouble className="h-5 w-5" />
        <span>Hotel</span>
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
    <div className="w-full flex  justify-center  mt-10 ">
      <div className="w-full rounded-3xl shadow-lg p-2 lg:p-4 space-y-4 lg:space-y-8 ">
        <div className="flex flex-row w-full justify-start items-center gap-10 overflow-x-auto scrollbar-hide  pt-4 px-4">
          {searchStatus.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSearchStatusVal(index);
                setSearchStatus(index);
              }}
              className={`cursor-pointer hover:text-primaryColor hover:scale-105 ${
                searchStatusVal === index
                  ? "py-2 px-4  rounded-3xl bg-orange text-white"
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
                <div className="flex flex-row justify-between gap-4 w-full ">
                  <div className="p-2  flex flex-row items-center space-x-2">
                    <div className="flex justify-center items-center">
                      <Calendar className=" w-10 h-10 text-smokyGray opacity-50 " />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-sm text-gray-600 block opacity-50">
                        Travel Period
                      </label>

                      <div className="">
                        <div className="relative" ref={calendarRef}>
                          <button
                            type="button"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className="w-full p-1  rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 text-nowrap"
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
                    </div>
                  </div>

                  <div className="p-2  flex flex-row items-center space-x-2">
                    <div className="flex justify-center items-center">
                      <BedDouble className=" w-10 h-10 text-smokyGray opacity-50 " />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-sm text-gray-600 block opacity-50">
                        Rooms & Travellers
                      </label>
                      <div className="w-full  border-slate-400 rounded-lg bg-offWhite flex  justify-start focus:ring-0 ">
                        {values.rooms} Rooms, {values.persons} Persons
                      </div>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="relative flex items-center">
                    <button
                      type="submit"
                      className="w-fit px-4 bg-darkBlue text-white text-xl rounded-2xl py-2 flex items-center justify-center gap-4 hover:bg-blue-800"
                    >
                      <Search className="w-8 h-8" />
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

export default AllOfferSearchForm;
