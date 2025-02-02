import React from "react";
import img1 from "../../assets/adventure/HotelImage1.svg";
import { BedDouble, Star, ThumbsUp } from "lucide-react";
import EmiratesLogo from "../../assets/view/Emirates-Logo.svg";
import QatarAirwaysLogo from "../../assets/view/Qatar_Airways_Logo.svg";
import Arrow from "../../assets/view/Arrow.svg";
import FlightIcon from "../../assets/view/Flight.svg";

const flightDetail = [
  {
    id: 1,
    nights: 3,
    adults: 2,
    startDate: "16 Oct 2025",
    endDate: "21 Nov 2025",
    price: 160000,
    totalPrice: 320000,
    alternativeFlightAvailable: true,
    flights: [
      {
        name: "QatarAirways",
        logo: QatarAirwaysLogo,
        startTime: "20 : 00 ZRH",
        endTime: "20 : 00 ZRH",
        flightStartDate: "16 Oct 2025",
        flightEndDate: "16 Oct 2025",
        day: "Sat",
        duration: "9h 30m",
        stops: "1 stop at IST",
      },
      {
        name: "Emirates",
        logo: EmiratesLogo,
        startTime: "20 : 00 ZRH",
        endTime: "20 : 00 ZRH",
        flightStartDate: "16 Oct 2025",
        flightEndDate: "16 Oct 2025",
        day: "Sat",
        duration: "9h 30m",
        stops: "Direct",
      },
    ],
  },
];

const BookingComponent = () => {
  return (
    <div className="border border-border rounded-xl p-4 w-full flex flex-col space-y-4  text-smokyGray">
      <div className=" text-3xl font-normal">Catalonia Riviera Maya</div>
      <div className="text-lg font-medium">France | City name</div>
      <div className="flex flex-row space-x-10 w-full">
        {/* Image Section */}
        <div className=" h-full overflow-hidden rounded-3xl w-3/5">
          <div className=" flex h-full transition-transform duration-500 ease-out">
            <img
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              src={img1}
              alt={img1}
            />
            <div className="flex items-center justify-between px-1 py-2 lg:px-4 lg:py-4">
              <div className="flex gap-2 items-cente ">
                <div className="rounded-full bg-dark px-3 py-1 text-white text-sm font-medium flex flex-row gap-x-4">
                  <BedDouble />
                  Hotel
                </div>
                <span className="rounded-full bg-orange px-3 py-1 text-sm font-medium text-white flex flex-row gap-x-2">
                  <ThumbsUp />
                  Top
                </span>
                <div className="flex">
                  {[...Array(6)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-white text-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Booking Details */}
        <div className="grid grid-cols-[1fr_2fr] items-center gap-y-2 w-2/5">
          <label className="block  ">Arrival</label>
          <div className="p-2 border border-border rounded-lg ">
            Sat, 19 oct 2025
          </div>

          <label className="block">Departure</label>
          <div className="p-2 border border-border rounded-lg">
            Sat, 23 oct 2025
          </div>

          <label className="block">Stay</label>
          <div className="p-2 border border-border rounded-lg">4 Nights</div>

          <label className="block">Room</label>
          <div className="p-2 border border-border rounded-lg">
            <div>Standard twin room</div>
            <div>All inclusive</div>
            <div>2 Adults</div>
          </div>

          <label className="block">Transfer</label>
          <div className="p-2 border border-border rounded-lg">
            Exclusive Transfer
          </div>

          <label className="block font-semibold text-xl">Total Price</label>
          <div className="p-2 border border-border rounded-lg font-bold text-2xl">
            LKR 345667
          </div>
        </div>
      </div>

      <div className=" rounded-2xl border border-border p-6 text-smokyGray flex justify-center ">
        <div className="flex flex-col space-y-4 max-w-md ">
          <div className="flex items-center justify-start font-medium space-x-4 mb-10 ">
            <img src={FlightIcon} alt="FlightIcon" />
            <span className="text-2xl">Return Flight</span>
          </div>

          <div className="flex flex-col space-y-4 mr-4">
            {flightDetail.map((detail) => (
              <div key={detail.id} className="flex flex-col space-y-4">
                {detail.flights.map((flight, flightIndex) => (
                  <div
                    key={flightIndex}
                    className="flex flex-row justify-between items-center w-full "
                  >
                    <img
                      src={flight.logo}
                      alt={flight.name}
                      className="w-[70px] h-[70px] border border-border rounded-full p-2"
                    />
                    <div className="flex flex-col items-center">
                      <span>
                        {flight.day} | {flight.flightStartDate}
                      </span>
                      <span className="font-medium">{flight.startTime}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs">{flight.duration}</span>
                      <img src={Arrow} alt="Arrow" />
                      <span className="text-xs">{flight.stops}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>
                        {flight.day} | {flight.flightEndDate}
                      </span>
                      <span className="font-medium">{flight.endTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-start gap-4">
                <div className="px-2 py-1 rounded-md text-sm transition-colors border border-borderGray h-fit">
                  Economy Class
                </div>
                <div className="px-2 py-1 rounded-md text-sm transition-colors border border-borderGray h-fit">
                  baggage allowance 1 piece of baggage weighing max. 23 kg per
                  person aged 2 years and over
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
