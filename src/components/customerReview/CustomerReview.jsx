import React from "react";
import { Star } from "lucide-react";
import { reviews } from "../../data/customerReviews.js";

const CustomerReview = () => {
  
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what burger lovers are saying
            about us!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews?.map((review, index) => (
            <div
              key={index}
              className="card bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body p-4 sm:p-6">
                <div className="flex items-center mb-3">
                  <div className="avatar placeholder mr-3">
                    <div className="bg-gray-200 text-white rounded-full w-10 h-10">
                      <span className="text-sm font-bold">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      {review.name}
                    </h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base italic">
                  "{review.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;