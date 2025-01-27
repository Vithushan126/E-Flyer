import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
const option = {
  familyVacation: [
    { label: "Junior Suite / Suite" },
    { label: "Double Room" },
    { label: "Bangalow / Villa / Holiday Home" },
    { label: "Family Room with 1 Bed room" },
    { label: "Family Room with 2 Bed room" },
    { label: "Deluxe / Superior" },
    { label: "Apartment / Studio" },
  ],
  beach: [
    { label: "Fine White Sandy Beach" },
    { label: "Natural Beach" },
    { label: "Hotel Own Beach" },
    { label: "Sandy Beach" },
    { label: "Pebble Beach" },
    { label: "Gently Sloping Beach" },
    { label: "Rocky Beach" },
  ],
  position: [
    { label: "Beach" },
    { label: "Lake" },
    { label: "National Park" },
    { label: "Desert" },
    { label: "Snow Sports" },
    { label: "Camping" },
  ],
  sports: [
    { label: "Fitness Center" },
    { label: "Sports Program" },
    { label: "Pool" },
    { label: "Golf" },
    { label: "Canoe / Kayak" },
    { label: "Beach Sports" },
    { label: "Snorkeling" },
  ],
  beautyWellness: [
    { label: "Ayurveda" },
    { label: "Steam bath / hammam" },
    { label: "Spa Wellness Center" },
    { label: "Beauty treatment" },
    { label: "Sauna" },
    { label: "Massage" },
  ],
  hotelFacilities: [
    { label: "à la carte restaurant" },
    { label: "Dog welcome" },
    { label: "Gourmet restaurant" },
    { label: "WiFi for fee" },
    { label: "Snack Bar / Bistro" },
    { label: "Animation" },
    { label: "Free WiFi" },
    { label: "Disco / Nightclub" },
  ],
  region: [
    { label: "Authentic" },
    { label: "Invigorated" },
    { label: "Rural" },
    { label: "Flora" },
    { label: "Mountains" },
    { label: "Unique Landscape" },
    { label: "Tourist" },
    { label: "Quiet" },
    { label: "Animal World" },
    { label: "Shopping" },
    { label: "City" },
  ],
  experienceRegion: [
    { label: "Bars / Pubs" },
    { label: "Concerts / Festivals" },
    { label: "Story" },
    { label: "Art / Galleries / Museum" },
    { label: "Theater / Opera / Ballet / Musicals" },
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

const DropDownSection = () => {
  const [openSection, setOpenSection] = useState("familyVacation");
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <div className="w-full  rounded-xl p-4">
      {/* Family Vacation */}
      <FilterSection
        title="Family Vacation "
        isOpen={openSection === "familyVacation"}
        onToggle={() =>
          setOpenSection(
            openSection === "familyVacation" ? "" : "familyVacation"
          )
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.familyVacation.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* beach */}
      <FilterSection
        title="Beach "
        isOpen={openSection === "beach"}
        onToggle={() => setOpenSection(openSection === "beach" ? "" : "beach")}
      >
        <div className="flex flex-wrap gap-2">
          {option?.beach.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Position   */}
      <FilterSection
        title="Position   "
        isOpen={openSection === "position"}
        onToggle={() =>
          setOpenSection(openSection === "position" ? "" : "position")
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.position.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Sports   */}
      <FilterSection
        title="Position   "
        isOpen={openSection === "sports"}
        onToggle={() =>
          setOpenSection(openSection === "sports" ? "" : "sports")
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.sports.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Beauty & Wellness   */}
      <FilterSection
        title="Beauty & Wellness"
        isOpen={openSection === "beautyWellness"}
        onToggle={() =>
          setOpenSection(
            openSection === "beautyWellness" ? "" : "beautyWellness"
          )
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.beautyWellness.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Hotel Facilities    */}
      <FilterSection
        title="Hotel Facilities "
        isOpen={openSection === "hotelFacilities "}
        onToggle={() =>
          setOpenSection(
            openSection === "hotelFacilities " ? "" : "hotelFacilities "
          )
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.hotelFacilities.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/*region   */}
      <FilterSection
        title="The Region"
        isOpen={openSection === "region "}
        onToggle={() =>
          setOpenSection(openSection === "region " ? "" : "region ")
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.region.map((option) => (
            <FilterTag
              key={option.label}
              label={option.label}
              selected={selectedTags.includes(option.label)}
              onClick={() => toggleTag(option.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* experiance region    */}
      <FilterSection
        title="Experience In the region "
        isOpen={openSection === "experienceRegion"}
        onToggle={() =>
          setOpenSection(
            openSection === "experienceRegion" ? "" : "experienceRegion"
          )
        }
      >
        <div className="flex flex-wrap gap-2">
          {option?.experienceRegion.map((option) => (
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
  );
};

export default DropDownSection;
