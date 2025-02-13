import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Slider from "rc-slider";
import { Tooltip } from "react-tooltip";
import { RxStarFilled } from "react-icons/rx";

const option = {
  stopoverOptions: [{ label: "All options" }, { label: "Max 1 stop" }],
  ticketOptions: [
    { label: "Non refundable" },
    { label: "Refundable status unknown" },
  ],
  farType: [{ label: "Lowcost" }, { label: "Regular" }],
  classServise: [
    { label: "Economy " },
    { label: "Mix of Classes" },
    { label: "Premium Economy" },
  ],
  paymentOptions: {
    creditCard: [
      { label: "Airplus" },
      { label: "American Express" },
      { label: "Visa" },
      { label: "Master card" },
    ],
    debitCard: [{ label: "Master card Debit" }, { label: "Visa Debit" }],
    otherPayment: [{ label: "On account" }],
  },
  airline: [
    { label: "Qatar Airway " },
    { label: "Condor Flugdienst " },
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
    className={`px-4 py-1 rounded-lg transition-colors border border-borderGray ${
      selected
        ? "bg-darkBlue text-white text-xs "
        : " text-smokyGray text-xs hover:bg-darkBlue"
    }`}
  >
    {label}
  </button>
);

const FilterSection = ({
  title,
  isOpen,
  onToggle,
  children,
  isLastSection,
}) => (
  <div
    className={`py-4 ${
      !isLastSection ? "border-b border-gray border-opacity-20" : ""
    }`}
  >
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

const FlightAvailableFilter = ({ setIsFilterOpen }) => {
  const [openSection, setOpenSection] = useState("stopover");
  const [selectedTags, setSelectedTags] = useState([]);
  const [values, setValues] = useState([1, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [depatureTime, setDepatureTime] = useState([0, 1439]);
  const [departureReturnTime, setDepartureReturnTime] = useState([0, 1439]);
  const [flightDuration, setFlightDuration] = useState([0, 36]);

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

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const mins = (minutes % 60).toString().padStart(2, "0");
    return `${hours}:${mins}`;
  };

  // Log the depature time
  console.log(depatureTime.map(formatTime));
  // Log the return time
  console.log(departureReturnTime.map(formatTime));

  return (
    <div className="w-full  lg:h-auto h-screen p-2 lg:p-0 overflow-y-scroll scrollbar-hide flex flex-row justify-center items-center z-40">
      <div className="w-[500px] lg:w-[389px]  border border-darkBlue rounded-xl p-4 shadow-md  bg-white z-50">
        <button
          className=" lg:hidden flex flex-row justify-end w-full   hover:text-black"
          onClick={() => setIsFilterOpen(false)}
        >
          <X className="w-10 h-10" />
        </button>

        {/* Stopover section */}
        <FilterSection
          title="Stopover"
          isOpen={openSection === "stopover"}
          onToggle={() =>
            setOpenSection(openSection === "stopover" ? "" : "stopover")
          }
          isLastSection={false}
        >
          <div className="flex flex-wrap gap-2">
            {option?.stopoverOptions.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Ticket Refundability type */}
        <FilterSection
          title="Ticket Refundability"
          isOpen={openSection === "ticket"}
          onToggle={() =>
            setOpenSection(openSection === "ticket" ? "" : "ticket")
          }
          isLastSection={false}
        >
          <div className="flex flex-wrap gap-2">
            {option?.ticketOptions.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Fare Type */}
        <FilterSection
          title="Fare Type"
          isOpen={openSection === "farType"}
          onToggle={() =>
            setOpenSection(openSection === "farType" ? "" : "farType")
          }
          isLastSection={false}
        >
          <div className="flex flex-wrap gap-2">
            {option?.farType.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Class of Servise */}
        <FilterSection
          title="Class of Servise"
          isOpen={openSection === "classServise"}
          onToggle={() =>
            setOpenSection(openSection === "classServise" ? "" : "classServise")
          }
          isLastSection={false}
        >
          <div className="flex flex-wrap gap-2">
            {option?.classServise.map((option) => (
              <FilterTag
                key={option.label}
                label={option.label}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Payment*/}
        <FilterSection
          title="Payment"
          isOpen={openSection === "payment"}
          onToggle={() =>
            setOpenSection(openSection === "payment" ? "" : "payment")
          }
          isLastSection={false}
        >
          {Object.entries(option.paymentOptions).map(([category, options]) => (
            <div key={category} className="w-full">
              {/* Category Title */}
              <h3 className="text-smokyGray py-4">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {options.map((option) => (
                  <FilterTag
                    key={option.label}
                    label={option.label}
                    selected={selectedTags.includes(option.label)}
                    onClick={() => toggleTag(option.label)}
                  />
                ))}
              </div>
            </div>
          ))}
        </FilterSection>

        {/* Flight Price */}
        <FilterSection
          title="Flight Price"
          isOpen={openSection === "flightPrice"}
          onToggle={() =>
            setOpenSection(openSection === "flightPrice" ? "" : "flightPrice")
          }
          isLastSection={false}
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

        {/*Departure Time */}
        <FilterSection
          title="Departure Time (Outbound)"
          isOpen={openSection === "departureTime"}
          onToggle={() =>
            setOpenSection(
              openSection === "departureTime" ? "" : "departureTime"
            )
          }
          isLastSection={false}
        >
          <div className="px-10 pb-2">
            <Slider
              range
              marks={{
                0: "00:00",
                1439: "23:59",
              }}
              min={0}
              max={1439}
              defaultValue={[0, 1439]}
              value={depatureTime}
              onChange={(newValues) => setDepatureTime(newValues)}
              handleRender={(renderProps) => {
                const value = formatTime(renderProps.props["aria-valuenow"]);
                return (
                  <>
                    <div
                      {...renderProps.props}
                      data-tooltip-id={`slider-tooltip-${renderProps.index}`}
                      data-tooltip-content={value}
                    ></div>
                    <Tooltip
                      id={`slider-tooltip-${renderProps.index}`}
                      variant="dark"
                      place="top"
                    />
                  </>
                );
              }}
              className="custom-slider"
            />
          </div>
        </FilterSection>

        {/*Departure Time (Return)  */}
        <FilterSection
          title="Departure Time (Return) "
          isOpen={openSection === "departureReturnTime"}
          onToggle={() =>
            setOpenSection(
              openSection === "departureReturnTime" ? "" : "departureReturnTime"
            )
          }
          isLastSection={false}
        >
          <div className="px-10 pb-2">
            <Slider
              range
              marks={{
                0: "00:00",
                1439: "23:59",
              }}
              min={0}
              max={1439}
              defaultValue={[0, 1439]}
              value={departureReturnTime}
              onChange={(newValues) => setDepartureReturnTime(newValues)}
              handleRender={(renderProps) => {
                const value = formatTime(renderProps.props["aria-valuenow"]);
                return (
                  <>
                    <div
                      {...renderProps.props}
                      data-tooltip-id={`slider-tooltip-${renderProps.index}`}
                      data-tooltip-content={value}
                    ></div>
                    <Tooltip
                      id={`slider-tooltip-${renderProps.index}`}
                      variant="dark"
                      place="top"
                    />
                  </>
                );
              }}
              className="custom-slider"
            />
          </div>
        </FilterSection>

        {/* Flight Duration  */}
        <FilterSection
          title="Flight Duration"
          isOpen={openSection === "flightDuration"}
          onToggle={() =>
            setOpenSection(
              openSection === "flightDuration" ? "" : "flightDuration"
            )
          }
          isLastSection={false}
        >
          <div className="px-10 pb-2">
            <Slider
              range
              marks={{
                0: "0 Hours",
                36: "36 Hours",
              }}
              min={0}
              max={36}
              defaultValue={[0, 36]}
              value={flightDuration}
              onChange={(newValues) => setFlightDuration(newValues)}
              handleRender={(renderProps) => {
                const value = renderProps.props["aria-valuenow"];
                return (
                  <>
                    <div
                      {...renderProps.props}
                      data-tooltip-id={`slider-tooltip-${renderProps.index}`}
                      data-tooltip-content={`${value} Hours`}
                    ></div>
                    <Tooltip
                      id={`slider-tooltip-${renderProps.index}`}
                      variant="dark"
                      place="top"
                    />
                  </>
                );
              }}
              className="custom-slider"
            />
          </div>
        </FilterSection>

        {/* Airline */}
        <FilterSection
          title="Airline"
          isOpen={openSection === "airline"}
          onToggle={() =>
            setOpenSection(openSection === "airline" ? "" : "airline")
          }
          isLastSection={false}
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

export default FlightAvailableFilter;
