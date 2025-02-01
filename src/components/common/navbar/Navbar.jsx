import React, { useState, useEffect, useRef } from "react";
import EflyLogo from "../../../assets/navbar/EflyLogo.svg";
import SearchIcon from "../../../assets/navbar/SearchIcon_2.svg";
import EnglandFlag from "../../../assets/navbar/EnglandFlag.svg";
import {
  BookOpen,
  ChevronRight,
  Globe,
  MapPin,
  Menu,
  Package,
  Search,
  X,
  CircleUserRound,
  Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const headerText = [
  { text: "Explore", icon: <Globe className="h-5 w-5" />, url: "/explore" },
  { text: "Offers", icon: <BookOpen className="h-5 w-5" />, url: "/offers" },
  {
    text: "Destinations",
    icon: <MapPin className="h-5 w-5" />,
    url: "/destinations",
  },
  { text: "Packages", icon: <Package className="h-5 w-5" />, url: "/packages" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the dropdown menu
  const buttonRef = useRef(null); // Ref for the menu toggle button

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (url) => {
    navigate(url);
    setIsOpen(false);
  };
  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative z-50 ">
       <div className="h-[67px] flex justify-center items-center  bg-darkBlue bg-opacity-80 shadow-lg">
     {/*  <div className="h-[67px] flex justify-center items-center  bg-white  bg-opacity-30 shadow-lg"> */}
        {/* header links */}
        {/* <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-semibold text-lg text-darkBlue px-2 md:px-4"> */}
        <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-medium text-lg text-white px-2 md:px-4">
          <div className="flex flex-row items-center space-x-12">
            <img
              src={EflyLogo}
              alt="Efly Logo"
              className="cursor-pointer bg-opacity-100 "
              onClick={() => handleNavigation("/")}
            />
            <div className="hidden lg:flex space-x-8">
              {headerText.map((item, index) => (
                <span
                  key={index}
                  className=" cursor-pointer hover:text-orange"
                  onClick={() => handleNavigation(item?.url)}
                >
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex space-x-8 items-center ml-8">
            <button className="focus:outline-none">
            <img src={SearchIcon} alt="Search" className="h-9 w-9" />
              {/* <img src={SearchIcon} alt="Search" className="h-6 w-6" /> */}
            </button>
            <button className="focus:outline-none"
            onClick={() => handleNavigation("/watchlist")}>
            <Heart className="h-6 w-6" />
            </button>
            <div className="flex flex-row space-x-2 items-center">
              <img
                src={EnglandFlag}
                alt="England Flag"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-lg">EN</span>
            </div>
            <button
              className="flex flex-row space-x-2 items-center focus:outline-none"
              onClick={() => handleNavigation("/login")}
            >
              {/* <img src={UserCircleIcon} alt="User " className="h-6 w-6" /> */}
              <CircleUserRound className="h-6 w-6" />
              <span className="text-lg">Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              ref={buttonRef} // Attach ref to button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 hover:cursor-pointer" />
              ) : (
                <div className="flex flex-row space-x-4 items-center  ">
                  <div className="flex flex-row space-x-2 items-center">
                    <img
                      src={EnglandFlag}
                      alt="England Flag"
                      className="w-5 h-5 rounded-full object-cover" 
                    />
                    <span className="">EN</span>
                  </div>
                  {/* Replace the inner button with a div */}
                  <div
                    className="flex flex-row space-x-2 items-center focus:outline-none"
                    onClick={() => handleNavigation("/login")}
                  >
                    <CircleUserRound className="h-6 w-6" />
                    <span className="">Login</span>
                  </div>
                  <Menu className="h-6 w-6 hover:cursor-pointer" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          ref={menuRef} // Attach ref to dropdown menu
          className="lg:hidden bg-white bg-opacity-95 shadow-lg p-1 md:px-4 "
        >
          <div className="flex flex-row justify-between py-2">
            <div className="">Search</div>
            <div className="opacity-50">
              <Search />
            </div>
          </div>
          <div className="border-t border-gray opacity-10"></div>
          <div className="py-2 space-y-2">
            {headerText.map((item, index) => (
              <div
                key={index}
                className="block text-darkBlue hover:text-primaryColor cursor-pointer py-2 text-lg font-semibold"
                onClick={() => handleNavigation(item?.url)}
              >
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-row items-center space-x-2">
                    <div className="opacity-50">{item.icon}</div>
                    <div className="">{item.text}</div>
                  </div>
                  <div className="opacity-50">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
