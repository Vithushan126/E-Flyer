import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import OutboundFlight from "../../assets/view/OutboundFlight.svg";
import ReturnFlight from "../../assets/view/ReturnFlight.svg";
import QatarAirwaysLogo from "../../assets/view/Qatar_Airways_Logo.svg";
import EmiratesLogo from "../../assets/view/Emirates-Logo.svg";
import FlydubaiLogo from "../../assets/view/Flydubai-Logo.svg";
import Line from "../../assets/view/Arrow.svg";
import { ChevronDown } from "lucide-react";

// const flight = {
//   outboundFlights: [
//     {
//       id: "out1",
//       date: "Sat | 16 Oct 2025",
//       departureTime: "20:00 ZRH",
//       duration: "9h 30m",
//       stops: "1 stop at IST",
//       endDate: "Sat | 16 Oct 2025",
//       arrivalTime: "05:30 DOH",
//     },
//     {
//       id: "out2",
//       date: "Sun | 17 Oct 2025",
//       departureTime: "15:00 ZRH",
//       duration: "10h 15m",
//       stops: "Direct",
//       endDate: "Sat | 16 Oct 2025",
//       arrivalTime: "01:15 DOH",
//     },
//   ],
//   returnFlights: [
//     {
//       id: "ret1",
//       date: "Sat | 23 Oct 2025",
//       departureTime: "10:00 DOH",
//       duration: "9h 30m",
//       stops: "1 stop at IST",
//       endDate: "Sat | 16 Oct 2025",
//       arrivalTime: "19:30 ZRH",
//     },
//     {
//       id: "ret2",
//       date: "Sun | 24 Oct 2025",
//       departureTime: "12:00 DOH",
//       duration: "8h 50m",
//       stops: "Direct",
//       endDate: "Sat | 16 Oct 2025",
//       arrivalTime: "20:50 ZRH",
//     },
//     {
//       id: "ret3",
//       date: "Mon | 25 Oct 2025",
//       departureTime: "14:00 DOH",
//       duration: "10h 20m",
//       stops: "2 stops (IST, DXB)",
//       endDate: "Sat | 16 Oct 2025",
//       arrivalTime: "00:20 ZRH",
//     },
//     {
//       id: "ret4",
//       date: "Tue | 26 Oct 2025",
//       departureTime: "18:00 DOH",
//       duration: "9h 15m",
//       stops: "1 stop at DXB",
//       endDate: "Sat | 16 Oct 2025",
//       arrivalTime: "03:15 ZRH",
//     },
//   ],
// };

const flight = [
  {
    logo: QatarAirwaysLogo,
    availableSeat: 9,
    outboundFlights: [
      {
        id: "out1",
        date: "Sat | 16 Oct 2025",
        departureTime: "20:00 ZRH",
        duration: "9h 30m",
        stops: "1 stop at IST",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "05:30 DOH",
      },
      {
        id: "out2",
        date: "Sun | 17 Oct 2025",
        departureTime: "15:00 ZRH",
        duration: "10h 15m",
        stops: "Direct",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "01:15 DOH",
      },
    ],
    returnFlights: [
      {
        id: "ret1",
        date: "Sat | 23 Oct 2025",
        departureTime: "10:00 DOH",
        duration: "9h 30m",
        stops: "1 stop at IST",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "19:30 ZRH",
      },
      {
        id: "ret2",
        date: "Sun | 24 Oct 2025",
        departureTime: "12:00 DOH",
        duration: "8h 50m",
        stops: "Direct",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "20:50 ZRH",
      },
      {
        id: "ret3",
        date: "Mon | 25 Oct 2025",
        departureTime: "14:00 DOH",
        duration: "10h 20m",
        stops: "2 stops (IST, DXB)",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "00:20 ZRH",
      },
      {
        id: "ret4",
        date: "Tue | 26 Oct 2025",
        departureTime: "18:00 DOH",
        duration: "9h 15m",
        stops: "1 stop at DXB",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "03:15 ZRH",
      },
    ],
  },
  {
    logo: EmiratesLogo,
    availableSeat: 9,
    outboundFlights: [
      {
        id: "out1",
        date: "Sat | 16 Oct 2025",
        departureTime: "20:00 ZRH",
        duration: "9h 30m",
        stops: "1 stop at IST",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "05:30 DOH",
      },
      {
        id: "out2",
        date: "Sun | 17 Oct 2025",
        departureTime: "15:00 ZRH",
        duration: "10h 15m",
        stops: "Direct",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "01:15 DOH",
      },
    ],
    returnFlights: [
      {
        id: "ret1",
        date: "Sat | 23 Oct 2025",
        departureTime: "10:00 DOH",
        duration: "9h 30m",
        stops: "1 stop at IST",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "19:30 ZRH",
      },
      {
        id: "ret2",
        date: "Sun | 24 Oct 2025",
        departureTime: "12:00 DOH",
        duration: "8h 50m",
        stops: "Direct",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "20:50 ZRH",
      },
      {
        id: "ret3",
        date: "Mon | 25 Oct 2025",
        departureTime: "14:00 DOH",
        duration: "10h 20m",
        stops: "2 stops (IST, DXB)",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "00:20 ZRH",
      },
      {
        id: "ret4",
        date: "Tue | 26 Oct 2025",
        departureTime: "18:00 DOH",
        duration: "9h 15m",
        stops: "1 stop at DXB",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "03:15 ZRH",
      },
    ],
  },
  {
    logo: FlydubaiLogo,
    availableSeat: 9,
    outboundFlights: [
      {
        id: "out1",
        date: "Sat | 16 Oct 2025",
        departureTime: "20:00 ZRH",
        duration: "9h 30m",
        stops: "1 stop at IST",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "05:30 DOH",
      },
      {
        id: "out2",
        date: "Sun | 17 Oct 2025",
        departureTime: "15:00 ZRH",
        duration: "10h 15m",
        stops: "Direct",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "01:15 DOH",
      },
    ],
    returnFlights: [
      {
        id: "ret1",
        date: "Sat | 23 Oct 2025",
        departureTime: "10:00 DOH",
        duration: "9h 30m",
        stops: "1 stop at IST",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "19:30 ZRH",
      },
      {
        id: "ret2",
        date: "Sun | 24 Oct 2025",
        departureTime: "12:00 DOH",
        duration: "8h 50m",
        stops: "Direct",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "20:50 ZRH",
      },
      {
        id: "ret3",
        date: "Mon | 25 Oct 2025",
        departureTime: "14:00 DOH",
        duration: "10h 20m",
        stops: "2 stops (IST, DXB)",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "00:20 ZRH",
      },
      {
        id: "ret4",
        date: "Tue | 26 Oct 2025",
        departureTime: "18:00 DOH",
        duration: "9h 15m",
        stops: "1 stop at DXB",
        endDate: "Sat | 16 Oct 2025",
        arrivalTime: "03:15 ZRH",
      },
    ],
  },
];

const BookingFlight = () => {
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

  return (
    <div className=" flex flex-col space-y-10 w-full ">
      {flight?.map((airline, index) => (
        <div className="overflow-x-scroll scrollbar-hide">
          <div
            key={index}
            className="rounded-lg md:rounded-3xl border border-darkBlue text-smokyGray p-2 md:p-4 lg:p-8 w-fit "
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-8">
                  {/* Outbound */}
                  <div className="flex flex-row justify-between items-center p-2 md:p-4 md:pr-10 bg-[#FAFAFA] rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <img src={OutboundFlight} alt="Outbound Flight" />
                      <div className="">Outbound</div>
                    </div>
                    <div className="w-[70px] h-[70px] border border-border rounded-full p-2 flex items-center justify-center">
                      <img
                        src={airline?.logo}
                        alt={airline?.logo}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-10">
                    {airline?.outboundFlights?.map((flightItem) => (
                      <div
                        key={flightItem.id}
                        className="flex flex-row justify-between items-center md:pl-4 space-x-4  "
                      >
                        <label
                          className={`flex items-center justify-between cursor-pointer w-full`}
                        >
                          <div className="flex flex-row justify-between items-center  w-full ">
                            <Field
                              type="radio"
                              name="outboundFlight"
                              value={flightItem.id}
                              // checked={formik.values.roomType === room.id}
                              // onChange={() => formik.setFieldValue("roomType", room.id)}
                              className="w-5 h-5 accent-darkBlue "
                            />
                            <div className="flex flex-col items-center">
                              <span className="ml-4 ">{flightItem?.date}</span>
                              <span className=" font-medium ">
                                {flightItem?.departureTime}
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs ">
                                {flightItem?.duration}
                              </span>
                              <img src={Line} alt="Line" className="" />
                              <span className="text-xs ">
                                {flightItem?.stops}
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className=" ">{flightItem?.endDate}</span>
                              <span className=" font-medium ">
                                {flightItem?.arrivalTime}
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
                  {/* ReturnFlight */}
                  <div className="flex flex-row justify-between items-center p-2 md:p-4 md:pr-10 bg-[#FAFAFA] rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <img src={ReturnFlight} alt="Return Flight" />
                      <div className="">Return Flight</div>
                    </div>
                    <div className="w-[70px] h-[70px] border border-border rounded-full p-2 flex items-center justify-center">
                      <img
                        src={airline?.logo}
                        alt={airline?.logo}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-10">
                    {airline?.returnFlights?.map((flightItem) => (
                      <div
                        key={flightItem?.id}
                        className="flex flex-row justify-between items-center md:pl-4 space-x-4 "
                      >
                        <label
                          className={`flex items-center justify-between cursor-pointer w-full`}
                        >
                          <div className="flex flex-row justify-between items-center  w-full ">
                            <Field
                              type="radio"
                              name="returnFlight"
                              value={flightItem.id}
                              className="w-5 h-5 accent-darkBlue"
                            />

                            <div className="flex flex-col items-center">
                              <span className="md:ml-4  ">
                                {flightItem?.date}
                              </span>
                              <span className=" font-medium ">
                                {flightItem?.departureTime}
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-xs ">
                                {flightItem?.duration}
                              </span>
                              <img src={Line} alt="Line" className="" />
                              <span className="text-xs ">
                                {flightItem?.stops}
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className=" ">{flightItem?.endDate}</span>
                              <span className=" font-medium ">
                                {flightItem?.arrivalTime}
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
                  {airline?.availableSeat && (
                    <div className="text-orange">
                      {airline?.availableSeat} seats Available
                    </div>
                  )}
                  {/* Submit Button */}
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 ">
                      <span className="text-smokyGray text-xl md:text-3xl font-medium text-nowrap">
                        LKR 160000
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm">Price Per Person</span>
                        <div className="">
                          Total price 2 x Adult
                          <span className="font-medium">LKR 320000 </span>
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
              )}
            </Formik>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingFlight;
