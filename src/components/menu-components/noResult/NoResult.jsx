import React from 'react'
import noProduct from '../../../assets/img/no-product-found.png'

const NoResults = ({ onReset }) => (
  <div className="text-center py-16">
    <div className="flex justify-center mb-6"><img src={noProduct} alt='no-product-found' width={110} /></div>
    <h3 className="text-3xl font-bold mb-4 text-white">No items found</h3>
    <p className="text-gray-400 mb-6 max-w-md mx-auto">
      We couldn't find any menu items matching your criteria. Try adjusting your search or filters.
    </p>
    <button 
      className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
      onClick={onReset}
    >
      Reset Filters
    </button>
  </div>
);

export default NoResults