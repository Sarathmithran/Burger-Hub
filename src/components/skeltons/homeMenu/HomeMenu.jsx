import React from "react";

const HomeMenu = ({ count }) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          class="flex flex-col justify-between bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
        >
          <div class="relative overflow-hidden">
            {/* Image Skeleton */}
            <div class="skeleton w-full h-64"></div>
            {/* Price Badge Skeleton */}
            <div class="absolute top-4 right-4">
              <div class="skeleton w-16 h-8 rounded-full"></div>
            </div>
          </div>
          <div class="p-6">
            {/* Title Skeleton */}
            <div class="skeleton h-6 w-3/4 mb-2"></div>

            {/* Description Skeleton */}
            <div class="space-y-2 mb-4">
              <div class="skeleton h-4 w-full"></div>
              <div class="skeleton h-4 w-5/6"></div>
              <div class="skeleton h-4 w-4/5"></div>
            </div>

            {/* Bottom Section */}
            <div class="flex items-center justify-between">
              <div class="skeleton h-4 w-16"></div>
              <div class="skeleton h-10 w-24 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMenu;
