import React, { useState } from "react";
import img1 from "../../../assets/explore/img_1.png"; // World map image
import img2 from "../../../assets/explore/img_2.png"; // Sand dune/middle section
import img3 from "../../../assets/explore/img_3.png"; // Colosseum/Egypt section
import img4 from "../../../assets/explore/img_4.jpg"; // Another country image 1
import img5 from "../../../assets/explore/img_5.jpg"; // Another country image 2
import img6 from "../../../assets/explore/img_6.jpg"; // Another country image 3
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Explore = () => {
  // Country sections data
  const countries = [
    {
      id: "egypt",
      images: [img1, img2, img3],
      title: "Book Your Visit to Egypt",
      description:
        "Nestled in the heart of Nepal, Kathmandu offers an unforgettable blend of natural wonders, spiritual sanctuaries, and delicious cuisine. Serving as the gateway to the picturesque Himalayas, it is a popular destination for hikers and climbers. If you prefer to admire Mount Everest from afar, there are plenty of other activities to pique your interest – wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.",
    },
    {
      id: "USA",
      images: [img6, img5, img4],
      title: "Book Your Visit to USA",
      description:
        "United States is a land of incredible diversity, from the rugged beauty of its national parks to the vibrant energy of its cities. Explore iconic landmarks, immerse yourself in rich cultural experiences, and discover the welcoming spirit that defines this vast nation.",
    },
  ];

  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const rotateLeft = () => {
    setCurrentCountryIndex((prevIndex) =>
      prevIndex === 0 ? countries.length - 1 : prevIndex - 1
    );
  };

  const rotateRight = () => {
    setCurrentCountryIndex((prevIndex) =>
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCountry = countries[currentCountryIndex];

  return (
    <div className="bg-blue-900 text-white p-4 sm:p-8 md:p-10 relative">
      {/* Header Section */}
      <div className="ml-36 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">Explore The Country</h1>
        <p className="mt-2 text-sm md:text-lg">
          Discover our world of exclusive offers and services that change the way you travel.
        </p>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={rotateLeft}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gradient-to-br from-gray to-gray-200 p-6 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-20"
      >
        <SlArrowLeft
          size={24}
          className="text-white transition-transform duration-300 hover:rotate-[-15deg]"
        />
      </button>
      <button
        onClick={rotateRight}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gradient-to-br  from-gray to-gray-200   p-6 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-20"
      >
        <SlArrowRight
          size={24}
          className="text-white transition-transform duration-300 hover:rotate-[15deg]"
        />
      </button>


      {/* Image Section */}
      <div className="flex flex-row w-[1440px] h-[451px]">
        {currentCountry.images.map((image, index) => {
          const isMiddle = index === 1; // Middle image logic
          return (
            <div
              key={index}
              className={`relative w-[480px] h-[451px] ${isMiddle ? "bg-black bg-opacity-90" : ""
                }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {isMiddle && (
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  {/* Title */}
                  <h2 className="absolute text-[30px] font-medium leading-[36px] top-[34px] left-[53px]">
                    {currentCountry.title}
                  </h2>
                  {/* Description */}
                  <p className="absolute top-[87px] left-[58px] w-[367px] text-justify text-[16px] leading-[22px]">
                    {currentCountry.description}
                  </p>
                  {/* Explore Button */}
                  <div className="absolute flex justify-center items-center bg-[#004679] rounded-[20px] p-[12px] w-[195px] h-[72px] left-[58px] top-[315px]">
                    <span className="text-[24px] font-medium">Explore</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
