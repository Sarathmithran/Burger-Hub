import React from "react";

const MenuSection = () => {
  return (
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Signature Burgers
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Handcrafted with premium ingredients and grilled to perfection
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-6"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
              alt="Classic Beef Burger"
              class="w-full h-64 object-cover"
            />
            <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
              $12.99
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Classic Beef Burger
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Juicy beef patty with lettuce, tomato, onion, pickles, and our
              signature sauce on a toasted brioche bun.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">🕒 15 min</span>
              <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div class="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
              alt="Bacon Cheeseburger"
              class="w-full h-64 object-cover"
            />
            <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
              $15.99
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Bacon Cheeseburger
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Double beef patty with crispy bacon, melted cheddar cheese,
              lettuce, and garlic aioli on a sesame seed bun.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">🕒 18 min</span>
              <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div class="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop"
              alt="Veggie Burger"
              class="w-full h-64 object-cover"
            />
            <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
              $11.99
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Garden Veggie Burger
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              House-made veggie patty with avocado, sprouts, tomato, and herb
              mayo on a whole wheat bun.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">🕒 12 min</span>
              <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div class="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
              alt="BBQ Burger"
              class="w-full h-64 object-cover"
            />
            <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
              $14.99
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              BBQ Ranch Burger
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Smoky beef patty with onion rings, BBQ sauce, ranch dressing, and
              coleslaw on a brioche bun.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">🕒 20 min</span>
              <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div class="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop"
              alt="Spicy Chicken Burger"
              class="w-full h-64 object-cover"
            />
            <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
              $13.99
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Spicy Chicken Burger
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Crispy chicken breast with jalapeños, pepper jack cheese, spicy
              mayo, and lettuce on a toasted bun.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">🕒 16 min</span>
              <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div class="menu-item bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
              alt="Mushroom Swiss Burger"
              class="w-full h-64 object-cover"
            />
            <div class="absolute top-4 right-4 price-badge text-white px-3 py-1 rounded-full font-bold text-lg">
              $16.99
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Mushroom Swiss Burger
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Premium beef patty with sautéed mushrooms, Swiss cheese,
              caramelized onions, and truffle aioli.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">🕒 22 min</span>
              <button class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-lg text-gray-300 mb-6">
          Can't decide? Try our combo deals!
        </p>
        <button class="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transform transition-all hover:scale-105">
          View All Combos
        </button>
      </div>
    </section>
  );
};

export default MenuSection;