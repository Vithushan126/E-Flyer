import React, { useState, useEffect, useRef } from "react";
import EflyLogo from "../../../assets/navbar/EflyLogo.svg";
import SearchIcon from "../../../assets/navbar/SearchIcon_2.svg";
import EnglandFlag from "../../../assets/navbar/EnglandFlag.svg";
import WhiteLogo from "../../../assets/footer/whitelogo.png";
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
import { useNavigate } from "react-router-dom";

const headerText = [
  { text: "Explore", icon: <Globe className="h-5 w-5" />, url: "/explore" },
  { text: "Offers", icon: <BookOpen className="h-5 w-5" />, url: "/offers" },
  {
    text: "Destinations",
    icon: <MapPin className="h-5 w-5" />,
    url: "/destinations",
  },
  { text: "Contact", icon: <Package className="h-5 w-5" />, url: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState(false);
  const menuRef = useRef(null); // Ref for the dropdown menu
  const buttonRef = useRef(null); 

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
      }`}
    >
      <div className="h-[57px] flex justify-center items-center bg-opacity-80 ">
        {/*  <div className="h-[67px] flex justify-center items-center  bg-white  bg-opacity-30 shadow-lg"> */}
        {/* header links */}
        {/* <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-semibold text-lg text-darkBlue px-2 md:px-4"> */}
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
              {/* <img src={SearchIcon} alt="Search" className="h-6 w-6" /> */}
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
              {/* <img src={UserCircleIcon} alt="User " className="h-6 w-6" /> */}
              <CircleUserRound className="h-6 w-6 font-normal" />
              <span className="text-lg font-normal">Login</span>
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
                    <span className="font-normal">EN</span>
                  </div>
                  {/* Replace the inner button with a div */}
                  <div
                    className="flex flex-row space-x-2 items-center focus:outline-none font-normal"
                    onClick={() => handleNavigation("/login")}
                  >
                    <CircleUserRound className="h-6 w-6" />
                    <span className="font-normal">Login</span>
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

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import EflyLogo from "../../../assets/navbar/EflyLogo.svg";
// import SearchIcon from "../../../assets/navbar/SearchIcon_2.svg";
// import EnglandFlag from "../../../assets/navbar/EnglandFlag.svg";
// import {
//   BookOpen,
//   ChevronRight,
//   Globe,
//   MapPin,
//   Menu,
//   Package,
//   Search,
//   X,
//   CircleUserRound,
//   Heart,
// } from "lucide-react";

// const headerText = [
//   { text: "Explore", icon: <Globe className="h-5 w-5" />, url: "/explore" },
//   { text: "Offers", icon: <BookOpen className="h-5 w-5" />, url: "/offers" },
//   { text: "Destinations", icon: <MapPin className="h-5 w-5" />, url: "/destinations" },
//   { text: "Packages", icon: <Package className="h-5 w-5" />, url: "/packages" },
// ];

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [navState, setNavState] = useState(false);
//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);

//   // Toggle menu visibility
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle navigation and close the menu
//   const handleNavigation = (url) => {
//     navigate(url);
//     setIsOpen(false);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Track scroll position
//   useEffect(() => {
//     const onNavScroll = () => {
//       setNavState(window.scrollY > 180);
//     };

//     window.addEventListener("scroll", onNavScroll);
//     return () => {
//       window.removeEventListener("scroll", onNavScroll);
//     };
//   }, []);

//   return (
//     <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${navState ? "bg-darkBlue shadow-md" : "bg-transparent"}`}>
//       <div className="h-[67px] flex justify-center items-center bg-opacity-80">
//         <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-medium text-lg text-white px-2 md:px-4">
//           <div className="flex flex-row items-center space-x-12">
//             <img
//               src={EflyLogo}
//               alt="Efly Logo"
//               className="cursor-pointer"
//               onClick={() => handleNavigation("/")}
//             />
//             <div className="hidden lg:flex space-x-8">
//               {headerText.map((item, index) => (
//                 <span
//                   key={index}
//                   className="cursor-pointer hover:text-orange"
//                   onClick={() => handleNavigation(item.url)}
//                 >
//                   {item.text}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Right-side Icons */}
//           <div className="hidden lg:flex space-x-8 items-center ml-8">
//             <button className="focus:outline-none">
//               <img src={SearchIcon} alt="Search" className="h-9 w-9" />
//             </button>
//             <button className="focus:outline-none" onClick={() => handleNavigation("/watchlist")}>
//               <Heart className="h-6 w-6" />
//             </button>
//             <div className="flex flex-row space-x-2 items-center">
//               <img src={EnglandFlag} alt="England Flag" className="w-5 h-5 rounded-full object-cover" />
//               <span className="text-lg">EN</span>
//             </div>
//             <button
//               className="flex flex-row space-x-2 items-center focus:outline-none"
//               onClick={() => handleNavigation("/login")}
//             >
//               <CircleUserRound className="h-6 w-6" />
//               <span className="text-lg">Login</span>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button ref={buttonRef} onClick={toggleMenu} className="p-2 focus:outline-none">
//               {isOpen ? (
//                 <X className="h-6 w-6 hover:cursor-pointer" />
//               ) : (
//                 <div className="flex flex-row space-x-4 items-center">
//                   <div className="flex flex-row space-x-2 items-center">
//                     <img src={EnglandFlag} alt="England Flag" className="w-5 h-5 rounded-full object-cover" />
//                     <span>EN</span>
//                   </div>
//                   <div className="flex flex-row space-x-2 items-center focus:outline-none" onClick={() => handleNavigation("/login")}>
//                     <CircleUserRound className="h-6 w-6" />
//                     <span>Login</span>
//                   </div>
//                   <Menu className="h-6 w-6 hover:cursor-pointer" />
//                 </div>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div ref={menuRef} className="lg:hidden bg-white bg-opacity-95 shadow-lg p-1 md:px-4">
//           <div className="flex flex-row justify-between py-2">
//             <div>Search</div>
//             <div className="opacity-50">
//               <Search />
//             </div>
//           </div>
//           <div className="border-t border-gray opacity-10"></div>
//           <div className="py-2 space-y-2">
//             {headerText.map((item, index) => (
//               <div
//                 key={index}
//                 className="block text-darkBlue hover:text-primaryColor cursor-pointer py-2 text-lg font-semibold"
//                 onClick={() => handleNavigation(item.url)}
//               >
//                 <div className="flex flex-row justify-between">
//                   <div className="flex flex-row items-center space-x-2">
//                     <div className="opacity-50">{item.icon}</div>
//                     <div>{item.text}</div>
//                   </div>
//                   <div className="opacity-50">
//                     <ChevronRight />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
