import { useState, useMemo, useEffect } from 'react';
import FilterSidebar from '../../components/menu-components/filterSidebar/FilterSidebar';
import MobileHeader from '../../components/menu-components/mobileHeader/MobileHeader';
import ResultsHeader from '../../components/menu-components/resultsHeader/ResultsHeader';
import NoResults from '../../components/menu-components/noResult/NoResult';
import MenuItemCard from '../../components/menu-components/menuItemCard/MenuItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenus } from '../../features/menu/menuThunk';
import MenuItemCardSkeleton from '../../components/skeltons/menuItemCardSkeleton/MenuItemCardSkeleton';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter and sort menu items
  const dispatch = useDispatch();
  const { items: menuItems, loading } = useSelector(state => state.menu);

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category.name === selectedCategory;
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === 'popular') {
        aValue = a.popular ? 1 : 0;
        bValue = b.popular ? 1 : 0;
      }

      if (sortBy === 'name') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [menuItems, searchTerm, selectedCategory, sortBy, sortOrder, priceRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange([0, 20]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20">
      <div className="flex">
        {/* Desktop Sticky Sidebar */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20 h-[calc(100vh-5rem)] bg-gray-50 shadow-lg border-r border-gray-200 overflow-y-auto">
            <FilterSidebar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              setIsMobileFilterOpen={setIsMobileFilterOpen}
            />
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileFilterOpen(false)}>
            <div 
              className="absolute top-0 left-0 w-80 h-full bg-gray-50 shadow-lg transform transition-transform duration-300 ease-in-out"
              style={{
                animation: 'slideIn 0.3s ease-out'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <FilterSidebar 
                className="pt-5" 
                isMobile={true}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                setIsMobileFilterOpen={setIsMobileFilterOpen}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <MobileHeader setIsMobileFilterOpen={setIsMobileFilterOpen} />
          
          <div className="p-4 lg:p-8">
            <ResultsHeader filteredItemsCount={filteredAndSortedItems.length} />

            { loading || !filteredAndSortedItems ? (<MenuItemCardSkeleton count={8}/>) 
              : filteredAndSortedItems.length > 0 ? (
              // Show items when loaded and available
              <MenuItemCard items={filteredAndSortedItems} />
            ) : (
              // Show no results only after loading is complete and no items exist
              <NoResults onReset={resetFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;