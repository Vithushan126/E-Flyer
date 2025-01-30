import React from 'react'
import { Link } from "react-router-dom";
import tourImage from "../../assets/heroSection/tour_bg.png";
import SearchForm from '../home/searchform/SearchForm';
import CommonCard from "../../components/ui/commonCard/CommonCard";
import Image1 from "../../assets/tour/img_1.svg";
import Image2 from "../../assets/tour/img_2.png";
import Image3 from "../../assets/tour/img_3.png";
import Image4 from "../../assets/tour/img_4.png";
import CardAndCity from '../home/CardAndCity';


const Tour = () => {
  const adventures = [
    {
      id: 1,
      title: "Blue cruise from/to Antalya",
      location: "France",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: "LKR 334567",
      discountedPrice: "LKR 234567",
      discount: "30% Off",
      image: Image1,
      rating: 4,
      isTop: true,
    },
    {
      id: 2,
      title: "Blue cruise from/to Antalya",
      location: "France",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: Image2,
      rating: 4,
      isTop: true,
    },
    {
      id: 3,
      title: "Blue cruise from/to Antalya",
      location: "France",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "3 nights - 2 Adults",
      package: "All Inclusive | Including Transfer",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: Image3,
      rating: 0,
      isTop: true,
    },
    {
      id: 4,
      title: "Blue cruise from/to Antalya",
      location: "Rome",
      dates: "13 Feb 2025-15 Feb 2025",
      duration: "",
      package: "Economy from",
      originalPrice: "",
      discountedPrice: "LKR 234567",
      discount: "",
      image: Image4,
      rating: 0,
      isTop: true,
    },
  ];

  return (
    <div>
      <div className=" w-full h-screen flex justify-center   ">
        {/* Static overlay image */}
        <div className="absolute inset-0 z-0 bg-opacity-5">
          <img
            src={tourImage}
            alt="bagroundimg"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1">
        {/* Search Form Section */}
        <section id="search-form" className="bg-gray-100 mt-[300px] -mb-96">
          <SearchForm />
        </section>

        {/* Trips Section */}
        <div className="w-full flex justify-center -mt-40">
          <div className="max-w-[1100px] w-full space-y-8">
            <div className="space-y-2 pl-40">
              <h2 className="text-3xl font-medium text-gray">Trips</h2>
              <p className="text-base font-normal text-smokyGray"> Explore Asia, Europe and America by bus, train, ship, plane, on foot or by rental car.</p>
            </div>
            <div className="mt-8 border-t border-border mx-auto max-w-6xl"></div>

            {/* Offers for Round Trips */}
            <div className="space-y-2">
            <Link to="/roundtrip">
              <h2 className="text-3xl font-medium text-gray">Offers for round trips</h2>
              </Link>
              <p className="text-Base font-normal text-smokyGray">Discover fascinating tours through Albania, Greece, Spain, Portugal, Turkey and Egypt with Hotelplan! Immerse yourself in rich history,
                breathtaking nature and fascinating cultures. Be it a rental car tour, a group tour or an individual tour.</p>
            </div>

            <div className="flex flex-col space-y-6 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {adventures.slice(0, 4).map((adventure) => {
                  return <CommonCard adventure={adventure} key={adventure.id} />;
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-6 py-3 font-semibold text-darkBlue border border-darkBlue rounded-full hover:bg-blue-50 hover:scale-105 transition-colors">
                View more Offers
              </button>
            </div>
            {/* Guided Tour Section */}
            <div className="flex w-[1139px] h-[209px] justify-center text-center text-base font-normal text-smokyGray leading-5 tracking-wide">
              <p>
                Discover guided and individual tours with EFly! <br /> Enjoy an unforgettable travel experience with our carefully planned and professionally guided tours.
                Our experienced tour guides <br />  accompany you through exciting destinations and bring you closer to the culture, history, and scenic beauty of the places.<br /> 
                Our guided tours offer you a comfortable and stress-free way of traveling. You don't have to worry about the organization and logistics <br />  but can
                concentrate entirely on exploring and the experience. Our tour guides are at your disposal with their expertise and also organize <br />  accommodation and transport.<br /> 
                For those who prefer more independence, we also offer individual tours. You will receive a tailor-made itinerary that suits your interests <br /> and preferences.
                You have the freedom to explore the sights at your own pace and to respond flexibly to your needs.<br /> Whether you want to explore historic cities, fascinating natural landscapes, or exotic destinations - 
                we have the perfect tour for you. <br /> From Europe to Africa, we offer destinations all over the world. <br /> Trust Hotelplan to make your guided or individual tour unforgettable!
              </p>
            </div>
          </div>
        </div>
        <section id="more package" className="flex py-32">
        <CardAndCity title="More package for you" />
        </section>
      </main>
    </div>
  )
}

export default Tour;