import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import img1 from "../../assets/adventure/HotelImage1.svg";
import img2 from "../../assets/adventure/HotelImage2.svg";
import img3 from "../../assets/adventure/HotelImage3.svg";
import img4 from "../../assets/adventure/HotelImage4.svg";
import img5 from "../../assets/adventure/HotelImage5.svg";
import img6 from "../../assets/explore/img_2.png";
import img7 from "../../assets/explore/img_3.png";
import img8 from "../../assets/explore/img_4.jpg";
import img9 from "../../assets/explore/img_5.jpg";
import img10 from "../../assets/explore/img_6.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const rotateRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full relative">
      {/* Left Arrow Navigation */}
      <button
        onClick={rotateLeft}
        className="absolute top-1/2 left-1 sm:left-4 md:left-8 lg:left-10 transform -translate-y-1/2 bg-gradient-to-br from-gray to-gray-200 p-4 sm:p-6 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-20"
      >
        <SlArrowLeft
          size={40}
          className="text-white transition-transform duration-300 hover:rotate-[-15deg]"
        />
      </button>

      {/* Right Arrow Navigation */}
      <button
        onClick={rotateRight}
        className="absolute top-1/2 right-2 sm:right-4 md:right-8 lg:right-10 transform -translate-y-1/2 bg-gradient-to-br from-gray to-gray-200 p-4 sm:p-6 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-20"
      >
        <SlArrowRight
          size={40}
          className="text-white transition-transform duration-300 hover:rotate-[15deg]"
        />
      </button>

      {/* Image Section */}
      <div className="w-full h-full overflow-hidden rounded-3xl">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>

        {/* Page Counter */}
        <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm px-4 py-1 rounded-lg">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} Page of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
