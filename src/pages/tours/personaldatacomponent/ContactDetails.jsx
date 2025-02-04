import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';

const ContactDetailsComponent = () => {
  const [gender, setGender] = useState('Male');
  const [firstName, setFirstName] = useState('Pearlinee');
  const [lastName, setLastName] = useState('Baskaran');
  const [postalCode, setPostalCode] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [country, setCountry] = useState('Select here');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
  };

  const handleCountrySelect = (countryName) => {
    setCountry(countryName);
    setShowCountryDropdown(false);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-gray-300">
      <h2 className="text-xl font-medium mb-8">Contact Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gender */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Gender</label>
          <div
            className="border border-gray-300 rounded-2xl p-3 flex justify-between items-center cursor-pointer"
            onClick={() => setGender(gender === 'Male' ? 'Female' : 'Male')}
          >
            <span className="text-gray-500">{gender}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* First Name */}
        <div>
          <label className="text-xs text-gray-500 mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Postal Code</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Emergency Phone Number */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Phone number (For emergency)</label>
          <input
            type="tel"
            value={emergencyPhoneNumber}
            onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Street Number */}
        <div>
          <label className="text-xs text-gray-500 mb-1">Street Number</label>
          <input
            type="text"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            className="border border-gray-300 rounded-2xl p-3 w-full text-gray-500 focus:outline-none"
          />
        </div>

        {/* Country */}
        <div className="relative">
          <label className="text-xs text-gray-500 mb-1">Country</label>
          <div
            className="border border-gray-300 rounded-2xl p-3 flex justify-between items-center cursor-pointer"
            onClick={toggleCountryDropdown}
          >
            <span className="text-gray-500">{country}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          {showCountryDropdown && (
            <div className="absolute bg-white border border-gray-300 rounded-2xl shadow-lg z-10 w-full">
              <div
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountrySelect('USA')}
              >
                USA
              </div>
              <div
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountrySelect('Canada')}
              >
                Canada
              </div>
              <div
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCountrySelect('UK')}
              >
                UK
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-gray-500 text-sm">
        After booking you will immediately receive an email confirmation.
      </div>
    </div>
  );
};

export default ContactDetailsComponent;