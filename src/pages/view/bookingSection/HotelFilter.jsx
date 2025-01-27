import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Slider from "rc-slider";
import { Tooltip } from "react-tooltip";

const option = {
  roomTypes: [
    { label: "Junior Suite / Suite", count: 32 },
    { label: "Double Room", count: 37 },
    { label: "Bangalow / Villa / Holiday Home", count: 12 },
    { label: "Family Room with 1 Bed room", count: 27 },
    { label: "Family Room with 2 Bed room", count: 25 },
    { label: "Deluxe / Superior", count: 31 },
    { label: "Apartment / Studio", count: 42 },
  ],
  food: [
    { label: "Al Inclusive", count: 54 },
    { label: "Without Meals", count: 53 },
    { label: "Breakfast", count: 23 },
    { label: "Half Board", count: 27 },
    { label: "Full Board", count: 0 },
  ],
};

const FilterTag = ({ label, count, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-lg text-sm transition-colors border border-borderGray ${
      selected ? "bg-darkBlue text-white" : " text-smokyGray hover:bg-gray-200"
    }`}
  >
    {label} {count && `(${count})`}
  </button>
);

const FilterSection = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-gray border-opacity-20 py-4">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center mb-2"
    >
      <span className="text-smokyGray font-semibold text-xl">{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-400" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-400" />
      )}
    </button>
    {isOpen && <div className="mt-3 space-y-2">{children}</div>}
  </div>
);

const HotelFilter = () => {
  const [openSection, setOpenSection] = useState("room");
  const [selectedTags, setSelectedTags] = useState([]);
  const [values, setValues] = useState([1, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);
  console.log(selectedRating);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // rating change
  const handleRatingChange = (stars) => {
    setSelectedRating(stars);
  };

  return (
    <div className="w-full rounded-3xl space-y-4 ">
      <h6 className="text-darkBlue pl-4 font-semibold font">Filter</h6>

      <div className="w-full border border-darkBlue rounded-xl p-4">
        {/* room type */}
        <FilterSection
          title="Room Type"
          isOpen={openSection === "room"}
          onToggle={() => setOpenSection(openSection === "room" ? "" : "room")}
        >
          <div className="flex flex-wrap gap-2">
            {option?.roomTypes.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                count={option.count}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* food */}
        <FilterSection
          title="Food"
          isOpen={openSection === "food"}
          onToggle={() => setOpenSection(openSection === "food" ? "" : "food")}
        >
          <div className="flex flex-wrap gap-2">
            {option?.food.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                count={option.count}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* price range */}
        <FilterSection
          title="Price Range Per Person"
          isOpen={openSection === "price"}
          onToggle={() =>
            setOpenSection(openSection === "price" ? "" : "price")
          }
        >
          <div className="px-10 pb-2">
            <Slider
              range
              marks={{
                1: "LKR1",
                1000: "LKR1000",
              }}
              min={1}
              max={1000}
              defaultValue={[1, 1000]}
              value={values}
              onChange={(newValues) => setValues(newValues)}
              handleRender={(renderProps) => {
                const value = renderProps.props["aria-valuenow"];
                return (
                  <>
                    <div
                      {...renderProps.props}
                      data-tooltip-id="slider-tooltip"
                      data-tooltip-content={`LKR${value}`}
                    ></div>
                    <Tooltip id="slider-tooltip" variant="dark" place="top" />
                  </>
                );
              }}
              className="custom-slider"
            />
          </div>
        </FilterSection>
      </div>
    </div>
  );
};

export default HotelFilter;
