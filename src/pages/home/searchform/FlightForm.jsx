import React, { useRef, useState } from "react";
import { Form, Field } from "formik";
import { MapPin, Calendar, UserRound , Search, ChevronDown, BriefcaseBusiness } from "lucide-react";

const FlightForm = ({ dateRange, setDateRange, values, errors, touched, setFieldValue }) => {
    const calendarRef = useRef(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <Form>
            {/* Trip Type */}
            <div className="flex flex-row justify-start items-center mb-8 space-x-8 m-8">
                {["Return", "One Way", "Multi City"].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                        <Field
                            type="radio"
                            name="tripType"
                            value={type}
                            className="accent-primaryColor"
                        />
                        <span className="text-gray-600">{type}</span>
                    </label>
                ))}
            </div>

            {/* Main Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                {/* Departure */}
                <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                    <MapPin className="text-smokyGray w-[24.24px] h-[28px]" />
                    <div className="flex flex-col items-start gap-[3px]">
                        <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                        Departure 
                        </span>
                        <Field
                            name="Departure "
                            placeholder="Departure "
                            className="text-smokyGray  text-base leading-[19px] focus:outline-none focus:ring-2 focus:ring-backgroundColor bg-transparent"
                            value={values.Departure }
                            onChange={(e) => setFieldValue("Departure ", e.target.value)}
                        />
                        {errors.Departure  && touched.Departure  && (
                            <span className="text-red-500 text-xs">{errors.Departure }</span>
                        )}
                    </div>
                </div>

                {/* Destination */}
                <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                    <MapPin className="text-smokyGray w-[24.24px] h-[28px]" />
                    <div className="flex flex-col items-start gap-[3px]">
                        <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                            Destination
                        </span>
                        <Field
                            name="destination"
                            placeholder="Destination"
                            className="text-smokyGray  text-base leading-[19px] focus:outline-none focus:ring-2 focus:ring-backgroundColor bg-transparent"
                            value={values.destination}
                            onChange={(e) => setFieldValue("destination", e.target.value)}
                        />
                        {errors.destination && touched.destination && (
                            <span className="text-red-500 text-xs">{errors.destination}</span>
                        )}
                    </div>
                </div>

                {/* Flight Date */}
                <div
                    className="relative flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[280px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full"
                    ref={calendarRef}
                >
                    <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
                        <Calendar className="text-smokyGray" />
                    </div>
                    <div className="flex flex-col items-start gap-[3px]">
                        <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                            Travel Period
                        </span>
                        <button
                            type="button"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className="text-smokyGray font-inter font-normal text-base leading-[19px]"
                        >
                            {dateRange.startDate.toLocaleDateString()} -{" "}
                            {dateRange.endDate.toLocaleDateString()}
                        </button>
                    </div>
                    {showDatePicker && (
                        <div className="absolute z-50 mt-2">
                            <dateRange
                                ranges={[dateRange]}
                                onChange={(item) => setDateRange(item.selection)}
                                moveRangeOnFirstSelection={false}
                                rangeColors={["#3b82f6"]}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Passengers and Travel Class */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                {/* Passengers */}
                <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                    <UserRound  className="text-smokyGray w-[28px] h-[28px]" />
                    <div className="flex flex-col items-start gap-[3px]">
                        <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                        Persons
                        </span>
                        <span className="text-[#5A5A5A] font-inter font-normal text-base leading-[19px]">
                            {values.persons} Persons
                        </span>
                    </div>
                </div>

                {/* Travel Class */}
                <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                    <BriefcaseBusiness className="text-smokyGray w-[28px] h-[28px]" />
                    <Field
                        as="select"
                        name="travelClass"
                        className="flex-1 bg-transparent text-gray-700 focus:outline-none"
                        value={values.travelClass}
                        onChange={(e) => setFieldValue("travelClass", e.target.value)}
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                    </Field>
                </div>
                {/* Search Button */}
                <div className="flex flex-row justify-end">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 px-5 py-[14px] sm:w-[320px] w-full h-[57px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    >
                        <Search />
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </Form>
    );
};

export default FlightForm;
