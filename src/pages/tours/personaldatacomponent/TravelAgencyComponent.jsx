import React, { useState } from 'react';

const TravelAgencyForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHours = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full mx-auto p-6 bg-white rounded-3xl border border-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Your Responsible Travel Agency</h2>
      </div>

      <div className="mt-6">
        <p className="font-medium">EFly internet travel shop</p>
        <p className="text-gray-500">insurance package for</p>
      </div>

      <div className="mt-6">
        <p className="font-medium">Opening Hours</p>
          <div className="mt-2 space-y-2">
            <p className='hover:text-green-600'>Open Now</p>
            <p className='hover:text-green-600'>Close at 18:00</p>
            <p className='hover:text-green-600'>Open on Friday 09:00 - 18:00</p>
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