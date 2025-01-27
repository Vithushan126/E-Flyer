import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const PeopleReview = ({ reviews }) => {
  const [expandedReviews, setExpandedReviews] = useState({}); // Track expanded state for each review

  const toggleReadMore = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      {reviews.map((review, index) => (
        <div className="p-4 border border-border rounded-xl w-full  flex flex-col space-y-10 text-darkBlue">
          <div className="flex flex-row justify-between gap-x-8">
            <div className="flex items-end ">
              <img
                src={review?.url}
                alt={review?.name}
                className="rounded-full w-16 border border-darkBlue object-cover"
              />
            </div>
            <div className="flex flex-col space-y-1 w-full items-end  ">
              {/* rating */}
              <div className="flex flex-row space-x-1">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill={idx < review.rating ? "orange" : "white"}
                    stroke="orange"
                    strokeWidth="1.5"
                    className={`transition-all duration-300 transform   ${
                      idx < review.rating ? "scale-110" : ""
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              {/* date */}
              <div className="font-thin">{review?.date}</div>
              <div className="text-left font-medium text-xl  w-full">
                {review?.name}
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="font-medium text-lg">{review?.topic} </h6>
            <div>
              {expandedReviews[index] ? (
                <>
                  <div className="text-lightGray font-thin">
                    {review?.review}
                  </div>
                  {/* Review count section */}
                  <div className="flex flex-col space-y-4 text-smokyGray w-2/3 mt-4">
                    {review?.reviewCount?.map((reviewItem, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-1 rounded-lg text-sm border border-borderGray text-nowrap w-full flex flex-row justify-between items-center"
                      >
                        <div className="flex gap-2 items-center">
                          <span>{reviewItem.label}</span>
                        </div>
                        <div className="flex flex-row space-x-1">
                          {[...Array(5)].map((_, starIdx) => (
                            <svg
                              key={starIdx}
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill={
                                starIdx < reviewItem.value ? "orange" : "white"
                              }
                              stroke="orange"
                              strokeWidth="1.5"
                              className={`transition-all duration-300 transform ${
                                starIdx < reviewItem.value ? "scale-110" : ""
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
                </>
              ) : (
                <div className="text-lightGray font-thin">
                  `${review?.review.slice(0, 450)}...`
                </div>
              )}
              <button
                onClick={() => toggleReadMore(index)}
                className="text-darkBlue hover:underline  flex flex-row justify-end items-center w-full"
              >
                {expandedReviews[index] ? (
                  <>
                    <ChevronLeft className="w-4 h-4" />
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PeopleReview;
