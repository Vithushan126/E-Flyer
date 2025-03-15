import React, { useState } from "react";
import img1 from "../../../assets/explore/img_1.png";
import img2 from "../../../assets/explore/img_2.png";
import img3 from "../../../assets/explore/img_3.png";
import img4 from "../../../assets/explore/img_4.jpg";
import img5 from "../../../assets/explore/img_5.jpg";
import img6 from "../../../assets/explore/img_6.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();

  const countries = [
    {
      id: "egypt",
      images: [img1, img2, img3],
      title: "Book Your Visit to Egypt",
      description:
        "Nestled in the heart of Nepal, Kathmandu offers an unforgettable blend of natural wonders, spiritual sanctuaries, and delicious cuisine. Serving as the gateway to the picturesque Himalayas, it is a popular destination for hikers and climbers.",
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
    <div className="w-full bg-darkBlue text-white px-4 sm:px-8 md:px-10 py-8 relative">
      {/* Header Section */}
      <div className="ml-4 xs:ml-6 sm:ml-16 md:ml-36 mb-6 sm:mb-8">
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold">
          {t("explore.title")}
        </h1>
        <p className="mt-2 text-sm xs:text-base sm:text-lg md:text-xl">
          {t("explore.subTitle")}
        </p>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={rotateLeft}
        className="absolute top-1/2 left-2 sm:left-4 md:left-8 lg:left-10 transform -translate-y-1/2 bg-gradient-to-br from-gray to-gray-200 p-4 sm:p-6 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-20"
      >
        <SlArrowLeft
          size={24}
          className="text-white transition-transform duration-300 hover:rotate-[-15deg]"
        />
      </button>
      <button
        onClick={rotateRight}
        className="absolute top-1/2 right-2 sm:right-4 md:right-8 lg:right-10 transform -translate-y-1/2 bg-gradient-to-br from-gray to-gray-200 p-4 sm:p-6 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-20"
      >
        <SlArrowRight
          size={24}
          className="text-white transition-transform duration-300 hover:rotate-[15deg]"
        />
      </button>

      {/* Image Section */}
      <div className="flex flex-col sm:flex-row justify-center w-full  sm:space-y-0">
        {currentCountry.images.map((image, index) => {
          const isMiddle = index === 1;
          return (
            <div
              key={index}
              className={`relative w-full sm:w-[480px] md:w-[480px] lg:w-[480px] h-[250px] sm:h-[380px] md:h-[451px] ${
                isMiddle ? "bg-black bg-opacity-90" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {isMiddle && (
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 text-white">
                  <h2 className="absolute text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight top-4 sm:top-6 left-4 sm:left-8">
                    {currentCountry.title}
                  </h2>
                  <p className="absolute top-[70px] sm:top-[87px] md:top-[130px] left-4 sm:left-8 w-[90%] sm:w-[80%] md:w-[350px] lg:w-[420px] text-justify text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                    {currentCountry.description}
                  </p>
                  <div className="absolute flex justify-center items-center bg-darkBlue rounded-[20px] p-3 xs:p-4 sm:p-5 w-[100px] sm:w-[150px] md:w-[200px] h-[40px] sm:h-[60px] md:h-[70px] left-[30px] sm:left-[50px] top-[200px] sm:top-[300px]">
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {t("explore.explore")}
                    </span>
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
