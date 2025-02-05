import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

const ContactDetailsComponent = () => {
  const [gender, setGender] = useState('Male');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [location, setLocation] = useState('');
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

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        {/* Gender */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <div
              className="border border-gray-300 rounded-2xl p-4 cursor-pointer"
              onClick={() => setGender(gender === 'Male' ? 'Female' : 'Male')}
            >
              <p className="text-xs text-gray-500">Gender</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500">{gender}</p>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="border border-gray-300 rounded-2xl p-4">
            <p className="text-xs text-gray-500">First Name</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="First name"
            />
          </div>
          <div className="border border-gray-300 rounded-2xl p-4">
            <p className="text-xs text-gray-500">Last Name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* Street Number */}
          <div className="border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Street Number</label>
            <input
              type="text"
              value={streetNumber}
              onChange={(e) => setStreetNumber(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="Street number"
            />
          </div>

          {/* Country */}
          <div className="relative border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Country</label>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleCountryDropdown}
            >
              <span className="text-gray-500">{country}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            {showCountryDropdown && (
              <div className="absolute bg-white border border-gray-300 rounded-2xl shadow-lg z-10 w-full mt-1">
                {['USA', 'SriLanka', 'UK'].map((countryName) => (
                  <div
                    key={countryName}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCountrySelect(countryName)}
                    placeholder="Country"
                  >
                    {countryName}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* Postal Code */}
          <div className="border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Postal Code</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="Postal code"
            />
          </div>

          {/* location */}
          <div className="relative border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Location</label>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-gray-500 mr-2" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-gray-500 focus:outline-none"
                placeholder="Location"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* Email */}
          <div className="border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="Email"
            />
          </div>

          {/* Phone Number */}
          <div className="relative border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* Emergency Phone Number */}
          <div className="border border-gray-300 rounded-2xl p-4">
            <label className="text-xs text-gray-500 mb-1">Phone Number (For emergency)</label>
            <input
              type="tel"
              value={emergencyPhoneNumber}
              onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
              className="w-full text-gray-500 focus:outline-none"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 text-gray-500 text-sm">
        After booking you will immediately receive an email confirmation.
      </div>
    </div>
  );
};

export default ContactDetailsComponent;
