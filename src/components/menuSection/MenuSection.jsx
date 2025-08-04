import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBurgers } from "../../features/menu/menuThunk";
import { Link } from "react-router-dom";
import HomeMenu from "../skeltons/homeMenu/HomeMenu";
import { scrollToTop } from "../../utils/scroll";

const MenuSection = () => {

  const dispatch = useDispatch();
  const { burgers } = useSelector(state => state.menu);
  const { items, loading } = burgers;

  useEffect(() => {
    dispatch(fetchBurgers());
  }, [dispatch]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Signature Burgers
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Handcrafted with premium ingredients and grilled to perfection
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        {loading ? ( <HomeMenu count={6} /> ) : (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(item => (
              <Link to={`/menu/${item.id}`} onClick={scrollToTop} class="flex flex-col justify-between cursor-pointer menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    class="w-full h-64 object-cover"
                  />
                  <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
                    ${item.price}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">🕒 15 min</span>
                    <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        <div class="text-center mt-12">
          <p class="text-lg text-gray-600 mb-6">
            Can't decide? Try our combo deals!
          </p>
          <Link to="/menu" class="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition-all hover:scale-105">
            View All Combos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;