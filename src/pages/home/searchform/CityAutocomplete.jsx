import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import airports from "../../../data/airports.json";

// Filter suggestions based on input value (at least 3 letters)
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  if (inputValue.length < 3) return [];
  return airports.filter(
    (airport) => airport.city && airport.city.toLowerCase().includes(inputValue)
  );
};

// Formats suggestion as "City (IATA)"
const getSuggestionValue = (suggestion) =>
  `${suggestion.city}, ${suggestion.country} (${suggestion.iata})`;

// Renders a suggestion item in the dropdown with modern styling
const renderSuggestion = (suggestion) => (
  <div className="w-full px-4 py-2 hover:bg-darkBlue hover:text-white cursor-pointer">
    <div className="flex flex-row justify-between">
      <span className="font-medium text-gray-800">{suggestion.city}</span>{" "}
      <span className="text-gray-500">{suggestion.iata}</span>
    </div>
    <span className="text-gray-500">({suggestion.country})</span>
  </div>
);

const renderSuggestionsContainer = ({ containerProps, children, query }) => (
  <div
    {...containerProps}
    className="absolute z-50 w-80 mt-1 -ml-14 bg-white  max-h-60 overflow-y-auto"
  >
    {children}
  </div>
);

const CityAutocomplete = ({ field, form, placeholder }) => {
  const [displayValue, setDisplayValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (field.value) {
      const selectedAirport = airports.find(
        (airport) => airport.iata === field.value
      );
      if (selectedAirport) {
        setDisplayValue(getSuggestionValue(selectedAirport));
      }
    }
  }, [field.value]);

  // Update input value
  const onChange = (event, { newValue }) => {
    setDisplayValue(newValue);
    // Reset the Formik field value until a valid suggestion is selected
    form.setFieldValue(field.name, "");
  };

  // Fetch suggestions as the user types
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Clear suggestions when needed
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When a suggestion is selected, update the Formik field with IATA code
  const onSuggestionSelected = (event, { suggestion }) => {
    const suggestionText = getSuggestionValue(suggestion);
    setDisplayValue(suggestionText);
    // Save only the IATA code in Formik state
    form.setFieldValue(field.name, suggestion.iata);
  };

  const inputProps = {
    placeholder: placeholder || "Type a city...",
    value: displayValue,
    onChange: onChange,
    className: "w-fit bg-backgroundColor focus:outline-none",
  };

  return (
    <div className="relative">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps}
        renderSuggestionsContainer={renderSuggestionsContainer}
      />
      {/* Hidden input to ensure Formik submits the IATA code */}
      <input
        type="hidden"
        name={field.name}
        value={field.value}
        onChange={form.handleChange}
      />
    </div>
  );
};

export default CityAutocomplete;
