import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  MapPin,
  Calendar,
  UserRound,
  Search,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import CityAutocomplete from "./CityAutocomplete";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { GetFlightAvailablity } from "../../../redux/feature/flightDetailsSlice";
import PassengersAttachment from "./PassengersAttachment";
import TravelClassAttachment from "./TravelClassAttachment";

// Get today's date at midnight for consistent comparison
const today = new Date();
today.setHours(0, 0, 0, 0);

const validationSchema = Yup.object().shape({
  departure: Yup.string().required("Departure city is required"),
  destination: Yup.string()
    .required("Destination city is required")
    .test(
      "different-cities",
      "Departure and destination cannot be the same",
      function (value) {
        return this.parent.departure !== value;
      }
    ),

  adults: Yup.number().min(1).max(6).required("Adult passengers required"),
  children: Yup.number().min(0).max(6).required("Child passengers required"),
  babies: Yup.number().min(0).max(1).required("Baby passengers required"),

  departureDate: Yup.date()
    .required("Departure date is required")
    .min(today, "Departure date cannot be in the past"),

  returnDate: Yup.date()
    .nullable() // Allows null values
    .when("tripType", {
      is: (tripType) => tripType === "Return" || tripType === "Multi City",
      then: (schema) =>
        schema
          .required("Return date is required")
          .min(
            Yup.ref("departureDate"),
            "Return date must be after departure date"
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
});

const initialValues = {
  tripType: "Return",
  departure: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  travelClass: "Economy",
  baggage: "Carry-on baggage only",
  adults: 1,
  children: 0,
  babies: 0,
};

const FlightForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tripType, setTripType] = useState("Return");
  const [showPassengersModal, setShowPassengersModal] = useState(false);
  const [showTravelClassModal, setShowTravelClassModal] = useState(false);
  // console.log(tripType);

  const onSubmit = (values) => {
    console.log("Submitting form with values:", values);

    const { departureDate, returnDate, departure, destination } = values;

    const formattedDepartureDate = departureDate.split("T")[0];
    const formattedReturnDate = returnDate.split("T")[0];

    dispatch(
      GetFlightAvailablity({
        dep_date: formattedDepartureDate,
        des_date: formattedReturnDate,
        dep_apt: "LHR",
        des_apt: "FRA",
      })
    );
    navigate("/available-flights");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, errors, touched, resetForm }) => {
        const persons = values.adults + values.children + values.babies;
        return (
          <Form>
            {/* Trip Type */}
            <div className="flex flex-row justify-center items-center mb-8 space-x-8 m-8 ">
              {["Return", "One Way", "Multi City"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <Field
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => {
                      setTripType(type);
                      setFieldValue("tripType", type);
                      resetForm();
                    }}
                    className="accent-darkBlue"
                  />
                  <span className=" lg:text-base text-xs text-black">
                    {type}
                  </span>
                </label>
              ))}
            </div>

            {/* Main Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
              {/* Fly From */}
              <div className="flex flex-col">
                <div className="flex items-center p-[10px_20px] gap-4  bg-backgroundColor rounded-[20px]">
                  <MapPin className="text-smokyGray" />
                  <div className="flex flex-col items-start">
                    <span className="text-smokyGray text-xs">Fly From</span>
                    <Field
                      name="departure"
                      component={CityAutocomplete}
                      className="text-base focus:outline-none"
                    />
                  </div>
                </div>
                {errors.departure && touched.departure && (
                  <span className="text-red text-xs  mt-1 ml-2">
                    {errors.departure}
                  </span>
                )}
              </div>

              {/* Fly To */}
              <div className="flex flex-col">
                <div className="flex items-center p-[10px_20px] gap-4  bg-backgroundColor rounded-[20px]">
                  <MapPin className="text-smokyGray" />
                  <div className="flex flex-col items-start">
                    <span className="text-smokyGray text-xs">Fly To</span>
                    <Field
                      name="destination"
                      component={CityAutocomplete}
                      className="text-base focus:outline-none"
                    />
                  </div>
                </div>
                {errors.destination && touched.destination && (
                  <span className="text-red text-xs mt-1 ml-2">
                    {errors.destination}
                  </span>
                )}
              </div>

              {/* Pessengers */}
              <div className="flex flex-col relative">
                <div
                  className="flex justify-between items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]"
                  onClick={() => setShowPassengersModal(true)}
                >
                  <div className="flex flex-row items-center space-x-4">
                    <UserRound className="text-smokyGray" />
                    <div className="flex flex-col">
                      <span className="text-xs text-smokyGray">Pessengers</span>
                      <div className="text-s font-semibold text-smokyGray flex flex-row space-x-2">
                        <span>{persons}</span>
                        <span>Persons</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <button
                      type="button"
                      disabled={values.adults === 6 || persons === 9}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFieldValue("adults", values.adults + 1);
                      }}
                      className={`flex justify-center h-8 w-8 text-white rounded-full text-xl bg-darkBlue ${
                        values.adults === 6 || persons === 9
                          ? "cursor-not-allowed bg-opacity-50"
                          : "cursor-pointer"
                      }`}
                    >
                      +
                    </button>
                    <div
                      type="button"
                      disabled={values.adults === 1}
                      onClick={(e) => {
                        if (values.adults > 1) {
                          e.stopPropagation();
                          setFieldValue("adults", values.adults - 1);
                        }
                      }}
                      className={`flex justify-center h-8 w-8  text-white rounded-full text-xl bg-darkBlue  ${
                        values.adults === 1
                          ? "cursor-not-allowed bg-opacity-50"
                          : "cursor-pointer"
                      }`}
                    >
                      -
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassengersModal(!showPassengersModal)
                      }
                      className="text-smokyGray"
                      aria-label="Toggle passenger options"
                    >
                      {showPassengersModal ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                </div>

                {showPassengersModal && (
                  <PassengersAttachment
                    values={values}
                    setFieldValue={setFieldValue}
                    onClose={() => setShowPassengersModal(false)}
                  />
                )}
              </div>

              {/* Departure */}
              <div className="flex flex-col">
                <div className="flex items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]">
                  <Calendar className="text-smokyGray" />

                  <div className="flex flex-col  items-start">
                    <span className="text-smokyGray text-xs">Departure</span>
                    <div className="">
                      <Field
                        name="departureDate"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="text-base focus:outline-none bg-backgroundColor"
                      />
                    </div>
                  </div>
                </div>
                {errors.departureDate && touched.departureDate && (
                  <span className="text-red text-xs mt-1 ml-2">
                    {errors.departureDate}
                  </span>
                )}
              </div>

              {/* Return */}
              <div className="flex flex-col">
                <div
                  className={`flex items-center p-[10px_20px] gap-5 bg-backgroundColor  rounded-[20px]  ${
                    tripType == "One Way" ? "bg-opacity-30" : ""
                  }`}
                >
                  <Calendar className="text-smokyGray" />

                  <div className="flex flex-col  items-start">
                    <span className="text-smokyGray text-xs">Return</span>
                    <div className="">
                      <Field
                        name="returnDate"
                        type="date"
                        min={values.departureDate}
                        disabled={tripType == "One Way"}
                        className={`text-base focus:outline-none bg-backgroundColor  ${
                          tripType == "One Way"
                            ? "cursor-not-allowed  bg-opacity-0"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
                {errors.returnDate && touched.returnDate && (
                  <span className="text-red text-xs mt-1 ml-2">
                    {errors.returnDate}
                  </span>
                )}
              </div>

              {/* Travel Class */}
              <div className="flex flex-col relative">
                <div
                  className="flex items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]"
                  onClick={() => setShowTravelClassModal(true)}
                >
                  <BriefcaseBusiness className="text-smokyGray" />
                  <div className="flex flex-col">
                    <span className="text-xs text-smokyGray">
                      Travel Class & Baggage
                    </span>
                    <div className="text-s font-semibold text-smokyGray">
                      {values.travelClass} • {values.baggage}
                    </div>
                  </div>
                </div>
                {showTravelClassModal && (
                  <TravelClassAttachment
                    values={values}
                    setFieldValue={setFieldValue}
                    onClose={() => setShowTravelClassModal(false)}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-center ">
              {/* Search Button */}
              <button
                type="submit"
                className="w-full lg:w-1/3 flex items-center justify-center gap-4 px-5 py-[14px]  h-[57px] bg-darkBlue text-white rounded-[20px] hover:bg-blue-800"
              >
                <Search />
                <span>Search</span>
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightForm;
