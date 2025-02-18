import React, { useEffect, useRef, useState } from "react";

const data = [
  { label: "Adult", field: "adults", age: "Ages 12+", max: 6 },
  { label: "Child", field: "children", age: "Ages 2-11", max: 6 },
  { label: "Baby", field: "babies", age: "Ages Under 2", max: 1 },
];

const PassengersAttachment = ({ values, setFieldValue, onClose }) => {
  const modalRef = useRef(null);
  const maxPassengers = 9;

  // Create local state to track temporary changes
  const [tempValues, setTempValues] = useState({
    adults: values.adults,
    children: values.children,
    babies: values.babies,
  });

  const handleIncrement = (field) => {
    const total = tempValues.adults + tempValues.children + tempValues.babies;
    if (total < maxPassengers) {
      setTempValues({
        ...tempValues,
        [field]: tempValues[field] + 1,
      });
    }
  };

  const handleDecrement = (field) => {
    if (field === "adults" && tempValues[field] > 1) {
      setTempValues({
        ...tempValues,
        [field]: tempValues[field] - 1,
      }); // Ensure adults never go below 1
    } else if (field !== "adults" && tempValues[field] > 0) {
      setTempValues({
        ...tempValues,
        [field]: tempValues[field] - 1,
      }); // Other fields can go to 0
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleConfirm = () => {
    // Update the actual Formik values when confirm is clicked
    setFieldValue("adults", tempValues.adults);
    setFieldValue("children", tempValues.children);
    setFieldValue("babies", tempValues.babies);
    onClose();
  };

  // Function to check if decrement button should be disabled
  const isDecrementDisabled = (field) => {
    if (field === "adults") {
      return tempValues.adults <= 1; // Adults can't go below 1
    } else {
      return tempValues[field] <= 0; // Other passengers can't go below 0
    }
  };

  // Function to check if increment button should be disabled
  const isIncrementDisabled = (field, maxFieldValue) => {
    const total = tempValues.adults + tempValues.children + tempValues.babies;

    // Check if we've reached total max passengers
    if (total >= maxPassengers) {
      return true;
    }

    // Check individual passenger type limits
    if (field === "adults" && tempValues.adults >= maxFieldValue) {
      return true;
    } else if (field === "children" && tempValues.children >= maxFieldValue) {
      return true;
    } else if (field === "babies" && tempValues.babies >= maxFieldValue) {
      return true;
    }

    return false;
  };

  return (
    <div
      className="absolute z-20 w-full bg-white px-8 py-4 rounded-lg text-smokyGray left-auto mt-14"
      ref={modalRef}
    >
      <div className="flex flex-col space-y-4">
        <span className="flex justify-center text-xl font-medium border-b border-border pb-4">
          Passengers
        </span>

        {data.map(({ label, field, age, max }) => (
          <div key={field} className="">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDecrement(field)}
                disabled={isDecrementDisabled(field)}
                className={`flex justify-center h-8 w-8  text-white rounded-full text-xl bg-darkBlue bg-opacity-50 ${
                  isDecrementDisabled(field) ? " cursor-not-allowed" : " "
                }`}
              >
                –
              </button>

              <div>
                <span className="text-base font-semibold">
                  {tempValues[field]} {label}
                </span>
                <div className="text-sm">{age}</div>
              </div>

              <button
                type="button"
                onClick={() => handleIncrement(field)}
                disabled={isIncrementDisabled(field, max)}
                className={`flex justify-center h-8 w-8  text-white rounded-full text-xl bg-darkBlue ${
                  isIncrementDisabled(field, max) ? " cursor-not-allowed" : ""
                }`}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <p className="text-xs flex justify-center text-center">
          Note: You can book for a maximum of {maxPassengers} passengers.
        </p>

        <button
          type="button"
          onClick={handleConfirm}
          className="w-full bg-darkBlue text-white py-2 rounded-3xl"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PassengersAttachment;
