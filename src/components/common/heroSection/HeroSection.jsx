import React, { useState, useEffect } from "react";
import backgroundImage from "../../../assets/heroSection/HomeImage.jpeg";
import WhiteLogo from "../../../assets/footer/whitelogo.png";
import ButtonCom from "../../ui/button/ButtonCom";
import SearchForm from "../../../pages/home/searchform/SearchForm";
import image1 from "../../../assets/heroSection/img1.jpg";
import image2 from "../../../assets/heroSection/img2.jpg";
import image3 from "../../../assets/heroSection/img3.jpg";
import image4 from "../../../assets/heroSection/img4.jpg";
import image5 from "../../../assets/heroSection/img5.jpg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("March 1, 2025 12:00:00");
    const now = new Date();
    const difference = targetDate - now;
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // const images = [image1, image2, image3, image4, image5];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [fade, setFade] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(true);
  //     setTimeout(() => {
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       setFade(false);
  //     }, 500);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full  h-screen flex justify-center">
        {/* Static overlay image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={backgroundImage}
            alt="Mountains"
            className="w-full h-full object-fill"
          />
          {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentImageIndex
                  ? "opacity-100 z-10"
                  : "opacity-60 z-0"
              }`}
            />
          ))} */}
        </div>
        <div className="absolute inset-0 bg-[#222222] bg-opacity-30"></div>
        <div className="px-2 w-full items-center flex justify-center pb-36">
          <SearchForm />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Countdown and Offer Banner - Desktop */}
        {/*  <div className="absolute w-full h-[48px] bg-orange -bottom-12 flex justify-center items-center">
          <p className="text-white text-center text-base">EFLY | The Best Travel Guide</p>
        </div> */}
        {/* Offer Section Inside Hero */}
        <div className="absolute bottom-0 w-full h-24 bg-darkBlue bg-opacity-85 ">
          <OfferSectionContent
            timeLeft={timeLeft}
            className="max-w-[1100px] flex flex-row mx-auto space-x-44 space-y-8 px-4 md:px-8 lg:px-16  flex-wrap items-center justify-between md:space-y-0 py-6"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative">
        {/* Background container with image and overlay */}
        {/* <div className="absolute inset-0 z-0"> */}
        {/* <img
            src={backgroundImage}
            alt="Mountains"
            className="w-full h-full object-cover"
          /> */}
        {/* <img
            src={images[currentImageIndex]}
            alt={`Background ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          /> */}
        {/* <div className="absolute inset-0 bg-darkBlue bg-opacity-85"></div> */}
        {/* </div> */}
        {/* Offer Section Container */}
        <div className="relative z-10 px-4 flex-col block items-center justify-center space-y-4 py-6 -mt-20 mb-0">
          <OfferSectionContent timeLeft={timeLeft} />
        </div>
        {/* Countdown and Offer Banner - Mobile */}
        {/* <div className="relative z-10 w-full h-[48px] bg-orange flex justify-center items-center">
          <p className="text-white text-center text-base">EFLY | The Best Travel Guide</p>
        </div> */}
      </div>
    </>
  );
};

const OfferSectionContent = ({ timeLeft }) => (
  <div className="max-w-[1100px] lg:flex lg:flex-row mx-auto lg:space-x-44">
    {/* Logo Section */}
    <div
      className="hidden md:flex w-[80px] h-[40px] md:w-[120px] md:h-[71px] bg-no-repeat mt-4"
      style={{ backgroundImage: `url(${WhiteLogo})` }}
    ></div>

    {/* Center Content */}
    <div className="w-full md:w-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center text-base space-y-4 md:space-y-0 space-x-0 md:space-x-4 lg:space-x-12">
      {/* Timer */}
      <div className="flex flex-col items-center md:items-end w-full md:w-auto px-2 md:px-0 mb-0 md:mb-0">
        <h1 className="text-orange lg:text-sm uppercase">Offer ends soon</h1>
        <div className="text-white lg:text-lg md:text-xl font-semibold uppercase">
          {`${timeLeft.days}D : ${timeLeft.hours}H : ${timeLeft.minutes}M : ${timeLeft.seconds}S`}
        </div>
      </div>

      {/* Offer Box */}
      <div className="bg-red text-white p-2 md:p-4 rounded-xl ">
        <div className="text-2xl md:text-xl font-semibold flex flex-wrap items-center justify-center md:ml-0 w-auto my-4 md:my-0 mr-2 md:mr-0">
          30% OFF
        </div>
        {/* <div className="text-xs">OFF</div> */}
      </div>

      {/* Destination Information */}
      <div className="w-full md:w-auto flex flex-col text-base items-center md:items-start px-2 md:px-0 -mt-10 md:mt-0">
        <h1 className="text-orange lg:text-sm uppercase">March 2025</h1>
        <p className="text-white lg:text-lg md:text-xl font-semibold uppercase">
          Sri Lanka
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex flex-col items-center w-full md:w-auto px-2 md:px-0 mt-4 md:mt-4">
      <ButtonCom className="bg-orange px-4 md:px-8 py-2 md:h-[47px] text-white hover:bg-orange transition-colors rounded-xl text-base md:text-xl hover:scale-105">
        Claim Offer
      </ButtonCom>
      {/* T&C */}
      <p className="text-xs text-white  font-extralight  mt-1">T&C Apply</p>
    </div>
  </div>
);

export default HeroSection;
