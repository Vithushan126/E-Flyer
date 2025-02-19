import React, { useState, useRef, useEffect } from "react";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const TravelClassAttachment = ({ values, setFieldValue, onClose }) => {
  const modalRef = useRef(null);
  const [selectedClass, setSelectedClass] = useState(values.travelClass);
  const [selectedBaggage, setSelectedBaggage] = useState(
    values.baggage || "Carry-on baggage only"
  );

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

  const handleApply = () => {
    setFieldValue("travelClass", selectedClass);
    setFieldValue("baggage", selectedBaggage);
    onClose();
  };

  const travelClasses = ["Economy", "Premium", "First Class"];
  const baggageOptions = ["Free Baggage", "Carry-on Baggage"];

  return (
    <div
      className="absolute z-20 mt-14 w-full bg-white rounded-lg shadow-lg p-4 border border-border "
      ref={modalRef}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Travel Class</h3>
        <div className="space-y-2 ">
          {travelClasses.map((cls) => (
            <div
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`flex items-center justify-between p-2 cursor-pointer rounded-md  ${
                selectedClass === cls ? "bg-[#B3C7D6]" : "hover:bg-gray-50"
              }`}
            >
              <span className="">{cls}</span>
              {selectedClass === cls && (
                <CheckCircle2 className="text-darkBlue h-5 w-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Baggage</h3>
        <div className="space-y-2">
          {baggageOptions.map((option) => (
            <div
              key={option}
              onClick={() => setSelectedBaggage(option)}
              className={`flex items-center justify-between p-2 cursor-pointer rounded-md ${
                selectedBaggage === option ? "bg-[#B3C7D6]" : "hover:bg-gray-50"
              }`}
            >
              <span>{option}</span>
              {selectedBaggage === option && (
                <CheckCircle2 className="text-darkBlue h-5 w-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleApply}
          className="w-full bg-darkBlue text-white py-2 rounded-3xl"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default TravelClassAttachment;
