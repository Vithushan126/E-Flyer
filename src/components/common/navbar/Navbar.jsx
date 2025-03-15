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
import WhiteLogo from "../../../assets/footer/whitelogo.png";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "EN", label: "English", countryCode: "gb", lang: "en" },
  { code: "FR", label: "French", countryCode: "fr", lang: "fr" },
  { code: "GE", label: "German", countryCode: "de", lang: "de" },
  { code: "IT", label: "Italian", countryCode: "it", lang: "it" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const { i18n, t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const headerText = [
    {
      text: t("navigation.explore"),
      icon: <Globe className="h-5 w-5" />,
      url: "/explore",
    },
    {
      text: t("navigation.offers"),
      icon: <BookOpen className="h-5 w-5" />,
      url: "/offers",
    },
    {
      text: t("navigation.destinations"),
      icon: <MapPin className="h-5 w-5" />,
      url: "/destinations",
    },
    {
      text: t("navigation.contact"),
      icon: <Package className="h-5 w-5" />,
      url: "/contact",
    },
  ];

  const isHomePage = location.pathname === "/";
  const [backgroundColor, setBackgroundColor] = useState("bg-darkBlue");
  console.log({ isHomePage });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (url) => {
    navigate(url);
    setIsOpen(false);
  };

  // Track scroll position
  useEffect(() => {
    const onNavScroll = () => {
      setNavState(window.scrollY > 180);

      // Set background color based on route and scroll position
      if (isHomePage) {
        setBackgroundColor(
          window.scrollY < 550 ? "bg-transparent" : "bg-darkBlue"
        );
      } else {
        setBackgroundColor("bg-darkBlue");
      }
    };

    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, [isHomePage, location.pathname]);

  // // Update background color when route changes
  // useEffect(() => {
  //   setBagroundCol(isHomePage);
  // }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      // Mobile dropdown
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsMobileDropdownOpen(false);
      }

      // Mobile menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
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

  const handleLanguageChange = (lang) => {
    console.log("lang.code", lang);

    setSelectedLang(lang);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
    i18n.changeLanguage(lang?.lang);
  };

  return (
    <div
      className={`w-full z-50  shadow-lg  top-0 left-0 transition-all duration-300 ${
        navState ? "fixed " : "relative"
      } ${isHomePage ? "bg-opacity-70" : "bg-opacity-80"} ${backgroundColor}`}
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
                  className={`cursor-pointer font-normal hover:text-orange ${
                    location.pathname === item.url ? "text-orange" : ""
                  }`}
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

            {/* language dropdown */}
            <div
              className="relative flex flex-row space-x-2 items-center"
              ref={dropdownRef}
            >
              {/* Language Selection Button */}
              <button
                className="flex flex-row items-center space-x-2 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={`https://flagcdn.com/w40/${selectedLang.countryCode}.png`}
                  alt={`${selectedLang.label} Flag`}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-lg font-normal">{selectedLang.code}</span>
              </button>

              {/* Language Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-28 p-2">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className={`flex items-center space-x-2 px-3 py-1 cursor-pointer rounded-md  ${
                        selectedLang.code === lang.code
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-smokeGray"
                      }`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                        alt={`${lang.label} Flag`}
                        className="w-4 h-4"
                      />
                      <span className="text-textColor text-sm">
                        {lang.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              className="flex flex-row space-x-2 items-center focus:outline-none"
              onClick={() => handleNavigation("/login")}
            >
              <CircleUserRound className="h-6 w-6 font-normal" />
              <span className="text-lg font-normal">{t("login")}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button ref={buttonRef} className="p-2 focus:outline-none ">
              {isOpen ? (
                <X
                  className="h-6 w-6 hover:cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <div className="flex flex-row space-x-4 items-center text-sm ">
                  <div
                    className="focus:outline-none items-center cursor-pointer"
                    onClick={() => handleNavigation("/watchlist")}
                  >
                    <Heart className="h-4 w-4" />
                  </div>

                  {/* language dropdown */}
                  <div className="relative" ref={mobileDropdownRef}>
                    <button
                      className="flex flex-row items-center space-x-2 focus:outline-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileDropdownOpen(!isMobileDropdownOpen);
                      }}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${selectedLang.countryCode}.png`}
                        alt={`${selectedLang.label} Flag`}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-lg font-normal">
                        {selectedLang.code}
                      </span>
                    </button>

                    {isMobileDropdownOpen && (
                      <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md w-28 p-2 z-50">
                        {languages.map((lang) => (
                          <div
                            key={lang.code}
                            className={`flex items-center space-x-2 px-3 py-1 cursor-pointer rounded-md ${
                              selectedLang.code === lang.code
                                ? "bg-blue-100 text-blue-700"
                                : "hover:bg-smokeGray"
                            }`}
                            onClick={() => handleLanguageChange(lang)}
                          >
                            <img
                              src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                              alt={`${lang.label} Flag`}
                              className="w-4 h-4"
                            />
                            <span className="text-textColor text-sm">
                              {lang.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="flex flex-row space-x-2 items-center focus:outline-none font-normal"
                    onClick={() => handleNavigation("/login")}
                  >
                    <CircleUserRound className="h-4 w-4" />
                    <span className="font-normal">{t("login")}</span>
                  </div>
                  <Menu
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={toggleMenu}
                  />
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
