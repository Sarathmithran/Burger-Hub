import React from 'react'
import { SortAsc, SortDesc } from 'lucide-react';
import SORT_OPTIONS from '../../../data/sort'

const SortSection = ({ sortBy, setSortBy, sortOrder, setSortOrder }) => {
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Sort By</h2>
      <div className="space-y-3">
        <select 
          className="w-full px-2 py-3 cursor-pointer bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {SORT_OPTIONS.map(option => (
            <option key={option.value} value={option.value} className="bg-gray-700">
              {option.label}
            </option>
          ))}
        </select>
        
        <button
          className={`w-full px-4 py-3 cursor-pointer rounded-lg border transition-all duration-200 flex items-center justify-center gap-2 ${
            sortOrder === 'desc' 
              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-transparent' 
              : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
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

export default SortSection