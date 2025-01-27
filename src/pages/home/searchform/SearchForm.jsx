import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup"; // Assuming you're using Yup for validation
import FlightHotelForm from "./FlightHotelForm";
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import {
  Plane,
  Ship,
  MapPin,
  Calendar,
  Users,
  Search,
  Navigation,
  BedDouble,
  House,
} from "lucide-react";


const ValidationSchema = Yup.object().shape({
  destination: Yup.string().required("Destination is required"),
  dateRange: Yup.object().shape({
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date().required("End date is required"),
  }),
  rooms: Yup.number().min(1, "At least 1 room required").required("Required"),
  persons: Yup.number()
    .min(1, "At least 1 person required")
    .required("Required"),
});

const SearchForm = () => {
  const calendarRef = useRef(null);
  const [searchStatusVal, setSearchStatusVal] = useState(0);
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

  // Navigation tabs
  const searchTabs = [
    { component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Plane className="h-5 w-5" />
        <span>Flight</span>
        <span>+</span>
        <BedDouble className="h-5 w-5" />
        <span>Hotel</span>
      </div>
    ),},
    { component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <Plane className="h-5 w-5" />
        <span>Flight</span>
      </div>
    ),},
    {  component: (
      <div className="flex items-center space-x-1 lg:space-x-4">
        <BedDouble className="h-5 w-5" />
        <span>Hotel</span>
      </div>
    ), },
    {
      component: (
        <div className="flex items-center space-x-1 lg:space-x-4">
          <Ship className="h-5 w-5" />
          <span>Cruise</span>
        </div>
      ),
    },
    {
      component: (
        <div className="flex items-center space-x-1 lg:space-x-4">
          <Navigation className="h-5 w-5" />
          <span>Tour</span>
        </div>
      ),
    },
    {
      component: (
        <div className="flex items-center space-x-1 lg:space-x-4">
          <House className="h-5 w-5" />
          <span className="text-nowrap">Vacation Apartment</span>
        </div>
      ),
    },
  ];

  // Map status to form components
  const formComponents = [
    (props) => <FlightHotelForm {...props} />,
    (props) => <FlightForm {...props} />,
    (props) => <HotelForm {...props} />,
    (props) => <CruiseForm {...props} />,
    (props) => <TourForm {...props} />,
    (props) => <VacationApartmentForm {...props} />,
  ];

  return (
    <div className="w-full flex  justify-center -mt-24 lg:-mt-44 z-50 relative  mb-20">
      <div className="max-w-[1100px] w-full bg-white rounded-3xl shadow-lg p-2 lg:p-8 space-y-4 lg:space-y-8">
      <div className="flex flex-row w-full justify-between items-center gap-4 overflow-x-auto scrollbar-hide  pt-4">
          {searchTabs.map((item, index) => (
            <div
              key={index}
              onClick={() => setSearchStatusVal(index)}
              className={`cursor-pointer hover:text-primaryColor hover:scale-105 ${
                searchStatusVal === index
                  ? "p-2 lg:p-4 rounded-3xl bg-orange text-white"
                  : ""
              }`}
            >
              {item.component}
            </div>
          ))}
        </div>

        {/* Dynamic Form */}
        <Formik
          initialValues={{
            destination: "",
            rooms: 1,
            persons: 2,
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log("Form Submitted:", values, dateRange);
          }}
        >
          {({ values, setFieldValue, errors, touched }) =>
            formComponents[searchStatusVal]({
              dateRange,
              setDateRange,
              values,
              errors,
              touched,
              setFieldValue,
            })
          }
        </Formik>
      </div>
    </div>
  );
};

export default SearchForm;
