import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  departureAirport: [
    { label: "Animation for young people", count: 32 },
    { label: "Babysitting service", count: 42 },
    { label: "Child Care", count: 24 },
    { label: "Padding Pool / Children’s Pool", count: 9 },
    { label: "Water Slide", count: 16 },
    { label: "Play Ground", count: 32 },
    { label: "Mini / Kids club", count: 12 },
  ],
  departureTime: [
    { label: "Fine White Sandy Beach", count: 21 },
    { label: "House reef", count: 0 },
    { label: "Hotel Own Beach", count: 31 },
    { label: "Sandy Beach’s Pool", count: 28 },
    { label: "Pebble Beach", count: 21 },
    { label: "Natural Beach", count: 50 },
    { label: "Gently Sloping Beach", count: 29 },
    { label: "Rocky Beach", count: 9 },
  ],
  stopover: [
    { label: "Beach", count: 34 },
    { label: "Lake", count: 26 },
    { label: "National Park", count: 7 },
    { label: "Snow Sports", count: 32 },
    { label: "Camping", count: 12 },
    { label: "Water Fall", count: 29 },
    { label: "Desert", count: 0 },
  ],
  flightDuration: [
    { label: "Fitness Center", count: 21 },
    { label: "Sports Program", count: 25 },
    { label: "Golf", count: 8 },
    { label: "Canoe / Kayak", count: 17 },
    { label: "Pool", count: 43 },
    { label: "Snorkeling", count: 7 },
    { label: "Beach Sports", count: 42 },
    { label: "Ski Package", count: 30 },
    { label: "Sailing", count: 36 },
    { label: "Yoga", count: 37 },
    { label: "Squash", count: 23 },
    { label: "Tennis", count: 18 },
    { label: "Kitesurfing", count: 34 },
    { label: "Surfing", count: 8 },
    { label: "Bicycles", count: 3 },
    { label: "Foot Ball", count: 23 },
    { label: "Windsurfing", count: 38 },
    { label: "Diving Center", count: 52 },
    { label: "Water Skiing", count: 32 },
    { label: "Indoor Pool", count: 51 },
  ],
  airline: [
    { label: "Qatar Airways" },
    { label: "Condor Flugdienst" },
    { label: "Oman Air" },
    { label: "Edelweiss Air" },
    { label: "Swiss" },
    { label: "Emirates" },
    { label: "Fly Dubai" },
    { label: "Turkish Airline" },
  ],
};

const FilterTag = ({ label, count, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-lg text-sm transition-colors border border-borderGray ${
      selected ? "bg-darkBlue text-white" : " text-smokyGray hover:bg-darkBlue"
    }`}
  >
    {label} {count && `(${count})`}
  </button>
);

const FilterSection = ({ title, isOpen, onToggle, children, isLastSection }) => (
  <div className={`py-4 ${!isLastSection ? 'border-b border-gray border-opacity-20' : ''}`}>
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center mb-2"
    >
      <span className="text-smokyGray font-medium text-sm">{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-400" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-400" />
      )}
    </button>
    {isOpen && <div className="mt-3 space-y-2">{children}</div>}
  </div>
);

const OfferFilter = () => {
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

        {/* Departure airport  */}
        <FilterSection
          title="Departure airport  "
          isOpen={openSection === "departureAirport "}
          onToggle={() =>
            setOpenSection(
              openSection === "departureAirport " ? "" : "departureAirport "
            )
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.departureAirport.map((option) => (
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

        {/* departure time */}
        <FilterSection
          title="Departure Time"
          isOpen={openSection === "departureTime"}
          onToggle={() =>
            setOpenSection(
              openSection === "departureTime" ? "" : "departureTime"
            )
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.departureTime.map((option) => (
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

        {/* Stopover */}
        <FilterSection
          title="Stopover"
          isOpen={openSection === "stopover"}
          onToggle={() =>
            setOpenSection(openSection === "stopover" ? "" : "stopover")
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.stopover.map((option) => (
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

        {/* Flight Duration */}
        <FilterSection
          title="Flight Duration"
          isOpen={openSection === "flightDuration"}
          onToggle={() =>
            setOpenSection(
              openSection === "flightDuration" ? "" : "flightDuration"
            )
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.flightDuration.map((option) => (
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

        {/* Airline */}
        <FilterSection
          title="Airline"
          isOpen={openSection === "airline"}
          onToggle={() =>
            setOpenSection(openSection === "airline" ? "" : "airline")
          }
          isLastSection={true}
        >
          <div className="flex flex-wrap gap-2">
            {option?.airline.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </div>
  );
};

export default OfferFilter;
