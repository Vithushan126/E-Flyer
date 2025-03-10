import React, { useRef, useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MapPin,
  Calendar,
  UserRound,
  Search,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
} from "lucide-react";
import CityAutocomplete from "./CityAutocomplete";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { GetFlightAvailablity } from "../../../redux/feature/flightDetailsSlice";
import PassengersAttachment from "./PassengersAttachment";
import TravelClassAttachment from "./TravelClassAttachment";
import CalenderComponent from "./CalenderComponent";
import LoadingScreen from "../../../components/ui/loading/LoadingScreen";
import { FaSpinner } from "react-icons/fa";

// Get today's date at midnight for consistent comparison
const today = new Date();
today.setHours(0, 0, 0, 0);

const validationSchema = Yup.object().shape({
  flights: Yup.array().test(
    "validate-first-flight",
    null, // Using null here as we'll provide specific error messages in the test
    function (flights) {
      if (!flights || flights.length === 0) {
        return this.createError({
          path: `${this.path}[0]`,
          message: "At least one flight is required",
        });
      }

      const firstFlight = flights[0];
      const errors = {};
      let hasErrors = false;

      // Validate departure
      if (!firstFlight.departure) {
        errors.departure = "Departure city is required";
        hasErrors = true;
      }

      // Validate flyTo
      if (!firstFlight.flyTo) {
        errors.flyTo = "Destination city is required";
        hasErrors = true;
      } else if (firstFlight.departure === firstFlight.flyTo) {
        errors.flyTo = "Departure and destination cannot be the same";
        hasErrors = true;
      }

      // Validate departureDate for the first flight
      if (!firstFlight.departureDate) {
        errors.departureDate = "Departure date is required";
        hasErrors = true;
      } else {
        const flightDepartureDate = new Date(firstFlight.departureDate);
        if (flightDepartureDate < today) {
          errors.departureDate = "Departure date cannot be in the past";
          hasErrors = true;
        }
      }

      // Validate returnDate only if tripType is "Return"
      const tripType = this.parent.tripType;
      console.log(tripType);

      if (tripType === "Return") {
        if (!firstFlight.returnDate) {
          errors.returnDate = "Return date is required";
          hasErrors = true;
        } else if (firstFlight.departureDate) {
          const departureDate = new Date(firstFlight.departureDate);
          const returnDate = new Date(firstFlight.returnDate);

          if (returnDate < departureDate) {
            errors.returnDate = "Return date cannot be before departure date";
            hasErrors = true;
          }
        }
      }

      // If there are errors, return them
      if (hasErrors) {
        return this.createError({
          path: `${this.path}[0]`,
          message: errors,
          params: { errors },
        });
      }

      return true;
    }
  ),
});

const FlightForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location.state?.formValues);

  const defaultInitialValues = {
    travelClass: "Economy",
    baggage: "Carry-on Baggage",
    tripType: "Return",
    adults: 1,
    children: 0,
    babies: 0,
    returnDate: "",
    departureDate: "",
    flights: [
      {
        departure: "",
        flyTo: "",
        flexibleDays: 0,
        departureDate: "",
        returnDate: "",
      },
      {
        departure: "",
        flyTo: "",
        flexibleDays: 0,
        departureDate: "",
        returnDate: "",
      },
    ],
  };

  const initialValues = location.state?.formValues || defaultInitialValues;

  const { loading } = useSelector((state) => state.flightDetails);

  const [tripType, setTripType] = useState("Return");
  const [showPassengersModal, setShowPassengersModal] = useState(false);
  const [showTravelClassModal, setShowTravelClassModal] = useState(false);
  const [showCalenderModal, setShowCalenderModal] = useState(false);

  const onSubmit = async (values) => {
    console.log("Submitting form with values:", values);
    console.log("Submitting form with values:", values.flights[0]);

    const { departureDate, returnDate } = values.flights[0];

    console.log(departureDate, returnDate);

    const formattedDepartureDate = departureDate.split("T")[0];
    const formattedReturnDate = returnDate.split("T")[0];

    console.log(formattedDepartureDate, formattedReturnDate);

    dispatch(
      GetFlightAvailablity({
        dep_date: formattedDepartureDate,
        des_date: formattedReturnDate,
        dep_apt: "LHR",
        des_apt: "FRA",
        adults: values?.adults,
        children: values?.children,
        babies: values?.babies,
        airline_codes: ["BA", "QR", "EY"],
      })
    );

    navigate("/available-flights", {
      state: { selectedTab: 1, formValues: values },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, errors, touched, resetForm }) => {
        console.log("Formik Values:", values);
        const persons = values.adults + values.children + values.babies;
        return (
          <Form className="flex flex-col space-y-4">
            {/* Trip Type */}
            <div className="flex flex-row justify-center items-center  space-x-8 ">
              {["Return", "One Way", "Multi City"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <Field
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => {
                      setTripType(type);
                      resetForm({
                        values: { ...defaultInitialValues, tripType: type },
                      });
                      setFieldValue("tripType", type);
                    }}
                    className="accent-darkBlue"
                  />
                  <span className=" lg:text-base text-xs text-black">
                    {type}
                  </span>
                </label>
              ))}
            </div>

            {/* Your dynamic flight inputs */}
            {tripType === "Multi City" ? (
              <FieldArray
                name="flights"
                render={(arrayHelpers) => (
                  <div className="">
                    {values.flights && values.flights.length > 0 && (
                      <div className="flex flex-col space-y-1 md:space-y-0">
                        {values.flights.map((flight, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 border border-border p-1 rounded-xl  md:border-none md:p-0 md:rounded-none"
                          >
                            {/* Fly From */}
                            <div className="flex flex-col">
                              <div className="flex items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4  bg-backgroundColor rounded-[20px]">
                                <MapPin className="text-smokyGray w-8 h-8" />
                                <div className="flex flex-col items-start">
                                  <span className="text-smokyGray text-xs">
                                    Fly From
                                  </span>
                                  <Field
                                    name={`flights[${index}].departure`}
                                    component={CityAutocomplete}
                                    className="text-base focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Fly To */}
                            <div className="flex flex-col">
                              <div className="flex items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4  bg-backgroundColor rounded-[20px]">
                                <MapPin className="text-smokyGray w-8 h-8" />
                                <div className="flex flex-col items-start">
                                  <span className="text-smokyGray text-xs">
                                    Fly To
                                  </span>
                                  <Field
                                    name={`flights[${index}].flyTo`}
                                    component={CityAutocomplete}
                                    className="text-base focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Departure */}
                            <div className="flex flex-col">
                              <div className="flex  justify-between items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4 bg-backgroundColor rounded-[20px]">
                                <div className="flex flex-row items-center space-x-4 md:space-x-1 lg:space-x-4">
                                  <Calendar className="text-smokyGray w-8 h-8" />

                                  <div className="flex flex-col  items-start">
                                    <span className="text-smokyGray text-xs">
                                      Departure
                                    </span>
                                    <div className="">
                                      <Field
                                        name={`flights[${index}].departureDate`}
                                        type="date"
                                        min={
                                          new Date().toISOString().split("T")[0]
                                        }
                                        className="text-base focus:outline-none bg-backgroundColor "
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-row space-x-2 items-end h-full">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (values.departureDate) {
                                        const nextDate = new Date(
                                          values.departureDate
                                        );
                                        nextDate.setDate(
                                          nextDate.getDate() - 1
                                        );
                                        setFieldValue(
                                          "departureDate",
                                          nextDate.toISOString().split("T")[0]
                                        );
                                      }
                                    }}
                                    className={`flex justify-center items-center h-8 w-8 bg-white rounded-full`}
                                  >
                                    <ChevronLeft />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (values.departureDate) {
                                        const nextDate = new Date(
                                          values.departureDate
                                        );
                                        nextDate.setDate(
                                          nextDate.getDate() + 1
                                        );
                                        setFieldValue(
                                          "departureDate",
                                          nextDate.toISOString().split("T")[0]
                                        );
                                      }
                                    }}
                                    className={`flex justify-center items-center h-8 w-8 bg-white rounded-full `}
                                  >
                                    <ChevronRight />
                                  </button>
                                </div>
                              </div>
                              {errors.departureDate &&
                                touched.departureDate && (
                                  <span className="text-red text-xs mt-1 ml-2">
                                    {errors.departureDate}
                                  </span>
                                )}
                            </div>

                            {/* Remove Button */}
                            <div className="flex justify-center">
                              {index >= 2 && (
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                  className="text-red-500 text-xs"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add New Flight Button */}
                    <div className="flex flex-col items-center mt-4 w-full">
                      <button
                        type="button"
                        className="flex flex-row items-center space-x-4"
                        onClick={() =>
                          arrayHelpers.push({
                            departure: "",
                            flyTo: "",
                            passengers: 1,
                          })
                        }
                      >
                        <span className="h-8 w-8 rounded-full bg-darkBlue text-white flex items-center justify-center text-2xl">
                          +
                        </span>
                        <span className="text-black font-semibold">
                          Add Flight
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              />
            ) : (
              <div>
                {values.flights && values.flights.length > 0 && (
                  <div>
                    <div
                      key={0}
                      className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4"
                    >
                      {/* Fly From */}
                      <div className="flex flex-col">
                        <div className=" flex items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] space-x-4 md:space-x-1 lg:space-x-4 bg-backgroundColor rounded-[20px]">
                          <MapPin className="text-smokyGray w-8 h-8" />
                          <div className="flex flex-col items-start">
                            <span className="text-smokyGray text-xs">
                              Fly From
                            </span>
                            <Field
                              name={`flights[0].departure`}
                              component={CityAutocomplete}
                              className="text-base focus:outline-none"
                            />
                          </div>
                        </div>

                        {values.flights.length > 0 &&
                          errors.flights?.[0]?.departure &&
                          touched.flights?.[0]?.departure && (
                            <span className="text-red text-xs mt-1 ml-2">
                              {errors.flights[0].departure}
                            </span>
                          )}
                      </div>

                      {/* Fly To */}
                      <div className="flex flex-col">
                        <div className=" flex items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4 bg-backgroundColor rounded-[20px]">
                          <MapPin className="text-smokyGray w-8 h-8" />
                          <div className="flex flex-col items-start">
                            <span className="text-smokyGray text-xs">
                              Fly To
                            </span>
                            <Field
                              name={`flights[0].flyTo`}
                              component={CityAutocomplete}
                              className="text-base focus:outline-none"
                            />
                          </div>
                        </div>

                        {values.flights.length > 0 &&
                          errors.flights?.[0]?.flyTo &&
                          touched.flights?.[0]?.flyTo && (
                            <span className="text-red text-xs mt-1 ml-2">
                              {errors.flights[0].flyTo}
                            </span>
                          )}
                      </div>

                      {/* Passengers */}
                      <div className="flex flex-col relative">
                        <div
                          className="flex justify-between items-center  p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-0 lg:gap-4 bg-backgroundColor rounded-[20px]"
                          onClick={() => setShowPassengersModal(true)}
                        >
                          <div className="flex flex-row items-center space-x-4 md:space-x-1 lg:space-x-4">
                            <UserRound className="text-smokyGray w-8 h-8" />
                            <div className="flex flex-col">
                              <span className="text-xs text-smokyGray">
                                Passengers
                              </span>
                              <div className="text-s font-semibold text-smokyGray flex flex-row space-x-2">
                                <span>{persons}</span>
                                <span>Persons</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row space-x-2 md:space-x-1 lg:space-x-2 items-center">
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
                              className={`flex justify-center h-8 w-8 text-white rounded-full text-xl bg-darkBlue  ${
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
                              {showPassengersModal ? (
                                <ChevronUp />
                              ) : (
                                <ChevronDown />
                              )}
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
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 ">
              {tripType == "Multi City" ? (
                <div className="flex flex-col relative">
                  {/* Passengers */}
                  <div
                    className="flex justify-between items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4 bg-backgroundColor rounded-[20px]"
                    onClick={() => setShowPassengersModal(true)}
                  >
                    <div className="flex flex-row items-center space-x-4 md:space-x-1 lg:space-x-4">
                      <UserRound className="text-smokyGray w-8 h-8" />
                      <div className="flex flex-col">
                        <span className="text-xs text-smokyGray">
                          Passengers
                        </span>
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
              ) : (
                <div className="flex flex-col relative">
                  {/* Departure */}
                  <div
                    className="flex  justify-between items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4 bg-backgroundColor rounded-[20px]"
                    onClick={() => setShowCalenderModal(!showCalenderModal)}
                  >
                    <div className="flex flex-row items-center space-x-4 md:space-x-1 lg:space-x-4">
                      <Calendar className="text-smokyGray w-8 h-8" />

                      <div className="flex flex-col  items-start">
                        <span className="text-smokyGray text-xs">
                          Departure
                        </span>

                        <div className="text-nowrap">
                          {values.flights?.[0]?.departureDate
                            ? values.flights[0].departureDate.slice(0, 10)
                            : "mm/dd/yyyy"}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row space-x-2 md:space-x-1 lg:space-x-2 items-end h-full">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (values.flights?.[0]?.departureDate) {
                            const nextDate = new Date(
                              values.flights[0].departureDate
                            );
                            nextDate.setDate(nextDate.getDate() - 1);
                            setFieldValue(
                              "flights[0].departureDate",
                              nextDate.toISOString().split("T")[0]
                            );
                          }
                        }}
                        className={`flex justify-center items-center h-8 w-8 bg-white rounded-full ${
                          tripType !== "Return" ? "bg-opacity-30 " : ""
                        }`}
                      >
                        <ChevronLeft />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (values.flights?.[0]?.departureDate) {
                            const nextDate = new Date(
                              values.flights[0].departureDate
                            );
                            nextDate.setDate(nextDate.getDate() + 1);
                            setFieldValue(
                              "flights[0].departureDate",
                              nextDate.toISOString().split("T")[0]
                            );
                          }
                        }}
                        className={`flex justify-center items-center h-8 w-8 bg-white rounded-full ${
                          tripType !== "Return" ? "bg-opacity-30 " : ""
                        }`}
                      >
                        <ChevronRight />
                      </button>
                    </div>
                  </div>

                  {errors.flights?.[0]?.departureDate &&
                    touched.flights?.[0]?.departureDate && (
                      <span className="text-red text-xs mt-1 ml-2">
                        {errors.flights[0].departureDate}
                      </span>
                    )}

                  {showCalenderModal && (
                    <CalenderComponent
                      values={values}
                      setFieldValue={setFieldValue}
                      calClose={() => setShowCalenderModal(false)}
                      tripType={tripType}
                    />
                  )}
                </div>
              )}

              {/* Return */}
              <div className="flex flex-col relative">
                <div
                  className={`flex justify-between items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4 bg-backgroundColor  rounded-[20px]  ${
                    tripType !== "Return"
                      ? "bg-opacity-30 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={
                    tripType === "Return"
                      ? () => setShowCalenderModal(!showCalenderModal)
                      : undefined
                  }
                >
                  <div className="flex flex-row items-center space-x-4 md:space-x-1 lg:space-x-4">
                    <Calendar className="text-smokyGray w-8 h-8" />

                    <div className="flex flex-col  items-start">
                      <span className="text-smokyGray text-xs">Return</span>
                      <div className="text-nowrap">
                        {values.flights?.[0]?.returnDate
                          ? values.flights[0].returnDate.slice(0, 10)
                          : "mm/dd/yyyy"}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row space-x-2 md:space-x-1 lg:space-x-2 items-end h-full">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (values.flights?.[0]?.returnDate) {
                          const prevDate = new Date(
                            values.flights[0].returnDate
                          );
                          prevDate.setDate(prevDate.getDate() - 1);
                          setFieldValue(
                            "flights[0].returnDate",
                            prevDate.toISOString().split("T")[0]
                          );
                        }
                      }}
                      className={`flex justify-center items-center h-8 w-8 bg-white rounded-full ${
                        tripType !== "Return"
                          ? "bg-opacity-30 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (values.flights?.[0]?.returnDate) {
                          const nextDate = new Date(
                            values.flights[0].returnDate
                          );
                          nextDate.setDate(nextDate.getDate() + 1);
                          setFieldValue(
                            "flights[0].returnDate",
                            nextDate.toISOString().split("T")[0]
                          );
                        }
                      }}
                      className={`flex justify-center items-center h-8 w-8 bg-white rounded-full ${
                        tripType !== "Return"
                          ? "bg-opacity-30 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
                {/* Return error message conditional rendering */}
                {errors.flights?.[0]?.returnDate &&
                  touched.flights?.[0]?.returnDate &&
                  tripType === "Return" && (
                    <span className="text-red text-xs mt-1 ml-2">
                      {errors.flights[0].returnDate}
                    </span>
                  )}
              </div>

              {/* Travel Class */}
              <div className="flex flex-col relative">
                <div
                  className="flex items-center p-[10px_20px] md:p-[10px_5px] lg:p-[10px_20px] gap-4 md:gap-1 lg:gap-4 bg-backgroundColor rounded-[20px]"
                  onClick={() => setShowTravelClassModal(true)}
                >
                  <BriefcaseBusiness className="text-smokyGray w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-xs text-smokyGray">
                      Travel Class & Baggage
                    </span>
                    <div className="text-s font-semibold text-smokyGray flex flex-row space-x-1 text-nowrap ">
                      {values.travelClass}{" "}
                      <span className="text-xs font-thin">with</span>
                      {values.baggage}
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
                disabled={loading}
                className="w-full lg:w-1/3 flex items-center justify-center gap-4 px-5 py-[14px]  h-[57px] bg-darkBlue text-white rounded-[20px] hover:bg-blue-800"
              >
                {loading && (
                  <FaSpinner className="animate-spin text-white text-xl" />
                )}
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
