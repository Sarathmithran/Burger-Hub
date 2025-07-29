import React from 'react';
import SearchSection from '../searchSection/SearchSection';
import CategoriesSection from '../categoriesSection/CategoriesSection';
import PriceRangeSection from '../priceRangeSection/PriceRangeSection';
import SortSection from '../sortSection.jsx/SortSection';

const FilterSidebar = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  className = "", 
  isMobile = false 
}) => (
  <div className={`bg-gray-50 p-6 mt-2 space-y-8 ${className} ${isMobile ? 'h-full overflow-y-auto' : ''}`}>
    <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    
    <CategoriesSection 
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}
    />
    
    <PriceRangeSection priceRange={priceRange} setPriceRange={setPriceRange} />
    
    <SortSection 
      sortBy={sortBy} 
      setSortBy={setSortBy}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />
  </div>
);

export default FilterSidebar;