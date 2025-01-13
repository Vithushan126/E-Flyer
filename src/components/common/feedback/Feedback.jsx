import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Aisha Kelly",
    avatarUrl: "https://i.pravatar.cc/150?img=1", // Example avatar URL
    rating: 5,
    comment:
      "Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.",
    title: "Good customer service ",
  },
  {
    name: "Brylee Singleton",
    avatarUrl: "https://i.pravatar.cc/150?img=2", // Example avatar URL
    rating: 4,
    comment:
      "Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.",
    title: "Good customer service ",
  },
  {
    name: "Ruby Miller",
    avatarUrl: "https://i.pravatar.cc/150?img=3", // Example avatar URL
    rating: 4,
    comment:
      "Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.",
    title: "Good customer service ",
  },
  {
    name: "John Doe",
    avatarUrl: "https://i.pravatar.cc/150?img=4", // Example avatar URL
    rating: 5,
    comment:
      "Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.",
    title: "Good customer service ",
  },
];

const Feedback = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center  ">
      <div className="max-w-[1100px] w-full mb-20">
        <h2 className="text-3xl font-semibold text-[#004679] mb-8 text-left">
          Feedback and Reviews
        </h2>
        <div className="px-0 lg:px-4 ">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border border-lightGray rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[254px]">
                  <div className="flex flex-col items-center ">
                    <div className="flex flex-row justify-between w-full mb-4">
                      {/* Avatar and Text Section */}
                      <div className="">
                        <img
                          src={review.avatarUrl}
                          alt={review.name}
                          className="rounded-full w-12 h-12 object-cover"
                        />
                      </div>

                      <div className="space-y-2 text-right">
                        <div className="flex justify-end">
                          {/* Animated Stars */}
                          {[...Array(5)].map((_, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill={idx < review.rating ? "#ffcc00" : "#e4e5e9"}
                              className={`transition-all duration-300 transform  ${
                                idx < review.rating ? "scale-110" : ""
                              }`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-lg font-medium text-[#004679]">
                          {review.name}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-lg font-medium text-[#004679] mb-2">
                      {review.title}
                    </h2>
                    <p className="text-lightGray text-center leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
