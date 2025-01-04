// import React from "react";
// import { BedDouble, Heart, Star, ThumbsUp } from "lucide-react";
// import CommonCard from "../../components/ui/button/commonCard/CommonCard";
// import HotelImage1 from "../../assets/adventure/HotelImage1.svg";

// const TrendingAdventures = () => {
//   const adventures = [
//     {
//       id: 1,
//       title: "Catalonia Riviera Maya",
//       location: "France",
//       dates: "13 Feb 2025-15 Feb 2025",
//       duration: "3 nights - 2 Adults",
//       package: "All Inclusive | Including Transfer",
//       originalPrice: "LKR 334567",
//       discountedPrice: "LKR 234567",
//       discount: "30% Off",
//       image: HotelImage1,
//       rating: 5,
//       isTop: true,
//     },
//     {
//       id: 1,
//       title: "Catalonia Riviera Maya",
//       location: "France",
//       dates: "13 Feb 2025-15 Feb 2025",
//       duration: "3 nights - 2 Adults",
//       package: "All Inclusive | Including Transfer",
//       originalPrice: "LKR 334567",
//       discountedPrice: "LKR 234567",
//       discount: "30% Off",
//       image: HotelImage1,
//       rating: 5,
//       isTop: true,
//     },
//     {
//       id: 1,
//       title: "Catalonia Riviera Maya",
//       location: "France",
//       dates: "13 Feb 2025-15 Feb 2025",
//       duration: "3 nights - 2 Adults",
//       package: "All Inclusive | Including Transfer",
//       originalPrice: "LKR 334567",
//       discountedPrice: "LKR 234567",
//       discount: "30% Off",
//       image: HotelImage1,
//       rating: 5,
//       isTop: true,
//     },
//     {
//       id: 1,
//       title: "Catalonia Riviera Maya",
//       location: "France",
//       dates: "13 Feb 2025-15 Feb 2025",
//       duration: "3 nights - 2 Adults",
//       package: "All Inclusive | Including Transfer",
//       originalPrice: "LKR 334567",
//       discountedPrice: "LKR 234567",
//       discount: "30% Off",
//       image: HotelImage1,
//       rating: 5,
//       isTop: true,
//     },
//     {
//       id: 1,
//       title: "Catalonia Riviera Maya",
//       location: "France",
//       dates: "13 Feb 2025-15 Feb 2025",
//       duration: "3 nights - 2 Adults",
//       package: "All Inclusive | Including Transfer",
//       originalPrice: "LKR 334567",
//       discountedPrice: "LKR 234567",
//       discount: "30% Off",
//       image: HotelImage1,
//       rating: 5,
//       isTop: true,
//     },
//     // Add more adventures as needed
//   ];

//   return (
//     <div className="w-full flex  justify-center ">
//       <div className="max-w-[1100px] w-full  space-y-8">
//         <div className="space-y-2">
//           <h2 className="text-4xl font-semibold text-gray">
//             Trending Adventures
//           </h2>
//           <p className="text-xl text-smokyGray ">
//             Thinking of travelling somewhere soon? Here are some options to help
//             you get started.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {adventures.map((adventure) => (
//             <CommonCard adventure={adventure} key={adventure.id} />
//             // <div
//             //   key={adventure.id}
//             //   className="relative w-full overflow-hidden rounded-xl bg-white shadow-lg group"
//             // >
//             //   <div className="relative h-[329px]">
//             //     {/* Background Image */}
//             //     <img
//             //       src={adventure.image}
//             //       alt={adventure.title}
//             //       className="h-full w-full object-cover"
//             //     />

//             //     {/* Overlay Content */}
//             //     <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
//             //       {/* Top Bar */}
//             //       <div className="flex items-center justify-between p-4">
//             //         <div className="flex gap-2 items-center">
//             //           <div className="rounded-full bg-black/30 px-3 py-1 text-white text-sm font-medium flex items-center gap-2">
//             //             <BedDouble className="h-4 w-4" />
//             //             Hotel
//             //           </div>
//             //           {adventure.isTop && (
//             //             <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white flex items-center gap-2">
//             //               <ThumbsUp className="h-4 w-4" />
//             //               Top
//             //             </span>
//             //           )}
//             //           {adventure.discount && (
//             //             <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
//             //               {adventure.discount}
//             //             </span>
//             //           )}
//             //           <button className="hover:scale-110 transition-transform">
//             //             <Heart className="h-6 w-6 text-white" />
//             //           </button>
//             //         </div>

//             //         <div className="flex">
//             //           {[...Array(adventure.rating)].map((_, index) => (
//             //             <Star
//             //               key={index}
//             //               className="h-5 w-5 fill-white text-white"
//             //             />
//             //           ))}
//             //         </div>
//             //       </div>

//             //       {/* Bottom Content */}
//             //       <div className="absolute bottom-0 w-full p-6 text-white">
//             //         <h2 className="text-3xl font-bold border-b border-white/20 pb-2 mb-2">
//             //           {adventure.title}
//             //         </h2>
//             //         <p className="text-xl mb-4">{adventure.location}</p>

//             //         <div className="flex flex-col md:flex-row justify-between gap-4">
//             //           <div className="space-y-2">
//             //             <p className="text-sm">
//             //               {adventure.dates} | {adventure.duration}
//             //             </p>
//             //             <p className="text-sm">{adventure.package}</p>
//             //           </div>

//             //           <div className="text-right">
//             //             <p className="text-lg line-through opacity-75">
//             //               {adventure.originalPrice}
//             //             </p>
//             //             <div className="flex items-center gap-2 justify-end">
//             //               <span className="text-sm">Per person from</span>
//             //               <span className="text-2xl font-bold">
//             //                 {adventure.discountedPrice}
//             //               </span>
//             //             </div>
//             //           </div>
//             //         </div>

//             //         {/* Action Buttons */}
//             //         <div className="mt-4 space-y-2 hidden group-hover:block transition-opacity duration-300">
//             //           <button className="w-full bg-blue-600/40 hover:bg-blue-600/60 text-white font-semibold py-2 rounded-full transition-colors">
//             //             Book Now
//             //           </button>
//             //           <button className="w-full text-white font-semibold underline hover:scale-105 transition-transform">
//             //             Discover
//             //           </button>
//             //         </div>
//             //       </div>
//             //     </div>
//             //   </div>
//             // </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button className="px-6 py-3 font-semibold text-darkBlue border border-darkBlue rounded-full hover:bg-blue-50 hover:scale-105 transition-colors">
//             View more Offers
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingAdventures;

import React from "react";
import { BedDouble, Heart, Star, ThumbsUp } from "lucide-react";
import CommonCard from "../../components/ui/button/commonCard/CommonCard";
import HotelImage1 from "../../assets/adventure/HotelImage1.svg";
import HotelImage2 from "../../assets/adventure/HotelImage2.svg";
import HotelImage3 from "../../assets/adventure/HotelImage3.svg";
import HotelImage4 from "../../assets/adventure/HotelImage4.svg";
import HotelImage5 from "../../assets/adventure/HotelImage5.svg";

const TrendingAdventures = () => {
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
      title: "Catalonia Riviera Maya3",
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
          <h2 className="text-4xl font-semibold text-gray">
            Trending Adventures
          </h2>
          <p className="text-xl text-smokyGray">
            Thinking of travelling somewhere soon? Here are some options to help
            you get started.
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
            View more Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingAdventures;
