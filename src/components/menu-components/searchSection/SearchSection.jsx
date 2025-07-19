import React from 'react'
import { Search } from 'lucide-react';

const SearchSection = ({ searchTerm, setSearchTerm }) => (
  <div className="space-y-3">
    <h2 className="text-xl font-bold text-white flex items-center gap-2">
      <Search className="w-5 h-5 text-red-500" />
      Search Menu
    </h2>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search delicious food..."
        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
);

export default SearchSection;