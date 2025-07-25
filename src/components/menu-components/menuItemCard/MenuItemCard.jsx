import React from 'react'
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuItemCard = ({ items, addToCart }) => {

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {items.map(item => (
            <Link to={`/detail-page/${item.id}`} className="bg-gray-800 cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
            hover:-translate-y-1 border border-gray-700 overflow-hidden">
                <figure className="relative overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {item.popular && (
                    <div className="absolute top-3 left-3">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                    </div>
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {item.rating}
                    </div>
                </div>
                </figure>
                
                <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-bold text-white">{item.name}</h2>
                    <div className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs capitalize">
                    {item.category.name}
                    </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    ${item.price}
                    </div>
                    
                    <button 
                    className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 text-sm font-medium"
                    onClick={() => addToCart(item)}
                    >
                    <ShoppingCart className="w-4 h-4" />
                    Add
                    </button>
                </div>
                </div>
            </Link>
        ))}
  </div>
);
};

export default MenuItemCard