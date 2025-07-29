import React from 'react'

const ResultsHeader = ({ filteredItemsCount }) => (
  <div className="mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 hidden lg:block">
          Our Menu
        </h1>
        {
          filteredItemsCount > 0 &&
          <p className="text-gray-600">
            Showing {filteredItemsCount} delicious items
          </p>
        }
      </div>
      <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hidden md:block">
        <div className="text-lg font-bold text-orange-500">
          {filteredItemsCount}
        </div>
        <div className="text-xs text-gray-600">Items found</div>
      </div>
    </div>
  </div>
);

export default ResultsHeader