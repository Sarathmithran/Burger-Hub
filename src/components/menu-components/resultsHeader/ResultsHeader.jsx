import React from 'react'

const ResultsHeader = ({ filteredItemsCount }) => (
  <div className="mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 hidden lg:block">
          Our Menu
        </h1>
        {
          filteredItemsCount > 0 &&
          <p className="text-gray-400">
            Showing {filteredItemsCount} delicious items
          </p>
        }
      </div>
      <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hidden md:block">
        <div className="text-lg font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          {filteredItemsCount}
        </div>
        <div className="text-xs text-gray-400">Items found</div>
      </div>
    </div>
  </div>
);

export default ResultsHeader