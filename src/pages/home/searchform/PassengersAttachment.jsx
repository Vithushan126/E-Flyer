import React, { useEffect, useRef } from "react";

const data = [
  { label: "Adult", field: "adults", age: "Ages 12+" },
  { label: "Child", field: "children", age: "Ages 2-11" },
  { label: "Baby", field: "babies", age: "Ages Under 2" },
];

const PassengersAttachment = ({ values, setFieldValue, onClose }) => {
  const modalRef = useRef(null);
  const maxPassengers = 9;

  const handleIncrement = (field) => {
    const total = values.adults + values.children + values.babies;
    if (total < maxPassengers) {
      setFieldValue(field, values[field] + 1);
    }
  };

  const handleDecrement = (field) => {
    if (field === "adults" && values[field] > 1) {
      setFieldValue(field, values[field] - 1); // Ensure adults never go below 1
    } else if (field !== "adults" && values[field] > 0) {
      setFieldValue(field, values[field] - 1); // Other fields can go to 0
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      className="absolute z-20 w-full bg-white px-8 py-4 rounded-lg  text-smokyGray left-auto mt-14"
      ref={modalRef}
    >
      <div className="flex flex-col space-y-4">
        <span className="flex justify-center text-xl font-medium border-b border-border pb-4">
          Passengers
        </span>

        {data.map(({ label, field, age }) => (
          <div key={field} className="">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleDecrement(field)}
                className="bg-darkBlue bg-opacity-50 flex justify-center items-center px-2 text-white rounded-full text-xl"
              >
                –
              </button>

              <div>
                <span className="text-base font-semibold">
                  {values[field]} {label}
                </span>
                <div className="text-sm">{age}</div>
              </div>

              <button
                onClick={() => handleIncrement(field)}
                className="bg-darkBlue flex justify-center items-center px-2 text-white rounded-full text-xl"
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
          onClick={onClose}
          className="w-full bg-darkBlue text-white py-2 rounded-3xl"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PassengersAttachment;
