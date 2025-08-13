import React from 'react'
import { SlidersHorizontal } from 'lucide-react';
import CATEGORIES from '../../../data/categories.js'

const CategoriesSection = ({ selectedCategory, setSelectedCategory, setIsMobileFilterOpen }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
      <SlidersHorizontal className="w-5 h-5 text-orange-500" />
      Categories
    </h2>
    <div className="space-y-2">
      {CATEGORIES.map(category => (
        <button
          key={category.value}
          onClick={() => {setSelectedCategory(category.value); setIsMobileFilterOpen(false)}}
          className={`w-full text-left px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-3 ${
            selectedCategory === category.value 
              ? 'bg-orange-500 text-white shadow-lg transform scale-105' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-102'
          }`}
        >
          <span className="text-lg">{category.emoji}</span>
          <span className="font-medium">{category.label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default CategoriesSection