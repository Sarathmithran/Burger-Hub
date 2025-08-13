import React from 'react'
import { Search, X } from 'lucide-react';

const SearchSection = ({ searchTerm, setSearchTerm, setIsMobileFilterOpen }) => (
  <div className="space-y-3">
    <div className='flex justify-end md:hidden'>
      <button onClick={() => setIsMobileFilterOpen(false)}><X /></button>
    </div>
    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
      <Search className="w-5 h-5 text-orange-500" />
      Search Menu
    </h2>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search delicious food..."
        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
);

export default SearchSection;