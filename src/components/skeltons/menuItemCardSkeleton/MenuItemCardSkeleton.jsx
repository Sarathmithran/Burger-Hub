import React from 'react';

const MenuItemCardSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="card bg-gray-100 shadow-xl border border-gray-200 overflow-hidden animate-pulse"
        >
          {/* Image Skeleton */}
          <figure className="relative">
            <div className="skeleton h-48 w-full rounded-none"></div>
            
            {/* Popular Badge Skeleton */}
            <div className="absolute top-3 left-3">
              <div className="skeleton h-6 w-16 rounded-full"></div>
            </div>
            
            {/* Rating Badge Skeleton */}
            <div className="absolute top-3 right-3">
              <div className="skeleton h-6 w-12 rounded-full"></div>
            </div>
          </figure>
          
          {/* Card Body */}
          <div className="card-body p-4">
            {/* Title and Category Row */}
            <div className="flex justify-between items-start mb-2">
              <div className="skeleton h-6 w-32"></div>
              <div className="skeleton h-5 w-16 rounded"></div>
            </div>
            
            {/* Description Lines */}
            <div className="space-y-2 mb-4">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-3/4"></div>
            </div>
            
            {/* Price and Button Row */}
            <div className="flex justify-between items-center">
              <div className="skeleton h-6 w-16"></div>
              <div className="skeleton h-10 w-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemCardSkeleton;