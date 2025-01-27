import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
const option = {
  waterSports: [
    { label: "Snorkeling", value: 4 },
    { label: "Dive", value: 5 },
    { label: "Sailing", value: 3 },
    { label: "Water skiing", value: 2 },
    { label: "Windsurfing", value: 4 },
    { label: "Water  sports center", value: 4 },
    { label: "Fishing", value: 3 },
  ],
  flair: [
    { label: "Tourist", value: 4 },
    { label: "Quiet", value: 5 },
    { label: "Isolated", value: 3 },
  ],
  nature: [
    { label: "Unique Landscape", value: 4 },
    { label: "Animal world", value: 4 },
    { label: "Flora", value: 4 },
  ],
  nightClub: [
    { label: "Restaurant", value: 1 },
    { label: "bars", value: 2 },
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

const ClimateDropdown = () => {
  const [openSection, setOpenSection] = useState("waterSports");
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <div className="w-full  rounded-xl p-4">
      {/* Water Sports */}
      <FilterSection
        title="Water Sports "
        isOpen={openSection === "waterSports"}
        onToggle={() =>
          setOpenSection(openSection === "waterSports" ? "" : "waterSports")
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.waterSports.map((option) => (
            <FilterTag
              key={option.label}
              label={`${option.label} (${option.value}/5)`}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Flair */}
      <FilterSection
        title="Flair "
        isOpen={openSection === "flair"}
        onToggle={() => setOpenSection(openSection === "flair" ? "" : "flair")}
      >
        <div className="flex flex-wrap gap-2">
          {option?.flair.map((option) => (
            <FilterTag
              key={option.label}
              label={`${option.label} (${option.value}/5)`}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Nature   */}
      <FilterSection
        title="Nature"
        isOpen={openSection === "nature"}
        onToggle={() =>
          setOpenSection(openSection === "nature" ? "" : "nature")
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.nature.map((option) => (
            <FilterTag
              key={option.label}
              label={`${option.label} (${option.value}/5)`}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Night Club   */}
      <FilterSection
        title="Night Club "
        isOpen={openSection === "nightClub "}
        onToggle={() =>
          setOpenSection(openSection === "nightClub " ? "" : "nightClub ")
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.nightClub.map((option) => (
            <FilterTag
              key={option.label}
              label={`${option.label} (${option.value}/5)`}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default ClimateDropdown;
