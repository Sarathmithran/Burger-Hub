import React, { useState } from 'react';

const CustomerReview = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely amazing burgers! The Classic Beef Burger was cooked to perfection and the fries were crispy and delicious. The service was fast and friendly. Will definitely be back!",
      date: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      review: "Best burger joint in town! The BBQ Ranch Burger is incredible - smoky, juicy, and loaded with flavor. The atmosphere is great and the staff really knows their stuff.",
      date: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      review: "Great veggie options! As a vegetarian, I was thrilled to find such a delicious Garden Veggie Burger. The avocado was fresh and the herb mayo was the perfect touch.",
      date: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review: "Outstanding food and service! The Bacon Cheeseburger exceeded my expectations. The bacon was perfectly crispy and the cheese was melted just right. Highly recommend!",
      date: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      review: "My family loves this place! The kids menu is great and the adult burgers are phenomenal. The Mushroom Swiss Burger is my personal favorite. Clean restaurant, great prices!",
      date: "3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      review: "Solid burger experience! The Spicy Chicken Burger had just the right amount of heat. Service was quick even during lunch rush. The fries could be a bit crispier, but overall great meal.",
      date: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      verified: true
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Don't just take our word for it - hear from our satisfied customers!
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-2xl font-bold text-gray-900 ml-2">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-gray-600">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Featured Review Carousel */}
        <div className="relative mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <img
                src={reviews[currentReview].avatar}
                alt={reviews[currentReview].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  {reviews[currentReview].name}
                  {reviews[currentReview].verified && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </h3>
                <div className="flex items-center">
                  {renderStars(reviews[currentReview].rating)}
                  <span className="text-gray-500 ml-2">{reviews[currentReview].date}</span>
                </div>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              "{reviews[currentReview].review}"
            </blockquote>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextReview}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    {review.name}
                    {review.verified && (
                      <span className="ml-1 text-green-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </h4>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our happy customers?
          </p>
          <button className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition-all hover:scale-105">
            Order Your Burger Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;