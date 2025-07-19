import React from 'react'
import { Filter } from 'lucide-react';
import CATEGORIES from '../../../data/categories'

const CategoriesSection = ({ selectedCategory, setSelectedCategory, menuItems }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold text-white flex items-center gap-2">
      <Filter className="w-5 h-5 text-red-500" />
      Categories
    </h2>
    <div className="space-y-2">
      {CATEGORIES.map(category => (
        <button
          key={category.value}
          onClick={() => setSelectedCategory(category.value)}
          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
            selectedCategory === category.value 
              ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105' 
              : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:scale-102'
          }`}
        >
          <span className="text-lg">{category.emoji}</span>
          <span className="font-medium">{category.label}</span>
          {selectedCategory === category.value && (
            <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
              {category.value === 'all' ? menuItems.length : menuItems.filter(item => item.category === category.value).length}
            </span>
          )}
        </button>
      ))}
    </div>
  </div>
);

export default CategoriesSection