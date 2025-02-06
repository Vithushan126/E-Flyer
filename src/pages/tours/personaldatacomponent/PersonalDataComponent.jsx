import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import ContactDetails from './ContactDetails';
import TravelInsuranceForm from './TravelInsurance';
import TravelAgencyForm from './TravelAgency';
import TravelSummary from './TravelSummary';

const PersonalDataComponent = ({ onNext }) => {

  const [termsChecked, setTermsChecked] = useState(false);
  const [documentsChecked, setDocumentsChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);


  const [travelers, setTravelers] = useState([
    {
      id: 1,
      type: 'Adult',
      gender: 'Male',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      nationality: ''
    },
    {
      id: 2,
      type: 'Adult',
      gender: 'Male',
      firstName: '',
      lastName: '',
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
            className="border border-border rounded-2xl p-4 cursor-pointer"
            onClick={() => toggleDropdown(traveler.id, 'gender')}
          >
            <p className="text-xs text-smokyGray font-light">Gender</p>
            <div className="flex justify-between items-center">
              <p className="text-smokyGray text-base">{traveler.gender}</p>
              <ChevronDown className="w-4 h-4 text-smokyGray" />
            </div>
          </div>
          {genderDropdown[traveler.id] && (
            <div className="absolute w-full bg-white border border-border rounded-lg mt-1 shadow-lg z-10">
              <div
                className="p-2 cursor-pointer"
                onClick={() => {
                  handleInputChange(traveler.id, 'gender', 'Male');
                  toggleDropdown(traveler.id, 'gender');
                }}
              >
                Male
              </div>
              <div
                className="p-2 cursor-pointer"
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
        <div className="border border-border rounded-2xl p-4">
          <p className="text-xs text-smokyGray font-light">First Name</p>
          <input
            type="text"
            value={traveler.firstName}
            onChange={(e) => handleInputChange(traveler.id, 'firstName', e.target.value)}
            className="w-full text-smokyGray text-base focus:outline-none"
            placeholder="First name"
          />
        </div>
        <div className="border border-border rounded-2xl p-4">
          <p className="text-xs text-smokyGray font-light">Last Name</p>
          <input
            type="text"
            value={traveler.lastName}
            onChange={(e) => handleInputChange(traveler.id, 'lastName', e.target.value)}
            className="w-full text-smokyGray text-base focus:outline-none"
            placeholder="Last name"
          />
        </div>
      </div>

      {/* Date of Birth and Nationality */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="border border-border rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-smokyGray" />
            <div className="flex-1">
              <p className="text-xs text-smokyGray font-light">Date of Birth</p>
              <input
                type="text"
                placeholder="DD/MM/YYY"
                value={traveler.dateOfBirth}
                onChange={(e) => handleInputChange(traveler.id, 'dateOfBirth', e.target.value)}
                className="w-full text-smokyGray text-base focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="border border-border rounded-2xl p-4 cursor-pointer"
            onClick={() => toggleDropdown(traveler.id, 'nationality')}
          >
            <p className="text-xs text-smokyGray font-light">Nationality</p>
            <div className="flex justify-between items-center">
              <p className="text-smokyGray text-base">{traveler.nationality || 'Select here'}</p>
              <ChevronDown className="w-4 h-4 text-smokyGray" />
            </div>
          </div>
          {nationalityDropdown[traveler.id] && (
            <div className="absolute w-full bg-white border border-border rounded-lg mt-1 shadow-lg z-10">
              <div
                className="p-2  cursor-pointer"
                onClick={() => {
                  handleInputChange(traveler.id, 'nationality', 'SL');
                  toggleDropdown(traveler.id, 'nationality');
                }}
              >
                SL
              </div>
              <div
                className="p-2 cursor-pointer"
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
    <div className="flex flex-col md:flex-row w-full max-w-[1100px] p-4 space-y-4 md:space-y-0 md:space-x-4 font-inter">
      {/* Left side */}
      <div className="flex flex-col space-y-4 w-full max-w-[615px] md:w-2/3">
        <div className="w-full mx-auto mb-4 p-6 border border-border rounded-3xl">
          <p className="text-sm font-normal text-black ml-6 mb-2">
            The names of the participants must match the information in the passport/ID!
          </p>
          <p className="text-xs font-light ml-6 text-black">
            Please ensure that the spelling is correct - subsequent corrections will incur costs
          </p>
        </div>
        {/* traveler */}
        <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-border">
          <h2 className="text-base font-normal">Travel Participants</h2>
          {travelers.map(renderTraveler)}
        </div>
        <div >
          <ContactDetails />
        </div>
        <div>
          <TravelInsuranceForm />
        </div>
        <div>
          <TravelAgencyForm />
        </div>
        <div>
          <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-border">
            <h2 className="text-base font-normal text-black mb-6">Check List</h2>
            <div className="flex ml-6 items-start gap-4 mb-4">
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
                className="w-11 h-11 text-darkBlue border-border rounded"
              />
              <div  className='text-sm font-light text-smokyGray'>
                <p>I have read <a href="#" className="underline"> MTCH AG's General Terms and Conditions</a> and <a href="#" className="underline"> Privacy Policy </a> as well as the important information! I have read and accept them for all participants. In particular, I agree to the processing of data that is particularly worthy of protection.</p>
              </div>
            </div>

            <div className="flex ml-6 items-start gap-3 mb-4">
              <input
                type="checkbox"
                checked={documentsChecked}
                onChange={() => setDocumentsChecked(!documentsChecked)}
                className="w-7 h-7 text-darkBlue border-border rounded"
              />
              <div  className='text-sm font-light text-smokyGray'>
                <p>I confirm that all participants will be in possession of the <a href="#" className="underline"> necessary travel documents (ID / passport / possibly visa) </a> for the chosen destination at the time of departure.</p>
              </div>
            </div>

            <div className="flex ml-6 items-start gap-3 mb-8">
              <input
                type="checkbox"
                checked={newsletterChecked}
                onChange={() => setNewsletterChecked(!newsletterChecked)}
                className="w-4 h-4 text-darkBlue border-border rounded "
              />
              <div  className='text-sm font-light text-smokyGray'>
                <p>I want to be informed about the latest holiday offers and subscribe to the free newsletter.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-4 flex justify-end">
            <button onClick={onNext} className="bg-darkBlue text-white rounded-3xl px-5 py-[35px] h-[57px] w-[330px] flex items-center justify-center text-2xl font-medium">
              For Payment
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div>
        <TravelSummary />
      </div>
    </div>
  );
};

export default PersonalDataComponent
