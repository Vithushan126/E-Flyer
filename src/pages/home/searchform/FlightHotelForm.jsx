import React, { useRef, useState } from "react";
import { Field, Form } from "formik";
import { DateRange } from "react-date-range"; 
import { MapPin, Calendar, BedDouble, Search } from "lucide-react"; 
const FlightHotelForm = ({
    dateRange,
    setDateRange,
    values,
    errors,
    touched,
    setFieldValue,
}) => {
    const calendarRef = useRef(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <Form>
            <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
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


                {/* Date Range */}
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
                            <DateRange
                                ranges={[dateRange]}
                                onChange={(item) => setDateRange(item.selection)}
                                moveRangeOnFirstSelection={false}
                                rangeColors={["#3b82f6"]}
                            />
                        </div>
                    )}
                </div>

                {/* Rooms & Travelers */}
                <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
                    <BedDouble className="text-smokyGray w-[36px] h-[36px]" />
                    <div className="flex flex-col items-start gap-[3px]">
                        <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
                            Rooms & Travellers
                        </span>
                        <span className="text-[#5A5A5A] font-inter font-normal text-base leading-[19px]">
                            {values.rooms} Rooms, {values.persons} Persons
                        </span>
                    </div>
                </div>

                {/* Search Button */}
                <div className="relative flex items-end">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 px-5 py-[14px] sm:w-[174px] w-full h-[57px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    >
                        <Search />
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </Form>
    );
};

export default FlightHotelForm;
