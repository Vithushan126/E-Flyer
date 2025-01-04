import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
    {
        name: 'Aisha Kelly',
        avatarUrl: 'https://www.gravatar.com/avatar/example-avatar1',  // Example avatar URL
        rating: 5,
        comment: 'Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.',
    },
    {
        name: 'Brylee Singleton',
        avatarUrl: 'https://www.gravatar.com/avatar/example-avatar2',  // Example avatar URL
        rating: 4,
        comment: 'Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.',
    },
    {
        name: 'Ruby Miller',
        avatarUrl: 'https://www.gravatar.com/avatar/example-avatar3',  // Example avatar URL
        rating: 4,
        comment: 'Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.',
    },
    {
        name: 'John Doe',
        avatarUrl: 'https://www.gravatar.com/avatar/example-avatar4',  // Example avatar URL
        rating: 5,
        comment: 'Good customer service. Wander through ancient temples, indulge in the local dishes, or explore the popular bazaars.',
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
        cssEase: 'linear',
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
        <div className="max-w-screen-lg mx-auto mt-10 px-4">
            <h2 className="text-3xl font-semibold text-[#004679] mb-8 text-center">
                Feedback and Reviews
            </h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4"
                    >
                        <div className="flex items-center mb-4">
                            {/* Avatar and Text Section */}
                            <img
                                src={review.avatarUrl}  // Display avatar image
                                alt={review.name}
                                className="rounded-full w-12 h-12 object-cover"
                            />
                            <div className="ml-3">
                                <p className="text-lg font-medium text-[#004679]">{review.name}</p>
                                <div className="flex items-center">
                                    {/* Animated Stars */}
                                    {[...Array(5)].map((_, idx) => (
                                        <svg
                                            key={idx}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill={idx < review.rating ? '#ffcc00' : '#e4e5e9'}
                                            className={`transition-all duration-300 transform ${idx < review.rating ? 'scale-110' : ''}`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Feedback;
