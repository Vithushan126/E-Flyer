import React from "react";
import EflyLogo from "../../../assets/navbar/EflyLogo.svg";
import SearchIcon from "../../../assets/navbar/SearchIcon.svg";
import UserCircleIcon from "../../../assets/navbar/UserCircleIcon.svg";
import EnglandFlag from "../../../assets/navbar/EnglandFlag.svg";

const headerText = ["Explore", "Book", "Destinations", "Packages"];

const Navbar = () => {
  return (
    <div className="w-full h-[67px] flex justify-center items-center absolute z-50  bg-white  bg-opacity-30 shadow-lg">
      <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-semibold text-xl text-darkBlue ">
        <div className="flex flex-row items-center space-x-12">
          <img src={EflyLogo} alt="Efly Logo" className="cursor-pointer" />
          <div className="flex space-x-8">
            {headerText.map((text, index) => (
              <span
                key={index}
                className=" cursor-pointer hover:text-primaryColor"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-8 items-center">
          <button className="focus:outline-none">
            <img src={SearchIcon} alt="Search" className="h-6 w-6" />
          </button>
          <div className="flex flex-row space-x-2 items-center">
            <img
              src={EnglandFlag}
              alt="England Flag"
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="">EN</span>
          </div>
          <button className="flex flex-row space-x-2 items-center focus:outline-none">
            <img src={UserCircleIcon} alt="User " className="h-6 w-6" />
            <span className="">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
