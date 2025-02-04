import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import ContactDetails from './ContactDetails';
import TravelInsuranceForm from './TravelInsuranceComponent';
import TravelAgencyForm from './TravelAgencyComponent';
import CheckListForm from './CheckListComponent';
import TravelSummary from './TravelSummary';

const PersonalDataComponent = () => {
  const [travelers, setTravelers] = useState([
    {
      id: 1,
      type: 'Adult',
      gender: 'Male',
      firstName: 'Pearlinee',
      lastName: 'Baskaran',
      dateOfBirth: '',
      nationality: ''
    },
    {
      id: 2,
      type: 'Adult',
      gender: 'Male',
      firstName: 'Pearlinee',
      lastName: 'Baskaran',
      dateOfBirth: '',
      nationality: ''
    }
  ]);

  const [genderDropdown, setGenderDropdown] = useState({ 1: false, 2: false });
  const [nationalityDropdown, setNationalityDropdown] = useState({ 1: false, 2: false });

  const handleInputChange = (id, field, value) => {
    setTravelers(travelers.map(traveler =>
      traveler.id === id ? { ...traveler, [field]: value } : traveler
    ));
  };

  const toggleDropdown = (id, type) => {
    if (type === 'gender') {
      setGenderDropdown({ ...genderDropdown, [id]: !genderDropdown[id] });
    } else {
      setNationalityDropdown({ ...nationalityDropdown, [id]: !nationalityDropdown[id] });
    }
  };

  const renderTraveler = (traveler) => (
    <div key={traveler.id} className="mt-8">
      <h3 className="text-sm mb-4">{traveler.id} st Traveler : {traveler.type}</h3>

      {/* Gender Dropdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative">
          <div
            className="border border-gray-300 rounded-2xl p-4 cursor-pointer"
            onClick={() => toggleDropdown(traveler.id, 'gender')}
          >
            <p className="text-xs text-gray-500">Gender</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">{traveler.gender}</p>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          {genderDropdown[traveler.id] && (
            <div className="absolute w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-10">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleInputChange(traveler.id, 'gender', 'Male');
                  toggleDropdown(traveler.id, 'gender');
                }}
              >
                Male
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleInputChange(traveler.id, 'gender', 'Female');
                  toggleDropdown(traveler.id, 'gender');
                }}
              >
                Female
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="border border-gray-300 rounded-2xl p-4">
          <p className="text-xs text-gray-500">First Name</p>
          <input
            type="text"
            value={traveler.firstName}
            onChange={(e) => handleInputChange(traveler.id, 'firstName', e.target.value)}
            className="w-full text-gray-500 focus:outline-none"
          />
        </div>
        <div className="border border-gray-300 rounded-2xl p-4">
          <p className="text-xs text-gray-500">Last Name</p>
          <input
            type="text"
            value={traveler.lastName}
            onChange={(e) => handleInputChange(traveler.id, 'lastName', e.target.value)}
            className="w-full text-gray-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Date of Birth and Nationality */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="border border-gray-300 rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Date of Birth</p>
              <input
                type="text"
                placeholder="DD/MM/YYY"
                value={traveler.dateOfBirth}
                onChange={(e) => handleInputChange(traveler.id, 'dateOfBirth', e.target.value)}
                className="w-full text-gray-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="border border-gray-300 rounded-2xl p-4 cursor-pointer"
            onClick={() => toggleDropdown(traveler.id, 'nationality')}
          >
            <p className="text-xs text-gray-500">Nationality</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">{traveler.nationality || 'Select here'}</p>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          {nationalityDropdown[traveler.id] && (
            <div className="absolute w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-10">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleInputChange(traveler.id, 'nationality', 'SL');
                  toggleDropdown(traveler.id, 'nationality');
                }}
              >
                SL
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleInputChange(traveler.id, 'nationality', 'Other');
                  toggleDropdown(traveler.id, 'nationality');
                }}
              >
                Other
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row w-full p-4 space-y-4 md:space-y-0 md:space-x-4">
      {/* Left side */}
      <div className="flex flex-col space-y-4 w-full md:w-2/3">
        <div className="w-full mx-auto mb-4 p-6 border border-gray-300 rounded-2xl">
          <p className="text-sm font-normal text-black mb-2">
            The names of the participants must match the information in the passport/ID!
          </p>
          <p className="text-xs font-light text-black">
            Please ensure that the spelling is correct - subsequent corrections will incur costs
          </p>
        </div>
        {/* traveler */}
        <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-gray-300">
          <h2 className="text-base">Travel Participants</h2>
          {travelers.map(renderTraveler)}
        </div>
        <div >
          <ContactDetails/>
        </div>
        <div>
          <TravelInsuranceForm/>
        </div>
        <div>
          <TravelAgencyForm/>
        </div>
        <div>
          <CheckListForm/>
        </div>
      </div>

      {/* Right side */}
      <div>
        <TravelSummary/>
      </div>
    </div>
  );
};

export default PersonalDataComponent
