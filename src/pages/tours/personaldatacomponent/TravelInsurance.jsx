import React, { useState } from 'react';
import { Dot } from 'lucide-react';

const TravelInsuranceForm = () => {
  const [firstTravelerSelected, setFirstTravelerSelected] = useState(false);
  const [secondTravelerSelected, setSecondTravelerSelected] = useState(false);

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-border font-inter">
      <h2 className="text-base font-normal mb-8">Travel Insurance</h2>

      <div className='ml-6'>
        <p className="text-sm text-black">Safely go on holiday with EFly.</p>

        <div className="mt-6">
          <p className="text-smokyGray text-sm font-light">Book our <a href="#" className="underline">combined travel insurance package</a> now with the following benefits:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-smokyGray text-sm font-light">cancellation insurance</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-smokyGray text-sm font-light">SOS protection including repatriation</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-smokyGray text-sm font-light">24-hour helpline</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-smokyGray text-sm font-light">mobile phone and credit card blocking service</span>
            </li>
            <li className="flex items-center gap-2">
              <Dot className="w-5 h-5 text-black" />
              <span className="text-smokyGray text-sm font-light">Advance payment for hospital stays abroad up to CHF 5,000</span>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-black text-sm">1st traveler</p>
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              checked={firstTravelerSelected}
              onChange={() => setFirstTravelerSelected(!firstTravelerSelected)}
              className="w-5 h-5 text-green-500 border-border rounded"
            />
            <span className="text-smokyGray text-sm font-light">Yes, I would like the combined travel insurance package for LKR 10000</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-black text-sm">2nd traveler</p>
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              checked={secondTravelerSelected}
              onChange={() => setSecondTravelerSelected(!secondTravelerSelected)}
              className="w-5 h-5 text-green-500 border-border rounded"
            />
            <span className="text-smokyGray text-sm font-light">Yes, I would like the combined travel insurance package for LKR 10000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsuranceForm;