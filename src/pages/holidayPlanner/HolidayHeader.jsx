import React from 'react';

const HolidayHeader = () => {
  return (
    <header className="w-full justify-center mt-10 ">
        <h1 className="relative text-white text-lg  md:text-2xl lg:text-3xl font-medium uppercase tracking-[0.54em] lg:tracking-[0.74em] md:tracking-[0.74em] text-center left-1/2 transform -translate-x-1/2 mb-4">
          Plan Your Holiday
        </h1>

        
        <p className="relative text-white text-sm md:text-base lg:text-lg font-light text-center capitalize left-1/2 transform -translate-x-1/2 ">
          Find your perfect holiday match with ease. Let yourself be inspired.
        </p>
      </header>
  );
};

export default HolidayHeader;
