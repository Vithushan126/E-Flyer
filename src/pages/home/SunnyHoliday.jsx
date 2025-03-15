import React from "react";
import { Link } from "react-router-dom";
import CityCard from "../../components/ui/cityCard/CityCard";
import Img1 from "../../assets/sunnyholiday/img_1.png";
import Img2 from "../../assets/sunnyholiday/img_2.png";
import Img3 from "../../assets/sunnyholiday/img_3.png";
import Img4 from "../../assets/sunnyholiday/img_4.png";
import { useTranslation } from "react-i18next";

const SunnyHoliday = () => {
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
      image: Img1,
    },
    {
      id: 2,
      title: "108766",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: Img2,
    },
    {
      id: 3,
      title: "108767",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: Img3,
    },
    {
      id: 4,
      title: "108768",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: Img4,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full space-y-8">
        {/* title contant */}
        <Link to="/TopCityPackage">
          <h2 className="text-3xl font-medium text-center text-gray">
            {t("sunnyHoliday")}
          </h2>
        </Link>

        {/* card section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {cardCitys?.map((cardCity) => {
            return <CityCard cardCity={cardCity} key={cardCity.id} />;
          })}
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

export default SunnyHoliday;
