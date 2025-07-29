import React from 'react'

const PriceRangeSection = ({ priceRange, setPriceRange }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold text-gray-800">Price Range</h2>
    <div className="space-y-3">
      <div className="flex justify-between text-sm text-gray-600">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        step="0.5"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, parseFloat(e.target.value)])}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
        style={{
          background: `linear-gradient(to right, #f97316 0%, #f97316 ${(priceRange[1] / 20) * 100}%, #e5e7eb ${(priceRange[1] / 20) * 100}%, #e5e7eb 100%)`
        }}
      />
      <div className="text-center">
        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Up to ${priceRange[1]}
        </span>
      </div>
    </div>
  </div>
);

export default PriceRangeSection