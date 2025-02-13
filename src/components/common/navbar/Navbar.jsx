import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Heart,
} from "lucide-react";
import SearchIcon from "../../../assets/navbar/SearchIcon_2.svg";
import EnglandFlag from "../../../assets/navbar/EnglandFlag.svg";
import WhiteLogo from "../../../assets/footer/whitelogo.png";

const headerText = [
  { text: "Explore", icon: <Globe className="h-5 w-5" />, url: "/explore" },
  { text: "Offers", icon: <BookOpen className="h-5 w-5" />, url: "/offers" },
  {
    text: "Destinations",
    icon: <MapPin className="h-5 w-5" />,
    url: "/destinations",
  },
  { text: "Contact", icon: <Package className="h-5 w-5" />, url: "/contact" },
  { text: "Home2", icon: <Globe className="h-5 w-5" />, url: "/Home2" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState(false);

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (url) => {
    navigate(url);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Track scroll position
  useEffect(() => {
    const onNavScroll = () => {
      setNavState(window.scrollY > 180);
    };

    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-50 bg-darkBlue shadow-lg  top-0 left-0 transition-all duration-300 ${
        navState ? "fixed " : "relative"
      } ${isHomePage ? "bg-opacity-70" : "bg-opacity-80"}`}
    >
      <div className="h-[57px] flex justify-center items-center bg-opacity-80 ">
        {/* header links */}
        <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-medium text-lg text-white px-2 md:px-4">
          <div className="flex flex-row items-center space-x-12">
            <img
              src={WhiteLogo}
              alt="Efly Logo"
              className="w-24 h-14 cursor-pointer bg-opacity-100 "
              onClick={() => handleNavigation("/")}
            />
            <div className="hidden lg:flex space-x-8">
              {headerText.map((item, index) => (
                <span
                  key={index}
                  className=" cursor-pointer hover:text-orange font-normal"
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
            </button>
            <button
              className="focus:outline-none"
              onClick={() => handleNavigation("/watchlist")}
            >
              <Heart className="h-6 w-6" />
            </button>
            <div className="flex flex-row space-x-2 items-center">
              <img
                src={EnglandFlag}
                alt="England Flag"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-lg font-normal">EN</span>
            </div>
            <button
              className="flex flex-row space-x-2 items-center focus:outline-none"
              onClick={() => handleNavigation("/login")}
            >
              <CircleUserRound className="h-6 w-6 font-normal" />
              <span className="text-lg font-normal">Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ">
            <button
              ref={buttonRef} // Attach ref to button
              onClick={toggleMenu}
              className="p-2 focus:outline-none "
            >
              {isOpen ? (
                <X className="h-6 w-6 hover:cursor-pointer" />
              ) : (
                <div className="flex flex-row space-x-4 items-center text-sm ">
                  <div
                    className="focus:outline-none items-center cursor-pointer"
                    onClick={() => handleNavigation("/watchlist")}
                  >
                    <Heart className="h-4 w-4" />
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <img
                      src={EnglandFlag}
                      alt="England Flag"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span className="font-normal">EN</span>
                  </div>
                  <div
                    className="flex flex-row space-x-2 items-center focus:outline-none font-normal"
                    onClick={() => handleNavigation("/login")}
                  >
                    <CircleUserRound className="h-4 w-4" />
                    <span className="font-normal">Login</span>
                  </div>
                  <Menu className="h-4 w-4 hover:cursor-pointer" />
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
            <div className="font-normal">Search</div>
            <div className="opacity-50 font-normal">
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
