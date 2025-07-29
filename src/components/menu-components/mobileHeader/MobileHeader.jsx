import React from 'react'
import { SlidersHorizontal } from 'lucide-react';

const MobileHeader = ({ setIsMobileFilterOpen }) => {

  return (
  <div className="lg:hidden bg-white p-4 border-b border-gray-200 sticky top-0 z-40 shadow-sm">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">Our Menu</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all duration-200 flex items-center gap-2"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </div>
  </div>
)};

export default MobileHeader