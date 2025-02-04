import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import FlightHotelForm from "./FlightHotelForm";
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import VacationApartmentForm from "./VacationApartmentForm";
import TourForm from "./TourForm";
import CruiseForm from "./CruiseForm";
import { Plane, Ship, Navigation, BedDouble, House } from "lucide-react";

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
  const navigate = useNavigate();
  const location = useLocation();
  const calendarRef = useRef(null);

  const [searchStatusVal, setSearchStatusVal] = useState(
    location.state?.selectedTab || 0
  );

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    key: "selection",
  });

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

  const handleTabClick = (index) => {
    setSearchStatusVal(index);

    if (index === 4) {
      navigate("/tour", { state: { selectedTab: 4 } });
    }
  };

  const searchTabs = [
    {
      component: (
        <div className="flex items-center space-x-1 lg:space-x-4">
          <Plane className="h-5 w-5" />
          <span>Flight</span>
          <span>+</span>
          <BedDouble className="h-5 w-5" />
          <span>Hotel</span>
        </div>
      ),
    },
    {
      component: (
        <div className="flex items-center space-x-1 lg:space-x-4">
          <Plane className="h-5 w-5" />
          <span>Flight</span>
        </div>
      ),
    },
    {
      component: (
        <div className="flex items-center space-x-1 lg:space-x-4">
          <BedDouble className="h-5 w-5" />
          <span>Hotel</span>
        </div>
      ),
    },
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

  const formComponents = [
    (props) => <FlightHotelForm {...props} />,
    (props) => <FlightForm {...props} />,
    (props) => <HotelForm {...props} />,
    (props) => <CruiseForm {...props} />,
    (props) => <TourForm {...props} />,
    (props) => <VacationApartmentForm {...props} />,
  ];

  return (
    <div className="w-full flex justify-center -mt-[850px] lg:-mt-[600px] z-40 relative mb-[500px] ">
      {/* <div className="w-full flex justify-center -mt-24 lg:-mt-44 z-50 relative mb-20"> */}
      {/* <div className="max-w-[1100px] w-full bg-white rounded-3xl shadow-lg p-2 lg:p-8 space-y-4 lg:space-y-8"> */}
      <div className="w-[95%] lg:max-w-[1100px] bg-white rounded-3xl shadow-lg p-2 md:p-6 lg:p-8 space-y-4 lg:space-y-8">
        <div className="flex flex-row w-full justify-between items-center gap-4 overflow-x-auto scrollbar-hide pt-4">
          {searchTabs.map((item, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
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
