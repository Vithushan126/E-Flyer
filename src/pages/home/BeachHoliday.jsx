import React from "react";
import { Link } from "react-router-dom";
import CityCard from "../../components/ui/cityCard/CityCard";
import BeachHoliday5 from "../../assets/beachHoliday/BeachHoliday5.jpg";
import BeachHoliday6 from "../../assets/beachHoliday/BeachHoliday6.jpg";
import BeachHoliday7 from "../../assets/beachHoliday/BeachHoliday7.jpg";
import BeachHoliday8 from "../../assets/beachHoliday/BeachHoliday8.jpg";
import { useTranslation } from "react-i18next";

const BeachHoliday = () => {
  const { t } = useTranslation();

  const cardCitys = [
    {
      id: 1,
      title: "108765",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: BeachHoliday5,
    },
    {
      id: 2,
      title: "108766",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: BeachHoliday6,
    },
    {
      id: 3,
      title: "108767",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: BeachHoliday7,
    },
    {
      id: 4,
      title: "108768",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: BeachHoliday8,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full space-y-8">
        {/* title contant */}
        <Link to="/TopCityPackage">
          <h2 className="text-3xl font-medium text-center text-gray">
            {t("beachHoliday")}
          </h2>
        </Link>

        {/* card section */}
        <div className="flex flex-row space-x-6 ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {cardCitys?.map((cardCity) => {
              return <CityCard cardCity={cardCity} key={cardCity.id} />;
            })}
          </div>
        </div>

        {/* button contant */}
        <div className="flex justify-center">
          <button className="px-6 py-3 font-semibold text-darkBlue border border-darkBlue rounded-full hover:bg-blue-50 hover:scale-105 transition-colors">
            {t("viewMoreOffers")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeachHoliday;
