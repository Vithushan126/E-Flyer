import React from "react";
import { Link } from "react-router-dom";
import CityCard from "../../components/ui/cityCard/CityCard";
import HillCamping9 from "../../assets/hillcamping/HillCamping9.png";
import HillCamping10 from "../../assets/hillcamping/HillCamping10.png";
import HillCamping11 from "../../assets/hillcamping/HillCamping11.png";
import HillCamping12 from "../../assets/hillcamping/HillCamping12.png";
import { useTranslation } from "react-i18next";

const HillCamping = ({title}) => {
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
      image: HillCamping9,
    },
    {
      id: 2,
      title: "108766",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: HillCamping10,
    },
    {
      id: 3,
      title: "108767",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: HillCamping11,
    },
    {
      id: 4,
      title: "108768",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: HillCamping12,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full space-y-8">
        {/* Title Content */}
        <Link to="/TopCityPackage">
          <h2 className="text-3xl font-medium text-center text-gray">
            {title}
          </h2>
        </Link>

        {/* Card Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardCitys?.map((cardCity) => (
            <CityCard cardCity={cardCity} key={cardCity.id} />
          ))}
        </div>

        {/* Button Content */}
        <div className="flex justify-center">
          <button className="px-6 py-3 font-semibold text-darkBlue border border-darkBlue rounded-full hover:bg-blue-50 hover:scale-105 transition-colors">
            {t("viewMoreOffers")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HillCamping;
