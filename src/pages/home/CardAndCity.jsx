import React from "react";
import { Link } from "react-router-dom";
import CityCard from "../../components/ui/cityCard/CityCard";
import CityCard1 from "../../assets/cityAndTrip/CityAndTip4.svg";
import CityCard2 from "../../assets/adventure/HotelImage1.svg";
import CityCard5 from "../../assets/adventure/HotelImage2.svg";
import CityCard3 from "../../assets/adventure/HotelImage4.svg";
import CityCard4 from "../../assets/adventure/HotelImage5.svg";

const CardAndCity = ({ title }) => {
  const cardCitys = [
    {
      id: 1,
      title: "108765",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: CityCard5,
    },
    {
      id: 2,
      title: "108766",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: CityCard2,
    },
    {
      id: 3,
      title: "108767",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: CityCard3,
    },
    {
      id: 4,
      title: "108768",
      location: "Bali",
      temparature: 22,
      duration: "3 nights - 2 Adults",
      country: "Indonesia",
      offers: 109,
      image: CityCard4,
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1100px] w-full space-y-8">
        {/* title contant */}
        <Link to="/TopCityPackage">
        <h2 className="text-4xl font-semibold text-gray">{title}</h2>
        </Link>

        {/* card section */}
        <div className="flex flex-row space-x-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {cardCitys?.map((cardCity) => {
              return <CityCard cardCity={cardCity} key={cardCity.id} />;
            })}
          </div>
        </div>

        {/* button contant */}
        <div className="flex justify-center">
          
            <button className="px-6 py-3 font-semibold text-darkBlue border border-darkBlue rounded-full hover:bg-blue-50 hover:scale-105 transition-colors">
              View more Offers
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default CardAndCity;
