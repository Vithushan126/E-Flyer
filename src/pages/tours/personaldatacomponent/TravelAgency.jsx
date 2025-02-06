import React, { useState } from 'react';

const TravelAgencyForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHours = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full mx-auto p-6 bg-white rounded-3xl border border-border">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-normal mb-6">Your Responsible Travel Agency</h2>
      </div>

      <div className="mt-6 ml-6">
        <p className="text-sm text-black">EFly internet travel shop</p>
        <p className="text-smokyGray text-sm font-light">insurance package for</p>
      </div>

      <div className="mt-6 ml-6">
        <p className="ftext-sm text-black">Opening Hours</p>
          <div className="mt-2 space-y-2 text-smokyGray text-sm font-light">
            <p className='hover:text-green'>Open Now</p>
            <p className='hover:text-green'>Close at 18:00</p>
            <p className='hover:text-green'>Open on Friday 09:00 - 18:00</p>
          </div>
      </div>
      <div
          className="text-blue-500 hover:underline focus:outline-none flex justify-end"
          onClick={toggleOpenHours}
        >
          {isOpen ? 'Close' : 'Change'} ›
        </div>
    </div>
  );
};

export default TravelAgencyForm;