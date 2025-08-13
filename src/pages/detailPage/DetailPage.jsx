import React, { useEffect, useState } from 'react';
import { Star, Plus, Minus, ShoppingCart, Clock, Users, ChefHat } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { fetchMenuDetails } from '../../features/menu/menuThunk';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../features/cart/cartThunk';
import BurgerLoading from '../../components/svg/BurgerLoading';
import { Tabs } from '../../data/detailPageTabs.js';

const DetailPage = () => {

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');  
  const dispatch = useDispatch();
  const menuDetails = useSelector(state => state.menu.menuDetails);
  const { item, loading } = menuDetails;
  const { menu, related } = item;

  useEffect(() => {
    dispatch(fetchMenuDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    const originalTitle = document.title;
    if (menu?.name) {
      document.title = menu.name;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [menu?.name]);

  ;
  
  const handleAddToCart = async () => {
    const payload = {
        menu_id: menu?.id,
        quantity
      };
  
      try {
        await dispatch(addToCart(payload)).unwrap();
        toast.success('Item added to cart');
      } catch (error) {
        if (error?.status === 401) {
          toast.error('Login to your account');
          return;
        }
        toast.error('Failed to add item to cart');
      }
  };

  const calculateTotalPrice = () => {
    return menu?.price * quantity;
  };

  const resetMenuView  = () => {
    setQuantity(1);
    setActiveTab('description');
  }

  const ingredients = typeof menu?.ingredients === 'string'
  ? JSON.parse(menu.ingredients)
  : menu?.ingredients;

  const nutrition = typeof menu?.nutritional_information === 'string'
  ? JSON.parse(menu.nutritional_information)
  : menu?.nutritional_information;


  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-7">
      {/* Loading Overlay */}
      {loading && (
      <div className="fixed inset-0 hero-overlay bg-opacity-70 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto w-fit">
            <BurgerLoading />
          </div>
        </div>
      </div>
      )}
      <div className="container mx-auto px-4 py-4 max-w-lg sm:max-w-2xl lg:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative">
              <img 
                src={menu?.image} 
                alt={menu?.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-3 left-3">
                <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">-20%</div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 lg:space-y-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{menu?.name}</h1>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{menu?.description}</p>
            </div>

            {/* Rating and Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">{menu?.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>10-15 min</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Users className="w-4 h-4" />
                <span>1 person</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-orange-500">${menu?.price}</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">${menu?.price * 2}</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900 text-sm sm:text-base">Quantity:</span>
                <div className="flex items-center">
                  <button 
                    className="cursor-pointer  w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4 text-black" />
                  </button>
                  <span className="mx-4 text-lg sm:text-xl font-semibold w-8 text-center text-gray-900">{quantity}</span>
                  <button 
                    className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={handleAddToCart} className="cursor-pointer flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm sm:text-base">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add to Cart - ${calculateTotalPrice().toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 lg:mt-12">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {Tabs?.map(tab => (
              <button
                key={tab.key}
                className={`cursor-pointer px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{menu?.long_description}</p>
                <div className="flex items-center gap-2 mt-4 p-3 bg-orange-50 rounded-lg">
                  <ChefHat className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Made fresh to order with premium ingredients</span>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Ingredients</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ingredients?.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Nutritional Information</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {Object.entries(nutrition).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-orange-500">{value}</div>
                      <div className="text-xs sm:text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-8 lg:mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {related?.map((item, index) => (
              <Link to={`/menu/${item.id}`} key={index}  onClick={()=> resetMenuView()} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="h-32 sm:h-48">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-3">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-orange-500">${item.price}</span>

                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                      </svg>
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;