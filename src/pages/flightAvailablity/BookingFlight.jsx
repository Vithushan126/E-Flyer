import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ChevronDown } from "lucide-react";
import OutboundFlight from "../../assets/view/OutboundFlight.svg";
import ReturnFlight from "../../assets/view/ReturnFlight.svg";
import Line from "../../assets/view/Arrow.svg";
import QatarAirwaysLogo from "../../assets/view/Qatar_Airways_Logo.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingFlight = () => {
  const navigate = useNavigate();
  const {
    flights,
    dep_date,
    des_date,
    adults,
    children,
    babies,
    loading,
    error,
  } = useSelector((state) => state.flightDetails);

  useEffect(() => {
    if (flights.length < 1 && loading === false) {
      navigate("/");
    }
  }, [flights, loading]);

  const initialValues = {
    outboundFlight: "",
    returnFlight: "",
  };

  const validationSchema = Yup.object({
    outboundFlight: Yup.string().required("Please select an outbound flight"),
    returnFlight: Yup.string().required("Please select a return flight"),
  });

  const handleSubmit = (values) => {
    console.log("Selected Flights:", values);
  };

  const getAvailableSeats = (flightId) => {
    let seatsAvailable = null;

    flights.forEach((data) => {
      data.fareDTOList[0]?.flightDTOS?.forEach((flight) => {
        if (
          flight.flightId === flightId &&
          flight.legDTOS &&
          flight.legDTOS.length > 0
        ) {
          seatsAvailable = flight.legDTOS[0].seats_available;
        }
      });
    });

    return seatsAvailable;
  };

  const getPriceInfo = (data) => {
    console.log(data);

    const adultTotal = parseFloat(data?.price_per_adtBuy) * (adults || 0);
    const childTotal = parseFloat(data?.price_per_chdBuy) * (children || 0);
    const babyTotal = parseFloat(data?.price_per_infBuy) * (babies || 0);

    const totalPrice = adultTotal + childTotal + babyTotal;
    console.log(totalPrice);

    return totalPrice;
  };

  return (
    <div className="flex flex-col space-y-10 w-full">
      <div className="overflow-x-scroll scrollbar-hide space-y-4">
        {flights.map((data, index) => (
          <div
            key={index}
            className="rounded-lg md:rounded-3xl border border-darkBlue text-smokyGray p-2 md:p-4 lg:p-8 w-fit md:w-full"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values, setFieldValue }) => {
                const priceInfo = getPriceInfo(data);
                console.log(priceInfo);

                return (
                  <Form className="space-y-8">
                    {/* Outbound */}
                    <div className="flex flex-row justify-between items-center p-2 md:p-4 md:pr-10 bg-[#FAFAFA] rounded-2xl">
                      <div className="flex items-center space-x-4">
                        <img src={OutboundFlight} alt="Outbound Flight" />
                        <div className="">Outbound</div>
                      </div>
                      <div className="w-[70px] h-[70px] border border-border rounded-full p-2 flex items-center justify-center">
                        <img
                          src={flights[0]?.airlineCode || QatarAirwaysLogo}
                          alt="Airline Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-10">
                      {data.fareDTOList[0]?.flightDTOS?.map((flightItem) => (
                        <div
                          key={flightItem?.flightId}
                          className="flex flex-row justify-between items-center md:pl-4 space-x-4"
                        >
                          <label className="flex items-center justify-between cursor-pointer w-full">
                            <div className="flex flex-row justify-between items-center w-full">
                              <Field
                                type="radio"
                                name="outboundFlight"
                                value={flightItem?.flightId}
                                className="w-5 h-5 accent-darkBlue"
                              />
                              <div className="flex flex-col items-center">
                                <span className="ml-4">
                                  {flightItem?.first_departure_date}
                                </span>
                                <span className="font-medium">
                                  {flightItem?.first_departure_time}
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-xs">
                                  {flightItem.duration || flightItem.stops}
                                </span>
                                <img src={Line} alt="Line" className="" />
                                <span className="text-xs">
                                  {flightItem.stops === 0
                                    ? "Direct"
                                    : `${flightItem.stops} stops`}
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="">
                                  {flightItem?.final_destination_date}
                                </span>
                                <span className="font-medium">
                                  {flightItem?.final_destination_time}
                                </span>
                              </div>
                            </div>
                          </label>
                          <div className="">
                            <ChevronDown />
                          </div>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage
                      name="outboundFlight"
                      component="div"
                      className="text-red text-sm"
                    />

                    {/* Return Flight */}
                    <div className="flex flex-row justify-between items-center p-2 md:p-4 md:pr-10 bg-[#FAFAFA] rounded-2xl">
                      <div className="flex items-center space-x-4">
                        <img src={ReturnFlight} alt="Return Flight" />
                        <div className="">Return Flight</div>
                      </div>
                      <div className="w-[70px] h-[70px] border border-border rounded-full p-2 flex items-center justify-center">
                        <img
                          src={flights[0]?.airlineCode || QatarAirwaysLogo}
                          alt="Airline Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-10">
                      {data.fareDTOList[1]?.flightDTOS?.map((flightItem) => (
                        <div
                          key={flightItem.fno}
                          className="flex flex-row justify-between items-center md:pl-4 space-x-4"
                        >
                          <label className="flex items-center justify-between cursor-pointer w-full">
                            <div className="flex flex-row justify-between items-center w-full">
                              <Field
                                type="radio"
                                name="returnFlight"
                                value={flightItem.flightId}
                                className="w-5 h-5 accent-darkBlue"
                              />
                              <div className="flex flex-col items-center">
                                <span className="md:ml-4">
                                  {flightItem?.first_departure_date}
                                </span>
                                <span className="font-medium">
                                  {flightItem?.first_departure_time}
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-xs">
                                  {flightItem.duration || flightItem.stops}
                                </span>
                                <img src={Line} alt="Line" className="" />
                                <span className="text-xs">
                                  {flightItem.stops === 0
                                    ? "Direct"
                                    : `${flightItem.stops} stops`}
                                </span>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="">
                                  {flightItem?.final_destination_date}
                                </span>
                                <span className="font-medium">
                                  {flightItem?.final_destination_time}
                                </span>
                              </div>
                            </div>
                          </label>
                          <div className="">
                            <ChevronDown />
                          </div>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage
                      name="returnFlight"
                      component="div"
                      className="text-red text-sm"
                    />

                    {/* Available Seats - Dynamic display based on selected outbound flight */}
                    {values.outboundFlight && (
                      <div className="text-orange">
                        {getAvailableSeats(values.outboundFlight)} seats
                        Available!
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                        <span className="text-smokyGray text-xl md:text-3xl font-medium text-nowrap">
                          LKR {data.price_per_adtBuy}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-sm">Price Per Person</span>
                          <div className=" ">
                            <span className="font-medium">
                              {adults > 0 && `${adults} x Adult`}
                              {children > 0 && `, ${children} x Child`}
                              {babies > 0 && `, ${babies} x Baby`}
                            </span>
                            <span className="font-medium">
                              =LKR {priceInfo}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-darkBlue text-2xl hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-2xl"
                      >
                        Book
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingFlight;
