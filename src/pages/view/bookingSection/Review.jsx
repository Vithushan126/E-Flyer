import { Star } from "lucide-react";
import React from "react";
import PeopleReview from "./PeopleReview";

const reviewData = [
  { label: "Price Performance", value: 4 },
  { label: "Position", value: 5 },
  { label: "Room", value: 4 },
  { label: "Cleanliness", value: 5 },
  { label: "Service", value: 5 },
  { label: "Sleep Quality", value: 4 },
];

const reviews = [
  {
    url: "https://i.pravatar.cc/150?img=4",
    name: "Aisha Kelly",
    date: "21 Jan 2023",
    rating: 4,
    topic: "Good customer service",
    review: `We stayed as a couple in the O-Resort in an O Jacuzzi beach villa (No. 256). The location is fantastic. Our roomkeeper Yamin always looked after us in an incredibly friendly and pleasant way and made our accommodation a perfectly maintained temporary home for us. We felt very comfortable and all our requests were always dealt with in an incredibly friendly and prompt manner. The personal and friendly welcome from Samee and the team at our O-Reception made us feel very welcome from the start and we settled in very quickly and were able to relax and unwind wonderfully during our stay. We actually only went to the O Restaurant because we liked the view and location so much. From the start, Anjana looked after us there in a very warm and friendly way. The service was perfect and yet relaxed. The other service staff and the chefs, who are always on site for meals, were also very friendly and we were able to talk to each other personally. It was very nice to get a personal connection with the people, because they of course make the stay there something very special. Thank you very much for that. As a birthday highlight, we had booked a candlelight dinner: it was a wonderful and beautiful experience and was perfectly organized and carried out by the Kuredu event team. Our personal waiter that evening gave us a very warm welcome and guided us through the evening. The island is rather large by Maldivian standards, but that was exactly what we wanted. It was a wonderful "tropical experience" just as we had dreamed. We also used the gym regularly, which I wouldn't normally do on such a beautiful island, but from there you had a fantastic view of the ocean and the turtle and snorkeling area, so that even in the pleasantly air-conditioned gym there was no lack of island feeling and you could watch the sea turtles swimming while rowing, cycling or running. As for the food, we didn't lack anything at the O-Resort. There were always changing themed buffets and even if you wanted something different, you could go to other themed restaurants on the island. But that wasn't relevant for us because we found it perfect at the O-Resort. From the moment we arrived in Male until our departure, we felt perfectly looked after and cared for by the Kuredu team! Thank you all very much for this wonderful and unique experience.`,
    reviewCount: [
      { label: "Price Review", value: 4 },
      { label: "Cleanliness", value: 4 },
      { label: "Position", value: 4 },
      { label: "Service", value: 4 },
      { label: "Room", value: 4 },
      { label: "Sleep Quality", value: 4 },
    ],
  },
];

const Review = () => {
  return (
    <div className="w-full border border-border p-10 flex flex-col rounded-xl space-y-16">
      <div className="grid grid-cols-3 gap-4 ">
        {reviewData?.map((review, index) => (
          <div
            key={index}
            className="px-4 py-1 rounded-lg text-sm  transition-colors border border-borderGray text-nowrap w-full flex flex-row justify-between items-center"
          >
            <span>{review.label}</span>
            <div className="flex flex-row space-x-1">
              {[...Array(5)].map((_, starIdx) => (
                <svg
                  key={starIdx}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill={starIdx < review.value ? "orange" : "white"}
                  stroke="orange"
                  strokeWidth="1.5"
                  className={`transition-all duration-300 transform ${
                    starIdx < review.value ? "scale-110" : ""
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8">
        <PeopleReview reviews={reviews} />
      </div>
    </div>
  );
};

export default Review;
