import React from 'react'
import { SortAsc, SortDesc } from 'lucide-react';
import SORT_OPTIONS from '../../../data/sort.js'

const SortSection = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Sort By</h2>
      <div className="space-y-3">
        <select 
          className="w-full px-2 py-3 cursor-pointer bg-white border border-gray-300 rounded-lg text-gray-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {SORT_OPTIONS.map(option => (
            <option key={option.value} value={option.value} className="bg-white text-gray-800">
              {option.label}
            </option>
          ))}
        </select>
        
        <button
          className={`w-full px-4 py-3 cursor-pointer rounded-lg border transition-all duration-200 flex items-center justify-center gap-2 ${
            sortOrder === 'desc' 
              ? 'bg-orange-500 text-white border-transparent shadow-md' 
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}
          onClick={toggleSortOrder}
        >
          {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
    </div>
  );
};

export default SortSection;