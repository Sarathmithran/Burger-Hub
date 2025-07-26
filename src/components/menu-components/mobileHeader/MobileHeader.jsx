import React from 'react'
import { Filter, ShoppingCart } from 'lucide-react';

const MobileHeader = ({ setIsMobileFilterOpen }) => (
  <div className="lg:hidden bg-gray-800 p-4 border-b border-gray-700 sticky top-0 z-40">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-white">Our Menu</h1>
      <div className="flex items-center gap-3">
        {/* {cart.length > 0 && (
          <div className="bg-gray-700 px-3 py-1 rounded-full text-sm">
            <ShoppingCart className="w-4 h-4 inline mr-1" />
            {cart.length}
          </div>
        )} */}
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center gap-2"
        >
          <Filter className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </div>
  </div>
);

export default MobileHeader