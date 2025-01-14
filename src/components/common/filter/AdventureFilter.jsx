import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Slider from "rc-slider";
import { Tooltip } from "react-tooltip";
import { RxStarFilled } from "react-icons/rx";

const option = {
  importantOptions: [
    { label: "Top", count: 45 },
    { label: "Beach Holiday", count: 34 },
    { label: "Luxury", count: 34 },
    { label: "Sustainable Accommodation", count: 45 },
    { label: "Family Vacation", count: 23 },
    { label: "Summer Sport", count: 7 },
    { label: "Beauty & Wellness", count: 15 },
    { label: "Water Sports", count: 18 },
    { label: "Free Wi-Fi", count: 54 },
    { label: "Winter Sports", count: 0 },
    { label: "AI Inclusive", count: 38 },
    { label: "Adult Only", count: 32 },
    { label: "City Trips", count: 23 },
    { label: "Nightlife", count: 28 },
  ],
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
  familyVacation: [
    { label: "Animation for young people", count: 32 },
    { label: "Babysitting service", count: 42 },
    { label: "Child Care", count: 24 },
    { label: "Padding Pool / Children’s Pool", count: 9 },
    { label: "Water Slide", count: 16 },
    { label: "Play Ground", count: 32 },
    { label: "Mini / Kids club", count: 12 },
  ],
  beach: [
    { label: "Fine White Sandy Beach", count: 21 },
    { label: "House reef", count: 0 },
    { label: "Hotel Own Beach", count: 31 },
    { label: "Sandy Beach’s Pool", count: 28 },
    { label: "Pebble Beach", count: 21 },
    { label: "Natural Beach", count: 50 },
    { label: "Gently Sloping Beach", count: 29 },
    { label: "Rocky Beach", count: 9 },
  ],
  position: [
    { label: "Beach", count: 34 },
    { label: "Lake", count: 26 },
    { label: "National Park", count: 7 },
    { label: "Snow Sports", count: 32 },
    { label: "Camping", count: 12 },
    { label: "Water Fall", count: 29 },
    { label: "Desert", count: 0 },
  ],
  sports: [
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
  beautyWellness: [
    { label: "à la carte restaurant", count: 42 },
    { label: "Dog welcome", count: 5 },
    { label: "Gourmet restaurant", count: 21 },
    { label: "WiFi for fee", count: 7 },
    { label: "Snack Bar / Bistro", count: 15 },
    { label: "Animation", count: 17 },
    { label: "Free WiFi", count: 13 },
    { label: "Disco / Nightclub", count: 34 },
    { label: "Electric Car Charging Station", count: 24 },
    { label: "Parking", count: 33 },
    { label: "Buffet", count: 22 },
  ],
  region: [
    { label: "Authentic", count: 31 },
    { label: "Invigorated", count: 42 },
    { label: "Rural", count: 21 },
    { label: "Mountains", count: 24 },
    { label: "Unique Landscape", count: 29 },
    { label: "Quiet", count: 26 },
    { label: "Animal World", count: 27 },
    { label: "Flora", count: 21 },
    { label: "City", count: 33 },
    { label: "Shopping", count: 28 },
    { label: "Tourist", count: 44 },
  ],
  experienceRegion: [
    { label: "Bars / Pubs", count: 32 },
    { label: "Concerts / Festivals", count: 21 },
    { label: "Art / Galleries / Museum", count: 23 },
    { label: "Theater / Opera / Ballet / Musicals", count: 12 },
    { label: "Clubs / Disco", count: 24 },
    { label: "Restaurants", count: 43 },
    { label: "Sightseeing features", count: 21 },
  ],
  starRatings: [
    { stars: 5, count: 27 },
    { stars: 4, count: 14 },
    { stars: 3, count: 32 },
    { stars: 2, count: 27 },
    { stars: 1, count: 0 },
  ],
  hotelFacilities: [
    { label: "à la carte restaurant", count: 42 },
    { label: "Dog welcome", count: 5 },
    { label: "Gourmet restaurant", count: 21 },
    { label: "WiFi for fee", count: 7 },
    { label: "Snack Bar / Bistro", count: 15 },
    { label: "Animation", count: 17 },
    { label: "Free WiFi", count: 13 },
    { label: "Disco / Nightclub", count: 34 },
    { label: "Electric Car Charging Station", count: 24 },
    { label: "Parking", count: 33 },
    { label: "Buffet", count: 22 },
  ],
};

const FilterTag = ({ label, count, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-lg text-sm transition-colors border border-borderGray ${
      selected ? "bg-darkBlue text-white" : " text-smokyGray hover:bg-gray-200"
    }`}
  >
    {label} ({count})
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

const AdventureFilter = () => {
  const [openSection, setOpenSection] = useState("important");
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
        {/* importan section */}
        <FilterSection
          title="What is Important to you?"
          isOpen={openSection === "important"}
          onToggle={() =>
            setOpenSection(openSection === "important" ? "" : "important")
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.importantOptions.map((option) => (
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

        {/* review */}
        <FilterSection
          title="Review"
          isOpen={openSection === "review"}
          onToggle={() =>
            setOpenSection(openSection === "review" ? "" : "review")
          }
        >
          {option?.starRatings?.map((rating, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-gray-100 p-2 rounded"
            >
              <label className="flex items-center space-x-3 cursor-pointer w-full">
                <input
                  type="radio"
                  name="rating"
                  className="form-radio h-4 w-4 text-blue-600 border-gray-300"
                  checked={selectedRating === rating.stars}
                  onChange={() => handleRatingChange(rating.stars)}
                />
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    {Array(rating.stars)
                      .fill(0)
                      .map((_, i) => (
                        <RxStarFilled
                          key={i}
                          className="w-5 h-5 text-darkBlue"
                        />
                      ))}
                  </div>
                  <span className="text-gray-500">({rating.count})</span>
                </div>
              </label>
            </div>
          ))}
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

        {/* family vacation */}
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
                count={option.count}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* beach */}
        <FilterSection
          title="Beach"
          isOpen={openSection === "departureTime"}
          onToggle={() =>
            setOpenSection(
              openSection === "departureTime" ? "" : "departureTime"
            )
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.beach.map((option) => (
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

        {/* position */}
        <FilterSection
          title="Position"
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
                count={option.count}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* sports */}
        <FilterSection
          title="Sports"
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
                count={option.count}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* beauty & wellness */}
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
                count={option.count}
                selected={selectedTags.includes(option.label)}
                onClick={() => toggleTag(option.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* hotel facilities  */}
        <FilterSection
          title="Hotel Facilities "
          isOpen={openSection === "hotelFacilities"}
          onToggle={() =>
            setOpenSection(
              openSection === "hotelFacilities" ? "" : "hotelFacilities"
            )
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.hotelFacilities.map((option) => (
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

        {/* region */}
        <FilterSection
          title="The Region "
          isOpen={openSection === "region"}
          onToggle={() =>
            setOpenSection(openSection === "region" ? "" : "region")
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.region.map((option) => (
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

        {/* experience region  */}
        <FilterSection
          title="Experience In the region "
          isOpen={openSection === "experienceRegion "}
          onToggle={() =>
            setOpenSection(
              openSection === "experienceRegion " ? "" : "experienceRegion "
            )
          }
        >
          <div className="flex flex-wrap gap-2">
            {option?.experienceRegion.map((option) => (
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
      </div>
    </div>
  );
};

export default AdventureFilter;
