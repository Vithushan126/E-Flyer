import React from 'react';
import Image1 from "../../assets/tour/img_1.svg";
import Image2 from "../../assets/tour/img_2.png";
import Image3 from "../../assets/tour/img_3.png";
import Image4 from "../../assets/tour/img_4.png";
import CommonCard from '../../components/ui/commonCard/CommonCard';
import CardAndCity from '../home/CardAndCity';

const WatchList = () => {
    const destinations = [
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
        <main className="flex-1">
        <div className="max-w-[1100px] lg:mx-64 p-6  bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">My Watch List</h1>
            <div className="space-y-4">
                {destinations.slice(0, 4).map((adventure) => {
                  return <CommonCard adventure={adventure} key={adventure.id} />;
                })}
            </div>
        </div>
         <section id="more package" className="flex py-32">
         <CardAndCity title="Recommendation For you" />
         </section>
       </main>
     </div>
    );
};

export default WatchList;