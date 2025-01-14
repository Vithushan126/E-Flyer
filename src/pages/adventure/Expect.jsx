import React from "react";

const Expect = ({ title, data }) => {
  const CardOverlay = () => (
    <div className="absolute inset-0 py-32">
      {/* Container for center content */}
      <div className="h-full w-full flex flex-col justify-center items-center relative">
        {/* Text content */}
        <div className="relative z-10  bg-black bg-opacity-50 p-4 ">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Activities For All Ages
          </h3>
          <p className="text-sm text-white ">
            With tours designed to immerse yourself into your very own Disney
            movie, action-packed activities to satisfy the toughest of critics,
            and outdoor adventure playgrounds to excite even the most sedentary
            of kids, family tours feature an array of excursions the whole
            family will love.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-darkBlue w-full h-auto lg:h-[531px] flex flex-col items-center">
      <div className="max-w-[1100px] flex items-start w-full p-2 md:p-4 py-0 lg:p-0 lg:py-4">
        <h2 className="text-4xl font-semibold text-white text-left">{title}</h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[calc(100%-64px)]">
        {data.map((imageUrl, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden group"
          >
            <img
              src={imageUrl}
              alt="expect"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <CardOverlay />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expect;
