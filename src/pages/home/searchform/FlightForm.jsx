import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { DateRange } from "react-date-range";
import {
  MapPin,
  Calendar,
  UserRound,
  Search,
  BriefcaseBusiness,
} from "lucide-react";
import CityAutocomplete from "./CityAutocomplete";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const initialValues = {
  tripType: "Return",
  departure: "",
  destination: "",
  departure1: "",
  destination1: "",
  departureDate: new Date().toISOString(),
  returnDate: new Date().toISOString(),
  persons: "2",
  travelClass: "Economy",
};

const FlightForm = ({ onFormSubmit }) => {
  const calendarRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleCalendar = () => {
    setShowDatePicker((prev) => !prev);
  };

  const [tripType, setTripType] = useState("Return");

  const onSubmit = (values) => {
    console.log("Submitting form with values:", values);
    onFormSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          {/* Trip Type */}
          <div className="flex flex-row justify-start items-center mb-8 space-x-8 m-8">
            {["Return", "One Way", "Multi City"].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <Field
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={() => {
                    setTripType(type);
                    if (type === "One Way") {
                      setFieldValue("returnDate", "");
                    }
                  }}
                  className="accent-darkBlue"
                />
                <span className="text-smokeGray lg:text-base text-xs">
                  {type}
                </span>
              </label>
            ))}
          </div>

          {/* Main Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
            {/* Departure */}
            <div className="flex items-center p-[10px_20px] gap-4 w-full bg-backgroundColor rounded-[20px] md:w-full">
              <MapPin className="text-smokyGray" />
              <div className="flex flex-col items-start">
                <span className="text-smokyGray text-xs">Departure</span>
                <Field
                  name="departure"
                  placeholder="Departure"
                  component={CityAutocomplete}
                  className="text-base focus:outline-none"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="flex items-center p-[10px_20px] gap-4 w-full bg-backgroundColor rounded-[20px] md:w-full">
              <MapPin className="text-smokyGray" />
              <div className="flex flex-col items-start">
                <span className="text-smokyGray text-xs">Destination</span>
                <Field
                  name="destination"
                  placeholder="Destination"
                  component={CityAutocomplete}
                  className="text-base focus:outline-none"
                />
              </div>
            </div>

            {/* Travel Period */}
            <div
              className="relative flex items-center p-[10px_20px] gap-5 w-full bg-backgroundColor rounded-[20px] md:w-full"
              ref={calendarRef}
            >
              <Calendar className="text-smokyGray" />
              <div className="flex flex-col items-start">
                <span className="text-smokyGray text-xs">Travel Period</span>
                <button
                  type="button"
                  onClick={toggleCalendar}
                  className="text-base focus:outline-none"
                >
                  {values.departureDate
                    ? new Date(values.departureDate).toLocaleDateString()
                    : "Select date"}{" "}
                  -{" "}
                  {tripType !== "One Way" && values.returnDate
                    ? new Date(values.returnDate).toLocaleDateString()
                    : "N/A"}
                </button>
              </div>

              {showDatePicker && (
                <div className="absolute z-50 mt-2">
                  <DateRange
                    ranges={[
                      {
                        startDate: new Date(values.departureDate),
                        endDate:
                          tripType !== "One Way" && values.returnDate
                            ? new Date(values.returnDate)
                            : new Date(values.departureDate),
                        key: "selection",
                      },
                    ]}
                    onChange={(item) => {
                      setFieldValue(
                        "departureDate",
                        item.selection.startDate.toISOString()
                      );
                      setFieldValue(
                        "returnDate",
                        item.selection.endDate.toISOString()
                      );
                      setShowDatePicker(false);
                    }}
                    moveRangeOnFirstSelection={false}
                    rangeColors={["#3b82f6"]}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Passengers and Travel Class */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]">
              <UserRound className="text-smokyGray" />
              <div className="flex flex-col">
                <span className="text-xs text-smokyGray">Persons</span>
                <Field
                  name="persons"
                  as="select"
                  className="text-base bg-transparent focus:outline-none"
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1} Person
                    </option>
                  ))}
                </Field>
              </div>
            </div>

            {/* Travel Class */}
            <div className="flex items-center p-[10px_20px] gap-5 bg-backgroundColor rounded-[20px]">
              <BriefcaseBusiness className="text-smokyGray" />
              <div className="flex flex-col">
                <span className="text-xs text-smokyGray">Travel Class</span>
                <Field
                  as="select"
                  name="travelClass"
                  className="text-base bg-transparent focus:outline-none"
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </Field>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-4 px-5 py-[14px] w-full h-[57px] bg-darkBlue text-white rounded-[20px] hover:bg-blue-800"
            >
              <Search />
              <span>Search</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FlightForm;

// import React, { useRef, useState } from "react";
// import { Formik, Form, Field } from "formik";
// import { DateRange } from "react-date-range";
// import {
//   MapPin,
//   Calendar,
//   UserRound,
//   Search,
//   BriefcaseBusiness,
// } from "lucide-react";
// import CityAutocomplete from "./CityAutocomplete";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const initialValues = {
//   tripType: "Return",
//   departure: "",
//   destination: "",
//   departure1: "",
//   destination1: "",
//   persons: "2",
//   travelClass: "Economy",
// };

// const FlightForm = () => {
//   const calendarRef = useRef(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDateRange, setSelectedDateRange] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   });
//   console.log(selectedDateRange);

//   const handleDateChange = (item) => {
//     setSelectedDateRange(item.selection);
//     setShowDatePicker(false);
//   };

//   const toggleCalendar = () => {
//     setShowDatePicker((prev) => !prev);
//   };

//   // State to track the selected trip type
//   const [tripType, setTripType] = useState("Return");

//   const onSubmit = (values) => {
//     // Combine date range info if needed. Here, we only log the values.
//     console.log("Submitting form with values:", values);
//     // The departure and destination fields will have the IATA code.
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={onSubmit}>
//       {({ values, errors, touched, setFieldValue }) => (
//         <Form>
//           {/* Trip Type */}
//           <div className="flex flex-row justify-start items-center mb-8 space-x-8 m-8">
//             {["Return", "One Way", "Multi City"].map((type) => (
//               <label key={type} className="flex items-center space-x-2">
//                 <Field
//                   type="radio"
//                   name="tripType"
//                   value={type}
//                   checked={tripType === type}
//                   onChange={() => setTripType(type)} // Update trip type
//                   className="accent-darkBlue"
//                 />
//                 <span className="text-smokeGray lg:text-base text-xs">
//                   {type}
//                 </span>
//               </label>
//             ))}
//           </div>

//           {/* Main Fields */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
//             {/* Departure */}
//             <div className="flex items-center p-[10px_20px] gap-4 w-full sm:w-[280px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full ">
//               <div className=" w-[28px] h-[28px] flex items-center justify-center">
//                 <MapPin className="text-smokyGray" />
//               </div>
//               <div className="flex flex-col items-start gap-[3px]">
//                 <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                   Departure
//                 </span>
//                 <Field
//                   name="departure"
//                   placeholder="Departure"
//                   className="text-smokyGray text-base focus:outline-none"
//                   component={CityAutocomplete}
//                 />
//                 {errors.departure && touched.departure && (
//                   <span className="text-red-500 text-xs">
//                     {errors.departure}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Destination */}
//             <div className="flex items-center p-[10px_20px] gap-4 w-full sm:w-[280px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
//               <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
//                 <MapPin className="text-smokyGray" />
//               </div>
//               <div className="flex flex-col items-start gap-[3px]">
//                 <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                   Destination
//                 </span>
//                 <Field
//                   name="destination"
//                   placeholder="Destination"
//                   className="text-smokyGray text-base leading-[19px] "
//                   component={CityAutocomplete}
//                 />
//                 {errors.destination && touched.destination && (
//                   <span className="text-red-500 text-xs">
//                     {errors.destination}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Flight Date */}
//             <div
//               className="relative flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[280px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full"
//               ref={calendarRef}
//             >
//               <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
//                 <Calendar className="text-smokyGray" />
//               </div>
//               <div className="flex flex-col items-start gap-[3px]">
//                 <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                   Travel Period
//                 </span>
//                 <button
//                   type="button"
//                   onClick={toggleCalendar}
//                   className="text-smokyGray font-inter font-normal text-base leading-[19px]"
//                 >
//                   {selectedDateRange.startDate.toLocaleDateString()} -{" "}
//                   {selectedDateRange.endDate.toLocaleDateString()}
//                 </button>
//               </div>
//               {showDatePicker && (
//                 <div className="absolute z-50 mt-2">
//                   <DateRange
//                     ranges={[selectedDateRange]}
//                     onChange={handleDateChange}
//                     moveRangeOnFirstSelection={false}
//                     rangeColors={["#3b82f6"]}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Multi City Specific Row */}
//           {tripType === "Multi City" && (
//             <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
//               {/* Departure */}
//               <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
//                 <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
//                   <MapPin className="text-smokyGray" />
//                 </div>
//                 <div className="flex flex-col items-start gap-[3px]">
//                   <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                     Departure
//                   </span>
//                   <Field
//                     name="departure1"
//                     placeholder="Departure"
//                     className="text-smokyGray text-base leading-[19px] "
//                     component={CityAutocomplete}
//                   />
//                   {errors.departure1 && touched.departure1 && (
//                     <span className="text-red-500 text-xs">
//                       {errors.departure1}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Destination */}
//               <div className="flex flex-row items-center p-[10px_20px] gap-[20px] sm:w-[250px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
//                 <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
//                   <MapPin className="text-smokyGray" />
//                 </div>
//                 <div className="flex flex-col items-start gap-[3px]">
//                   <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                     Destination
//                   </span>
//                   <Field
//                     name="destination1"
//                     placeholder="Destination"
//                     className="text-smokyGray text-base leading-[19px] "
//                     component={CityAutocomplete}
//                   />
//                   {errors.destination1 && touched.destination1 && (
//                     <span className="text-red-500 text-xs">
//                       {errors.destination1}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Flight Date */}
//               <div
//                 className="relative flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[280px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full"
//                 ref={calendarRef}
//               >
//                 <div className="flex-none w-[28px] h-[28px] border-smokyGray rounded-lg flex items-center justify-center">
//                   <Calendar className="text-smokyGray" />
//                 </div>
//                 <div className="flex flex-col items-start gap-[3px]">
//                   <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                     Travel Period
//                   </span>
//                   <button
//                     type="button"
//                     onClick={toggleCalendar}
//                     className="text-smokyGray font-inter font-normal text-base leading-[19px]"
//                   >
//                     {selectedDateRange.startDate.toLocaleDateString()} -{" "}
//                     {selectedDateRange.endDate.toLocaleDateString()}
//                   </button>
//                 </div>
//                 {showDatePicker && (
//                   <div className="absolute z-50 mt-2">
//                     <DateRange
//                       ranges={[selectedDateRange]}
//                       onChange={handleDateChange}
//                       moveRangeOnFirstSelection={false}
//                       rangeColors={["#3b82f6"]}
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Passengers and Travel Class */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mb-6">
//             {/* Passengers */}
//             <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
//               <UserRound className="text-smokyGray w-[28px] h-[28px]" />
//               <div className="flex flex-col items-start gap-[3px]">
//                 <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                   Persons
//                 </span>
//                 <span className="text-[#5A5A5A] font-inter font-normal text-base leading-[19px]">
//                   {values.persons} Person
//                 </span>
//               </div>
//             </div>

//             {/* Travel Class */}
//             <div className="flex flex-row items-center p-[10px_20px] gap-5 w-full sm:w-[320px] h-[57px] bg-backgroundColor rounded-[20px] md:w-full">
//               <BriefcaseBusiness className="text-smokyGray w-[28px] h-[28px]" />
//               <div className="flex flex-col ">
//                 <span className="text-smokyGray font-inter font-light text-xs leading-[15px]">
//                   Economy
//                 </span>
//                 <Field
//                   as="select"
//                   name="travelClass"
//                   className="flex-1 bg-transparent text-smokyGray focus:outline-none"
//                   value={values.travelClass}
//                   onChange={(e) => setFieldValue("travelClass", e.target.value)}
//                 >
//                   <option value="Economy">Economy</option>
//                   <option value="Business">Business</option>
//                   <option value="First Class">First Class</option>
//                 </Field>
//               </div>
//             </div>

//             {/* Search Button */}
//             <div className="flex flex-row">
//               <button
//                 type="submit"
//                 className="flex items-center justify-center gap-4 px-5 py-[14px] sm:w-[320px] w-full h-[57px] bg-darkBlue text-white text-2xl font-inter font-medium rounded-[20px] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primaryColor"
//               >
//                 <Search />
//                 <span>Search</span>
//               </button>
//             </div>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FlightForm;
