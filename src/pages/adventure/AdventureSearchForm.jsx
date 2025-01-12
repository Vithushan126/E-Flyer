import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DateRange } from "react-date-range";
import { MapPin, Calendar, Users, Search } from "lucide-react";

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

const AdventureSearchForm = () => {
  const calendarRef = useRef(null);
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
    <div className="w-full flex  justify-center  mt-10">
      <div className="w-full rounded-3xl shadow-lg p-2 lg:p-4 space-y-4 lg:space-y-8 ">
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
                  <div className="p-2 rounded-3xl bg-offWhite flex flex-row items-center space-x-2 w-full">
                    <div className="flex justify-center items-center">
                      <MapPin className=" w-10 h-10 text-smokyGray opacity-50 " />
                    </div>
                    <div className="flex flex-col space-y-0">
                      <label className="text-sm text-gray-600 block opacity-50">
                        Destination
                      </label>

                      <div className="">
                        <Field name="destination">
                          {({ field }) => (
                            <div className="relative">
                              <select
                                {...field}
                                className="w-full border border-none rounded-lg bg-offWhite flex  justify-start "
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
                    </div>
                  </div>

                  <div className="p-2 rounded-3xl bg-offWhite flex flex-row items-center space-x-2">
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

                  <div className="p-2 rounded-3xl bg-offWhite flex flex-row items-center space-x-2">
                    <div className="flex justify-center items-center">
                      <Users className=" w-10 h-10 text-smokyGray opacity-50 " />
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
                  <div className="relative flex items-end">
                    <button
                      type="submit"
                      className="w-full bg-darkBlue text-white text-xl rounded-3xl py-2 flex items-center justify-center gap-4 hover:bg-blue-800"
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

export default AdventureSearchForm;
