import { Field, Form, Formik } from "formik";
import { Calendar, MapPin, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import FamilyIcon from "../../assets/adventure/FamilyIcon.svg";
import { DateRange } from "react-date-range";

const ValidationSchema = Yup.object().shape({
  destination: Yup.string().required("Destination is required"),
  dateRange: Yup.object().shape({
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date().required("End date is required"),
  }),
});

const AdventureIntro = ({ image, title, paragraph }) => {
  const calendarRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    key: "selection",
  });

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
    <div className="w-full flex justify-center mt-10 lg:mt-20 font-inter">
      <div className="max-w-[1100px] w-full flex flex-col  lg:flex-row space-x-0 lg:space-x-10 space-y-4 lg:space-y-0 ">
        <img
          src={image}
          alt="adventure"
          className="w-full lg:w-[276px] h-[350px] object-cover transition-transform rounded-lg"
        />

        <div className="flex flex-col  flex-grow justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-medium text-gray">{title}</h2>
            <p className="text-base font-light text-gray">{paragraph}</p>
          </div>

          <div className="w-full rounded-3xl shadow-lg p-2 lg:p-4  ">
            <Formik
              initialValues={{
                destination: "",
                dateRange: {
                  startDate: new Date(),
                  endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                },
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="flex flex-col lg:flex-row gap-4 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
                      {/* Destination */}
                      <div className="p-2 rounded-2xl bg-offWhite flex flex-row items-center space-x-2 w-full">
                        <div className="flex justify-center items-center ml-2">
                          <img
                            src={FamilyIcon}
                            alt="FamilyIcon"
                            className=" w-8 h-8 text-smokyGray "
                          />
                        </div>
                        <div className="flex flex-col space-y-0">
                          <label className="text-sm text-smokyGray block opacity-50">
                            Adventure Style
                          </label>

                          <div className="">
                          <Field
                           name="adventure style"
                            placeholder="Enter Style"
                            className="text-sm font-normal bg-transparent text-smokyGray "
                            value={values.destination}
                            onChange={(e) => setFieldValue("destination", e.target.value)}
                          />
                          </div>
                        </div>
                      </div>

                      <div className="p-2 rounded-2xl bg-offWhite flex flex-row items-center space-x-2">
                        <div className="flex justify-center items-center ml-2">
                          <Calendar className="w-8 h-8 text-smokyGray" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <label className="text-sm text-smokyGray block opacity-50 ">
                            Travel Period
                          </label>

                          <div className="">
                            <div className="relative" ref={calendarRef}>
                              <button
                                type="button"
                                onClick={() =>
                                  setShowDatePicker(!showDatePicker)
                                }
                                className="w-full p-1 rounded-lg text-left text-nowrap text-smokyGray text-sm leading-[19px]"
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
                                      setFieldValue(
                                        "dateRange",
                                        ranges.selection
                                      );
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

                      {/* Search Button */}
                      <div className="relative flex items-center">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-4 px-5 py-[14px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
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
      </div>
    </div>
  );
};

export default AdventureIntro;
