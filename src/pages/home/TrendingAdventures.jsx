import React from "react";
import { Link } from "react-router-dom";
import CommonCard from "../../components/ui/commonCard/CommonCard";
import HotelImage1 from "../../assets/adventure/HotelImage1.svg";
import HotelImage2 from "../../assets/adventure/HotelImage2.svg";
import HotelImage3 from "../../assets/adventure/HotelImage3.svg";
import HotelImage4 from "../../assets/adventure/HotelImage4.svg";
import HotelImage5 from "../../assets/adventure/HotelImage5.svg";
import { useTranslation } from "react-i18next";

const TrendingAdventures = ({ title, subtitle }) => {
  const { t } = useTranslation();

  const adventures = [
    {
      id: 1,
      title: "Catalonia Riviera Maya",
      location: "France",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: "LKR 334567",
      discountedPrice: "LKR 234567",
      discount: "30% Off",
      image: HotelImage1,
      rating: 4,
      isTop: true,
    },
    {
      id: 2,
      title: "Catalonia Riviera Maya",
      location: "France",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: HotelImage2,
      rating: 4,
      isTop: true,
    },
    {
      id: 3,
      title: "Catalonia Riviera Maya",
      location: "France",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: HotelImage3,
      rating: 0,
      isTop: false,
    },
    {
      id: 4,
      title: "",
      location: "Rome",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "",
      package: "Economy from",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: HotelImage4,
      rating: 0,
      isTop: false,
    },
    {
      id: 5,
      title: "",
      location: "Spain",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "",
      package: "Economy from",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: HotelImage5,
      rating: 0,
      isTop: false,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full space-y-8">
        <div className="space-y-2">
          <Link to="/TrendingPackage">
            <h2 className="text-3xl font-medium text-center text-gray">
              {title}
            </h2>
          </Link>
          <p className="text-base font-extralight text-center text-smokyGray">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {adventures.slice(0, 2).map((adventure) => {
              return <CommonCard adventure={adventure} key={adventure.id} />;
            })}
          </div>
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            <div className=" w-full lg:w-1/2 grid grid-cols-1  gap-6">
              {adventures.slice(2, 3).map((adventure) => (
                <CommonCard adventure={adventure} key={adventure.id} />
              ))}
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {adventures.slice(3, 5).map((adventure) => (
                <CommonCard
                  adventure={adventure}
                  key={adventure.id}
                  small="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-6 py-3 font-semibold text-darkBlue border border-darkBlue rounded-full hover:bg-blue-50 hover:scale-105 transition-colors">
            {t("viewMoreOffers")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingAdventures;
