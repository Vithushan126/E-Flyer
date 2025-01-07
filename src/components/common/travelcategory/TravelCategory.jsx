import React from "react";
import soloImage from "../../../assets/travelcategory/image-1.png";
import familyImage from "../../../assets/travelcategory/image-2.png";
import couplesImage from "../../../assets/travelcategory/image-3.png";
import seniorsImage from "../../../assets/travelcategory/image-4.png";
import youngAdultsImage from "../../../assets/travelcategory/image-5.png";

const categories = [
  { id: 1, title: "Solo", image: soloImage },
  { id: 2, title: "Family", image: familyImage },
  { id: 3, title: "Couples", image: couplesImage },
  { id: 4, title: "Seniors", image: seniorsImage },
  { id: 5, title: "Young Adults", image: youngAdultsImage },
];

function TravelCategory() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="max-w-[1100px] w-full flex flex-col space-y-6">
        <h1 className="text-3xl font-medium text-left text-gray-800 mb-8">
          The Best Tour and Adventure For Everyone
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category?.id}
              className={`relative group rounded-lg overflow-hidden bg-gray-200 shadow-md ${
                index === 0
                  ? "col-span-1 sm:col-span-2 md:col-span-1 row-span-2"
                  : "col-span-1 sm:col-span-1 md:col-span-1"
              }`}
            >
              <img
                src={category?.image}
                alt={category?.title}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-105"
              />
              {/* Always visible title on mobile */}
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out block md:hidden"
              >
                {category?.title}
              </div>
              {/* Visible title on hover for larger screens */}
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hidden md:block"
              >
                {category?.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelCategory;
