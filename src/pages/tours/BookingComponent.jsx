import React, { useState } from "react";
import img1 from "../../assets/adventure/HotelImage1.svg";
import { BedDouble, Star, ThumbsUp, AlertTriangle } from "lucide-react";
import EmiratesLogo from "../../assets/view/Emirates-Logo.svg";
import QatarAirwaysLogo from "../../assets/view/Qatar_Airways_Logo.svg";
import Arrow from "../../assets/view/Arrow.svg";
import FlightIcon from "../../assets/view/Flight.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

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

const roomOptions = [
    {
        id: "twine-adult",
        name: "Twine room (adult section)",
        type: "All inclusive Plus",
        price: -1000,
        description: "Additional meal available",
    },
    {
        id: "standard-twin",
        name: "Standard Twin room",
        type: "All inclusive Plus",
        price: 0,
        description: "Additional meal available",
    },
    {
        id: "twine-sharing",
        name: "Twine Sharing Pool",
        type: "All inclusive Plus",
        price: 1000,
        description: "Additional meal available",
    },
    {
        id: "twine-sharing-adult",
        name: "Twine Sharing Pool (adult section)",
        type: "All inclusive Plus",
        price: 2000,
        description: "Additional meal available",
    },
];

const safOptions = [
    {
        id: 'no-contribution',
        title: 'No SAF contribution',
        emissions: null,
        price: 0
    },
    {
        id: 'small-contribution',
        title: 'Small SAF Contribution',
        emissions: 'Reduction of flight-related CO 2 e emissions by approx. 30kg',
        price: 1000
    },
    {
        id: 'average-contribution',
        title: 'Average SAF Contribution',
        emissions: 'Reduction of flight-related CO 2 e emissions by approx. 73kg',
        price: 2000
    },
    {
        id: 'large-contribution',
        title: 'Large SAF Contribution',
        emissions: 'Reduction of flight-related CO 2 e emissions by approx. 116kg',
        price: 3000
    }
];

const transferOptions = [
    {
        type: 'No transfer',
        roundTrip: 0,
        oneWay: 0,
        returnOnly: 0
    },
    {
        type: 'Shuttle transfer',
        roundTrip: 1000,
        oneWay: 500,
        returnOnly: 500
    },
    {
        type: 'Bus transfer',
        roundTrip: 2000,
        oneWay: 1000,
        returnOnly: 1000
    },
    {
        type: 'Private transfer',
        roundTrip: 5000,
        oneWay: 2500,
        returnOnly: 2500
    }
];

const BookingComponent = ({ onNext }) => {
    const [selectedOption, setSelectedOption] = useState('no-contribution');
    const validationSchema = Yup.object({
        roomType: Yup.string().required("Please select a room type"),
        additionalMeals: Yup.boolean(),
        numberOfGuests: Yup.number()
            .required("Number of guests is required")
            .min(1, "Must have at least 1 guest")
            .max(4, "Maximum 4 guests allowed"),
    });

    const formik = useFormik({
        initialValues: {
            roomType: "standard-twin",
            additionalMeals: false,
            numberOfGuests: 1,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form submitted:", values);
        },
    });

    return (
        <div className="border border-border rounded-xl p-4 w-full flex flex-col space-y-4 mt-10 md:mt-40 text-smokyGray">
            <div className="text-3xl font-normal">Catalonia Riviera Maya</div>
            <div className="text-lg font-medium">France | City name</div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 w-full">
                {/* Image Section */}
                <div className="h-full overflow-hidden rounded-3xl w-full md:w-3/5">
                    <div className="flex h-full transition-transform duration-500 ease-out">
                        <img
                            className="w-full h-full flex-shrink-0 bg-cover bg-center"
                            src={img1}
                            alt={img1}
                        />
                        <div className="flex items-center justify-between px-1 py-2 lg:px-4 lg:py-4">
                            <div className="flex gap-2 items-center">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/5">
                    <label className="block">Arrival</label>
                    <div className="p-2 border border-border rounded-lg">
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
            <div className="rounded-2xl border border-border p-6 text-smokyGray flex justify-center">
                <div className="flex flex-col space-y-4 max-w-md w-full">
                    <div className="flex items-center justify-start font-medium space-x-4 mb-10">
                        <img src={FlightIcon} alt="FlightIcon" />
                        <span className="text-2xl">Return Flight</span>
                    </div>
                    <div className="flex flex-col space-y-4 mr-4">
                        {flightDetail.map((detail) => (
                            <div key={detail.id} className="flex flex-col space-y-4">
                                {detail.flights.map((flight, flightIndex) => (
                                    <div
                                        key={flight.name}
                                        className="flex flex-col md:flex-row justify-between items-center w-full"
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
                            <div className="flex flex-col md:flex-row justify-start gap-4">
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
            <div className="border border-border rounded-xl p-4 w-full flex flex-col space-y-4 text-smokyGray">
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div className="text-3xl font-normal">Your Additional Option </div>
                    <div className="text-lg font-medium">Room and board </div>
                    <p className="">
                        Treat yourself to more comfort or additional meals
                        <br /> Surcharges and reductions for the entire stay in LKR per
                        person.
                    </p>
                    <div className="space-y-4">
                        {roomOptions.map((room) => (
                            <div key={room.id} className="">
                                <label
                                    className={`flex items-center justify-between p-4 rounded-3xl border border-border cursor-pointer ${formik.values.roomType === room.id
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <div className="flex flex-row space-x-4">
                                        <input
                                            type="radio"
                                            name="roomType"
                                            value={room.id}
                                            checked={formik.values.roomType === room.id}
                                            onChange={() => formik.setFieldValue("roomType", room.id)}
                                            className="w-5 h-5 accent-darkBlue"
                                        />
                                        <span className="font-medium">{room.name}</span>
                                    </div>
                                    <div className="">
                                        <p className="text-sm ">{room.type}</p>
                                        <p className="text-xs ">{room.description}</p>
                                    </div>
                                    <p className="font-medium">
                                        {room.price === 0
                                            ? "Base Price"
                                            : `${room.price > 0 ? "+" : ""}LKR ${Math.abs(
                                                room.price
                                            )} per person`}
                                    </p>
                                </label>
                            </div>
                        ))}
                    </div>
                </form>
                <div className="p-8 w-full flex flex-col font-inter">
                    <h2 className="text-xl font-normal text-smokyGray mb-4">Transfer</h2>
                    <p className="text-sm font-light text-smokyGray mb-8">
                        Reach your destination without any worries, book your transfer in advance
                    </p>
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            <div className="col-span-1"></div>
                            <div className="text-center text-base font-normal text-smokyGray">Round Trip</div>
                            <div className="text-center text-base font-normal text-smokyGray">One-way trip only</div>
                            <div className="text-center text-base font-normal text-smokyGray">Return journey only</div>
                        </div>
                        {transferOptions.map((option, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 lg:ml-16">
                                <div className="text-base font-normal text-smokyGray">
                                    {option.type}
                                </div>
                                <div className="flex justify-center">
                                    <div className={`flex justify-center items-center h-11 w-40 border border-border rounded-[20px] hover:border-darkBlue`}>
                                        <span className="text-base font-normal text-smokyGray">
                                            + LKR {option.roundTrip}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center h-11 w-40 border border-border rounded-[20px] hover:border-darkBlue">
                                        <span className="text-base font-normal text-smokyGray">
                                            + LKR {option.oneWay}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center items-center h-11 w-40 border border-border rounded-[20px] hover:border-darkBlue">
                                        <span className="text-base font-normal text-smokyGray">
                                            + LKR {option.returnOnly}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <p className="text-sm font-light text-smokyGray">
                            Price per person
                        </p>
                    </div>
                </div>
                <div className="p-8 w-full flex flex-col font-inter">
                    <h2 className="text-xl font-normal text-smokyGray mb-4">
                        Sustainable Aviation Fuel (SAF)
                    </h2>
                    <p className="text-sm font-light text-smokyGray mb-6">
                        By using Sustainable Aviation Fuel (SAF), you can reduce the CO2 footprint of your flight. SAF is currently mixed into fossil kerosene in small <br />quantities. With your SAF contribution, you help to support the further development and scaling of this pioneering technology.
                    </p>
                    <div className="space-y-4 lg:ml-16">
                        {safOptions.map((option) => (
                            <label
                                key={option.id}
                                className="flex items-center justify-between p-4 rounded-3xl border border-border cursor-pointer hover:border-darkBlue transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <input
                                        type="radio"
                                        name="saf-option"
                                        value={option.id}
                                        checked={selectedOption === option.id}
                                        onChange={() => setSelectedOption(option.id)}
                                        className="w-5 h-5 accent-darkBlue"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-base font-normal text-smokyGray">
                                            {option.title}
                                        </span>
                                        {option.emissions && (
                                            <span className="text-sm font-light text-smokyGray">
                                                {option.emissions}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="text-base font-normal text-smokyGray">
                                    +LKR {option.price} per person
                                </span>
                            </label>
                        ))}
                    </div>

                    <p className="text-sm font-light text-smokyGray mt-4">
                        For comparison: On an economy class flight from Zurich to Mallorca and back, the CO2e emissions are around 436kg per person.
                        <br />
                        (Source: KlimaLink)
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center font-inter">
                <div className="w-full max-w-[1054px] border border-border rounded-2xl p-10">
                    <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-[#DC7600]" />
                        <span className="text-base font-normal text-black">
                            Please Note Our Important infromation
                        </span>
                    </div>
                    <div className="text-sm font-light text-smokyGray leading-[17px] space-y-4">
                        <p>
                            Climate tax Greece: Depending on the type of accommodation, the tax will be between 0.50 and 4 euros (November - March) or between 2 and 15 euros (April - October) per room/night. The amount is to be paid directly at the hotel. Subject to change. Outside of peak travel times, it is possible that not all of the infrastructure is available in the hotel.
                        </p>
                        <p>
                            ** Special cancellation conditions **
                        </p>
                        <p>
                            Please note that from the time of booking (even on the same day!) up to 100% of the booking fee may be charged. In the event of cancellation, please contact us.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 mb-4 flex justify-end">
                <button onClick={onNext} className="bg-darkBlue text-white rounded-3xl px-5 py-[35px] h-[57px] w-[330px] flex items-center justify-center text-2xl font-medium">
                    
                    Continue to personal Data
                </button>
            </div>
        </div>
    );
};

export default BookingComponent;