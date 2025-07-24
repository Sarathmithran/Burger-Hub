import React, { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart, Clock, Users, ChefHat } from 'lucide-react';

const DetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [activeTab, setActiveTab] = useState('description');

  const menuItem = {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with fresh lettuce, tomato, onion, pickles, and our signature sauce on a toasted sesame bun",
    longDescription: "Our signature Classic Beef Burger features a quarter-pound of premium ground beef, seasoned to perfection and grilled to your liking. Topped with crisp lettuce, vine-ripened tomatoes, red onions, tangy pickles, and our house-made special sauce, all nestled between a toasted sesame seed bun.",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.6,
    reviews: 234,
    prepTime: "15-20 min",
    serves: "1 person",
    category: "Burgers",
    tags: ["Bestseller", "Beef", "Classic"],
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop"
    ],
    nutritionalInfo: {
      calories: 650,
      protein: "32g",
      carbs: "45g",
      fat: "38g",
      sodium: "920mg"
    },
    ingredients: [
      "Beef patty (1/4 lb)",
      "Sesame seed bun",
      "Lettuce",
      "Tomato",
      "Red onion",
      "Pickles",
      "Special sauce",
      "American cheese"
    ]
  };

  const sizes = [
    { name: 'small', label: 'Small', price: 0 },
    { name: 'medium', label: 'Medium', price: 2 },
    { name: 'large', label: 'Large', price: 4 }
  ];

  const extras = [
    { id: 1, name: 'Extra Cheese', price: 1.50 },
    { id: 2, name: 'Bacon', price: 2.50 },
    { id: 3, name: 'Avocado', price: 2.00 },
    { id: 4, name: 'Extra Patty', price: 4.00 },
    { id: 5, name: 'Onion Rings', price: 1.75 }
  ];

  const relatedItems = [
    { name: "Cheese Burger", price: 13.99, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" },
    { name: "Bacon Burger", price: 15.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop" },
    { name: "Veggie Burger", price: 11.99, image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=300&h=200&fit=crop" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const calculateTotalPrice = () => {
    const sizePrice = sizes.find(s => s.name === selectedSize)?.price || 0;
    const extrasPrice = selectedExtras.reduce((total, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
    return (menuItem.price + sizePrice + extrasPrice) * quantity;
  };

  const handleExtraToggle = (extraId) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-7">
      <div className="container mx-auto px-4 py-4 max-w-lg sm:max-w-2xl lg:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative">
              <img 
                src={menuItem.images[currentImageIndex]} 
                alt={menuItem.name}
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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{menuItem.name}</h1>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{menuItem.description}</p>
            </div>

            {/* Rating and Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">{menuItem.rating}</span>
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
              <span className="text-2xl sm:text-3xl font-bold text-orange-500">${menuItem.price}</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">${menuItem.originalPrice}</span>
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
                <button className="cursor-pointer flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm sm:text-base">
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
            {[
              { key: 'description', label: 'Description' },
              { key: 'ingredients', label: 'Ingredients' },
              { key: 'nutrition', label: 'Nutrition' }
            ].map(tab => (
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
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{menuItem.longDescription}</p>
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
                  {menuItem.ingredients.map((ingredient, index) => (
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
                  {Object.entries(menuItem.nutritionalInfo).map(([key, value]) => (
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
            {relatedItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="h-32 sm:h-48">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-3">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold text-orange-500">${item.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;