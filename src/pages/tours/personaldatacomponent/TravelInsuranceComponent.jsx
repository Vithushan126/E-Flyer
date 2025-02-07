import React, { useState } from 'react';
import { Dot } from 'lucide-react';

const TravelInsuranceForm = () => {
  const [firstTravelerSelected, setFirstTravelerSelected] = useState(false);
  const [secondTravelerSelected, setSecondTravelerSelected] = useState(false);

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-gray-300">
      <h2 className="text-xl font-medium mb-8">Travel Insurance</h2>

      <div>
        <p className="text-gray-500">Safely go on holiday with EFly.</p>

        <div className="mt-6">
          <p className="text-gray-500 font-medium">Book our combined travel insurance package now with the following benefits:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-gray-500">cancellation insurance</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-gray-500">SOS protection including repatriation</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-gray-500">24-hour helpline</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-gray-500">mobile phone and credit card blocking service</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-gray-500">Advance payment for hospital stays abroad up to CHF 5,000</span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-gray-500 font-medium">1st traveler</p>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={firstTravelerSelected}
              onChange={() => setFirstTravelerSelected(!firstTravelerSelected)}
              className="w-5 h-5 text-green-500 border-gray-300 rounded"
            />
            <span className="text-gray-500">Yes, I would like the combined travel insurance package for LKR 10000</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-500 font-medium">2nd traveler</p>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={secondTravelerSelected}
              onChange={() => setSecondTravelerSelected(!secondTravelerSelected)}
              className="w-5 h-5 text-green-500 border-gray-300 rounded"
            />
            <span className="text-gray-500">Yes, I would like the combined travel insurance package for LKR 10000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsuranceForm;