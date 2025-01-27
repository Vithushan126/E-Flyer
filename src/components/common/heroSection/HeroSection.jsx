import React, { useState, useEffect } from "react";
import bagroundImage from "../../../assets/heroSection/background.png";
import ButtonCom from "../../ui/button/ButtonCom";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate remaining time for the offer
  function calculateTimeLeft() {
    const targetDate = new Date("March 1, 2025 12:00:00"); // Offer end time
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className=" w-full h-screen flex justify-center   ">
      {/* Static overlay image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bagroundImage}
          alt="Mountains"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Dynamic background */}
      {/* <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}

      {/* Content overlay */}
      <div className="max-w-[1100px] flex flex-col lg:flex-row justify-start lg:justify-center  relative z-20  h-full w-full px-2 space-y-4">
        {/* <div className="container mx-auto px-6 pt-32"> */}
        {/* <div className="w-full lg:w-2/3 pt-0 lg:pt-20  ">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Your Next Adventure Starts Here
          </h1>
          <ButtonCom
            size="lg"
            className="hover:scale-105 px:6 py-4 lg:py-6 lg:px-8 text-lg lg:text-2xl"
          >
            Book Now
          </ButtonCom>
        </div> */}

        {/* Offer Card Section */}
        <div className="w-full lg:w-2/3 pt-0 lg:pt-20 flex justify-center lg:justify-end">
          <div className="bg-black bg-opacity-30 h-[240px] w-[281px] rounded-2xl p-4 text-white flex flex-col justify-center items-center">
            <div className=" text-2xl mb-4">OFFER ENDS SOON</div>
            {/* <div className="text-xl mb-2">
              {`- ${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
            </div> */}
            <div className="flex flex-row space-x-4 mb-4 gap-4">
              <div className="bg-red p-2 rounded-3xl flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-xs">OFF</div>
              </div>
              <div className="">
                <div className="">March 2025</div>
                <div className="text-xl font-bold">SRI LANKA</div>
                <div className="text-sm text-orange">5 Days</div>
              </div>
            </div>
            <div className="text-xl mb-2">
              {`- ${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
            </div>
            <ButtonCom className="bg-orange px-8 py-2 text-white hover:bg-orange-500 transition-colors rounded-3xl text-2xl hover:scale-105">
              Claim Offer
            </ButtonCom>
          </div>
        </div>

        {/* Booking Options */}
        {/* <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4 flex space-x-8">
              <div className="flex items-center space-x-2 text-blue-600 bg-orange-100 px-4 py-2 rounded">
                <span>Flight + Hotel</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Flight</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Hotel</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Cruise</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Tour</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Vacation Apartment</span>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
