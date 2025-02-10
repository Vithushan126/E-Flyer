import React, { useState } from 'react';
import SRVLogo from "../../../assets/footer/logo-4.png";
import Image2 from "../../../assets/footer/logo-2.png";
import Image4 from "../../../assets/footer/logo-3.png";
import Visa from "../../../assets/footer/paymentmethod/Visa.png";
import Master from "../../../assets/footer/paymentmethod/Mastercard.png";
import Amex from "../../../assets/footer/paymentmethod/Amex.png";
import Paypal from "../../../assets/footer/paymentmethod/PayPal.png";
import Googlepay from "../../../assets/footer/paymentmethod/Googlepay.png";
import Applepay from "../../../assets/footer/paymentmethod/ApplePay.png";
import WhiteLogo from "../../../assets/footer/whitelogo.png";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";


const Footer = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const paymentMethods = [
    { src: Visa, alt: "Visa" },
    { src: Master, alt: "MasterCard" },
    { src: Amex, alt: "Amex" },
    { src: Paypal, alt: "PayPal" },
    { src: Googlepay, alt: "Google Pay" },
    { src: Applepay, alt: "Apple Pay" },
  ];

  const languages = ["EN", "FR", "GR", "IT"];

  return (
    <footer className="w-full bg-offWhite text-smokyGray py-10 mt-10 relative">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-evenly items-center mb-8 gap-4">
          <div
            className="w-[120px] h-[35px] sm:w-[140px] sm:h-[40px] md:w-[160px] md:h-[50px] lg:w-[174px] lg:h-[55px] bg-center bg-cover"
            style={{ backgroundImage: `url(${Image2})` }}
          ></div>
          <div
            className="w-[120px] h-[35px] sm:w-[140px] sm:h-[40px] md:w-[160px] md:h-[50px] lg:w-[174px] lg:h-[55px] bg-center bg-cover"
            style={{ backgroundImage: `url(${Image4})` }}
          ></div>
          <div
            className="w-[140px] h-[40px] sm:w-[160px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[191px] lg:h-[54px] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${SRVLogo})` }}
          ></div>
        </div>

        {/* Main Footer Content */}
        <div className="sm:flex grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-around">
          {/* Help Section */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-smokyGray">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  EDA Travel Instruction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  EDA Itineraries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Travel Medical Advice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Currency Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Travellers Section */}
          <div>
            <h3 className="font-medium text-base mb-4 text-smokyGray">
              Travellers
            </h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Baggage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Visa & Passport Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Health
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Travel Information
                </a>
              </li>
            </ul>
          </div>

          {/* Guide Section */}
          <div>
            <h3 className="font-medium text-base mb-4 text-smokyGray">Guide</h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Data Protection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Travel Information
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-medium text-base mb-4 text-smokyGray">
              About Us
            </h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Our People
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Our Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div
          className="bg-darkBlue absolute top-1/2 -right-6 transform -translate-y-1/2 w-[120px] h-[71px] bg-contain bg-no-repeat -rotate-90"
          style={{ backgroundImage: `url(${WhiteLogo})` }}
        ></div>

        {/* Footer Bottom Section */}
        <div className="relative mt-4 border-t border-lightGray pt-8 max-w-[1300px] mx-auto">
          <div className="sm:flex grid grid-cols-1 md:grid-cols-3  justify-between">
            {/* Subscription */}
            <div>
              <h3 className="font-medium text-base mb-4 text-smokyGray">
                Subscribe to our special offer
              </h3>
              <p className="text-lightGray font-medium text-sm mt-6 max-w-[320px] leading-relaxed">
                Save with our latest fares and offers.{" "}
                <a href="#" className="underline block">
                  Unsubscribe or change your preferences
                </a>
                .
              </p>
              <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-4 space-y-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 border border-lightGray w-[231px] h-8 sm:w-[auto]"
                />
                <button
                  type="submit"
                  className="bg-darkBlue text-white font-medium text-sm w-[132px] h-8 hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-lightGray font-medium text-sm mt-6 whitespace-pre-line">
                For details on how we use your information, <br /> please see
                our{" "}
                <a href="#" className="underline">
                  privacy policy
                </a>
                .
              </p>
            </div>

            {/* Payment & Language */}
            <div className="flex flex-col space-y-4 text-center md:text-start">
              {/* Payment Section */}
              <div>
                <h3 className="font-medium text-base mb-4 text-smokyGray">
                  Payment Method
                </h3>
                <div className="flex justify-center flex-wrap gap-3 md:justify-start">
                  {paymentMethods.map((method, index) => (
                    <img
                      key={index}
                      src={method.src}
                      alt={method.alt}
                      className={`h-6 w-8 md:h-8 md:w-11 object-contain cursor-pointer ${selectedPayment === index ? "ring-2 ring-darkBlue rounded" : ""
                        }`}
                      onClick={() => setSelectedPayment(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Language Section */}
              <div>
                <h3 className="font-medium text-base mb-4 mt-8 text-smokyGray">
                  Select Language
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className={`px-2 py-1 h-9 w-12 border rounded-xl ${selectedLanguage === lang ? "bg-darkBlue text-white" : ""
                        } hover:bg-darkBlue hover:text-white`}
                      onClick={() => setSelectedLanguage(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col space-y-4 text-center md:text-start">
              <div>
                <h3 className="font-medium text-base mb-4 text-smokyGray ">
                  Contact
                </h3>
                <p className="text-lightGray font-medium text-sm mt-2 leading-relaxed">
                  Langstrasse 214, 8005 Zurich
                </p>
                <p>
                  <a
                    href="mailto:info@efly.ch"
                    className="text-lightGray font-medium text-sm mt-2 leading-relaxed hover:underline"
                  >
                    info@efly.ch
                  </a>
                </p>
                <p className="text-lightGray font-medium text-sm mt-2 leading-relaxed">
                  +41 44 668 0606
                </p>
                <div className="relative mt-8">
                  {/* Social Media Title */}
                  <h3 className="font-medium text-base mb-4 text-smokyGray">
                    Social Media
                  </h3>

                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-6 md:justify-start">
                    <a href="#" className="text-socialmedia ">
                      <SlSocialFacebook size={20} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <FaXTwitter size={20} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <RiYoutubeLine size={26} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <SlSocialInstagram size={20} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <PiTiktokLogoBold size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-4 border-t border-lightGray pt-8 max-w-[1300px] mx-auto">
          <div className="flex justify-center gap-4 font-medium text-sm space-x-2 mt-2 sm:flex-nowrap">
            <a href="#" className="text-lightGray hover:underline">
              Accessibility statement
            </a>
            <a href="/contact" className="text-lightGray hover:underline">
              Contact us
            </a>
            <a href="#" className="text-lightGray hover:underline">
              Privacy policy
            </a>
            <a href="#" className="text-lightGray hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="text-lightGray hover:underline">
              Cookie Policy
            </a>
          </div>
          <p
            className="text-darkcolor mt-4 text-center font-medium text-sm"
            aria-hidden="true"
          >
            &copy; {new Date().getFullYear()} The EFly Travels. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
